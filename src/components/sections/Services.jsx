const services = [
  { icon: '◈', title: 'Atende e qualifica 24/7', desc: 'Lead chega de madrugada, fim de semana, feriado — o agente responde em segundos. Qualifica perfil (compra/aluguel, região, faixa de preço, urgência) sem perder tempo do corretor.', tag: 'Sempre online' },
  { icon: '◉', title: 'Manda fotos do imóvel', desc: 'Quando apresenta um imóvel, envia até 3 fotos direto no WhatsApp do cliente. Visualização imediata, sem precisar abrir link, igual corretor humano enviaria.', tag: 'Conversão' },
  { icon: '◎', title: 'Agenda visitas no Calendar', desc: 'Cliente quer visitar quinta às 10h? Agente verifica disponibilidade, agenda na agenda Google do corretor responsável, manda lembrete 1h antes. Tudo automático.', tag: 'Sem conflito' },
  { icon: '⬡', title: 'Atende locatário', desc: '2ª via de boleto, PIX do aluguel, dúvida de contrato, pedido de manutenção. O agente coleta dados estruturados e transfere pro financeiro só o que precisa.', tag: 'Reduz fricção' },
  { icon: '◆', title: 'Indica profissionais', desc: 'Cliente com vazamento, problema elétrico ou querendo pintor? O agente puxa da rede de profissionais cadastrados e indica na hora — gerando relacionamento.', tag: 'Diferencial' },
  { icon: '◇', title: 'Corretor no controle', desc: 'Comandos pelo WhatsApp: bloqueia agenda, assume conversa, libera cliente. Quando o corretor entra, o agente fica em silêncio até o atendimento humano terminar.', tag: 'Híbrido' },
]

function Services() {
  return (
    <section className="section" id="solucoes">
      <div className="section-label fade-in">O que o agente faz</div>
      <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
        Atendimento completo <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>direto no WhatsApp</em>
      </h2>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card fade-in" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tag">{s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
