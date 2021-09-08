const { MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MUTE_MEMBERS")) {
    const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (target) {
      let mainRole = message.guild.roles.cache.find(role => role.name === 'Normal Cats');
      let mutedRole = message.guild.roles.cache.find(role => role.name === 'STFU (muted)');

      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        let muteReason = args.slice(1).join(" ");
        const muteEmbed = new MessageEmbed()
          .setTitle("You were muted")
          .addField("Where?", message.guild.name)
          .addField("Why?", muteReason)
          .addField("For how long?", "Unspecified")
          .addField("Who?", message.author);
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(mutedRole.id);
        message.channel.send({ content: `${message.author} muted <@${memberTarget.id}> (\`${memberTarget.id}\`) for: ${muteReason}` })
        memberTarget.send({ embeds: [muteEmbed] });
        return
      }

      let muteReason = args.slice(2).join(" ");
      const MuteEmbed = new MessageEmbed()
        .setTitle("You were muted")
        .addField("Where?", message.guild.name)
        .addField("Why?", muteReason)
        .addField("For how long?", ms(ms(args[1])))
        .addField("Who?", message.author)
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(mutedRole.id);
      message.channel.send({ content: `${message.author} mute <@${memberTarget.id}> for ${ms(ms(args[1]))}: ${muteReason}` });
      memberTarget.send({ content: `You have been muted in ${message.guild.name} for ${ms(ms(args[1]))}. Please wait until you will be unmuted.` });

      setTimeout(function () {
        memberTarget.roles.remove(mutedRole.id);
        memberTarget.roles.add(mainRole.id);
      }, ms(args[1]));
    } else {
      message.reply({ content: "That user does not exist" });
    }
  } else {
    message.reply({ content: "You do not have the correct permissions to use this command" });
  }
}

module.exports.data = {
  name: "mute",
  description: "Disallows a user to talk in text and voice channels",
  aliases: ["m"],
  category: "Moderation",
  requires: "permission: Mute Members",
  usage: ["mute <mention | user id> [time] [reason]"],
  examples: ["mute @GangstaCat", "mute 610915422723637268 5m"]
}