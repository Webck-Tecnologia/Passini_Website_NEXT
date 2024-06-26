import React from 'react';
import blogData from '@/data/blog';

const BannerPost = () => {
  // Verifica se existe algum post marcado como banner
  const bannerPost = blogData.find(post => post.banner);

  if (!bannerPost) {
    return null; // Não renderiza nada se não houver banner
  }

  return (
    <div
      className="sidebar-banner-add"
      style={{ backgroundImage: `url(${bannerPost.imageSrc})` }}
    >
      <div className="banner-content">
        <h4>
          {bannerPost.title}
        </h4>
        <p>{bannerPost.date}</p>
        {/* Exemplo de link, substitua pela lógica adequada */}
        <a href={`/blog/${bannerPost.id}`} className="btn-twentyOne fw-500 tran3s">
          Ver mais
        </a>
      </div>
    </div>
  );
};

export default BannerPost;
