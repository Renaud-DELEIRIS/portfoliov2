import SkillBar from "@components/SkillBar";
import Timeline from "@components/timeline/Timeline";
import style from "@styles/project.module.css";
import { useTranslation } from "next-i18next";
import React from "react";
import skills from "src/constant/skill";

export default function SkillSection() {
  const { t } = useTranslation("skill");

  return (
    <section
      id="skill"
      className="w-full pb-8 pt-24 relative overflow-x-hidden"
    >
      <div className="row px-4 relative md:px-12 mb-8">
        <h2 className="col text-4xl md:text-6xl font-bold text-color-1 z-[2]">
          <span className="text-primary-1">{t`title`}</span>
          <p className="text-base mt-8 font-normal pl-4">
            <span className="text-color">{t`description`}</span>
          </p>
        </h2>
      </div>
      <div
        className={`col gap-2 md:mx-12 md:shadow px-4 relative md:px-12 py-8 md:bg-color-2 ${style.wrappercond}`}
      >
        {skills.map((skill, index) => (
          <div key={index}>
            <SkillBar skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
