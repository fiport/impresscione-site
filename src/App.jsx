import { useEffect, useRef, useState } from 'react'

const MARQUEE_ITEMS = [
  'Marketing Digital',
  'Comunicação',
  'Consultoria',
  'Campanhas',
  'Landing Pages',
]

const CLIENT_LOGOS = [
  '/assets/images/clients/logo 104 (1).png',
  '/assets/images/clients/Show de bandas com telefone.png',
  '/assets/images/clients/logo Casa & Garden  COLOR PNG.png',
  '/assets/images/clients/LOGO ARABUTÃ CAPITAL DA CUCA.png',
  '/assets/images/clients/ZORZAN PNG BRANCO.png',
  '/assets/images/clients/Logo 1.png',
  '/assets/images/clients/VS vendruscolo ok.png',
  '/assets/images/clients/LOGO OFICIAL Alvorada.png',
  '/assets/images/clients/DALFER6.png',
  '/assets/images/clients/Logo - Luis Giordani_f.png',
  '/assets/images/clients/Logo Agroveterinária CONTORNO.png',
  '/assets/images/clients/asa prev PNG TRANSP.png',
  '/assets/images/clients/SEM-FUNDO-1.png',
].map((path) => ({
  src: encodeURI(path),
  alt: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ') ?? 'Cliente',
}))

const CRITICAL_IMAGES = [
  '/assets/logos/logo-navbar.png',
  '/assets/images/impressiona.png',
  ...CLIENT_LOGOS.map((logo) => decodeURI(logo.src)),
].map((path) => encodeURI(path))

const BENEFITS = [
  {
    title: 'Comprometimento',
    description: 'Atuação próxima, atenção aos detalhes e foco real em entregar o que foi prometido.',
    icon: 'commitment',
  },
  {
    title: 'Equipe especializada',
    description: 'Profissionais com repertório criativo, técnico e estratégico para acelerar a presença da sua marca.',
    icon: 'team',
  },
  {
    title: 'Consultoria de marketing',
    description: 'Orientação clara para posicionamento, conteúdo, mídia e tomada de decisão com mais segurança.',
    icon: 'consulting',
  },
  {
    title: 'Qualidade',
    description: 'Execução consistente, acabamento forte e comunicação alinhada com a imagem que sua empresa precisa passar.',
    icon: 'quality',
  },
  {
    title: 'Landing pages',
    description: 'Páginas pensadas para apresentar valor, organizar a mensagem e transformar visitas em oportunidades.',
    icon: 'landing',
  },
]

const BENEFIT_NETWORK_LAYOUT = [
  'left-[10%] top-[10%]',
  'right-[10%] top-[10%]',
  'left-[8%] top-[54%]',
  'right-[8%] top-[54%]',
  'left-[44%] top-[78%] -translate-x-1/2',
]

const SERVICES = [
  {
    title: 'Marketing digital e total',
    description:
      'Seja o diferencial com nossas soluções em Social media, sites, gestão de mídias sociais e digitais.',
    icon: 'landing',
  },
  {
    title: 'Comunicação e Consultoria',
    description:
      'Análise e mapeamento para o desempenho funcional e alavanque de vendas, propaganda completa.',
    icon: 'consulting',
  },
  {
    title: 'Campanhas e Eventos',
    description:
      'Realização de campanhas publicitárias completas envolvendo toda diretriz, material on e off, também eventos corporativos.',
    icon: 'quality',
  },
  {
    title: 'Material Gráfico / impressos / Brindes',
    description:
      'Possuímos parceria com inúmeras empresas e um grande quadro de produtos e matérias físicos necessários para sua empresa.',
    icon: 'commitment',
  },
  {
    title: 'Produção Áudio e vídeo',
    description:
      'Studio e profissionais que oferecem desde a gravação audio, spot, jingle, vídeo animação até o institucional da sua empresa.',
    icon: 'team',
  },
  {
    title: 'Lives / Som e Luz',
    description:
      'Produção de lives ao vivo com equipamentos de alta resolução e equipe altamente qualificada para transmissão às redes e canais digitais.',
    icon: 'landing',
  },
]

function ArrowRightIcon({ className = 'h-[14px] w-[14px]' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  )
}

function BenefitIcon({ type }) {
  const baseClass = 'h-[18px] w-[18px]'

  switch (type) {
    case 'commitment':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="m9 12 2 2 4-4"></path>
          <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4Z"></path>
        </svg>
      )
    case 'team':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    case 'consulting':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"></path>
          <path d="M8 9h8"></path>
          <path d="M8 13h5"></path>
        </svg>
      )
    case 'quality':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="m12 3 2.4 4.86L20 8.72l-4 3.9.94 5.5L12 15.77 7.06 18.1 8 12.62l-4-3.9 5.6-.86L12 3Z"></path>
        </svg>
      )
    case 'landing':
      return (
        <svg className={baseClass} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2"></rect>
          <path d="M3 9h18"></path>
          <path d="M7 13h4"></path>
          <path d="M7 16h8"></path>
          <path d="M17 15h.01"></path>
        </svg>
      )
    default:
      return null
  }
}

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M17.5 6.5h.01"></path>
    </svg>
  )
}

