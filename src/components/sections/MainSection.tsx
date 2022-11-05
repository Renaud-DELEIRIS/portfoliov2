import style from "@styles/main.module.css";
import { IconArrowDown, IconArrowRight } from "@tabler/icons";
import { initMouseTrails, removeMouseTrails } from "@utils/mouseTrails";
import { destroyStars, initStars } from "@utils/stars";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

export default function MainSection() {
  const { t } = useTranslation("main");
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const name = document.getElementById("name");
    if (name) {
      // Add an increasing delay of 40 ms for each child
      const children = name.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        child.classList.add(style.letter);
        child.classList.add("hover:text-primary-1");
        child.style.animationDelay = `${i * 160}ms`;
      }
    }
    initMouseTrails(ref.current);
    initStars(ref.current);
    return () => {
      removeMouseTrails(ref.current);
      destroyStars(ref.current);
    };
  }, [ref]);
  return (
    <section
      className="w-full h-screen pt-[calc(80px+15vh)] py-8 relative overflow-x-hidden"
      ref={ref}
    >
      <div className="row px-4 relative md:px-12 z-10">
        <h1 className="col text-4xl md:text-6xl font-bold text-color-1">
          <span className="">{t`welcome`},</span>
          <span className="">
            {t`presentation`}{" "}
            <span id="name">
              <span className={style.letter}>R</span>
              <span className={style.letter}>e</span>
              <span className={style.letter}>n</span>
              <span className={style.letter}>a</span>
              <span className={style.letter}>u</span>
              <span className={style.letter}>d</span>
            </span>
            ,
          </span>
          <span className="">{t`job`}</span>
          <span className="text-gray text-sm mt-2 italic">{t`job.explain`}</span>
        </h1>
        <img
          className={`${style.logo} dark:translate-x-[-11rem] dark:translate-y-[-6.5rem] dark:md:translate-x-[-17rem] dark:md:translate-y-[-6rem]`}
          src="/images/moon.svg"
          alt="Moon"
        />
        <img
          className={`${style.logo} translate-x-[-11rem] translate-y-[-6.5rem] md:translate-x-[-17rem] md:translate-y-[-6rem] dark:translate-x-0 dark:translate-y-0`}
          src="/images/sun.svg"
          alt="Sun"
        />
        <img
          className={`${style.compagnion} hidden dark:block`}
          src="/images/zombie.gif"
          alt="Moon"
        />
        <img
          className={`${style.compagnion} dark:hidden`}
          src="/images/pig.gif"
          alt="Moon"
        />
      </div>
      <span
        className="absolute bottom-9 left-3 text-gray text-sm animate-bounce"
        style={{
          writingMode: "vertical-lr",
        }}
      >
        scroll down
      </span>
      <span className="absolute bottom-3 left-2.5 text-primary-1 text-sm ">
        <IconArrowDown size={24} />
      </span>
      <span
        className="absolute bottom-9 right-3 text-gray text-sm animate-bounce"
        style={{
          writingMode: "vertical-rl",
        }}
      >
        scroll down
      </span>
      <span className="absolute bottom-3 right-2.5 text-primary-1 text-sm ">
        <IconArrowDown size={24} />
      </span>
    </section>
  );
}
