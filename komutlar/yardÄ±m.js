const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = 'dve!';

exports.run = (client, message) => {
  {
    let kategoriEmbed = new Discord.RichEmbed()
    
      .setTitle("__YARDIM__")
      .setThumbnail(message.author.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
                      "**?eğlence** - Eğlence ve Kulanıcı komutlarını gösterir. \n" +
                      "**?anakomutlar** - Ana komutları Gösterir. \n" +
                      "**?yetkili** - Yetkili komutlarını gösterir. \n" +
                      "**?müzik** - Müzik komutlarını gösterir. \n" +
                      "**?destek** - Destek komutlarını gösterir. \n"
                     )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=507596455947796481&scope=bot&permissions=1064811583) | ")
    message.channel.send(kategoriEmbed)  
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y','komutlar','k'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};