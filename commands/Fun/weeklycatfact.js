module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "A cat lover is called an Ailurophilia (Greek: cat+lover)." })
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