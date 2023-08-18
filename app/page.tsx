import Image from "next/image";
import { Header } from "../components/Header";
import { ContactForm } from "../components/ContactForm";
import { Heading } from "../components/base/Heading";
import { Cards } from "../components/Cards";
import { Desc } from "../components/Desc";
import ButtonCTA from "../components/base/Button";
import { BUTTON_VARIANTS } from "../utils/enums";
import { Branches } from "../components/Branches";

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
          <ButtonCTA variant={BUTTON_VARIANTS.MOBILE}>contact us</ButtonCTA>
        </div>

        <Desc />

        <Branches
          headline={"our services"}
          subline={"Here's how we can help you grow."}
        ></Branches>

        <Cards headline={"our skills"} subline={"What we can do."} />

        <ContactForm headline={"contact us"} subline={"Let us help you grow"} />
        <div className="self-center mt-10 mb-10">
          <ButtonCTA variant={BUTTON_VARIANTS.PRIMARY}>submit</ButtonCTA>
        </div>
      </main>
    </div>
  );
}
