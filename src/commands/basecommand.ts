import { CommandClient, CommandRatelimit } from "detritus-client";
import {
  Command,
  Context,
  FailedPermissions,
  ParsedArgs,
  ParsedErrors,
} from "detritus-client/lib/command";
import { CommandRatelimitItem } from "detritus-client/lib/commandratelimit";
import {
  CommandRatelimitTypes,
  Permissions,
} from "detritus-client/lib/constants";
import { Message } from "detritus-client/lib/structures/message";
import { Markup } from "detritus-client/lib/utils";
import { config } from "../config";
import { messages, replace } from "../msgs";
import { CommandOptionsMeta } from "../types";
import { bitfieldToArray } from "../utils/bitfieldToArray";
import { capitalizeWords } from "../utils/capitalizeWords";
import { simpleGetLongAgo } from "../utils/time";
import { generateUsage } from "../utils/usage";

export class BaseCommand extends Command {
  constructor(client: CommandClient, options: CommandOptionsMeta) {
    super(
      client,
      Object.assign(
        {
          triggerTypingAfter: 1000,
          ratelimits: config.ratelimits,
          metadata: {
            help: "idk good luck",
            examples: [options.name],
            description: "not implemented yet lol",
          },
        },
        options
      )
    );
  }
  run(
    context: Context,
    _unused_args: ParsedArgs = {}
  ): Promise<void | Message> {
    return context.editOrReply(messages.command.notImplemented);
  }
  onError(
    context: Context,
    _unused_args: ParsedArgs = {},
    error: Error = new Error()
  ) {
    console.warn(error);
    let stack;
    if (error.stack) {
      stack = Markup.codeblock(error.stack, { language: "js" });
    }
    let str = replace(messages.command.error, [
      ["{WHILE}", undefined],
      ["{NAME}", error.name],
      ["{MESSAGE}", error.message],
      ["{STACK}", stack],
    ]);
    context.editOrReply(str);
  }
  onRunError(
    context: Context,
    _unused_args: ParsedArgs = {},
    error: Error = new Error()
  ) {
    console.warn(error);
    let stack;
    if (error.stack) {
      stack = Markup.codeblock(error.stack, { language: "js" });
    }
    let str = replace(messages.command.error, [
      ["{WHILE}", " while running"],
      ["{NAME}", error.name],
      ["{MESSAGE}", error.message],
      ["{STACK}", stack],
    ]);
    context.editOrReply(str);
  }
  onPermissionsFail(context: Context, permissions: FailedPermissions) {
    const formattedPermissions = permissions
      .map((v) => bitfieldToArray(v, Object.keys(Permissions)))
      .flat(1)
      .map((v) => capitalizeWords(v.toLowerCase()))
      .join(", ");
    const str = replace(messages.command.missingPermissions, [
      ["{PERMISSIONS}", formattedPermissions],
    ]);
    return context.editOrReply(str);
  }
  onPermissionsFailClient(context: Context, permissions: FailedPermissions) {
    const formattedPermissions = permissions
      .map((v) => bitfieldToArray(v, Object.keys(Permissions)))
      .flat(1)
      .map((v) => capitalizeWords(v.toLowerCase()))
      .join(", ");
    const str = replace(messages.command.missingPermissionsClient, [
      ["{PERMISSIONS}", formattedPermissions],
    ]);
    return context.editOrReply(str);
  }
  onRatelimit(
    context: Context,
    ratelimits: Array<{
      item: CommandRatelimitItem;
      ratelimit: CommandRatelimit.CommandRatelimit;
      remaining: number;
    }>,
    global: { global: boolean; now: number }
  ) {
    for (const rate of ratelimits) {
      var cause = "DMs";

      if (rate.ratelimit.type === CommandRatelimitTypes.USER)
        cause = context.user.mention;
      else if (rate.ratelimit.type === CommandRatelimitTypes.CHANNEL)
        cause = context.channel!.mention;
      else if (context.guild) cause = `\`${context.guild.name}\``;

      const command = global ? "commands" : `\`${context.command!.name}\``;
      const time = simpleGetLongAgo(Date.now() - rate.ratelimit.duration);
      const remaining = simpleGetLongAgo(Date.now() - rate.remaining);

      context.reply(
        replace(
          messages.command.ratelimit[
            rate.ratelimit.type as CommandRatelimitTypes
          ]! + messages.command.ratelimit.message,
          [
            ["{CAUSE}", cause],
            ["{COMMAND}", command],
            ["{COMMANDS}", rate.item.usages],
            ["{COMMANDS_MAX}", rate.ratelimit.limit],
            ["{TIME}", time],
            ["{REMAINING}", remaining],
          ]
        )
      );
    }
  }
  onTypeError(context: Context, _args: ParsedArgs, errors: ParsedErrors[]) {
    if (!context.command) return;
    const description = ["❌ Argument Errors:"];
    for (let key in errors)
      description.push(`\`${key}\`: ${errors[key].message}`);
    description.push(
      `Proper Usage:
\`\`\`lua\n${generateUsage(context.command)}\`\`\``
    );
    return context.editOrReply(description.join("\n"));
  }
}
