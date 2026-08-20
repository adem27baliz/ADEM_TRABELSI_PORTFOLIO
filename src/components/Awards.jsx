import { theme, sectionStyle, sectionTitle } from '../theme';
import { TrophyIcon } from '../icons';

export default function Awards() {
  return (
    <section id="awards" style={sectionStyle}>
      <h2 style={sectionTitle}>Awards</h2>
      <div className="award-card" style={{ background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: '16px', padding: '24px' }}>
        <div className="award-copy">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: theme.accent, fontSize: '1.05rem' }}>
            <TrophyIcon /> 1st Place — National Re·Tech Fusion Hackathon <span style={{ color: theme.muted, fontWeight: 400, fontSize: '0.85rem' }}>(2026)</span>
          </h3>
          <p style={{ color: theme.muted, marginTop: '10px', lineHeight: 1.7 }}>
            Industrial Energy Intelligence Platform: built a multi-source energy data pipeline with CO₂ estimation and anomaly
            detection; designed a 5-criteria waste heat recovery scoring framework ranking industrial heat sources across
            energy potential, CO₂ reduction, CAPEX, ROI, and integration complexity.
          </p>
        </div>
        <div className="award-photo">
          <img
            src="/ADEM_TRABELSI_PORTFOLIO/award.jpg"

            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          
        </div>
      </div>
    </section>
  );
}