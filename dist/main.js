"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("detritus-client/lib/constants");
const config_1 = require("./config");
const globals_1 = require("./globals");
globals_1.commands.addMultipleIn("/commands", { subdirectories: true });
globals_1.client.on("ready", () => {
    console.log(`${globals_1.client.user} has come online`);
    let now = new Date();
    let birthday = new Date(now.getFullYear(), 9, 24);
    if (now.toLocaleDateString("en-US") === birthday.toLocaleDateString("en-US")) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }
    globals_1.client.gateway.setPresence({
        activities: [
            {
                name: `for ${config_1.config.prefix}help | ${Math.ceil((+birthday - +now) / 86400000)} days until my birthday!`,
                type: constants_1.ActivityTypes.LISTENING,
            },
        ],
    });
});
