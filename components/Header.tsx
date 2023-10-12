import Image from "next/image";
import { BUTTON_VARIANTS } from "../utils/enums";
import Button from "./base/Button";

export const Header = () => {
  return (
    <header className="flex bg-black w-full font-base justify-between py-2 px-5 md:px-20 border-b-2 border-purple">
      <div className="hidden md:block">
        <Image
          src="/assets/logo_header.svg"
          width={142}
          height={65}
          alt="Purple Tree"
        ></Image>
      </div>
      <div className="md:hidden">
        <Image
          src="/assets/logo_header_mobile.svg"
          width={48}
          height={65}
          alt="Purple Tree"
        ></Image>
      </div>

      <div className="self-center hidden md:block">
        <Button
          scrollDownOnClick
          variant={BUTTON_VARIANTS.SECONDARY}
        >
          contact us
        </Button>
      </div>
    </header>
  );
};
