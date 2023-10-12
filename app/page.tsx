import { Branches } from "../components/Branches";
import { Cards } from "../components/Cards";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import ScrollZoomContainer from "../components/ScrollZoomContainer";
import { WhoWeAre } from "../components/WhoWeAre";

export default function Home() {
  return (
    <ScrollZoomContainer>
      <main className="items-center flex flex-col bg-black font-base">
        <Header />
        <WhoWeAre />
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
    </ScrollZoomContainer>
  );
}
