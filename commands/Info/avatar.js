"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.run = void 0;
const discord_js_1 = require("discord.js");
async function findUser(client, context, query) {
    query = query ?? context.author.id;
    query = query.toLowerCase() === 'discord' ? '643945264868098049' : query;
    return (client.users.cache.find((user) => {
        return (user.username.toLowerCase().includes(query) ||
            user.tag.toLowerCase().includes(query) ||
            query.replace(/\D/g, "") == user.id);
    }) ??
        (await client.users.fetch(query.replace(/\D/g, ""), {
            cache: true,
            force: true,
        })));
}
async function run(_bot, message, args) {
    const user = await findUser(_bot, message, args[0] ?? "");
    if (!user) {
        return message.reply("❌ Can't find that user.");
    }
    const embed = new discord_js_1.MessageEmbed({
        title: `Avatar of ${user.tag}`,
        image: {
            url: user.displayAvatarURL({ dynamic: true, size: 4096 })
        },
        color: 3092790,
        footer: {
            text: "Avatar",
            iconURL: _bot.user?.displayAvatarURL({ size: 4096 })
        }
    });
    return message.channel.send({ embeds: [embed] });
}
exports.run = run;
exports.data = {
    name: "avatar",
    description: "Displays another user's or your avatar",
    aliases: ["av", "pfp"],
    category: "Info",
    requires: "none",
    usage: ["avatar [user]"],
    examples: ["avatar", "avatar @GangstaCat", "avatar discord"],
};