function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10v7h3.5Z"></path>
    </svg>
  )
}

function ContactIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2.09a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L7.1 8.9a16 16 0 0 0 8 8l1.44-1.28a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z"></path>
    </svg>
  )
}

function SiteLoader({ progress, visible }) {
  return (
    <div
      className={`site-loader ${visible ? 'is-visible' : 'is-hidden'}`}
      aria-hidden={!visible}
    >
      <div className="site-loader__grid"></div>
      <div className="site-loader__glow"></div>
      <div className="site-loader__content">
        <p className="site-loader__eyebrow">Impressione-se</p>
        <h1 className="site-loader__title">Carregando conteúdo que impressiona</h1>
        <p className="site-loader__text">Estamos preparando estratégia, identidade, clientes e experiências para abrir o site no ritmo certo.</p>
        <div className="site-loader__bar">
          <span className="site-loader__bar-fill" style={{ width: `${progress}%` }}></span>
        </div>
        <div className="site-loader__meta">
          <span>Status de carregamento</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  )
}

function SiteNavbar({ pathname, navigateTo, scrollToId }) {
  const isServicesPage = pathname === '/servicos'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleHomeAnchor = (id) => (event) => {
    event.preventDefault()
    setMobileMenuOpen(false)

    if (pathname === '/') {
      scrollToId(id)
      return
    }

    navigateTo('/', id)
  }

  const handleCurrentPageAnchor = (id) => (event) => {
    event.preventDefault()
    setMobileMenuOpen(false)
    scrollToId(id)
  }

  const linkClass = 'group relative py-1 font-sans text-sm font-medium text-gray-400 transition-colors hover:text-white'
  const activeClass = 'text-white'

  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-center px-4 pt-6 [animation:fadeSlideIn_1s_ease-out_1s_both]">
      <div
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition duration-300 md:hidden ${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <nav
        className="shadow-black/50 relative z-50 flex w-full max-w-6xl items-center justify-between gap-x-4 gap-y-4 rounded-none bg-black/88 pb-2 pl-3 pr-2 pt-2 shadow-2xl md:w-auto md:gap-12 md:bg-black/60 md:backdrop-blur-lg"
        style={{
          position: 'relative',
          '--border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0), rgba(255,255,255,0.2))',
          '--border-radius-before': 0,
        }}
      >
        <div className="flex items-center gap-x-3 gap-y-3" onClick={() => navigateTo('/')} role="button">
          <img
            src="/assets/logos/logo-navbar.png"
            alt="Impressione-se"
            className="h-9 w-auto object-contain md:h-10"
          />
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a className={`${linkClass} ${pathname === '/' ? activeClass : ''}`} href="/#hero" onClick={handleHomeAnchor('hero')}>
            Inicio
            <span className="absolute -bottom-3 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b2374c] to-transparent shadow-[0_0_10px_rgba(178,55,76,0.8)] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a className={linkClass} href="/#sobre" onClick={handleHomeAnchor('sobre')}>
            Sobre
            <span className="absolute -bottom-3 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b2374c] to-transparent shadow-[0_0_10px_rgba(178,55,76,0.8)] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
          <a className={`${linkClass} ${isServicesPage ? activeClass : ''}`} href="/servicos" onClick={(event) => {
            event.preventDefault()
            navigateTo('/servicos')
          }}>
            Serviços
            <span className="absolute -bottom-3 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b2374c] to-transparent shadow-[0_0_10px_rgba(178,55,76,0.8)] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={mobileMenuOpen}
          className="group relative flex h-[50px] w-[56px] items-center justify-center overflow-hidden rounded-none bg-white/5 outline-none transition-transform active:scale-95 md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          <span className="absolute inset-[-100%] animate-[spin_3.2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_78%,#b2374c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
          <span className="absolute inset-[1px] rounded-none bg-black z-10"></span>
          <span className="relative z-20 flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] w-5 bg-white transition duration-300 ${mobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
            <span className={`block h-[1.5px] w-5 bg-white transition duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-[1.5px] w-5 bg-white transition duration-300 ${mobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
          </span>
        </button>

        <button
          className="group relative hidden h-[50px] min-w-[180px] w-auto items-center justify-center rounded-none px-6 outline-none transition-transform active:scale-95 md:flex"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: 'none' }}
          type="button"
          onClick={() => scrollToId(isServicesPage ? 'services-hero' : 'hero')}
        >
          <div className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-0" style={{ background: 'radial-gradient(15% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)', filter: 'blur(15px)' }}></div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-100" style={{ background: 'radial-gradient(60.6% 50% at 50% 100%, rgb(255,255,255) 0%, rgba(255,255,255,0) 100%)', filter: 'blur(18px)' }}></div>
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-none"><div className="absolute -inset-[300%] animate-[spin_4s_linear_infinite]" style={{ background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 90%, #ffffff 100%)' }}></div></div>
          <div className="absolute inset-[1px] rounded-none bg-black"></div>
          <span className="relative z-20 text-xs font-medium uppercase tracking-wide text-white">Falar com a equipe</span>
        </button>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+14px)] z-50 origin-top overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.98),rgba(6,6,6,0.98))] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition duration-300 md:hidden ${mobileMenuOpen ? 'pointer-events-auto scale-y-100 opacity-100' : 'pointer-events-none scale-y-95 opacity-0'}`}
          style={{
            '--border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03), rgba(178,55,76,0.18))',
            '--border-radius-before': 0,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(178,55,76,0.15),transparent_54%)]"></div>
          <div className="relative p-4">
            <div className="mb-3 border-b border-white/10 pb-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-zinc-500">Navegação</p>
            </div>

            <div className="grid gap-2">
              <a
                className={`group relative flex items-center justify-between border border-white/8 bg-white/[0.02] px-4 py-4 font-manrope text-lg text-white transition duration-300 hover:border-white/15 hover:bg-white/[0.04] ${pathname === '/' ? 'border-white/15' : ''}`}
                href="/#hero"
                onClick={handleHomeAnchor('hero')}
              >
                <span>Início</span>
                <ArrowRightIcon className="h-4 w-4 text-zinc-500 transition duration-300 group-hover:text-white" />
              </a>
              <a
                className="group relative flex items-center justify-between border border-white/8 bg-white/[0.02] px-4 py-4 font-manrope text-lg text-white transition duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                href="/#sobre"
                onClick={handleHomeAnchor('sobre')}
              >
                <span>Sobre</span>
                <ArrowRightIcon className="h-4 w-4 text-zinc-500 transition duration-300 group-hover:text-white" />
              </a>
              <a
                className={`group relative flex items-center justify-between border border-white/8 bg-white/[0.02] px-4 py-4 font-manrope text-lg text-white transition duration-300 hover:border-white/15 hover:bg-white/[0.04] ${isServicesPage ? 'border-white/15' : ''}`}
                href="/servicos"
                onClick={(event) => {
                  event.preventDefault()
                  setMobileMenuOpen(false)
                  navigateTo('/servicos')
                }}
              >
                <span>Serviços</span>
                <ArrowRightIcon className="h-4 w-4 text-zinc-500 transition duration-300 group-hover:text-white" />
              </a>
              <a
                className="group relative flex items-center justify-between border border-white/8 bg-white/[0.02] px-4 py-4 font-manrope text-lg text-white transition duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                href={isServicesPage ? '#contato' : '/#contato'}
                onClick={isServicesPage ? handleCurrentPageAnchor('contato') : handleHomeAnchor('contato')}
              >
                <span>Fale conosco</span>
                <ArrowRightIcon className="h-4 w-4 text-zinc-500 transition duration-300 group-hover:text-white" />
              </a>
            </div>

            <button
              className="group relative mt-4 flex h-[52px] w-full items-center justify-center overflow-hidden rounded-none bg-white/5 px-6 outline-none transition-transform active:scale-95"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                scrollToId(isServicesPage ? 'services-hero' : 'hero')
              }}
            >
              <span className="absolute inset-[-100%] animate-[spin_3.2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_78%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
              <span className="absolute inset-[1px] rounded-none bg-black z-10"></span>
              <span className="relative z-20 text-xs font-medium uppercase tracking-[0.24em] text-white">Ver topo</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-zinc-900 bg-black pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40"></div>
        <div className="absolute left-[10%] top-10 h-52 w-52 rounded-full bg-[#b2374c]/8 blur-3xl"></div>
        <div className="absolute right-[8%] bottom-10 h-64 w-64 rounded-full bg-white/[0.035] blur-3xl"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="scroll-reveal grid gap-10 border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <div className="mb-8 flex items-center gap-4">
              <img
                src="/assets/logos/logo-navbar.png"
                alt="Impressione-se"
                className="h-12 w-auto object-contain"
              />
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-[0.38em] text-zinc-500">
              Fale conosco
            </p>
            <h2 className="mt-5 max-w-2xl bg-gradient-to-b from-white via-white to-white/55 bg-clip-text font-manrope text-4xl font-medium leading-[1.02] tracking-tighter text-transparent md:text-5xl">
              Vamos construir uma presença digital que realmente impressiona.
            </h2>
            <p className="mt-6 max-w-2xl font-manrope text-lg leading-relaxed text-zinc-400 md:text-xl">
              Conte com uma equipe que une estratégia, criação e execução para posicionar sua marca com força, consistência e resultado.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="group relative inline-flex h-[54px] min-w-[180px] items-center justify-center overflow-hidden rounded-none bg-white/5 px-6 outline-none transition-transform active:scale-95"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#b2374c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                <span className="absolute inset-[1px] rounded-none bg-black z-10"></span>
                <span className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" style={{ background: 'radial-gradient(50% 50% at 50% 100%, rgba(178,55,76,0.2) 0%, transparent 100%)' }}></span>
                <span className="relative z-20 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white">
                  <InstagramIcon />
                  Instagram
                </span>
              </a>

              <a
                className="group relative inline-flex h-[54px] min-w-[180px] items-center justify-center overflow-hidden rounded-none bg-white/5 px-6 outline-none transition-transform active:scale-95"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="absolute inset-0 rounded-none bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                <span className="absolute inset-[1px] rounded-none bg-black z-10"></span>
                <span className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" style={{ background: 'radial-gradient(50% 50% at 50% 100%, rgba(255,255,255,0.16) 0%, transparent 100%)' }}></span>
                <span className="relative z-20 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white">
                  <FacebookIcon />
                  Facebook
                </span>
              </a>
            </div>
          </div>

          <div className="grid gap-5 self-end">
            <div className="group relative overflow-hidden border border-white/10 bg-black/50 p-6 transition-transform duration-500 hover:-translate-y-1">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white">
                <ContactIcon />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">Endereço</p>
              <p className="mt-3 font-manrope text-xl tracking-tight text-white">Rua Pedro Balbinot, 349</p>
              <p className="mt-2 text-base leading-relaxed text-zinc-400">Distrito de Tamanduá Concórdia - SC</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="group relative overflow-hidden border border-white/10 bg-black/50 p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#b2374c]/40 to-transparent"></div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">Telefone</p>
                <p className="mt-4 font-manrope text-1xl tracking-tight text-white">(49) 99943 - 4867</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">Atendimento comercial e suporte ao cliente.</p>
              </div>

              <div className="group relative overflow-hidden border border-white/10 bg-black/50 p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-500">E-mail</p>
                <p className="mt-4 font-manrope text-1xl tracking-tight text-white">impresscione@hotmail.com</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">Escreva para dúvidas, projetos e parcerias.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-reveal mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-sm text-zinc-500 md:flex-row md:items-center">
          <p>© 2026 Impressione Comunicação e Marketing. Todos os direitos reservados.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.32em]">Comunicação • Estratégia • Resultado</p>
        </div>
      </div>
    </footer>
  )
}

