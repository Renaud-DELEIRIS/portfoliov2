import Button from "@components/Button";
import React from "react";
import DisplayGame from "./DisplayGame";
import GameProvider, { Card } from "./ProviderGame";

const smileys = ["😁", "😂", "😅", "😉", "😊", "😋", "😎", "😍"];

export default function Cardgame() {
  const [cards, setCards] = React.useState<Card[] | null>(null);
  const [attempt, setAttempt] = React.useState(0);
  const [lastCard, setLastCard] = React.useState<number | null>(null);
  const [matched, setMatched] = React.useState<number>(0);
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  const fillCards = () => {
    const newCards = [];
    // Smileys can only be placed twice
    for (let i = 0; i < 2; i++) {
      for (const smiley of smileys) {
        newCards.push({
          value: smiley,
          flipped: false,
          win: false,
        });
      }
    }
    // Shuffle the cards
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setCards(newCards);
    console.log(newCards);
  };

  const clickCards = (index: number) => {
    if (!cards) return;
    if (cards[index].flipped) return;
    if (timer.current) return;

    // If this is the first card, flip it and save the index
    if (lastCard === null) {
      setLastCard(index);
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      return;
    } else {
      setAttempt((attempt) => attempt + 1);
      const clickedCard = cards[index];
      const lastClickedCard = cards[lastCard];
      // Process the flip
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      setLastCard(null);
      if (clickedCard.value === lastClickedCard.value) {
        // If the cards match keep them flipped
        setCards((cards) => {
          if (!cards) return null;
          const newCards = [...cards];
          newCards[index].flipped = true;
          newCards[lastCard].flipped = true;
          newCards[index].win = true;
          newCards[lastCard].win = true;
          return newCards;
        });
        setMatched((matched) => matched + 1);
        return;
      }
      // If the cards don't match, flip them back
      timer.current = setTimeout(() => {
        const newCards = [...cards];
        newCards[index].flipped = false;
        newCards[lastCard].flipped = false;
        setCards(newCards);
        timer.current = null;
      }, 500);
    }
  };

  const resetGame = () => {
    setAttempt(0);
    setLastCard(null);
    setMatched(0);
    setCards((cards) => {
      if (!cards) return null;
      const newCards = [...cards];
      for (const card of newCards) {
        card.flipped = false;
      }
      return newCards;
    });

    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    // Wait for the animation to finish
    setTimeout(() => {
      fillCards();
    }, 500);
  };

  React.useEffect(() => {
    fillCards();
    setAttempt(0);
    setMatched(0);
    setLastCard(null);
  }, []);

  if (!cards) {
    return null;
  }

  return (
    <GameProvider cards={cards} attempt={attempt} clickCard={clickCards}>
      <div className="flex flex-col bg-color-3 p-4 gap-2">
        <h5 className="font-bold text-xl text-color-1">Crack the pairs 🤔</h5>
        <div className="grid grid-cols-2">
          <div className="text-color-1">Attempts: {attempt}</div>
          <div className="text-color-1">Matched: {matched}</div>
        </div>
        <div className="w-full mb-1 relative">
          <span
            className={`${
              matched < 8 ? "invisible" : ""
            } text-sm text-green-500`}
          >
            You win!
          </span>
          <div className="w-full h-2 bg-color-2 rounded">
            <div
              className={`h-full ${
                matched < 8 ? "bg-yellow-500" : "bg-green-500"
              } rounded`}
              style={{ width: `${(matched / 8) * 100}%` }}
            />
          </div>
        </div>
        <DisplayGame />
        <Button onClick={resetGame}>Reset</Button>
      </div>
    </GameProvider>
  );
}
