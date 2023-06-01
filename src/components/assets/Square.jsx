import React from "react";

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
			<div id={this.id} className={this.className} onClick={() => handleClick(this)}>
				{this.piece ? this.piece.render() : this.piece} 
			</div>
		);
	}
}