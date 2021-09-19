module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require('discord.js')
  if (!args[0]) {
    let [info, fun, moderation] = ["Info", "Fun", "Moderation"]
      .map(category => bot.commands.filter(c => c.data.category === category).map(c => `\`${c.data.name}\``));

    const embed = new MessageEmbed()
      .setColor("#007DFF")
      .setTitle(`Commands - ${bot.commands.size}`)
      .setDescription("help [command]")
      .addField(`Information - ${info.length}`, info.join(" "))
      .addField(`Fun - ${fun.length}`, fun.join(" "))
      .addField(`Moderation - ${moderation.length}`, moderation.join(" "))
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embeds: [embed] });
  }
  else {
    let command = bot.commands.get(args[0]) || bot.commands.find(cmd => cmd.data.aliases.includes(args[0]));
    if (!command) return message.reply({ content: "that is not a command" });

    // let commandEmbed = new MessageEmbed()
    //   .setColor("#007DFF")
    //   .setTitle(command.data.name)
    //   .setDescription(command.data.description)
    //   .addField("Category", command.data.category)
    //   .addField("Aliases", command.data.aliases, true)
    //   .addField("Requires", command.data.requires)
    //   .addField("Usage", command.data.usage, true)
    //   .addField("Examples", command.data.examples)
    //   .setFooter(`${message.author.tag}・Arguments in <> are required, [] are optional`, message.author.displayAvatarURL({ dynamic: true }))

    message.channel.send({ content: "Help for specific commands is temporarily disabled. Please wait until i find a fix" })
    // message.channel.send({ embeds: [commandEmbed] });
  }

}

module.exports.data = {
  name: "help",
  description: "Help with commands",
  category: "Info",
  aliases: ["commands"],
  requires: "none",
  usage: "help [command]",
  examples: ["help", "help ping"]
}