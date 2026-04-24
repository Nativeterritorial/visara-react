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
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: '#1a1a1a',
      borderTop: '1px solid rgba(201,169,110,0.2)',
      padding: '1rem 2rem',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <p style={{ color: '#f5f2ee', fontSize: '0.85rem', margin: 0, maxWidth: 700 }}>
        Usamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com nossa{' '}
        <a href="#" style={{ color: '#c9a96e', textDecoration: 'underline' }}>Política de Privacidade</a>.
      </p>
      <button onClick={aceitar} style={{
        background: '#c9a96e',
        color: '#080808',
        border: 'none',
        padding: '0.5rem 1.5rem',
        borderRadius: 4,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: '0.85rem',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}>Aceitar</button>
    </div>
  )
}

export default CookieBanner
