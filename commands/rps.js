const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  var choice = args[0];
  if (choice == "papier" || choice == "p" || choice == "feuille") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "papier";
    } else if (numb => 66) {
      var choice2 = "pierre";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "ciseaux";
    }
    if (choice2 == "ciseaux") {
      var response = "Je choisis **ciseaux** :scissors:! J'ai gagnée!"
    } else if (choice2 == "papier") {
      var response = "Je choisis **papier** :page_facing_up:! Il y a égalité!"
    } else if (choice2 == "pierre"){
      var response = "Je choisis **pierre** :moyai:! J'ai perdu!"
    }
    message.channel.send(response);
  } else if (choice == "pierre" || choice == "r") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "papier";
    } else if (numb => 66) {
      var choice2 = "pierre";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "ciseaux";
    }
    if (choice2 == "papier") {
      var response = "Je choisis **papier** :page_facing_up:! J'ai gagnée!"
    } else if (choice2 == "pierre") {
      var response = "Je choisis **pierre** :moyai:! Il y a égalité!"
    } else if (choice2 == "ciseaux"){
      var response = "Je choisis **ciseaux** :scissors:! J'ai perdu!"
    }
    message.channel.send(response);
  } else if (choice == "ciseaux" || choice == "s") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "papier";
    } else if (numb => 66) {
      var choice2 = "pierre";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "ciseaux";
    }
    if (choice2 == "pierre") {
      var response = "Je choisis **pierre** :moyai:! J'ai gagnée!"
    } else if (choice2 == "ciseaux") {
      var response = "Je choisis **ciseaux** :scissors:! Il y a égalité!"
    } else if (choice2 == "papier"){
      var response = "Je choisis **papier** :page_facing_up:! J'ai perdu!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Utilisez $rps <pierre|papier|ciseaux>`);
  }
}
module.exports.help = {
  name: "rps"
}