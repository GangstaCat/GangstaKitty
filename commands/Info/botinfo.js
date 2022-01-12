module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const botEmbed = new MessageEmbed()
    .setColor('#007DFF')
    .setTitle('Bot info')
    .setAuthor('GangstaKitty')
    .setDescription("General info about this bot, it's purpose and more")
    .setThumbnail("https://cdn.discordapp.com/avatars/847743012851286027/386304f1bc3ae79ed4ac148137b028cd.webp?size=4096")
    .addField('Purpose', "Basically i wanted to make a bot because some bots like mee6 have premium memberships (cringe). I just wanted every feature i could want at my disposal without paying 50 buck a year.")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send({ embeds: [botEmbed] });
}

module.exports.data = {
  name: "botinfo",
  description: "info about the bot",
  aliases: ["bi"],
  category: "Info",
  requires: "none",
  usage: ["botinfo"],
  examples: ["botinfo"]
}