import Image from "next/image";
import Seo from "../Seo/Seo";

const FancySection = () => {
  return (
    <>
      {/* SEO Settings */}
      <Seo
        description="Especialistas em Aluguel e Venda de Gruas em São Paulo."
        keywords="aluguel de gruas, venda de gruas, Passini Equipamentos, gruas em São Paulo, equipamentos de construção"
        ogImage="/images/og-image.png" // Imagem a ser utilizada nas tags OG
        canonicalUrl="https://passiniequipamentos.com/fancy-section" // URL canônica da página
      />
      
      <div className="fancy-feature-fortyNine pt-110 pb-90 xl-pt-70 lg-pb-60 zn2 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ms-auto" data-aos="fade-left">
              <h2 className="title text-white fw-bold">
                Passini Equipamen<span className="vermelho">tos.</span>
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
        <Image
          src="/images/shape/shape_166.svg"
          alt="Forma decorativa em SVG"
          className="lazy-img shapes shape-one"
          width={100}
          height={100}
        />
        <a href="#" className="more-btn tran3s" data-aos="fade-left">
          <Image
            src="/images/shape/shape_167.svg"
            alt="Botão de mais informações"
            className="lazy-img"
            width={100}
            height={100}
          />
          <Image
            src="/images/icon/icon_139.svg"
            alt="Seta indicando mais informações"
            className="lazy-img arrow"
            width={500} // Defina uma largura adequada
            height={500} // Defina uma altura adequada
          />
        </a>
        <div className="clip-text-two fw-bold wow fadeInUp">Passini</div>
      </div>
    </>
  );
};

export default FancySection;
