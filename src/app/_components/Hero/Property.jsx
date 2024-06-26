// components/Property.js

import Link from "next/link";

const Property = () => {
  const properties = [
    {
      id: 'grua-sl',
      image: "/images/servicos/1.png",
      title: "Grua SL",
      delay: "100",
    },
    {
      id: 'elevadores',
      image: "/images/servicos/4.png",
      title: "Elevadores",
      delay: "200",
    },
    {
      id: 'projetos-especiais',
      image: "/images/servicos/2.png",
      title: "Projetos Especiais",
      delay: "300",
    },
  ];

  return (
    <>
      {properties.map((property, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={property.delay}
        >
          <div className="card-style-twentyOne position-relative mt-35">
            <img
              src={property.image}
              alt={property.title}
              className="lazy-img w-100"
            />
            <div className="hover-overlay d-flex flex-column align-items-center position-absolute tran3s">
              <h3 className="tx-dstq">{property.title}</h3>
              <Link
                href={`/detalhes_do_servico/${property.id}`}
                className="btn-four fw-500 mt-auto"
              >
                Ver Mais
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Property;
