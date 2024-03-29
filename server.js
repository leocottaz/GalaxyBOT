const Discord = require("discord.js");
const Canvas = require("canvas");
const snekfetch = require("snekfetch");
const fs = require("fs");
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");
const DBL = require("dblapi.js");
const dbl = new DBL(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzNTExMzQ4ODEyNTc4ODE5MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTY4NDk1NzIwfQ.SNO95P1E9HCJH67FQCs1JOM9l5wHO_zmNJqU9jxcBYU",
  bot
);

// événements optionnels
dbl.on("posté", () => {
  console.log("Nombre de serveurs posté!");
});
dbl.on("error", e => {
  console.log(`Oops! $ {e}`);
});

bot.on("prêt", () => {
  setInterval(() => {
    dbl.postStats(bot.guilds.size, bot.shards.id, bot.shards.total);
  }, 1800000);
});

var prefix = "$";
var commands = {};

const express = require("express");
const app = express();

function getPrefix(guildID) {
  let prefix;
  try {
    prefix = bot.prefix[guildID].prefix;
  } catch (err) {
    prefix = botconfig.prefix;
  } 
  return prefix;
}

bot.prefix = require("./prefix.json");
bot.commands = new Discord.Collection();
bot.setMaxListeners(0);

app.get("/", (request, response) => {
  console.log("Ping reçu !");
  response.sendStatus(200);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

module.exports = { app };

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFonction = require(`./events/${file}`);
    let eventName = file.split("-")[0];
    console.log(`Évent ${file} chargé!`);

    bot.on(eventName, (...args) => eventFonction.run(bot, ...args));
  });
});

function loadCmds() {
  fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      console.log("Couldn't find commands !");
    }

    jsfile.forEach((f, i) => {
      delete require.cache[require.resolve(`./commands/${f}`)];
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });
}
loadCmds();
bot.on("message", message => {
  if (message.content === prefix + "reload") {
    let staff = ["435104377439780866", "282180259615342592"];
    if (staff.includes(message.author.id)) {
      loadCmds();
      message.channel.send("Commande reload");
      console.log("Commande redemarré");
    }
  }
});

bot.on("message", async message => {
  if (message.content.startsWith(botconfig.prefix + "prefix")) {
    message
      .reply(`Le prefix du serveur est: ${getPrefix(message.guild.id)}`)
      .then(msg => msg.delete(5000));
  }
  if (message.content.startsWith(botconfig.prefix + "resetprefix")) {
    delete bot.prefix[message.guild.id];
    fs.writeFile("./data/mutes.json", JSON.stringify(bot.prefix), err => {
      if (err) throw err;
      message
        .reply(
          `Le prefix du serveur a été réinitialisé, il est maintenant: ${getPrefix(message.guild.id)}`)
        .then(msg => msg.delete(5000));
    });
  }

  var author = message.author.id;
  if (
    botconfig.singleCommand.includes(message.content) &&
    botconfig.ownerid.includes(author)
  ) {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(botconfig.prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
  } else if (message.author.bot || message.channel.type === "dm") return
  if (message.content.startsWith(getPrefix(message.guild.id))) {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile =
      bot.commands.get(cmd.slice(getPrefix(message.guild.id).length)) ||
      bot.commands.get(
        bot.aliases.get(cmd.slice(getPrefix(message.guild.id).length))
      );
    if (commandfile) commandfile.run(bot, message, args);
  }
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne !`);
  setInterval(changing_status, 15000);

  
 
  function changing_status() {
    let status = [
      `prefix: $ | ${bot.guilds.cache.size} serveurs`,
      "prefix: $ | 1.2.0",
      `prefix: $ | ${bot.users.cache.size} users`
    ];
   /* let status = [`Joyeuse fin d'année ! | J - 4`]*/
    let random = status[Math.floor(Math.random() * status.length)];

    bot.user.setActivity( random , {
      type: "STREAMING",
      url: "https://www.twitch.tv/something%22%7D"
    });
  }
});


//Message de bienvenue
bot.on("guildMemberAdd", member => {
  let serverIcon = member.guild.iconURL;
    var bvn_embed = new Discord.MessageEmbed()
    .setDescription(
      `:tada: ${member.user.username} a rejoint le serveur :tada:`
    )
    .addField(
      `:tada: Nous sommes désormais ${member.guild.memberCount}`,
      "Bienvenue a toi ! :tada:"
    )
    .setColor("#66c2ff")
    .setThumbnail(serverIcon)
    .setTimestamp()
    .setFooter(member.guild.name); //bas de page
  const channel = JSON.parse(fs.readFileSync("./welcome.json"));

  if (!channel[member.guild.id]) return;

  member.guild.channels.cache.find(ch => ch.id === channel[member.guild.id]).send(bvn_embed);
  
});

