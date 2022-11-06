import Header from "@components/navigation/Header";
import MainSection from "@components/sections/MainSection";
import ProjectSection from "@components/sections/ProjectSection";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Home: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <main className="bg-color-1 transition-colors duration-500 -z-10">
      <Header />
      <MainSection />
      <ProjectSection />
    </main>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "main", "project"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
