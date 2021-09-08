module.exports.run = async (bot, message, args) => {
  const tabbyCats = ["http://tabbycats.club/cat/4jw9a8",
    "http://tabbycats.club/cat/xsguqz",
    "http://tabbycats.club/cat/72te9e",
    "http://tabbycats.club/cat/25ui31",
    "http://tabbycats.club/cat/j6ptv1",
    "http://tabbycats.club/cat/89f3d9",
    "http://tabbycats.club/cat/d3h71j",
    "http://tabbycats.club/cat/08b16v",
    "http://tabbycats.club/cat/010r7b",
    "http://tabbycats.club/cat/j6fa18",
    "http://tabbycats.club/cat/8k40z0",
    "http://tabbycats.club/cat/mzi4yn",
    "http://tabbycats.club/cat/9m2i23",
    "http://tabbycats.club/cat/c6w9j0"];

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  };

  const randomCat = randomNumber(0, tabbyCats.length);
  const catString = tabbyCats[randomCat];

  message.channel.send({ content: catString });
}

module.exports.data = {
  name: "tabbycat",
  description: "A random cat from the Tabby Cat Chrome extension",
  category: "Fun",
  aliases: ["tc"],
  requires: "none",
  usage: "tabbycat",
  examples: "tabbycat"
}