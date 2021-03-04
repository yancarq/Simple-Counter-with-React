import React from "react";
import { ClockFill } from "react-bootstrap-icons";
import PropTypes from "prop-types";

//include images into your bundle
export function SecondsCounter(props) {
	let primerDigito = Math.floor(props.count / 1);
	let segundoDigito = Math.floor(props.count / 10);
	let tercerDigito = Math.floor(props.count / 100);
	let cuartoDigito = Math.floor(props.count / 1000);
	let quintoDigito = Math.floor(props.count / 10000);
	let sextoDigito = Math.floor(props.count / 100000);

	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="clockNumber">
					<ClockFill />
				</div>
				<div className="clockNumber">{sextoDigito % 10}</div>
				<div className="clockNumber">{quintoDigito % 10}</div>
				<div className="clockNumber">{cuartoDigito % 10}</div>
				<div className="clockNumber">{tercerDigito % 10}</div>
				<div className="clockNumber">{segundoDigito % 10}</div>
				<div className="clockNumber">{primerDigito % 10}</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	count: PropTypes.string
};
