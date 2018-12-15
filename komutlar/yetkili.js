const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__YETKİLİ__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **?at** = İstediğiniz kişiyi sunucudan atar.\n"
        +                        
        "❯ **?yasakla** = İstediğiniz kişiyi sunucudan yasaklar.\n"
        +                        
        "❯ **?unban** = İstediğiniz kişinin banını açar. \n"        
        +
        "❯ **?temizle** =  Belirttiğiniz kadar mesaj siler. \n"
        +
        "❯ **?duyuru** = Güzel bir duyuru görünümü sağlar. \n"
        +
        "❯ **?oylama** = Oylama Açar \n"        
        +     
        "❯ **?sustur** = @Kişi sustur. \n"
        +
        "❯ **?kilit** = Yazı kanalını istediğiniz süre boyunca dondurur. \n"
        +
        "❯ **?roller** = Rolleri Gösterir. \n"
        +
        "❯ **?uyar** = Belirtiğiniz kişiyi Uyarır \n"
        +
        "❯ **?geçici-sustur** = @Kişi istediğiniz süre boyunca susturur. \n"
        +
        "❯ **?yazı-kanal-aç** = Yazı Kanalı Açmana Yardımcı Olur. \n"
        +
        "❯ **?ses-kanal-aç** = Ses Kanalı Açmana Yardımcı Olur. \n"
        +
        "❯ **?oto-rol-ayarla** = Discord Sunucunuza Gelen Kişilere Belirttiğiniz Rol Verir. \n"
        +
        "❯ **?sayaç-kanal-ayarla** = Discord'da Belirtiğin Sayı Log Atar. \n"
        +
        "❯ **?sayaç-ayarla** = ÖRN : d?sayaç-ayarla 15 \n"
        +
        "❯ **?prefix-ayarla** = ÖRN : Botun Önk Ek Ayarlamanı Sağlar. \n"
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
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};
