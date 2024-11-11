import { useState } from "react";
import items from "./PortfolioData";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  // Filtra os itens de acordo com a categoria selecionada
  const filteredItems =
    filter === "*"
      ? items.slice(0, 8)
      : items.slice(0, 8).filter((item) => item.category.includes(filter));

  const openGallery = (project) => {
    setSelectedProject(project);
    setLightboxOpen(true); // Abre o Lightbox
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setLightboxOpen(false);
  };

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            Todos
          </li>
          <li
            className={filter === "Grua SL" ? "is-checked" : ""}
            onClick={() => setFilter("Grua SL")}
          >
            Grua SL
          </li>
          <li
            className={filter === "Grua Potain" ? "is-checked" : ""}
            onClick={() => setFilter("Grua Potain")}
          >
            Grua Potain
          </li>
          <li
            className={filter === "Projeto Especial" ? "is-checked" : ""}
            onClick={() => setFilter("Projeto Especial")}
          >
            Projeto Especial
          </li>
          <li
            className={filter === "Fábrica" ? "is-checked" : ""}
            onClick={() => setFilter("Fábrica")}
          >
            Fábrica
          </li>
        </ul>
        <div className="row pt-90 lg-pt-50">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-6 col-md-6 ${item.category}`}
            >
              <div className="portfolio-block-three position-relative mb-110 lg-mb-90">
                <div className="img-meta">
                  <Image
                    width={630}
                    height={500}
                    src={item.image}
                    alt="gallery"
                    className="w-100 cursor-pointer"
                    onClick={() => openGallery(item)}
                  />
                </div>
                <div className="meta-data tran3s d-flex align-items-center justify-content-between">
                  <div
                    className="title tran3s d-flex flex-column cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      openGallery(item);
                    }}
                  >
                    <span className="pj-name tran3s fw-500">{item.name}</span>
                    <span className="tag">{item.tag}</span>
                  </div>

                  {/* Botão de abrir galeria */}
                  <span
                    role="button"
                    title="Click for large view"
                    className="expend-btn font-recoleta tran3s"
                    onClick={() => openGallery(item)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal da galeria usando Lightbox */}
      {selectedProject && (
        <Lightbox
          open={isLightboxOpen}
          close={closeGallery}
          caption={{
            showToggle: true,
            descriptionTextAlign: "end",
          }}
          slides={selectedProject.listImages.map((img) => ({
            src: img.src,
            alt: img.alt,
          }))}
        />
      )}

      <style jsx>{`
        .gallery-close {
          position: absolute;
          top: 20px;
          right: 30px;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
