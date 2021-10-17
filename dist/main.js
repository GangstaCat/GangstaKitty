"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("detritus-client/lib/constants");
const config_1 = require("./config");
const globals_1 = require("./globals");
const msgs_1 = require("./msgs");
globals_1.commands.addMultipleIn("/commands", { subdirectories: true });
globals_1.client.on("ready", () => {
    if (!globals_1.client.user) {
        return console.log(msgs_1.messages.on.unavailableUser);
    }
    console.log(msgs_1.replace(msgs_1.messages.on.ready, [
        ["{USER}", `${globals_1.client.user.tag} ${globals_1.client.user.id}`],
        ["{GUILD_COUNT}", globals_1.client.guilds.size],
        [
            "{UNAVAILABLE_GUILDS}",
            globals_1.client.guilds.filter((v) => v.unavailable).length,
        ],
    ]));
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
async () => {
    globals_1.commands.run();
};
