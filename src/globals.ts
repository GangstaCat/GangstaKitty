import {
  CommandClient,
  InteractionCommandClient,
  ShardClient,
} from "detritus-client";
import { config } from "./config";
require("dotenv").config();

export const PXL_API_KEY = "5a913c66a0edaf07239c2c5739b12603"; // put this in your process env when this commit is out !!!!!!!!!!!!!!!!!!!

export const client = new ShardClient(process.env.DISCORD_BOT_TOKEN!, {
  isBot: true,
});
export const commands = new CommandClient(client, {
  prefix: config.prefix,
  useClusterClient: false,
});
export const interactions = new InteractionCommandClient(client, {
  useClusterClient: false,
});

export enum Color {
  EMBED = 3092790, // 0x2f3136
  PYLON = 4089312, // 0x3e65e0
  VYBOSE = 10166000, // 0x9b1ef0

  PRESENCE_ONLINE = 4437377, // 0x43b581
  PRESENCE_BUSY = 15746887, // 0xf04747
  PRESENCE_IDLE = 16426522, // faa61a
  PRESENCE_OFFLINE = 7634829, // 0x747f8d
  PRESENCE_STREAM = 5846677, // 0x593695
  PRESENCE_SPOTIFY = 1947988, // 0x1db954

  HOUSE_BRAVERY = 10192110, // 0x9b84ee
  HOUSE_BALANCE = 4513215, // 0x44ddbf
  HOUSE_BRILLIANCE = 16022376, // 0xf47b68

  HIGH = 16086833, // 0xf57731
  SKIN = 16370089, // 0xf9c9a9
  INFO = 4886754, // 0x4a90e2
  LINK = 45300, // 0x00b0f4
  NOTICE = 15885602, // 0xf26522

  BLURPLE_OLD = 16496712, // 0x7289da
  BLURPLE = 6321129, // 0x6073e9
  GOLD = 16496712, // 0xfbb848
  WHITE = 16777215, // 0xffffff
  GREY = 10070709, // 0x99aab5
  CHAT = 3553599, // 0x36393f
  SERVERS = 2105893, // 0x202225
}

export enum Brands {
  SOME_RANDOM_API = "sra",
  PXL_API = "pxlapi",
}
export const BrandIcons: Record<Brands, string> = {
  [Brands.SOME_RANDOM_API]: "https://i.some-random-api.ml/logo.png",
  [Brands.PXL_API]: "https://pxlapi.dev/images/logo-small-transparent.png",
};
export const BrandNames: Record<Brands, string> = {
  [Brands.SOME_RANDOM_API]: "Some Random Api",
  [Brands.PXL_API]: "PXL API",
};
