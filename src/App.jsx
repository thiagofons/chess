import "./styles/main.sass";

import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Game from "./components/views/Game";
import MovementsData from "./components/views/MovementsData";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container>
        <Game />
        <MovementsData />
      </Container>

    </div>
  );
}

export default App;
