"use client";

import { useCallback, useRef } from "react";
import { ButtonVariants } from "../utils/enums";
import submitContactForm from "../utils/submitContactForm";
import Button from "./base/Button";
import { HeadingVariant, Heading } from "./base/Heading";
import { Input } from "./base/Input";
import { Textarea } from "./base/TextArea";
import toast, { Toaster } from "react-hot-toast";
export interface ContactFormProps {
  headline: string;
  subline: string;
}

export const ContactForm = ({ headline, subline }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const notifySubmitSuccessful = () =>
    toast("Thank you for contacting us, our team will reach out to you shortly!", {
      icon: "🚀",
    });
  const notifySubmitError = () => toast("Something went wrong, please try again!", { icon: "❌" });

  const submitForm = useCallback(async (formData: FormData) => {
    const { success } = await submitContactForm(formData);

    success ? notifySubmitSuccessful() : notifySubmitError();
  }, []);

  return (
    <>
      <Toaster position="top-right" />

      <div className="flex flex-col gap-2 mt-40">
        <Heading>{headline}</Heading>
        <Heading variant={"H2"}>{subline}</Heading>
      </div>

      <form
        ref={formRef}
        className="font-base w-full grid place-items-center"
        onSubmit={async (e) => {
          e.preventDefault();
          await submitForm(new FormData(e.target as HTMLFormElement));

          formRef.current?.reset();
        }}
      >
        <div className="flex flex-col gap-7 max-w-xs md:max-w-xl mt-12 w-full">
          <Input
            required
            label={"How we should address you"}
            name="name"
            id={"contact_name"}
            placeholder="John Doe"
            type="text"
          />

          <Input
            required
            label={"Your digital inbox"}
            name="email"
            id={"contact_email"}
            placeholder="inbox@johndoe.com"
            type="email"
          />

          <Textarea
            required
            label={"What would you like to tell us?"}
            name="message"
            id={"contact_message"}
            placeholder="Hi, I would like to request a personal quote.."
          />

          <div className="self-center mt-2 md:mt-10 mb-5 md:mb-10">
            <Button type="submit">send</Button>
          </div>
        </div>
      </form>
    </>
  );
};
