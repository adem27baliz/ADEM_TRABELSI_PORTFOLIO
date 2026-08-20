import { theme, chip, sectionStyle, sectionTitle } from '../theme';

const experience = [
    {
    role: 'Mobile Application Developer', company: 'ULMUS Technologie',
    start: '06/2025', end: '02/2026', location: 'Tunis',
    points: [
      'Designed offline-first Flutter app for cash transport management; modeled SQLite schema for data consistency.',
      'Implemented secure bidirectional sync with automatic retry; integrated SUNMI V3 SDK for thermal printing.',
      'Conducted field testing during cash collection rounds, validating offline sync reliability.',
    ],
    stack: ['Flutter/Dart', 'SQLite', 'REST API', 'SUNMI V3 SDK'],
  },
  {
    role: 'AI Intern', company: 'KPMG - Tech Solutions',
    start: '07/2024', end: '07/2024', location: 'Tunis',
    points: ['Built a Smart Parking System with computer vision-based vehicle detection, real-time database logging, and a live web dashboard.'],
    stack: ['Computer Vision', 'Image Processing', 'Real-time DB', 'Web Dev'],
  },

];

const DOT_COLOR = theme.accent;
const STEM_COLOR = theme.cardBorder;

export default function Experience() {
  return (
    <section id="experience" style={sectionStyle}>
      <h2 style={sectionTitle}>Professional Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {experience.map((e, i) => (
          <div key={i} className="experience-item" style={{ display: 'grid', gridTemplateColumns: '110px 32px 1fr', gap: '0 12px' }}>

            {/* Date column */}
            <div style={{ textAlign: 'right', paddingTop: '2px', fontSize: '0.78rem', lineHeight: 1.7 }}>
              <div style={{ color: theme.accent2, fontWeight: 600 }}>{e.end}</div>
              <div style={{ color: theme.muted, fontSize: '0.7rem' }}>↑</div>
              <div style={{ color: theme.accent2, fontWeight: 600 }}>{e.start}</div>
              <div style={{ color: theme.muted, fontSize: '0.72rem', marginTop: '2px' }}>{e.location}</div>
            </div>

            {/* Spine */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                background: DOT_COLOR, marginTop: '4px',
                border: `2px solid ${theme.bg ?? '#0d0d0d'}`,
                boxShadow: `0 0 0 2px ${DOT_COLOR}`,
              }} />
              {i < experience.length - 1 && (
                <div style={{ flex: 1, width: 2, background: STEM_COLOR, marginTop: 6 }} />
              )}
            </div>

            {/* Card */}
            <div style={{
              background: theme.card, border: `1px solid ${theme.cardBorder}`,
              borderRadius: '14px', padding: '20px 22px', marginBottom: '28px',
            }}>
              <h3 style={{ fontFamily: theme.fontDisplay, fontSize: '1.15rem', margin: '0 0 2px' }}>{e.role}</h3>
              <p style={{ color: theme.accent, fontSize: '0.82rem', margin: '0 0 12px' }}>{e.company}</p>
              <ul style={{ paddingLeft: '18px', color: theme.muted, fontSize: '0.88rem', lineHeight: 1.8, margin: '0 0 12px' }}>
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {e.stack.map(s => <span key={s} style={{ ...chip, fontSize: '0.7rem' }}>{s}</span>)}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}