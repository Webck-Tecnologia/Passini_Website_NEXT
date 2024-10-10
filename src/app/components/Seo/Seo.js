import Head from 'next/head';

const Seo = ({ 
  pageTitle, 
  description, 
  keywords, 
  ogImage, 
  canonicalUrl, 
  publishedTime, 
  updatedTime, 
  authorName 
}) => (
  <Head>
    {/* Título da página */}
    <title>{pageTitle ? `${pageTitle} || Aluguel e Venda de Gruas em São Paulo - Passini Equipamentos` : "Aluguel e Venda de Gruas em São Paulo - Passini Equipamentos"}</title>

    {/* Meta tags essenciais */}
    <meta name="description" content={description || "Aluguel e venda de gruas em São Paulo com a Passini Equipamentos. Especialistas em gruas para construção civil. Ligue e faça um orçamento!"} />
    <meta name="keywords" content={keywords || "aluguel de gruas, venda de gruas, gruas São Paulo, equipamentos de construção, aluguel de gruas em SP, venda de gruas em São Paulo, Passini Equipamentos"} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Canonical URL */}
    <link rel="canonical" href={canonicalUrl} />

    {/* Open Graph */}
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    {/* SEO Local */}
    <meta name="geo.region" content="BR-SP" />
    <meta name="geo.placename" content="São Paulo, Brasil" />
    <meta name="geo.position" content="-23.55052;-46.633308" />
    <meta name="ICBM" content="-23.55052, -46.633308" />

    {/* Publicação e Autor */}
    {publishedTime && <meta property="article:published_time" content={publishedTime} />}
    {updatedTime && <meta property="article:modified_time" content={updatedTime} />}
    {authorName && <meta property="article:author" content={authorName} />}

    {/* JSON-LD para SEO Avançado e SEO Local */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Passini Equipamentos",
          "description": "Aluguel e venda de gruas em São Paulo.",
          "image": ogImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. São Marcos, 1725 - Distrito Industrial/ Araraçariguama",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "18147-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-23.55052",
            "longitude": "-46.633308"
          },
          "url": canonicalUrl,
          "telephone": "(11) 94791-0983",
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$$",
          "services": [
            {
              "@type": "Service",
              "name": "Aluguel de Gruas",
              "description": "Serviço de aluguel de gruas para construção civil em São Paulo."
            },
            {
              "@type": "Service",
              "name": "Venda de Gruas",
              "description": "Venda de gruas novas e usadas para construção civil em São Paulo."
            }
          ]
        })
      }}
    />
  </Head>
);

export default Seo;
