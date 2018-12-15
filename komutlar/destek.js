const Discord = require('discord.js');
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__DESTEK__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **?talep** - Bir talep odası açılarak şikayetlerinizi belirtebilirsiniz.. \n"
        +                        
        "❯ **?canlıdestek** - Canlıdestek talebi yollarsınız. \n"     
        +                        
        "❯ **?yapımcı** - Botun yapımcısını gösterir. \n" 
        )
       .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=507596455947796481&scope=bot&permissions=1064811583) | ")
    message.channel.send(kategoriEmbed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Tüm komutları gösterir.',
  usage: 'destek'
};