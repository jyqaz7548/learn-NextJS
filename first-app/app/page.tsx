import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>오늘의기분</h1>
      <p>sad</p>
    </div>
  );
}
