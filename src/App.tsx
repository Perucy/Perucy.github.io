import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MountainSunriseBackground } from "./components/MountainSunriseBackground";
import { BackToTop } from "./components/BackToTop";
import { SectionDivider } from "./components/SectionDivider";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <MountainSunriseBackground />
      <Navigation />
      <main>
        <HeroSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}