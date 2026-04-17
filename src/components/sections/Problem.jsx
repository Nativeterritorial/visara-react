const problems = [
  'Google Meu Negócio desatualizado ou inexistente — clientes não te encontram no Maps',
  'Site desatualizado ou sem otimização — não aparece nas buscas locais',
  'Instagram sem estratégia — seguidores mas sem conversão em clientes',
  'Nenhuma automação — você responde WhatsApp às 23h ou perde o lead',
  'Zero campanhas pagas — concorrentes aparecem antes mesmo na pesquisa',
  'Sem dados — não sabe quantos clientes vêm do digital',
]

function Problem() {
  return (
    <section className="section section-alt" id="servicos">
      <div className="problem-grid">
        <div className="problem-text fade-in">
          <div className="section-label">O problema</div>
          <h2>Seu cliente te procura no Google. <em>Você não aparece.</em></h2>
          <p>
            A maioria dos negócios locais da Serra Gaúcha investe em estrutura física mas
            ignora a presença digital. Resultado: perde clientes todo dia para concorrentes
            menos qualificados que simplesmente aparecem primeiro.
          </p>
          <p>Não é falta de qualidade no serviço. É falta de visibilidade onde o cliente decide.</p>
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
