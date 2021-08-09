module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const botEmbed = new MessageEmbed()
    .setColor('#007DFF')
    .setTitle('Bot info')
    .setAuthor('GangstaKitty')
    .setDescription("General info about this bot, it's purpose and more")
    .setThumbnail("https://cdn.discordapp.com/attachments/856832353409302538/857957150650531860/loafcate.png")
    .addField('Purpose', "I am a bot made by GangstaCat, and i am personalized to the GangsterCats Discord Server since other bots are broken. For more info about GangstaCat, Please use `+devinfo`")
    .addField('Twitter', "Did you know i have a Twitter account? Well, now you do! Go follow me. https://twitter.com/GangstaKittyBot")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send(botEmbed);
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