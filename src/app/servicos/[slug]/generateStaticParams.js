const services = [
    {
      id: 'grua-sl',
      title: 'Venda e Aluguel de Grua SL Ascensional em São Paulo',
      description: 'Especialistas em venda e aluguel de Grua SL Ascensional para obras em São Paulo. A Grua SL é leve, fácil de montar e ideal para áreas com espaço restrito.',
      detalhada: 'A Grua SL oferece flexibilidade para projetos de construção em locais com acesso limitado e espaço reduzido, como em centros urbanos. Com menor impacto estrutural e facilidade na montagem, é a escolha perfeita para projetos que demandam agilidade e eficiência.',
      image: '/images/servicos/grua.png',
      reasons: [
        'Maior versatilidade: pode ser montada em diferentes locais, ideal para áreas restritas.',
        'Menor impacto no espaço: ocupa menos espaço comparada às gruas fixas.',
        'Facilidade de montagem e desmontagem: rápida instalação manual sem necessidade de guindastes.',
        'Menor custo de manutenção: estrutura mais compacta e eficiente.',
        'Agilidade: movimentação rápida, ideal para obras ágeis em São Paulo.'
      ],
      advantages: 'A Grua SL se destaca pela sua versatilidade, facilidade de montagem e baixo custo de manutenção, sendo uma solução ideal para obras em São Paulo.',
      progressData: [
        { title: 'Versatilidade', value: 96 },
        { title: 'Impacto no espaço da obra', value: 27 },
        { title: 'Facilidade de montagem e desmontagem', value: 97 },
        { title: 'Custo de manutenção', value: 22 },
        { title: 'Agilidade', value: 98 }
      ],
    },
    {
      id: 'elevadores',
      title: 'Venda e Aluguel de Elevadores de Cremalheira para Obras',
      description: 'Venda e aluguel de Elevadores de Cremalheira para obras de construção em São Paulo. Movimentação eficiente de materiais e trabalhadores com segurança.',
      detalhada: 'Nossos Elevadores de Cremalheira oferecem uma solução robusta para o transporte vertical de materiais em obras de grande porte, suportando cargas pesadas e operando com segurança em alturas elevadas.',
      image: '/images/servicos/elevador.gif',
      reasons: [
        'Capacidade de Carga: projetados para levantar materiais pesados.',
        'Segurança: sistemas de segurança avançados.',
        'Eficiência: movimentação contínua e rápida, contribuindo para a produtividade.',
        'Versatilidade: adequados para diferentes tipos de construções.',
        'Durabilidade: longa vida útil.'
      ],
      progressData: [
        { title: 'Capacidade de Carga', value: 100 },
        { title: 'Eficiência Energética', value: 10 }
      ]
    },
    {
      id: 'projetos-especiais',
      title: 'Soluções Personalizadas para Projetos Especiais em São Paulo',
      description: 'Desenvolvemos soluções customizadas para projetos de construção em São Paulo. Pórticos especiais, andaimes e mais.',
      detalhada: 'Combinamos engenharia avançada e tecnologia de ponta para desenvolver soluções que atendem a necessidades específicas de seus projetos de construção em São Paulo.',
      image: '/images/servicos/projeto.png',
      reasons: [
        'Personalização: soluções feitas sob medida.',
        'Inovação: uso de tecnologia avançada.',
        'Eficiência: processos otimizados para aumentar a produtividade.',
        'Segurança: equipamentos que garantem segurança no trabalho.',
        'Suporte Técnico: acompanhamento especializado.'
      ],
      progressData: [
        { title: 'Taxa de Sucesso', value: 90 },
        { title: 'Satisfação do Cliente', value: 95 }
      ]
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
