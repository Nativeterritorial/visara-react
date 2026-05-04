const WA = 'https://wa.me/5554991612389?text=Oi!%20Quero%20ver%20o%20agente%20funcionando'

const stats = [
  { number: '5min', label: 'Lead que demora 5 min pra ser atendido = 80% perdido' },
  { number: '24/7', label: 'Atende lead a qualquer hora, sem perder venda' },
  { number: '7d', label: 'Implantação completa em 7 dias úteis' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-line" />

      <div className="hero-content">
        <div className="hero-eyebrow">Agente IA · WhatsApp · Imobiliárias</div>
        <h1>Sua imobiliária perde lead <em>enquanto dorme.</em></h1>
        <p className="hero-sub">
          Agente de IA que atende, qualifica, manda fotos e agenda visitas no WhatsApp 24 horas
          por dia — direto na agenda do corretor. Já implantado na Imobiliária Favero, em
          produção há semanas.
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
