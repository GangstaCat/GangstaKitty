module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require('discord.js');
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!member) {
    const memberRoles = message.member.roles.cache
      .filter((roles) => roles.id !== message.guild.id)
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString());
    const authorEmbed = new MessageEmbed()
      .setTitle(message.author.tag)
      .setColor(message.member.displayHexColor)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**User ID:** ${message.author.id} \n<@${message.author.id}> \n**Color:** ${message.member.displayHexColor} \n**Joined:** ${message.member.joinedAt} \n**Registered:** ${message.author.createdAt} \n**Roles - ${memberRoles.length}** \n ${memberRoles}`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embeds: [authorEmbed] });
  }
  else {
    const memberRoles = member.roles.cache
      .filter((roles) => roles.id !== message.guild.id)
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString());
    const memberEmbed = new MessageEmbed()
      .setTitle(member.user.tag)
      .setColor(member.displayHexColor)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`User ID: ${member.id} \n<@${member.user.id}> \nColor: ${member.displayHexColor} \n**Joined:** ${member.joinedAt} \n**Registered:** ${member.user.createdAt} \n**Roles - ${memberRoles.length}** \n ${memberRoles}`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embeds: [memberEmbed] });
  }
}

module.exports.data = {
  name: "userinfo",
  description: "displays a user's info, roles and more",
  category: "Info",
  aliases: "ui",
  requires: "none",
  usage: "userinfo [mention]",
  examples: "userinfo @GangstaCat"
}