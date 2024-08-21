import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const value = "typescript 최고saddsa";
  const numlist: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.container}>
      {numlist.map((value, i) => {
        console.log(value, i);
        return (
          <div>
            <h1>2단</h1>
            <h2>2*1=2</h2>)
            <br />
          </div>
        );
      })}

      <h1 className={styles.title}>오늘의기분</h1>
      <Link href="/detail">sad</Link>
      <p>{value}</p>
      <br />
    </div>
  );
}
