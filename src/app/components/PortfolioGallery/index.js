"use client"

import { useState } from "react";
import portfolio from "./portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const PortfolioGallery = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <div className="portfolio-gallery-three pt-30" id="portfolio">
      <div className="container">
        {/* Título da seção */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="title-style-one text-center mb-20 mt-70 fw-500 tx-dark titulo">
              Conheça alguns dos nossos projetos mais impressionantes
            </h2>
            <p className="sub-title text-center">
              Explore nossos trabalhos e veja como podemos ajudar em seu projeto.
            </p>
          </div>
        </div>
        {/* Filtro de categorias */}
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            Todos
          </li>
          <li
            className={filter === "Grua" ? "is-checked" : ""}
            onClick={() => setFilter("Grua")}
          >
            Grua
          </li>
          <li
            className={filter === "Projeto Especial" ? "is-checked" : ""}
            onClick={() => setFilter("Projeto Especial")}
          >
            Projeto Especial
          </li>
        </ul>
        <div className="row pt-50 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-6 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-three position-relative mb-90 lg-mb-90">
                  <div className="img-meta position-relative">
                    <img 
                      src={item.image} 
                      alt={`${item.name} - ${item.tag}`} 
                      className="portfolio-image w-100"
                      width={400}
                      height={400}
                      loading="lazy"
                    />
                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={400}
                      height={400}
                      cropped={true}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Clique para ver em tamanho grande"
                          className="fancybox expend-btn d-flex align-items-center justify-content-center tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </span>
                      )}
                    </Item>
                  </div>
                  <div className="meta-data tran3s d-flex align-items-center justify-content-between">
                    <div className="title tran3s d-flex flex-column">
                      <span className="pj-name tran3s fw-500">{item.name}</span>
                      <span className="tag">{item.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;