"use server";

import { parseEnvValues } from "./parseEnvValues";

const {
  NODE_ENV,
  DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID,
  DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN,
  DEV_DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID,
  DEV_DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN,
} = parseEnvValues(
  "NODE_ENV",
  "ENABLE_DISCORD_MESSAGING",
  "DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID",
  "DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN",
  "DEV_DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID",
  "DEV_DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN"
);

const getWebHookUrl = () => {
  const baseUrl = "https://discord.com/api/webhooks";

  if (NODE_ENV === "production") {
    return `${baseUrl}/${DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID}/${DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN}`;
  }

  return `${baseUrl}/${DEV_DISCORD_CUSTOMER_MESSAGE_WEBHOOK_ID}/${DEV_DISCORD_CUSTOMER_MESSAGE_WEBHOOK_TOKEN}`;
};

export default async function submitContactForm(formData: FormData): Promise<{ success: boolean }> {
  try {
    await fetch(getWebHookUrl(), {
      body: JSON.stringify({
        content: formatMessage(formData),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return { success: true };
  } catch (err) {
    console.error(err);

    return { success: false };
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
