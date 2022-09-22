const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const dotenv = require("dotenv")
dotenv.config();
const clientId = "847743012851286027";
const guildId = "941393934725300274";
const token = process.env.token;

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: [] })
  .then(() => console.log('Successfully deleted all application commands.'))
  .catch(console.error);
