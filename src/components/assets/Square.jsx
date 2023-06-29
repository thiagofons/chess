import React from "react";

export default class Square {
	piece = null;
	rowName = "";
	colName = "";
	row = 0;
	col = 0;
	id = "";
	origClassName = "";
	className = "";
	isSelected = false;

	constructor(piece, rowName, colName, className, row, col) {
		this.piece = piece;
		this.rowName = rowName;
		this.colName = colName;
		this.origClassName = className;
		this.className = this.origClassName;
		this.id = rowName + colName;
		this.row = row;
		this.col = col;
	}

	setIsSelected(selected) {
		if(selected) {
			this.className = this.origClassName + " selected-piece";
		} else {
			this.className = this.origClassName;
		}
	}

	getPosition() {
		let pos = [this.row, this.col]
		return pos;
	}

	render(handleClick, additionalClassName) {
		return (
			<div id={this.id} className={this.className + " " + additionalClassName} onClick={() => handleClick(this)}>
				{this.piece ? this.piece.render() : this.piece} 
			</div>
		);
	}
}