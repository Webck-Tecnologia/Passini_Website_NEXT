"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const isHomePage = pathname === '/';

  const handleSmoothScroll = (e, id) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && isHomePage) {  
        const sections = ['home', 'sobre', 'servicos', 'faq', 'blog', 'portfolio', 'contato'];
        let current = '';

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = section;
              break;
            }
          }
        }

        setActiveSection(current);
      }
    };

    if (typeof window !== "undefined" && isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const isActive = (id) => activeSection === id;

  return (
    <nav className={`navbar navbar-expand-lg order-lg-2 ${styles.mainMenu}`}>
      <ul className={`navbar-nav ${styles.navItems}`}>
        {['home', 'sobre', 'serviços', 'faq', 'blog', 'portfólio', 'contato'].map((item) => (
          <li key={item} className={`nav-item ${styles.navItem}`}>
            <Link
              href={isHomePage ? `/#${item}` : `/${item === 'home' ? '' : item}`}
              className={`nav-link ${isActive(item) ? styles.active : ''}`}
              onClick={(e) => handleSmoothScroll(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
