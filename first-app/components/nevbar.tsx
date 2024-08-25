import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/counter"}>Counter</Link>
        <Link href={"/detail"}>Detail</Link>
        <Link href={"/my_counter"}>My_counter</Link>
      </nav>
    </>
  );
}
