const problems = [
  'Lead chega fora do horário comercial — perde 80% antes mesmo do bom dia',
  'Corretor preso respondendo "qual o valor do aluguel" pela 50ª vez no dia',
  'Cliente quer visitar amanhã às 10h — corretor só responde depois de almoço',
  'Locatário pedindo 2ª via de boleto enche o WhatsApp do corretor',
  'Sem qualificação — corretor perde tempo com curiosos que não compram',
  'Agenda bagunçada — visitas marcadas em cima, esquecimentos, no-show',
]

function Problem() {
  return (
    <section className="section section-alt" id="servicos">
      <div className="problem-grid">
        <div className="problem-text fade-in">
          <div className="section-label">A realidade</div>
          <h2>Lead chega de noite. <em>Ninguém atende.</em></h2>
          <p>
            Imobiliária investe milhares em anúncios no Facebook, Instagram, ZAP, Viva Real.
            O lead chega às 22h, no domingo, no almoço. E fica esperando. Quando o corretor
            responde, o cliente já fechou com a concorrência.
          </p>
          <p>
            Não é falta de competência do corretor. É humanamente impossível atender 24 horas
            por dia, com qualidade, todos os leads que chegam.
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
