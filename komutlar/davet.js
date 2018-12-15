const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** @!   HayDoMC#3548")
  .setFooter('HayDo BOT | HayDo BOT', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=517377361952505858&scope=bot&permissions=393739327)` + "**\n**"+`[Bota Oyver](https://discordbots.org/bot/507596455947796481)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/D6J2wAB)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=517377361952505858&scope=bot&permissions=393739327')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
