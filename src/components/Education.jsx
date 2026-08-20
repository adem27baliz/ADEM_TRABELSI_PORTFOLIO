import { theme, sectionStyle, sectionTitle } from '../theme';

const education = [
  {
    degree: 'Software Engineering',
    school: 'National Institute of Technology and Science (INSAT)',
    period: '2022 – Present',
    location: 'Tunis, Tunisia',
    honor: null,
  },
  {
    degree: 'Baccalaureate in Mathematics',
    school: 'Mahmoud Megdiche High School',
    period: '2022',
    location: 'Sfax, Tunisia',
    honor: 'Graduated with highest honors',
  },
];

export default function Education() {
  return (
    <section id="education" style={sectionStyle}>
      <h2 style={sectionTitle}>Education</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {education.map((e, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 32px 1fr', gap: '0 12px' }}>

            {/* Period */}
            <div style={{ textAlign: 'right', paddingTop: '3px', fontSize: '0.78rem', color: theme.accent2, fontWeight: 600, lineHeight: 1.7 }}>
              {e.period}
              <div style={{ color: theme.muted, fontSize: '0.7rem', fontWeight: 400 }}>{e.location}</div>
            </div>

            {/* Spine */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                background: theme.accent, marginTop: '4px',
                border: `2px solid ${theme.bg ?? '#0d0d0d'}`,
                boxShadow: `0 0 0 2px ${theme.accent}`,
              }} />
              {i < education.length - 1 && (
                <div style={{ flex: 1, width: 2, background: theme.cardBorder, marginTop: 6 }} />
              )}
            </div>

            {/* Card */}
            <div style={{
              background: theme.card, border: `1px solid ${theme.cardBorder}`,
              borderRadius: '14px', padding: '18px 22px', marginBottom: '24px',
            }}>
              <h3 style={{ fontFamily: theme.fontDisplay, fontSize: '1.1rem', margin: '0 0 4px' }}>{e.degree}</h3>
              <p style={{ color: theme.accent, fontSize: '0.82rem', margin: '0' }}>{e.school}</p>
              {e.honor && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '12px', padding: '5px 12px',
                  background: `${theme.accent2}18`, border: `1px solid ${theme.accent2}40`,
                  borderRadius: '999px', fontSize: '0.75rem', color: theme.accent2,
                }}>
                  ✦ {e.honor}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}