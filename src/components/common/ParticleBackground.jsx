import Particles from "./Particles";

const ParticleBackground = ({ theme }) => {
  const particleColors =
    theme === "dark"
      ? ["#60a5fa", "#e5e7eb", "#ffffff"]
      : ["#2563eb", "#111827", "#000000"];

  return (
    <Particles
      colors={particleColors}
      quantity={80}
      size={0.5}
    />
  );
};

export default ParticleBackground;
