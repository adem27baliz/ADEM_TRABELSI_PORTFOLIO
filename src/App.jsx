import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import SocialExperience from './components/SocialExperience';
import Footer from './components/Footer';
import { theme } from './theme';

const keyframes = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,700;9..144,900&family=Poppins:wght@300;400;500;600;700&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { width:100%; overflow-x:hidden; }
::selection { background:${theme.accent}; color:#05070a; }
@keyframes fadeUp { from{opacity:0; transform:translateY(30px);} to{opacity:1; transform:translateY(0);} }
@keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
@keyframes floatSlow { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-14px);} }
`;

export default function App() {
  return (
    <div style={{ background: theme.bg, minHeight: '100vh', width: '100%', color: theme.ink, fontFamily: theme.font }}>
      <style>{keyframes}</style>
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <Certifications />
      <SocialExperience />
      <Footer />
    </div>
  );
}