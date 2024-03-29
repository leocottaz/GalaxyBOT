const Discord = require ("discord.js");


module.exports.run = async (bot, message, args) => {
try{
	
if(message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
message.delete();
}
	
	if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("⚠️ Je n'ai pas la permission de gérer les salons.").then(m => m.delete(5000));
	if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande.").then(msg => msg.delete(5000));
	
    const user_bot = message.guild.members.filter(m => m.user.bot).size;
    
    let categorie = message.guild.channels.find(ch => ch.name === '📊 STATISTIQUES DU SERVEUR' && ch.type === 'category')
    if(!categorie) {
        message.guild.createChannel('📊 STATISTIQUES DU SERVEUR', { type: 'category'})
    }
    
    const flit = message.guild.channels.find(ch => ch.name.startsWith('🤖 Bots :'))
    
    if(flit === null) {
        message.guild.createChannel(`🤖 Bots : ${user_bot}`, 'voice').then(async m => {
    	await m.setParent(categorie)
    	await m.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "CONNECT": false });
    	});
    message.channel.send("✅ Salon de statistiques `bots` à bien été créé.")
    } else {
        flit.setName(`🤖 Bots : ${user_bot}`)
        message.channel.send("✅ Salon de statistiques `bots` à bien été recharger.")
    }
    
}catch(e){
	
var erreur_msg = new Discord.RichEmbed()
.setTitle("⚠️ [ERREUR]")
.addField("[L'ERREUR]", e)
.setFooter("Erreur détecté !")
.setColor("#CC0033")
message.channel.send(erreur_msg).then(m => m.delete(5000));

}

}

module.exports.help = {
    name:"compteur-bots" 
}