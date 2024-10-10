"use client";

import Link from "next/link";
import { useBlog } from '@/app/contexts/BlogContext';
import Image from 'next/image';
import config from "../../../config";
import Head from 'next/head';

export default function BlogSection() {
  const { blogPosts, loading, error } = useBlog();
  const baseUrl = config.stripe_api_url || '';

  if (loading) return null;
  if (error) return null;
  if (!blogPosts || blogPosts.length === 0) return null;

  const recentPosts = blogPosts.slice(0, 3);

  const getImageUrl = (post) => {
    const imagePath = post.thumbnail?.formats?.small?.url || post.image?.formats?.small?.url || post.cover?.formats?.small?.url;
    if (!imagePath) return "/placeholder.svg";
    return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`;
  };

  console.log('Recent Posts:', recentPosts); // Para depuração

  return (
    <>
      <Head>
        <title>Blog - Passini Equipamentos</title>
        <meta name="description" content="Confira as últimas novidades e informações sobre gruas e equipamentos de construção no blog da Passini Equipamentos." />
        <meta property="og:title" content="Blog - Passini Equipamentos" />
        <meta property="og:description" content="Novidades e informações sobre gruas e equipamentos de construção." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${config.stripe_api_url}/blog`} />
      </Head>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nossas últimas postagens</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <div key={post.id} className="transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden rounded-lg" prefetch={false}>
                  <Image
                    src={getImageUrl(post)}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ aspectRatio: "500/300", objectFit: "cover" }}
                  />
                </Link>
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">
                    <Link href={`/blog/${post.slug}`} prefetch={false}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-4 text-sm font-medium transition-colors hover:text-primary"
                    prefetch={false}
                  >
                    Ler Mais
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}