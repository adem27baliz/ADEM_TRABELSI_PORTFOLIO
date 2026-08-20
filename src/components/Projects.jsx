import { useState } from 'react';
import { theme, chip, sectionStyle, sectionTitle } from '../theme';
import { ArrowIcon } from '../icons';
import ProjectModal from './ProjectModal';

const projects = [
   {
    title: '🏆​ Award-Winning Industrial Energy Intelligence Platform',
    categories: ['AI'],
    desc: 'Won 1st place at the National Re·Tech Fusion with a complete industrial energy intelligence stack, connecting physical IoT sensors and heterogeneous legacy documents to a Dockerized production-ready dashboard.',
    features: [
      'Custom ESP32 devices read temperature, humidity, and pressure over MQTT with buffering, NTP timestamps, and sensor drift detection',
      'Unified live IoT streams, PDFs, Excel sheets, scanned bills, and images across 38 unit types into canonical kWh data',
      'Built document extraction, CO₂ estimation, and Isolation Forest anomaly detection for the unified data stream',
      'Designed a five-criteria waste heat recovery framework ranking energy potential, CO₂ reduction, integration complexity, CAPEX, and ROI',
      'Delivered three quantified recovery scenarios per site with traceable temperatures, mass flows, and emission factors',
      'Developed with the team: Edam Hbaieb, Rayan Mouri, Iyed Mdimegh, and Akrem Medimagh',
    ],
    tags: ['IoT', 'Data Engineering', 'Isolation Forest', 'CO₂ Analytics', 'Docker'],
  },
  {
    title: 'AI-Powered System Monitoring Platform',
    categories: ['AI'],
    desc: 'Built a full-stack monitoring platform that collects live infrastructure metrics, learns what is normal for each system, and flags anomalies in real time before they become operational problems.',
    features: [
      'Node.js collector agent pushes CPU, memory, disk, and network metrics to Kafka every 5 seconds',
      'Python AI service combines an Autoencoder and Isolation Forest; both models must agree before raising an alert',
      'NestJS backend consumes Kafka, stores time-series data in TimescaleDB, and exposes REST and WebSocket APIs',
      'React dashboard updates live without refreshing, with retraining on fresh data every 30 minutes',
      'Fully Dockerized six-container pipeline designed for a future Kubernetes DaemonSet deployment',
    ],
    tags: ['Python', 'Node.js', 'NestJS', 'Kafka', 'TimescaleDB', 'React', 'Docker'],
  },
 
  {
    title: 'Respiratory Sound Classification - Research Project ',
    categories: ['AI'],
    desc: 'Optimized a Contrastive Learning-based model for respiratory disease detection from audio signals, as part of a 3-person team.',
    features: [
      'Implemented multiple GANs to address dataset imbalance',
      'Designed augmentation strategies using the AST-ASAM framework',
      'Achieved 64% overall score (61% sensitivity, 67% specificity)',
    ],
    tags: ['Deep Learning', 'GANs', 'Audio ML'],
  },
  {
    title: 'Urban Carbon Emissions Monitoring',
    categories: ['AI'],
    desc: 'Scalable Big Data pipeline processing real-time air quality data from 853 stations across France.',
    features: [
      'Built with Apache Spark, Kafka, and Hadoop',
      'ML-driven CO₂ forecasting and anomaly detection',
      'Live Streamlit dashboard with charts and geospatial maps',
    ],
    tags: ['Big Data', 'Spark', 'Kafka', 'Hadoop', 'Streamlit'],
  },
  {
    title: 'DeepGuard — Deepfake Detection',
    categories: ['AI'],
    desc: 'End-to-end deepfake detection system with explainability built in.',
    features: [
      'EfficientNetB0 + LSTM architecture',
      'Grad-CAM explainability for model decisions',
      'Trained on 3,200 videos — 90% accuracy, AUC 0.956',
    ],
    tags: ['EfficientNetB0', 'LSTM', 'Grad-CAM'],
  },
  {
    title: 'FarmLink — AI-Powered Agriculture',
    categories: ['AI', 'Full-stack'],
    desc: 'Intelligent platform empowering farmers through AI and smart collaboration.',
    features: [
      'Plant disease detection with over 96% accuracy',
      'Designed for real-world farmer collaboration workflows',
      'Planned smart-recommendation module',
    ],
    tags: ['Computer Vision', 'AI Platform'],
  },
  {
    title: 'Tunisian Real Estate Hub',
    categories: ['AI', 'Full-stack'],
    desc: 'Full-stack property marketplace with ML-powered price prediction based on location, size, and amenities (over 91 % accuracy) and similarity search based on user input',
    features: [
      'Price prediction with over 91% accuracy',
      'Smart recommendation module for similar properties based on input',
      'Designed for real-world searching for properties',
      
    ],
    tags: ['Data Mining', 'ML'],
  },
   {
    title: 'TaskFlow — Enterprise Task Management Platform',
    categories: ['Full-stack'],
    desc: 'Cross-platform productivity solution for team collaboration and workflow management, delivering a unified experience across web and mobile with Angular, Flutter & NestJS',
    features: [
      'Cross-platform solution for web and mobile',
      'Real-time collaboration and task management',
      'Built with Angular, Flutter, and NestJS for scalability and performance',
      
    ],
    tags: ['Angular', 'Flutter', 'NestJS'],
  },
    {
    title: 'RescueLink',
    categories: ['Full-stack'],
    desc: 'Real-time web app for coordinating emergency response operations. (NestJS,  ReactJS, GraphQL, WebSockets, SSE)',
    features: [
      
    ],
    tags: [ 'GraphQL' ,'WebSockets', 'SSE'],
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(filter));
  const filters = ['All', 'AI', 'Full-stack'];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={sectionTitle}>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
        {filters.map(option => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            style={{
              border: `1px solid ${filter === option ? theme.accent : theme.cardBorder}`,
              background: filter === option ? theme.accent : theme.card,
              color: filter === option ? '#05070a' : theme.muted,
              borderRadius: '999px', padding: '8px 16px', cursor: 'pointer',
              fontFamily: theme.font, fontSize: '0.8rem', fontWeight: 600,
              transition: 'background .25s, border-color .25s, color .25s',
            }}
          >
            {option === 'All' ? 'All Projects' : option}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '24px' }}>
        {visibleProjects.map((p, i) => (
          <div
            key={i}
            onClick={() => setActive(p)}
            style={{
              background: theme.card, border: `1px solid ${theme.cardBorder}`,
              borderRadius: '18px', padding: '28px', cursor: 'pointer',
              transition: 'transform .3s, border-color .3s, background .3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = theme.accent; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = theme.cardBorder; }}
          >
            <h3 style={{ fontFamily: theme.fontDisplay, fontSize: '1.3rem', marginBottom: '10px' }}>{p.title}</h3>
            <p style={{
              color: theme.accent2, fontSize: '0.8rem', marginBottom: '16px',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              View details <ArrowIcon />
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {p.tags.map(t => <span key={t} style={{ ...chip, fontSize: '0.7rem' }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}