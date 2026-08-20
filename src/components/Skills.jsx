import { theme, chip, sectionStyle, sectionTitle } from '../theme';

const categories = [
  {
    label: 'Development',
    color: theme.accent,
    groups: [
      { title: 'Frontend', items: ['React', 'Angular', 'Flutter'] },
      { title: 'Backend', items: ['FastAPI', 'Node.js', 'NestJS'] },
      { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'TimescaleDB', 'SQL Server'] },
      { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++'] },
      { title: 'Tools', items: ['Docker', 'Git','GCP'] },
    ],
  },
  {
    label: 'AI & Data',
    color: theme.accent2,
    groups: [
      { title: 'Machine Learning', items: ['Regression', 'Classification', 'Clustering', 'MLflow', 'Scikit-learn'] },
      { title: 'Deep Learning', items: ['Transformers', 'GANs', 'Neural Nets'] },
      { title: 'Computer Vision', items: ['Image Processing', 'OCR'] },
      { title: 'Data & AI Tools', items: ['Dataiku DSS', 'Chatbots', 'NLP'] },
      { title: 'Big Data', items: ['Hadoop', 'Spark', 'Kafka'] },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={sectionTitle}>Skills</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {categories.map(cat => (
          <div key={cat.label}>
            {/* Category header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '4px', height: '20px', borderRadius: '2px', background: cat.color }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: cat.color }}>
                {cat.label}
              </span>
              <div style={{ flex: 1, height: '1px', background: theme.cardBorder }} />
            </div>

            {/* Groups grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {cat.groups.map(g => (
                <div key={g.title} style={{
                  background: theme.card, border: `1px solid ${theme.cardBorder}`,
                  borderRadius: '14px', padding: '18px 20px',
                }}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 600, color: theme.muted, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {g.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {g.items.map(item => <span key={item} style={chip}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}