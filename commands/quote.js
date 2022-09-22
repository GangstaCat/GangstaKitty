const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Quote your funniest stuff in a shiny embed")
    .addStringOption(option => option.setName("quote").setDescription("The quote you want to quote").setRequired(true))
    .addMentionableOption(option => option.setName("name").setDescription("who made the quote").setRequired(true)),
  async execute(interaction) {
    const quote = interaction.options.getString("quote");
    const name = interaction.options.getMentionable("name");
    const embed = new EmbedBuilder()
      .setColor([0, 125, 255])
      .setTitle(quote)
      .setDescription(`${name}, 2022`)
    await interaction.reply({ embeds: [embed] })
  }
}