import React, { useState, useEffect } from "react";

const BASIC_PROFANITY_LIST = ["badword", "offensive", "inappropriate"];

const AddVisitorForm = ({ onAddVisitor }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [profanityList, setProfanityList] = useState(BASIC_PROFANITY_LIST);
  const [isLoadingFilter, setIsLoadingFilter] = useState(true);

  useEffect(() => {
    fetch("/badwords.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load profanity filter");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.words)) {
          setProfanityList([...BASIC_PROFANITY_LIST, ...data.words]);
        }
      })
      .catch((error) => {
        console.error("Error loading profanity filter:", error);
      })
      .finally(() => {
        setIsLoadingFilter(false);
      });
  }, []);

  const validateName = (input) => {
    if (!input.trim()) {
      return "Please enter your name";
    }

    if (input.length < 2) {
      return "Name must be at least 2 characters";
    }

    if (input.length > 20) {
      return "Name must be 20 characters or less";
    }

    const lowerInput = input.toLowerCase();

    const hasProfanity = profanityList.some((word) => {
      if (lowerInput.includes(word)) return true;

      const wordRegex = new RegExp(`\\b${word}\\b`, "i");
      if (wordRegex.test(lowerInput)) return true;

      const normalizedInput = lowerInput
        .replace(/[0]/g, "o")
        .replace(/[1]/g, "i")
        .replace(/[$]/g, "s")
        .replace(/[@]/g, "a")
        .replace(/[4]/g, "a")
        .replace(/[3]/g, "e")
        .replace(/[5]/g, "s");

      return normalizedInput.includes(word);
    });

    if (hasProfanity) {
      return "Please use appropriate language";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoadingFilter) {
      setError("Please wait while we prepare the form...");
      return;
    }

    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    onAddVisitor(name);

    setSuccess(true);

    setName("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="visitor-name"
            className="block text-[var(--text)] font-medium mb-2"
          >
            Your Name
          </label>
          <input
            id="visitor-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) {
                setError("");
              }
            }}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors duration-200"
            disabled={isLoadingFilter}
          />
          {error && <p className="mt-2 text-[#f43f5e] text-sm">{error}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`px-6 py-2 bg-[var(--accent)] text-white rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 ${
              isLoadingFilter ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoadingFilter}
          >
            {isLoadingFilter ? "Loading..." : "Add My Name"}
          </button>

          {success && (
            <p className="text-[#10b981]">Name added successfully!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddVisitorForm;
