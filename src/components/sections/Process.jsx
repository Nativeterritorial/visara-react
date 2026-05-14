import Reveal from '../Reveal'

const steps = [
  { num: '01', title: 'Conversa inicial', desc: 'Você manda WhatsApp, marcamos call de 30 min. Mostro o agente funcionando ao vivo, entendo seu negócio e defino o plano certo.' },
  { num: '02', title: 'Coleta de dados', desc: 'Te ajudo a preencher a planilha com seus serviços, equipe, agenda, fotos. Primeira vez eu mesmo faço junto pra acelerar.' },
  { num: '03', title: 'Configuração', desc: 'Construo seu site, conecto o WhatsApp Business ao agente, integro com Google Calendar, customizo personalidade. Testes internos antes de virar.' },
  { num: '04', title: 'No ar', desc: 'Em até 7 dias seu site tá no Google e o agente atende clientes reais no WhatsApp. Acompanho a primeira semana de perto pra ajustes finos.' },
]

function Process() {
  return (
    <section className="section section-alt">
      <div className="section-label fade-in">Como começar</div>
      <Reveal as="h2">
        Do contato ao <em>tudo rodando</em> em 7 dias
      </Reveal>
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
