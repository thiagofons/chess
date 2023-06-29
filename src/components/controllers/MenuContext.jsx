import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [options, setOptions] = useState({
    volume: 50,
    players: {
      player1: "IA",
      player2: "Jogador",
    },
    difficulty: 1,
    maxTime: "10",
  });

  useEffect(() => {
    if (options.players.player1 === "") {
      options.players.player1 = "IA";
    } else if (options.players.player2 === "") {
      options.players.player2 = "Jogador";
    }
  }, [options.players]);

  return (
    <MenuContext.Provider value={{ options, setOptions }}>
      {children}
    </MenuContext.Provider>
  );
};
