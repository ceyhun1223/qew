const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Youtube Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Youtube__----------------------**`,`> \`c.abone-mesaj #kanal\`\nAbone mesaj kanalını belirler\n\n> \`c.abone-rol @rol\`\nAbone rolünü ayarlar\n\n> \`c.abone-sorumlusu @rol\`\nAbone Sorumlusu rolünü ayarlar\n\n> \`c.abone @üye\`\nÜyeye abone rolü verir`)
    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0  
};

exports.help = { 
  name: 'youtube', 
  description: '',
  usage: '',
};