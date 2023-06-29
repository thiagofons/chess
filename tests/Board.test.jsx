import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "..src/components/views/Board";

describe("Board component", () => {
  it("evento acontece como esperado", () => {
    const { container } = render(<Board />);
    const square = container.querySelector(".cell");

    fireEvent.click(square);

    // comportamento esperado
    
  });
});
