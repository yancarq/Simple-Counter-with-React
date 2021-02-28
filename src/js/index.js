//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { ClockFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

import * as Icon from "react-bootstrap-icons";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

const state = {
	seconds: 0
};
let i = 0,
	b = 0;

setInterval(function() {
	this.state = {
		seconds: i++
	};
	b = this.state.seconds;

	console.log(this.state.seconds, b);
}, 1000);

export function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="clockNumber">
					<ClockFill />
				</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
				<div className="clockNumber">0</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.Number
};

//render your react application
ReactDOM.render(<SecondsCounter seconds={0} />, document.querySelector("#app"));
