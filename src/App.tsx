import { useState, type FormEvent } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bot, Braces, Check, ChevronDown,
  Code2, Database, Layers3, Menu, MessageCircle, Monitor, Send, ShieldCheck,
  Sparkles, Workflow, X,
} from 'lucide-react'
import { siteConfig, whatsappUrl } from './config'
import ServicesPage from './ServicesPage'

const services = [
  { icon: Monitor, number: '01', title: 'Desenvolvimento de sites', text: 'Experiências digitais rápidas, responsivas e feitas para representar sua marca com clareza.' },
  { icon: Layers3, number: '02', title: 'Sistemas sob medida', text: 'Ferramentas que organizam operações, simplificam rotinas e acompanham o seu negócio.' },
  { icon: Code2, number: '03', title: 'Software personalizado', text: 'Soluções digitais planejadas em torno dos seus processos e dos desafios reais da equipe.' },
  { icon: Database, number: '04', title: 'Dashboards e dados', text: 'Indicadores e painéis para transformar informações em decisões mais bem orientadas.' },
  { icon: Workflow, number: '05', title: 'Automação de processos', text: 'Integrações que reduzem tarefas repetitivas e conectam as ferramentas que você já usa.' },
  { icon: Bot, number: '06', title: 'Inteligência artificial', text: 'Recursos inteligentes e assistentes digitais aplicados com propósito ao seu contexto.' },
]

