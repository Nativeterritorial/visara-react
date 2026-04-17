const WA = 'https://wa.me/5554991612389?text=Olá!%20Quero%20meu%20diagnóstico%20digital%20gratuito'

function CTA() {
  return (
    <section className="cta-section" id="contato">
      <div className="cta-bg" />
      <div style={{ position: 'relative' }}>
        <div className="section-label fade-in" style={{ textAlign: 'center' }}>Comece hoje</div>
        <h2 className="fade-in">Receba seu diagnóstico <em>gratuito</em></h2>
        <p className="fade-in">
          Analisamos sua presença digital em minutos e mostramos exatamente o que está
          perdendo — sem compromisso.
        </p>
        <a href={WA} className="btn-primary fade-in" target="_blank" rel="noopener noreferrer">
          Solicitar diagnóstico grátis
        </a>
      </div>
    </section>
  )
}

export default CTA
