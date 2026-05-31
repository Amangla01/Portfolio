const LINKS = [
  { icon: '✉', label: 'amanmangla450@gmail.com',        sub: 'EMAIL',    href: 'mailto:amanmangla450@gmail.com' },
  { icon: '⌥', label: 'github.com/Amangla01',           sub: 'GITHUB',   href: 'https://github.com/Amangla01' },
  { icon: '◈', label: 'linkedin.com/in/amangla01',      sub: 'LINKEDIN', href: 'https://www.linkedin.com/in/amangla01/' },
]

function ContactRow({ icon, label, sub, href, last }) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.65rem 0',
        borderBottom: last ? 'none' : '1px solid rgba(26,58,92,0.45)',
        fontSize: 12,
        color: 'var(--text)',
        transition: 'color 0.15s',
        textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--pixel)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)' }}
    >
      <span style={{ fontSize: 16, color: 'var(--pixel2)', width: 20 }}>{icon}</span>
      <span>{label}</span>
      <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--muted)' }}>
        {'->'} {sub}
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <div className="panel" style={{ animationDelay: '0.1s' }}>
      <div className="panel-header">SEND MESSAGE</div>
      {LINKS.map((link, i) => (
        <ContactRow key={i} {...link} last={i === LINKS.length - 1} />
      ))}
    </div>
  )
}