import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "..src/components/views/Menu";
import { MenuProvider } from "..src/components/controllers/MenuContext";

describe("Menu", () => {
  test("altera o nome do jogador corretamente", () => {
    const setOptionsMock = jest.fn();

    const options = {
      volume: 50,
      players: {
        player1: "Player 1",
        player2: "Player 2",
      },
      difficulty: "easy",
      maxTime: "10",
    };

    render(
      <MenuProvider>
        <Menu />
      </MenuProvider>
    );

    const player1Input = screen.getByPlaceholderText("insert your name here");
    fireEvent.change(player1Input, { target: { value: "Novo Nome do Jogador 1" } });

    const player2Input = screen.getAllByPlaceholderText("insert your name here")[1];
    fireEvent.change(player2Input, { target: { value: "Novo Nome do Jogador 2" } });

    expect(setOptionsMock).toHaveBeenCalledTimes(2);
    expect(setOptionsMock).toHaveBeenCalledWith({
      ...options,
      players: {
        player1: "Novo Nome do Jogador 1",
        player2: "Player 2",
      },
    });
    expect(setOptionsMock).toHaveBeenCalledWith({
      ...options,
      players: {
        player1: "Novo Nome do Jogador 1",
        player2: "Novo Nome do Jogador 2",
      },
    });
  });
});
