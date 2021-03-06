//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";

//create your first component
function Contador(props) {
	return (
		<div className="MyContainer">
			<p>
				<div className="fas fa-clock"></div>
				<div className="six">{props.posicion6 % 10}</div>
				<div className="five">{props.posicion5 % 10}</div>
				<div className="four">{props.posicion4 % 10}</div>
				<div className="three">{props.posicion3 % 10}</div>
				<div className="two">{props.posicion2 % 10}</div>
				<div className="one">{props.posicion1 % 10}</div>
			</p>
		</div>
	);
}

Contador.propTypes = {
	posicion1: propTypes.number,
	posicion2: propTypes.number,
	posicion3: propTypes.number,
	posicion4: propTypes.number,
	posicion5: propTypes.number,
	posicion6: propTypes.number
};

//render your react application
let counter = 0;
setInterval(function() {
	const seis = Math.floor(counter / 100000);
	const cinco = Math.floor(counter / 10000);
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Contador
			posicion1={uno}
			posicion2={dos}
			posicion3={tres}
			posicion4={cuatro}
			posicion5={cinco}
			posicion6={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
