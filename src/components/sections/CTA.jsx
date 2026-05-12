const WA = 'https://wa.me/5554991612389?text=Oi!%20Quero%20ver%20o%20site%20%2B%20agente%20funcionando%20pro%20meu%20neg%C3%B3cio'

function CTA() {
  return (
    <section className="cta-section" id="contato">
      <div className="cta-bg" />
      <div style={{ position: 'relative' }}>
        <div className="section-label fade-in" style={{ textAlign: 'center' }}>Vamos conversar</div>
        <h2 className="fade-in">Quer ver <em>funcionando</em>?</h2>
        <p className="fade-in">
          Manda mensagem que te chamo numa call rápida e mostro o agente atendendo ao vivo.
          30 minutos pra você decidir se faz sentido pro seu negócio.
        </p>
        <a href={WA} className="btn-primary fade-in" target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}

export default CTA
