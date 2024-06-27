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
      {children}
    </div>
  );
}
