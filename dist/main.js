"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.user = void 0;
const detritus_client_1 = require("detritus-client");
const config_1 = require("./config");
require('dotenv').config();
exports.user = new detritus_client_1.ShardClient(process.env.DISCORD_BOT_TOKEN, { isBot: true });
exports.commands = new detritus_client_1.CommandClient(exports.user, { prefix: config_1.config.prefix });
