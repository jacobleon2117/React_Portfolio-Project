import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import FloatingNames from "./FloatingNames";
import AddVisitorForm from "./AddVisitorForm";
import { useTheme } from "../../hooks/useTheme";
import { getDeviceIdentifier } from "../../utils/ipService";
import {
  saveToStorage,
  getFromStorage,
  removeFromStorage,
  STORAGE_KEYS,
} from "../../utils/storage";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [myName, setMyName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const initializeVisitors = async () => {
      try {
        const currentDeviceId = await getDeviceIdentifier();
        setDeviceId(currentDeviceId);

        const storedVisitors = getFromStorage(STORAGE_KEYS.VISITORS, []);
        const myVisitorId = getFromStorage(STORAGE_KEYS.USER_ID, null);

        const existingVisitor = storedVisitors.find(
          (visitor) => visitor.deviceId === currentDeviceId
        );

        setTimeout(() => {
          setVisitors(storedVisitors);

          if (existingVisitor) {
            setHasSubmitted(true);
            setMyName(existingVisitor.name);
            saveToStorage(STORAGE_KEYS.USER_ID, existingVisitor.id);
          } else if (myVisitorId) {
            const myVisitorInfo = storedVisitors.find(
              (v) => v.id.toString() === myVisitorId.toString()
            );
            if (myVisitorInfo) {
              setHasSubmitted(true);
              setMyName(myVisitorInfo.name);
            } else {
              removeFromStorage(STORAGE_KEYS.USER_ID);
              setHasSubmitted(false);
            }
          }

          setIsLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error initializing visitors:", error);
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
            } else {
              removeFromStorage(STORAGE_KEYS.USER_ID);
              setHasSubmitted(false);
            }
          }

          setIsLoading(false);
        }, 300);
      }
    };

    initializeVisitors();
  }, []);

  const addVisitor = (name) => {
    const visitorId = Date.now().toString();

    const newVisitor = {
      id: visitorId,
      name: name,
      date: new Date().toISOString().split("T")[0],
      deviceId: deviceId,
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

  const nameCount = visitors.length;

  return (
    <div className="min-h-screen bg-[var(--bg)] relative overflow-hidden">
      <FloatingNames visitors={visitors} />

      <div className="fixed bottom-0 left-0 right-0 p-4 z-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button
            onClick={handleBackToPortfolio}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 group"
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
              className="group-hover:-translate-x-1 transition-transform duration-200"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-[var(--bg-secondary)] py-2 px-4 rounded-full border border-[var(--border)]">
              <span className="text-[var(--text-secondary)] text-sm font-medium">
                {nameCount} {nameCount === 1 ? "name" : "names"} on the wall
              </span>
            </div>

            {hasSubmitted && myName && (
              <>
                <div className="bg-[var(--accent)]/10 py-2 px-4 rounded-full border border-[var(--accent)]/30">
                  <span className="text-[var(--accent)] text-sm font-medium">
                    {myName}
                  </span>
                </div>
                <button
                  onClick={removeMyName}
                  className="flex items-center gap-2 bg-[var(--bg-secondary)] py-2 px-4 rounded-full border-2 border-red-500/30 text-red-500 text-sm hover:border-red-500 hover:bg-red-500/5 transition-all duration-200 group"
                  title="Remove my name from the wall"
                >
                  <FaTrash className="text-xs group-hover:scale-110 transition-transform duration-200" />
                  Remove My Name
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        {!hasSubmitted && !isLoading && (
          <div className="w-full max-w-lg px-4">
            <div className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--border)] shadow-lg relative backdrop-blur-sm">
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg)]/50 transition-all duration-200"
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

              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 text-[var(--text)]">
                  ✨ Visitor Wall
                </h1>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                  {nameCount === 0 ? (
                    "Be the first to add your name to the wall! Join the constellation of visitors and see your name floating among the stars."
                  ) : (
                    <>
                      Join the{" "}
                      <span className="font-semibold text-[var(--accent)]">
                        {nameCount}
                      </span>{" "}
                      {nameCount === 1 ? "person" : "people"} who{" "}
                      {nameCount === 1 ? "has" : "have"} added{" "}
                      {nameCount === 1 ? "their" : "their"} name
                      {nameCount === 1 ? "" : "s"} to this wall! Add yours to
                      see it floating among the stars.
                    </>
                  )}
                </p>
              </div>

              <AddVisitorForm onAddVisitor={addVisitor} />
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent)]"></div>
            <p className="text-[var(--text-secondary)]">Loading the stars...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visitors;
