import { useEffect, useState } from 'react';


const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  // Função para buscar os dados da API
  const fetchBlogData = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error('Erro ao buscar dados do blog:', error);
    }
  };

  // Buscar dados quando o componente for montado
  useEffect(() => {
    fetchBlogData();
  }, []);

  // Ordenar blogData por ID em ordem decrescente
  const sortedBlogData = blogData.sort((a, b) => b.id - a.id);

  return (
    <div className="row">
      {sortedBlogData.slice(0, 2).map((item) => (
        <div
          className="col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={(item.id % 2 + 1) * 100} // Ajustado para garantir delay único
          key={item.id} // Alterado para `item.id` em vez de `index`
        >
          <article
            className="blog-meta-six d-flex flex-column position-relative zn2 mt-40"
            style={{ backgroundImage: `url(${item.imageSrc})` }}
          >
            <div className="post-data position-relative d-flex flex-column h-100">
              <div className="blog-header">
                <div>
                  <a
                    href={`/blog/${item.id}`}
                    className="tag text-uppercase fw-500 tran3s mb-20"
                  >
                    {item.tag}
                  </a>
                </div>
                <a href={`/blog/${item.id}`}>
                  <h4 className="tran3s blog-title">{item.title}</h4>
                </a>
              </div>
              {/* /.blog-header */}
              <div className="blog-footer d-flex align-items-center justify-content-between mt-auto">
                <div className="blog-date tran3s fw-500 tx-dark">
                  <a href="#" className="fw-normal tran3s">
                    {item.date}
                  </a>
                </div>
                <a href={`/blog/${item.id}`} className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Blog;
