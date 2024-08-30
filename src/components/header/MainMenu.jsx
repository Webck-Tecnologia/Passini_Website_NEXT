import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const MainMenu = () => {
  const [activeSection, setActiveSection] = useState("");
  const [recentPosts, setRecentPosts] = useState([]);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "Sobre" },
    { id: "services", name: "Serviços" },
    { id: "portfolio", name: "Portfólio" },
    { id: "contact", name: "Contato" }
  ];

  useEffect(() => {
    // Função para buscar os posts recentes
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/posts?_sort=date&_order=desc&_limit=3');
        if (!response.ok) {
          throw new Error('Falha ao buscar posts recentes');
        }
        const data = await response.json();
        setRecentPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts recentes:', error);
      }
    };

    fetchRecentPosts();

    const handleScroll = () => {
      if (!isBlogPage) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop - windowHeight / 2 && 
                scrollPosition < offsetTop + offsetHeight - windowHeight / 2) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPage]);

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {isBlogPage ? (
            <li className="nav-item">
              <RouterLink to="/" className="nav-link">
                Voltar
              </RouterLink>
            </li>
          ) : (
            sections.map((section) => (
              <li className="nav-item" key={section.id}>
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`nav-link ${activeSection === section.id ? "active" : ""}`}
                >
                  {section.name}
                </Link>
              </li>
            ))
          )}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <RouterLink to={`/blog/${post.id}`} className="dropdown-item">
                    {post.title}
                  </RouterLink>
                </li>
              ))}
              <li><hr className="dropdown-divider" /></li>
              <li>
                <RouterLink to="/blog" className="dropdown-item">
                  Ver todos os posts
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
