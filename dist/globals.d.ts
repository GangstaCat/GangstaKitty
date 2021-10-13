import { CommandClient, InteractionCommandClient, ShardClient } from "detritus-client";
export declare const PXL_API_KEY = "5a913c66a0edaf07239c2c5739b12603";
export declare const client: ShardClient;
export declare const commands: CommandClient;
export declare const interactions: InteractionCommandClient;
export declare enum Color {
    EMBED = 3092790,
    PYLON = 4089312,
    VYBOSE = 10166000,
    PRESENCE_ONLINE = 4437377,
    PRESENCE_BUSY = 15746887,
    PRESENCE_IDLE = 16426522,
    PRESENCE_OFFLINE = 7634829,
    PRESENCE_STREAM = 5846677,
    PRESENCE_SPOTIFY = 1947988,
    HOUSE_BRAVERY = 10192110,
    HOUSE_BALANCE = 4513215,
    HOUSE_BRILLIANCE = 16022376,
    HIGH = 16086833,
    SKIN = 16370089,
    INFO = 4886754,
    LINK = 45300,
    NOTICE = 15885602,
    BLURPLE_OLD = 16496712,
    BLURPLE = 6321129,
    GOLD = 16496712,
    WHITE = 16777215,
    GREY = 10070709,
    CHAT = 3553599,
    SERVERS = 2105893
}
export declare enum Brands {
    SOME_RANDOM_API = "sra",
    PXL_API = "pxlapi"
}
export declare const BrandIcons: Record<Brands, string>;
export declare const BrandNames: Record<Brands, string>;
