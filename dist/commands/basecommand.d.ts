import { CommandClient, CommandRatelimit } from "detritus-client";
import { Command, Context, FailedPermissions, ParsedArgs, ParsedErrors } from "detritus-client/lib/command";
import { CommandRatelimitItem } from "detritus-client/lib/commandratelimit";
import { Message } from "detritus-client/lib/structures/message";
import { CommandOptionsMeta } from "../types";
export declare class BaseCommand extends Command {
    constructor(client: CommandClient, options: CommandOptionsMeta);
    run(context: Context, _unused_args?: ParsedArgs): Promise<void | Message>;
    onError(context: Context, _unused_args?: ParsedArgs, error?: Error): void;
    onRunError(context: Context, _unused_args?: ParsedArgs, error?: Error): void;
    onPermissionsFail(context: Context, permissions: FailedPermissions): Promise<Message>;
    onPermissionsFailClient(context: Context, permissions: FailedPermissions): Promise<Message>;
    onRatelimit(context: Context, ratelimits: Array<{
        item: CommandRatelimitItem;
        ratelimit: CommandRatelimit.CommandRatelimit;
        remaining: number;
    }>, global: {
        global: boolean;
        now: number;
    }): void;
    onTypeError(context: Context, _args: ParsedArgs, errors: ParsedErrors[]): Promise<Message> | undefined;
}
