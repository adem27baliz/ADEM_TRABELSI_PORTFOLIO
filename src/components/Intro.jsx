import { theme } from '../theme';

export default function Intro() {
  return (
    <section style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: '40px', padding: '10vh 6vw', minHeight: '88vh', width: '100%', flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: 300, animation: 'fadeUp 1s ease both' }}>
        <h1 style={{ fontFamily: theme.fontDisplay, fontWeight: 900, fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', margin: '12px 0' }}>
          Adem Trabelsi
        </h1>
        <h2 style={{ color: theme.muted, fontWeight: 400, fontSize: '1.15rem', marginBottom: '20px' }}>
          Software Engineering Student · AI &amp; Systems
        </h2>
        <p style={{ color: theme.muted, maxWidth: '55ch', lineHeight: 1.7 }}>
          Building AI-powered applications and system architecture — from prediction
          models to production dashboards. Focused on shipping software that scales
          and delivers real value.
        </p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            background: theme.accent, color: '#05070a', padding: '13px 26px',
            borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', boxShadow: theme.glow,
            transition: 'transform .25s',
          }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            View Projects
          </a>
          <a href="#contact" style={{
            border: `1px solid ${theme.cardBorder}`, color: theme.ink, padding: '13px 26px',
            borderRadius: '30px', fontSize: '0.9rem', transition: 'border-color .25s',
          }} onMouseEnter={e => e.currentTarget.style.borderColor = theme.accent2}
             onMouseLeave={e => e.currentTarget.style.borderColor = theme.cardBorder}>
            Contact Me
          </a>
            <a
            href="/Adem_Trabelsi.pdf"
            download
            style={{
                border: `1px solid ${theme.accent2}`,
                color: theme.accent2,
                padding: '13px 26px',
                borderRadius: '30px',
                fontSize: '0.9rem',
                transition: 'background .25s, color .25s',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = theme.accent2;
                e.currentTarget.style.color = '#05070a';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = theme.accent2;
            }}
            >
            Download CV
            </a>
        </div>
      </div>
      <div style={{ animation: 'floatSlow 5s ease-in-out infinite' }}>
        <img src="/dom.jpg" alt="Adem Trabelsi" style={{
          width: 300, height: 300, objectFit: 'cover', borderRadius: '24px',
          border: `2px solid ${theme.cardBorder}`, boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }} />
      </div>
    </section>
  );
}