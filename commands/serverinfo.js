const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("All the info about the server you're in"),
  async execute(interaction) {
    const guildName = interaction.guild.name;
    const guildID = interaction.guild.id;
    const guildCreation = interaction.guild.createdAt;
    const guildDescription = interaction.guild.description;
    const guildMemberCount = interaction.guild.memberCount;
    const guildIcon = interaction.guild.iconURL({ dynamic: true });
    const guildboosts = interaction.guild.premiumSubscriptionCount;
    const guildChannels = interaction.guild.channels.cache.size;
    const guildChannelsNoThreads = interaction.guild.channels.channelCountWithoutThreads;

    const embed = new EmbedBuilder()
      .setTitle(guildName)
      .setThumbnail(guildIcon)
      .setColor("#007DFF")
      .setDescription(`**Server Description:** ${guildDescription} \n**Server ID:** ${guildID} \n**Time created:** ${guildCreation} \n**Amount of boosts:** ${guildboosts}/14\n**Amount of members:** ${guildMemberCount}`)
      .addFields({ name: "Channels", value: `Amount of channels: ${guildChannels} \nAmount of channels (Threads excluded): ${guildChannelsNoThreads}` });

    await interaction.reply({ embeds: [embed] })
  }
}