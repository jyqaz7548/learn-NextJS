import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const value = "typescript 최고saddsa";
  const numlist: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
  const nlist: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  [1, 2, 3, 4, 5].map((value, i) => {
    value * value;
  });

  return (
    <div className={styles.container}>
      {numlist.map((value, i) => {
        return (
          <div key={i}>
            <h1>{value}단</h1>
            {nlist.map((n, j) => {
              return (
                <h2 key={i}>
                  {value}*{n}={value * n}
                </h2>
              );
            })}
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
