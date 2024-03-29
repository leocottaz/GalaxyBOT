const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**__Nom__**", message.guild.name, true)
        .addField("**__ID__**", message.guild.id, true)
        .addField("**__Propriétaire__**", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("**__Région__**", region[message.guild.region], true)
        .addField("**__Membres__**", `${message.guild.members.size}`, true)
        .addField("**__Utilisateurs__**", `${message.guild.members.filter(member => !member.user.bot).size} `, true)
        .addField("**__Bot__**", `${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("**__Niveau de vérification__**", verifLevels[message.guild.verificationLevel], true)
        .addField("**__Salons__**", message.guild.channels.size, true)
        .addField("**__Rôles__**", message.guild.roles.size, true)
        .addField("**__Date de création__**", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL())
    message.channel.send({embed});
}

module.exports.help = {
     name: "serveur-info"
}