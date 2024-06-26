import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

const Inferior = () => {
  return (
    <div className="footer-style-ten theme-basic-footer zn2 position-relative footer-lucas">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/PASSINI_LOGO43.png" alt="logo"/> 
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Passini Equipamentos 22.567.365/0001-35
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  Bolt 360.
                </p>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
  );
};

export default Inferior;
