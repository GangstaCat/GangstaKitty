module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const wothxEmbed = new MessageEmbed()
    .setColor("#007DFF")
    .setTitle('Word Of Thanks')
    .setAuthor('GangstaKitty')
    .setDescription('A thank you to all the people who helped me make this bot')
    .addField('Thanks to:', "**MS06**, for helping me with some code and testing. I can't imagine this bot without your help")
    .addField("Also to:", "**Xinfity**, for improving the commands and helping me make this bot more awesome :D")
    .addField('Also thanks to', '**Meji**, for making the avatar of this bot, without you this bot would have stayed with a default red avatar')
    .addField('And lastly:', "Thanks to the people in **Discord.js - Imagine a bot**, for helping me solve extremely plain errors")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send({ embeds: [wothxEmbed] });
}

module.exports.data = {
  name: "wordofthanks",
  description: "all the people who helped me on this bot",
  aliases: ["wothx"],
  category: "Info",
  requires: "none",
  usage: ["wothx"],
  examples: ["wothx"]
}