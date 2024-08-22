const services = [
    {
      id: 'grua-sl',
      title: 'Grua SL: Algumas vantagens da grua SL ascensional em relação às gruas fixas telescopagens',    
      description: 'As Gruas SL da Passini são equipamentos desenvolvidos para otimizar a eficiência e a mobilidade no canteiro de obras. Essas gruas automontantes são indicadas para projetos que demandam rapidez e flexibilidade, com um sistema de autoelevação que facilita a montagem e desmontagem, ideal para obras de diferentes tamanhos e tipos.',
      detalhada: 'A grua SL é uma grua do tipo ascensional, sendo uma opção versátil e eficiente para obras que necessitam de um equipamento de elevação de cargas, podendo ser montada em vão de laje ou dentro do poço do elevador. Comparativamente, as gruas fixas são mais pesadas e ocupam mais espaço, sendo necessária uma estrutura de fundação para sua instalação. Por outro lado, a grua SL ascensional é mais leve e pode ser facilmente desmontada ao final da obra.',
      image: '/images/Hero/vd3.gif',
      reasons: [
        'Maior versatilidade: a grua ascensional pode ser montada em diferentes locais e se adaptar a diferentes necessidades de obra, enquanto as gruas fixas são mais limitada em posicionamento dentro da obra. Sua geometria mecânica foi projetada de forma  a tornar especialmente útil em canteiros de obras pequenos.', 
        'Menor impacto no espaço da obra: a grua ascensional ocupa menos espaço do que uma grua fixa telescopável, o que pode ser crucial em obras com áreas restritas.', 
        'Facilidade de montagem e desmontagem: a grua ascensional é mais simples de instalar e desmontar, podendo ser realizada manualmente. Isso representa uma grande vantagem em comparação com as gruas fixas, que necessitam de um guindaste para executar sua desmontagem.', 
        'Menor custo de manutenção: por ser mais compacta e ter menos componentes, a grua ascensional tende a ter um custo de manutenção menor do que uma grua fixa', 
        'Maior agilidade: a grua ascensional pode ser movimentada com mais rapidez e facilidade, permitindo um trabalho mais ágil e eficiente na obra.',
          ],
      advantages: '',
      progressData: [
        {
          title: 'Versatilidade',
          description: '',
          value: 96,
        },
        {
          title: 'Impacto no espaço da obra',
          description: '',
          value: 27,
        },
        {
          title: 'Facilidade de montagem e desmontagem',
          description: '',
          value: 97,
        },
        {
          title: 'Custo de manutenção',
          description: '',
          value: 22,
        },
        {
          title: 'Agilidade',
          description: '',
          value: 98,
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
  
  export function getServiceById(id) {
    return services.find(service => service.id === id);
  }