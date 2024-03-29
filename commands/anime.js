const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports.run = async (bot, message, args) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`Résultat de la recherche ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .setImage(data.picture)
      .addField('📌 Titre anglais', `${data.englishTitle}`, true)
      .addField('📍 Titre Japonais', `${data.japaneseTitle}`, true)
      .addField('🔖 Type', `${data.type}`, true)
      .addField("🔎 Nombre d'épisode", `${data.episodes}`, true)
      .addField('✏️ Note', `${data.rating}`, true)
      .addField('📅 Paru le', `${data.aired}`, true)
      .addField('🗳 Score', `${data.score}`, true)
      .addField('📇 Statistiques', `${data.scoreStats}`, true)
      .addField(':link: Lien', `${data.url}`);
     
      message.channel.send(malEmbed);
  console.log(`Une recharche a été éffectuer avec le service Anime : ${args}`)
      //console.log(data);
    })
    .catch((err) => 
         
           console.log(err));

}

module.exports.help = {
  name: "anime"
}