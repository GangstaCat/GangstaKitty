const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Get all the info of a specific user, or yourself")
    .addMentionableOption(option => option.setName("member").setDescription("The member to get the info of")),
  async execute(interaction) {
    const member = interaction.options.getMentionable("member");
    if (!member) {
      const memberRoles = interaction.member.roles.cache
        .filter((roles) => roles.id !== interaction.guild.id)
        .sort((a, b) => b.position - a.position)
        .map((role) => role.toString());

      const embed = new EmbedBuilder()
        .setTitle(interaction.member.user.tag)
        .setColor(interaction.member.displayHexColor)
        .setThumbnail(interaction.member.displayAvatarURL({ dynamic: true }))
        .setDescription(`**User ID:** ${interaction.member.user.id} \n<@${interaction.member.user.id}> \n**Color:** ${interaction.member.displayHexColor} \n**Joined:** ${interaction.member.joinedAt} \n**Registered:** ${interaction.member.user.createdAt} \n**Roles - ${memberRoles.length}** \n ${memberRoles}`);

      await interaction.reply({ embeds: [embed] })
    } else {
      const memberRoles = member.roles.cache
        .filter((roles) => roles.id !== interaction.guild.id)
        .sort((a, b) => b.position - a.position)
        .map((role) => role.toString());

      const embed = new EmbedBuilder()
        .setTitle(member.user.tag)
        .setColor(member.displayHexColor)
        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
        .setDescription(`**User ID:** ${member.user.id} \n<@${member.user.id}> \n**Color:** ${member.displayHexColor} \n**Joined:** ${member.joinedAt} \n**Registered:** ${member.user.createdAt} \n**Roles - ${memberRoles.length}** \n ${memberRoles}`);

      await interaction.reply({ embeds: [embed] })
    }
  }
}