"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = exports.messages = void 0;
exports.messages = {
    command: {
        notImplemented: "❌ This command is not implemented",
        error: "❌ This command had an error{WHILE}: `{NAME}: {MESSAGE}` {STACK}",
        missingPermissions: "❌ You do not have the permissions to use this command (missing permissions: `{PERMISSIONS}`)",
        missingPermissionsClient: "❌ **I** do not have the permissions to use this command (missing permissions: `{PERMISSIONS}`)",
        ratelimit: {
            message: "using {COMMAND} too fast (`{COMMANDS}/{COMMANDS_MAX}` commands within `{TIME}`). Please wait `{REMAINING}`.",
            guild: "❌ This server ({CAUSE}) is ",
            channel: "❌ This channel ({CAUSE}) is ",
            user: "❌ You ({CAUSE}) are using ",
        },
    },
};
function replace(that, what, _default = [["{Y}", "✅"]]) {
    what = what.concat(..._default);
    for (const [k, v] of what) {
        that = that.split(k).join(v ?? "");
    }
    return that;
}
exports.replace = replace;
