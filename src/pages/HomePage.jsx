import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/home/HeroSection";
import TechSection from "../components/home/TechSection";
import ProjectSection from "../components/home/ProjectSection";

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TechSection />
      <ProjectSection />
    </PageLayout>
  );
};

export default HomePage;
