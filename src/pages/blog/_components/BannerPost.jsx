import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BannerPost = () => {
  const [bannerPost, setBannerPost] = useState(null);

  useEffect(() => {
    const fetchBannerPost = async () => {
      try {
        const res = await fetch('/content/blog.json');
        if (!res.ok) throw new Error('Failed to fetch blog data');
        const blogData = await res.json();

        // Encontrar o post de banner
        const banner = blogData.find(post => post.banner);
        setBannerPost(banner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBannerPost();
  }, []);

  if (!bannerPost) {
    return null; // Não renderiza nada se não houver banner
  }

  return (
    <div
      className="sidebar-banner-add"
      style={{ backgroundImage: `url(${bannerPost.imageSrc})` }}
    >
      <div className="banner-content">
        <h4>{bannerPost.title}</h4>
        <p>{bannerPost.date}</p>
        <Link to={`/blog/${bannerPost.id}`} className="btn-twentyOne fw-500 tran3s">
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default BannerPost;
