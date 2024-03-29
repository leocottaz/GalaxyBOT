const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
  var color = ["rouge","magenta","or","jaune","vert"
               ,"pomme","cyan","azur","bleu","rose","violet"
               ,"blanc","gris","noir"];
  //message.reply(args[0].length);
  message.delete().catch();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire cela !");

  if(args[0] == null){ return message.reply("Syntaxe Incorrecte, les couleurs disponibles sont: " + color.join(", ") + "\n exemple, \"$send rouge votreMessage\" \nou, entrez une couleur hexadécimale, exemple: \"$say #AA0000 votreMessage\"");
  }
  if((!color.includes(args[0])) && (!args[0].startsWith("#"))){
    return message.channel.send("Syntaxe Incorrecte, les couleurs disponibles sont: " + color.join(", ") + "\n exemple, \"$send rouge votreMessage\" \nou, entrez une couleur hexadécimale, exemple: \"$say #AA0000 votreMessage\"");
  }
  
  if(color.includes(args[0])){
    var botmsg = args.join(" ");
    var ms = botmsg.replace(args[0]+" ","");
    
    var say_embed = new Discord.MessageEmbed()
      .setColor("#"+getColor(args[0]))
      .setDescription(ms)
   
  message.channel.send(say_embed)
    return;
  }
  
  if(args[0].startsWith("#")){
    if(args[0].length == 7){
      
      var botmsg = args.join(" ");
      var ms = botmsg.replace(args[0]+" ","");
    
    var say_embed = new Discord.RichEmbed()
      .setColor(args[0])
      .setDescription(ms)
      
    message.channel.send(say_embed)
      
      return;
    } else {
      message.reply("Syntaxe de couleur incorrecte. Choisisez une couleur en hexadécimal, exemple: \"$send #AA0000 votre message\"")
    }
    return;
  }
console.log(`Send demandée : ${ms} en ${args[0]} `)

}

module.exports.help = {
    name: "send",
  aliases: []
}

/*rouge","magenta","or","jaune","vert"
               ,"pomme","cyan","azur","bleu","rose","violet"
               ,"blanc","gris","noir"];*/


function getColor(color){
  if(color == "rouge") return "AA0000";
  if(color == "magenta") return "FF5555";
  if(color == "or") return "FFAA00";
  if(color == "jaune") return "FFFF55";
  if(color == "vert") return "00AA00";
  if(color == "pomme") return "55FF55";
  if(color == "cyan") return "55FFFF";
  if(color == "azur") return "00AAAA";
  if(color == "bleu") return "5555FF";
  if(color == "rose") return "FF55FF";
  if(color == "violet") return "AA00AA";
  if(color == "blanc") return "FFFFFF";
  if(color == "gris") return "AAAAAA";
  if(color == "noir") return "000000";
  return null;
}