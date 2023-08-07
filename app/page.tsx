import Image from "next/image";
import { Header } from "../components/Header";
import { ContactForm } from "../components/ContactForm";
import { Heading } from "../components/base/Heading";
import { Card } from "../components/base/Card"; //Testing

export default function Home() {
  return (
    <div>
      <header className="max-h-5 bg-black w-full font-base">
        <Header />
      </header>
      <main className="min-w-full min-h-screen items-center flex flex-col bg-black p-12 font-base w-full">
        <div className="p-2 flex items-center flex-col gap-8">
          <Image
            src="/assets/logo.svg"
            alt="Purple Tree"
            width={250}
            height={250}
          ></Image>
          <Heading>purple tree</Heading>
        </div>

        <div className="h-[500px]"></div>

        <Card></Card>

        <div className="h-[500px]"></div>

        <ContactForm headline={"CONTACT US"} subline={"Let us help you grow"} />
      </main>
    </div>
  );
}
