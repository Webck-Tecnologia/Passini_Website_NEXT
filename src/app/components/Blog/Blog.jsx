"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import fetchBlogPosts from "@/app/lib/fetchBlogPosts"
import Head from 'next/head'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const response = await fetchBlogPosts()
        if (response && response.data) {
          setBlogPosts(response.data)
        } else {
          setBlogPosts([])
        }
      } catch (error) {
        console.error("Erro ao carregar posts do blog:", error)
        setBlogPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    loadBlogPosts()
  }, [])

  if (isLoading) {
    return <div aria-live="polite">Carregando posts sobre gruas e equipamentos de elevação...</div>
  }

  if (!blogPosts || blogPosts.length === 0) {
    return <div>Nenhum post sobre gruas e equipamentos de elevação encontrado.</div>
  }

  return (
    <section className="blog-section" aria-label="Blog posts sobre gruas e equipamentos de elevação">
      <div className="row">
        {blogPosts.slice(0, 2).map((post, index) => {
          const coverUrl = post?.cover?.formats?.small?.url
          const categoryName = post?.category?.name

          return (
            <div
              className="col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={post?.id}
            >
              <article
                className="blog-meta-six d-flex flex-column position-relative zn2 mt-40"
                style={coverUrl ? { backgroundImage: `url(https://blog-websites.bchat.lat${coverUrl})` } : {}}
              >
                <div className="post-data d-flex flex-column h-100">
                  <header className="blog-header">
                    <div className="px-4">
                      <Link
                        href={`/blog/${post?.slug || ''}`}
                        className="tag text-uppercase fw-500 tran3s mb-20"
                      >
                        {categoryName || "Gruas e Equipamentos de Elevação"}
                      </Link>
                    </div>
                    <h2 className="px-4">
                      <Link href={`/blog/${post?.slug || ''}`}>
                        <span className="tran3s blog-title">{post?.title || 'Informações sobre Gruas em São Paulo'}</span>
                      </Link>
                    </h2>
                  </header>
                  <footer className="blog-footer d-flex align-items-center justify-content-between mt-auto">
                    <div className="blog-date tran3s fw-500 tx-dark">
                      Publicado em -
                      <time dateTime={post?.publishedAt} className="fw-normal tran3s">
                        {post?.publishedAt 
                          ? new Date(post.publishedAt).toLocaleDateString("pt-BR")
                          : 'Data não disponível'}
                      </time>
                    </div>
                    <Link href={`/blog/${post?.slug || ''}`} className="read-more tran3s" aria-label="Leia mais sobre gruas e equipamentos de elevação">
                      <i className="bi bi-arrow-up-right" />
                    </Link>
                  </footer>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  );
};

const StructuredData = ({ post }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "Passini Equipamentos"
    },
    "description": post.description,
    "url": `https://www.passiniequipamentos.com.br/blog/${post.slug}`
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default Blog;
