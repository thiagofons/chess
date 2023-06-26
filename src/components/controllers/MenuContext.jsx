import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [options, setOptions] = useState({
    volume: 50,
    players: {
      player1: "Player 1",
      player2: "Player 2",
    },
    difficulty: "easy",
    maxTime: "10",
  });

  useEffect(() => {
    if (options.players.player1 === "") {
      options.players.player1 = "Player 1";
    } else if (options.players.player2 === "") {
      options.players.player2 = "Player 2";
    }
  }, [options.players]);

  return (
    <MenuContext.Provider value={{ options, setOptions }}>
      {children}
    </MenuContext.Provider>
  );
};
