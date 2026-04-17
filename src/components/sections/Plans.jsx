const plans = [
  {
    name: 'Starter',
    price: '397',
    type: 'Pagamento único · Sem mensalidade',
    features: ['Site profissional de 1 página', 'Google Meu Negócio configurado', 'Fotos e textos otimizados', 'Domínio por 1 ano', 'Hospedagem por 1 ano', 'Suporte 30 dias'],
    featured: false,
  },
  {
    name: 'Profissional',
    price: '797',
    type: 'Pagamento único · Sem mensalidade',
    features: ['Site completo multi-página', 'Google Meu Negócio otimizado', 'Instagram configurado e bio otimizada', 'Diagnóstico digital completo', 'Integração WhatsApp Business', 'Domínio + hospedagem 1 ano', 'Suporte 60 dias'],
    featured: true,
    badge: 'Mais popular',
  },
  {
    name: 'Premium',
    price: '1.497',
    type: 'Pagamento único · Sem mensalidade',
    features: ['Tudo do Profissional', 'Google Ads configurado e ativo', 'Agente de IA no WhatsApp', 'Meta Ads configurado', 'Relatório de performance mensal', 'Suporte prioritário 90 dias'],
    featured: false,
  },
]

function Plans() {
  return (
    <section className="section section-alt" id="planos">
      <div className="plans-header">
        <div className="section-label fade-in">Setup — Pagamento único</div>
        <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1 }}>
          Comece com o que <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>você precisa agora</em>
        </h2>
      </div>
      <div className="plans-grid">
        {plans.map((p) => (
          <div className={`plan-card fade-in${p.featured ? ' featured' : ''}`} key={p.name}>
            {p.badge && <div className="plan-badge">{p.badge}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-price"><span>R$</span>{p.price}</div>
            <div className="plan-type">{p.type}</div>
            <ul className="plan-features">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#contato" className={`plan-btn ${p.featured ? 'plan-btn-solid' : 'plan-btn-outline'}`}>
              Começar agora
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans
