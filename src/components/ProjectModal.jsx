import { useEffect } from 'react';
import { theme, chip } from '../theme';
import { CloseIcon } from '../icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(10,5,25,0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: '24px',
      animation: 'fadeIn .25s ease both',
    }}>
      <div className="modal-card" onClick={e => e.stopPropagation()} style={{
        background: '#0a1628', border: `1px solid ${theme.cardBorder}`, borderRadius: '20px',
        maxWidth: 600, width: '100%', padding: '40px', position: 'relative',
        maxHeight: '85vh', overflowY: 'auto', animation: 'fadeUp .35s ease both',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.08)',
          border: 'none', color: theme.muted, borderRadius: '50%', width: 34, height: 34,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}>
          <CloseIcon />
        </button>
        <p style={{ color: theme.accent, fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
          Project
        </p>
        <h2 style={{ fontFamily: theme.fontDisplay, fontSize: '1.8rem', margin: '10px 0 16px' }}>{project.title}</h2>
        <p style={{ color: theme.muted, marginBottom: '26px', lineHeight: 1.7 }}>{project.desc}</p>
        <h4 style={{ fontSize: '0.8rem', color: theme.ink, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Key Features
        </h4>
        <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
          {project.features.map((f, i) => (
            <li key={i} style={{
              color: theme.muted, fontSize: '0.9rem', padding: '10px 0 10px 22px',
              borderTop: `1px solid ${theme.cardBorder}`, position: 'relative',
            }}>
              <span style={{ position: 'absolute', left: 0, color: theme.accent2 }}>→</span>
              {f}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map(t => <span key={t} style={chip}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}