function HeroBackground({ useHeavyHeroBackground, className = '', projectKey }) {
  return (
    <>
      {useHeavyHeroBackground ? (
        <div
          className={`aura-background-component absolute top-0 z-0 h-[620px] w-full opacity-50 md:h-[660px] ${className}`}
          data-alpha-mask="80"
          style={{ maskImage: 'linear-gradient(transparent, black 0%, black 76%, transparent)' }}
        >
          <div className="aura-background-component absolute top-0 z-0 h-full w-full">
            <div key={projectKey} className="absolute left-0 top-0 h-full w-full z-0" data-us-project="sajpUiTp7MIKdX6daDCu"></div>
          </div>
        </div>
      ) : (
        <div className={`hero-static-background absolute left-0 top-0 z-0 h-[620px] w-full md:h-[660px] ${className}`}></div>
      )}
      <div className={`absolute left-0 top-0 z-0 h-[620px] w-full bg-black/18 md:h-[660px] ${className}`}></div>
      <div className={`hero-noise pointer-events-none absolute left-0 top-0 z-0 h-[620px] w-full md:h-[660px] ${className}`}></div>
      <div className="hero-beam pointer-events-none absolute z-0"></div>
    </>
  )
}

function HomePage({ heroRef, useHeavyHeroBackground }) {
  return (
    <>
      <section ref={heroRef} id="hero" className="relative isolate flex min-h-[760px] w-full flex-col items-center justify-start overflow-hidden pt-32 md:min-h-[800px] md:pt-20">
        <HeroBackground useHeavyHeroBackground={useHeavyHeroBackground} projectKey="home-hero" />

        <div className="relative z-10 mx-auto mb-10 mt-24 max-w-6xl px-6 text-center md:mb-12">
          <h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] mb-8 flex cursor-default flex-wrap justify-center gap-x-[0.22em] gap-y-2 font-manrope text-6xl font-medium leading-[1.05] tracking-tighter md:text-8xl">
            <span className="leading-[1.2] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent opacity-60">Marketing</span>
            <span className="leading-[1.2] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent opacity-60">que</span>
            <span className="leading-[1.2] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent opacity-100">Impressiona</span>
          </h1>

          <p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] mx-auto mb-0 max-w-4xl font-manrope text-xl font-medium leading-relaxed tracking-normal text-gray-400 md:text-2xl">
            Criamos estratégias e experiências digitais que capturam atenção, geram conexão e transformam visitantes em clientes. Seu marketing com foco real em resultado.
          </p>
        </div>

        <div className="mt-4 w-screen overflow-hidden border-y border-zinc-800 bg-black/40 py-3 md:mt-6">
          <div className="marquee marquee-hover-pause flex w-max whitespace-nowrap">
            {[0, 1, 2].map((group) => (
              <div key={group} className="flex shrink-0 items-center gap-8 px-6 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500 md:px-10" aria-hidden={group > 0}>
                {MARQUEE_ITEMS.map((item, index) => (
                  <span key={`${group}-${item}-${index}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="client-marquee-shell mt-3 w-screen overflow-hidden border-b border-zinc-900 bg-black/65 py-5 md:mt-4 md:py-6">
          <div className="mx-auto mb-5 flex max-w-6xl items-center justify-center px-6 md:mb-6">
            <p className="text-center font-manrope text-lg font-medium tracking-[0.08em] text-white/88 md:text-[1.35rem]">
              Empresas que Impressionam
            </p>
          </div>
          <div className="marquee-reverse marquee-hover-pause flex w-max items-center">
            {[0, 1, 2].map((group) => (
              <div key={group} className="flex shrink-0 items-center gap-4 px-4 md:gap-6 md:px-8" aria-hidden={group > 0}>
                {CLIENT_LOGOS.map((logo, index) => (
                  <div
                    key={`${group}-${logo.src}-${index}`}
                    className="group relative flex h-[84px] w-[176px] shrink-0 items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] px-5 py-4 md:h-[98px] md:w-[208px]"
                    style={{
                      '--border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02), rgba(178,55,76,0.18))',
                      '--border-radius-before': 0,
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(50% 50% at 50% 100%, rgba(178,55,76,0.16) 0%, transparent 100%)' }}></div>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="relative z-10 h-full max-h-[50px] w-full object-contain opacity-88 transition duration-500 group-hover:opacity-100 md:max-h-[62px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden border-t border-zinc-900 bg-black py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:38px_38px] opacity-60"></div>
          <div className="absolute left-[-8%] top-16 h-72 w-72 rounded-full bg-[#b2374c]/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-[-5%] h-80 w-80 rounded-full bg-white/[0.05] blur-3xl"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="scroll-reveal mx-auto mb-16 max-w-5xl text-center md:mb-20">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.38em] text-zinc-500">Sobre a Impressione</p>
            <h2 className="font-manrope text-4xl font-medium leading-[1.02] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/55 md:text-6xl">
              Bem-vindo à Impressione Comunicação e Marketing
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="scroll-reveal scroll-reveal-left order-2 lg:order-1">
              <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-8 md:p-10">
                <div className="mb-6 h-px w-full bg-gradient-to-r from-[#b2374c]/60 via-white/10 to-transparent"></div>
                <p className="font-manrope text-lg leading-[1.75] text-zinc-300 md:text-[1.5rem] md:leading-[1.65]">
                  A Impresscione nasceu da necessidade de uma agência de marketing completa e verdadeiramente diferenciada. Somos uma equipe apaixonada pelo que faz, comprometida em desenvolver estratégias inovadoras que vão além das ideias — entregamos resultados reais. <br/><br/>

                  Nosso diferencial está na forma de trabalhar: unimos criatividade, estratégia e proximidade com o cliente, oferecendo um atendimento exclusivo e personalizado. Porque, para nós, é isso que realmente faz a diferença.
                </p>
              </div>
            </div>

            <div className="scroll-reveal scroll-reveal-right order-1 lg:order-2">
              <div className="relative overflow-hidden border border-white/10 bg-black p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]"></div>
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <div className="relative overflow-hidden border border-white/10 bg-black">
                  <img
                    src="/assets/images/impressiona.png"
                    alt="Impressione Comunicação e Marketing"
                    className="h-[520px] w-full object-cover object-center opacity-80 md:h-[620px]"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_24%)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[#b2374c] shadow-[0_0_12px_rgba(178,55,76,0.8)]"></span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-300">IMPRESSIONE-SE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative overflow-hidden border-t border-zinc-900 bg-black py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:36px_36px] opacity-50"></div>
          <div className="absolute left-[8%] top-16 h-64 w-64 rounded-full bg-[#b2374c]/8 blur-3xl"></div>
          <div className="absolute right-[6%] top-1/3 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="scroll-reveal mx-auto max-w-4xl text-center">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.38em] text-zinc-500">Benefícios</p>
            <h2 className="font-manrope text-4xl font-medium leading-[1.04] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/55 md:text-6xl">
              Sua empresa precisa estar nas redes sociais, seja para vender ou manter uma boa imagem
            </h2>
            <p className="mx-auto mt-8 max-w-3xl font-manrope text-xl font-medium leading-relaxed text-zinc-400 md:text-2xl">
              Aumente a credibilidade da sua empresa com uma boa gestão de redes sociais. Isso é essencial para o seu sucesso.
            </p>
          </div>

          <div className="relative mx-auto mt-16 hidden min-h-[760px] max-w-[1120px] lg:block">
            <div className="pointer-events-none absolute inset-0">
              <svg className="h-full w-full" viewBox="0 0 1120 760" fill="none" preserveAspectRatio="none">
                <path d="M560 280 C435 215 305 155 205 110" stroke="url(#benefit-line-1)" strokeWidth="1.4" opacity="0.55" />
                <path d="M560 280 C685 215 815 155 915 110" stroke="url(#benefit-line-2)" strokeWidth="1.4" opacity="0.55" />
                <path d="M560 280 C420 355 300 435 195 505" stroke="url(#benefit-line-3)" strokeWidth="1.4" opacity="0.5" />
                <path d="M560 280 C700 355 820 435 925 505" stroke="url(#benefit-line-4)" strokeWidth="1.4" opacity="0.5" />
                <path d="M560 280 C520 395 500 515 493 612" stroke="url(#benefit-line-5)" strokeWidth="1.4" opacity="0.45" />
                <defs>
                  <linearGradient id="benefit-line-1" x1="560" y1="280" x2="205" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.42" />
                    <stop offset="1" stopColor="#b2374c" stopOpacity="0.18" />
                  </linearGradient>
                  <linearGradient id="benefit-line-2" x1="560" y1="280" x2="915" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.42" />
                    <stop offset="1" stopColor="#b2374c" stopOpacity="0.18" />
                  </linearGradient>
                  <linearGradient id="benefit-line-3" x1="560" y1="280" x2="195" y2="505" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#b2374c" stopOpacity="0.16" />
                  </linearGradient>
                  <linearGradient id="benefit-line-4" x1="560" y1="280" x2="925" y2="505" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#b2374c" stopOpacity="0.16" />
                  </linearGradient>
                  <linearGradient id="benefit-line-5" x1="560" y1="280" x2="493" y2="612" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.32" />
                    <stop offset="1" stopColor="#b2374c" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="network-core absolute left-1/2 top-[280px] z-20 w-[260px] -translate-x-1/2 -translate-y-1/2">
              <div className="scroll-reveal relative mx-auto flex h-[132px] w-full items-center justify-center">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_58%)]"></div>
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(178,55,76,0.18),transparent_70%)] blur-2xl"></div>
                <img
                  src="/assets/logos/neural-logo.png"
                  alt="Impressione-se"
                  className="relative z-10 h-auto w-[180px] object-contain opacity-95"
                />
              </div>
            </div>

            {BENEFITS.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`scroll-reveal group absolute z-10 w-[250px] ${BENEFIT_NETWORK_LAYOUT[index]} ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
              >
                <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-5 transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-white/20">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div
                      className="absolute -inset-[240%] animate-[spin_5s_linear_infinite]"
                      style={{
                        background:
                          'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 84%, #ffffff 94%, transparent 100%)',
                      }}
                    ></div>
                  </div>
                  <div className="absolute inset-[1px] bg-[linear-gradient(180deg,rgba(16,16,16,0.985),rgba(9,9,9,0.985))]"></div>
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b2374c]/45 to-transparent opacity-50"></div>
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white">
                      <BenefitIcon type={benefit.icon} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-600">0{index + 1}</span>
                  </div>
                  <h3 className="relative mt-5 font-manrope text-[1.2rem] font-medium leading-[1.02] tracking-tight text-white">
                    {benefit.title}
                  </h3>
                  <p className="relative mt-3 text-[0.9rem] leading-relaxed text-zinc-400">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-5 lg:hidden">
            <div className="scroll-reveal relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-7 text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%)]"></div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(178,55,76,0.16),transparent_58%)]"></div>
              <p className="relative font-mono text-[10px] uppercase tracking-[0.36em] text-zinc-500">Ecossistema de valor</p>
              <h3 className="relative mt-4 font-manrope text-3xl font-medium tracking-tighter text-white">Impressione-se</h3>
              <p className="relative mt-4 text-zinc-400">
                Estratégia, presença e execução trabalhando juntas para fortalecer sua marca.
              </p>
            </div>

            {BENEFITS.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`scroll-reveal group relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b2374c]/45 to-transparent opacity-50"></div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white">
                    <BenefitIcon type={benefit.icon} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-600">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-manrope text-[1.35rem] font-medium leading-[1.04] tracking-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-zinc-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage({ useHeavyHeroBackground }) {
  return (
    <>
      <section id="services-hero" className="relative isolate overflow-hidden border-b border-zinc-900 bg-black px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <HeroBackground useHeavyHeroBackground={useHeavyHeroBackground} projectKey="services-hero" className="opacity-40" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:42px_42px] opacity-55"></div>
          <div className="absolute left-[10%] top-10 h-72 w-72 rounded-full bg-[#b2374c]/10 blur-3xl"></div>
          <div className="absolute right-[8%] top-24 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="scroll-reveal mb-5 font-mono text-[11px] uppercase tracking-[0.38em] text-zinc-500">Soluções Impressione-se</p>
          <h1 className="scroll-reveal bg-gradient-to-b from-white via-white to-white/55 bg-clip-text font-manrope text-5xl font-medium leading-[0.98] tracking-tighter text-transparent md:text-7xl">
            Nossos serviços
          </h1>
          <p className="scroll-reveal mx-auto mt-8 max-w-3xl font-manrope text-xl font-medium leading-relaxed text-zinc-400 md:text-2xl">
            Encontre a solução ideal para você.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40"></div>
          <div className="absolute left-[6%] top-[12%] h-64 w-64 rounded-full bg-[#b2374c]/8 blur-3xl"></div>
          <div className="absolute right-[6%] bottom-[12%] h-72 w-72 rounded-full bg-white/[0.03] blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="relative mt-6">
            <div className="pointer-events-none absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-white/0 via-white/12 to-white/0 md:left-1/2 md:-translate-x-1/2"></div>
            <div className="pointer-events-none absolute bottom-0 left-6 top-0 w-[3px] bg-gradient-to-b from-transparent via-[#b2374c]/45 to-transparent blur-[1px] md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-10 md:space-y-14">
              {SERVICES.map((service, index) => (
                <article
                  key={service.title}
                  className={`scroll-reveal relative grid gap-5 md:grid-cols-[1fr_80px_1fr] md:items-center ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                >
                  <div className={`hidden md:block ${index % 2 === 0 ? '' : 'order-3'}`}></div>

                  <div className="relative flex items-center md:order-2">
                    <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black shadow-[0_0_0_8px_rgba(0,0,0,0.95)] md:mx-auto">
                      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(178,55,76,0.24),transparent_70%)] blur-md"></div>
                      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white">
                        <BenefitIcon type={service.icon} />
                      </div>
                    </div>
                    <span className="absolute left-16 font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-600 md:left-1/2 md:top-[calc(100%+16px)] md:-translate-x-1/2">
                      0{index + 1}
                    </span>
                  </div>

                  <div
                    className={`group relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))] p-6 md:p-8 ${
                      index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1 md:row-start-1'
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div
                        className="absolute -inset-[220%] animate-[spin_4.8s_linear_infinite]"
                        style={{
                          background:
                            'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 84%, #ffffff 94%, transparent 100%)',
                        }}
                      ></div>
                    </div>
                    <div className="absolute inset-[1px] bg-[linear-gradient(180deg,rgba(18,18,18,0.985),rgba(9,9,9,0.985))]"></div>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b2374c]/50 to-transparent opacity-50"></div>

                    <div className="relative flex items-center justify-between gap-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-zinc-500">
                        {index === 0 && 'Presença'}
                        {index === 1 && 'Estratégia'}
                        {index === 2 && 'Ativação'}
                        {index === 3 && 'Materiais'}
                        {index === 4 && 'Produção'}
                        {index === 5 && 'Transmissão'}
                      </p>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                    </div>

                    <h3 className="relative mt-5 font-manrope text-[1.9rem] font-medium leading-[1] tracking-tight text-white md:text-[2.3rem]">
                      {service.title}
                    </h3>
                    <p className="relative mt-5 max-w-xl font-manrope text-[1rem] leading-relaxed text-zinc-400 md:text-[1.08rem]">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="scroll-reveal mx-auto mt-20 max-w-4xl border-t border-white/10 pt-14 text-center md:mt-28">
            <p className="font-manrope text-4xl font-medium leading-[1.02] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/55 md:text-6xl">
              E aí? Bora Impressionar?
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-manrope text-lg leading-relaxed text-zinc-400 md:text-xl">
              Da estratégia à execução, criamos jornadas que posicionam sua marca, fortalecem sua imagem e transformam presença em resultado.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const heroRef = useRef(null)
  const [useHeavyHeroBackground, setUseHeavyHeroBackground] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(6)
  const [siteReady, setSiteReady] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [pathname, setPathname] = useState(window.location.pathname === '/servicos' ? '/servicos' : '/')

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallViewport = window.innerWidth < 1100
    const lowCoreCount = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4
    const lowDeviceMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4
    const shouldUseLightMode = reducedMotion || isSmallViewport || lowCoreCount || lowDeviceMemory

    setUseHeavyHeroBackground(!shouldUseLightMode)
    document.documentElement.classList.toggle('reduced-effects', shouldUseLightMode)

    return () => {
      document.documentElement.classList.remove('reduced-effects')
    }
  }, [])

  useEffect(() => {
    let mounted = true
    let visualProgress = 6
    let targetProgress = 12
    let visualTimer
    let finishTimer

    const updateTargetProgress = (value) => {
      targetProgress = Math.max(targetProgress, Math.min(100, value))
    }

    const animateProgress = () => {
      visualTimer = window.setInterval(() => {
        if (!mounted) return

        visualProgress += visualProgress < targetProgress ? 1 : 0
        setLoadingProgress(Math.min(99, visualProgress))

        if (visualProgress >= 99 && targetProgress >= 100) {
          window.clearInterval(visualTimer)
        }
      }, 24)
    }

    const waitForWindowLoad = () =>
      new Promise((resolve) => {
        if (document.readyState === 'complete') {
          updateTargetProgress(30)
          resolve()
          return
        }

        const handleLoad = () => {
          window.removeEventListener('load', handleLoad)
          updateTargetProgress(30)
          resolve()
        }

        window.addEventListener('load', handleLoad, { once: true })
      })

    const waitForFonts = () =>
      new Promise((resolve) => {
        if (!document.fonts?.ready) {
          updateTargetProgress(48)
          resolve()
          return
        }

        document.fonts.ready.finally(() => {
          updateTargetProgress(48)
          resolve()
        })
      })

    const preloadImages = () =>
      Promise.all(
        CRITICAL_IMAGES.map(
          (src) =>
            new Promise((resolve) => {
              const image = new Image()
              const done = () => resolve()
              image.onload = done
              image.onerror = done
              image.src = src

              if (image.complete) {
                resolve()
              }
            }),
        ),
      ).then(() => {
        updateTargetProgress(72)
      })

    const waitForHeroBackground = async () => {
      if (!useHeavyHeroBackground) {
        updateTargetProgress(82)
        return
      }

      const existing = document.querySelector('script[data-unicorn="true"]')

      const initUnicorn = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        } else if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init()
        }
      }

      await new Promise((resolve) => {
        if (window.UnicornStudio) {
          initUnicorn()
          updateTargetProgress(84)
          window.setTimeout(resolve, 900)
          return
        }

        const script = existing || document.createElement('script')

        if (!existing) {
          script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js'
          script.async = true
          script.dataset.unicorn = 'true'
          document.head.appendChild(script)
        }

        const handleReady = () => {
          initUnicorn()
          updateTargetProgress(84)
          window.setTimeout(resolve, 900)
        }

        if (window.UnicornStudio) {
          handleReady()
        } else {
          script.addEventListener('load', handleReady, { once: true })
          window.setTimeout(() => {
            updateTargetProgress(84)
            resolve()
          }, 4000)
        }
      })

      updateTargetProgress(90)
    }

    const waitForStableFrames = async () => {
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      updateTargetProgress(100)
    }

    animateProgress()
    document.body.classList.add('loading-active')

    Promise.all([waitForWindowLoad(), waitForFonts(), preloadImages(), waitForHeroBackground()])
      .then(waitForStableFrames)
      .then(() => {
        if (!mounted) return

        setLoadingProgress(100)
        setSiteReady(true)

        finishTimer = window.setTimeout(() => {
          if (!mounted) return
          setShowLoader(false)
          document.body.classList.remove('loading-active')
        }, 520)
      })

    return () => {
      mounted = false
      document.body.classList.remove('loading-active')
      window.clearInterval(visualTimer)
      window.clearTimeout(finishTimer)
    }
  }, [useHeavyHeroBackground])

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname === '/servicos' ? '/servicos' : '/')
      window.requestAnimationFrame(() => {
        const targetId = window.location.hash.replace('#', '')
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const runRouteLoading = (onComplete) => {
    let progress = 10
    setShowLoader(true)
    setLoadingProgress(progress)
    document.body.classList.add('loading-active')

    const timer = window.setInterval(() => {
      progress = Math.min(progress + 3, 92)
      setLoadingProgress(progress)
    }, 26)

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        onComplete()
        setLoadingProgress(100)

        window.setTimeout(() => {
          window.clearInterval(timer)
          setShowLoader(false)
          document.body.classList.remove('loading-active')
        }, 420)
      })
    })
  }

  const navigateTo = (nextPath, hash = '') => {
    const normalizedPath = nextPath === '/servicos' ? '/servicos' : '/'
    const nextUrl = `${normalizedPath}${hash ? `#${hash}` : ''}`
    const currentUrl = `${pathname}${window.location.hash}`

    if (currentUrl === nextUrl) {
      if (hash) {
        scrollToId(hash)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    runRouteLoading(() => {
      window.history.pushState({}, '', nextUrl)
      setPathname(normalizedPath)

      window.requestAnimationFrame(() => {
        if (hash) {
          scrollToId(hash)
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      })
    })
  }

  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const initialHash = window.location.hash.replace('#', '')
    if (initialHash) {
      window.requestAnimationFrame(() => {
        document.getElementById(initialHash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [pathname])

  useEffect(() => {
    if (!siteReady) return

    if (useHeavyHeroBackground && window.UnicornStudio) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.UnicornStudio.init()
        })
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.classList.contains('scroll-reveal')) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.14, rootMargin: '120px 0px -10% 0px' },
    )

    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      element.classList.remove('is-visible')
    })

    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [siteReady, useHeavyHeroBackground, pathname])

  return (
    <>
      <SiteLoader progress={loadingProgress} visible={showLoader} />

      <div className="gradient-blur" style={{ height: '120px' }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(178,55,76,0.12),transparent_24%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0,transparent_18%,transparent_82%,rgba(255,255,255,0.02)_100%)]"></div>
      </div>

      <SiteNavbar pathname={pathname} navigateTo={navigateTo} scrollToId={scrollToId} />

      <main>
        {pathname === '/' ? <HomePage heroRef={heroRef} useHeavyHeroBackground={useHeavyHeroBackground} /> : <ServicesPage useHeavyHeroBackground={useHeavyHeroBackground} />}
        <SiteFooter />
      </main>
    </>
  )
}

export default App
