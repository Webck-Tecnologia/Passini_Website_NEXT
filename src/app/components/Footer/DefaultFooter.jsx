"use client"

import Link from "next/link";
import Footer from "./Footer";
const DefaultFooter = () => {
  return (
    <>
    <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
        <div className="inner-wrapper">
            <div className="row justify-content-between">
            <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                <Link href="/">
                    <img src="/images/logo/passini-logo.png" alt="logo" width={95} />
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
        {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
        src="/images/assets/ils_13.png"
        alt="illustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        />
        <img
        src="/images/assets/ils_14.png"
        alt="illustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        />
    </div>
    {/* /.footer-style-ten */}
    </>
  );
};

export default DefaultFooter;
