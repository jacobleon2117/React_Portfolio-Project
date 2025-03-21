import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProjectSection from "../components/home/ProjectSection";
import EasterEggSection from "../components/visitors/EasterEggSection";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EasterEggSection />
      </div>
    </PageLayout>
  );
};

export default HomePage;
