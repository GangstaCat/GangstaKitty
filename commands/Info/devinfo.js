module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const creatorEmbed = new MessageEmbed()
    .setColor('#007DFF')
    .setTitle('Developer info')
    .setAuthor('GangstaKitty')
    .setDescription('Info and socials about GangstaCat, the developer of this bot')
    .setThumbnail("https://cdn.discordapp.com/attachments/856832353409302538/857961784443142174/petgangsta.gif")
    .addField('General info', "I'm your just not so average 13 year old programmer who just so happens to have made this bot")
    .addField('Youtube', "Subscribe to GangstaCat here: https://www.youtube.com/channel/UCi-mEQw6JdB81cRQ9NKuY2w")
    .addField('Twitch', "Follow GangstaCat on Twitch: https://twitch.tv/gangstacatttv")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send({ embeds: [creatorEmbed] });
}

module.exports.data = {
  name: "devinfo",
  description: "Info about GangstaCat, the developer of this bot",
  aliases: "di",
  category: "Info",
  requires: "none",
  usage: "devinfo",
  examples: "devinfo"
}