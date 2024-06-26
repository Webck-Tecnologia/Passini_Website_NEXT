"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header5 = () => {
  const [navbar, setNavbar] = useState(false);

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

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-ten ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/">
              <Image
                src="/images/logo/PASSINI_LOGO43.png"
                alt="logo"
                width={93}
                height={30}
              />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center order-lg-3">
            <Link
              href="/blog"
              className="login-btn-four rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header5;
