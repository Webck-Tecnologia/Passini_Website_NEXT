"use client"

import "../../styles/index.scss";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/app/components/seo/BlogSeo";
import DefaulHeader from "@/app/components/header/Header";
import DefaultFooter from "@/app/components/Footer/DefaultFooter";
import SearchBox from "@/app/blog/SearchBox";
import Category from "@/app/blog/Category";
import RecentPost from "@/app/blog/RecentPost";
import BannerPost from "@/app/blog/BannerPost";
import fetchBlogPosts from "@/app/lib/fetchBlogPosts";
import fetchCategories from "@/app/lib/fetchCategories";
import BlogContent from "./BlogContent";

const DynamicBlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          fetchBlogPosts(),
          fetchCategories()
        ]);
        
        if (postsResponse && postsResponse.data) {
          const currentBlog = postsResponse.data.find(post => post.slug === slug);
          setBlog(currentBlog);
          setRecentPosts(postsResponse.data.slice(0, 3));
        }

        if (categoriesResponse) {
          setCategories(categoriesResponse);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [slug]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!blog) {
    return <div>Post não encontrado</div>;
  }

  return (
    <>
      <Seo pageTitle={blog.title} />
      <DefaulHeader />

      <div className="fancy-feature-fiftyOne position-relative mt-50 lg-mt-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-9" data-aos="fade-right">
              <p className="blog-pubish-date">
                {blog.category?.name} . {new Date(blog.publishedAt).toLocaleDateString()} . Por - 
                <a href="#" className="fw-500">
                  {blog.author?.name || "Autor Desconhecido"}
                </a>
              </p>
              <h2 className="blog-heading-one tx-dark">{blog.title}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-details-one mt-80 lg-mt-60">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <article className="blog-details-content">
                    {blog.cover && (
                      <Image
                        src={`https://blog-websites.bchat.lat${blog.cover.url}`}
                        alt={blog.title}
                        width={800}
                        height={400}
                        className="lazy-img image-meta w-100"
                      />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                    </div>
                  </article>
                  <BlogContent blog={blog} />
                </div>
              </div>

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox posts={recentPosts} />
                  </div>

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Categoria</h4>
                    <Category categories={categories} />
                  </div>

                  <div className="sidebar-recent-news mb-60 md-mb-50">
                    <h4 className="sidebar-title">Notícias Recentes</h4>
                    <RecentPost posts={recentPosts} />
                  </div>

                  <BannerPost post={recentPosts[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default DynamicBlogDetails;
