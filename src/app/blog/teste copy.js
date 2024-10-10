<Link href="/blog" prefetch={false}>
<Button variant="outline">Voltar para o Blog</Button>
</Link>


"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar"
import { Separator } from "@/app/components/ui/separator"
import { useBlog } from '@/app/contexts/BlogContext'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FeatherIcon, ShareIcon, FacebookIcon, TwitterIcon, LinkedinIcon, UserIcon, CalendarDaysIcon } from "../icons"

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

export default function BlogPost({ params }) {
  const { blogPosts, loading, error } = useBlog()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (blogPosts) {
      const currentPost = blogPosts.find(p => p.slug === params.slug)
      setPost(currentPost)
    }
  }, [blogPosts, params.slug])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>
  if (!post) return <div>Post não encontrado</div>

  const renderBlock = (block, index) => {
    switch (block.__component) {
      case 'shared.quote':
        return (
          <blockquote key={block.id} className="border-l-4 border-primary pl-4 my-4">
            <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
            <p>{block.body}</p>
          </blockquote>
        );
      case 'shared.media':
        if (index === Math.floor(post.blocks.length / 2)) {
          return (
            <figure key={block.id} className="mx-auto w-full max-w-2xl my-8">
              <Image
                src={`https://blog-websites.bchat.lat${post.cover.formats.medium.url}`}
                alt={post.title}
                width={800}
                height={450}
                className="aspect-video rounded-md object-cover"
              />
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                {post.title}
              </figcaption>
            </figure>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative h-[60vh] overflow-hidden">
        <Image
          src={`https://blog-websites.bchat.lat${post.cover.formats.large.url}`}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
          <div className="space-y-4 bg-black/50 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white shadow-text">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-white">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="/placeholder-user.jpg" alt={post.author?.name} />
                  <AvatarFallback>{post.author?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author?.name}</span>
              </div>
              <Separator orientation="vertical" className="bg-white/50 h-6" />
              <span className="bg-black/30 px-3 py-1 rounded-full">
                {format(new Date(post.publishedAt), 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}
              </span>
            </div>
          </div>
        </div>
      </header>
      <header className="bg-background px-4 py-3 border-b sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <FeatherIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Blog Passini</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm hover:text-primary transition-colors" prefetch={false}>
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors" prefetch={false}>
              Sobre
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors" prefetch={false}>
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">{post.description}</p>
          {post.blocks && post.blocks.map(renderBlock)}
        </article>
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <ShareIcon className="w-5 h-5" />
              <span className="sr-only">Compartilhar</span>
            </Button>
            <Button variant="ghost" size="icon">
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Compartilhar no Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <FacebookIcon className="w-5 h-5" />
              <span className="sr-only">Compartilhar no Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">Compartilhar no LinkedIn</span>
            </Button>
          </div>
          <Link href="/blog" prefetch={false}>
            <Button variant="outline">Voltar para o Blog</Button>
          </Link>
        </div>
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
              >
                <i className={`${icon.iconClass} text-xl`} />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

// Adicione este estilo global no seu arquivo de estilos CSS ou no componente se estiver usando CSS-in-JS
`
.shadow-text {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
`