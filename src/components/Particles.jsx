// components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({theme,color}) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: true, zIndex: 0 }, // Set zIndex to 0 (not -1)
    background: {
      color: { value: "transparent" } // Transparent background
    },
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      color: { value: color },
      links: {
        enable: false,
        color: "#64748b",
        distance: 120,
      },
      move: { enable: true, speed: 1 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 200 },
        push: { quantity: 4 },
      },
    },
  }}
/>

  );
};

export default ParticlesBackground;
