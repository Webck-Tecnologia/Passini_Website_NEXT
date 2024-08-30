import Partners from "./Partners";

const DesignAgency = () => {
  return (
    <>
    <div className="partner-section-six mt-140 lg-mt-80" data-aso="fade-up">
        <div className="container">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <span className="lines" />
              <div className="title text-uppercase tx-dark text-center">
                Veja quem confia no nosso trabalho e cresce conosco
              </div>
              <span className="lines" />
            </div>
            {/* End d-flex */}

            <div className="partner_slider_one mt-65 lg-mt-40">
              <Partners />
            </div>
            {/* End partner_slide */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAgency;
