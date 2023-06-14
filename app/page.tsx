import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-12 grid place-items-center">
        <div className="rounded-xl p-4 bg-opacity-90 bg-slate-700">
          <span className="block text-center font-semibold text-5xl tracking-tighter mb-6">Purple Tree</span>
          <span className="block text-center font-thin tracking-wide text-xl">
            Your custom web appearance is just one click away
          </span>
        </div>
        <button className="py-6 px-12 rounded-full bg-purple-600 font-bold text-2xl hover:bg-opacity-75 transition-colors transform-gpu duration-200">
          Get in contact
        </button>
        <div className="h-fit">
          <Image src="/purple_tree.svg" alt="Purple tree" width={250} height={250} style={{ objectFit: "contain" }} />
        </div>
      </main>
    </>
  );
}
