import gruasConfig from '@/config/gruasConfig';

export function generateSlugs() {
  const slugs = [];
  
  // Função para gerar variações de palavras
  const getVariations = (word) => {
    const variations = [word];
    if (word.includes(' ')) {
      variations.push(word.replace(' ', '-'));
      variations.push(word.replace(' ', ''));
    }
    return variations;
  };

  // Função para gerar preços dinâmicos baseados na capacidade
  const getPriceRange = (capacidade) => {
    const ton = parseInt(capacidade);
    const basePrice = ton * 1000;
    return [
      basePrice,
      basePrice * 1.5,
      basePrice * 2,
      basePrice * 2.5,
      basePrice * 3
    ].map(Math.floor);
  };

  gruasConfig.tipos.forEach(tipo => {
    const tipoVariations = getVariations(tipo);
    
    gruasConfig.capacidades.forEach(capacidade => {
      gruasConfig.regioes.forEach(regiao => {
        const regiaoVariations = getVariations(regiao);
        
        gruasConfig.servicos.forEach(servico => {
          const servicoVariations = getVariations(servico);
          
          gruasConfig.aplicacoes.forEach(aplicacao => {
            const aplicacaoVariations = getVariations(aplicacao);
            
            gruasConfig.alturas.forEach(altura => {
              gruasConfig.alcances.forEach(alcance => {
                gruasConfig.fabricantes.forEach(fabricante => {
                  const precos = getPriceRange(capacidade);
                  
                  precos.forEach(preco => {
                    tipoVariations.forEach(tv => {
                      regiaoVariations.forEach(rv => {
                        servicoVariations.forEach(sv => {
                          aplicacaoVariations.forEach(av => {
                            const slug = `${tv}-${capacidade}-${rv}-${sv}-${av}-${altura}-${alcance}-${fabricante}-${preco}`
                              .toLowerCase()
                              .normalize('NFD')
                              .replace(/[\u0300-\u036f]/g, '')
                              .replace(/[^a-z0-9]+/g, '-')
                              .replace(/-+/g, '-')
                              .replace(/^-|-$/g, '');
                            
                            slugs.push(slug);
                          });
                        });
                      });
                    });
                  });
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