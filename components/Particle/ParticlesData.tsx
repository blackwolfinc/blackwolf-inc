import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import type { Engine } from "tsparticles-engine";
// import styles from "../styles/Page.module.css";



export const ParticlesData = () => {

  const particlesInit = async (main: Engine) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
};


const particlesOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 400,
      },
      push: {
        quantity: 0,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 0
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#ffffff",
      distance: 170,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "bottom",
      enable: true,
      outMode: "out",
      random: true,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 4,
    },
    opacity: {
      value: 1,
    },
    // shape: {
    //   type: ["image"],
    //   image: {
    //       src: "https://webstockreview.net/images/bat-clipart-animation-4.gif",
    //     },
    // },
    shape: {
      "type": "circle",
      "options": {}
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
detectRetina: true,
}

return (
      <Particles className={"absolute h-[94svh] w-full " } init={particlesInit}  options={particlesOptions} />
);

}
