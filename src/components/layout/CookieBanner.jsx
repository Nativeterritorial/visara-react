import { useState, useEffect } from 'react'

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookies-aceitos')) setVisible(true)
  }, [])

  function aceitar() {
    localStorage.setItem('cookies-aceitos', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 20, left: 20, right: 20,
      background: '#111',
      border: '1px solid rgba(245,245,240,0.1)',
      padding: '20px 28px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
      borderRadius: 12,
      maxWidth: 1100,
      margin: '0 auto',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    }}>
      <p style={{ color: '#f5f5f0', fontSize: '14px', margin: 0, maxWidth: 700, lineHeight: 1.5, fontFamily: "'Space Grotesk', sans-serif" }}>
        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
        <a href="#" style={{ color: '#d4ff00', textDecoration: 'underline', textUnderlineOffset: 3 }}>Política de Privacidade</a>.
      </p>
      <button onClick={aceitar} style={{
        background: '#d4ff00',
        color: '#0a0a0a',
        border: 'none',
        padding: '12px 24px',
        borderRadius: 100,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: '13px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'transform 0.2s, background 0.2s',
      }}
      onMouseEnter={(e) => { e.target.style.background = '#f5f5f0'; e.target.style.transform = 'translateY(-1px)' }}
      onMouseLeave={(e) => { e.target.style.background = '#d4ff00'; e.target.style.transform = 'translateY(0)' }}
      >Aceitar</button>
    </div>
  )
}

export default CookieBanner
