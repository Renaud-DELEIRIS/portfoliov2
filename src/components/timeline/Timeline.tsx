import { useTranslation } from "next-i18next";
import React from "react";
import works from "src/constant/work";

// Create a function that generatore cold to warm color (blue to red) based on the number of works
const generateColor = (index: number, saturate = true) => {
  const color = Math.floor(((works.length - index) / works.length) * 350);
  return `hsl(${color}, ${saturate ? "70" : "40"}%, 50%)`;
};

export default function Timeline() {
  const { t } = useTranslation("timeline");
  return (
    <div className="w-full row relative items-center">
      <div className="p-4 w-full col md:row md:min-h-[450px] gap-8 md:gap-0">
        {works.map((work, index) => (
          <div
            key={index}
            className={`row md:col md:items-center md:justify-start md:flex-1 ${
              index % 2 ? "flex-row-reverse md:flex-col-reverse" : ""
            }`}
          >
            <div
              className={`hidden md:flex col justify-evenly items-center w-1/2 md:h-1/2 ${
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
              className={`hidden md:flex col w-1/2 md:h-1/2 md:w-full gap-4  ${
                index % 2 ? "flex-col-reverse" : ""
              }`}
            >
              <h6
                className={`text-neutral-100 dark:text-neutral-800 font-bold capitalize text-center w-full h-12 border ${
                  index % 2 ? "rounded-t-full" : "rounded-b-full"
                } dark:border-neutral-800 flex items-center justify-center min-h-[48px]`}
                style={{ backgroundColor: generateColor(index, false) }}
              >
                {t(work.title)}
              </h6>
              <p className="text-xs xl:text-sm text-gray text-center whitespace-pre-line">
                {t(work.description)}
              </p>
            </div>
            <div
              className={`px-2 row w-1/2 md:hidden items-center ${
                index % 2 ? "" : "flex-row-reverse"
              }`}
            >
              <div
                className="p-2 col gap-1"
                style={{
                  backgroundColor: generateColor(index),
                }}
              >
                <h6 className="font-bold text-color-1">{t(work.title)}</h6>
                <h6 className="font-bold text-color-1 text-sm">
                  {t(work.date)}
                </h6>
                <p>
                  <span className="text-xs text-color-1">
                    {t(work.description)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute pointer-events-none h-full w-full md:row col items-center justify-center">
        <div className="h-4 w-4 rounded-full border-2 bg-neutral-1 border-neutral-700 dark:border-neutral-200"></div>
        <div className="flex-1 w-1 md:h-1 md:w-full bg-neutral-700"></div>
        <div className="h-4 w-4 rounded-full border-2 bg-neutral-1 border-neutral-700 dark:border-neutral-200"></div>
      </div>
    </div>
  );
}
