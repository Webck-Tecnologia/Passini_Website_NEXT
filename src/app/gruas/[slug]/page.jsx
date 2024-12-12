"use client"
import Image from 'next/image'
import Button from '@/components/ui/button'
import { Clock, MapPin, Wrench as Tool, Shield, PhoneCall } from 'lucide-react'
import './page.css'

const WHATSAPP_NUMBER = "5511947910983"
const WHATSAPP_BASE_URL = "https://api.whatsapp.com/send"

export default function Home({ params }) {
  const { slug } = params;
  const slugInfo = {
    tipo: slug.split('-')[0] || 'Ascensional',
    capacidade: slug.split('-')[1] || '2 toneladas',
    aplicacao: slug.split('-')[2] || 'construção civil',
    regiao: 'São Paulo'
  };

  const features = [
    {
      name: 'Atendimento 24 horas',
      description: 'Suporte técnico disponível 24h por dia, 7 dias por semana para garantir a continuidade da sua obra.',
      icon: Clock
    },
    {
      name: 'Cobertura em São Paulo',
      description: 'Atendemos toda região metropolitana de São Paulo, ABCD, Guarulhos e interior.',
      icon: MapPin
    },
    {
      name: 'Manutenção Preventiva',
      description: 'Equipamentos com manutenção em dia e revisões periódicas para máxima segurança.',
      icon: Tool
    },
    {
      name: 'Operadores Certificados',
      description: 'Equipe altamente qualificada e certificada para operação segura dos equipamentos.',
      icon: Shield
    },
  ]

  const whatsappLinks = {
    orcamento: `${WHATSAPP_BASE_URL}?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      `Olá! Vim pelo site da Passini e gostaria de solicitar um orçamento para a grua ${slugInfo.tipo} de ${slugInfo.capacidade} para ${slugInfo.aplicacao} na região ${slugInfo.regiao}. Aguardo retorno!`
    )}`,
    
    catalogo: `${WHATSAPP_BASE_URL}?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      `Olá! Vim pelo site da Passini e gostaria de conhecer melhor o catálogo de gruas, especialmente a ${slugInfo.tipo} de ${slugInfo.capacidade}. Podem me enviar mais informações?`
    )}`,
    
    especialista: `${WHATSAPP_BASE_URL}?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      `Olá! Vim pelo site da Passini e preciso falar com um especialista sobre a grua ${slugInfo.tipo} de ${slugInfo.capacidade} para um projeto de ${slugInfo.aplicacao}. Podem me ajudar?`
    )}`
  }

  return (
    <div className="flex flex-col min-h-screen">
         <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <Image onClick={() => window.open('/', '_blank')} src="/images/logo/passini-logo.png" alt="Passini Equipamentos" width={80} height={32} />
            <span className="logo-text">Passini Equipamentos</span>
          </div>
          <div className="nav-buttons">
            <Button className="button button-ghost" onClick={() => window.open('/servicos/grua-sl', '_blank')}>Gruas</Button>
            <Button className="button button-ghost" onClick={() => window.open(whatsappLinks.especialista, '_blank')}>Serviços</Button>
            <Button className="button button-ghost" onClick={() => window.open(whatsappLinks.especialista, '_blank')}>Contato</Button>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Aluguel de Gruas em São Paulo
              </h1>
              <p className="hero-description">
                Soluções completas em locação de gruas para sua obra. Equipamentos modernos, assistência técnica 24h e os melhores preços do mercado.
              </p>
              <br/>
              <div className="hero-buttons">
                <div className="button-container">
                  <Button className="button button-primary" onClick={() => window.open(whatsappLinks.orcamento, '_blank')}>
                    <PhoneCall className="button-icon" />
                    Solicitar Orçamento
                  </Button>
                </div>
                <br/>
                <div className="button-container">
                  <Button className="button button-outline" onClick={() => window.open(whatsappLinks.catalogo, '_blank')}>
                    Ver Catálogo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-container">
            <div className="features-header">
              <h2 className="features-subtitle">Nossos Diferenciais</h2>
              <p className="features-title">
                Por que escolher a Passini?
              </p>
              <p className="features-description">
                Mais de 20 anos de experiência no mercado de locação de equipamentos pesados.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.name} className="feature-item">
                  <dt>
                    <div className="feature-icon">
                      <feature.icon className="icon" />
                    </div>
                    <p className="feature-title">{feature.name}</p>
                  </dt>
                  <dd className="feature-description">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta-container">
            <h2 className="cta-title">
              <span className="block">Precisando de uma grua?</span>
              <span className="block">Entre em contato agora mesmo.</span>
            </h2>
            <p className="cta-description">
              Orçamento rápido e personalizado para sua obra. Atendemos em todo estado de São Paulo.
            </p>
            <br/>
            <Button className="button button-primary hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" onClick={() => window.open(whatsappLinks.especialista, '_blank')}>
              Falar com Especialista
            </Button>
          </div>
        </section>
      </main>

      <footer className="footer">
        {/* Footer content remains the same */}
      </footer>
    </div>
  )
}