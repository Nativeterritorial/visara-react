import Reveal from '../Reveal'

const problems = [
  'Cliente busca seu serviço no Google e simplesmente não te encontra',
  'Lead chega no Instagram de madrugada e espera até segunda — quando chega, já fechou com outro',
  'Você responde "qual o valor?" pela 50ª vez no dia em vez de atender quem importa',
  'Agenda bagunçada — visitas/consultas marcadas em cima, esquecimentos, no-show',
  'Sem qualificação — você perde tempo com curioso que nunca ia comprar',
  'Concorrente menos qualificado aparece primeiro só porque tem site decente',
]

function Problem() {
  return (
    <section className="section section-alt" id="servicos">
      <div className="problem-grid">
        <div className="problem-text fade-in">
          <div className="section-label">A realidade</div>
          <Reveal as="h2">Cliente te procura. <em>Você não aparece, nem responde.</em></Reveal>
          <p>
            Negócio local da serra investe em estrutura física, qualidade e atendimento — mas
            ignora dois pontos onde o cliente decide: o Google e o WhatsApp. Sem site não
            aparece. Sem agente, lead chega às 22h e fica esperando.
          </p>
          <p>
            Não é falta de competência. É humanamente impossível estar 24/7 no WhatsApp
            mantendo qualidade. E é injusto perder cliente por causa disso.
          </p>
        </div>
        <ul className="problem-list fade-in">
          {problems.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Problem
