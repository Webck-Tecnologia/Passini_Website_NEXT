import Link from "next/link";
import styles from './Blog2.module.css';

const Blog2 = ({ posts }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'short' }).replace('.', '');
    const year = date.getFullYear();
    return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;
  };

  return (
    <>
      {posts.map((post, index) => (
        <div
          className="col-md-6"
          key={post.id}
          data-aos="fade-up"
          data-aos-delay={(index + 1) * 100}
        >
          <article className="blog-meta-three mb-60 lg-mb-40">
            <figure className="post-img m0">
              <Link href={`/blog/${post.slug}`} className="w-100 d-block">
                <img
                  src={`https://blog-websites.bchat.lat${post.cover?.formats?.small?.url}`}
                  alt={post.title}
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {formatDate(post.publishedAt)}
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-10 mb-15">
                <h4 className={`tran3s blog-title fw-normal tx-dark ${styles.blogTitle}`}>
                  {post.title}
                </h4>
              </Link>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  Leia Mais
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog2;
