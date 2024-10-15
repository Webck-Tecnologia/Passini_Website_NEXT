import Link from "next/link";

const Category = ({ categories }) => {
  // Filtra as categorias para incluir apenas aquelas com pelo menos um artigo
  const categoriesWithArticles = categories.filter(category => 
    category.articles && category.articles.length > 0
  );

  if (categoriesWithArticles.length === 0) {
    return null; // Não renderiza nada se não houver categorias com artigos
  }

  return (
    <ul className="style-none">
      {categoriesWithArticles.map((category) => (
        <li key={category.id}>
          <Link href="#">
            {category.name}
            <span className="float-end">({category.articles.length})</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Category;
