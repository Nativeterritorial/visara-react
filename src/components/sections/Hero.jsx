const WA = 'https://wa.me/5554991612389?text=Olá!%20Quero%20meu%20diagnóstico%20digital%20gratuito'

const stats = [
  { number: '119+', label: 'Negócios analisados esta semana' },
  { number: '84%', label: 'Clínicas sem presença digital adequada' },
  { number: '7h', label: 'Nosso agente prospeta enquanto você dorme' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-line" />

      <div className="hero-content">
        <div className="hero-eyebrow">Presença Digital Premium</div>
        <h1>Seu negócio <em>visível</em> para quem importa</h1>
        <p className="hero-sub">
          Transformamos pequenos negócios locais em referências digitais na Serra Gaúcha —
          com sites, Google, e agentes de IA que trabalham enquanto você atende.
        </p>
        <div className="hero-actions">
          <a href={WA} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Diagnóstico Gratuito
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
