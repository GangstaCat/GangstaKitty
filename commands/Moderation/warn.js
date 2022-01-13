const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send({ content: "Warn commands are disabled because I am lazy! :D" })
  // if (message.member.permissions.has("MANAGE_ROLES")) {
  //   const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  //   if (target) {
  //     let memberTarget = message.guild.members.cache.get(target.id);
  //     let warnReason = args.slice(1).join(" ");
  //     if (!args[1]) {
  //       warnReason = "Unspecified";
  //     }
  //     const warnEmbed = new MessageEmbed()
  //       .setTitle("Warn")
  //       .setColor("#007DFF")
  //       .setThumbnail(memberTarget.user.displayAvatarURL({ dynamic: true }))
  //       .addField("Where?", message.guild.name)
  //       .addField("Why?", warnReason)
  //       .addField("Who?", `<@${message.author.id}>`);


  //     if (!memberTarget.roles.cache.has('856832352512245772')) {
  //       memberTarget.roles.add('856832352512245772')
  //       message.channel.send({ content: `<@${message.author.id}> warned <@${memberTarget.user.id}> (\`${memberTarget.user.id}\`) for: \`${warnReason}\`` })
  //       memberTarget.send({ embeds: [warnEmbed] });
  //     }
  //     else if (memberTarget.roles.cache.has('856832352512245772') && !memberTarget.roles.cache.has('856832352339886107')) {
  //       memberTarget.roles.add('856832352339886107')
  //       message.channel.send({ content: `<@${message.author.id}> warned <@${memberTarget.user.id}> (\`${memberTarget.user.id}\`) for: \`${warnReason}\`` })
  //       memberTarget.send({ content: [warnEmbed] });
  //     }
  //     else if (memberTarget.roles.cache.has('856832352512245772') && memberTarget.roles.cache.has('856832352339886107')) {
  //       message.channel.send({ content: "this user has reached the maximum amount of warns. They will now be kicked." })
  //       memberTarget.kick({ reason: "Too many warns" })
  //       memberTarget.send({ content: `You have been kicked from ${message.guild.name}. You had too many warns` });

  //     }
  //   } else {
  //     message.reply("That member does not exist");
  //   }
  // } else {
  //   message.reply("You do not have the correct permissions to use this command");
  // }
}

module.exports.data = {
  name: "warn",
  description: "warns a user. after two warns a user will be kicked",
  aliases: ["w"],
  category: "Moderation",
  requires: "permission: Manage Roles",
  usage: ["warn <mention | user id> [reason]"],
  examples: ["warn @GangstaCat", "warn 610915422723637268 posting memes in #general"]
}