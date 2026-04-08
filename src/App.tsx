import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { BackgroundStars } from './components/BackgroundStars';
export function App() {
  return (
    <div className="min-h-screen bg-space-900 text-white selection:bg-electric selection:text-space-900 font-sans relative">
      {/* Global Background Effects */}
      <BackgroundStars />
      <div className="fixed inset-0 z-[-1] bg-gradient-mesh opacity-40 pointer-events-none"></div>

      <Navbar />

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>);

}