import Head from 'next/head';

const SEO = ({ title, description, canonical }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Head>
);

export default SEO;
