const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reddit")
    .setDescription("Get any image from any subreddit!")
    .addStringOption(option => option.setName("subreddit").setDescription("The subreddit to get an image from").setRequired(true)),
  async execute(interaction) {
    const subreddit = interaction.options.getString("subreddit");
    axios.get(`https://meme-api.herokuapp.com/gimme/${subreddit}`)
      .then(async response => {
        if (response.data.nsfw) {
          await interaction.reply({ content: "That post seems to be NSFW! Go touch some grass", ephemeral: true })
        } else {
          const embed = new EmbedBuilder()
            .setColor([0, 125, 255])
            .setTitle(response.data.title)
            .setURL(response.data.postLink)
            .setImage(response.data.url)
            .setFooter({
              text: `sent in r/${response.data.subreddit} by u/${response.data.author} | ${response.data.ups} upvotes`
            })
          await interaction.reply({ embeds: [embed] })
        }
      })
  }
}