<div align="center">
<img src="https://gangstacat.net/assets/img/loafcate.png" width="400">

<p>
  <a href="https://discord.com/oauth2/authorize?client_id=847743012851286027&scope=bot&permissions=1"><img src="https://img.shields.io/badge/Invite-to%20your%20server-blue"></a>
  <a href="https://discord.gg/yBcZMHcQP8"><img src="https://img.shields.io/discord/914151815749181471?color=5865F2&logo=discord&logoColor=white"></a>
</p>
</div>

# GangstaKitty

## A discord bot made with JavaScript and Discord.js

GangstaKitty is a Discord bot for moderation, funny commands and some more. He can:

* Kick and ban users
* Timeout users
* Get posts from [Urban Dictionary](https://urbandictionary.com) and [Reddit](https://reddit.com) (beta)
* Quote your funniest stuff in a shiny embed
* Get the info of the current user/server

And more!

## Development

This bot is definetly not finished, and probably never will. I'm working on a database and thinking of ways to improve the bot in general, so if you'd like to constribute you're welcome!

## Contributing

To contribute, you should follow these steps to make it work for both other developers and users.

Making a new command:
* Create a new command in it's respective category
* Take the schema from other commands and fill in your own part I.E. command data
* Make sure to test it before submitting a PR

```js
module.exports.data = {
  name: "command name",
  description: "command description",
  aliases: "command aliases",
  category: "command category",
  requires: "permission",
  usage: "command usage",
  example: "command example"
}
```

<br>
If you want to improve my command handler or anything similar, just make sure it works and that the file structure is the same or easy to adapt to for me and other developers
<br>
<br>
Make sure to create an issue first so we don't have multiple people working on this project.