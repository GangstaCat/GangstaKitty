const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick any member of a server")
    .addMentionableOption(option => option.setName("target").setDescription("The member you want to kick").setRequired(true))
    .addStringOption(option => option.setName("reason").setDescription("Why should this member be kicked?"))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    const member = interaction.options.getMentionable("target")
    let reason = interaction.options.getString("reason")

    if (!reason) {
      reason = "unspecified"
    }
    const embed = new EmbedBuilder()
      .setTitle(`You were kicked from ${interaction.guild.name}`)
      .setDescription(`For: ${reason}`)
      .setColor([0, 125, 255])

    await member.user.send({ embeds: [embed] })
    member.kick({ reason: reason })
    await interaction.reply({ content: `You kicked ${member} for: ${reason}`, ephemeral: true })
  }
}