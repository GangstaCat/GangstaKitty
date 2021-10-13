import { Context } from "detritus-client/lib/command";

export namespace Parameters {
  export function user(value: string, context: Context) {
    if (!context.guild) return context.user;
    const found = context.guild.members.find((key) => {
      return (
        key.username.toLowerCase().includes(value) ||
        key.toString().toLowerCase() === value ||
        key.id === value.replace(/\D/g, "")
      );
    });
    if (!found) return undefined;
    return found.user;
  }
}
export namespace DefaultParameters {
  export function user(context: Context) {
    return context.user;
  }
}
