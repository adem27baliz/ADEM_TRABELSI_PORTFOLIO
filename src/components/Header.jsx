import { useState, useEffect } from 'react';
import { theme } from '../theme';

const links = ['Skills', 'Experience', 'Projects', 'Education', 'Awards', 'Certifications', 'Contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase().replace(' ', '-'));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: scrolled ? '14px 6vw' : '22px 6vw',
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? 'rgba(5,7,10,0.92)' : 'rgba(5,7,10,0.78)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? theme.cardBorder : 'transparent'}`,
        width: '100%', transition: 'padding .3s, background .3s, border-color .3s',
      }}>

        {/* Logo */}
        <a href="#" style={{ fontFamily: theme.fontDisplay, fontWeight: 700, fontSize: '1.3rem', textDecoration: 'none', color: theme.ink }}>
          Adem <span style={{ color: theme.accent }}>Trabelsi</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '6px', fontSize: '0.85rem' }} className="desktop-nav">
          {links.map(l => {
            const id = l.toLowerCase().replace(' ', '-');
            const isActive = active === id;
            return (
              <a key={l} href={`#${id}`} style={{
                color: isActive ? theme.accent : theme.muted,
                padding: '6px 12px', borderRadius: '999px',
                background: isActive ? `${theme.accent}18` : 'transparent',
                transition: 'color .2s, background .2s',
                fontWeight: isActive ? 500 : 400,
              }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = theme.ink; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = theme.muted; }}>
                {l}
              </a>
            );
          })}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(o => !o)}
          className="burger-btn"
          style={{
            display: 'none',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            gap: '5px', width: '40px', height: '40px',
            border: `1px solid ${theme.cardBorder}`, background: 'transparent',
            borderRadius: '10px', cursor: 'pointer', padding: 0,
          }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '18px', height: '2px',
              background: theme.ink, borderRadius: '2px',
              transition: 'transform .3s, opacity .3s',
              transform: menuOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>

      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(5,7,10,0.97)', backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center', gap: '10px', animation: 'fadeUp .25s ease',
        }}>
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: theme.ink, fontSize: 'clamp(1.4rem, 5vw, 2rem)',
                fontFamily: theme.fontDisplay, fontWeight: 700,
                padding: '10px 20px', borderRadius: '12px',
                transition: 'color .2s',
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.color = theme.accent}
              onMouseLeave={e => e.currentTarget.style.color = theme.ink}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}