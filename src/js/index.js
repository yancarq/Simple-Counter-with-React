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
import { SecondsCounter } from "./component/home.js";

//const [seconds, SetSeconds] = useState(0);

let counter = 0;

//render your react application
setInterval(function() {
	counter++;
	ReactDOM.render(
		<SecondsCounter count={counter} />,
		document.querySelector("#app")
	);
}, 1000);
