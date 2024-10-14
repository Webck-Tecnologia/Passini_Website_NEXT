import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Faq = dynamic(() => import('./Faq'), { ssr: false });
const GruaFeatures = dynamic(() => import('./GruaFeatures'), { ssr: false });

const Portfolio = () => {
  return (
    <div 
      className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100"
      style={{ zIndex: 5 }}  // Adicionado z-index aqui
    >
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6" data-aos="fade-right">
                    <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                        <h2 className="main-title fw-500 tx-dark m0 titulo">
                            Dúvidas Frequentes
                        </h2>
                    </div>
                    <Faq />
                </div>
                <div
                    className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
                    data-aos="fade-left"
                >   
                    <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
                        <div className="row">
                            <GruaFeatures />
                        </div>
                        <Image 
                        src="/images/shape/shape_152.svg" 
                        alt="shape" 
                        className="lazy-img shapes shape-one"
                        width={800}
                        height={800}
                        />
                        <Image 
                        src="/images/shape/shape_153.svg" 
                        alt="shape" 
                        className="lazy-img shapes shape-two"
                        width={100}
                        height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
