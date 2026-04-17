const services = [
  { icon: '◈', title: 'Site Profissional', desc: 'Site rápido, moderno e otimizado para aparecer no Google. Design personalizado para o seu segmento, com foco em conversão.', tag: 'Setup único' },
  { icon: '◉', title: 'Google Meu Negócio', desc: 'Configuração e otimização completa do seu perfil no Google Maps. Apareça quando seu cliente buscar pelo serviço na sua cidade.', tag: 'Setup único' },
  { icon: '◎', title: 'Gestão de Redes', desc: 'Conteúdo estratégico para Instagram e Facebook. Posts que geram autoridade e transformam seguidores em clientes.', tag: 'Mensal' },
  { icon: '⬡', title: 'Google Ads Local', desc: 'Campanhas segmentadas para aparecer quando seu cliente está procurando exatamente o que você oferece. Sem desperdício.', tag: 'Mensal' },
  { icon: '◆', title: 'Agente de IA', desc: 'Robô inteligente que responde clientes no WhatsApp, qualifica leads e agenda automaticamente — 24 horas por dia.', tag: 'Mensal' },
  { icon: '◇', title: 'Diagnóstico Digital', desc: 'Análise completa da sua presença online com score, oportunidades identificadas e plano de ação personalizado.', tag: 'Gratuito' },
]

function Services() {
  return (
    <section className="section" id="solucoes">
      <div className="section-label fade-in">O que entregamos</div>
      <h2 className="fade-in" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
        Presença digital <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>completa</em> — do básico ao avançado
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
