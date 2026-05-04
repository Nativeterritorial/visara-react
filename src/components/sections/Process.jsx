const steps = [
  { num: '01', title: 'Conversa inicial', desc: 'Você manda WhatsApp, marcamos uma call de 30 min. Mostro o agente funcionando ao vivo, entendo as dores específicas da sua imobiliária e definimos plano.' },
  { num: '02', title: 'Coleta de dados', desc: 'Te ajudo a preencher a planilha com seus imóveis, empreendimentos, corretores e profissionais da rede. A primeira vez eu mesmo faço junto pra acelerar.' },
  { num: '03', title: 'Configuração', desc: 'Conecto seu WhatsApp Business ao agente, integro com Google Calendar dos corretores, customizo personalidade e empresa. Testes internos antes de virar.' },
  { num: '04', title: 'Agente no ar', desc: 'Em até 7 dias o agente está atendendo clientes reais no seu WhatsApp. Acompanho a primeira semana de perto pra ajustes finos.' },
]

function Process() {
  return (
    <section className="section section-alt">
      <div className="section-label fade-in">Como começar</div>
      <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
        Do contato ao <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>agente rodando</em> em 7 dias
      </h2>
      <div className="process-steps">
        {steps.map((s) => (
          <div className="step fade-in" key={s.num}>
            <div className="step-num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
