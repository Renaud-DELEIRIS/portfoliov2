import Timeline from "@components/timeline/Timeline";
import style from "@styles/project.module.css";
import { useTranslation } from "next-i18next";
import React from "react";

export default function WorkSection() {
  const { t } = useTranslation("timeline");

  return (
    <section id="work" className="w-full pb-8 pt-24 relative overflow-x-hidden">
      <div className="row px-4 relative md:px-12 mb-8">
        <h2 className="col text-4xl md:text-6xl font-bold text-color-1 z-[2]">
          <span className="text-primary-1">{t`title`},</span>
          <p className="text-base mt-8 font-normal pl-4">
            <span className="text-color">{t`description`}</span>
          </p>
        </h2>
      </div>
      <div
        className={`row md:mx-12 md:shadow px-4 relative md:px-12 pt-8 md:bg-color-2 ${style.wrappercond}`}
      >
        <Timeline />
      </div>
    </section>
  );
}
