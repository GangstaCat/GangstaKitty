module.exports.run = async (bot, message, args) => {
  const member = message.mentions.users.first();
  if (member) {
    const memberTarget = message.guild.members.cache.get(member.id);
    message.channel.send(":white_check_mark: User successfully kicked!");
  } else {
    message.channel.send(":x: Please mention a member to kick them");
  }
}

module.exports.data = {
  name: "fkick",
  description: "Kick someone",
  aliases: ["fk", "fakekick"],
  category: "Fun",
  requires: "none",
  usage: ["fkick <mention>"],
  examples: ["fkick @GangstaCat"]
}