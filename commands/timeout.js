const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Time out a member")
    .addMentionableOption(option => option.setName("target").setDescription("Who to time out").setRequired(true))
    .addStringOption(option => option.setName("time").setDescription("For how long to time out the user").setRequired(true))
    .addStringOption(option => option.setName("reason").setDescription("Why should this member be timed out?"))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const member = interaction.options.getMentionable("target");
    const time = interaction.options.getString("time");
    let reason = interaction.options.getString("reason");
    if (!reason) reason = "unspecified";

    const embed = new EmbedBuilder()
      .setTitle(`You've been timed out in ${interaction.guild.name} for ${ms(ms(time))}`)
      .setDescription(`For: ${reason}`)
      .setColor([0, 125, 255])

    member.timeout(ms(time), reason)
    member.user.send({ embeds: [embed] })
    await interaction.reply({ content: `You timed out ${member} for ${ms(ms(time))}: ${reason}`, ephemeral: true })

  }
}