const WA = 'https://wa.me/5554991612389?text=Oi!%20Quero%20site%20%2B%20agente%20de%20IA%20pro%20meu%20neg%C3%B3cio'

const stats = [
  { number: '5min', label: 'Lead esperando 5 min já é 80% perdido' },
  { number: '24/7', label: 'Seu negócio atendendo dia, noite, fim de semana' },
  { number: '7d', label: 'Site + agente no ar em 7 dias úteis' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-line" />

      <div className="hero-content">
        <div className="hero-eyebrow">Site + Agente de IA · WhatsApp 24/7</div>
        <h1>Seu negócio <em>nunca mais</em> perde um cliente.</h1>
        <p className="hero-sub">
          A gente entrega o combo: site profissional que aparece no Google + agente de IA que
          atende, qualifica e agenda no seu WhatsApp 24 horas por dia. Pensado pra negócios
          locais da Serra Gaúcha — imobiliária, clínica, comércio, prestador.
        </p>
        <div className="hero-actions">
          <a href={WA} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Quero ver funcionando
          </a>
          <a href="#planos" className="btn-ghost">Ver planos →</a>
        </div>
      </div>

      <div className="hero-right">
        {stats.map((s) => (
          <div className="stat-card" key={s.number}>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
