module.exports.run = async (bot, message, args) => {
  if (message.member.permissions.has("MANAGE_CHANNELS")) {
    const newContent = args.join(" ")
    const newSplitContent = newContent.split(", ")
    const channelName = newSplitContent[0];
    let channelTopic = newSplitContent[1];
    if (!channelName) {
      return message.channel.send({ content: "Please provide a name for the channel" })
    }
    else if (channelName && !channelTopic) {
      channelReason = "";
      message.guild.channels.create(channelName, { topic: channelTopic })
        .catch(console.error)
      return message.channel.send({ content: `channel sucessfully created` })
    }
    else if (channelName && channelTopic) {
      message.guild.channels.create(channelName, { topic: channelTopic })
        .catch(console.error)
      return message.channel.send({ content: `channel sucessfully created` })
    }
  }
}

module.exports.data = {
  name: "createchannel",
  description: "Create a channel with whatever name and description you want",
  aliases: "cc",
  category: "Experimental",
  requires: "Permission: Manage channels",
  usage: "createchannel <channel name> [channel description]",
  examples: "createchannel gangstacat is cool, GangstaCat is cool"
}