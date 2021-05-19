const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Eğlence Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek i.in `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Eğlence__----------------------**`,`> \`c.ara155\`\n> \`c.tkm\`\n> \`c.balıktut\`\n> \`c.delete\`\n> \`c.zula-deste-aç\`\n> \`c.kasaaç\`\n> \`c.efkarım\`\n> \`c.kralol\`\n> \`c.slots\`\n> \`c.döv\`\n> \`c.sor\`\n> \`c.trump\`\n> \`c.soygun-yap\`\n`)
    message.channel.send(yardim)
    };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0  
};

exports.help = { 
  name: 'eğlence', 
  description: '',
  usage: 'eğlence',
};