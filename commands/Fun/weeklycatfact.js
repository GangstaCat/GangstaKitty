module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "The Hungarian word for \"quotation marks\" is \"macskaköröm,\" which literally translates to \"cat claws.\"" })
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