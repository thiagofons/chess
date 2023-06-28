import "./styles/main.sass";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from "./components/layout/AppNavBar";
import AppContainer from "./components/layout/AppContainer";
import Game from "./components/views/Game";
import MovementsData from "./components/views/MovementsData";
import React, { useState } from "react";
import {Row, Col, Container} from "react-bootstrap";


function App() {

  const [moves, setMoves] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const appendMove = (newMove) => {
    setMoves(curMoves => [...curMoves, newMove])
  }

  return (
    <div className="App">
      <AppNavBar showMenu={showMenu} setShowMenu={setShowMenu}/>

      <Container fluid className="app__container">
        <Row>
          <Col xg="8" lg="7" md="6" sm="12" className="py-2">
            <Game appendMove={appendMove} />
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
