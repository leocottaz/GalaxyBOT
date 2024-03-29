const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefixes) => {

    /*let staff = ["identifiant a mettre comme staff", "encore ici", "et la si yen a besoin"];
    if(!staff.includes(message.author.id)) return;*/

        let min  = 0;
        let max = 10;
        let guilds = await message.channel.send(`${bot.users.size} \n` + bot.guilds.sort((a, b) => b.memberCount - a.memberCount).map(r => r).map((r, i) => `[${i + 1}] • **${r.name.toString()}** (${r.memberCount} membres)`).slice(0, 10).join('\n'));

        await guilds.react("◀");
        await guilds.react("⏹");
        await guilds.react("▶");

        const collector = guilds.createReactionCollector((reaction, user) => user.id === message.author.id);

        collector.on("collect", async(reaction) => {
            if(reaction.emoji.name === "◀") {
                min = min - 10;
                max = max - 10;

                if(min < 0) {
                    return guilds.delete();
                }

                if(min === undefined || max === undefined) {
                    return guilds.delete();
                }

                guilds.edit(bot.guilds.sort((a, b) => b.memberCount - a.memberCount).map(r => r).map((r, i) => `[${i + 1}] • **${r.name.toString()}** (${r.memberCount} membres)`).slice(min, max).join('\n'));
            }

            if(reaction.emoji.name === "⏹") {
                return guilds.delete();
            }

            if(reaction.emoji.name === "▶") {
                min = min + 10;
                max = max + 10;

                if(min > bot.guilds.size + 10) {
                    return guilds.delete();
                }

                if(min === undefined || max === undefined) {
                    return guilds.delete();
                }

                guilds.edit(bot.guilds.sort((a, b) => b.memberCount - a.memberCount).map(r => r).map((r, i) => `[${i + 1}] • **${r.name.toString()}** (${r.memberCount} membres)`).slice(min, max).join('\n'));
            }

            await reaction.remove(message.author.id).catch((err) => {
                if(err) {
                    return message.author.send(`Une erreur est survenue : ${err}`);
                }
            });
        });
    };

module.exports.help = {
    name: "liste"
}