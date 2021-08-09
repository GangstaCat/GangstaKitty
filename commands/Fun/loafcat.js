module.exports.run = async (bot, message, args) => {
  const loafCats = ["https://cdn.discordapp.com/attachments/856832353409302539/862976081169743882/breadcat.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/862976079572238346/breadcat_but_worse.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/862976084157267979/GangstaCat.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/862976083561283584/furry_loaf.png"];

  if (!args[0]) return message.channel.send("Please specify what kind of loaf you want. \n1: Original loaf \n2: Poorly drawn loaf \n3: Gangsta loaf \n4: Furry loaf");
  if (isNaN(args[0])) return message.reply("Please enter a valid number");

  if (args[0] > 4) return message.reply("There are only four loaf cats. Please enter a number 1 to 4");
  if (args[0] < 1) return message.reply("There isn't a neutral or negative amount of loaf cats. Please enter a number 1 to 4");

  await message.channel.send(loafCats[args[0] - 1]);


}

module.exports.data = {
  name: "loafcat",
  description: "All the loaf cats Gangsta has ever got his hands on",
  category: "Fun",
  aliases: ["loaf", "lc"],
  requires: "none",
  usage: ["loafcat <number>"],
  examples: "loafcat 3"
}