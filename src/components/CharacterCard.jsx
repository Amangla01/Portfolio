import { useEffect, useRef } from 'react'
import tux from '../assets/tux.png'

const BARS = [
  { label: 'HP',      val: 100, color: '#39ff14' },
  { label: 'XP',      val: 84,  color: '#ffd700', note: '8400 / 10000' },
  { label: 'STAMINA', val: 100, color: '#f0f',    note: '∞' },
]

const STATS = [
  { icon: '⚔', name: 'Coding',          dots: 4, type: 'cyan' },
  { icon: '🧩', name: 'Problem Solving', dots: 4, type: 'gold' },
  { icon: '✦', name: 'Creativity',       dots: 5, type: 'cyan' },
  { icon: '⚡', name: 'Speed',            dots: 4, type: 'cyan' },
  { icon: '∞', name: 'Curiosity',        dots: 5, type: 'gold' },
]

function StatDots({ count, filled, type }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{
          width: 8, height: 8,
          border: '1px solid',
          borderColor: i < filled ? (type === 'gold' ? 'var(--gold)' : 'var(--pixel)') : 'var(--border)',
          background: i < filled ? (type === 'gold' ? 'var(--gold)' : 'var(--pixel)') : 'var(--panel2)',
        }} />
      ))}
    </div>
  )
}

function AnimatedBar({ color, pct, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const t = setTimeout(() => { ref.current.style.width = pct + '%' }, 100 + delay)
    return () => clearTimeout(t)
  }, [pct, delay])

  return (
    <div style={{ height: 10, background: '#0a1a0a', border: '1px solid var(--border)', overflow: 'hidden' }}>
      <div ref={ref} style={{
        height: '100%', background: color,
        width: 0, transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }} />
    </div>
  )
}

export default function CharacterCard({ isMobile }) {
  return (
    <aside>
      <div className="panel" style={{ animationDelay: '0.05s' }}>
        <div className="panel-header">PLAYER CARD</div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'column',
          alignItems: isMobile ? 'center' : 'stretch',
          gap: isMobile ? '1rem' : 0,
          marginBottom: '1rem',
        }}>
          {/* AVATAR */}
          <div style={{
            width: 64, height: 64, flexShrink: 0,
            border: '2px solid var(--pixel)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--panel2)',
            animation: 'pulse-border 3s ease-in-out infinite',
            margin: isMobile ? 0 : '0 auto 0.75rem',
            overflow: 'hidden',
            borderRadius: 2,
          }}>
            <img
              src={tux}
              alt="Tux the Linux penguin"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--gold)', textAlign: isMobile ? 'left' : 'center', letterSpacing: 2, marginBottom: 4 }}>AMAN MANGLA</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: isMobile ? 'left' : 'center', marginBottom: '0.5rem' }}>Web Developer</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,215,0,0.07)', border: '1px solid rgba(255,215,0,0.25)',
              padding: '3px 8px',
              fontFamily: 'var(--font-pixel)', fontSize: 6, color: 'var(--gold)',
            }}>
              ★ LVL 12 — WEB EXPLORER
            </div>
          </div>
        </div>

        {BARS.map(({ label, val, color, note }, i) => (
          <div key={label} style={{ marginBottom: '0.65rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 4, color: 'var(--muted)' }}>
              <span>{label}</span>
              <span style={{ color: 'var(--text)' }}>{note ?? `${val} / 100`}</span>
            </div>
            <AnimatedBar color={color} pct={val} delay={i * 120} />
          </div>
        ))}

        {!isMobile && (
          <>
            <div className="panel-header" style={{ marginTop: '1.25rem' }}>ATTRIBUTES</div>
            {STATS.map(({ icon, name, dots, type }) => (
              <div key={name} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.5rem 0', borderBottom: '1px solid rgba(26,58,92,0.45)', fontSize: 12,
              }}>
                <span style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>{icon}</span>{name}
                </span>
                <StatDots count={5} filled={dots} type={type} />
              </div>
            ))}
          </>
        )}
      </div>
    </aside>
  )
}