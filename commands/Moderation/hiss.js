module.exports.run = async (bot, message, args) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
        if (!args[0]) return message.reply('Please specify the amount of messages that need to be hissed at');
        if (isNaN(args[0])) return message.reply('Please enter a valid number');

        if (args[0] > 100) return message.reply("I can't hiss at more than 100 messages");
        if (args[0] < 1) return message.reply("deleting a negative or neutral amount of messages is illegal, i can't do it");

        await message.channel.messages.fetch({ limit: args[0] + 1 }).then(messages => {
            message.channel.bulkDelete(messages);
        });
        message.reply(`successfully deleted ${args} messages!`).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
    }

    else {
        message.channel.send("you do not have the correct permissions to use this command");
    }
}


module.exports.data = {
    name: "hiss",
    description: "Hisses at messages to delete them",
    aliases: ["h"],
    category: "Moderation",
    requires: "permission: Manage Messages",
    usage: ["hiss <amount>"],
    examples: ["hiss 10"]
}