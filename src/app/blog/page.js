"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/app/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/app/components/ui/pagination"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card"
import { useBlog } from '@/app/contexts/BlogContext'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FeatherIcon, SearchIcon, FacebookIcon, InstagramIcon, TwitterIcon, ArrowRightIcon } from "./icons"

// Adicione esta constante no topo do arquivo, fora da função do componente
const socialIcons = [
  {
    iconClass: "fab fa-facebook-f",
    link: "https://web.facebook.com/p/Passini-Equipamentos-100069401389022/?locale=pt_BR&_rdc=1&_rdr",
  },
  {
    iconClass: "fab fa-youtube",
    link: "https://www.youtube.com/@CanalPassini",
  },
  {
    iconClass: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/company/passini-equipamentos/?originalSubdomain=br",
  },
  {
    iconClass: "fab fa-google",
    link: "https://www.google.com/search?q=passini+equipamentos&sca_esv=38f61a096ba32030&sca_upv=1&ei=zCR8ZoHSOKDB5OUP6OCGoAc&gs_ssp=eJzj4tVP1zc0TDNPKy7MNio3YLRSNaiwNElONU20TEpNSzQzMTI3tTKoMLE0MTVMS0tKTDRLSko0NvcSKUgsLs7My1RILSzNLEjMTc0ryS8GAGK0GDo&oq=passini+equ&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3Bhc3NpbmkgZXF1KgIIADILEC4YgAQYxwEYrwEyBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI_hpQkgdYnw9wA3gBkAEAmAG5AqABtxaqAQYyLTEwLjG4AQHIAQD4AQGYAg6gAvEWwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgIIEAAYgAQYsQPCAg4QLhiABBixAxiDARiKBcICDhAuGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAhEQLhiABBixAxjRAxiDARjHAcICBRAAGIAEwgIaEC4YgAQYsQMYgwEYlwUY3AQY3gQY4ATYAQHCAgoQABiABBhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCBAuGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQGYAwCIBgGQBgq6BgYIARABGBSSBwgzLjAuMTAuMaAH218&sclient=gws-wiz-serp",
  },
];

export default function Blog() {
  const { 
    blogPosts, 
    categories, 
    loading, 
    error, 
    setSelectedCategory, 
    setCurrentPage,
    pageCount,
    currentPage,
  } = useBlog()

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length > 2) {
      const results = blogPosts.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.description.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  }
  const countPostsByCategory = (posts, categories) => {
    const counts = {};
    categories.forEach(category => {
      counts[category.id] = posts.filter(post => post.category?.id === category.id).length;
    });
    return counts;
  };
  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>

  const postCounts = countPostsByCategory(blogPosts, categories);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background px-4 py-3 border-b sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <FeatherIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Blog Passini</span>
          </Link>
          <div className="relative" ref={searchRef}>
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8">
                <SearchIcon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <Input 
                      type="search" 
                      placeholder="Buscar..." 
                      className="w-64 py-1.5 px-4 rounded-md border" 
                      value={searchTerm}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </div>
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md mt-1 rounded-md max-h-80 overflow-y-auto z-20">
                {searchResults.map(post => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-center p-2 hover:bg-gray-100">
                    <img
                      src={`https://blog-websites.bchat.lat${post.cover.formats.thumbnail.url}`}
                      alt={post.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded-md mr-3"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(post.publishedAt), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="container mx-auto flex-1 py-8 grid md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-8">
          {blogPosts && blogPosts.length > 0 ? (
            <>
              <article className="bg-background rounded-lg overflow-hidden shadow-md">
                <Link href={`/blog/${blogPosts[0].slug}`} className="block relative group" prefetch={false}>
                  <img
                    src={`https://blog-websites.bchat.lat${blogPosts[0].cover.formats.medium.url}`}
                    alt={blogPosts[0].title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover transition-all group-hover:scale-105"
                    style={{ aspectRatio: "800/400", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white">{blogPosts[0].title}</h2>
                    <p className="text-sm text-gray-300">{blogPosts[0].description}</p>
                  </div>
                </Link>
              </article>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.slice(1).map((post) => (
                  <article key={post.id} className="bg-background rounded-lg overflow-hidden shadow-md">
                    <Link href={`/blog/${post.slug}`} className="block relative group" prefetch={false}>
                      <img
                        src={`https://blog-websites.bchat.lat${post.cover.formats.small.url}`}
                        alt={post.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover transition-all group-hover:scale-105"
                        style={{ aspectRatio: "400/200", objectFit: "cover" }}
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {post.description}
                        </p>
                        <div className="mt-2 flex justify-between items-center">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-2 text-black text-bold"
                            prefetch={false}
                          >
                            Ler mais
                            <ArrowRightIcon className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
          {pageCount > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  {[...Array(pageCount)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                      disabled={currentPage === pageCount}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Categorias Populares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {categories && categories.length > 0 ? categories.map(category => (
                  <Link 
                    key={category.id} 
                    href={`/blog/category/${category.slug}`} 
                    className="flex items-center justify-between text-sm hover:underline" 
                    prefetch={false}
                  >
                    <span>{category.name}</span>
                    <span className="text-muted-foreground">{postCounts[category.id] || 0}</span>
                  </Link>
                )) : <p>Nenhuma categoria encontrada</p>}
              </div>
            </CardContent>
          </Card>
          <Card>
              <CardHeader className="pb-4">
                <h3 className="text-lg font-semibold">Posts Recentes</h3>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-4 items-start" prefetch={false}>
                      <img
                        src={`https://blog-websites.bchat.lat${post.cover.formats.thumbnail.url}`}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-md"
                        style={{ aspectRatio: "80/80", objectFit: "cover" }}
                      />
                      <div>
                        <h4 className="text-sm font-semibold hover:underline line-clamp-3">{post.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(post.publishedAt), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>   
        </aside>
      </main>
      <footer className="bg-background border-t py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialIcons.map((icon, index) => (
              <Link 
                key={index} 
                href={icon.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary"
              >
                <i className={`${icon.iconClass} w-5 h-5`}></i>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </footer>
    </div>
  )
}