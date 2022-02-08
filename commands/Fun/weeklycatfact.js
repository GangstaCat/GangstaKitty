module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat's scent." })
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