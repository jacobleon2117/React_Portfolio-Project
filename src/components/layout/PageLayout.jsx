import NavbarSection from "./NavbarSection";
import FooterSection from "./FooterSection";
import { useTheme } from "../../hooks/useTheme";

const PageLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <NavbarSection theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
};

export default PageLayout;
