import { lazy, useContext, useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import ParticleBackground from "./components/common/ParticleBackground";
import "./styles/globals.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const VisitorsPage = lazy(() => import("./pages/VisitorsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen bg-[var(--bg)]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent)]"></div>
  </div>
);

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ParticleBackground theme={theme} />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/visitors" element={<VisitorsPage />} />
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
