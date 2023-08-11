import React from "react";
import submitContactForm from "../utils/submitContactForm";
import { Input } from "./base/Input";
import { Textarea } from "./base/TextArea";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

export interface ContactFormProps {
  headline: string;
  subline: string;
}

export const ContactForm = ({ headline, subline }: ContactFormProps) => {
  return (
    <form action={submitContactForm} className="font-base">
      <div className="flex flex-col gap-2 mt-80">
        <Heading>{headline}</Heading>
        <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <Input
          label={"Name"}
          id={"contact_name"}
          placeholder="Max Mustermann"
          type="text"
        />
        <Input
          label={"Email"}
          id={"contact_email"}
          placeholder="info@maxmustermann.com"
          type="email"
        />
        <Textarea
          label={"Your message"}
          id={"contact_message"}
          placeholder="Write your message here"
        />
      </div>
    </form>
  );
};
