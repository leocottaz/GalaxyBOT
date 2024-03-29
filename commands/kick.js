const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.some(r => ["Alpha"].includes(r.name)))
    return message.channel.send("Manque du rôle Alpha");

  let kUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kUser) return message.channel.send("Utilisateur introuvable");

  let kReason = args.join(" ").slice(1);
  if (!kReason)
    return message.channel.send("Metter une raison valable à ce kick");

  let kickEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Kick")
    .addField("Membre Kick", `${kUser} with ID : ${kUser.id}`)
    .addField(
      "Kick par",
      `<@${message.author.id}> with ID : ${message.author.id}`
    )
    .addField("Kick Channel", message.channel)
    .addField("Kick le", message.createdAt)
    .addField("Raison", kReason);

  let bChannel = bot.channels.get(`545301216515850250`);
  if (!bChannel) return message.channel.send("Manque du channel Logs Alpha");

  message.guild.member(kUser).ban(kReason);
  bChannel.send(kickEmbed);
};
module.exports.help = {
  name: "kick"
};
