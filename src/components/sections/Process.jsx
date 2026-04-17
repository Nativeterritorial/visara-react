const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Analisamos sua presença digital atual — site, Google, redes sociais. Você recebe um relatório completo gratuito.' },
  { num: '02', title: 'Proposta', desc: 'Com base no diagnóstico, apresentamos o plano ideal para o seu negócio e orçamento. Sem enrolação.' },
  { num: '03', title: 'Execução', desc: 'Nossa equipe configura tudo em até 7 dias úteis. Site no ar, Google otimizado, tudo funcionando.' },
  { num: '04', title: 'Resultado', desc: 'Você começa a aparecer para quem busca seu serviço na sua cidade. Clientes novos, mais agendamentos.' },
]

function Process() {
  return (
    <section className="section section-alt">
      <div className="section-label fade-in">Como funciona</div>
      <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
        Do diagnóstico ao <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>resultado</em> em dias
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
