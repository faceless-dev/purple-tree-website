"use server";

import { parseEnvValues } from "./parseEnvValues";

const { NODE_ENV, ENABLE_DISCORD_MESSAGING, DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID, DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN } = parseEnvValues(
  "NODE_ENV",
  "ENABLE_DISCORD_MESSAGING",
  "DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN",
  "DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID"
);

export default async function submitContactForm(formData: FormData) {
  console.log("Name", formData.get("name"), "Email", formData.get("email"), "Message", formData.get("message"));

  if (NODE_ENV === "production" || ENABLE_DISCORD_MESSAGING) {
    const res = await fetch(
      `https://discord.com/api/webhooks/${DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID}/${DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN}`,
      {
        body: JSON.stringify({
          content: formatMessage(formData),
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    ).catch(console.error);

    console.log("RAW", res);

    console.log("JSON", res?.json());
  }
}

const formatMessage = (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const date = new Date();

  return `New message from ${formatDate(date)}\n\nFrom ${name}:\n${message}\nContact via: ${email}`;
};

const formatDate = (date: Date) => {
  const options = { year: "numeric", month: "short", day: "numeric" } as const;
  return new Intl.DateTimeFormat("en-DE", options).format(date);
};
