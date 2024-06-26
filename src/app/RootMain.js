"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";

export default function RootMain({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
  );
}
