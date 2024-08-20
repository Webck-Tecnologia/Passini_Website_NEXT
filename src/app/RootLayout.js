"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="root-layout">
      <link rel="preload" href="/fonts/your-main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/icon/icon_114.svg" as="image" />
      {children}
    </div>
  );
}