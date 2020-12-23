import React, {useEffect} from 'react';
import './stylesheets/sass/main.css';
import snowman from "./assets/snowman.svg";
import tree from "./assets/tree.svg";
// import firstAdvent from "./assets/firstAdvent.svg"
// import secondAdvent from "./assets/secondAdvent.svg";
// import thirdAdvent from "./assets/thirdAdvent.svg";
import fourthAdvent from "./assets/fourthAdvent.svg";
import { tsParticles } from "tsparticles";

function App() {

	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;
	// document.write(today);

	// let year = new Date().getFullYear();
	// let sevenDays = (24*60*60*1000) * 7;

	// let foundDate;
	// let findClosestSunday = function(date){
	// 	foundDate = date;
	// 	if (foundDate.getDay() !== 0)
	// 		findClosestSunday(new Date(year,11,date.getDate()-1));
	// 	return foundDate;
	// }

	// let fourthSunday = findClosestSunday(new Date(year, 11, 23));
	// let thirdSunday = new Date(fourthSunday.getTime() - sevenDays);
	// let secondSunday =  new Date(fourthSunday.getTime() - sevenDays *2);
	// let firstSunday =  new Date(fourthSunday.getTime() - sevenDays *3);
	// document.write(fourthSunday)
	// alert
	// (
	// 	firstSunday,
	// 	secondSunday,
	// 	thirdSunday,
	// 	fourthSunday
	// );

useEffect(() => {
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

})

	return (
		<div className="App">
			
			<div id="tsparticles" className="snow"></div>
			{/*  */}
			<div className="trees">
				<div className="merry">
					<h2>Merry Christmas</h2>
				</div>
				<div className="snowman">
					<img src={snowman} width="250px" alt="Snowman"/>
				</div>
				<div className="tree">
				<img src={tree} width="200px" alt="tree"/>
				</div>
				<div className="candles">
					<img src={fourthAdvent} width="200px" alt="Candles"/>
				</div>
				<div className="wishFrom">
					<h2>from <wbr/> Daniel</h2>
				</div>
			</div>
		</div>
	);
}

export default App;
