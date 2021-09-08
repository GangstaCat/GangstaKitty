const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("BAN_MEMBERS")) {
    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (member) {
      let banReason = args.slice(1).join(" ");
      if (!args[1]) {
        banReason = "Unspecified";
      }
      let banEmbed = new MessageEmbed()
        .setColor("#007DFF")
        .setTitle("You Were Banned")
        .addField("Where?", `You were banned from ${message.guild.name}.`)
        .addField("Why?", banReason)
        .addField("Who?", `You were banned by ${message.author}`);
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.send({ embeds: [banEmbed] });
      memberTarget.ban({ reason: banReason });
      message.channel.send({ content: `${message.author} banned <@${memberTarget.id}> (\`${memberTarget.id}\`) for: ${banReason}` });
    } else {
      message.channel.send({ content: "Please mention a member to ban them" });
    }
  } else {
    message.channel.send({ content: "You do not have permission to use this command" })
  }
}

module.exports.data = {
  name: "ban",
  description: "Bans a user from the server",
  aliases: ["b"],
  category: "Moderation",
  requires: "Permission: Ban Members",
  usage: ["ban <mention | user id> [reason]"],
  examples: ["ban @GangstaCat", "ban 610915422723637268 abusing mod powers"]
}