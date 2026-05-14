import { useRef, useState } from 'react'

const projects = [
  { name: 'Pulse Jiu Jitsu', url: 'https://pulsejiujitsu.com.br' },
  { name: 'GN Massoterapia', url: 'https://gnmassoterapia.com.br' },
  { name: 'Native Territorial', url: 'https://nativeterritorial.com.br' },
  { name: 'Clivitare', url: 'https://clivitare.com.br' },
  { name: 'Box Garage Detail', url: 'https://boxgaragedetail.com.br' },
]

const shot = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=600`

function Portfolio() {
  const sectionRef = useRef(null)
  const previewRef = useRef(null)
  const [active, setActive] = useState(null)

  const onMove = (e) => {
    const sec = sectionRef.current
    const prev = previewRef.current
    if (!sec || !prev) return
    const r = sec.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    prev.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  }

  return (
    <section
      className="section portfolio"
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={() => setActive(null)}
    >
      <div className="portfolio-ghost" aria-hidden="true">Projetos</div>

      <div className="section-label fade-in">01 / Portfólio</div>
      <h2 className="portfolio-title fade-in">
        Sites que <em>já estão no ar</em>
      </h2>

      <ul className="portfolio-list">
        {projects.map((p, i) => (
          <li
            key={p.url}
            className={`portfolio-item fade-in ${active && active !== p.url ? 'is-dim' : ''}`}
            onMouseEnter={() => setActive(p.url)}
          >
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <span className="portfolio-name">{p.name}</span>
              <sup className="portfolio-num">{String(i + 1).padStart(2, '0')}</sup>
            </a>
          </li>
        ))}
      </ul>

      <div
        ref={previewRef}
        className={`portfolio-preview ${active ? 'is-on' : ''}`}
        aria-hidden="true"
      >
        {active && (
          <img key={active} src={shot(active)} alt="" className="is-on" />
        )}
      </div>
    </section>
  )
}

export default Portfolio
