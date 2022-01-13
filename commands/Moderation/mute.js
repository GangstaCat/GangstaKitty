const { MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
  message.channel.send({ content: "Well mute commands are kinda useless with timeouts now... I guess I'll try working with that in the future :/" })
}

module.exports.data = {
  name: "mute",
  description: "Disallows a user to talk in text and voice channels",
  aliases: ["m"],
  category: "Moderation",
  requires: "permission: Mute Members",
  usage: ["mute <mention | user id> [time] [reason]"],
  examples: ["mute @GangstaCat", "mute 610915422723637268 5m"]
}