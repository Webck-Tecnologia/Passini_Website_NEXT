import Image from "next/image";
import Link from "next/link";

const Property = () => {
  const properties = [
    {
      id: 'grua-sl',
      image: "/images/servicos/1.webp",
      title: "Grua SL",
      delay: "100",
      slug: 'grua-sl',
    },
    {
      id: 'projetos-especiais',
      image: "/images/servicos/2.webp",
      title: "Projetos Especiais",
      delay: "300",
      slug: 'projetos-especiais',
    },
    {
      id: 'grua-potain',
      image: "/images/Grua-Potain/Grua-Potain-7.webp",
      title: "Grua Potain",
      delay: "400",
      slug: 'grua-potain',
    }
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
        <Link href={`/servicos/${property.slug}`} className="d-block">
          <div className="card-style-twentyOne position-relative mt-35">
            <Image
              src={property.image}
              alt={property.title}
              width={500}
              height={500}
              className="lazy-img w-100"
            />
            <div className="hover-overlay d-flex flex-column align-items-center position-absolute tran3s">
              <h3 className="tx-dark title-background">{property.title}</h3>
              <span className="btn-four fw-500 mt-auto">Ver Mais</span>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>

  );
};

export default Property;
