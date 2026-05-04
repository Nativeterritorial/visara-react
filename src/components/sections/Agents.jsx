const features = [
  { name: '📅 Agendamento inteligente', desc: 'Verifica agenda real do corretor + Google Calendar' },
  { name: '📷 Envio automático de fotos', desc: 'Cliente vê o imóvel sem clicar em link nenhum' },
  { name: '🔧 Indicação de profissionais', desc: 'Encanador, eletricista, pintor — rede completa' },
  { name: '💬 Híbrido humano + IA', desc: 'Corretor assume conversa quando quiser, com 1 comando' },
  { name: '🏗️ Loteadoras / Urbanizadoras', desc: 'Empreendimentos + lotes individuais separados' },
]

function Agents() {
  return (
    <section className="section agent-section" id="agentes">
      <div className="agent-bg" />
      <div className="agent-content">
        <div className="fade-in">
          <div className="section-label">Como funciona na prática</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
            Veja a Fá <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>em ação</em>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--gray-light)', marginBottom: 32 }}>
            Cliente real interagindo com o agente da Imobiliária Favero. Tudo isso aconteceu em
            <strong> menos de 60 segundos</strong>, sem corretor nenhum envolvido até a hora certa.
          </p>

          <div className="agent-terminal">
            <div className="terminal-header">
              <div className="dot dot-r" /><div className="dot dot-y" /><div className="dot dot-g" />
            </div>
            <div className="terminal-line"><span className="terminal-gold">›</span> Cliente envia mensagem às 22:47</div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;"Oi, queria saber sobre lotes de vocês"</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Fá responde em <span className="terminal-white">4 segundos</span></div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;"Oi! Que bom que tá interessado 😊</div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;&nbsp;Você procura terreno em loteamento ou lote avulso?"</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Cliente: "loteamento, faixa 100k"</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Fá apresenta <span className="terminal-white">3 lotes + envia fotos</span></div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Cliente quer visitar quinta às 10h</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> Fá <span className="terminal-white">verifica agenda + agenda visita</span></div>
            <div className="terminal-line terminal-dim">&nbsp;&nbsp;Corretor recebe notificação no WhatsApp</div>
            <div className="terminal-line" style={{ marginTop: 8 }}><span className="terminal-gold">›</span> <span className="cursor" /></div>
          </div>
        </div>

        <div className="fade-in">
          <div className="section-label" style={{ marginBottom: 32 }}>Recursos exclusivos</div>
          <div className="agent-plans">
            {features.map((f) => (
              <div className="agent-plan" key={f.name}>
                <div>
                  <div className="agent-plan-name">{f.name}</div>
                  <div className="agent-plan-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--gray-light)', marginTop: 20, lineHeight: 1.6 }}>
            Customizado para o jeito que sua imobiliária trabalha. Você edita os imóveis em uma
            planilha — o agente reflete na próxima conversa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Agents
