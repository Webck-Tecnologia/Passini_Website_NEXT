import Header3 from "@/components/header/Header3";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const education = () => {
  return (
    <>
      <Header3 />
    </>
  );
};

export default education;
