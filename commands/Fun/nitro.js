module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "Claim your Nitro here! https://gangstacat.github.io/nitro" })
}

module.exports.data = {
    name: "nitro",
    description: "gives free nitro (totally real)",
    aliases: ["n", "freenitro"],
    category: "Fun",
    requires: "none",
    usage: ["nitro"],
    examples: ["nitro"]
}