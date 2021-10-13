import { CommandOptions } from "detritus-client/lib/command";

export type CommandOptionsMeta = CommandOptions & {
  metadata: {
    description: string;
    examples: Array<string>;
  };
};
export type ReplacerKey = `{${string}}`;
export type Replacer = [ReplacerKey, any];
export type Replacers = Array<Replacer>;

export type And<T, R> = T & R;
export type Or<T, R> = T | R;
