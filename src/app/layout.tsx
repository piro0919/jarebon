// eslint-disable-next-line filenames/match-exported
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "ress";
import "./globals.scss";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "1人で小説を連作する",
  title: "じゃれ本AIオンライン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NextTopLoader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
