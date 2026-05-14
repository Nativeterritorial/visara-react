import Reveal from '../Reveal'

const features = [
  { name: '📅 Agendamento inteligente', desc: 'Verifica agenda real + Google Calendar antes de marcar' },
  { name: '📷 Envio automático de mídia', desc: 'Fotos, catálogo, vídeos — direto no WhatsApp do cliente' },
  { name: '🏷️ Treinado pro seu setor', desc: 'Imobiliária, clínica, comércio, prestador — vocabulário próprio' },
  { name: '💬 Híbrido humano + IA', desc: 'Você assume a conversa quando quiser, com 1 comando' },
  { name: '📊 Relatórios de lead', desc: 'Quantos chegaram, qualificados, agendados, convertidos' },
]

function Agents() {
  return (
    <section className="section agent-section" id="agentes">
      <div className="agent-bg" />
      <div className="agent-content">
        <div className="fade-in">
          <div className="section-label">Caso real · Imobiliária Favero</div>
          <Reveal as="h2">
            Veja a Fá <em>em ação</em>
          </Reveal>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--gray-light)', marginBottom: 32 }}>
            Cliente real interagindo com o agente da Imobiliária Favero (Veranópolis-RS), nosso
            primeiro cliente em produção. Tudo isso aconteceu em <strong>menos de 60 segundos</strong>,
            sem corretor envolvido até a hora certa. O mesmo mecanismo funciona pra clínica
            agendando consulta, comércio fechando pedido, prestador marcando serviço.
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
            Customizado pro jeito que seu negócio trabalha. Você atualiza informações em uma
            planilha — o agente reflete na próxima conversa. Sem depender da gente pro dia a dia.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Agents
