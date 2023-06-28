import "./styles/main.sass";

import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Game from "./components/views/Game";

import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <NavBar showMenu={showMenu} setShowMenu={setShowMenu}/>

      <Container>
        <Game />
        
      </Container>

    </div>
  );
}

export default App;
