const exec = require('child_process').exec;

module.exports.run = async (bot, message, args) => {
  message.channel.send({ content: "Server starting, please wait." })
  let server = args[0];
  if (!args.length) server = "GangstaCatTest.aternos.me";

  process.chdir("aternosAPI");
  exec(`npm run start -- --${server}`, (error, stdout, stderr) => {
    if (error || stderr) {
      console.log(error || stderr);
      message.channel.send({ content: `An Error occured! \n\`\`\`${error || stderr}\`\`\`` });
    } else {
      console.log(stdout);
      message.channel.send({ content: `Server started!` })
      process.chdir("../")
    }
  });
}

module.exports.data = {
  name: "startserver",
  description: "starts a nice aternos server",
  aliases: "serverstart",
  category: "Experimental",
  requires: "none",
  usage: "startserver",
  examples: "startserver"
}