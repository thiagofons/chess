import React, { useState, useEffect } from "react";

import "../../styles/main.sass"

export default function Square(props) {
	const [piece, setPiece] = useState(props.piece);
	const [id, setId] = useState('');

	useEffect(() => {
		setId(props.rowName + props.colName);
	}, [props.rowName, props.colName]);

	useEffect(() => {
		setPiece(props.piece);
	}, [props.piece]);

	return (
		<div id={id} className={props.className} onClick={props.handleClick}>
			{piece}
		</div>
	);
};
