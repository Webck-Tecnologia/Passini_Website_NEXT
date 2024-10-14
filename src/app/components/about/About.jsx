"use client"

import Counter from "./Counter";
import ImgGallery from "./ImgGallery";
import Intro from "./Intro";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 ms-auto order-lg-last" data-aos="fade-left">
        <div className="ps-xl-4">
          <Intro />
          <div className="row justify-content-between">
            <Counter />
          </div>
        </div>
      </div>
      <div className="col-lg-5 order-lg-first position-relative">
        <ImgGallery />
      </div>
    </div>
  );
};

export default About;
