import Parceiros from "./Parceiros"; 

const Partness = () => {
  return (
    <>
      <div className="partner-section-six mt-140 lg-mt-80" data-aos="fade-up">
        <div className="container">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <span className="lines" />
              <h2 className="title text-uppercase tx-dark text-center">
                Veja quem confia no nosso trabalho e cresce conosco
              </h2>
              <span className="lines" />
            </div>

            <div className="partner_slider_one mt-65 lg-mt-40">
              <Parceiros />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partness;
