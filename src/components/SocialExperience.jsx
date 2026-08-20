import { theme, sectionStyle, sectionTitle } from '../theme';

const social = [
  {
    role: 'Member',
    period: '2024 – Present',
    org: 'Lions Club',
    desc: 'Active member contributing to community service and club activities.',
  },
  {
    role: 'Treasurer',
    period: '2024 – 2025',
    org: 'Lions Club',
    desc: 'Managed the club’s finances during the 2024–2025 mandate.',
  },
];

export default function SocialExperience() {
  return (
    <section id="social" style={sectionStyle}>
      <h2 style={sectionTitle}>Social Experience</h2>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            minWidth: '150px',
            flex: '0 0 150px',
            display: 'grid',
            placeItems: 'center',
            background: theme.card,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: '16px',
            padding: '20px',
            color: theme.accent,
            fontFamily: theme.fontDisplay,
            fontSize: '2rem',
            fontWeight: 700,
          }}
          aria-label="Lions Club logo placeholder"
        >
                  <img
          src="/LIONS_CLUB_LOGO.png"
          alt="Lions Club logo"
          style={{ maxWidth: '110px', maxHeight: '110px', objectFit: 'contain' }}
        />
        </div>

        <div
          style={{
            flex: '1 1 320px',
            background: theme.card,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: '16px',
            padding: '24px',
          }}
        >
          {social.map((item) => (
            <article
              key={item.role}
              style={{
                padding: '16px 0',
                borderBottom: `1px solid ${theme.cardBorder}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <h3 style={{ fontFamily: theme.fontDisplay, fontSize: '1.15rem' }}>
                  {item.role}
                </h3>
                <span style={{ color: theme.accent2, fontSize: '0.85rem' }}>
                  {item.period}
                </span>
              </div>

              <p style={{ color: theme.accent, marginTop: '5px' }}>{item.org}</p>
              <p style={{ color: theme.muted, marginTop: '8px', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}