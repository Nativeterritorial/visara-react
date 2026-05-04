import { useState, useEffect } from 'react'

const WA = 'https://wa.me/5554991612389?text=Oi!%20Quero%20ver%20o%20agente%20de%20IA%20funcionando'

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
          <a href="#servicos">O agente</a>
          <a href="#agentes">Como funciona</a>
          <a href="#planos">Planos</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="nav-cta">Falar no WhatsApp</a>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Fechar menu">✕</button>
        <a href="#servicos" onClick={closeMenu}>O agente</a>
        <a href="#agentes" onClick={closeMenu}>Como funciona</a>
        <a href="#planos" onClick={closeMenu}>Planos</a>
        <a href={WA} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>WhatsApp</a>
      </div>
    </>
  )
}

export default Header
