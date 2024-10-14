import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./SearchBox.module.css"; // Assumindo que você está usando CSS modules
import Image from "next/image";


const SearchBox = ({ posts }) => {
  const [query, setQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const results = posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(results.slice(0, 5)); // Limita a 5 resultados
    } else {
      setFilteredPosts([]);
    }
  }, [query, posts]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={query}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} disabled>
          <i className="bi bi-search" />
        </button>
      </form>
      {filteredPosts.length > 0 && (
        <div className={styles.searchResults}>
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className={styles.searchResultItem}>
              <div className={styles.searchResultImage}>
                <img 
                  src={`https://blog-websites.bchat.lat${post.cover?.formats?.thumbnail?.url}`} 
                  alt={post.title} 
                />
              </div>
              <div className={styles.searchResultContent}>
                <h4>{post.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
