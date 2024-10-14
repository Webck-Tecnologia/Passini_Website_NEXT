import { fetchBlogPosts } from '@/app/lib/fetchBlogPosts';

export default async function sitemap() {
  const baseUrl = 'https://www.seusite.com.br';

  // Páginas estáticas
  const staticPages = [
    '',
    '/servicos',
    '/blog',
    '/contato',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Buscar posts do blog
  const blogPosts = await fetchBlogPosts();
  const blogUrls = blogPosts.data.map((post) => ({
    url: `${baseUrl}/blog/${post.attributes.slug}`,
    lastModified: post.attributes.updatedAt,
  }));

  return [...staticPages, ...blogUrls];
}