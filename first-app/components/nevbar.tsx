import Link from "next/link";

export default function Nevbar() {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/counter"}>Counter</Link>
        <Link href={"/detail"}>Detail</Link>
      </nav>
    </>
  );
}
