"use client";

import Link from "next/link";

const RecentPost = ({ posts }) => {
  // Função para formatar a data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '');
    const year = date.getFullYear();
    return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;
  };

  return (
    <>
      {posts.slice(0, 3).map((post) => (
        <div
          className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom"
          key={post.id}
        >
          <div>
            <img src={`https://blog-websites.bchat.lat${post.cover?.formats?.thumbnail?.url}`} alt={post.title} className="lazy-img" />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <Link href={`/blog/${post.slug}`} className="title tran3s">
                {post.title}
              </Link>
            </h4>
            <div className="date">{formatDate(post.publishedAt)}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
