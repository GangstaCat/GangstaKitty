import { Replacers } from "./types";

export const messages = {
  command: {
    notImplemented: "❌ This command is not implemented",
    error: "❌ This command had an error{WHILE}: `{NAME}: {MESSAGE}` {STACK}",
    missingPermissions:
      "❌ You do not have the permissions to use this command (missing permissions: `{PERMISSIONS}`)",
    missingPermissionsClient:
      "❌ **I** do not have the permissions to use this command (missing permissions: `{PERMISSIONS}`)",
    ratelimit: {
      message:
        "using {COMMAND} too fast (`{COMMANDS}/{COMMANDS_MAX}` commands within `{TIME}`). Please wait `{REMAINING}`.",
      guild: "❌ This server ({CAUSE}) is ",
      channel: "❌ This channel ({CAUSE}) is ",
      user: "❌ You ({CAUSE}) are using ",
    },
  },
};
export function replace(
  that: string,
  what: Replacers,
  _default: Replacers = [["{Y}", "✅"]]
) {
  what = what.concat(..._default);
  for (const [k, v] of what) {
    that = that.split(k).join(v ?? "");
  }
  return that;
}
