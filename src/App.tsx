import Hero from './components/Hero/Hero';
import CoreValues from './components/CoreValues/CoreValues';
import Story from './components/Story/Story';
import TechMarquee from './components/TechMarquee/TechMarquee';
import Projects from './components/Projects/Projects';
import Insights from './components/Insights/Insights';
import AdditionalSkills from './components/AdditionalSkills/AdditionalSkills';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Vision from './components/Vision/Vision';
import Extras from './components/Extras/Extras';
import Tastes from './components/Tastes/Tastes';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import DragonParticles from './components/DragonParticles/DragonParticles';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <LanguageSwitcher />
      <DragonParticles />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <CoreValues />
        <Story />
        <TechMarquee />
        <Projects />
        <Insights />
        <AdditionalSkills />
        <Tastes />
        <PhotoGallery />
        <Vision />
        <Extras />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
