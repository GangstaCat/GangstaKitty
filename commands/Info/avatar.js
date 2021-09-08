module.exports.run = async (bot, message, args) => {
  if (args[0]) {
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply({ content: 'Please use a proper mention if you want to see someone elses avatar.' });
    }

    return message.channel.send({ content: `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}` });
  }

  return message.channel.send({ content: `${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}` });
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