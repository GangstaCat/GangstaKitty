module.exports.run = async (bot, message, args) => {
    const member = message.mentions.users.first();
    if (member) {
        const memberTarget = message.guild.members.cache.get(member.id);
        message.channel.send({ content: ":white_check_mark: User successfully banned!" });
    } else {
        message.channel.send({ content: ":x: Please mention a member to ban them" });
    }
}

module.exports.data = {
    name: "fban",
    description: "Ban someone",
    aliases: ["fb", "fakeban"],
    category: "Fun",
    requires: "none",
    usage: ["fban <mention>"],
    examples: ["fban @GangstaCat"]
}