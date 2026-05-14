function Footer() {
  return (
    <footer>
      <div>
        <span className="footer-logo-text">
          <span className="footer-logo-dot" />VISARA
        </span>
        <p>Site + Agente de IA para negócios locais · Serra Gaúcha</p>
      </div>
      <div className="footer-links">
        <a href="#servicos">Serviços</a>
        <a href="#planos">Planos</a>
        <a href="#agentes">Como funciona</a>
        <a href="https://wa.me/5554991612389" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <p>© {new Date().getFullYear()} Visara Digital</p>
    </footer>
  )
}

export default Footer
