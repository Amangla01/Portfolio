import { useEffect, useRef } from 'react'

const SKILLS = [
  { name: 'Problem Solving', pct: 48 },
  { name: 'JavaScript', pct: 55 },
  { name: 'C / C++', pct: 55 },
  { name: 'React / Frontend', pct: 45 },
  { name: 'Git / GitHub', pct: 45 },
  { name: 'SQL / Databases', pct: 35 },
  { name: 'AWS / Cloud', pct: 35 },
  { name: 'Solidity / Web3', pct: 35 },
]

const TOOLS = [
  { name: 'VS Code', type: '' },
  { name: 'Git', type: 'gold' },
  { name: 'React', type: '' },
  { name: 'GitHub', type: 'gold' },
  { name: 'AWS', type: 'green' },
  { name: 'Metamask', type: 'green' },
  { name: 'Hardhat', type: '' },
  { name: 'Linux', type: 'gold' },
  { name: 'Claude.ai', type: '' },
  { name: '{JS}', type: '' },
]

function SkillBar({ name, pct, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const t = setTimeout(() => { ref.current.style.width = pct + '%' }, 150 + delay)
    return () => clearTimeout(t)
  }, [pct, delay])

  return (
    <div style={{ marginBottom: '0.8rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 5, color: 'var(--text)' }}>
        <span>{name}</span>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 7, color: 'var(--pixel)' }}>{pct}%</span>
      </div>
      <div style={{ height: 8, background: 'var(--panel2)', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div ref={ref} style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--pixel), var(--pixel2))',
          width: 0,
          transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        }} />
      </div>
    </div>
  )
}

export default function SkillTree() {
  const half = Math.ceil(SKILLS.length / 2)
  const left = SKILLS.slice(0, half)
  const right = SKILLS.slice(half)

  return (
    <div className="panel" style={{ animationDelay: '0.1s' }}>
      <div className="panel-header">SKILL TREE</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2.5rem' }}>
        <div>{left.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 80} />)}</div>
        <div>{right.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 80 + 40} />)}</div>
      </div>

      <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 7, color: 'var(--pixel)',
          letterSpacing: 2, marginBottom: '0.75rem',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          EQUIPPED ITEMS
          <span style={{ flex: 1, height: 1, background: 'var(--border)', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {TOOLS.map(({ name, type }) => (
            <span key={name} className={`tag ${type ? 'tag-' + type : ''}`}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}