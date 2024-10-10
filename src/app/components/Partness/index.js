import Partners from "./Partners";
import Seo from "../Seo/Seo";

const DesignAgency = () => {
  return (
    <>
      <Seo
        description="Veja os parceiros que confiam na Passini Equipamentos para soluções em venda e aluguel de gruas em São Paulo. Somos líderes no fornecimento de gruas para construção civil."
        keywords="parceiros, aluguel de gruas, venda de gruas, gruas São Paulo, Passini Equipamentos, MPD, USIMINAS, BRASKEM, KALLAS"
        ogImage="/images/seo/partners-og-image.jpg"
        canonicalUrl="https://www.passiniequipamentos.com.br/parceiros"
        publishedTime="2024-10-09"
        updatedTime="2024-10-09"
        authorName="Passini Equipamentos"
      />
      
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
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAgency;
