'use client'

import { useEffect, useState } from 'react';
import blogPosts from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';

const Blog2 = ({ activeCategory }) => {
  // Estado para armazenar os posts filtrados pela categoria
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Atualiza os posts filtrados sempre que a categoria ativa mudar
  useEffect(() => {
    if (activeCategory) {
      const filtered = blogPosts.filter(post => post.categoria === activeCategory);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(blogPosts); // Se nenhuma categoria ativa, exibe todos os posts
    }
  }, [activeCategory]);

  return (
    <div className="row">
      {filteredPosts.slice(0, 4).map((post) => (
        <div
          className="col-md-6"
          key={post.id}
          data-aos="fade-up"
          data-aos-delay={post.delay}
        >
          <article className="blog-meta-three mb-60 lg-mb-40">
            <figure className="post-img m0">
              <Link href={`/blog/${post.id}`} className="w-100 d-block">
                <Image
                  width={380}
                  height={280}
                  src={post.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link href={`/blog/${post.id}`} className="mt-10 mb-15">
                <h4 className="tran3s blog-title fw-normal tx-dark">
                  {post.title}
                </h4>
              </Link>
              <div>
                <Link
                  href={`/blog/${post.id}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  Ler Mais
                </Link>
              </div>
            </div>
          </article>
          {/* /.blog-meta-three */}
        </div>
      ))}
    </div>
  );
};

export default Blog2;
