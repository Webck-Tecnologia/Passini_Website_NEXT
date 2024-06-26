import Link from 'next/link';
import blogData from '@/data/blog';
import Image from 'next/image';

const RecentPost = () => {
  // Ordena os posts por ID em ordem inversa
  const sortedPosts = blogData.slice().sort((a, b) => b.id - a.id);

  // Extraia as categorias únicas
  const categoriesSet = new Set();
  sortedPosts.forEach(post => {
    if (post.categoria) {
      categoriesSet.add(post.categoria);
    }
  });

  // Converta o conjunto para um array ordenado alfabeticamente
  const categories = Array.from(categoriesSet).sort();

  return (
    <>
      {sortedPosts.slice(0, 3).map(post => (
        <div
          className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom"
          key={post.id}
        >
          <div>
            <Image
              width={80}
              height={90}
              src={post.imageSrc}
              alt={post.title}
              className="lazy-img"
            />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <Link href={`/blog/${post.id}`} className="title tran3s">
                {post.title}
              </Link>
            </h4>
            <div className="date">{post.date}</div>
            {post.categoria && (
              <div className="categories">
                {categories.map((category, index) => (
                  <span key={index} className="category">
                    <Link href={`/category/${encodeURIComponent(category)}`}>
                      {category}
                    </Link>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
