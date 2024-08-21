import Image from "next/image";
import styles from "./detail.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>오늘의기분222222222222222222</h1>
      <Link href="/">good</Link>
    </div>
  );
}
