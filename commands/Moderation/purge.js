module.exports.run = async (bot, message, args) => {
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
        if (!args[0]) return message.reply({ content: 'Please specify the amount of messages that need to be purged' });
        if (isNaN(args[0])) return message.reply({ content: 'Please enter a valid number' });

        if (args[0] > 100) return message.reply({ content: "I can't purge more than 100 messages" });
        if (args[0] < 1) return message.reply({ content: "Deleting a negative or neutral amount of messages is illegal, i can't do it" });
        ;
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
        message.channel.send({ content: `Successfully deleted ${args} messages!` }).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
    }

    else {
        message.channel.send({ content: "you do not have the correct permissions to use this command" });
    }
}


module.exports.data = {
    name: "purge",
    description: "Deletes an amount of messages of your choice",
    aliases: "p",
    category: "Moderation",
    requires: "permission: Manage Messages",
    usage: "purge <amount>",
    examples: "purge 10"
}