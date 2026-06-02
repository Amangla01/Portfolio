const PROJECTS = [
  {
    icon: '🎵',
    title: 'MUSIC PREVIEW APP',
    desc: 'Search any song and get a 30-second preview with full track info. Pulls live data from a music API.',
    tags: [{ name: 'JavaScript', type: 'gold' }, { name: 'React', type: '' }, { name: 'Music API', type: 'green' }],
    locked: false,
    github: 'https://music.amangla.xyz/',
  },
  {
    icon: '⏱',
    title: 'POMODORO TIMER',
    desc: 'Focus timer built on the Pomodoro technique. Work sessions, breaks, and session tracking.',
    tags: [{ name: 'JavaScript', type: 'gold' }, { name: 'React', type: '' }, { name: 'CSS', type: 'green' }],
    locked: false,
    github: 'https://github.com/Amangla01/Pomodoro-Timer',
  },
  {
    icon: '📖',
    title: 'COLLAB STORY BUILDER',
    desc: 'Full-stack real-time collaborative writing app. Room-code sessions, live sync, MVC backend.',
    tags: [{ name: 'React', type: 'gold' }, { name: 'Socket.io', type: '' }, { name: 'MongoDB', type: 'green' }, { name: 'Express', type: '' }],
    locked: false,
    github: 'https://github.com/Amangla01/Collab-story-builder',
  },
  {
    icon: '⌨',
    title: 'KEYBOARD GAME',
    desc: 'Interactive browser game testing your keyboard speed and accuracy. Early project, pure JS.',
    tags: [{ name: 'JavaScript', type: 'gold' }, { name: 'HTML', type: '' }, { name: 'CSS', type: 'green' }],
    locked: false,
    github: 'https://github.com/Amangla01/Keyboard-Game',
  },
  {
    icon: '▶',
    title: 'YOUTUBE CLONE',
    desc: 'Frontend clone of YouTube. UI replication exercise — video cards, sidebar, search bar.',
    tags: [{ name: 'HTML', type: 'gold' }, { name: 'CSS', type: '' }],
    locked: false,
    github: 'https://github.com/Amangla01/Youtube-clone',
  },
  {
    icon: '💼',
    title: 'JOB FREAK CLONE',
    desc: 'Clone of a job listing platform. Layout and component replication for frontend practice.',
    tags: [{ name: 'HTML', type: 'gold' }, { name: 'CSS', type: '' }],
    locked: false,
    github: 'https://github.com/Amangla01/Job-Freak-Clone',
  },
  {
    icon: '🔒',
    title: '??? QUEST',
    desc: 'Next mission loading...',
    tags: [{ name: 'LOCKED', type: '' }],
    locked: true,
    github: null,
  },
]

export default function Quests({ isMobile }) {
  return (
    <div className="panel" style={{ animationDelay: '0.1s' }}>
      <div className="panel-header">COMPLETED QUESTS</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1rem',
      }}>
        {PROJECTS.map((p, i) => <QuestCard key={i} {...p} />)}
      </div>
    </div>
  )
}

function QuestCard({ icon, title, desc, tags, locked, github }) {
  return (
    <div
      style={{
        background: 'var(--panel2)',
        border: '1px solid var(--border)',
        borderRadius: 2,
        padding: '1rem',
        opacity: locked ? 0.35 : 1,
        cursor: locked ? 'default' : 'pointer',
        transition: 'border-color 0.2s',
        position: 'relative',
      }}
      onMouseEnter={e => { if (!locked) e.currentTarget.style.borderColor = 'rgba(0,255,255,0.5)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
      onClick={() => { if (!locked && github) window.open(github, '_blank') }}
    >
      {!locked && (
        <div style={{
          position: 'absolute', top: 8, right: 8,
          fontFamily: 'var(--font-pixel)', fontSize: 5,
          color: 'var(--green)', letterSpacing: 1,
          padding: '2px 5px', border: '1px solid rgba(57,255,20,0.35)',
        }}>UNLOCKED</div>
      )}

      <div style={{
        width: 40, height: 40,
        border: `1px solid ${locked ? 'var(--border)' : 'var(--gold)'}`,
        background: 'var(--panel)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, marginBottom: '0.75rem', borderRadius: 2,
      }}>{icon}</div>

      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 6,
        color: locked ? 'var(--muted)' : 'var(--gold)',
        letterSpacing: 1, marginBottom: 6, lineHeight: 1.6,
      }}>{title}</div>

      <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0.6rem' }}>{desc}</div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {tags.map(({ name, type }) => (
          <span key={name} className={`tag ${type ? 'tag-' + type : ''}`}>{name}</span>
        ))}
      </div>
    </div>
  )
}
