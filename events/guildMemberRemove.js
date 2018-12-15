const Discord = require('discord.js');
module.exports = member => {
    const channel = member.guild.channels.find('name', 'gelen-giden');
    if (!channel) return;
   const embed = new Discord.RichEmbed()
};
