module.exports.run = async (bot, message, args) => {
    if (message.member.permissions.has("MUTE_MEMBERS")) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Normal Cats');
            let mutedRole = message.guild.roles.cache.find(role => role.name === 'STFU (muted)');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(mutedRole.id);

            message.channel.send({ content: `<@${memberTarget.user.id}> can talk again!` });
        }
        else {
            message.reply({ content: "That user does not exist" });
        }
    } else {
        message.reply({ content: "You do not have the correct permissions to use this command" })
    }
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