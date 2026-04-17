const agentPlans = [
  { name: 'Agente Básico', desc: 'Responde WhatsApp automaticamente', price: 'R$297', period: '/mês' },
  { name: 'Agente Pro', desc: 'WhatsApp + qualificação + agendamento', price: 'R$497', period: '/mês' },
  { name: 'Agente Full', desc: 'Prospecção + atendimento + relatório', price: 'R$797', period: '/mês' },
]

function Agents() {
  return (
    <section className="section agent-section" id="agentes">
      <div className="agent-bg" />
      <div className="agent-content">
        <div className="fade-in">
          <div className="section-label">Tecnologia</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
            Agentes de IA que <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>trabalham por você</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--gray-light)', marginBottom: 32 }}>
            Já tem site e Google configurados? Leve seu negócio para o próximo nível com automação
            inteligente. Nossos agentes respondem clientes, qualificam leads e agendam — enquanto
            você foca no que sabe fazer.
          </p>

          <div className="agent-terminal">
            <div className="terminal-header">
              <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
            </div>
            <div className="terminal-line"><span className="terminal-gold">›</span> Cliente envia mensagem às 22:47</div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;"Boa noite, quero agendar uma consulta"</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Agente responde em <span className="terminal-white">3 segundos</span></div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;"Olá! Temos horários disponíveis na terça..."</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Lead qualificado e <span className="terminal-white">agendamento confirmado</span></div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;Você recebe notificação pela manhã</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> <span className="cursor" /></div>
          </div>
        </div>

        <div className="fade-in">
          <div className="section-label" style={{ marginBottom: 32 }}>Planos mensais — Agentes IA</div>
          <div className="agent-plans">
            {agentPlans.map((p) => (
              <div className="agent-plan" key={p.name}>
                <div>
                  <div className="agent-plan-name">{p.name}</div>
                  <div className="agent-plan-desc">{p.desc}</div>
                </div>
                <div className="agent-plan-price">{p.price}<small>{p.period}</small></div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--gray-light)', marginTop: 20, lineHeight: 1.6 }}>
            Ideal para negócios que já têm presença digital estruturada e querem automatizar
            o atendimento e a captação de novos clientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Agents
