const plans = [
  {
    name: 'Essencial',
    price: '597',
    period: '/mês',
    type: 'Setup R$ 800 · Sem fidelidade',
    waMsg: 'Quero%20o%20plano%20Essencial',
    features: [
      'Atendimento WhatsApp 24/7',
      'Qualificação automática de leads',
      'Apresentação de imóveis com fotos',
      'Transferência inteligente pro corretor',
      'FAQ de locatário (boleto, PIX)',
      'Indicação de profissionais',
      '1 número WhatsApp conectado',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    price: '897',
    period: '/mês',
    type: 'Setup R$ 1.200 · Sem fidelidade',
    waMsg: 'Quero%20o%20plano%20Pro',
    features: [
      'Tudo do Essencial',
      'Agendamento automático Google Calendar',
      'Verificação de conflito de horário',
      'Distribuição entre corretores',
      'Empreendimentos + lotes (loteadoras)',
      'Lembrete automático antes da visita',
      'Comandos do corretor (bloqueio, assumir)',
      'Relatório mensal de leads',
    ],
    featured: true,
    badge: 'Mais popular',
  },
  {
    name: 'Enterprise',
    price: '1.497',
    period: '/mês',
    type: 'Setup R$ 2.000 · Sem fidelidade',
    waMsg: 'Quero%20o%20plano%20Enterprise',
    features: [
      'Tudo do Pro',
      'Múltiplos números (matriz + filiais)',
      'Integração com sistema próprio',
      'Dashboard customizado',
      'Customizações específicas (4h/mês)',
      'Suporte prioritário (resposta em 2h)',
    ],
    featured: false,
  },
]

function Plans() {
  return (
    <section className="section section-alt" id="planos">
      <div className="plans-header">
        <div className="section-label fade-in">Planos · Mensalidade</div>
        <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1 }}>
          Escolha o que <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>sua imobiliária precisa</em>
        </h2>
      </div>
      <div className="plans-grid">
        {plans.map((p) => (
          <div className={`plan-card fade-in${p.featured ? ' featured' : ''}`} key={p.name}>
            {p.badge && <div className="plan-badge">{p.badge}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-price">
              <span>R$</span>{p.price}
              <small style={{ fontSize: 14, color: 'var(--gray-light)', fontWeight: 300 }}>{p.period}</small>
            </div>
            <div className="plan-type">{p.type}</div>
            <ul className="plan-features">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a
              href={`https://wa.me/5554991612389?text=${p.waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`plan-btn ${p.featured ? 'plan-btn-solid' : 'plan-btn-outline'}`}
            >
              Quero esse
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans
