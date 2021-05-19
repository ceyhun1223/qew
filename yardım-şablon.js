const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Şablon Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("hhttps://cdn.discordapp.com/attachments/811533768555757568/818079866845921290/cyrexmorgifim.gif")
    .addField(`**----------------------__Şablon__----------------------**`,`
> \`c.uptime-destek-tema\` Uptime teması atar
> \`c.atlantis-tema\` Atlantis teması atar
> \`c.altyapı-teması\` Altyapı teması atar
> \`c.oyun-tema\` Oyun teması atar`)

    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sablon-yardim"],
  permLevel: 0  
};

exports.help = { 
  name: 'şablon-yardım', 
  description: '',
  usage: '',
};