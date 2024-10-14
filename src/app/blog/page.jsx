"use client";

import { Suspense } from 'react';
import DefaulHeader from "@/app/components/header/Header";
import DefaultFooter from "@/app/components/Footer/DefaultFooter";
import Blog2 from "./Blog2";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import Category from "./Category";
import RecentPost from "./RecentPost";
import BannerPost from "./BannerPost";
import "../styles/index.scss";
import { fetchBlogPostsAndCategories } from './fetchData';  // Importa a função que busca os dados no servidor

const POSTS_PER_PAGE = 6;

export default async function BlogPage() {
  // Faz a busca de dados no servidor
  const { blogPosts, categories } = await fetchBlogPostsAndCategories();

  return (
    <>
      <DefaulHeader />
      <Suspense fallback={<div>Carregando...</div>}>
        <div className="fancy-feature-fiftyOne position-relative mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-7" data-aos="fade-right">
                <div className="title-style-five mb-65 lg-mb-40">
                  <div className="sc-title-two fst-italic position-relative">
                    Blog
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    Confira nosso blog.
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
                      <Blog2 posts={blogPosts.slice(0, POSTS_PER_PAGE)} />
                    </div>
                  </div>
                  <div className="page-pagination-one pt-15">
                    <Pagination 
                      currentPage={1}
                      totalPages={Math.ceil(blogPosts.length / POSTS_PER_PAGE)}
                      onPageChange={() => {}}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-8">
                  <div className="blog-sidebar md-mt-70">
                    <div className="blog-sidebar-search mb-55 md-mb-40">
                      <SearchBox posts={blogPosts} />
                    </div>

                    <div className="blog-sidebar-category mb-60 md-mb-50">
                      <h4 className="sidebar-title">Categoria</h4>
                      <Category categories={categories} />
                    </div>

                    <div className="sidebar-recent-news mb-60 md-mb-50">
                      <h4 className="sidebar-title">Notícias Recentes</h4>
                      <RecentPost posts={blogPosts.slice(1)} />
                    </div>

                    <BannerPost post={blogPosts[0]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      <DefaultFooter />
    </>
  );
}
