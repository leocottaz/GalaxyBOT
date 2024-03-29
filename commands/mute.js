const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefixes) => {
 
   let mutedrole = message.guild.roles.cache.find(m => m.name === "Muted");
  if(!mutedrole){
    try{
      mutedrole = await message.guild.createRole({
    name: "Muted",
    color: "#000000",
    permissions: []
})
message.guild.channels.forEach(async (channel, id) => {
    await channel.overwritePermissions(mutedrole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        
    });
});
        }catch(e){
        console.log(e.stack);
    }
}
    
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions de faire cela !")
    var mutedmember = message.mentions.members.first(); 
    if (!mutedmember) return message.channel.send("<a<a:no:571366267844427776>571366267844427776>Manque de mention")
    if (mutedmember.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a<a:no:571366267844427776>571366267844427776>Je ne peux pas mute cet utilisateur")
  
    var mutereasondelete = 10 + mutedmember.user.id.length;
    var mutereason = message.content.substring(mutereasondelete).split(" "); 
    var mutereason = mutereason.join(" ");
    if (!mutereason) return message.channel.send("Mettez une raison")
    mutedmember.addRole(mutedrole) 
        .catch(error => message.channel.send(`Désolé ${message.author} je ne peux pas mute cet utilisateur car : ${error}`)); 
        message.channel.send(`${mutedmember.user} a été mute par ${message.author} pour la raison : **${mutereason}**`); 

        console.log("Mute demandé !")

}



module.exports.help = {
    name: "mute"
}