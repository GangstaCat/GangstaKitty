module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "Invite me to your server with all permissions \nhttps://discord.com/oauth2/authorize?client_id=847743012851286027&scope=applications.commands&permissions=8589934591" });
}

module.exports.data = {
    name: "invite",
    description: "Invite the bot to your server",
    category: "Info",
    aliases: ["i", "inv"],
    requires: "none",
    usage: "invite",
    examples: "invite"
}