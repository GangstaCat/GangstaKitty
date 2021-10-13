"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const parameters_1 = require("../../utils/parameters");
const basecommand_1 = require("../basecommand");
class QuoteCommand extends basecommand_1.BaseCommand {
    constructor(client) {
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
                    type: parameters_1.Parameters.user,
                    default: parameters_1.DefaultParameters.user,
                },
                { name: "light", type: "bool", default: false },
                { name: "compact", type: "bool", default: false },
            ],
        });
    }
}
exports.QuoteCommand = QuoteCommand;
