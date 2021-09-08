const { MessageEmbed } = require("discord.js")
module.exports.run = async (bot, message, args) => {
  const memberCount = message.guild.memberCount;
  const memberEmbed = new MessageEmbed()
    .setColor("#007DFF")
    .setTitle(`${message.guild.name} has ${memberCount} members`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send({ embeds: [memberEmbed] })
}

module.exports.data = {
  name: "membercount",
  description: "Displays the amount of members in the server",
  aliases: ["mc", "members"],
  category: "Info",
  requires: "none",
  usage: "membercount",
  examples: "membercount"
}