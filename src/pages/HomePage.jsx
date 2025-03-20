import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <HeroSection />
        <ProjectSection />
      </div>
    </PageLayout>
  );
};

export default HomePage;
