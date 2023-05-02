import "./styles/main.sass";

import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Board from "./components/views/Board";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container>
        <Board />  
      </Container>

    </div>
  );
}

export default App;
