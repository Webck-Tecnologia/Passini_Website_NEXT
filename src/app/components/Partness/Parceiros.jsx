"use client";

import React from "react";
import Slider from "react-slick";

const partners = [
  {
    id: 1,
    logo: "/images/clientes/MPD.png",
    name: "MPD",
  },
  {
    id: 2,
    logo: "/images/clientes/USIMINAS.png",
    name: "USIMINAS",
  },
  {
    id: 3,
    logo: "/images/clientes/braskem_2.png",
    name: "Braskem",
  },
  {
    id: 4,
    logo: "/images/clientes/vale.png",
    name: "Vale",
  },
  {
    id: 5,
    logo: "/images/clientes/kallas.png",
    name: "Kallas",
  },
];

const Parceiros = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={false}>
      {partners.map((partner) => (
        <div className="item" key={partner.id}>
          <div className="icon d-flex align-items-center justify-content-center">
            <img src={partner.logo} alt={`Logo da ${partner.name}`} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Parceiros;
