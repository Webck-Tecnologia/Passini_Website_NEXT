import Head from 'next/head';

const BlogSeo = ({ pageTitle, pageDescription }) => {
  const title = pageTitle ? `${pageTitle} | Gruas em São Paulo` : 'Gruas em São Paulo - Venda e Aluguel de Equipamentos de Elevação';
  const description = pageDescription || 'Informações sobre venda e aluguel de gruas em São Paulo. Encontre os melhores equipamentos de elevação para sua obra ou projeto.';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="grua, venda de grua, aluguel de grua, São Paulo, equipamentos de elevação" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <link rel="canonical" href="https://seusite.com.br/blog" />
    </Head>
  );
};

export default BlogSeo;
