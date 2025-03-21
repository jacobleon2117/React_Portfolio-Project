// src/utils/storage.js

/**
 * Safely saves data to localStorage with error handling
 * @param {string} key - The localStorage key
 * @param {any} value - The value to store (will be JSON stringified)
 * @returns {boolean} - Success status
 */
export const saveToStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
    return false;
  }
};

/**
 * Safely retrieves data from localStorage with error handling
 * @param {string} key - The localStorage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {any} - The retrieved value or defaultValue
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving from localStorage: ${error}`);
    return defaultValue;
  }
};

/**
 * Safely removes an item from localStorage
 * @param {string} key - The localStorage key to remove
 * @returns {boolean} - Success status
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
    return false;
  }
};

/**
 * Storage keys used in the application
 */
export const STORAGE_KEYS = {
  VISITORS: "portfolio_visitors",
  USER_ID: "portfolio_user_submitted_id",
  THEME: "theme",
};
