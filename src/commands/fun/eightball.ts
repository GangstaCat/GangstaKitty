import { CommandClient } from "detritus-client";
import { Context } from "detritus-client/lib/command";
import { ParsedArgs } from "detritus-client/lib/interaction";
import { BaseCommand } from "../basecommand";

export class EightBallCommand extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "eightball",
      metadata: {
        description: "roll the.. ball?",
        examples: ["eightball <text>"],
      },
      aliases: ["8b", "8ball"],
      // args !!
      label: "text",
      type: "string",
    });
  }
  async run(client: Context, args: ParsedArgs) {}
}
