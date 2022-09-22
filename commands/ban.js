const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans a user from the server")
    .addMentionableOption(option => option.setName("target").setDescription("The member to ban").setRequired(true))
    .addStringOption(option => option.setName("reason").setDescription("Why should this member be banned?"))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    const member = interaction.options.getMentionable("target")
    let reason = interaction.options.getString("reason")

    if (!reason) {
      reason = "unspecified"
    }
    const embed = new EmbedBuilder()
      .setTitle(`You were banned from ${interaction.guild.name}`)
      .setDescription(`For: ${reason}`)
      .setColor([0, 125, 255])

    await member.user.send({ embeds: [embed] })
    member.ban({ reason: reason })
    await interaction.reply({ content: `You banned ${member} for: ${reason}`, ephemeral: true })
  }
}