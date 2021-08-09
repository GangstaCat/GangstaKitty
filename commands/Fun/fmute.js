const ms = require('ms');
module.exports.run = async (bot, message, args) => {
    const target = message.mentions.users.first();
    if (target) {
        let mainRole = message.guild.roles.cache.find(role => role.name === 'Normal Cats');
        let mutedRole = message.guild.roles.cache.find(role => role.name === 'STFU (muted)');

        let memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {

            message.channel.send(`<@${memberTarget.user.id}> can no longer talk lol`)

            return
        }


        message.channel.send(`<@${memberTarget.user.id}> can no longer talk for ${ms(ms(args[1]))} lol`)


        setTimeout(function () {


            message.channel.send(`:white_check_mark: <@${memberTarget.user.id}> has been unmuted and can talk again!`)

        }, ms(args[1]));
    } else {
        message.reply(":x: That user does not exist");
    }
}

module.exports.data = {
    name: "fmute",
    description: "mute someone",
    aliases: ["fm", "fakemute"],
    category: "Fun",
    requires: "none",
    usage: ["fmute <mention> [time]"],
    examples: ["fmute @GangstaCat", "fmute @GangstaCat 1m"]
}