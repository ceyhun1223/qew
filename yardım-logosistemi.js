const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Logo Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Logo Sistemi__----------------------**`,`
> \`c.arrow\` Ok şeklinde logo yapar
> \`c.gold\` Altın şeklinde logo yapar
> \`c.green\` Yeşil şeklinde logo yapar
> \`c.grafiti\` Grafiti şeklinde logo yapar
`)

    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["logosistemi"],
  permLevel: 0  
};

exports.help = { 
  name: 'logo-sistemi', 
  description: '',
  usage: '',
};