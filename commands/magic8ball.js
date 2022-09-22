const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("magic8ball")
    .setDescription("Ask the Magic 8 Ball a question and it will give you an answer")
    .addStringOption(option => option.setName("question").setDescription("The question to ask the Magic 8 Ball").setRequired(true)),
  async execute(interaction) {
    const answers = ["No", "Yes", "I don't know. Ask your question again"];
    const question = interaction.options.getString("question")
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    };
    const embed = new EmbedBuilder()
      .setColor([0, 125, 255])
      .setTitle(question)
      .setDescription(answers[randomNumber(0, answers.length)]);
    await interaction.reply({
      embeds: [embed]
    })
  }
}