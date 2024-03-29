const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
	
message.delete();

if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande.").then(msg => msg.delete(5000));
if(!message.guild.member(client.user.id).hasPermission('MANAGE_CHANNELS')) return message.channel.send("⚠️ Mon accès est refusé pour paramétrer se salon.").then(m => m.delete(5000));

    let slowmodetemp = args[0]
    if(!slowmodetemp) return message.channel.send("⚠️ Veuillez indiquer quel temp voulez vous mettre en mode ralenti sur se salon ! Ou, si vous voulez enlevé le mode ralenti via la commande : `n?slowmode off`.").then(m => m.delete(8000));
    if(args[0] === "off") {
    if(message.channel.rateLimitPerUser === 0) return message.channel.send("⚠️ Le salon n'a pas de mode ralenti.").then(m => m.delete(5000));

message.channel.edit({
rateLimitPerUser: false
}).catch((err) => {
 var erreur_msg = new Discord.MessageEmbed()
.setTitle("⚠️ [ERREUR]")
.addField("[L'ERREUR]", err)
.setFooter("Erreur détecté !")
.setColor("#CC0033")
message.channel.send(erreur_msg).then(m => m.delete(5000));
})

message.channel.send("✅ Le slowmode à bien été désactivé !")

    	} else {
    if(message.channel.rateLimitPerUser === 0 && slowmodetemp === "0") return message.channel.send("⚠️ Le salon n'a déjà pas de mode ralenti.").then(m => m.delete(5000));
    if(slowmodetemp < 1 || slowmodetemp > 10800) return message.channel.send("⚠️ Merci d'indiquer un nombre entre 1 et 10800 ! (calcul en seconds)").then(m => m.delete(5000));

message.channel.edit({
rateLimitPerUser: `${slowmodetemp}`
}).catch((err) => {
 var erreur_msg = new Discord.MessageEmbed()
.setTitle("⚠️ [ERREUR]")
.addField("[L'ERREUR]", err)
.setFooter("Erreur détecté !")
.setColor("#CC0033")
message.channel.send(erreur_msg).then(m => m.delete(5000));
})

message.channel.send("✅ Le Mode Ralenti est maintenant activé sur <#" + message.channel.id + "> avec le temps qui est de " + slowmodetemp[0] + "s.")

}
}

module.exports.help = {
	name:"slowmode",
	categorie: "Administration.",
	perms: "Il faut pouvoir gérer les salons.",
	usage: "$slowmode",
	description: "Permet de mettre le mode ralenti sur un salon."
} 