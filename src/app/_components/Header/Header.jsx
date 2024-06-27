"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header3 = () => {
  const [navbar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Mostrar a navbar com um pequeno atraso para suavizar a transição
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNavbar(navbar);
    }, 200); // Ajuste este valor conforme necessário para uma transição suave
    return () => clearTimeout(timeout);
  }, [navbar]);

  const isActive = (link) => {
    if (link === "/") {
      return pathname === "/" || pathname === "/home"; // Considera tanto "/" quanto "/home" como ativos
    }
    if (link === "/servico") {
      return pathname.startsWith("/servico") || pathname.startsWith("/detalhes_do_servico");
    }
    if (link === "/blog") {
      return pathname.startsWith("/blog");
    }
    return pathname.startsWith(link); // Verifica se o pathname começa com o link fornecido
  };

  // Defina as rotas que precisam de uma header fixa
  const fixedHeaderPaths = [
    "/contato", 
    "/servico", 
    "/empresa", 
    "/blog", 
    "/detalhes_do_servico/grua-sl", 
    "/detalhes_do_servico/elevadores", 
    "/detalhes_do_servico/projetos-especiais"
  ];

  const isFixedHeader = fixedHeaderPaths.some((path) => pathname.startsWith(path));

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-nine ${
        showNavbar || isFixedHeader ? "fixed bg-white slide-down" : navbar ? "slide-up" : ""
      } ${showNavbar || isFixedHeader ? "" : "dp-none"}`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="logo order-lg-0">
              <Image
                src="/images/logo/PASSINI_LOGO43.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          {/* End logo */}

          <nav className="navbar navbar-expand-lg">            
            <div className="navbar-collapse" id="navbarNav">
              {/* Menu simplificado para dispositivos móveis */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${isActive("/") ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/blog"
                    className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contato"
                    className={`nav-link ${
                      isActive("/contato") ? "active" : ""
                    }`}
                  >
                    Contato
                  </Link>
                </li>
              </ul>

              {/* Menu completo para dispositivos desktop */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${isActive("/") ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/servico"
                    className={`nav-link ${
                      isActive("/servico") ? "active" : ""
                    }`}
                  >
                    Serviços
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/empresa"
                    className={`nav-link ${
                      isActive("/empresa") ? "active" : ""
                    }`}
                  >
                    Empresa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/blog"
                    className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contato"
                    className={`nav-link ${
                      isActive("/contato") ? "active" : ""
                    }`}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="right-widget d-flex align-items-center order-lg-3 ms-xxl-5 ms-lg-3">
            <Link
              href="/login"
              className="login-btn-two fw-500 d-none d-lg-flex align-items-center me-4"
            >
              <span></span>
            </Link>
            <Link
              href="/signup"
              className="signup-btn-three fw-500 tran3s d-none d-lg-block"
            ></Link>
          </div>
          {/* /.right-widget */}
        </div>
      </div>
      {/* /.inner-content */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0%);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(0%);
          }
          to {
            transform: translateY(-100%);
          }
        }

        .theme-main-menu {
          opacity: ${showNavbar || isFixedHeader ? 1 : 0};
          visibility: ${showNavbar || isFixedHeader ? "visible" : "hidden"};
          transition: opacity 0.5s ease, visibility 0.5s ease;
          position: ${showNavbar || isFixedHeader ? "fixed" : "relative"};
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background-color: ${showNavbar || isFixedHeader ? "white" : "transparent"};
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }

        .slide-down {
          animation-name: slideDown;
        }

        .slide-up {
          animation-name: slideUp;
        }

        .theme-main-menu.dp-none {
          display: none;
        }

        .theme-main-menu .nav-link {
          color: ${showNavbar || isFixedHeader ? "black" : "white"};
          transition: color 0.3s;
          font-size: 14px; // Tamanho da fonte reduzido para todos os links
        }
      `}</style>
    </header>
  );
};

export default Header3;
