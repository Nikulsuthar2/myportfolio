import "./components/index.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

const V3 = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0b0e] text-gray-100 overflow-x-hidden">
      <Navbar />
      <HomeSection />
      <SkillSection />
      <ExperienceSection/>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default V3;