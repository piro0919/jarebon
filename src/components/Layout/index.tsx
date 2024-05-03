"use client";
import { ReactNode } from "react";
import styles from "./style.module.scss";
import Spacer from "react-spacer";
import useShowWindowSize from "@/hooks/useShowWindowSize";
import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";

void i18next.init({
  lng: "ja",
  resources: {
    ja: { zod: translation },
  },
});

z.setErrorMap(zodI18nMap);

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  useShowWindowSize();

  return (
    <>
      <div className={styles.frameColumns} />
      <div className={styles.contentBlock}>
        <header className={styles.header}>
          <h1 className={styles.h1}>じゃれ本AIオンライン</h1>
          <Spacer grow={1} />
          <p className={styles.description}>1人で小説を連作する</p>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          &copy; 2024 じゃれ本AIオンライン
        </footer>
      </div>
      <div className={styles.frameTop} />
      <div className={styles.frameBottom} />
    </>
  );
}
