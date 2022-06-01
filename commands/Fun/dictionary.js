const axios = require('axios');
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (!args.length) return message.channel.send({ content: "Please provide a word!" });

  const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: args.splice(0).join(" ") },
    headers: {
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      'X-RapidAPI-Key': '42c144747fmsh565d75972dd54d3p17e547jsnbdbe86ad4e6e'
    }
  };

  axios.request(options).then(response => {
    const definitionRaw = response.data.list[0].definition;
    const author = response.data.list[0].author;
    const word = response.data.list[0].word;
    const exampleRaw = response.data.list[0].example;
    const URL = response.data.list[0].permalink;


    const regex = /(\[|\])/g;
    const definition = definitionRaw.replace(regex, "")
    const example = exampleRaw.replace(regex, "")
    const embed = new MessageEmbed()
      .setColor("#007DFF")
      .setAuthor(author)
      .setTitle(`${word}`)
      .setURL(URL)
      .setDescription(`${definition}`)
      .addField("Example", `${example}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send({ embeds: [embed] })
  }).catch(err => {
    message.channel.send({ content: `An error occured!\n\`\`\`${err}\`\`\`` })
  })
}

module.exports.data = {
  name: "dictionary",
  description: "the definition of any word, powered by urban dictionary",
  category: "Experimental",
  aliases: "dic",
  requires: "none",
  usage: "dictionary <word>",
  examples: "dictionary dreamsexual"
}

