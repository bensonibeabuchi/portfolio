import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <main className="flex justify-center text-center items-center h-screen">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5444473500763929"
     crossorigin="anonymous"></script>
      </Head>
      <div>
        <Link href="/home">
        <h1 className="text-4xl md:text-9xl tracking-tighter md:leading-[100px] leading-[40px] uppercase font-bold transition-all hover:scale-110 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Benson
        </h1>
        <h1 className="text-4xl md:text-9xl tracking-tighter md:leading-[100px] leading-[40px] uppercase font-bold transition-all hover:scale-110 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Ibeabuchi
        </h1>
        <h1 className="sm:text-4xl tracking-tighter md:leading-[100px] leading-[40px] uppercase font-bold transition-all hover:scale-110 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Enter Here
        </h1>

        </Link>
      </div>
    </main>
  );
}
