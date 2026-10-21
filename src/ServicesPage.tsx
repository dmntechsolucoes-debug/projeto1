import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight, ArrowUpRight, Check, Code2, Database, FileText, Layers3,
  Menu, MessageCircle, ShieldCheck, Workflow, X,
} from 'lucide-react'
import { siteConfig, whatsappUrl } from './config'

type TechnicalService = {
  id: string
  number: string
  category: string
  title: string
  summary: string
  description: string
  icon: LucideIcon
  focus: string[]
  outputs: string[]
}

const technicalServices: TechnicalService[] = [
  {
    id: 'desenvolvimento',
    number: '01',
    category: 'ENGENHARIA DE SOFTWARE',
    title: 'Desenvolvimento de aplicações web e sistemas sob medida',
    summary: 'Produtos digitais desenhados a partir de requisitos, regras de negócio e jornadas reais de uso.',
    description: 'O trabalho começa pela descoberta técnica: levantamos requisitos funcionais e não funcionais, regras de negócio, perfis de acesso, integrações e critérios de aceite. A arquitetura e a implementação são organizadas para separar responsabilidades entre interface, serviços e persistência de dados, com atenção a responsividade, acessibilidade, manutenibilidade e segurança conforme o contexto do projeto. Os fluxos críticos são validados antes da publicação, e a solução recebe documentação de configuração e operação compatível com o escopo acordado.',
    icon: Code2,
    focus: [
      'Descoberta, detalhamento de requisitos e definição de critérios de aceite.',
      'Arquitetura de aplicação, componentização e contratos entre camadas e serviços.',
      'Modelagem de dados, controle de acesso e tratamento consistente de erros.',
      'Validação funcional e preparação para publicação no ambiente definido para o projeto.',
    ],
    outputs: [
      'Mapa de jornadas, fluxos e especificação técnica.',
      'Aplicação web responsiva e interface alinhada aos requisitos priorizados.',
      'Código-fonte e instruções de execução, configuração e evolução.',
    ],
  },
  {
    id: 'integracao-automacao',
    number: '02',
    category: 'INTEGRAÇÃO DE SISTEMAS',
    title: 'Integração de APIs e automação de processos',
    summary: 'Conexão confiável entre ferramentas e redução de etapas manuais em fluxos operacionais.',
    description: 'Mapeamos o processo ponta a ponta, identificando sistemas envolvidos, eventos, dependências e exceções. Em seguida, definimos contratos de integração e regras de transformação de dados, utilizando APIs REST, webhooks ou mecanismos disponíveis nas plataformas participantes. O desenho considera autenticação e autorização adequadas, validação de payloads, timeouts, retentativas com limites, idempotência quando necessária e registro de falhas. Quando fizer sentido, também avaliamos recursos de IA como apoio ao fluxo, com escopo e critérios de validação definidos. Assim, o fluxo fica mais previsível e pode ser acompanhado e mantido com clareza.',
    icon: Workflow,
    focus: [
      'Mapeamento de processos, gatilhos, estados e caminhos de exceção.',
      'Contratos HTTP/REST, formatos JSON e integração orientada a eventos quando aplicável.',
      'Tratamento de falhas, retentativas controladas, idempotência e rastreabilidade.',
      'Avaliação de automações assistidas por IA, com validação e limites de uso quando aplicável.',
      'Gestão de credenciais e permissões compatíveis com os sistemas conectados.',
    ],
    outputs: [
      'Diagrama do fluxo atual e proposta de automação.',
      'Especificação dos dados trocados e das regras de integração.',
      'Conectores ou rotinas automatizadas, com orientações de operação previstas no escopo.',
    ],
  },
  {
    id: 'dados-dashboards',
    number: '03',
    category: 'ENGENHARIA DE DADOS E ANALYTICS',
    title: 'Dados, dashboards e inteligência operacional',
    summary: 'Estruturação de indicadores e visualizações para apoiar decisões com dados rastreáveis.',
    description: 'A solução parte do inventário das fontes e da validação das regras de negócio que definem cada indicador. Quando previsto no escopo, os dados passam por etapas de extração, transformação e carga (ETL/ELT), padronização e modelagem analítica. Em conjunto com a equipe, definimos métricas, granularidade e periodicidade de atualização; então estruturamos painéis com filtros e visualizações adequados às perguntas operacionais. A documentação registra fontes, definições e limitações para que os números possam ser interpretados corretamente.',
    icon: Database,
    focus: [
      'Inventário de fontes, análise de qualidade e identificação de lacunas nos dados.',
      'Modelagem analítica e regras de transformação ETL/ELT conforme a arquitetura disponível.',
      'Definição documentada de métricas, dimensões, filtros e periodicidade de atualização.',
      'Painéis com hierarquia visual, permissões e contexto para leitura dos indicadores.',
    ],
    outputs: [
      'Catálogo de indicadores com definições e regras de cálculo acordadas.',
      'Dashboard operacional ou analítico dimensionado para as fontes disponíveis.',
      'Notas de linhagem, atualização, limitações e orientações de leitura.',
    ],
  },
]

