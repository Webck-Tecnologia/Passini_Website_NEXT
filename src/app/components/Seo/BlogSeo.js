import Head from 'next/head';
import config from '../../../config';

const BlogSeo = ({ post }) => {
  const baseUrl = config.stripe_api_url || '';
  const imageUrl = post.thumbnail?.formats?.small?.url || post.image?.formats?.small?.url;
  const fullImageUrl = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`) : '';

  return (
    <Head>
      <title>{`${post.title} | Blog Passini Equipamentos`}</title>
      <meta name="description" content={post.description} />
      <meta name="keywords" content={post.keywords || 'gruas, equipamentos de construção, Passini'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={`${baseUrl}/blog/${post.slug}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Artigo estruturado */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": fullImageUrl,
          "author": {
            "@type": "Organization",
            "name": "Passini Equipamentos"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Passini Equipamentos",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": post.publishedAt,
          "dateModified": post.updatedAt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${post.slug}`
          },
          "description": post.description
        })}
      </script>
    </Head>
  );
};

export default BlogSeo;