module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "A cat called Dusty has the known record for the most kittens. She had more than 420 (nice) kittens in her lifetime." })
}
module.exports.data = {
    name: "weeklycatfact",
    description: "Weekly cat fact; Weekly changing cat fact!",
    aliases: ["wcf"],
    category: "Fun",
    requires: "none",
    usage: ["weeklycatfact"],
    examples: ["weeklycatfact"]
}