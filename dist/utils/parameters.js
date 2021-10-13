"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultParameters = exports.Parameters = void 0;
var Parameters;
(function (Parameters) {
    function user(value, context) {
        if (!context.guild)
            return context.user;
        const found = context.guild.members.find((key) => {
            return (key.username.toLowerCase().includes(value) ||
                key.toString().toLowerCase() === value ||
                key.id === value.replace(/\D/g, ""));
        });
        if (!found)
            return undefined;
        return found.user;
    }
    Parameters.user = user;
})(Parameters = exports.Parameters || (exports.Parameters = {}));
var DefaultParameters;
(function (DefaultParameters) {
    function user(context) {
        return context.user;
    }
    DefaultParameters.user = user;
})(DefaultParameters = exports.DefaultParameters || (exports.DefaultParameters = {}));
