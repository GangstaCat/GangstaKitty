"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EightBallCommand = void 0;
const utils_1 = require("detritus-client/lib/utils");
const pariah_1 = require("pariah");
const globals_1 = require("../../globals");
const embed_1 = require("../../utils/embed");
const basecommand_1 = require("../basecommand");
class EightBallCommand extends basecommand_1.BaseCommand {
    constructor(client) {
        super(client, {
            name: "eightball",
            metadata: {
                description: "roll the.. ball?",
                examples: ["eightball <text>"],
            },
            aliases: ["8b", "8ball"],
            label: "text",
            type: "string",
        });
    }
    async run(context, args) {
        const ball = await new pariah_1.EightBallDelegator().json(args.text);
        const embed = (0, embed_1.createBrandEmbed)(globals_1.Brands.EIGHT_BALL_DELEGATOR, context.user);
        embed.setTitle(ball.magic.question);
        embed.setDescription(utils_1.Markup.codeblock(ball.magic.answer));
        const EmbedColors = {
            Affirmative: globals_1.Color.PRESENCE_ONLINE,
            Neutral: globals_1.Color.PRESENCE_OFFLINE,
            Contrary: globals_1.Color.PRESENCE_BUSY,
        };
        embed.setColor(EmbedColors[ball.magic.type]);
        context.editOrReply({ embed });
    }
}
exports.EightBallCommand = EightBallCommand;
