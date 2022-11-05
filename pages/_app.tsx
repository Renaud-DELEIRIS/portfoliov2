import Header from "@components/navigation/Header";
import "@styles/global.scss";
import { initDarkMode } from "@utils/darkMode";
import { initMouseTrails, removeMouseTrails } from "@utils/mouseTrails";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    initDarkMode();
  }, []);
  return (
    <div className="min-w-full min-h-screen bg-color-3">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
