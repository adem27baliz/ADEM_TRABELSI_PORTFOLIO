import { theme, chip, sectionStyle, sectionTitle } from '../theme';
import { CertIcon } from '../icons';

const certifications = ['Core Designer', 'Advanced Designer', 'ML Practitioner', 'Developer', 'MLOps Practitioner', 'Generative AI Practitioner'];

const certificationPhotos = [
  { name: 'Core Designer', src: '/ADEM_TRABELSI_PORTFOLIO/certificats/1.png' },
  { name: 'Advanced Designer', src: '/ADEM_TRABELSI_PORTFOLIO/certificats/2.png' },
  { name: 'ML Practitioner', src: '/ADEM_TRABELSI_PORTFOLIO/certificats/3.png' },
  { name: 'Developer', src: '/ADEM_TRABELSI_PORTFOLIO/certificats/4.png' },
  { name: 'MLOps Practitioner', src: '/ADEM_TRABELSI_PORTFOLIO/certificats/5.png' },
  { name: 'Generative AI Practitioner', src: '/ADEM_TRABELSI_PORTFOLIO/certificats/6.png' },
];

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
        <div style={{ marginTop: '24px' }}>
          <p style={{ color: theme.muted, fontSize: '0.8rem', marginBottom: '12px' }}>
            Certificate photos
          </p>
          <div className="certification-gallery">
            {certificationPhotos.map(photo => (
              <div className="certification-photo" key={photo.name}>
                <img
                  src={photo.src}
                  alt={`${photo.name} certificate`}
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
                <span>{photo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}