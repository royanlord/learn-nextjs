import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/posts'>Posts</Link>
      <br />
      <Link href='/albums'>Albums</Link>
    </>
  );
}
