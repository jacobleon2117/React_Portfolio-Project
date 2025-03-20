import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import ParticleBackground from "./components/common/ParticleBackground";
import "./styles/globals.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const Loading = () => (
  <div className="h-screen flex items-center justify-center bg-[var(--bg)]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent)]"></div>
  </div>
);

// Wrapper component that uses the theme context
const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ParticleBackground theme={theme} />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
