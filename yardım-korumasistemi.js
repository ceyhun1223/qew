const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Koruma Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Koruma Sistemi__----------------------**`,`
> \`c.ban-koruma #kanal\` Ban koruma sistemini açar
> \`c.ban-koruma-sıfırla\` Ban koruma sistemini sıfırlar
> \`c.kanal-koruma #kanal\` Kanal koruma sistemini açar
> \`c.kanal-koruma-sıfırla\` Kanal koruma sistemini sıfırlar
> \`c.rol-koruma #kanal\` Rol koruma sistemini açar
> \`c.rol-koruma-sıfırla\` Rol koruma sistemini sıfırlar
> \`c.spam-koruma\` Spam koruma sistemini açar
> \`c.spam-koruma kapat\` Spam koruma sistemini kapatır
> \`c.bot-izni\` Sunucuya bot girip girmemesini ayarlarsınız
> \`c.bot-koruma\` Bot koruma sistemini ayarlarsınız
> \`c.güvenlik\` Güvenlik kanalını ayarlarsınız
`)

    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["korumasistemi"],
  permLevel: 0  
};

exports.help = { 
  name: 'koruma-sistemi', 
  description: '',
  usage: '',
};