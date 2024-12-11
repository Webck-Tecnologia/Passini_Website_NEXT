import { fetchBlogPosts } from '@/app/lib/fetchBlogPosts';

export default async function sitemap() {
  const baseUrl = 'https://passiniequipamentos.com.br/';

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

  let blogUrls = [];
  try {
    const blogPosts = await fetchBlogPosts();
    blogUrls = blogPosts.data.map((post) => ({
      url: `${baseUrl}/blog/${post.attributes.slug}`,
      lastModified: post.attributes.updatedAt,
    }));
  } catch (error) {
    console.error('Erro ao buscar posts do blog:', error);
  }

  return [...staticPages, ...blogUrls];
}
