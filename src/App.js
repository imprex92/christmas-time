import './stylesheets/sass/main.css';
import snowman from "./assets/snowman.svg";
import tree from "./assets/tree.svg";
import { tsParticles } from "tsparticles";

function App() {
  tsParticles.load("tsparticles", {
    fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "repulse" },
      onhover: {
        enable: true,
        mode: "bubble",
        parallax: { enable: false, force: 2, smooth: 10 }
      },
      resize: true
    },
    modes: {
      bubble: { distance: 400, duration: 0.3, opacity: 1, size: 4, speed: 3 },
      grab: { distance: 400, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
      repulse: { distance: 200, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#fff" },
    line_linked: {
      color: "#ffffff",
      distance: 500,
      enable: false,
      opacity: 1,
      width: 2
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "bottom",
      enable: true,
      out_mode: "out",
      random: false,
      size: true,
      speed: 3,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 400 },
    opacity: {
      anim: { enable: false, opacity_min: 1, speed: 1, sync: false },
      random: true,
      value: 1
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 10
    }
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: ""
  },
  retina_detect: true
  });

  return (
    <div className="App">
      
      <div id="tsparticles" className="snow"></div>
      {/*  */}
      <div className="trees">
        <div className="merry">
          <h1>Merry christmas</h1>
        </div>
        <div className="fox">
          <img src={snowman} width="250px" alt="Snowman"/>
        </div>
        <div className="tree">
        <img src={tree} width="200px" alt="tree"/>
        </div>
      </div>
    </div>
  );
}

export default App;
