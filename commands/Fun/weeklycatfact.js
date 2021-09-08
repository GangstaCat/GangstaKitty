module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "The term \"puss\" is the root of the principal word for \"cat\" in the Romanian term pisica and the root of secondary words in Lithuanian (*puz*) and Low German *puus*. Some scholars suggest that \"puss\" could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy." })
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