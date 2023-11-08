"use client";

import { useCallback, useRef } from "react";
import { BUTTON_VARIANTS } from "../utils/enums";
import submitContactForm from "../utils/submitContactForm";
import Button from "./base/Button";
import { HEADING_VARIANTS, Heading } from "./base/Heading";
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
      <form
        ref={formRef}
        className="font-base"
        onSubmit={async (e) => {
          e.preventDefault();
          await submitForm(new FormData(e.target as HTMLFormElement));

          formRef.current?.reset();
        }}
      >
        <div className="flex flex-col gap-2 mt-40">
          <Heading>{headline}</Heading>
          <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <Input
            required
            label={"Name"}
            name="name"
            id={"contact_name"}
            placeholder="Max Mustermann"
            type="text"
          />
          <Input
            required
            label={"Email"}
            name="email"
            id={"contact_email"}
            placeholder="info@maxmustermann.com"
            type="email"
          />
          <Textarea
            required
            label={"Your message"}
            name="message"
            id={"contact_message"}
            placeholder="Write your message here"
          />

          <div className="self-center mt-10 mb-10">
            <Button
              variant={BUTTON_VARIANTS.PRIMARY}
              type="submit"
            >
              submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
