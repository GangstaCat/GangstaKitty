"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandNames = exports.BrandIcons = exports.Brands = exports.Color = exports.interactions = exports.commands = exports.client = exports.PXL_API_KEY = void 0;
const detritus_client_1 = require("detritus-client");
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
dotenv_1.default.config();
exports.PXL_API_KEY = "5a913c66a0edaf07239c2c5739b12603";
exports.client = new detritus_client_1.ShardClient(process.env.DISCORD_BOT_TOKEN, {
    isBot: true,
});
exports.commands = new detritus_client_1.CommandClient(exports.client, {
    prefix: config_1.config.prefix,
    useClusterClient: false,
});
exports.interactions = new detritus_client_1.InteractionCommandClient(exports.client, {
    useClusterClient: false,
});
var Color;
(function (Color) {
    Color[Color["EMBED"] = 3092790] = "EMBED";
    Color[Color["PYLON"] = 4089312] = "PYLON";
    Color[Color["VYBOSE"] = 10166000] = "VYBOSE";
    Color[Color["PRESENCE_ONLINE"] = 4437377] = "PRESENCE_ONLINE";
    Color[Color["PRESENCE_BUSY"] = 15746887] = "PRESENCE_BUSY";
    Color[Color["PRESENCE_IDLE"] = 16426522] = "PRESENCE_IDLE";
    Color[Color["PRESENCE_OFFLINE"] = 7634829] = "PRESENCE_OFFLINE";
    Color[Color["PRESENCE_STREAM"] = 5846677] = "PRESENCE_STREAM";
    Color[Color["PRESENCE_SPOTIFY"] = 1947988] = "PRESENCE_SPOTIFY";
    Color[Color["HOUSE_BRAVERY"] = 10192110] = "HOUSE_BRAVERY";
    Color[Color["HOUSE_BALANCE"] = 4513215] = "HOUSE_BALANCE";
    Color[Color["HOUSE_BRILLIANCE"] = 16022376] = "HOUSE_BRILLIANCE";
    Color[Color["HIGH"] = 16086833] = "HIGH";
    Color[Color["SKIN"] = 16370089] = "SKIN";
    Color[Color["INFO"] = 4886754] = "INFO";
    Color[Color["LINK"] = 45300] = "LINK";
    Color[Color["NOTICE"] = 15885602] = "NOTICE";
    Color[Color["BLURPLE_OLD"] = 16496712] = "BLURPLE_OLD";
    Color[Color["BLURPLE"] = 6321129] = "BLURPLE";
    Color[Color["GOLD"] = 16496712] = "GOLD";
    Color[Color["WHITE"] = 16777215] = "WHITE";
    Color[Color["GREY"] = 10070709] = "GREY";
    Color[Color["CHAT"] = 3553599] = "CHAT";
    Color[Color["SERVERS"] = 2105893] = "SERVERS";
})(Color = exports.Color || (exports.Color = {}));
var Brands;
(function (Brands) {
    Brands["SOME_RANDOM_API"] = "sra";
    Brands["PXL_API"] = "pxlapi";
    Brands["EIGHT_BALL_DELEGATOR"] = "8balldelegator";
})(Brands = exports.Brands || (exports.Brands = {}));
exports.BrandIcons = {
    [Brands.SOME_RANDOM_API]: "https://i.some-random-api.ml/logo.png",
    [Brands.PXL_API]: "https://pxlapi.dev/images/logo-small-transparent.png",
    [Brands.EIGHT_BALL_DELEGATOR]: "https://8ball.delegator.com/images/8ball.png",
};
exports.BrandNames = {
    [Brands.SOME_RANDOM_API]: "Some Random Api",
    [Brands.PXL_API]: "PXL API",
    [Brands.EIGHT_BALL_DELEGATOR]: "Eight Ball Delegator",
};
