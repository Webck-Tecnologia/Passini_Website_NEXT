import { fetchBlogPosts } from '@/app/api/blog/route';

// Configurações para gerar combinações
const gruasConfig = {
  tipos: [
    'Grua Torre', 'Grua Móvel', 'Guindaste', 'Munck', 'Mini Grua',
    'Grua Articulada', 'Grua Telescópica', 'Grua Portuária'
  ],
  capacidades: [
    '10ton', '20ton', '30ton', '50ton', '100ton', '150ton', '200ton', '300ton'
  ],
  regioes: [
    'Zona Norte', 'Zona Sul', 'Zona Leste', 'Zona Oeste', 'Centro',
    'ABCD', 'Guarulhos', 'Osasco', 'Alphaville'
  ],
  servicos: ['Aluguel', 'Venda', 'Manutenção', 'Instalação', 'Remoção'],
  aplicacoes: [
    'Construção Civil', 'Industrial', 'Portuário', 'Mineração', 
    'Energia', 'Logística', 'Eventos'
  ],
  alturas: ['20m', '30m', '40m', '50m', '60m', '70m', '80m', '100m'],
  alcances: ['30m', '40m', '50m', '60m', '70m', '80m'],
  fabricantes: [
    'Liebherr', 'Manitowoc', 'Terex', 'XCMG', 'Sany', 
    'Zoomlion', 'Tadano', 'Grove'
  ]
};

function generateGruaSlugs() {
  const slugs = [];
  
  // Gera combinações principais
  gruasConfig.tipos.forEach(tipo => {
    gruasConfig.capacidades.forEach(capacidade => {
      gruasConfig.regioes.forEach(regiao => {
        gruasConfig.servicos.forEach(servico => {
          gruasConfig.aplicacoes.forEach(aplicacao => {
            gruasConfig.alturas.forEach(altura => {
              gruasConfig.alcances.forEach(alcance => {
                gruasConfig.fabricantes.forEach(fabricante => {
                  // Gera variações de preços
                  for(let preco = 1000; preco <= 10000; preco += 500) {
                    const slug = `${tipo.toLowerCase()}-${capacidade}-${regiao.toLowerCase()}-${servico.toLowerCase()}-${aplicacao.toLowerCase()}-${altura}-${alcance}-${fabricante.toLowerCase()}-${preco}`.replace(/\s+/g, '-');
                    slugs.push(slug);
                  }
                });
              });
            });
          });
        });
      });
    });
  });
  
  return slugs;
}

export default async function sitemap() {
  const baseUrl = 'https://passiniequipamentos.com.br';

  // Páginas estáticas
  const staticPages = [
    '',
    '/servicos',
    '/blog',
    '/contato',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Blog posts
  let blogUrls = [];
  try {
    const blogPosts = await fetchBlogPosts();
    blogUrls = blogPosts.data.map((post) => ({
      url: `${baseUrl}/blog/${post.attributes.slug}`,
      lastModified: post.attributes.updatedAt,
    }));
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error);
    return [];
  }

  // URLs de gruas
  const gruaSlugs = generateGruaSlugs();
  const gruaUrls = gruaSlugs.map((slug) => ({
    url: `${baseUrl}/gruas/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  // Divide o sitemap em chunks para evitar limites de memória
  const CHUNK_SIZE = 45000;
  const sitemapChunks = [];
  
  for (let i = 0; i < gruaUrls.length; i += CHUNK_SIZE) {
    const chunk = gruaUrls.slice(i, i + CHUNK_SIZE);
    sitemapChunks.push([...staticPages, ...blogUrls, ...chunk]);
  }

  return sitemapChunks[0]; // Retorna o primeiro chunk
}
