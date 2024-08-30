import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import "./header.css";

const Header3 = () => {
  const [navbar, setNavbar] = useState(true);
  const [navbarState, setNavbarState] = useState("hidden");
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  const handleScroll = () => {
    if (isBlogPage) {
      setNavbarState("visible");
    } else {
      if (window.scrollY === 0) {
        setNavbarState("hiding");
        setTimeout(() => setNavbarState("hidden"), 300); // Tempo da animação
      } else if (navbarState === "hidden") {
        setNavbarState("showing");
        setTimeout(() => setNavbarState("visible"), 10); // Pequeno delay para iniciar a animação
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Define o estado inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarState, isBlogPage]);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-nine ${
        navbar ? "fixed" : ""
      } navbar-${navbarState}`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="logo order-lg-0">
              <img src="/images/logo/passini-logo.png" alt="logo3" />
            </Link>
          </div>
          <div className="menu-containerp5">
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header3;
