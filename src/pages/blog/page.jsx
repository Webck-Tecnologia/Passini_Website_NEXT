import { useState } from 'react';
import Seo from "@/components/common/Seo";
import Pagination from "./_components/Pagination";
import Category from "./_components/Category";
import RecentPost from "./_components/RecentPost";
import BannerPost from "./_components/BannerPost";
import Blog2 from "./_components/Blog2";
import Header3 from "@/components/header/Header3";
import Inferior from "@/pages";

const GridWithSidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Passini Equipamentos",
    "description": "Novidades e atualizações sobre equipamentos industriais",
    "url": "https://www.passiniequipamentos.com/blog"
  };

  return (
      <>
        <Seo 
        pageTitle="Blog - Passini Equipamentos"
        description="Confira as últimas novidades e atualizações sobre equipamentos industriais no blog da Passini Equipamentos."
        keywords="blog, equipamentos industriais, Passini, novidades, atualizações"
        ogImage="/images/og-image-blog.jpg"
        />
        <Header3 />

        <div className="fancy-feature-fiftyOne position-relative mt-200">
          <div className="container">
            <div className="row">
              <div className="col-lg-7" data-aos="fade-right">
                <div className="title-style-five mb-65 lg-mb-40">
                  <h1 className="main-title fw-500 tx-dark">Blog - Novidades e Atualizações</h1>
                  <h2 className="sc-title-two fst-italic position-relative">
                    Blog
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-section-five mt-70 lg-mt-30">
          <div className="container">
            <div className="border-bottom pb-130 lg-pb-60">
              <div className="row gx-xl-5">
                <div className="col-lg-8">
                  <div className="blog-meta-wrapper pe-xxl-5">
                    <div className="row">
                      <Blog2 activeCategory={activeCategory} /> {/* Passando activeCategory como propriedade para Blog2 */}
                    </div>
                  </div>
                  <div className="page-pagination-one pt-15">
                    <Pagination />
                  </div>
                </div>

                <div className="col-lg-4 col-md-8">
                  <div className="blog-sidebar md-mt-70">
                    <div className="blog-sidebar-category mb-60 md-mb-50">
                      <h4 className="sidebar-title">Categorias</h4>
                      <Category setActiveCategory={setActiveCategory} /> {/* Passando setActiveCategory como propriedade para Category */}
                    </div>

                    <div className="sidebar-recent-news mb-60 md-mb-50">
                      <h4 className="sidebar-title">Posts Recentes</h4>
                      <RecentPost />
                    </div>

                    <BannerPost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Inferior />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </>
  );
};

export default GridWithSidebar;
