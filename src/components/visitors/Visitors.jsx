import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingNames from "./FloatingNames";
import AddVisitorForm from "./AddVisitorForm";
import { useTheme } from "../../hooks/useTheme";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const storedVisitors = localStorage.getItem("portfolio_visitors");

    const initialVisitors = [
      {
        id: 1,
        name: "Jacob Leon",
        date: new Date().toISOString().split("T")[0],
      },
    ];

    setTimeout(() => {
      if (storedVisitors) {
        setVisitors(JSON.parse(storedVisitors));
      } else {
        setVisitors(initialVisitors);
        localStorage.setItem(
          "portfolio_visitors",
          JSON.stringify(initialVisitors)
        );
      }
      setIsLoading(false);
    }, 800);
  }, []);

  const addVisitor = (name) => {
    const newVisitor = {
      id: Date.now(),
      name: name,
      date: new Date().toISOString().split("T")[0],
    };

    const updatedVisitors = [...visitors, newVisitor];
    setVisitors(updatedVisitors);

    localStorage.setItem("portfolio_visitors", JSON.stringify(updatedVisitors));
  };

  const handleBackToPortfolio = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] relative overflow-hidden">
      <FloatingNames visitors={visitors} />

      <div className="max-w-5xl mx-auto px-8 py-20 relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] shadow-sm mb-8">
              <h1 className="text-3xl font-bold mb-4 text-[var(--text)] text-center">
                Visitor Wall
              </h1>
              <p className="text-[var(--text-secondary)] text-center mb-8">
                Join the {visitors.length} people who have visited this
                portfolio. Add your name to see it floating among the stars!
              </p>

              {isLoading ? (
                <div className="flex justify-center items-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent)]"></div>
                </div>
              ) : (
                <AddVisitorForm onAddVisitor={addVisitor} />
              )}

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleBackToPortfolio}
                  className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
