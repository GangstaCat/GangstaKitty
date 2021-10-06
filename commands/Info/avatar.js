const { MessageEmbed, Message } = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if (args[0]) {
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply({ content: 'Please use a proper mention if you want to see someone elses avatar.' });
    }
    const embed = new MessageEmbed()
      .setTitle(`${user.username}'s avatar:`)
      .setImage(user.avatar)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))

    return message.channel.send({ embeds: [embed] });
  }
  const embed2 = new MessageEmbed()
    .setTitle(`${message.author.username}'s avatar:`)
    .setImage(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  return message.channel.send({ embeds: [embed2] });
}

module.exports.data = {
  name: "avatar",
  description: "Displays another user's or your avatar",
  aliases: ["av", "pfp"],
  category: "Info",
  requires: "none",
  usage: ["avatar [mention]"],
  examples: ["avatar", "avatar @GangstaCat"]
}