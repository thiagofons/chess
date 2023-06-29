import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import GAME_STATE from "./components/assets/GameState";
import AppNavBar from "./components/layout/AppNavBar";
import Game from "./components/views/Game";
import MovementsData from "./components/views/MovementsData";
import "./styles/main.sass";

function App() {

  const [moves, setMoves] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [gameState, setGameState] = useState(GAME_STATE.ONGOING)

  useEffect(() => {
    switch(gameState) {
      case GAME_STATE.ONGOING: {
        break;
      }
      case GAME_STATE.PLAYER_LOSE: {
        break;
      }
      case GAME_STATE.PLAYER_WIN: {
        break;
      }
      case GAME_STATE.START_GAME: {
        setMoves([]);
      }
    }
  }, [gameState])

  const appendMove = (newMove) => {
    setMoves(curMoves => [...curMoves, newMove])
  }

  const handleLose = () => {
    setGameState(GAME_STATE.PLAYER_LOSE);
    setShowMenu(false);
  }

  const handleCloseLoseModal = () => {
    setGameState(GAME_STATE.START_GAME)
  }

  const handleCloseWinModal = () => {
    setGameState(GAME_STATE.START_GAME)
  }

  return (
    <div className="App">
      <AppNavBar showMenu={showMenu} setShowMenu={setShowMenu} handleSurrender={handleLose} />

      <Container fluid className="app__container">

        <Modal
          show={gameState == GAME_STATE.PLAYER_LOSE}
          onHide={handleCloseLoseModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="text-center">Ah que pena, você perdeu!<br/>Clique em qualquer lugar para recomeçar.</Modal.Body>
        </Modal>

        <Modal
          show={gameState == GAME_STATE.PLAYER_WIN}
          onHide={handleCloseWinModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="text-center">Parabéns, você ganhou!!<br/>Clique em qualquer lugar para recomeçar.</Modal.Body>
        </Modal>

        <Row>
          <Col xg="8" lg="7" md="6" sm="12" className="py-2">
            <Game appendMove={appendMove} gameState={gameState} setGameState={setGameState} />
          </Col>
          <Col xg="4" lg="5" md="6" sm="12" className="py-2">
            <MovementsData moves={moves} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
