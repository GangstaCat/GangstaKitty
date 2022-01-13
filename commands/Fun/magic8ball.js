const { MessageEmbed } = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if (!args.length) {
    message.channel.send({ content: "Please ask a question for the magic 8 ball to answer" })
  } else {
    const answers = ["No", "Yes", "I don't know. Ask your question again"];
    const question = args.join(" ");
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    };

    const embed = new MessageEmbed()
      .setTitle(question)
      .setColor("#007DFF")
      .setDescription(answers[randomNumber(0, answers.length)]);
    message.channel.send({ embeds: [embed] })
  }
}

module.exports.data = {
  name: "magic8ball",
  description: "Ask the magic 8 ball a question and it gives you an immediate answer!",
  aliases: "mb",
  requires: "none",
  category: "Fun",
  usage: "magicball <question>",
  examples: "magicball Is GangstaCat cool?"
}