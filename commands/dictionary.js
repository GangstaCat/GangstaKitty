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

    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    };

    async function getPost(response) {
      try {
        const post = response.data.list[randomNumber(0, 10)]
        const definitionRaw = post.definition;
        const author = post.author;
        const word = post.word;
        const exampleRaw = post.example;
        const URL = post.permalink;

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
      } catch (err) {
        getPost(response)
      }
    }


    axios.request(options).then(async response => {
      getPost(response)
    })

  }
}