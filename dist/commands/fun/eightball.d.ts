import { CommandClient } from "detritus-client";
import { Context } from "detritus-client/lib/command";
import { ParsedArgs } from "detritus-client/lib/interaction";
import { BaseCommand } from "../basecommand";
export declare class EightBallCommand extends BaseCommand {
    constructor(client: CommandClient);
    run(context: Context, args: ParsedArgs): Promise<void>;
}
