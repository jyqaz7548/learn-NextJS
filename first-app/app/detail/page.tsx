import Image from "next/image";
import styles from "./detail.module.css";
import Link from "next/link";
import Navbar from "@/components/nevbar";
import ChildComp from "@/components/childComp";

export interface BaseBallType {
  name: string;
  win: number;
  locate: string;
}

const datas: BaseBallType[] = [
  { name: "기아", win: 71, locate: "광주" },
  { name: "삼성", win: 66, locate: "대구" },
  { name: "LG", win: 63, locate: "서울" },
  { name: "두산", win: 62, locate: "서울" },
  { name: "KT", win: 59, locate: "수원" },
  { name: "SSG", win: 58, locate: "인천" },
  { name: "한화", win: 56, locate: "대전" },
  { name: "롯데", win: 51, locate: "부산" },
  { name: "NC", win: 52, locate: "창원" },
  { name: "키움", win: 53, locate: "서울" },
];

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>오늘의기분222222222222222222</h1>
        <Link href="/">good</Link>
        <ChildComp body={datas} />
      </div>
    </>
  );
}
