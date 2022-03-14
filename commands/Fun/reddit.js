const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const subreddit = args[0];
  axios.get(`https://meme-api.herokuapp.com/gimme/${subreddit}`)
    .then(response => {
      if (response.data.nsfw) {
        message.channel.send({ content: "That post seems to be NSFW! Go touch some grass" })
      } else {
        const embed = new MessageEmbed()
          .setTitle(response.data.title)
          .setImage(response.data.url)
          .setFooter(`${message.author.tag} | sent in r/${response.data.subreddit} by u/${response.data.author} | ${response.data.ups} upvotes`, message.author.displayAvatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
      }
    });
}

module.exports.data = {
  name: "reddit",
  description: "gets a random image from any subreddit of your choosing!",
  category: "Fun",
  aliases: "reddit",
  requires: "none",
  usage: "reddit <subreddit>",
  examples: "reddit softwaregore"
}