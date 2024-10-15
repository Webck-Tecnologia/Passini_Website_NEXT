"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo/passini-logo.png";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');
  const isBlogPostPage = pathname.startsWith('/blog/') && pathname !== '/blog';
  const isServicosPage = pathname.startsWith('/servicos');

  const changeBackground = () => {
    if (isHomePage) {
      if (window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    changeBackground();
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderNavButtons = () => {
    if (isBlogPage) {
      return (
        <div className="d-flex flex-column flex-lg-row">
          <Link href="/" className="btn btn-primary me-lg-2 mb-2 mb-lg-0">Voltar para Home</Link>
          {isBlogPostPage && (
            <Link href="/blog" className="btn btn-secondary">Ver Todos os Posts</Link>
          )}
        </div>
      );
    } else if (isServicosPage) {
      return (
        <div className="d-flex flex-column flex-lg-row">
          <Link href="/" className="btn btn-primary me-lg-2 mb-2 mb-lg-0">Voltar para Home</Link>
          <Link href="/blog" className="btn btn-secondary">Ir para o Blog</Link>
        </div>
      );
    } else {
      return <MainMenu />;
    }
  };

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${navbar ? "fixed" : ""} ${styles.header}`}
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: navbar ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: "#fff"
      }}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image src={logo} alt="logo" width={90} height={40} />
            </Link>
          </div>
          
          <div className={`ms-auto d-lg-none ${styles.mobileMenuToggle}`}>  
            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className={`${styles.menuWrapper} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            {renderNavButtons()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
