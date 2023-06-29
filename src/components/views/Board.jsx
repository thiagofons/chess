import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "../controllers/MenuContext";
import movingPieceAudio from "../../audios/moving_piece.mp3";
import Pieces from "../../pieces";
import Square from "../assets/Square";
import Move from "../assets/Move";
import GAME_STATE from "../assets/GameState";
import api from "../../api/api";

const Board = (props) => {
  const [audios, setAudios] = useState({
    movingPiece: new Audio(movingPieceAudio),
  });

  const { options, setOptions } = useContext(MenuContext);
  const [currentPlayer, setCurrentPlayer] = useState(props.currentPlayer);
  const [showWrongPieceError, setShowWrongPieceError] = useState(false);

  useEffect(() => {
    setCurrentPlayer(currentPlayer);
  }, [props.currentPlayer]);

  useEffect(() => {
    audios.movingPiece.volume = options.volume / 100;
  }, [options.volume]);

  const getColName = (col) => {
    switch (col) {
      case 0:
        return "a";
      case 1:
        return "b";
      case 2:
        return "c";
      case 3:
        return "d";
      case 4:
        return "e";
      case 5:
        return "f";
      case 6:
        return "g";
      case 7:
        return "h";
    }
  };

  const getPiece = (row, col) => {
    // Peças pretas
    if (row === 0) {
      // eslint-disable-next-line default-case
      switch (col) {
        case 0:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.rook.alt + " 1"
          );
        case 1:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.knight.alt + " 1"
          );
        case 2:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.bishop.alt + " 1"
          );
        case 3:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.king.alt
          );
        case 4:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.queen.alt
          );
        case 5:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.bishop.alt + " 2"
          );
        case 6:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.knight.alt + " 2"
          );
        case 7:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.black.rook.alt + " 2"
          );
      }
    }

    // Peões pretos
    else if (row == 1) {
      return props.pieces.find(
        (piece) =>
          piece.alt == Pieces.black.pawn.alt + " " + (col + 1).toString()
      );
    }

    // Peões brancos
    else if (row == 6) {
      return props.pieces.find(
        (piece) =>
          piece.alt == Pieces.white.pawn.alt + " " + (col + 1).toString()
      );
    }

    // Peças brancas
    else if (row == 7) {
      // eslint-disable-next-line default-case
      switch (col) {
        case 0:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.rook.alt + " 1"
          );
        case 1:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.knight.alt + " 1"
          );
        case 2:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.bishop.alt + " 1"
          );
        case 3:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.king.alt
          );
        case 4:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.queen.alt
          );
        case 5:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.bishop.alt + " 2"
          );
        case 6:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.knight.alt + " 2"
          );
        case 7:
          return props.pieces.find(
            (piece) => piece.alt == Pieces.white.rook.alt + " 2"
          );
      }
    }
  };

  const initializeBoard = () => {
    let mat = [];
    let row = 0,
      col = 0;

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

        mat[row][col] = new Square(
          piece,
          rowName,
          colName,
          className,
          row,
          col
        );
      }
    }

    return mat;
  };

  const [board, setBoard] = useState(initializeBoard());
  const [selectedSquare, setSelectedSquare] = useState(null);

  useEffect(() => {
    if (props.gameState == GAME_STATE.START_GAME) {
      setBoard(initializeBoard());
      props.setGameState(GAME_STATE.ONGOING);
      api.get("inicia");
    }
  }, [props.gameState]);

  const alternatePlayer = () => {
    props.alternatePlayer();
    if (currentPlayer == 1) {
      setCurrentPlayer(2);
    } else if (currentPlayer == 2) {
      setCurrentPlayer(1);
    }
  };

  const changeSelectedSquare = (square) => {
    setSelectedSquare(square);
    setShowWrongPieceError(false);
  };

  const [possibleMoves, setPossibleMoves] = useState([]);

  const findSquare = (y, x) => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (row == y && col == x) {
          return board[row][col];
        }
      }
    }
  };

  const checkIsPossibleMove = (_possibleMoves, squarePos) => {
    return (
      _possibleMoves.filter(
        (pos) => pos[0] == squarePos[0] && pos[1] == squarePos[1]
      ).length != 0
    );
  };

  async function handleClick(square) {
    // Selecionando quadrado novo
    if (square != selectedSquare) {
      let oldSquare = selectedSquare;
      // Se tinha quadrado antigo selecionado
      if (oldSquare) {
        if (!checkIsPossibleMove(possibleMoves, square.getPosition())) {
          return;
        }

        let move = new Move(oldSquare, oldSquare.piece, square);

        // Captura sendo feito
        if (square.piece) {
          if (square.piece.color != oldSquare.piece.color) {
            move.capturePiece = square.piece;
            move.isCapture = true;
            //square.piece.capture();
          } else {
            alert("Não pode capturar sua própria peça!");
            return;
          }
        }

        // Movimentação da peça
        square.piece = oldSquare.piece;
        oldSquare.piece = null;
        audios.movingPiece.play();

        // Ao final de movimento/captura deseleciona quadrado
        selectedSquare.setIsSelected(false);
        changeSelectedSquare(null);
        props.appendMove(move);
        alternatePlayer();

        await api
          .get(
            "moves/" +
              oldSquare.row +
              "and" +
              oldSquare.col +
              "por" +
              square.row +
              "and" +
              square.col
          )
          .catch((err) => console.log("err", err));
        setPossibleMoves([]);

        // Movimentação de IA
        await api
          .get("moves/IA/" + options.difficulty)
          .then((resp) => {
            let squares = resp.data;
            let src = findSquare(squares[0][0], squares[0][1]);
            let dest = findSquare(squares[1][0], squares[1][1]);
            let move = new Move(src, src.piece, dest);

            // Captura sendo feito
            if (dest.piece) {
              if (dest.piece.color != src.piece.color) {
                move.capturePiece = dest.piece;
                move.isCapture = true;
                //square.piece.capture();
              }
            }

            // Movimentação da peça
            dest.piece = src.piece;
            src.piece = null;
            audios.movingPiece.play();

            props.appendMove(move);
            alternatePlayer();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // Se não tinha quadrado antigo selecionado
      else {
        // Seleciona quadrado novo apenas se há peça nele
        if (square.piece) {
          /*if (currentPlayer == 1 && square.piece.color != "black") {
              setShowWrongPieceError(true);
              return;
            } */
          if (currentPlayer == 2 && square.piece.color != "white") {
            setShowWrongPieceError(true);
            return;
          }

          changeSelectedSquare(square);
          square.setIsSelected(true);
          await api
            .get("moves/" + square.row + "and" + square.col)
            .then((resp) => {
              setPossibleMoves(resp.data);
            })
            .catch((err) => {
              console.log("err", err);
            });
        }
      }
    }
    // Selecionando mesmo quadrado
    else {
      selectedSquare.setIsSelected(false);
      changeSelectedSquare(null);
      setPossibleMoves([]);
    }
  }

  return (
    <main className="board">
      {board.map((row) => {
        return row.map((square) =>
          square.render(
            handleClick,
            checkIsPossibleMove(possibleMoves, square.getPosition())
              ? "cell__move"
              : ""
          )
        );
      })}
    </main>
  );
};

export default Board;
