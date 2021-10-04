module.exports.run = async (bot, message, args) => {
  const loafCats = ["https://cdn.discordapp.com/attachments/856832353409302539/862976081169743882/breadcat.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/862976079572238346/breadcat_but_worse.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/862976084157267979/GangstaCat.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/862976083561283584/furry_loaf.png",
    "https://cdn.discordapp.com/attachments/856832353409302539/885202468697428018/artflow_202109081836.png"];


  if (!args[0]) return message.channel.send({ content: "Please specify what kind of loaf you want. \n1: Original loaf \n2: Poorly drawn loaf \n3: Gangsta loaf \n4: Furry loaf \n5: Horribly drawn loaf" })
    .then(bot.on("messageCreate", m => {
      if (!m.author) return; if (m.author.bot) return; if (m.content == "hi") { m.channel.send({ content: "hi" }); return }
    }))

  // if (isNaN(args[0])) return message.reply({ content: "Please enter a valid number" });

  // if (args[0] > 5) return message.reply({ content: "There are only five loaf cats. Please enter a number 1 to 5" });
  // if (args[0] < 1) return message.reply({ content: "There isn't a neutral or negative amount of loaf cats. Please enter a number 1 to 5" });

  await message.channel.send({ content: loafCats[args[0] - 1] });


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