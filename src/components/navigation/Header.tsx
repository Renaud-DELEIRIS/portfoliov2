import {
  IconDeviceDesktopAnalytics,
  IconMoon,
  IconMouse,
  IconMouse2,
  IconMouseOff,
  IconSun,
} from "@tabler/icons";
import { isDarkMode, toggleDarkMode } from "@utils/darkMode";
import { initMouseTrails, removeMouseTrails } from "@utils/mouseTrails";
import { TFunction, useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Header = () => {
  const { t } = useTranslation("header");
  const router = useRouter();

  return (
    <header className="fixed h-20 row p-4 bg-color-1 items-center gap-4 w-full z-50">
      <div className="row items-center gap-1 mr-4">
        <IconDeviceDesktopAnalytics size={50} className="text-primary-1" />
        <div className="col">
          <span className="text-2xl text-color-1 font-bold">Renaud</span>
          <span className="text-sm text-gray italic whitespace-nowrap">{t`description`}</span>
        </div>
      </div>
      <div className="row items-center gap-4 hidden md:flex">
        <a
          href="#project"
          className="text-color-1 text-xl font-bold after:bg-color-1-invert"
        >
          {t`project`}
        </a>
        <a
          href="#skill"
          className="text-color-1 text-xl font-bold after:bg-color-1-invert"
        >
          {t`skills`}
        </a>
        <a
          href="#work"
          className="text-color-1 text-xl font-bold after:bg-color-1-invert"
        >
          {t`work`}
        </a>
        <a
          href="#contact"
          className="text-color-1 text-xl font-bold after:bg-color-1-invert"
        >
          {t`contact`}
        </a>
      </div>
      <div className="ml-auto">
        <div className="row gap-1 text-xl items-center ">
          <Link href="#" locale="en">
            <span className="duration-100 hover:scale-110 cursor-pointer">
              🇺🇸
            </span>
          </Link>
          <Link href="#" locale="fr">
            <span className="duration-100 hover:scale-110 cursor-pointer">
              🇫🇷
            </span>
          </Link>
          <div
            onClick={toggleDarkMode}
            className="ml-1 p-2 rounded-full text-color-1 hover:bg-gray-400/80 dark:hover:bg-gray-600/80"
          >
            <IconSun className="text-yellow-400 hidden dark:block" />
            <IconMoon className="text-purple-600 dark:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
