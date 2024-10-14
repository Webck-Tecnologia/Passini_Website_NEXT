import Link from "next/link";

const BannerPost = ({ post }) => {
  if (!post) return null;

  return (
    <div
      className="sidebar-banner-add"
      style={{ backgroundImage: `url(https://blog-websites.bchat.lat${post.cover?.formats?.medium?.url})` }}
    >
      <div className="banner-content">
        <h4>{post.title}</h4>
        <p>{post.description.slice(0, 50)}...</p>
        <Link href={`/blog/${post.slug}`} className="btn-twentyOne fw-500 tran3s">
          Leia Mais
        </Link>
      </div>
    </div>
  );
};

export default BannerPost;
