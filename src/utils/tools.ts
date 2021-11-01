import fetch from "node-fetch";
import { config } from "../config";
import { client } from "../globals";

export function randomFromArray<T>(array: Array<T>): T {
  return array[~~(Math.random() * array.length)]!;
}
export async function store(name: string, url: string | URL | Buffer) {
  const channel = client.channels.get(config.storage_channel)!;
  if (typeof url === "string") url = new URL(url);
  if (url instanceof URL) url = await (await fetch(url.href)).buffer();
  if (!channel.isText)
    throw new Error("Cannot store images in non-text channels.");

  const stored = await channel.createMessage({
    file: {
      filename: name,
      value: url,
    },
  });

  return stored.attachments.first()!;
}
