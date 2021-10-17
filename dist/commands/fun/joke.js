"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const utils_1 = require("detritus-client/lib/utils");
const pariah_1 = require("pariah");
const globals_1 = require("../../globals");
const embed_1 = require("../../utils/embed");
const basecommand_1 = require("../basecommand");
class JokeCommand extends basecommand_1.BaseCommand {
    constructor(client) {
        super(client, {
            name: "joke",
            metadata: {
                description: "say something funny",
                examples: ["joke"],
            },
        });
    }
    async run(context, _args) {
        const embed = embed_1.createBrandEmbed(globals_1.Brands.SOME_RANDOM_API, context.user);
        const sra = new pariah_1.SomeRandomAPI();
        const { joke } = await sra.joke();
        embed
            .setTitle("Joke")
            .setColor(globals_1.Color.INFO)
            .setDescription(utils_1.Markup.codeblock(joke));
        return context.editOrReply({ embed: embed });
    }
}
exports.JokeCommand = JokeCommand;
