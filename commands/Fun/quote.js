module.exports.run = async (bot, message, args) => {
    if (!args.length) {
        return message.reply("please provide a quote");
    }
    const { MessageEmbed } = require("discord.js");
    const quoteEmbed = new MessageEmbed()
        .setColor("#007DFF")
        .addField('Quote', `${args.join(' ')} \n-${message.author}, 2021`)

    message.delete();
    message.channel.send(quoteEmbed);
}

module.exports.data = {
    name: "quote",
    description: "Quote something in a shiny embed",
    aliases: ["q"],
    category: "Fun",
    requires: "none",
    usage: ["quote <your quote here>"],
    examples: ["quote GangstaCat is cool"]
}