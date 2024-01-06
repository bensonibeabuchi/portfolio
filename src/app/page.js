import Link from "next/link";

export default function Index() {
  return (
    <main className="flex justify-center text-center items-center h-screen">
      <Link href="/home">
        <h1 className=" text-4xl md:text-9xl tracking-tighter md:leading-[100px] leading-[40px] uppercase font-bold transition-all hover:scale-110 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
          Benson <br /> Ibeabuchi
        </h1>
      </Link>
    </main>
  );
}
