import { useState } from 'react';
import blogPosts from '@/data/blog';

const Category = ({ setActiveCategory }) => {
  const [localActiveCategory, setLocalActiveCategory] = useState(null);

  const categoriesMap = blogPosts.reduce((acc, current) => {
    if (current.categoria) {
      if (!acc[current.categoria]) {
        acc[current.categoria] = 0;
      }
      acc[current.categoria]++;
    }
    return acc;
  }, {});

  const categories = Object.keys(categoriesMap).map(category => ({
    name: category,
    count: categoriesMap[category]
  }));

  const filterByCategory = (category) => {
    if (localActiveCategory === category) {
      // Se clicar novamente na mesma categoria, desativa ela
      setLocalActiveCategory(null);
      setActiveCategory(null); // Limpa a categoria ativa no componente pai, se necessário
    } else {
      setLocalActiveCategory(category);
      setActiveCategory(category); // Atualiza a categoria ativa no componente pai
    }
  };

  return (
    <ul className="style-none">
      {categories.map((category, index) => (
        <li key={index} className={category.name === localActiveCategory ? 'ativo' : ''}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              filterByCategory(category.name);
            }}
            className={category.name === localActiveCategory ? 'ativo' : ''}
          >
            {category.name}
            <span className="float-end">{`(${category.count})`}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Category;
