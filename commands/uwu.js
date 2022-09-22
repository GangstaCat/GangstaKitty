const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uwu")
    .setDescription("Translate any english to uwu")
    .addStringOption(option => option.setName("english").setDescription("The enlish to translate").setRequired(true)),
  async execute(interaction) {
    const english = interaction.options.getString("english");
    const emoticons = [" (´・ω・｀)", " X3", " :3", " (人◕ω◕)", " ˃ᆺ˂"]
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    };

    const regex1 = /(r|l)/gi
    let uwu = "";

    uwu = english.replace(regex1, "w");
    uwu = uwu.replace("you", "uwu");
    uwu = uwu.replace("to", "tuwu")
    uwu = uwu.replace("can", "cawn");
    uwu += emoticons[randomNumber(0, emoticons.length)]

    await interaction.reply({ content: uwu })
  }
}