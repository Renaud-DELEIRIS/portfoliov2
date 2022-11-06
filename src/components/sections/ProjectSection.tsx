import Projects from "@components/Projects";
import style from "@styles/main.module.css";
import { IconArrowDown, IconArrowRight } from "@tabler/icons";
import { initMouseTrails, removeMouseTrails } from "@utils/mouseTrails";
import { useTranslation } from "next-i18next";
import React, { useEffect } from "react";

export default function ProjectSection() {
  const { t } = useTranslation("project");

  return (
    <section className="w-full pb-8 pt-24 relative overflow-x-hidden">
      <div className="row px-4 relative md:px-12 ">
        <h2 className="col text-4xl md:text-6xl font-bold text-color-1 z-[2]">
          <span className="text-primary-1">{t`title`},</span>
          <p className="text-base mt-8 font-normal pl-4">
            <span className="text-color">{t`description`}</span>
          </p>
        </h2>
        <span className="absolute top-0 right-0 dark:text-neutral-700 text-neutral-300 hidden xs:block text-[120px] md:text-[250px] opacity-60 select-none leading-none">
          Work
        </span>
      </div>
      <div className="row px-4 relative md:px-12 pt-8">
        <Projects />
      </div>
    </section>
  );
}
