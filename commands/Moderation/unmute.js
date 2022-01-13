module.exports.run = async (bot, message, args) => {
    message.channel.send({ content: "Well mute commands are kinda useless with timeouts now... I guess I'll try working with that in the future :/" })
}

module.exports.data = {
    name: "unmute",
    description: "unmutes a user, allowing them to talk again",
    aliases: ["um"],
    category: "Moderation",
    requires: "permission: Mute Members",
    usage: ["unmute <mention>"],
    examples: ["unmute @GangstaCat"]
}