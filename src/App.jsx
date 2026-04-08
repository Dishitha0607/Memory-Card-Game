import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = [
  "🥝",
  "🍓",
  "🍍",
  "🍇",
  "🍉",
  "🍒",
  "🫐",
  "🍎",
  "🥝",
  "🍓",
  "🍍",
  "🍇",
  "🍉",
  "🍒",
  "🫐",
  "🍎",
];

function App() {
  const {
    cards,
    score,
    moves,
    handleCardClick,
    initialiseGame,
    isGameComplete,
  } = useGameLogic(cardValues);
  return (
    <>
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initialiseGame} />
        {isGameComplete && <WinMessage moves={moves} />}

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card key={index} card={card} onClicked={handleCardClick} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
