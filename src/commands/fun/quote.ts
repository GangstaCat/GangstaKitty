import { CommandClient } from "detritus-client";
import { DefaultParameters, Parameters } from "../../utils/parameters";
import { BaseCommand } from "../basecommand";

export class QuoteCommand extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "quote",
      metadata: {
        description: "make people say stuff",
        examples: ["quote <text> [-from: User] [-light] [-compact]"],
      },
      label: "text",
      type: "string",
      args: [
        {
          name: "from",
          type: Parameters.user,
          default: DefaultParameters.user,
        },
        { name: "light", type: "bool", default: false },
        { name: "compact", type: "bool", default: false },
      ],
    });
  }
}
