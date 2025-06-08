import Particles from "./Particles";

const ParticleBackground = ({ theme }) => {
  const particleColors =
    theme === "dark"
      ? ["#3b82f6", "#f3f4f6", "#f9fafb"]
      : ["#3b82f6", "#f8fafc", "#f1f5f9"];

  return (
    <Particles
      colors={particleColors}
      quantity={80}
      size={0.5}
      cursorInteraction="repel"
      interactionStrength={0.2}
      ease={150}
      disableOnMobile={false}
    />
  );
};

export default ParticleBackground;
