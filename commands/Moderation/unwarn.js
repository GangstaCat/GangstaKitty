module.exports.run = async (bot, message, args) => {
  message.channel.send({ content: "Warn commands are disabled because I am lazy! :D" })
  // if (message.member.permissions.has("MANAGE_ROLES")) {
  //   const target = message.mentions.users.first();
  //   if (target) {
  //     let memberTarget = message.guild.members.cache.get(target.id);

  //     if (!memberTarget.roles.cache.has('856832352512245772')) {
  //       message.reply({ content: "That member is not warned" });
  //     }
  //     else if (memberTarget.roles.cache.has('856832352512245772') && !memberTarget.roles.cache.has('856832352339886107')) {
  //       message.channel.send({ content: `<@${message.author.id}> unwarned <@${memberTarget.user.id}> (\`${memberTarget.user.id}\`)` });
  //       memberTarget.roles.remove('856832352512245772');
  //     }
  //     else if (memberTarget.roles.cache.has('856832352512245772') && memberTarget.roles.cache.has('856832352339886107')) {
  //       message.channel.send({ content: `<@${message.author.id}> unwarned <@${memberTarget.user.id}> (\`${memberTarget.user.id}\`)` });
  //       memberTarget.roles.remove("856832352339886107");
  //     }
  //   } else {
  //     message.reply({ content: "That member does not exist" });
  //   }
  // } else {
  //   message.reply({ content: "You do not have the correct permissions to use this command" });
  // }
}

module.exports.data = {
  name: "unwarn",
  description: "unwarns a user",
  aliases: "uw",
  category: "Moderation",
  requires: "permission: Manage Roles",
  usage: "unwarn <mention>",
  examples: "unwarn @GangstaCat"
}