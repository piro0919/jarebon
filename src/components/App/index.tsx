"use client";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

export default function App(): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          router.push("/books/new?start=you");
        }}
      >
        あなたから書き始める
      </button>
      <button
        className={styles.button}
        onClick={() => {
          router.push("/books/new?start=ai");
        }}
      >
        AIから書き始める
      </button>
    </div>
  );
}
