module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("KICK_MEMBERS")) {
    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (member) {
      const { MessageEmbed } = require('discord.js');
      let kickReason = args.slice(1).join(" ");
      if (!args[1]) {
        kickReason = "Unspecified";
      }
      let kickEmbed = new MessageEmbed()
        .setColor("#007DFF")
        .setTitle("You Were Kicked")
        .addField("Where?", `You were kicked from ${message.guild.name}.`)
        .addField("Why?", kickReason)
        .addField("Who?", `You were kicked by ${message.author}`);
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.send(kickEmbed);
      memberTarget.kick({ reason: kickReason });
      message.channel.send(message.channel.send(`${message.author} kicked <@${memberTarget.id}> (\`${memberTarget.id}\`) for: ${kickReason}`));
    } else {
      message.channel.send("Please mention a member to kick them");
    }
  } else {
    message.channel.send("You do not have permission to use this command")
  }
}

module.exports.data = {
  name: "kick",
  description: "Kicks a user from the server",
  aliases: ["k"],
  category: "Moderation",
  requires: "permission: Kick Members",
  usage: ["kick <mention | user id> [reason]"],
  examples: ["kick @GangstaCat", "kick 610915422723637268 Posting NSFW in general chat"]
}