import { getServerSideSitemap } from 'next-sitemap';
import { getServices } from '../../lib/services';
import { getBlogPosts } from '../../lib/blog';

export const getServerSideProps = async (ctx) => {
  const services = await getServices();
  const blogPosts = await getBlogPosts();

  const fields = [
    ...services.map((service) => ({
      loc: `https://passini.com.br/detalhes-do-servico/${service.id}`,
      lastmod: new Date().toISOString(),
    })),
    ...blogPosts.map((post) => ({
      loc: `https://passini.com.br/blog/${post.id}`,
      lastmod: new Date(post.date).toISOString(),
    })),
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}