import { theme } from '../theme';

const links = ['Skills', 'Experience', 'Projects', 'Education', 'Awards', 'Certifications', 'Social Experience', 'Contact'];

export default function Header() {
  return (
    <header className="site-header" style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '22px 6vw', position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(5, 7, 10, 0.78)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${theme.cardBorder}`, width: '100%',
    }}>
      <div style={{ fontFamily: theme.fontDisplay, fontWeight: 700, fontSize: '1.3rem' }}>
        Adem <span style={{ color: theme.accent }}>Trabelsi</span>
      </div>
      <nav className="site-nav" style={{ display: 'flex', gap: '26px', fontSize: '0.85rem' }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: theme.muted, transition: 'color .25s' }}
             onMouseEnter={e => e.target.style.color = theme.accent2}
             onMouseLeave={e => e.target.style.color = theme.muted}>
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}