import "./styles/main.sass";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Game from "./components/views/Game";
import MovementsData from "./components/views/MovementsData";
import React, { useState } from "react";


function App() {

  const [moves, setMoves] = useState([]);

  const appendMove = (newMove) => {
    setMoves(curMoves => [...curMoves, newMove])
  }

  return (
    <div className="App">
      <NavBar />

      <Container>
        <Game appendMove={appendMove} />
        <MovementsData moves={moves} />
      </Container>

    </div>
  );
}

export default App;