const upcomingDeliverables = [
  {
    icon: Layers3,
    title: 'Arquitetura e requisitos',
    description: 'Contexto, componentes, fluxos, premissas técnicas e critérios de aceite do projeto.',
  },
  {
    icon: Workflow,
    title: 'APIs e integrações',
    description: 'Contratos, formatos de dados, eventos, autenticação e comportamento em caso de erro.',
  },
  {
    icon: Check,
    title: 'Qualidade e validação',
    description: 'Estratégia de testes, critérios de validação e evidências liberadas para compartilhamento.',
  },
  {
    icon: FileText,
    title: 'Operação e versões',
    description: 'Orientações de implantação, configuração, suporte e notas de versão.',
  },
]

function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const contactHref = whatsappUrl() || '/#contato'

  return (
    <div className="services-page">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="/#inicio" aria-label="DMN Tech, início">
            <img className="brand-logo" src="/dmn-tech-logo-compact.svg" alt="" />
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
            <a href="/#inicio" onClick={closeMenu}>Início</a>
            <a href="/#servicos" onClick={closeMenu}>Visão geral</a>
            <a className="nav-current" href="#detalhes-servicos" onClick={closeMenu}>Serviços técnicos</a>
            <a href="#entregaveis" onClick={closeMenu}>Entregáveis</a>
            <a className="nav-cta" href="/#contato" onClick={closeMenu}>Solicitar orçamento <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="services-page-hero">
          <div className="container services-page-hero-inner">
            <a className="services-back-link" href="/#servicos"><ArrowRight size={14} /> Visão geral dos serviços</a>
            <span className="services-page-eyebrow"><i /> CAPACIDADES TÉCNICAS · DMN TECH</span>
            <h1>Engenharia aplicada a <span className="gradient-text">desafios reais.</span></h1>
            <p>Três frentes técnicas que conectam produto, sistemas e dados. Cada solução é dimensionada a partir dos requisitos, do ambiente existente e dos critérios de sucesso definidos com o cliente.</p>
            <div className="services-page-actions">
              <a className="button button-primary" href={contactHref} target={siteConfig.whatsapp ? '_blank' : undefined} rel={siteConfig.whatsapp ? 'noreferrer' : undefined}>Conversar sobre um projeto <ArrowUpRight size={16} /></a>
              <a className="services-text-link" href="#entregaveis">Ver área de entregáveis <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="section service-detail-section" id="detalhes-servicos">
          <div className="container">
            <div className="section-heading service-detail-heading">
              <div><span className="services-section-kicker">ESCOPO TÉCNICO</span><h2>Serviços estruturados <span className="gradient-text">de ponta a ponta.</span></h2></div>
              <p>O desenho técnico, as ferramentas e os entregáveis são definidos para cada contexto; os itens abaixo descrevem as práticas e saídas que podem compor o escopo acordado.</p>
            </div>
            <div className="service-detail-list">
              {technicalServices.map((service) => {
                const Icon = service.icon
                return (
                  <article className="service-detail-card" id={service.id} key={service.id}>
                    <header className="service-detail-card-header">
                      <span className="service-detail-icon"><Icon size={23} strokeWidth={1.7} /></span>
                      <div className="service-detail-title">
                        <span>{service.number} / {service.category}</span>
                        <h3>{service.title}</h3>
                      </div>
                    </header>
                    <p className="service-detail-summary">{service.summary}</p>
                    <p className="service-detail-description">{service.description}</p>
                    <div className="service-detail-columns">
                      <div>
                        <h4>Escopo técnico possível</h4>
                        <ul>{service.focus.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                      </div>
                      <div>
                        <h4>Entregáveis típicos</h4>
                        <ul>{service.outputs.map((item) => <li key={item}><FileText size={15} />{item}</li>)}</ul>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section technical-library" id="entregaveis">
          <div className="container">
            <div className="technical-library-heading">
              <div>
                <span className="services-section-kicker">DOCUMENTAÇÃO TÉCNICA</span>
                <h2>Relatórios e entregáveis <span className="gradient-text">para acompanhar cada etapa.</span></h2>
                <p>Esta área está reservada para os próximos materiais técnicos aprovados para publicação pela DMN Tech.</p>
              </div>
              <span className="library-reserved-badge"><i /> ÁREA RESERVADA</span>
            </div>
            <div className="upcoming-deliverables-grid">
              {upcomingDeliverables.map(({ icon: Icon, title, description }) => (
                <article className="upcoming-deliverable-card" key={title}>
                  <span className="upcoming-deliverable-icon"><Icon size={18} /></span>
                  <span className="upcoming-deliverable-status">A publicar</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="library-disclaimer"><ShieldCheck size={16} /> Os documentos serão adicionados depois de concluídos e revisados. Conteúdos internos ou confidenciais não serão publicados nesta área.</p>
          </div>
        </section>

        <section className="services-page-cta">
          <div className="container services-page-cta-inner">
            <div><span className="services-section-kicker">PRÓXIMO PASSO</span><h2>Vamos definir o escopo <span className="gradient-text">do seu projeto?</span></h2><p>Converse com a equipe para alinhar objetivos, dependências técnicas e entregáveis adequados à sua operação.</p></div>
            <a className="button button-light" href={contactHref} target={siteConfig.whatsapp ? '_blank' : undefined} rel={siteConfig.whatsapp ? 'noreferrer' : undefined}>Fale com a DMN Tech <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-compact" href="/#inicio" aria-label="DMN Tech, início"><img className="brand-logo" src="/dmn-tech-logo.svg" alt="" /></a>
            <p>Soluções digitais sob medida, construídas com clareza técnica e colaboração.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-title">NAVEGAÇÃO</span><a href="/#sobre">Sobre</a><a href="/#equipe">Equipe</a><a href="/#servicos">Visão geral</a><a href="#entregaveis">Entregáveis técnicos</a></div>
            <div><span className="footer-title">CONTATO</span>{siteConfig.email ? <a href={'mailto:' + siteConfig.email}>{siteConfig.email}</a> : <span className="footer-muted">E-mail a configurar</span>}{siteConfig.instagram ? <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12} /></a> : <span className="footer-muted">Instagram a configurar</span>}<a href="/#contato">Solicitar orçamento</a></div>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} DMN Tech. Todos os direitos reservados.</span><a href="#privacidade" onClick={(event) => { event.preventDefault(); setPrivacyOpen(true) }}>Privacidade</a></div>
      </footer>
      {privacyOpen && <div className="privacy-backdrop" onClick={() => setPrivacyOpen(false)}><section id="privacidade" className="privacy-popover" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onClick={(event) => event.stopPropagation()}><button onClick={() => setPrivacyOpen(false)} aria-label="Fechar"><X size={16} /></button><h3 id="privacy-title">Privacidade</h3><p>Os dados enviados pelo formulário são usados somente para responder à sua solicitação. A política completa será publicada quando os canais e processos de atendimento da DMN Tech forem definidos.</p></section></div>}
      {siteConfig.whatsapp && <a className="whatsapp-float" href={contactHref} aria-label="Conversar pelo WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={21} /></a>}
    </div>
  )
}

export default ServicesPage