const values = ['Inovação', 'Compromisso', 'Qualidade', 'Transparência', 'Evolução contínua']
const technologies = ['React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'APIs REST', 'HTML5', 'CSS3']

function TechnologyLogo({ name }: { name: string }) {
  switch (name) {
    case 'React':
      return <svg className="tool-logo react-logo" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="2.6" fill="currentColor" /><g fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="16" cy="16" rx="13" ry="5" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" /></g></svg>
    case 'TypeScript':
      return <svg className="tool-logo typescript-logo" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M4 5h24v22H4z" /><path fill="#0b1728" d="M16 17h5v1.8h-1.5v6.1h-2v-6.1H16zm6.1 5.2c.7.6 1.4.9 2.1.9.6 0 .9-.2.9-.6 0-.4-.3-.6-1.2-.9-1.3-.5-2-1.1-2-2.3 0-1.4 1.1-2.3 2.7-2.3.9 0 1.7.2 2.3.7l-.8 1.5c-.5-.4-.9-.5-1.5-.5-.5 0-.8.2-.8.5 0 .4.3.5 1.2.9 1.4.5 2 1.1 2 2.3 0 1.5-1.1 2.4-2.8 2.4-1.1 0-2.1-.4-2.8-1z" /></svg>
    case 'Node.js':
      return <svg className="tool-logo node-logo" viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 11 6.4v13.2L16 29 5 22.6V9.4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><text x="16" y="19.5" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="800" fontFamily="Arial,sans-serif">JS</text></svg>
    case 'Python':
      return <svg className="tool-logo python-logo" viewBox="0 0 32 32" aria-hidden="true"><path fill="#3776ab" d="M15.8 3c-5.1 0-5.2 2.2-5.2 4.3v4.2h10.1v1.7H7.5c-2.7 0-4.5 1.8-4.5 5.2s1.8 5.2 4.5 5.2h3.1v-3.1c0-2.8 2.1-4.8 4.8-4.8h6.2c2.2 0 4-1.8 4-4V7.6c0-2.7-2.1-4.6-5.1-4.6z" /><circle cx="13" cy="6.7" r="1.1" fill="#fff" /><path fill="#ffd343" d="M16.2 29c5.1 0 5.2-2.2 5.2-4.3v-4.2H11.3v-1.7h13.2c2.7 0 4.5-1.8 4.5-5.2s-1.8-5.2-4.5-5.2h-3.1v3.1c0 2.8-2.1 4.8-4.8 4.8h-6.2c-2.2 0-4 1.8-4 4v4.1c0 2.7 2.1 4.6 5.1 4.6z" /><circle cx="19" cy="25.3" r="1.1" fill="#fff" /></svg>
    case 'SQL':
      return <svg className="tool-logo sql-logo" viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="16" cy="7" rx="10.5" ry="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M5.5 7v17c0 2.2 4.7 4 10.5 4s10.5-1.8 10.5-4V7M5.5 15c0 2.2 4.7 4 10.5 4s10.5-1.8 10.5-4" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
    case 'APIs REST':
      return <svg className="tool-logo api-logo" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 8 23 11M8 8l2 16m13-13-11 12m11-12 3 13" /><circle cx="7" cy="7" r="3" fill="currentColor" /><circle cx="24" cy="11" r="3" fill="currentColor" /><circle cx="10" cy="25" r="3" fill="currentColor" /><circle cx="26" cy="25" r="3" fill="currentColor" /></g></svg>
    case 'HTML5':
      return <svg className="tool-logo html-logo" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M5 3h22l-2 23-9 3-9-3z" /><path fill="#111827" d="M10 8h12l-.3 3H13l.2 2.5h8.2l-.8 9-4.6 1.5-4.6-1.5-.3-4h3l.2 1.8 1.7.5 1.7-.5.3-3.8h-8.2z" /></svg>
    case 'CSS3':
      return <svg className="tool-logo css-logo" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M5 3h22l-2 23-9 3-9-3z" /><path fill="#111827" d="M10 8h12l-.3 3H13l.2 2.2h8.2l-.8 9.3-4.6 1.5-4.6-1.5-.3-4h3l.2 1.8 1.7.5 1.7-.5.3-4.1h-8z" /></svg>
    default:
      return null
  }
}

const teamMembers = [
  {
    name: 'Marcela Carneiro',
    role: 'Gerente de projeto / Scrum Master',
    responsibilities: ['Planejamento e acompanhamento', 'Condução de reuniões', 'Gestão de riscos e prazos'],
    portraitPosition: '7.7% 48%',
  },
  {
    name: 'Nathália Rodrigues',
    role: 'Líder técnica / especialista em execução',
    responsibilities: ['Orientação técnica', 'Condução da execução'],
    portraitPosition: '50.1% 48%',
  },
  {
    name: 'Danyella Vinhal',
    role: 'Documentação e qualidade',
    responsibilities: ['Organização documental', 'Levantamento de requisitos', 'Garantia da qualidade das entregas'],
    portraitPosition: '88.5% 48%',
  },
]
const steps = [
  ['01', 'Entendimento', 'Escutamos suas necessidades, objetivos e desafios.'],
  ['02', 'Planejamento', 'Definimos escopo, prioridades e a melhor abordagem.'],
  ['03', 'Design & desenvolvimento', 'Construímos a solução com atenção a cada detalhe.'],
  ['04', 'Testes & validação', 'Revisamos os fluxos junto com você antes da entrega.'],
  ['05', 'Entrega & suporte', 'Publicamos o projeto e acompanhamos conforme contratado.'],
]

function Brand({ compact = false }: { compact?: boolean }) {
  return <a className={`brand${compact ? ' brand-compact' : ''}`} href="#inicio" aria-label="DMN Tech, início">
    <img className="brand-logo" src={compact ? '/dmn-tech-logo.svg' : '/dmn-tech-logo-compact.svg'} alt="" />
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [gmailComposeUrl, setGmailComposeUrl] = useState('')
  const [sending, setSending] = useState(false)

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (!siteConfig.contactEndpoint) {
      const subject = `[DMN Tech] Novo contato: ${String(data.name)}`
      const body = [
        `Nome: ${String(data.name)}`,
        `E-mail: ${String(data.email)}`,
        `Serviço: ${String(data.service)}`,
        '',
        'Mensagem:',
        String(data.message),
      ].join('\n')
      const composeUrl = new URL('https://mail.google.com/mail/')
      composeUrl.searchParams.set('view', 'cm')
      composeUrl.searchParams.set('fs', '1')
      composeUrl.searchParams.set('to', siteConfig.email)
      composeUrl.searchParams.set('su', subject)
      composeUrl.searchParams.set('body', body)
      setGmailComposeUrl(composeUrl.toString())
      setFormStatus('Revise o rascunho no Gmail e clique em Enviar. Se o Gmail não abriu, use o link abaixo.')
      window.open(composeUrl.toString(), '_blank', 'noopener,noreferrer')
      return
    }
    setSending(true)
    setFormStatus('')
    setGmailComposeUrl('')
    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('A integração não aceitou o envio.')
      form.reset()
      setFormStatus('Mensagem enviada. Obrigado por entrar em contato!')
    } catch {
      setFormStatus('Não foi possível enviar agora. Confira a integração e tente novamente.')
    } finally { setSending(false) }
  }

  if (window.location.pathname.replace(/\/+$/, '') === '/servicos') return <ServicesPage />

  const closeMenu = () => setMenuOpen(false)
  const navItems = [['Sobre', '#sobre'], ['Equipe', '#equipe'], ['Serviços', '/servicos'], ['Projetos', '#projetos'], ['Tecnologias', '#tecnologias'], ['Contato', '#contato']]

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Solicitar orçamento <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>

    <main id="conteudo">
      <section className="hero section" id="inicio">
        <div className="hero-grid hidden sm:block" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> TECNOLOGIA COM PROPÓSITO</div>
            <h1>Transformamos ideias em <span className="gradient-text">soluções digitais.</span></h1>
            <p className="hero-lead">Desenvolvemos sistemas, sites e soluções tecnológicas sob medida para impulsionar empresas e transformar negócios.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl() || '#contato'}>Solicitar um projeto <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="/servicos">Conhecer serviços <ArrowDown size={16} /></a>
            </div>
            <div className="hero-footnote"><span className="status-pulse" /> Tecnologia pensada para o seu próximo passo</div>
          </div>

          <div className="hero-visual tech-hero-visual" role="img" aria-label="Elemento tecnológico 3D com um cubo digital girando e órbitas luminosas">
            <div className="tech-visual-glow" />
            <div className="tech-orbit tech-orbit-one"><span /></div>
            <div className="tech-orbit tech-orbit-two"><span /></div>
            <div className="tech-cube" aria-hidden="true">
              <div className="tech-cube-face cube-front">
                <div className="cube-header"><span className="cube-brand-mark"><i /><i /><i /></span><span>DMN TECH</span><span className="cube-header-index">001</span></div>
                <div className="cube-network"><i className="trace trace-left" /><i className="trace trace-right" /><i className="trace trace-top" /><i className="trace trace-bottom" /><span className="cube-core"><Braces size={34} strokeWidth={1.5} /></span></div>
                <div className="cube-footer"><span>INOVAÇÃO DIGITAL</span><span className="cube-status"><i /> ONLINE</span></div>
              </div>
              <div className="tech-cube-face cube-back"><span className="cube-back-mark"><Sparkles size={38} /></span><span className="cube-back-label">TECNOLOGIA<br />COM PROPÓSITO</span><span className="cube-back-code">DMN / 001</span></div>
              <div className="tech-cube-face cube-right"><span className="cube-side-label">DADOS</span><div className="cube-side-bars"><i /><i /><i /><i /><i /></div><span className="cube-side-dots"><i /><i /><i /></span></div>
              <div className="tech-cube-face cube-left"><span className="cube-side-label">SISTEMAS</span><div className="cube-side-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="cube-back-code">∞ / EVOLUÇÃO</span></div>
              <div className="tech-cube-face cube-top"><span className="cube-top-mark"><Sparkles size={26} /></span><span className="cube-side-label">CRIATIVIDADE</span></div>
              <div className="tech-cube-face cube-bottom"><span className="cube-bottom-mark"><Braces size={24} /></span><span className="cube-side-label">TECNOLOGIA</span></div>
            </div>
            <div className="tech-satellite satellite-one"><Sparkles size={14} /><span>IDEIAS</span></div>
            <div className="tech-satellite satellite-two"><Database size={14} /><span>DADOS</span></div>
            <div className="tech-satellite satellite-three"><Workflow size={14} /><span>FLUXO</span></div>
          </div>
        </div>
        <a href="#sobre" className="hero-scroll" aria-label="Rolar para conhecer a empresa"><span /> role para explorar</a>
      </section>

      <section className="intro-strip"><div className="container intro-strip-inner"><span>ESTRATÉGIA</span><i /><span>DESIGN</span><i /><span>TECNOLOGIA</span><i /><span>RESULTADO</span></div></section>

      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-content">
            <h2>Tecnologia que <span className="gradient-text">transforma negócios.</span></h2>
            <div className="about-lower"><p>Na DMN Tech, acreditamos que a tecnologia deve simplificar processos, gerar oportunidades e impulsionar resultados. Unimos estratégia, inovação e desenvolvimento para criar soluções que fazem sentido para cada negócio.</p>
              <div className="values-list" aria-label="Nossos valores">{values.map((value) => <span key={value}><Check size={14} />{value}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section" id="equipe">
        <div className="container">
          <div className="section-heading"><div><h2>Talento e colaboração <span className="gradient-text">em cada entrega.</span></h2></div><p>Conheça as pessoas que lideram, organizam e cuidam de cada etapa dos projetos.</p></div>
          <div className="team-grid">
            {teamMembers.map((member, index) => <article className="team-card" key={member.name}>
              <div className="team-card-top">
                <div className="team-avatar" role="img" aria-label={`Foto de ${member.name}`} style={{ backgroundPosition: member.portraitPosition }} />
                <span className="team-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="team-card-content">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <ul>{member.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="container">
          <div className="section-heading"><div><h2>Soluções para o que <span className="gradient-text">vem pela frente.</span></h2></div><p>Da primeira conversa à entrega, construímos tecnologia alinhada ao que sua empresa precisa.</p></div>
          <div className="services-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}>
            <div className="service-top"><span className="service-icon"><Icon size={20} strokeWidth={1.7} /></span><span className="service-number">{number}</span></div>
            <h3>{title}</h3><p>{text}</p><a href="/servicos#detalhes-servicos" className="card-link" aria-label="Ver escopo técnico dos serviços">Ver escopo técnico <ArrowUpRight size={15} /></a>
          </article>)}</div>
        </div>
      </section>

      <section className="section work-section" id="projetos">
        <div className="container">
          <div className="section-heading work-heading"><div><h2>Projetos com espaço <span className="gradient-text">para crescer.</span></h2></div><p>Uma prévia de formatos de solução. Os exemplos abaixo são demonstrativos.</p></div>
          <div className="work-grid">
            <article className="project-card project-large"><div className="project-art art-dashboard"><div className="art-sidebar"><span className="art-logo" /><i /><i /><i /><i /></div><div className="art-content"><div className="art-topline"><span /><span /></div><div className="art-metrics"><i /><i /><i /></div><div className="art-chart"><div className="chart-lines" /><svg viewBox="0 0 500 130" preserveAspectRatio="none" aria-hidden="true"><path d="M0 100 C55 82 65 104 115 72 S180 85 222 51 S286 78 330 42 S392 61 435 19 S472 31 500 8" /></svg></div></div></div><div className="project-meta"><div><span className="project-type">DASHBOARD · DADOS</span><h3>Painel de operações</h3><p>Visão centralizada para acompanhar indicadores e rotinas de negócio.</p></div><a href="#contato" aria-label="Falar sobre um painel de operações"><ArrowUpRight /></a></div></article>
            <article className="project-card"><div className="project-art art-mobile"><div className="phone-frame"><div className="phone-notch" /><div className="phone-screen"><span className="phone-greeting" /><span className="phone-card" /><span className="phone-row" /><span className="phone-row short" /><span className="phone-button" /></div></div><div className="mobile-orb" /></div><div className="project-meta"><div><span className="project-type">PLATAFORMA · WEB</span><h3>Experiência digital</h3><p>Interface responsiva para aproximar marca e clientes.</p></div><a href="#contato" aria-label="Falar sobre uma experiência digital"><ArrowUpRight /></a></div></article>
          </div>
        </div>
      </section>

      <section className="tech-section" id="tecnologias"><div className="container tech-inner"><div><h2>A tecnologia certa<br /><span className="gradient-text">para cada desafio.</span></h2><p>Uma seleção de tecnologias que podem compor os projetos, definida conforme a necessidade de cada solução.</p></div><div className="tech-list">{technologies.map((tech) => <div className="tech-chip" key={tech}><TechnologyLogo name={tech} /><span className="tech-name">{tech}</span><ArrowUpRight size={13} /></div>)}</div></div></section>

      <section className="section process-section"><div className="container"><div className="section-heading"><div><h2>Do primeiro papo <span className="gradient-text">à próxima fase.</span></h2></div><p>Um processo claro, colaborativo e adaptado ao ritmo do seu projeto.</p></div><div className="process-grid">{steps.map(([number, title, text]) => <article className="process-step" key={number}><span className="step-number">{number}</span><span className="step-line" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="contact-band"><div className="container contact-band-inner"><div><span className="eyebrow"><span className="eyebrow-dot" /> VAMOS CONSTRUIR?</span><h2>Sua próxima grande ideia <span className="gradient-text">começa aqui.</span></h2><p>Conte para a DMN Tech o que você precisa. Vamos encontrar a melhor solução para o seu negócio.</p></div><a className="button button-light" href={whatsappUrl() || '#contato'}>Fale com a gente <ArrowUpRight size={17} /></a><div className="band-orb" aria-hidden="true" /></div></section>

      <section className="section contact-section" id="contato"><div className="container contact-grid"><div className="contact-copy"><h2>Vamos tirar seu <span className="gradient-text">projeto do papel?</span></h2><p>Preencha o formulário para abrir um rascunho no Gmail, revisar sua mensagem e enviar para a equipe.</p><div className="contact-direct"><MessageCircle size={17} /><span>Prefere falar diretamente?</span>{siteConfig.whatsapp ? <a href={whatsappUrl()}>Chamar no WhatsApp <ArrowUpRight size={14} /></a> : <span className="config-hint">Configure o WhatsApp em src/config.ts</span>}</div></div>
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-row"><label>Seu nome<input name="name" required autoComplete="name" placeholder="Como podemos chamar você?" /></label><label>Seu e-mail<input name="email" type="email" required autoComplete="email" placeholder="voce@empresa.com" /></label></div>
            <label>Serviço de interesse<span className="select-wrap"><select name="service" defaultValue="" required><option value="" disabled>Selecione uma opção</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}<option>Outro assunto</option></select><ChevronDown size={16} /></span></label>
            <label>Conte um pouco sobre o projeto<textarea name="message" required rows={4} placeholder="Qual desafio você quer resolver?" /></label>
            <div className="form-bottom"><span className="privacy-note"><ShieldCheck size={14} /> Seus dados serão usados apenas para responder ao contato.</span><button className="button button-primary" type="submit" disabled={sending}>{sending ? 'Enviando...' : siteConfig.contactEndpoint ? 'Enviar mensagem' : 'Abrir Gmail para enviar'} <Send size={15} /></button></div>
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            {gmailComposeUrl && <a className="form-gmail-link" href={gmailComposeUrl} target="_blank" rel="noreferrer">Abrir rascunho no Gmail <ArrowUpRight size={14} /></a>}
          </form></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Brand compact /><p>Soluções digitais sob medida para empresas que querem evoluir.</p></div><div className="footer-links"><div><span className="footer-title">NAVEGAÇÃO</span><a href="#sobre">Sobre</a><a href="#equipe">Equipe</a><a href="/servicos">Serviços técnicos</a><a href="#projetos">Projetos</a><a href="#tecnologias">Tecnologias</a></div><div><span className="footer-title">CONTATO</span>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <span className="footer-muted">E-mail a configurar</span>}{siteConfig.instagram ? <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12} /></a> : <span className="footer-muted">Instagram a configurar</span>}<a href="#contato">Solicitar orçamento</a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} DMN Tech. Todos os direitos reservados.</span><a href="#privacidade" onClick={(e) => { e.preventDefault(); setPrivacyOpen(true) }}>Privacidade</a></div></footer>
    {privacyOpen && <div className="privacy-backdrop" onClick={() => setPrivacyOpen(false)}><section id="privacidade" className="privacy-popover" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onClick={(event) => event.stopPropagation()}><button onClick={() => setPrivacyOpen(false)} aria-label="Fechar"><X size={16} /></button><h3 id="privacy-title">Privacidade</h3><p>Os dados enviados pelo formulário são usados somente para responder à sua solicitação. A política completa será publicada quando os canais e processos de atendimento da DMN Tech forem definidos.</p></section></div>}
    {siteConfig.whatsapp && <a className="whatsapp-float" href={whatsappUrl()} aria-label="Conversar pelo WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={21} /></a>}
  </>
}

export default App
