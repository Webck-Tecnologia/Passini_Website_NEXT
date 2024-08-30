import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ pageTitle, description, keywords, ogImage }) => (
  <HelmetProvider>
    <Helmet>
      <title>{pageTitle && `${pageTitle} || Passini Equipamentos`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  </HelmetProvider>
);

export default Seo;
