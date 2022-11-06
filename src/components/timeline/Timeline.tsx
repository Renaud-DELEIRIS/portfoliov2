import { useTranslation } from "next-i18next";
import React from "react";
import works from "src/constant/work";

// Create a function that generatore cold to warm color (blue to red) based on the number of works
const generateColor = (index: number) => {
  const color = Math.floor(((works.length - index) / works.length) * 350);
  return `hsl(${color}, 100%, 50%)`;
};

export default function Timeline() {
  const { t } = useTranslation("timeline");
  return (
    <div className="w-full row relative items-center">
      <div className="px-4 w-full row min-h-[450px] ">
        {works.map((work, index) => (
          <div
            key={index}
            className={`col items-center flex-1 ${
              index % 2 ? "flex-col-reverse" : ""
            }`}
          >
            <div
              className={`col justify-evenly items-center h-1/2 ${
                index % 2 ? "flex-col-reverse" : ""
              }`}
            >
              <span style={{ color: generateColor(index) }}>
                <img src={work.icon} alt={work.title} className="w-20 h-20" />
              </span>
              <h6 className="font-bold text-color-1 whitespace-nowrap">
                {t(work.date)}
              </h6>
            </div>
            <div
              className={`col h-1/2 w-full gap-4  ${
                index % 2 ? "flex-col-reverse" : ""
              }`}
            >
              <h6
                className={`text-neutral-100 dark:text-neutral-800 font-bold capitalize text-center w-full h-12 border ${
                  index % 2 ? "rounded-t-full" : "rounded-b-full"
                } dark:border-neutral-800 flex items-center justify-center min-h-[48px]`}
                style={{ backgroundColor: generateColor(index) }}
              >
                {t(work.title)}
              </h6>
              <p className="text-xs xl:text-sm text-gray text-center whitespace-pre-line">
                {t(work.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full flex items-center">
        <div className="h-4 w-4 rounded-full border-2 bg-neutral-1 border-neutral-700 dark:border-neutral-200"></div>
        <div className="flex-1 h-1 bg-neutral-700"></div>
        <div className="h-4 w-4 rounded-full border-2 bg-neutral-1 border-neutral-700 dark:border-neutral-200"></div>
      </div>
    </div>
  );
}
