// /src/app/detalhes_do_servico/[id]/page.jsx

import Header5 from '@/app/_components/Header';
import { notFound } from 'next/navigation';
import RootLayout from "../../RootLayout"
import ProgressBar from '../_components/ProgresBar';
import Social from '../_components/Social';
import Inferior from '../../_components/Footer/page'
import Header3 from '@/app/_components/Header/Header';
const services = [
  {
    id: 'grua-sl',
    title: 'Grua SL: Eficiência e Mobilidade no Canteiro de Obras',    
    description: 'As Gruas SL (Self-Erecting) da Passini são equipamentos desenvolvidos para otimizar a eficiência e a mobilidade no canteiro de obras. Essas gruas automontantes são indicadas para projetos que demandam rapidez e flexibilidade, com um sistema de autoelevação que facilita a montagem e desmontagem, ideal para obras de diferentes tamanhos e tipos.',
    detalhada: 'As Gruas SL da Passini são conhecidas por sua engenharia avançada e design compacto, o que as torna ideais para canteiros de obras com espaço limitado. Essas gruas automontantes são equipadas com tecnologia de ponta, permitindo uma operação precisa e controlada, mesmo em ambientes desafiadores. Além disso, a Grua SL possui uma capacidade de carga impressionante, suportando diversos materiais de construção, desde blocos de concreto até grandes componentes estruturais. A versatilidade das Gruas SL se estende a sua compatibilidade com outros equipamentos de elevação, como elevadores de cargas e guindastes, proporcionando uma solução completa para a movimentação de materiais no canteiro de obras. Com três modelos disponíveis, essas gruas são projetadas para atender às necessidades específicas de diferentes tipos de projetos, garantindo eficiência e segurança em todas as etapas da construção.',
    image: '/images/Hero/vd3.gif',
    reasons: [
      'Montagem Rápida: Com um sistema de autoelevação, a Grua SL permite uma montagem e desmontagem rápidas, economizando tempo e recursos valiosos no projeto.',
      'Mobilidade e Versatilidade: Esta grua é fácil de realocar no canteiro de obras, adaptando-se rapidamente às necessidades de cada fase do projeto. Sua capacidade de ajuste a espaços limitados e diferentes condições de obra a torna uma opção versátil.',
      'Eficiência: A Grua SL aumenta a produtividade ao minimizar o tempo de preparação e ajuste, permitindo que outros equipamentos e processos sigam sem interrupções',
      'Segurança: Projetada com foco na segurança, a Grua SL reduz os riscos de acidentes durante as operações, garantindo um ambiente de trabalho mais seguro.',
      'Flexibilidade: Adequada para diversos tipos de grua e projetos, desde construções residenciais até comerciais de médio porte. Ela pode ser utilizada em diferentes etapas da obra, como no poço do elevador, e é capaz de lidar com a elevação de cargas diversas.'
    ],
    advantages: 'Economia de Tempo e Energia: A Grua SL oferece uma montagem e desmontagem mais rápidas em comparação com gruas convencionais, além de reduzir custos com menor necessidade de equipamentos auxiliares e mão de obra especializada. Melhoria na Logística do Canteiro: Com sua capacidade de carga e facilidade de reposicionamento, a Grua SL melhora a logística no canteiro de obras, minimizando gargalos e atrasos na entrega de materiais. Compacta e Poderosa: Apesar de ocupar pouco espaço, essa grua oferece uma solução robusta e eficiente para diferentes necessidades do canteiro de obras, utilizando cabo de aço resistente e com capacidade de carga ajustada para diversas aplicações.',
    progressData: [
      {
        title: 'Taxa de Sucesso',
        description: 'Somos conhecidos pela nossa alta taxa de sucesso.',
        value: 86,
      },
      {
        title: 'Taxa de Economia',
        description: 'Com a nossa Grua SL, você tem maiores economias na sua obra!',
        value: 10,
      },
    ],
  },
  {
    id: 'elevadores',
    title: 'Elevadores de Cremalheira',
    description: 'Os Elevadores de Cremalheira da Passini são essenciais para projetos de construção que exigem movimentação vertical eficiente e segura de materiais e trabalhadores. Estes elevadores são projetados para suportar cargas pesadas e operar em diferentes alturas, tornando-se uma solução versátil para diversos tipos de obras. Com tecnologia avançada e robustez, os elevadores de cremalheira garantem que sua obra se mantenha produtiva e dentro do cronograma.',
    image: '/images/servicos/elevador.gif',
    reasons: [
      'Capacidade de Carga: Projetados para levantar e transportar materiais pesados e volumosos.',
      'Segurança: Equipamentos com sistemas de segurança avançados para proteger trabalhadores e materiais.',
      'Eficiência: Movimentação rápida e contínua, contribuindo para a produtividade do canteiro de obras.',
      'Versatilidade: Adequados para diferentes alturas e tipos de construção, desde edifícios residenciais até comerciais.',
      'Durabilidade: Construção robusta e resistente, garantindo longa vida útil e desempenho consistente.'
    ],
    advantages: '',
    progressData: [
      {
        title: 'Capacidade de Carga',
        description: 'Conseguimos dar capacidade de carga e segurança a sua obra.',
        value: 100,
      },
      {
        title: 'Eficiência Energética',
        description: 'Redução de consumo energético em comparação com elevadores tradicionais.',
        value: 10,
      },
    ],
  },
  {
    id: 'projetos-especiais',
    title: 'Projetos Especiais',
    description: 'Na Passini, entendemos que cada projeto de construção é único e pode exigir soluções personalizadas para atender às especificidades do cliente. Nossos Projetos Especiais são desenvolvidos para oferecer soluções inovadoras e eficientes, desde pórticos especiais até andaimes customizados. Combinamos engenharia mecânica, elétrica e cálculo de elementos finitos para criar equipamentos que não só atendem, mas superam as expectativas em termos de funcionalidade e segurança.',
    image: '/images/servicos/projeto.png',
    reasons: [
      'Personalização: Soluções customizadas para atender às necessidades específicas do seu projeto.',
      'Inovação: Utilização de tecnologia de ponta e metodologias avançadas de engenharia.',
      'Eficiência: Projetos que visam otimizar processos e aumentar a produtividade.',
      'Segurança: Desenvolvimento de equipamentos que priorizam a segurança do trabalho.',
      'Suporte Técnico: Equipe especializada para acompanhar o desenvolvimento e implementação do projeto.'
    ],
    advantages: 'Adaptabilidade: Equipamentos projetados para se ajustar perfeitamente às condições do seu canteiro de obras. Desempenho: Alta eficiência operacional que contribui para o sucesso do projeto. Redução de custos: Soluções que ajudam a minimizar desperdícios e otimizar recursos. Qualidade: Equipamentos construídos com materiais de alta qualidade, garantindo durabilidade e resistência. Consultoria Especializada: A Passini oferece acompanhamento técnico para garantir a execução perfeita dos projetos.',
    progressData: [
      {
        title: 'Taxa de Sucesso',
        description: 'Nosso serviço tem uma alta taxa de sucesso em projetos personalizados.',
        value: 90,
      },
      {
        title: 'Satisfação do Cliente',
        description: 'Nossos clientes estão altamente satisfeitos com as soluções personalizadas.',
        value: 95,
      },
    ],
  }
];
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetails({ params }) {
  const { id } = params;
  const service = services.find((service) => service.id === id);

  if (!service) {
    notFound();
  }

  return (
    <RootLayout>
      <Header3/>
      <div className="fancy-feature-fiftyOne position-relative mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <br/>
                <div className="sc-title-two fst-italic position-relative">
                  Detalhes do serviço
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Oferecemos serviços de qualidade.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">{service.title}</h2>
                <p className="text-lg tx-dark">{service.description}</p>
                <img
                  src={service.image}
                  alt={service.title}
                  className="main-img-meta"
                />
                <p>
                  {service.detalhada}
                </p>
                {service.reasons.length > 0 && (
                  <>
                    <div className="mt-50 lg-mt-30">
                      <div className="row gx-xxl-5">
                        <div className="col-lg-6">
                          <h4 className="sub-title mb-20 tx-dark">Por que escolher a {service.title}</h4>
                          <ul className="style-none list-item md-mb-40">
                            {service.reasons.map((reason, index) => (
                              <li key={index}>{reason}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <h4 className="sub-title mb-20 tx-dark">Vantagens</h4>
                          <p className="pe-xxl-5">
                            {service.advantages}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                      <div className="row gx-xxl-5">
                        <ProgressBar data={service.progressData} />
                      </div>
                    </div>
                  </>
                )}
                <p>
                  Essas taxas destacam os pontos fortes da {service.title} em termos de eficiência operacional, confiabilidade e precisão, reforçando sua posição como uma escolha superior para projetos de construção que exigem alta performance e segurança.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
              <div className="service-category mb-40">
                <h4 className="tx-dark mb-15">Palavras Chaves</h4>
                <ul className="style-none keyword-list">
                  <li className="current-page"><a href="#">grua</a></li>
                  <li><a href="#">mini grua</a></li>
                  <li><a href="#">grua construção civil</a></li>
                  <li><a href="#">gruas automontantes</a></li>
                  <li><a href="#">minigrua</a></li>
                  <li><a href="#">gruas pequenas</a></li>
                  <li><a href="#">locabens grua</a></li>
                  <li><a href="#">grumont gruas</a></li>
                  <li><a href="#">grua para construção civil</a></li>
                  <li><a href="#">grua construção</a></li>
                  <li><a href="#">mini grua preço</a></li>
                  <li><a href="#">grua guindaste</a></li>
                  <li><a href="#">grua de obra</a></li>
                  <li><a href="#">grua pequena</a></li>
                  <li><a href="#">grua são paulo</a></li>
                  <li><a href="#">mini grua construção civil</a></li>
                  <li><a href="#">preço grua</a></li>
                  <li><a href="#">aluguel e fabricação de grua</a></li>
                  <li><a href="#">preço mini grua</a></li>
                  <li><a href="#">guindaste para construção civil</a></li>
                  <li><a href="#">grua obra civil</a></li>
                  <li><a href="#">grua movel pequena</a></li>
                  <li><a href="#">grua predio</a></li>
                  <li><a href="#">mini grua preço</a></li>
                  <li><a href="#">grua na construção civil</a></li>
                  <li><a href="#">grua torre fixa</a></li>
                  <li><a href="#">grua automontante potain</a></li>
                  <li><a href="#">potain gruas</a></li>
                  <li><a href="#">siti gruas</a></li>
                  <li><a href="#">grua sobre trilhos</a></li>
                </ul>
              </div>
            </div>
                <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                  Equipe de ponta , bom atendimento, e versatilidade no planejamento, fácil acesso pela Castelo Branco, amplo estacionamento.
                  </p>
                  <div className="name">- Nilton Cesar Maia</div>
                </div>
                <h4 className="tx-dark mb-15">Nos acompanhe.</h4>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-short-banner-sixteen mt-130 lg-mt-80" data-aos="fade-up">
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">Ficou interessado?</div>
                      <h2 className="main-title fw-500 text-white m0">Não hesite em nos enviar uma mensagem.</h2>
                    </div>
                  </div>
                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <a href="/contact" className="btn-twentyOne fw-500 tran3s">Vamos conversar!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Inferior />
    </RootLayout>
  );
}