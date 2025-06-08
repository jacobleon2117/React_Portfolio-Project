import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaChevronDown, FaChevronUp } from "react-icons/fa";

const EasterEggSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const visitWall = () => {
    navigate("/visitors");
  };

  return (
    <div className="relative pb-12">
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div
          className={`border-t border-[var(--border)] pt-6 transition-all duration-500 ${
            isExpanded ? "pb-8" : "pb-0"
          }`}
        >
          <button
            onClick={handleExpand}
            className="w-full flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 group"
            aria-expanded={isExpanded}
          >
            <span className="text-sm font-medium">
              Psst... I found something
            </span>
            <span className="transform transition-transform duration-200">
              {isExpanded ? (
                <FaChevronUp className="text-[var(--accent)]" />
              ) : (
                <FaChevronDown className="group-hover:text-[var(--accent)]" />
              )}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--accent)]/10 mb-4">
                <FaUsers className="w-8 h-8 text-[var(--accent)]" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                Visitor Wall
              </h3>

              <p className="text-[var(--text-secondary)] mb-6">
                Join the wall of visitors who have been here before you. Add
                your name and see it floating among the stars!
              </p>

              <button
                onClick={visitWall}
                className="px-6 py-2 bg-[var(--accent)] text-white rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50"
              >
                Visit the Wall
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEggSection;
