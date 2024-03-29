const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var nbre = ["1", "2"];
  var nbe = 1;
var page = args.join(" ");

  var dispo = new Discord.MessageEmbed()
    .setColor("#FE0101")
    .addField(
      "Erreur",
      "Cette page n'est pas disponible ! \nDisponible : " + nbre.join(" | ")
    );

  

  var un = new Discord.MessageEmbed()
    .setColor("#FE0101")
    .addField(
      "**__👋 Bonjour/Bonsoir à toi,__**",
      "\n**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n\n**Tu souhaiterais découvrir un bot de modération, de divertissement, et une blacklist et plein d'autre chose...**\n\nJe vous présente le bot `TRIDENT`.\nLe bot qui a pour but, de faire à la fois la sécurité, du fun, du divertissement sur ton serveur. En résumé, presque la totale de se que tu cherche.\n\n**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n\n-> Des images et du fun,\n-> Modération, administration, et bien plus encore,\n-> Une blacklist, anti-insultes, logs, système de bvn et aurevoir,\n-> Le staff est a l'écoute,\n-> Une version premium incluse.\n\n**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n\nLe créateur du bot : `[TD] Mr CHAT#3742`\nLien d'invitation : https://discordapp.com/oauth2/authorize?client_id=553700030289149975&permissions=8&scope=bot \nLien du support : https://discord.gg/BNDY4Aj\n\n**━━━━━━━━━━━━━━━━━━━━━━━━━━━━**\n\n🏕 Et je te souhaite une bonne journée/soirée à toi.`\n\n`🔨 Cordialement, toute l'équipe du staff."
    )
    .setTimestamp()
    .setFooter(`Page ${page}/${nbe}`);

  if (page === 1) {
    message.channel.send(un);
  }

  var deux = new Discord.MessageEmbed()
    .setColor("#FE0101")
    .addField(
      "Oh ! Salut jeune gamer !",
      "Hmmmm... Je me dis... Tu cherches un serveur Discord fait par des **gamers** pour des **gamers**?\n\nNe cherches plus ! Si tu lis ce message, tu es chanceux ! **__Je viens te présenter le meilleur serveur pour les gamers__** !\n\n***__~~ ~~~ ~~__***\n\nIl s'appelle __Yololpub Team__ !\nLe discord a :\n\n**:video_game:** Des salons **Gaming** (Minecraft, Fortnite...)\n**:tada:** Des tas de GiveAways !\n**:robot:** Des Bots ! On en ajoute au fur et à mesure !\n**:busts_in_silhouette:** Des membres **sympas** ! Et nous recherchons des **partenaires... YouTubers...**\n**:clipboard:** Des salons et des catégories **bien rangées** !\n**:helmet_with_cross:** Un support réactif !\n**:ear:** Un staff à l'**écoute** des __joueurs__ !\n**:pencil:** Les recrutements sont ouverts !\n**:shopping_cart:** Des grades qui s'obtiennent **en __parlant__ beaucoup** !\n**:open_file_folder:** Les __*règles*__ sont bien **organisées** ! \n\nQu'attends-tu ? **Direction 100 membres** ! :100:\n**Lien :** :link: https://discord.gg/3eaXXjf"
    )
    .setTimestamp()
    .setFooter(`Page ${page}/${nbe}`);
  if (page === 2) {
    message.channel.send(deux);
  }

  var autre = new Discord.MessageEmbed()
    .setColor("#FE0101")
    .addField(
      "Erreur",
      "Vous avez mit autre chose qu'une page.. \n Disponible : " +
        nbre.join(" | ")
    );
  if (isNaN(page)) {
    message.channel.send(autre);
  }

  if (page > nbe) {
    message.channel.send(dispo);
    message.delete().catch();
  }
  
  var oubli = new Discord.MessageEmbed()
    .setColor("#FE0101")
    .addField(
      "Erreur",
      "Vous n'avez pas mit de numéro de page.. \n Disponible : " +
        nbre.join(" | ")
    );
  if (!page) {
    message.channel.send(oubli);
  }

  console.log("La commande Partenaire a été utiliser !");
  message.delete().catch();

};
module.exports.help = {
  name: "partenaire"
};
