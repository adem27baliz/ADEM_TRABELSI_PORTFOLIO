import { theme } from '../theme';
import { MailIcon, PhoneIcon, LinkedinIcon, MapPinIcon } from '../icons';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const contacts = [
  { icon: <MailIcon />, label: 'edam.trabelsi@insat.ucar.tn', href: 'mailto:edam.trabelsi@insat.ucar.tn' },
  { icon: <PhoneIcon />, label: '+216 99 153 535', href: 'tel:+21699153535' },
  { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/trabelsiadem27' },
  { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/adem27baliz' },
  { icon: <MapPinIcon />, label: 'Tunis, Tunisia', href: null },
];

export default function Footer() {
  return (
    <footer id="contact" style={{
      marginTop: '60px',
      borderTop: `1px solid ${theme.cardBorder}`,
      padding: '60px 6vw 40px',
      width: '100%',
    }}>

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '48px' }}>

        {/* Left */}
        <div style={{ maxWidth: '380px' }}>
          <p style={{ fontFamily: theme.fontDisplay, fontSize: '2rem', fontWeight: 700, margin: '0 0 12px' }}>
            Let's work together.
          </p>
          <p style={{ color: theme.muted, fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            Open to internships, freelance projects, and full-time roles. Feel free to reach out — I'll get back to you quickly.
          </p>
          <a href="mailto:edam.trabelsi@insat.ucar.tn" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginTop: '24px', padding: '12px 26px',
            background: theme.accent, color: '#05070a',
            borderRadius: '30px', fontWeight: 600, fontSize: '0.88rem',
            boxShadow: theme.glow, transition: 'transform .25s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <MailIcon /> Say Hello
          </a>
        </div>

        {/* Right — contact links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {contacts.map(({ icon, label, href }) =>
            href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: theme.muted, fontSize: '0.88rem', transition: 'color .25s, transform .25s' }}
                onMouseEnter={e => { e.currentTarget.style.color = theme.accent2; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = theme.muted; e.currentTarget.style.transform = 'translateX(0)'; }}>
                <span style={{ color: theme.accent2 }}>{icon}</span>
                {label}
              </a>
            ) : (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: theme.muted, fontSize: '0.88rem' }}>
                <span style={{ color: theme.accent2 }}>{icon}</span>
                {label}
              </span>
            )
          )}
        </div>

      </div>

      {/* Bottom row */}
      <div style={{
        borderTop: `1px solid ${theme.cardBorder}`,
        paddingTop: '24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px',
        fontSize: '0.78rem', color: theme.muted,
      }}>
        <span>© {new Date().getFullYear()} Adem Trabelsi — All rights reserved.</span>
        
      </div>

    </footer>
  );
}