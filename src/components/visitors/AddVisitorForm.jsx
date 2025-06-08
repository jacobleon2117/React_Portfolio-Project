import { useState, useEffect } from "react";

const AddVisitorForm = ({ onAddVisitor }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [profanityList, setProfanityList] = useState([]);
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
          setProfanityList(data.words.map((word) => word.toLowerCase()));
        }
      })
      .catch((error) => {
        console.error("Error loading profanity filter:", error);
        setProfanityList([]);
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

    if (!/[a-zA-Z]/.test(input)) {
      return "Name must contain at least one letter";
    }

    if (profanityList.length > 0) {
      const lowerInput = input.toLowerCase().trim();

      const hasProfanity = profanityList.some((word) => {
        if (lowerInput.includes(word)) return true;

        if (word.length >= 3) {
          const wordRegex = new RegExp(`\\b${word}\\b`, "i");
          if (wordRegex.test(lowerInput)) return true;
        }

        const normalizedInput = lowerInput
          .replace(/[0]/g, "o")
          .replace(/[1]/g, "i")
          .replace(/[3]/g, "e")
          .replace(/[4]/g, "a")
          .replace(/[5]/g, "s")
          .replace(/[7]/g, "t")
          .replace(/[@]/g, "a")
          .replace(/[\$]/g, "s");

        return normalizedInput.includes(word);
      });

      if (hasProfanity) {
        return "Please use appropriate language for your name";
      }
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

    const cleanName = name.trim().replace(/\s+/g, " ");
    onAddVisitor(cleanName);

    setSuccess(true);
    setName("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;

    if (value.length > 30) {
      return;
    }

    setName(value);

    if (error) {
      setError("");
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="visitor-name"
            className="block text-[var(--text)] font-medium mb-3 text-center"
          >
            Your Name
          </label>
          <input
            id="visitor-name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            maxLength={25}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors duration-200 text-center text-lg"
            disabled={isLoadingFilter}
            autoComplete="off"
            spellCheck="false"
          />
          {error && (
            <p className="mt-3 text-[#f43f5e] text-sm text-center">{error}</p>
          )}
          {name.length > 15 && (
            <p className="mt-2 text-[var(--text-secondary)] text-xs text-center">
              {25 - name.length} characters remaining
            </p>
          )}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            className={`px-8 py-3 bg-[var(--accent)] text-white rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 font-medium text-lg ${
              isLoadingFilter ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoadingFilter || !name.trim()}
          >
            {isLoadingFilter ? "Loading..." : "✨ Add My Name to the Stars"}
          </button>

          {success && (
            <div className="text-center">
              <p className="text-[#10b981] text-sm font-medium">
                🎉 Name added successfully!
              </p>
              <p className="text-[var(--text-secondary)] text-xs mt-1">
                Your name is now floating among the stars!
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddVisitorForm;
