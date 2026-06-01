export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0',
      animation: 'flicker 8s infinite',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <div style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 'clamp(8px, 2.5vw, 14px)',
          color: 'var(--pixel)',
          letterSpacing: '2px',
          lineHeight: 1.9,
          textShadow: '0 0 18px rgba(0,255,255,0.4)',
        }}>
          PORTFOLIO.EXE<br />
          <span style={{ fontSize: '0.6em', color: 'var(--muted)' }}>PLAYER ONE — SELECT SCREEN</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '10px', color: 'var(--muted)', flexWrap: 'wrap' }}>
          <span>
            <span style={{
              display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
              background: 'var(--green)', marginRight: 5,
              animation: 'blink 1.2s step-end infinite',
            }} />
            ONLINE
          </span>
          <span style={{ color: 'var(--gold)' }}>★ AVAILABLE FOR HIRE</span>
        </div>
      </div>
    </header>
  )
}