/**
 * Gets a device identifier using IP address and browser fingerprint
 * @returns {Promise<string>} A unique identifier for this device/network
 */
export const getDeviceIdentifier = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const ip = data.ip;

    const fingerprint = createBrowserFingerprint();

    return `${ip}_${fingerprint}`;
  } catch (error) {
    console.error("Error getting device identifier:", error);
    return createBrowserFingerprint();
  }
};

/**
 * Creates a simple browser fingerprint
 * @returns {string} A fingerprint based on browser characteristics
 */
const createBrowserFingerprint = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";
  ctx.font = "14px Arial";
  ctx.fillText("Browser fingerprint", 2, 2);

  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + "x" + screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
  ].join("|");

  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return Math.abs(hash).toString(36);
};
