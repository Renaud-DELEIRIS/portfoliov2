import React from "react";
import { useGame } from "./ProviderGame";
import style from "@styles/games.module.css";
import { Icon3dRotate, IconAlien, IconGoGame } from "@tabler/icons";

export default function DisplayGame() {
  const { cards, clickCard } = useGame();
  return (
    <div className="grid grid-cols-4 gap-3 xl:grid-cols-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${style.card} ${card.flipped ? style.flipped : ""}`}
        >
          <div className={`${style["card-content"]}`}>
            <div
              className={`${style["card-front"]} text-color-1 bg-color-2 hover:bg-neutral-100 dark:hover:bg-black hover:text-yellow-500 cursor-pointer`}
              onClick={() => clickCard(index)}
            >
              <IconAlien size={64} />
            </div>
            <div
              className={`${style["card-back"]} bg-color-2 ${
                card.win ? style.win : ""
              }`}
            >
              <div key={index} className="text-5xl ">
                {card.value}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
