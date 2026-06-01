import { useState, useEffect } from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import SkillTree from './components/SkillTree'
import Quests from './components/Quests'
import Contact from './components/Contact'

const NAV = ['PROFILE', 'SKILLS', 'PROJECTS', 'CONTACT']

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 720)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

export default function App() {
  const [active, setActive] = useState('PROFILE')
  const isMobile = useIsMobile()

  return (
    <>
      <div className="scanline" />
      <Header />

      <div className="container">
        <nav style={{
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap',
          padding: '1.25rem 0 1rem',
        }}>
          {NAV.map(n => (
            <button
              key={n}
              onClick={() => setActive(n)}
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: isMobile ? '6px' : '7px',
                padding: isMobile ? '7px 10px' : '8px 14px',
                border: '1px solid',
                borderColor: active === n ? 'var(--pixel)' : 'var(--border)',
                background: active === n ? 'rgba(0,255,255,0.08)' : 'transparent',
                color: active === n ? 'var(--pixel)' : 'var(--muted)',
                cursor: 'pointer',
                borderRadius: 0,
                letterSpacing: '1px',
                transition: 'all 0.15s',
              }}
            >
              [ {n} ]
            </button>
          ))}
        </nav>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'clamp(240px, 26%, 280px) 1fr',
          gap: '1.25rem',
          paddingBottom: '2rem',
          alignItems: 'start',
        }}>
          <CharacterCard isMobile={isMobile} />

          <main style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {active === 'PROFILE'  && <Profile isMobile={isMobile} />}
            {active === 'SKILLS'   && <SkillTree isMobile={isMobile} />}
            {active === 'PROJECTS' && <Quests isMobile={isMobile} />}
            {active === 'CONTACT'  && <Contact />}
          </main>
        </div>
      </div>

      <Ticker />
    </>
  )
}

function Profile({ isMobile }) {
  return (
    <div className="panel" style={{ animationDelay: '0.1s' }}>
      <div className="panel-header">MISSION BRIEFING</div>
      <p style={{ fontSize: isMobile ? '12px' : '13px', lineHeight: '1.9', color: 'var(--text)' }}>
        Hey, I'm <span style={{ color: 'var(--gold)' }}>Aman Mangla</span> — a developer
        who genuinely loves the puzzle side of coding. Aptitude problems, tricky logic,
        building things from scratch — that's my zone.<br /><br />
        I've fought through{' '}
        <span style={{ color: 'var(--pixel)' }}>C / C++</span> and{' '}
        <span style={{ color: 'var(--pixel)' }}>JavaScript</span>, and landed firmly
        in <span style={{ color: 'var(--pixel2)' }}>web development</span> as my main
        battlefield. Currently pushing into new territory —{' '}
        <span style={{ color: 'var(--green)' }}>Web3 &amp; Solidity</span> — because
        why stop leveling up?<br /><br />
        I've also got hands-on time with{' '}
        <span style={{ color: 'var(--gold)' }}>AWS &amp; cloud computing</span>, and
        I'm always chasing the next thing worth learning.
        <span style={{
          display: 'inline-block', width: 8, height: 14,
          background: 'var(--pixel)', marginLeft: 4,
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }} />
      </p>
    </div>
  )
}

function Ticker() {
  const msg = '★ SELF-TAUGHT DEVELOPER   ✦ ALWAYS BUILDING   ⚡ WEB · WEB3 · CLOUD   ◈ OPEN TO OPPORTUNITIES   ✦ ALWAYS SHIPPING   ★ PRESS START TO HIRE   '
  return (
    <div style={{ borderTop: '1px solid var(--border)', padding: '0.5rem 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <span style={{
        display: 'inline-block',
        fontFamily: 'var(--font-pixel)',
        fontSize: '9px',
        color: 'var(--muted)',
        letterSpacing: '1px',
        animation: 'ticker 28s linear infinite',
      }}>
        {msg}{msg}
      </span>
    </div>
  )
}