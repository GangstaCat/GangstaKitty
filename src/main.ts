import { ActivityTypes } from "detritus-client/lib/constants";
import { config } from "./config";
import { client, commands } from "./globals";

commands.addMultipleIn("/commands", { subdirectories: true });

// events

client.on("ready", () => {
  console.log(`${client.user} has come online`);
  let now = new Date();
  let birthday = new Date(now.getFullYear(), 9, 24);
  if (
    now.toLocaleDateString("en-US") === birthday.toLocaleDateString("en-US")
  ) {
    birthday.setFullYear(birthday.getFullYear() + 1);
  }
  client.gateway.setPresence({
    activities: [
      {
        name: `for ${config.prefix}help | ${Math.ceil(
          (+birthday - +now) / 86400000
        )} days until my birthday!`,
        type: ActivityTypes.LISTENING,
      },
    ],
  });
});
