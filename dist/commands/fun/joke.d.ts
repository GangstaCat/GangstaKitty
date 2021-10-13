import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";
export declare class JokeCommand extends BaseCommand {
    constructor(client: CommandClient);
    run(context: Command.Context, _args: Command.ParsedArgs): Promise<import("detritus-client/lib/structures").Message>;
}
