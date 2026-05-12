const services = [
  { icon: '◈', title: 'Site profissional', desc: 'Site rápido, moderno, otimizado pra aparecer no Google quando seu cliente busca pelo seu serviço na sua cidade. Design feito sob medida pro seu segmento.', tag: 'Setup' },
  { icon: '◉', title: 'Google Meu Negócio', desc: 'Perfil configurado, otimizado e ativo — você aparece no Maps com fotos, horário, avaliações e link direto pro WhatsApp.', tag: 'Setup' },
  { icon: '◎', title: 'Agente IA 24/7', desc: 'Atende WhatsApp em segundos a qualquer hora — qualifica, manda fotos/catálogo, tira dúvidas. Não dorme, não fica de mau humor, não esquece de responder.', tag: 'Mensal' },
  { icon: '⬡', title: 'Agendamento automático', desc: 'Cliente quer marcar visita, consulta, orçamento? O agente verifica agenda real (Google Calendar), agenda e manda lembrete. Sem conflito, sem no-show.', tag: 'Mensal' },
  { icon: '◆', title: 'Customizado pro seu setor', desc: 'Imobiliária, clínica, comércio, prestador — cada segmento tem o agente treinado com o vocabulário, os fluxos e as integrações certas.', tag: 'Diferencial' },
  { icon: '◇', title: 'Você no controle', desc: 'Comandos pelo WhatsApp: assume conversa, bloqueia agenda, libera cliente. Quando você entra, o agente fica em silêncio. Híbrido humano + IA.', tag: 'Híbrido' },
]

function Services() {
  return (
    <section className="section" id="solucoes">
      <div className="section-label fade-in">O que entregamos</div>
      <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
        Site + Agente IA — <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>o combo completo</em>
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
