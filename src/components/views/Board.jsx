import "../../styles/main.sass"
import React, { useState, useEffect } from 'react';
import Square from '../assets/Square';
import Pieces from "../../pieces";

const Board = (props) => {
	/* const [board, setBoard] = useState([]);
	const [selectedPiece, setSelectedPiece] = useState(null);
  
	// Start the board
	const setSquares = () => {
	  let types=["light", "dark"];
  
	  for(let i = 0; i < 64; i++) {
		setBoard(...board, <Square type={types[i % 2]} piece={""}/>)
	  }
	}
  
	useEffect(() => {
	  setSquares()
	    
	}, [])
  
	return (
	  <div className="board">
	    
	  </div>
	) */

	const getColName = (col) => {
		switch (col) {
			case 0: return 'a';
			case 1: return 'b';
			case 2: return 'c';
			case 3: return 'd';
			case 4: return 'e';
			case 5: return 'f';
			case 6: return 'g';
			case 7: return 'h';
		}
	}

	const handleClick = (event) => {
		let ct = event.currentTarget;
		console.log(ct);
		if (ct.children.length != 0) {
			if (selectedPiece) {
				if (ct.id != selectedPiece) {
					let old = document.getElementById(selectedPiece);
					old.classList.toggle("selected-piece");
					setSelectedPiece(ct.id);
				} else {
					setSelectedPiece(null);
				}
			} else {
				setSelectedPiece(ct.id);
			}
			ct.classList.toggle("selected-piece");
		} else {
			if (selectedPiece) {
				let old = document.getElementById(selectedPiece);
				old.classList.toggle("selected-piece");
				setSelectedPiece(null);
				let teste = old.firstElementChild;
				ct.appendChild(teste.cloneNode(true))
				teste.remove()
			}
		}
	}

	const getPiece = (row, col) => {
		// Peças pretas
		if (row == 0) {
			switch (col) {
				case 0: return props.pieces.find(piece => piece.props.alt == Pieces.black.rook.alt + " 1")
				case 1: return props.pieces.find(piece => piece.props.alt == Pieces.black.knight.alt + " 1")
				case 2: return props.pieces.find(piece => piece.props.alt == Pieces.black.bishop.alt + " 1")
				case 3: return props.pieces.find(piece => piece.props.alt == Pieces.black.king.alt)
				case 4: return props.pieces.find(piece => piece.props.alt == Pieces.black.queen.alt)
				case 5: return props.pieces.find(piece => piece.props.alt == Pieces.black.bishop.alt + " 2")
				case 6: return props.pieces.find(piece => piece.props.alt == Pieces.black.knight.alt + " 2")
				case 7: return props.pieces.find(piece => piece.props.alt == Pieces.black.rook.alt + " 2")
			}
		}

		// Peões pretos
		else if (row == 1) {
			return props.pieces.find(piece => piece.props.alt == Pieces.black.pawn.alt + " " + (col + 1).toString())
		}

		// Peões brancos
		else if (row == 6) {
			return props.pieces.find(piece => piece.props.alt == Pieces.white.pawn.alt + " " + (col + 1).toString())
		}

		// Peças brancas
		else if (row == 7) {
			switch (col) {
				case 0: return props.pieces.find(piece => piece.props.alt == Pieces.white.rook.alt + " 1")
				case 1: return props.pieces.find(piece => piece.props.alt == Pieces.white.knight.alt + " 1")
				case 2: return props.pieces.find(piece => piece.props.alt == Pieces.white.bishop.alt + " 1")
				case 3: return props.pieces.find(piece => piece.props.alt == Pieces.white.king.alt)
				case 4: return props.pieces.find(piece => piece.props.alt == Pieces.white.queen.alt)
				case 5: return props.pieces.find(piece => piece.props.alt == Pieces.white.bishop.alt + " 2")
				case 6: return props.pieces.find(piece => piece.props.alt == Pieces.white.knight.alt + " 2")
				case 7: return props.pieces.find(piece => piece.props.alt == Pieces.white.rook.alt + " 2")
			}
		}



		/* for (let i = 0; i < props.pieces.length; i++) {
			// peças pretas primeiro
			let piece = props.pieces[i];
			if (i < 16) {
				if (piece.props.name == 'rook') {
					// Torres pretas -> primeira fileira, primeira e oitava coluna.
					if (!mat[0][0].props.piece) {
						mat[0][0].props.piece = piece;
					} else if (!mat[0][7].props.piece) {
						mat[0][7].props.piece = piece;
					}
				}

				else if (piece.props.name == 'knight') {
					// Cavalos pretos -> primeira fileira, segunda e sétima coluna.
					if (!mat[0][1].props.piece) {
						mat[0][1].props.piece = piece;
					} else if (!mat[0][6].props.piece) {
						mat[0][6].props.piece = piece;
					}
				}

				else if (piece.props.name == 'bishop') {
					// Bispos pretos -> primeira fileira, terceira e sexta coluna.
					if (!mat[0][2].props.piece) {
						mat[0][2].props.piece = piece;
					} else if (!mat[0][5].props.piece) {
						mat[0][5].props.piece = piece;
					}
				}

				else if (piece.props.name == 'king') {
					// Rei preto -> primeira fileira, quarta coluna.
					if (!mat[0][3].props.piece) {
						mat[0][3].props.piece = piece;
					}
				}

				else if (piece.props.name == 'queen') {
					// Rei preto -> primeira fileira, quinta coluna.
					if (!mat[0][4].props.piece) {
						mat[0][4].props.piece = piece;
					}
				}

				else if (piece.props.name == 'pawn') {
					// Peões pretos -> segunda fileira inteira.
					let num = parseInt(piece.props.alt.substr(piece.props.alt.length - 1)) - 1 // pega o número do peão do texto alt
					mat[1][num].props.piece = piece;
				}
			} else {
				if (piece.props.name == 'rook') {
					// Torres brancas -> oitava fileira, primeira e oitava coluna.
					if (!mat[7][0].props.piece) {
						mat[7][0].props.piece = piece;
					} else if (!mat[7][7].props.piece) {
						mat[7][7].props.piece = piece;
					}
				}

				else if (piece.props.name == 'knight') {
					// Cavalos pretos -> oitava fileira, segunda e sétima coluna.
					if (!mat[7][1].props.piece) {
						mat[7][1].props.piece = piece;
					} else if (!mat[7][6].props.piece) {
						mat[7][6].props.piece = piece;
					}
				}

				else if (piece.props.name == 'bishop') {
					// Bispos pretos -> oitava fileira, terceira e sexta coluna.
					if (!mat[7][2].props.piece) {
						mat[7][2].props.piece = piece;
					} else if (!mat[7][5].props.piece) {
						mat[7][5].props.piece = piece;
					}
				}

				else if (piece.props.name == 'king') {
					// Rei preto -> oitava fileira, quarta coluna.
					if (!mat[7][3].props.piece) {
						mat[7][3].props.piece = piece;
					}
				}

				else if (piece.props.name == 'queen') {
					// Rei preto -> oitava fileira, quinta coluna.
					if (!mat[7][4].props.piece) {
						mat[7][4].props.piece = piece;
					}
				}

				else if (piece.props.name == 'pawn') {
					// Peões pretos -> sétima fileira inteira.
					let num = parseInt(piece.props.alt.substr(piece.props.alt.length - 1)) - 1 // pega o número do peão do texto alt
					mat[6][num].props.piece = piece;
				}
			}
		} */
	}

	const initializeBoard = () => {
		//console.log(props.pieces)
		let mat = [];
		let row = 0, col = 0;

		for (row = 0; row < 8; row++) {
			mat[row] = [];
			for (col = 0; col < 8; col++) {
				let className = "cell";

				// se linha for par começa com célula clara
				if (row % 2) {
					// se coluna for par é claro
					if (col % 2) {
						className += " light";
					}
					// senão é escuro
					else {
						className += " dark";
					}
				}
				// senão começa com célula escura 
				else {
					// se coluna for par é escuro
					if (col % 2) {
						className += " dark";
					}
					// senão é claro
					else {
						className += " light";
					}
				}

				let rowName = (8 - row).toString();
				let colName = getColName(col);
				let piece = getPiece(row, col);
				//console.log(piece);

				mat[row][col] = <Square
					rowName={rowName}
					colName={colName}
					handleClick={handleClick}
					className={className}
					piece={piece}
				/>
			}
		}

		return mat;
	}

	const [board, setBoard] = useState(initializeBoard());
	const [selectedPiece, setSelectedPiece] = useState(null);

	return (
		<>
			<div>
				{(selectedPiece &&
					<span style={{ color: "white" }}>Selected Piece: {selectedPiece}</span>) ||
					<span style={{ color: "white" }}>No piece selected!</span>
				}
			</div>
			<main className="board">
				{
					board.map((row) => {
						return row;
					})

				}
			</main>
		</>
	)

	/* return (
		<>
			<div>
				{(selectedPiece &&
					<span style={{ color: "white" }}>Selected Piece: {selectedPiece}</span>) ||
					<span style={{ color: "white" }}>No piece selected!</span>
				}
			</div>
			<main className="board">
				<div className="cell light" id="a8" onClick={handleClick}>
					<img src={Pieces.black.rook} alt="" className="piece" />
				</div>
				<div className="cell dark" id="b8" onClick={handleClick}>
					<img src={Pieces.black.knight} alt="" className="piece" />
				</div>
				<div className="cell light" id="c8" onClick={handleClick}>
					<img src={Pieces.black.bishop} alt="" className="piece" />
				</div>
				<div className="cell dark" id="d8" onClick={handleClick}>
					<img src={Pieces.black.king} alt="" className="piece" />
				</div>
				<div className="cell light" id="e8" onClick={handleClick}>
					<img src={Pieces.black.queen} alt="" className="piece" />
				</div>
				<div className="cell dark" id="f8" onClick={handleClick}>
					<img src={Pieces.black.bishop} alt="" className="piece" />
				</div>
				<div className="cell light" id="g8" onClick={handleClick}>
					<img src={Pieces.black.knight} alt="" className="piece" />
				</div>
				<div className="cell dark" id="h8" onClick={handleClick}>
					<img src={Pieces.black.rook} alt="" className="piece" />
				</div>
				<div className="cell dark" id="a7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="b7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="c7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="d7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="e7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="f7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="g7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="h7" onClick={handleClick}>
					<img src={Pieces.black.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="a6" onClick={handleClick}></div>
				<div className="cell dark" id="b6" onClick={handleClick}></div>
				<div className="cell light" id="c6" onClick={handleClick}></div>
				<div className="cell dark" id="d6" onClick={handleClick}></div>
				<div className="cell light" id="e6" onClick={handleClick}></div>
				<div className="cell dark" id="f6" onClick={handleClick}></div>
				<div className="cell light" id="g6" onClick={handleClick}></div>
				<div className="cell dark" id="h6" onClick={handleClick}></div>
				<div className="cell dark" id="a5" onClick={handleClick}></div>
				<div className="cell light" id="b5" onClick={handleClick}></div>
				<div className="cell dark" id="c5" onClick={handleClick}></div>
				<div className="cell light" id="d5" onClick={handleClick}></div>
				<div className="cell dark" id="e5" onClick={handleClick}></div>
				<div className="cell light" id="f5" onClick={handleClick}></div>
				<div className="cell dark" id="g5" onClick={handleClick}></div>
				<div className="cell light" id="h5" onClick={handleClick}></div>
				<div className="cell light" id="a4" onClick={handleClick}></div>
				<div className="cell dark" id="b4" onClick={handleClick}></div>
				<div className="cell light" id="c4" onClick={handleClick}></div>
				<div className="cell dark" id="d4" onClick={handleClick}></div>
				<div className="cell light" id="e4" onClick={handleClick}></div>
				<div className="cell dark" id="f4" onClick={handleClick}></div>
				<div className="cell light" id="g4" onClick={handleClick}></div>
				<div className="cell dark" id="h4" onClick={handleClick}></div>
				<div className="cell dark" id="a3" onClick={handleClick}></div>
				<div className="cell light" id="b3" onClick={handleClick}></div>
				<div className="cell dark" id="c3" onClick={handleClick}></div>
				<div className="cell light" id="d3" onClick={handleClick}></div>
				<div className="cell dark" id="e3" onClick={handleClick}></div>
				<div className="cell light" id="f3" onClick={handleClick}></div>
				<div className="cell dark" id="g3" onClick={handleClick}></div>
				<div className="cell light" id="h3" onClick={handleClick}></div>
				<div className="cell light" id="a2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="b2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="c2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="d2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="e2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="f2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell light" id="g2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="h2" onClick={handleClick}>
					<img src={Pieces.white.pawn} alt="" className="piece" />
				</div>
				<div className="cell dark" id="a1" onClick={handleClick}>
					<img src={Pieces.white.rook} alt="" className="piece" />
				</div>
				<div className="cell light" id="b1" onClick={handleClick}>
					<img src={Pieces.white.knight} alt="" className="piece" />
				</div>
				<div className="cell dark" id="c1" onClick={handleClick}>
					<img src={Pieces.white.bishop} alt="" className="piece" />
				</div>
				<div className="cell light" id="d1" onClick={handleClick}>
					<img src={Pieces.white.king} alt="" className="piece" />
				</div>
				<div className="cell dark" id="e1" onClick={handleClick}>
					<img src={Pieces.white.queen} alt="" className="piece" />
				</div>
				<div className="cell light" id="f1" onClick={handleClick}>
					<img src={Pieces.white.bishop} alt="" className="piece" />
				</div>
				<div className="cell dark" id="g1" onClick={handleClick}>
					<img src={Pieces.white.knight} alt="" className="piece" />
				</div>
				<div className="cell light" id="h1" onClick={handleClick}>
					<img src={Pieces.white.rook} alt="" className="piece" />
				</div>
			</main>
		</>
	) */

}

export default Board;