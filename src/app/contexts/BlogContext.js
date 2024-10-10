"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import fetchBlogPosts from '@/lib/fetchBlogPosts';
import fetchCategories from '@/lib/fetchCategories';

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const postsData = await fetchBlogPosts();
        const categoriesData = await fetchCategories();
        
        console.log('Posts data:', postsData);
        console.log('Categories data:', categoriesData);

        if (Array.isArray(postsData)) {
          setBlogPosts(postsData);
        } else if (postsData && Array.isArray(postsData.data)) {
          setBlogPosts(postsData.data);
        }
        
        if (Array.isArray(categoriesData)) {
          setCategories(categoriesData);
        } else if (categoriesData && Array.isArray(categoriesData.data)) {
          setCategories(categoriesData.data);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
        setError(err.message);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredPosts = blogPosts
    .filter(post => !selectedCategory || post.category?.id === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const pageCount = Math.ceil(filteredPosts.length / 15);

  const paginatedPosts = filteredPosts.slice((currentPage - 1) * 15, currentPage * 15);

  return (
    <BlogContext.Provider value={{ 
      blogPosts: paginatedPosts, 
      categories, 
      loading, 
      error, 
      setSelectedCategory, 
      setSearchTerm,
      setCurrentPage,
      pageCount,
      currentPage,
      searchTerm
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}