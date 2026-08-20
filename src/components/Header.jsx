import { useState } from 'react';
import { theme } from '../theme';

const links = ['Skills', 'Experience', 'Projects', 'Education', 'Awards', 'Certifications', 'Social Experience', 'Contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <button
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen(open => !open)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: `1px solid ${theme.cardBorder}`, background: 'transparent',
          color: theme.accent2, borderRadius: '999px', padding: '8px 13px',
          cursor: 'pointer', fontFamily: theme.font, fontSize: '0.78rem',
        }}
      >
        <span style={{ fontSize: '1rem', lineHeight: 1 }}>{menuOpen ? '×' : '☰'}</span>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <nav id="site-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} style={{ display: menuOpen ? 'flex' : 'none', gap: '26px', fontSize: '0.85rem' }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ color: theme.muted, transition: 'color .25s' }}
             onMouseEnter={e => e.target.style.color = theme.accent2}
             onMouseLeave={e => e.target.style.color = theme.muted}>
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}