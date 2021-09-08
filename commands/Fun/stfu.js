module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "https://cdn.discordapp.com/attachments/553322925395017732/739837616014491698/video0.mp4" })
}

module.exports.data = {
    name: "stfu",
    description: "shut the fuck up",
    category: "Fun",
    aliases: ["shutthefuckup"],
    requires: "none",
    usage: "stfu",
    examples: "stfu"
}