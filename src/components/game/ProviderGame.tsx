import React from "react";

export interface Card {
  flipped: boolean;
  value: string;
  win: boolean;
}

interface GameContext {
  cards: Card[];
  clickCard: (index: number) => void;
  attempt: number;
}

const GameContext = React.createContext<GameContext>({
  cards: [],
  clickCard: () => {},
  attempt: 0,
});

interface Props {
  children: React.ReactNode;
  cards: Card[];
  clickCard: (index: number) => void;
  attempt: number;
}

export default function GameProvider({
  children,
  cards,
  attempt,
  clickCard,
}: Props) {
  return (
    <GameContext.Provider value={{ cards, clickCard, attempt }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return React.useContext(GameContext);
}
