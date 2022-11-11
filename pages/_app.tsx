import Header from "@components/navigation/Header";
import { NotificationProvider } from "@components/notifications";
import "@styles/global.scss";
import { initDarkMode } from "@utils/darkMode";
import { initMouseTrails, removeMouseTrails } from "@utils/mouseTrails";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    initDarkMode();
    const body = document.querySelector("body");
    body?.classList.add("bg-color-1");
  }, []);
  return (
    <div className="min-w-full min-h-screen bg-color-1">
      <NotificationProvider>
        <Header />
        <Component {...pageProps} />
      </NotificationProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
