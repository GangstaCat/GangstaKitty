module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js")
  const embed = new MessageEmbed()
    .setTitle("Latency")
    .setColor("#007DFF")
    .addField("General Latency", `\`${Date.now() - message.createdTimestamp}ms\``)
    .addField("API Latency", `\`${Math.round(bot.ws.ping)}ms\``)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  message.channel.send({ embeds: [embed] })
}

module.exports.data = {
  name: "ping",
  description: "not your regular ping pong command; displays the current API ping",
  aliases: ["p"],
  category: "Info",
  requires: "hacker knowledge",
  usage: "ping",
  examples: "ping"
}