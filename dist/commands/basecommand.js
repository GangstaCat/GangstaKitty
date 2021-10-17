"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const command_1 = require("detritus-client/lib/command");
const constants_1 = require("detritus-client/lib/constants");
const utils_1 = require("detritus-client/lib/utils");
const config_1 = require("../config");
const msgs_1 = require("../msgs");
const bitfieldToArray_1 = require("../utils/bitfieldToArray");
const capitalizeWords_1 = require("../utils/capitalizeWords");
const time_1 = require("../utils/time");
const usage_1 = require("../utils/usage");
class BaseCommand extends command_1.Command {
    constructor(client, options) {
        super(client, Object.assign({
            triggerTypingAfter: 1000,
            ratelimits: config_1.config.ratelimits,
            metadata: {
                help: "idk good luck",
                examples: [options.name],
                description: "not implemented yet lol",
            },
        }, options));
    }
    run(context, _unused_args = {}) {
        return context.editOrReply(msgs_1.messages.command.notImplemented);
    }
    onError(context, _unused_args = {}, error = new Error()) {
        console.warn(error);
        let stack;
        if (error.stack) {
            stack = utils_1.Markup.codeblock(error.stack, { language: "js" });
        }
        let str = msgs_1.replace(msgs_1.messages.command.error, [
            ["{WHILE}", undefined],
            ["{NAME}", error.name],
            ["{MESSAGE}", error.message],
            ["{STACK}", stack],
        ]);
        context.editOrReply(str);
    }
    onRunError(context, _unused_args = {}, error = new Error()) {
        console.warn(error);
        let stack;
        if (error.stack) {
            stack = utils_1.Markup.codeblock(error.stack, { language: "js" });
        }
        let str = msgs_1.replace(msgs_1.messages.command.error, [
            ["{WHILE}", " while running"],
            ["{NAME}", error.name],
            ["{MESSAGE}", error.message],
            ["{STACK}", stack],
        ]);
        context.editOrReply(str);
    }
    onPermissionsFail(context, permissions) {
        const formattedPermissions = permissions
            .map((v) => bitfieldToArray_1.bitfieldToArray(v, Object.keys(constants_1.Permissions)))
            .flat(1)
            .map((v) => capitalizeWords_1.capitalizeWords(v.toLowerCase()))
            .join(", ");
        const str = msgs_1.replace(msgs_1.messages.command.missingPermissions, [
            ["{PERMISSIONS}", formattedPermissions],
        ]);
        return context.editOrReply(str);
    }
    onPermissionsFailClient(context, permissions) {
        const formattedPermissions = permissions
            .map((v) => bitfieldToArray_1.bitfieldToArray(v, Object.keys(constants_1.Permissions)))
            .flat(1)
            .map((v) => capitalizeWords_1.capitalizeWords(v.toLowerCase()))
            .join(", ");
        const str = msgs_1.replace(msgs_1.messages.command.missingPermissionsClient, [
            ["{PERMISSIONS}", formattedPermissions],
        ]);
        return context.editOrReply(str);
    }
    onRatelimit(context, ratelimits, global) {
        for (const rate of ratelimits) {
            var cause = "DMs";
            if (rate.ratelimit.type === constants_1.CommandRatelimitTypes.USER)
                cause = context.user.mention;
            else if (rate.ratelimit.type === constants_1.CommandRatelimitTypes.CHANNEL)
                cause = context.channel.mention;
            else if (context.guild)
                cause = `\`${context.guild.name}\``;
            const command = global ? "commands" : `\`${context.command.name}\``;
            const time = time_1.simpleGetLongAgo(Date.now() - rate.ratelimit.duration);
            const remaining = time_1.simpleGetLongAgo(Date.now() - rate.remaining);
            context.reply(msgs_1.replace(msgs_1.messages.command.ratelimit[rate.ratelimit.type] + msgs_1.messages.command.ratelimit.message, [
                ["{CAUSE}", cause],
                ["{COMMAND}", command],
                ["{COMMANDS}", rate.item.usages],
                ["{COMMANDS_MAX}", rate.ratelimit.limit],
                ["{TIME}", time],
                ["{REMAINING}", remaining],
            ]));
        }
    }
    onTypeError(context, _args, errors) {
        if (!context.command)
            return;
        const description = ["❌ Argument Errors:"];
        for (let key in errors)
            description.push(`\`${key}\`: ${errors[key].message}`);
        description.push(`Proper Usage:
\`\`\`lua\n${usage_1.generateUsage(context.command)}\`\`\``);
        return context.editOrReply(description.join("\n"));
    }
}
exports.BaseCommand = BaseCommand;
