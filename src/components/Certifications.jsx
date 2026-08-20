import { theme, chip, sectionStyle, sectionTitle } from '../theme';
import { CertIcon } from '../icons';

const certifications = ['Core Designer', 'Advanced Designer', 'ML Practitioner', 'Developer', 'MLOps Practitioner', 'Generative AI Practitioner'];

export default function Certifications() {
  return (
    <section id="certifications" style={sectionStyle}>
      <h2 style={sectionTitle}>Certifications</h2>
      <div style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: '16px', padding: '24px' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', marginBottom: '14px' }}>
          <CertIcon /> Dataiku Certified
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {certifications.map(c => <span key={c} style={chip}>{c}</span>)}
        </div>
      </div>
    </section>
  );
}