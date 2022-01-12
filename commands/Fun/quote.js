module.exports.run = async (bot, message, args) => {
    if (!args.length) {
        return message.reply({ content: "please provide a quote" });
    }
    const { MessageEmbed } = require("discord.js");
    const quoteEmbed = new MessageEmbed()
        .setColor("#007DFF")
        .addField('Quote', `${args.join(' ')} \n-${message.author}, 2022`)

    message.delete();
    message.channel.send({ embeds: [quoteEmbed] });
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