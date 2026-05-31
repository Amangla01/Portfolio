export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '1.2rem 0',
      animation: 'flicker 8s infinite',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(9px, 2vw, 15px)', color: 'var(--pixel)', letterSpacing: '2px', lineHeight: 1.9, textShadow: '0 0 18px rgba(0,255,255,0.4)' }}>
          PORTFOLIO.EXE<br />
          <span style={{ fontSize: '0.6em', color: 'var(--muted)' }}>PLAYER ONE — SELECT SCREEN</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '11px', color: 'var(--muted)' }}>
          <span>
            <span style={{
              display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
              background: 'var(--green)', marginRight: 6,
              animation: 'blink 1.2s step-end infinite',
            }} />
            ONLINE
          </span>
          <span>v2.6.0</span>
          <span style={{ color: 'var(--gold)' }}>★ AVAILABLE FOR HIRE</span>
        </div>
      </div>
    </header>
  )
}