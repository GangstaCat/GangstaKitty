import { Command, CommandClient } from "detritus-client";
import { Markup } from "detritus-client/lib/utils";
import { SomeRandomAPI } from "pariah";
import { Brands, Color } from "../../globals";
import { createBrandEmbed } from "../../utils/embed";
import { BaseCommand } from "../basecommand";
export class JokeCommand extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "joke",
      metadata: {
        description: "say something funny",
        examples: ["joke"],
      },
    });
  }
  async run(context: Command.Context, _args: Command.ParsedArgs) {
    const embed = createBrandEmbed(Brands.SOME_RANDOM_API, context.user);

    // get the joke text
    const sra = new SomeRandomAPI();
    const { joke } = await sra.joke();

    // setup embed lol
    embed
      .setTitle("Joke")
      .setColor(Color.INFO)
      .setDescription(Markup.codeblock(joke));

    return context.editOrReply({ embed: embed });
  }
}
