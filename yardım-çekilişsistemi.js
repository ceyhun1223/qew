const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Çekiliş Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Çekiliş__----------------------**`,`
> \`c.çekiliş\` Çekiliş başlatır
> \`c.reroll\` Çekilişi yeniden çeker
> \`c.çekilişbitir\` Çekilişi bitirir
`)

    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cekilis-sistemi"],
  permLevel: 0  
};

exports.help = { 
  name: 'çekiliş-sistemi', 
  description: '',
  usage: '',
};