import { CommandOptions } from "detritus-client/lib/command";
export declare type CommandOptionsMeta = CommandOptions & {
    metadata: {
        description: string;
        examples: Array<string>;
    };
};
export declare type ReplacerKey = `{${string}}`;
export declare type Replacer = [ReplacerKey, any];
export declare type Replacers = Array<Replacer>;
export declare type And<T, R> = T & R;
export declare type Or<T, R> = T | R;
