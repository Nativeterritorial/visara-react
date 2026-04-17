import { useState, useEffect } from 'react'

const WA = 'https://wa.me/5554991612389?text=Olá!%20Quero%20meu%20diagnóstico%20digital%20gratuito'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <img src="/visara-logo-gold.png" alt="Visara Digital" />
        </a>
        <div className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#agentes">Agentes IA</a>
          <a href="#planos">Planos</a>
          <a href="#contato" className="nav-cta">Diagnóstico Grátis</a>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Fechar menu">✕</button>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#agentes" onClick={closeMenu}>Agentes IA</a>
        <a href="#planos" onClick={closeMenu}>Planos</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </div>
    </>
  )
}

export default Header
