const plans = [
  {
    name: 'Essencial',
    tagline: 'Pra quem tá começando',
    waMsg: 'Quero%20o%20plano%20Essencial',
    features: [
      'Site profissional de 1 página',
      'Google Meu Negócio configurado',
      'Agente IA no WhatsApp 24/7',
      'Qualificação automática de leads',
      'Transferência inteligente pra você',
      'FAQ automático do seu negócio',
      'Domínio + hospedagem inclusos',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    tagline: 'O mais escolhido',
    waMsg: 'Quero%20o%20plano%20Pro',
    features: [
      'Tudo do Essencial',
      'Site completo multi-página',
      'Agendamento automático Google Calendar',
      'Verificação de conflito de horário',
      'Lembrete automático antes do compromisso',
      'Envio de fotos/catálogo no WhatsApp',
      'Distribuição entre múltiplos atendentes',
      'Relatório mensal de leads',
    ],
    featured: true,
    badge: 'Mais popular',
  },
  {
    name: 'Enterprise',
    tagline: 'Operação com volume',
    waMsg: 'Quero%20o%20plano%20Enterprise',
    features: [
      'Tudo do Pro',
      'Múltiplos números (matriz + filiais)',
      'Integração com sistema próprio (CRM/ERP)',
      'Dashboard customizado',
      'Customizações específicas mensais',
      'Suporte prioritário (resposta em 2h)',
      'Treinamento da equipe',
    ],
    featured: false,
  },
]

function Plans() {
  return (
    <section className="section section-alt" id="planos">
      <div className="plans-header">
        <div className="section-label fade-in">Planos</div>
        <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1 }}>
          Escolha o que <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>seu negócio precisa</em>
        </h2>
        <p className="fade-in" style={{ fontSize: 14, color: 'var(--gray-light)', marginTop: 16, maxWidth: 600 }}>
          Valor sob consulta — depende do segmento, volume e integrações. Mande mensagem e em 30 min te passo a proposta.
        </p>
      </div>
      <div className="plans-grid">
        {plans.map((p) => (
          <div className={`plan-card fade-in${p.featured ? ' featured' : ''}`} key={p.name}>
            {p.badge && <div className="plan-badge">{p.badge}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-type" style={{ marginTop: 8 }}>{p.tagline}</div>
            <ul className="plan-features" style={{ marginTop: 32 }}>
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a
              href={`https://wa.me/5554991612389?text=${p.waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`plan-btn ${p.featured ? 'plan-btn-solid' : 'plan-btn-outline'}`}
            >
              Solicitar proposta
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans
