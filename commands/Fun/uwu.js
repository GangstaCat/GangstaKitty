module.exports.run = async (bot, message, args) => {
  const english = args.join(" ")
  const emoticons = [" (´・ω・｀)", " X3", " :3", " (人◕ω◕)", " ˃ᆺ˂"]
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  };

  const regex1 = /(r|l)/gi
  let uwu = "";

  uwu = english.replace(regex1, "w");
  uwu = uwu.replace("you", "uwu");
  uwu = uwu.replace("to", "tuwu")
  uwu = uwu.replace("can", "cawn");
  uwu += emoticons[randomNumber(0, emoticons.length)]

  message.channel.send({ content: uwu })
}

module.exports.data = {
  name: "uwu",
  description: "translates any english to uwu. you have full right to be concerned about my mental health.",
  category: "Experimental",
  aliases: "uwu",
  requires: "A mental illness",
  usage: "uwu <english>",
  example: "uwu hi i am stupid"
}