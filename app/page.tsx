import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-12 flex flex-col">
        <div className="flex flex-col gap-3 mt-12">
          <span className="block text-center font-semibold text-5xl tracking-tighter mb-3">Purple Tree</span>
          <span className="block text-center font-thin tracking-wide text-xl">
            Your custom web appearance is just one click away
          </span>
        </div>
        <button className="w-fit my-auto self-center py-3 px-12 rounded-full bg-purple-600 font-bold text-2xl hover:bg-opacity-75 transition-colors transform-gpu duration-200">
          Get in contact
        </button>

        <div className="h-fit self-center mt-auto">
          <Image src="/purple_tree.svg" alt="Purple tree" width={250} height={250} style={{ objectFit: "contain" }} />
        </div>
      </main>
    </>
  );
}
