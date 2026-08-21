import { theme } from '../theme';
import { LinkedinIcon } from '../icons';

const BASE = '/ADEM_TRABELSI_PORTFOLIO';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/trabelsiadem27',
    icon: <LinkedinIcon />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adem27baliz',
    icon: <GithubIcon />,
  },
  {
    label: 'edam.trabelsi@insat.ucar.tn',
    href: 'mailto:edam.trabelsi@insat.ucar.tn',
    icon: <MailIcon />,
  },
];

export default function Intro() {
  return (
    <section style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: '40px', padding: '10vh 6vw', minHeight: '88vh', width: '100%', flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: 300, animation: 'fadeUp 1s ease both' }}>

        {/* Badge */}
        {/* <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: `${theme.accent}18`, border: `1px solid ${theme.accent}40`,
          borderRadius: '999px', padding: '5px 14px', marginBottom: '20px',
          fontSize: '0.78rem', color: theme.accent, fontWeight: 500,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: theme.accent, display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Available for opportunities
        </div> */}

        {/* Name */}
        <h1 style={{
          fontFamily: theme.fontDisplay, fontWeight: 900,
          fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', margin: '0 0 10px',
        }}>
          Adem Trabelsi
        </h1>

        {/* Title */}
        <h2 style={{ color: theme.accent2, fontWeight: 500, fontSize: '1.1rem', marginBottom: '16px' }}>
          Software Engineering Student · AI &amp; Systems
        </h2>

        {/* Bio */}
        <p style={{ color: theme.muted, maxWidth: '52ch', lineHeight: 1.8, fontSize: '0.95rem' }}>
          Building AI-powered applications and system architecture — from prediction
          models to production dashboards. <strong style={{ color: theme.ink }}>15 months of experience</strong> across{' '}
          <strong style={{ color: theme.ink }}>3 internships</strong>, focused on shipping
          software that scales and delivers real value.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '14px', marginTop: '30px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            background: theme.accent, color: '#05070a', padding: '12px 26px',
            borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem',
            boxShadow: theme.glow, transition: 'transform .25s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            View Projects
          </a>
          <a href={`${BASE}/Adem_Trabelsi.pdf`} download style={{
            border: `1px solid ${theme.accent2}`, color: theme.accent2,
            padding: '12px 26px', borderRadius: '30px', fontSize: '0.9rem',
            transition: 'background .25s, color .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = theme.accent2; e.currentTarget.style.color = '#05070a'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.accent2; }}>
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
          {socialLinks.map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              title={label}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '9px 16px', borderRadius: '30px',
                border: `1px solid ${theme.cardBorder}`, color: theme.muted,
                fontSize: '0.8rem', transition: 'border-color .25s, color .25s, transform .25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = theme.accent;
                e.currentTarget.style.color = theme.accent;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = theme.cardBorder;
                e.currentTarget.style.color = theme.muted;
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Photo */}
      <div style={{ animation: 'floatSlow 5s ease-in-out infinite' }}>
        <div style={{ position: 'relative' }}>
          {/* Glow behind photo */}
          <div style={{
            position: 'absolute', inset: '-2px', borderRadius: '26px',
            background: `linear-gradient(135deg, ${theme.accent}55, ${theme.accent2}55)`,
            filter: 'blur(16px)', zIndex: 0,
          }} />
          <img
            src={`${BASE}/dom.jpg`}
            alt="Adem Trabelsi"
            style={{
              position: 'relative', zIndex: 1,
              width: 300, height: 300, objectFit: 'cover', borderRadius: '24px',
              border: `2px solid ${theme.cardBorder}`,
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          />
          {/* Experience badge */}
          <div style={{
            position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)',
            zIndex: 2, background: theme.card, border: `1px solid ${theme.cardBorder}`,
            borderRadius: '999px', padding: '7px 18px', whiteSpace: 'nowrap',
            fontSize: '0.78rem', color: theme.ink, fontWeight: 500,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            {/* ✦ 15 months · 3 internships */}
          </div>
        </div>
      </div>

    </section>
  );
}