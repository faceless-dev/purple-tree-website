import Image from "next/image";
import { Branches } from "../components/Branches";
import { Cards } from "../components/Cards";
import { ContactForm } from "../components/ContactForm";
import { Desc } from "../components/Desc";
import { Header } from "../components/Header";
import Button from "../components/base/Button";
import { Heading } from "../components/base/Heading";
import { BUTTON_VARIANTS } from "../utils/enums";

export default function Home() {
  return (
    <div className="bg-black">
      <header className="max-h-5 bg-black w-full font-base">
        <Header />
      </header>

      <main className="items-center flex flex-col bg-black  font-base mt-24">
        <div className="p-2 max-w-[150px] md:max-w-[250px] flex items-center flex-col gap-8 ">
          <Image
            src="/assets/logo.svg"
            alt="Purple Tree"
            width={250}
            height={250}
          ></Image>
          <Heading>purple tree</Heading>
        </div>
        <div className="self-center md:hidden mt-20">
          <Button
            scrollDownOnClick
            variant={BUTTON_VARIANTS.MOBILE}
          >
            contact us
          </Button>
        </div>

        <Desc />

        <Branches
          headline={"our services"}
          subline={"Here's how we can help you grow."}
        ></Branches>

        <Cards
          headline={"our skills"}
          subline={"What we can do."}
        />

        <ContactForm
          headline={"contact us"}
          subline={"Let us help you grow"}
        />
      </main>
    </div>
  );
}
