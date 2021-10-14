import { ActivityTypes } from "detritus-client/lib/constants";
import { config } from "./config";
import { client, commands } from "./globals";
import { messages, replace } from "./msgs";

commands.addMultipleIn("/commands", { subdirectories: true });

// events

client.on("ready", () => {
  if (!client.user) {
    return console.log(messages.on.unavailableUser);
  }
  console.log(
    replace(messages.on.ready, [
      ["{USER}", `${client.user.tag} ${client.user.id}`],
      ["{GUILD_COUNT}", client.guilds.size],
      [
        "{UNAVAILABLE_GUILDS}",
        client.guilds.filter((v) => v.unavailable).length,
      ],
    ])
  );
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

async () => {
  commands.run();
};
