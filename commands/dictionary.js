const axios = require('axios');
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dictionary")
    .setDescription("get the definition from any word on urban dictionary")
    .addStringOption(option => option.setName("word").setDescription("Enter a word to find in the dictionary").setRequired(true)),
  async execute(interaction) {
    const args = interaction.options.getString("word");
    const options = {
      method: 'GET',
      url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
      params: { term: args },
      headers: {
        'X-RapidAPI-Key': process.env.rapidapikey,
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
      }
    };


    axios.request(options).then(async response => {
      const definitionRaw = response.data.list[0].definition;
      const author = response.data.list[0].author;
      const word = response.data.list[0].word;
      const exampleRaw = response.data.list[0].example;
      const URL = response.data.list[0].permalink;

      const regex = /(\[|\])/g;
      const definition = definitionRaw.replace(regex, "")
      const example = exampleRaw.replace(regex, "")
      const embed = new EmbedBuilder()
        .setColor([0, 125, 255])
        .setAuthor({ name: author })
        .setTitle(`${word}`)
        .setURL(URL)
        .setDescription(`${definition}`)
        .addFields({ name: "Example", value: example })
      await interaction.reply({
        embeds: [embed]
      })
    })

  }
}