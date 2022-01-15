module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("TIMEOUT_MEMBERS")) {
    const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      const timeoutTime = args[1];
      console.log(timeoutTime);
      const timeoutReason = args.slice(2).join(" ");

      memberTarget.timeout(timeoutTime, timeoutReason)
      message.channel.send({ content: `${message.author} timed out <@${memberTarget.id}> (\`${memberTarget.id}\`) for ${timeoutTime} milliseconds. Reason: ${timeoutReason}` });
    } else {
      message.channel.send({ content: "Please mention a member to time them out." });
    }
  } else {
    message.channel.send({ content: "You do not have permission to use this command." });
  }
};

module.exports.data = {
  name: "timeout",
  description: "Timeout a member",
  aliases: "to",
  category: "Experimental",
  requires: "Permission: Timeout members",
  usage: "timeout <mention | id> <time (milliseconds)>",
  examples: "timeout @GangstaCat 60000"
}