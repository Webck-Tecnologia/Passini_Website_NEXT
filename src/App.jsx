import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./styles/index.scss";
import "./styles/shadcn-ui.css";
import ScrollToTop from "./components/common/ScrollTop";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from "react-router-dom";
import RealEstate from "./pages/home/real-estate";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import Blog from "./pages/blog/[id]/page";
import GridWithSidebar from "./pages/blog/page";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Routes>
        <Route path="/" element={<RealEstate />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/blog" element={<GridWithSidebar />} />
      </Routes>
      <ScrollTopBehaviour />
      <ScrollToTop />
    </div>
  );
}

export default App;