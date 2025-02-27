import { Children, useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null);

const Square = ({children, updateBoard, index}) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_ , index) => {
            return (
              <Square 
              key={index}
              index={index}>
                {board[index]}
              </Square>
            );
        })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
