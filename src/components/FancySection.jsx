import { Link } from "react-router-dom";

const FancySection = () => {
  return (
    <div className="fancy-feature-fortyNine pt-110 pb-90 xl-pt-70 lg-pb-60 zn2 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 ms-auto" data-aos="fade-left">
            <h2 className="title text-white fw-bold">
            Passini Equipamen<span className="vermelho">tos.</span>.
            </h2>
            <div className="row">
              <div className="col-xl-8 col-lg-10 ms-auto">
                <p className="text-lg text-white mt-55 lg-mt-20">
                  Especialistas em Qualidade e Eficiência
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}

      <div className="clip-text" data-aos="fade-right">
        P
      </div>
      <img
        src="/images/shape/shape_166.svg"
        alt="Forma decorativa representando a inovação da Passini Equipamentos"
        className="lazy-img shapes shape-one"
      />
      <Link to="#" className="more-btn tran3s" data-aos="fade-left">
        <img
          src="/images/shape/shape_167.svg"
          alt="shape"
          className="lazy-img"
        />
        <img
          src="/images/icon/icon_139.svg"
          alt="shape"
          className="lazy-img arrow"
        />
      </Link>
      <div className="clip-text-two fw-bold wow fadeInUp">Passini</div>
    </div>
  );
};

export default FancySection;
