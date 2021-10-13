import { CommandClient } from "detritus-client";
import { Context } from "detritus-client/lib/command";
import { ParsedArgs } from "detritus-client/lib/interaction";
import { Markup } from "detritus-client/lib/utils";
import { EightBallDelegator } from "pariah";
import { MagicType } from "pariah/dist";
import { Brands, Color } from "../../globals";
import { createBrandEmbed } from "../../utils/embed";
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
  async run(context: Context, args: ParsedArgs) {
    const ball = await new EightBallDelegator().json(args.text);
    const embed = createBrandEmbed(Brands.EIGHT_BALL_DELEGATOR, context.user);
    embed.setTitle(ball.magic.question);
    embed.setDescription(Markup.codeblock(ball.magic.answer));

    const EmbedColors: Record<MagicType, Color> = {
      Affirmative: Color.PRESENCE_ONLINE,
      Neutral: Color.PRESENCE_OFFLINE,
      Contrary: Color.PRESENCE_BUSY,
    };

    embed.setColor(EmbedColors[ball.magic.type]);

    context.editOrReply({ embed });
  }
}
