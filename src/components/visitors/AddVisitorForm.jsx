import React, { useState, useEffect } from "react";

// Expanded basic profanity list - we'll add more through the JSON file
const BASIC_PROFANITY_LIST = [
  "badword",
  "offensive",
  "inappropriate",
  "profane",
  "swear",
  "ass",
  "damn",
  "hell",
  "crap",
  "shit",
  "fuck",
  "bitch",
  "bastard",
];

const AddVisitorForm = ({ onAddVisitor }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [profanityList, setProfanityList] = useState(BASIC_PROFANITY_LIST);
  const [isLoadingFilter, setIsLoadingFilter] = useState(true);

  // Load the profanity list from the external file
  useEffect(() => {
    // Attempt to fetch the profanity list
    // In production, you'd store this in your public folder
    fetch("/badwords.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load profanity filter");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.words)) {
          // Combine with our basic list
          setProfanityList([...BASIC_PROFANITY_LIST, ...data.words]);
        }
      })
      .catch((error) => {
        console.error("Error loading profanity filter:", error);
        // Continue with the basic list if we can't load the extended one
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

    // Check for profanity using our combined list
    const lowerInput = input.toLowerCase();

    // More thorough profanity checking:
    // 1. Check for exact matches
    // 2. Check for words within the input (with word boundaries)
    // 3. Check for words with simple character substitutions
    const hasProfanity = profanityList.some((word) => {
      // Direct inclusion
      if (lowerInput.includes(word)) return true;

      // Word boundaries for more accurate matching
      const wordRegex = new RegExp(`\\b${word}\\b`, "i");
      if (wordRegex.test(lowerInput)) return true;

      // Check for common character substitutions (e.g., @ for a, 0 for o)
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
