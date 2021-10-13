"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EightBallCommand = void 0;
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
    async run(client, args) { }
}
exports.EightBallCommand = EightBallCommand;
