import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingNames from "./FloatingNames";
import AddVisitorForm from "./AddVisitorForm";
import { useTheme } from "../../hooks/useTheme";

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
    return false;
  }
};

const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving from localStorage: ${error}`);
    return defaultValue;
  }
};

const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
    return false;
  }
};

const STORAGE_KEYS = {
  VISITORS: "portfolio_visitors",
  USER_ID: "portfolio_user_submitted_id",
};

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [myName, setMyName] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const storedVisitors = getFromStorage(STORAGE_KEYS.VISITORS, []);

    const myVisitorId = getFromStorage(STORAGE_KEYS.USER_ID, null);

    setTimeout(() => {
      setVisitors(storedVisitors);

      if (myVisitorId) {
        setHasSubmitted(true);

        const myVisitorInfo = storedVisitors.find(
          (v) => v.id.toString() === myVisitorId.toString()
        );
        if (myVisitorInfo) {
          setMyName(myVisitorInfo.name);
        }
      }

      setIsLoading(false);
    }, 800);
  }, []);

  const addVisitor = (name) => {
    const visitorId = Date.now().toString();

    const newVisitor = {
      id: visitorId,
      name: name,
      date: new Date().toISOString().split("T")[0],
    };

    const updatedVisitors = [...visitors, newVisitor];
    setVisitors(updatedVisitors);
    setMyName(name);

    saveToStorage(STORAGE_KEYS.VISITORS, updatedVisitors);

    saveToStorage(STORAGE_KEYS.USER_ID, visitorId);
    setHasSubmitted(true);
  };

  const removeMyName = () => {
    const myId = getFromStorage(STORAGE_KEYS.USER_ID);

    if (!myId) return;

    const updatedVisitors = visitors.filter(
      (visitor) => visitor.id.toString() !== myId.toString()
    );
    setVisitors(updatedVisitors);

    saveToStorage(STORAGE_KEYS.VISITORS, updatedVisitors);

    removeFromStorage(STORAGE_KEYS.USER_ID);
    setHasSubmitted(false);
    setMyName("");
  };

  const handleBackToPortfolio = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] relative overflow-hidden">
      <FloatingNames visitors={visitors} />

      <div className="fixed bottom-0 left-0 right-0 p-4 z-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
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

          <div className="flex items-center gap-3">
            <div className="bg-[var(--bg-secondary)] py-1 px-3 rounded-full border border-[var(--border)]">
              <span className="text-[var(--text-secondary)] text-sm">
                {visitors.length}{" "}
                {visitors.length === 1 ? "visitor" : "visitors"}
              </span>
            </div>

            {hasSubmitted && (
              <button
                onClick={removeMyName}
                className="bg-[var(--bg-secondary)] py-1 px-3 rounded-full border border-[var(--border)] text-[var(--text-secondary)] text-sm hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200"
              >
                Remove My Name
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        {!hasSubmitted && !isLoading && (
          <div className="w-full max-w-md px-4">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border)] shadow-sm relative">
              <button
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg)]/50 transition-all duration-200"
                aria-label="Close"
                onClick={() => setHasSubmitted(true)}
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h1 className="text-3xl font-bold mb-4 text-[var(--text)] text-center">
                Visitor Wall
              </h1>

              <p className="text-[var(--text-secondary)] text-center mb-8">
                Join the {visitors.length} people who have visited this
                portfolio. Add your name to see it floating among the stars!
              </p>

              <AddVisitorForm onAddVisitor={addVisitor} />
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent)]"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visitors;
