import Link from "next/link";

export default function Index() {
  return (
    <main className="flex justify-center text-center items-center h-screen">
      <div>

        <a href="https://www.bensonibeabuchi.com" target="_blank">
          <h1 className="text-4xl md:text-9xl tracking-tighter md:leading-[100px] leading-[40px] uppercase font-bold transition-all hover:scale-110 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
            Photography
          </h1>
        </a>
        <h1 className="text-5xl p-8 md:leading-[50px] leading-[40px] uppercase font-bold">
          OR
        </h1>
        <Link href="/home">
          <h1 className="text-4xl md:text-9xl tracking-tighter md:leading-[100px] leading-[40px] uppercase font-bold transition-all hover:scale-110 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
            Development
          </h1>
        </Link>
      </div>
    </main>
  );
}
