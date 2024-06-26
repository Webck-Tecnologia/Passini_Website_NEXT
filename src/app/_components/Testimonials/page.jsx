import Faq from './Faq'
import CourseFeatured from './CourseFeatured';
import Blog from './Blog1';


const Comentarios = () => {
  return (
    <>
      <div className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                <h2 className="main-title fw-500 tx-dark m0">
                  Sobre a Grua SL
                </h2>
              </div>
              {/* End title */}
              <Faq />
              {/* /.accordion-style-six */}
              <a href="/detalhes_do_servico/grua-sl" className="btn-one fw-500 mt-50 md-mt-40">
                Ver mais
              </a>
            </div>
            {/* End col-xl-5 */}

            <div
              className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
              data-aos="fade-left"
            >
              <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
                <div className="row">
                  <CourseFeatured />
                </div>
                <img
                  src="/images/shape/shape_152.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <img
                  src="/images/shape/shape_153.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
              {/* /.wrapper */}
              
            </div>
            <Blog/>
            {/* End col-xl-6 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comentarios;
