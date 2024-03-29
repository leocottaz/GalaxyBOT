const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 
  
 message.delete()
 
  let google = args.slice(0).join('+');
  if(!google) {
    message.channel.send("Vous n'avez inserer aucune recherche.")
  } else {
        if(google.lenght > 900) {
             message.channel.send("Votre recherche est trop longue, *Abreger :joy:*.");
    } else {
      var embed = new Discord.MessageEmbed()
  .setColor("00FFFF")
  .addField("Voici le résultat de ta recherche !", `https://google.com/#q=${google}`)
  .setThumbnail("https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png")
  message.channel.send(embed);
    }
  
         }
  
  console.log ("La commande Google a été utiliser !");  
}
module.exports.help = {
    name: "google"
}