const exec = require('child_process').exec;

module.exports.run = async (bot, message, args) => {
  message.channel.send({ content: "Stopping the server..." });
  process.chdir("aternosAPI");

  exec("npm run stop -- --GangstaCatTest.aternos.me", (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    } else {
      message.channel.send({ content: "Server stopped, thank you for playing!" });
      process.chdir("../");
    }
  })
}

module.exports.data = {
  name: "stopserver",
  description: "stops a nice aternos server",
  aliases: "serverstop",
  category: "Experimental",
  requires: "none",
  usage: "stopserver",
  examples: "stopserver"
}