import { Link } from "react-router-dom";

const properties = [
  {
    imgSrc: "/images/media/img_76.jpg",
    name: "Blueberry villa",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$34,900",
  },
  {
    imgSrc: "/images/media/img_77.jpg",
    name: "White House villa",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$28,100",
  },
  {
    imgSrc: "/images/media/img_78.jpg",
    name: "Luxury villa in Dal lake",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$42,500",
  },
];

const Property = () => {
  return (
    <>
      {properties.map((property, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <div className="card-style-twentyTwo mt-35">
            <img src={property.imgSrc} alt="media" className="lazy-img w-100" />
            <div className="text-meta">
              <h4>
                <Link to="#" className="property-name">
                  {property.name}
                </Link>
              </h4>
              <p className="fs-18">{property.address}</p>
              <div className="d-flex align-items-center justify-content-between">
                <strong className="price fw-500 tx-dark">
                  {property.price}
                </strong>
                <Link to="#" className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default Property;