//Message de au revoir
bot.on("guildMemberRemove", member => {
  let serverIcon = member.guild.iconURL;
  var bye_embed = new Discord.MessageEmbed()
    .setDescription(`:cry: ${member.user.username} a quitté ${member.guild.name} :cry:`)
    .addField(
      `:cry: Nous sommes désormais ${member.guild.memberCount}`,
      " Nous souhaitons qu'il reviennent ! :cry:"
    )
    .setColor("#66c2ff")
    .setThumbnail(serverIcon)
    .setTimestamp()
    .setFooter(member.guild.name); //bas de page
    const channel = JSON.parse(fs.readFileSync("./leave.json"));

  if (!channel[member.guild.id]) return;

  member.guild.channels.cache.find(ch => ch.id === channel[member.guild.id]).send(bye_embed);
  
  if (!channel) return;

});

bot.on("message", async message => {
  if (message.channel.type === "dm")
    return "Les MP sont désactiver sur ce BOT désoler ! Pour pouvoir me MP demander a Galaxy Gamer#7689 ! Il vous débloqueras.";
});

const setupCMD = "$notif";
let initialMessage =
  "@everyone **Mettez des réactions aux messages ci-dessous pour recevoir le rôle y étant associé. Si vous souhaitez vous supprimer le rôle, supprimez juste la réaction.**";
const roles = [
  "『Notif Nouveautés』",
  "『Notif Partenariat 』",
  "『Notif Annonces 』",
  "『Notif Informations 』",
  "『Notif Giveaways』",
  "『Notif Sondage』"
];
const reactions = ["📊", "📯", "📍", "📰", "💰", "📊"];
if (roles.length !== reactions.length)
  throw "La liste des rôles et celle des réactions ne sont pas de tailles égales!";

function generateMessages() {
  var messages = [];
  messages.push(initialMessage);
  for (let role of roles)
    messages.push(`Réagissez ci-dessous pour avoir le role **"${role}"** !`);
  return messages;
}

bot.on("message", message => {
  if ((message.author.id == "435104377439780866", "282180259615342592")) {
    if (message.content.toLowerCase() == setupCMD) {
      var toSend = generateMessages();
      let mappedArray = [
        [toSend[0], false],
        ...toSend.slice(1).map((message, idx) => [message, reactions[idx]])
      ];
      for (let mapObj of mappedArray) {
        message.channel.send(mapObj[0]).then(sent => {
          if (mapObj[1]) {
            sent.react(mapObj[1]);
          }
        });
      }
    }
  }
});

bot.on("guildDelete", async guild => {
  let guildDeleteChannel = bot.guilds.get(guild.id).channels.get(`632317931082088460`);
if(!guildDeleteChannel) return;
  const leaveEmbed = new Discord.MessageEmbed()
    .setTitle("On m'a expulser ")
    .setColor("FAAC58")
    .setThumbnail(guild.iconURL)
    .addField(
      " Info du serveur ",
      ` Nom: **${guild.name}** \n Propriétaire: <@${guild.ownerID}> (**${guild.owner.user.username}**#${guild.owner.user.discriminator}) \n Membres: **${guild.memberCount}** \n ID: **${guild.id}**`
    );
  return guildDeleteChannel.send(leaveEmbed);
});

bot.on("guildCreate", async guild => {
  let guildCreateChannel = bot.channels.get(`632317931082088460`);

  const joinEmbed = new Discord.MessageEmbed()
    .setTitle(" On m'a ajouté ")
    .setColor("FAAC58")
    .setThumbnail(guild.iconURL)
    .addField(
      "Info du serveur ",
      `Nom: **${guild.name}** \n  Propriétaire: <@${guild.ownerID}> (**${guild.owner.user.username}**#${guild.owner.user.discriminator}) \n Membres: **${guild.memberCount}** \n ID: **${guild.id}**`
    );

  return guildCreateChannel.send(joinEmbed);
});

bot.on("raw", event => {
  if (
    event.t === "MESSAGE_REACTION_ADD" ||
    event.t == "MESSAGE_REACTION_REMOVE"
  ) {
    let channel = bot.channels.get(event.d.channel_id);
    let message = channel.fetchMessage(event.d.message_id).then(msg => {
      let user = msg.guild.members.get(event.d.user_id);

      if (msg.author.id == bot.user.id && msg.content != initialMessage) {
        var re = `\\*\\*"(.+)?(?="\\*\\*)`;
        var role = msg.content.match(re)[1];

        if (user.id != bot.user.id) {
          var roleObj = msg.guild.roles.find(r => r.name === role);
          var memberObj = msg.guild.members.get(user.id);

          if (event.t === "MESSAGE_REACTION_ADD") {
            memberObj.addRole(roleObj);
          } else {
            memberObj.removeRole(roleObj);
          }
        }
      }
    });
  }
});

//FIN
bot.login(process.env.TOKEN);