function Footer() {
  return (
    <footer>
      <div>
        <img src="/visara-logo-gold.png" alt="Visara Digital" className="footer-logo" />
        <p>Agentes de IA para imobiliárias · Serra Gaúcha</p>
      </div>
      <div className="footer-links">
        <a href="#servicos">O agente</a>
        <a href="#planos">Planos</a>
        <a href="#agentes">Como funciona</a>
        <a href="https://wa.me/5554991612389" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <p>© {new Date().getFullYear()} Visara Digital</p>
    </footer>
  )
}

export default Footer
