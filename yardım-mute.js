const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Mute Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Mute Sistemi__----------------------**`,`
> \`c.mute-rol @rol\` Mute rolünü ayarlarsınız
> \`c.mute-yetkili-rol @rol\` Mute sorumlusu rolünü ayarlarsınız
> \`c.mute @kişi <sebeb>\` Üyeyi mutelersiniz

`)

    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mutesistemi"],
  permLevel: 0  
};

exports.help = { 
  name: 'mutesistemi', 
  description: '',
  usage: '',
};