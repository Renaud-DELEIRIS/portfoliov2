import Header from "@components/navigation/Header";
import ContactSection from "@components/sections/ContactSection";
import MainSection from "@components/sections/MainSection";
import ProjectSection from "@components/sections/ProjectSection";
import SkillSection from "@components/sections/SkillSection";
import WorkSection from "@components/sections/WorkSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="bg-color-1 transition-colors duration-500 -z-10">
      <Header />
      <MainSection />
      <ProjectSection />
      <SkillSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "main",
        "project",
        "timeline",
        "contact",
        "game",
        "skill",
      ])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
