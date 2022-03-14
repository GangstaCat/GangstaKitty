const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  axios.get("https://meme-api.herokuapp.com/gimme/bread")
    .then(response => {
      const embed = new MessageEmbed()
        .setTitle(response.data.title)
        .setImage(response.data.url)
        .setFooter(`${message.author.tag} | sent in r/${response.data.subreddit} by u/${response.data.author}`, message.author.displayAvatarURL({ dynamic: true }));
      message.channel.send({ embeds: [embed] });
    });
}

module.exports.data = {
  name: "bread",
  description: "gets a random bread image from r/bread! (why does this exist)",
  category: "Fun",
  aliases: "bread",
  requires: "none",
  usage: "bread",
  examples: "bread"
}