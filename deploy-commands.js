const fs = require('node:fs');
const path = require('node:path');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const dotenv = require("dotenv")
dotenv.config();
const clientId = "847743012851286027";
const testClient = "938808677576618004";
const guildId = "941393934725300274";
const token = process.env.test_token;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    // const data = await rest.put(
    //   Routes.applicationCommands(testClient),
    //   { body: commands },
    // );
    const data = await rest.put(
      Routes.applicationGuildCommands(testClient, guildId),
      { body: commands },
    );


    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
})();
