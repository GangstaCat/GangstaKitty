module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "In Japan, cats are thought to have the power to turn into super spirits when they die. This may be because according to the Buddhist religion, the body of the cat is the temporary resting place of very spiritual people." })
}
module.exports.data = {
    name: "weeklycatfact",
    description: "Weekly cat fact; Weekly changing cat fact!",
    aliases: "wcf",
    category: "Fun",
    requires: "none",
    usage: "weeklycatfact",
    examples: "weeklycatfact"
}