import { Branches } from "../components/Branches";
import { Cards } from "../components/Cards";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import ScrollZoomContainer from "../components/ScrollZoomContainer";
import { WhoWeAre } from "../components/WhoWeAre";

export default function Home() {
  return (
    <ScrollZoomContainer>
      <main className="items-center flex flex-col bg-transparent font-base">
        <WhoWeAre />

        <Branches />

        <Cards
          headline={"what we offer"}
          subline={"we are experts in our craft"}
        />

        <ContactForm
          headline={"get in touch today"}
          subline={"Lets grow your business together"}
        />
      </main>
    </ScrollZoomContainer>
  );
}
