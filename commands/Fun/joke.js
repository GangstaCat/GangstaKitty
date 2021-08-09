module.exports.run = async (bot, message, args) => {
  const { MessageEmbed } = require('discord.js');
  const jokes = ["My dad said people shouldn’t get ribbons just for participating because it rewards them for losing. So I took down his confederate flag",
    "How do you fix a broken gorilla? With a monkey wrench.",
    "I'm so bored that I just memorized six pages of the dictionary. I learned next to nothing.",
    "My wife beamed at me with pride and said, \"Wow! I never thought our son would go that far!\" I said, \"This catapult is amazing! Go get our daughter\"",
    "Give a man a gun and he’ll rob a bank. Give a man a bank and he’ll rob everyone.",
    "Dad can you explain to me what a solar eclipse is? No sun.",
    "What is a Karen called in Europe? An American.",
    "I saw a girl crying, so I asked her \"Where are your parents?\" and she started crying even more. Man, I love working at the orphanage.",
    "What's the difference between a musician and a large pizza? A large pizza can feed a family of four.",
    "What did one butt cheek say to the other? \"Between you and me it stinks in here\"",
    "Not to brag, but I defeated our local chess champion yesterday in less than 5 moves. Finally my high school karate classes came in useful.",
    "Why did Karen press CTRL + Alt + Delete? She wanted the Task Manager.",
    "I was struggling to get my wife's attention. So I sat down on the couch and looked comfortable, that did the trick.",
    "GangstaKitty will some day get verified"];

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  };

  const randomJoke = randomNumber(0, jokes.length);

  let jokeString = jokes[randomJoke];

  const jokeEmbed = new MessageEmbed()
    .setTitle("Joke")
    .setDescription(jokeString)
    .setColor("#007DFF")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));
  message.channel.send(jokeEmbed)
}

module.exports.data = {
  name: "joke",
  description: "Tells you a random joke",
  category: "Fun",
  aliases: ["j", "jk"],
  requires: "none",
  usage: ["joke"],
  examples: ["joke"]
}