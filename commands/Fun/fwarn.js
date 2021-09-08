module.exports.run = async (bot, message, args) => {
  const target = message.mentions.users.first();
  if (target) {
    let memberTarget = message.guild.members.cache.get(target.id);

    if (!memberTarget.roles.cache.has('856832352512245772')) {

      message.channel.send({ content: `<@${memberTarget.user.id}> has been warned. this is their first warn.` })

    }
    else if (memberTarget.roles.cache.has('856832352512245772') && !memberTarget.roles.cache.has('856832352339886107')) {

      message.channel.send({ content: `<@${memberTarget.user.id}> has been warned. this is their second warn.` })

    }
    else if (memberTarget.roles.cache.has('856832352512245772') && memberTarget.roles.cache.has('856832352339886107')) {
      message.channel.send({ content: "this user has reached the maximum amount of warns. They will now be kicked." })

    }
  } else {
    message.reply({ content: "That member does not exist" });
  }

}

module.exports.data = {
  name: "fwarn",
  description: "warn someone",
  aliases: ["fw", "fakewarn"],
  category: "Fun",
  requires: "none",
  usage: ["fwarn <mention>"],
  examples: ["fwarn @GangstaCat"]
}