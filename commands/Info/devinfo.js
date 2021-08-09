module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require("discord.js");
  const creatorEmbed = new MessageEmbed()
    .setColor('#007DFF')
    .setTitle('Developer info')
    .setAuthor('GangstaKitty')
    .setDescription('Info and socials about GangstaCat, the developer of this bot')
    .setThumbnail("https://cdn.discordapp.com/attachments/856832353409302538/857961784443142174/petgangsta.gif")
    .addField('General info', "Hi, i'm GangstaCat. I enjoy doing things like making simple digital art, programming and more. I have my own server with about 60 members and i also moderate a bunch of servers")
    .addField('Youtube', "Subscribe to GangstaCat here: https://www.youtube.com/channel/UCi-mEQw6JdB81cRQ9NKuY2w")
    .addField('Twitch', "Follow GangstaCat on Twitch: https://twitch.tv/gangstacatttv")
    .addField('Twitter', "Follow GangstaCat on Twitter: https://twitter.com/gangstacatgd")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send(creatorEmbed);
}

module.exports.data = {
  name: "devinfo",
  description: "Info about GangstaCat, the developer of this bot",
  aliases: ["di"],
  category: "Info",
  requires: "none",
  usage: ["devinfo"],
  examples: ["devinfo"]
}