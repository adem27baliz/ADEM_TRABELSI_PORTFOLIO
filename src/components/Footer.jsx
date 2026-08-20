import { theme } from '../theme';
import { MailIcon, PhoneIcon, LinkedinIcon, MapPinIcon } from '../icons';

export default function Footer() {
  const linkStyle = {
    display: 'flex', alignItems: 'center', gap: '8px', color: theme.muted,
    fontSize: '0.9rem', transition: 'color .25s',
  };
  return (
    <footer id="contact" style={{
      padding: '60px 6vw', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexWrap: 'wrap', gap: '24px', width: '100%',
    }}>
      <p style={{ fontFamily: theme.fontDisplay, fontSize: '1.4rem' }}>Let's work together.</p>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <a href="mailto:edam.trabelsi@insat.ucar.tn" style={linkStyle}
           onMouseEnter={e => e.currentTarget.style.color = theme.accent2}
           onMouseLeave={e => e.currentTarget.style.color = theme.muted}>
          <MailIcon /> edam.trabelsi@insat.ucar.tn
        </a>
        <a href="tel:+21699153535" style={linkStyle}
           onMouseEnter={e => e.currentTarget.style.color = theme.accent2}
           onMouseLeave={e => e.currentTarget.style.color = theme.muted}>
          <PhoneIcon /> +216 99 153 535
        </a>
        <a href="#" style={linkStyle}
           onMouseEnter={e => e.currentTarget.style.color = theme.accent2}
           onMouseLeave={e => e.currentTarget.style.color = theme.muted}>
          <LinkedinIcon /> LinkedIn
        </a>
        <span style={linkStyle}><MapPinIcon /> Tunisia</span>
      </div>
    </footer>
  );
}