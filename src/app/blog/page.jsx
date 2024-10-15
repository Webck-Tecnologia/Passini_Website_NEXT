"use client"; // Adicione esta linha no topo

import { useState, useEffect } from 'react';
import DefaulHeader from "@/app/components/header/Header";
import DefaultFooter from "@/app/components/Footer/DefaultFooter";
import Blog2 from "./Blog2";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import Category from "./Category";
import RecentPost from "./RecentPost";
import BannerPost from "./BannerPost";
import "../styles/index.scss";
import { fetchBlogPostsAndCategories } from './fetchData';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const { blogPosts, categories } = await fetchBlogPostsAndCategories();
        setBlogPosts(blogPosts);
        setCategories(categories);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.attributes.category.data.id === selectedCategory)
    : blogPosts;

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <DefaulHeader />
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

        <div className="blog-section-five mt-70 lg-mt-30">
          <div className="container">
            <div className="border-bottom pb-130 lg-pb-60">
              <div className="row gx-xl-5">
                <div className="col-lg-8">
                  <div className="blog-meta-wrapper pe-xxl-5">
                    <div className="row">
                      <Blog2 posts={currentPosts} />
                    </div>
                  </div>
                  <div className="page-pagination-one pt-15">
                    <Pagination 
                      currentPage={currentPage}
                      totalPages={Math.ceil(filteredPosts.length / POSTS_PER_PAGE)}
                      onPageChange={handlePageChange}
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
                      <Category 
                        categories={categories}
                        onCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                      />
                    </div>

                    <div className="sidebar-recent-news mb-60 md-mb-50">
                      <h4 className="sidebar-title">Notícias Recentes</h4>
                      <RecentPost posts={blogPosts.slice(0, 5)} />
                    </div>

                    {blogPosts.length > 0 && <BannerPost post={blogPosts[0]} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
