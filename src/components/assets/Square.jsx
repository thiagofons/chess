import React, { useState, useEffect } from "react";

import "../../styles/main.sass"

/* export default function Square(props) {
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
 */

export default class Square {
	piece = null;
	rowName = "";
	colName = "";
	id = "";
	origClassName = "";
	className = "";
	isSelected = false;

	constructor(piece, rowName, colName, className) {
		this.piece = piece;
		this.rowName = rowName;
		this.colName = colName;
		this.origClassName = className;
		this.className = this.origClassName;
		this.id = rowName + colName;
	}

	setIsSelected(selected) {
		if(selected) {
			this.className = this.origClassName + " selected-piece";
		} else {
			this.className = this.origClassName;
		}
	}

	render(handleClick) {
		return (
			<div id={this.id} className={this.className} onClick={(e) => handleClick(e, this)}>
				{this.piece ? this.piece.render() : this.piece} 
			</div>
		);
	}
}