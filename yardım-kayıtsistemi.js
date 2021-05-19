const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Kayıt Sistemi Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**-------------------__Kayıt Sistemi__----------------**`,`> \`c.alınacak-rol @rol\`\nAlınacak rolünü ayarlar\n\n> \`c.alınacak-rol sıfırla\`\nAlınacak Rolü Sıfırlar\n\n> \`c.kayıt-kanal #kanal\`\nKayıtın yapılacağı kanalı belirlersiniz\n\n> \`c.kayıt-kanal sıfırla\`\nKayıtın yapılacağı kanalı sıfırlarsınız\n\n> \`c.kayıt-hg #kanal\`\nKayıt hoş geldin kanalını ayarlarsınız\n\n> \`c.kayıt-hg sıfırla\`\nKayıt hoş geldin kanalını sıfırlarsınız\n\n> \`c.kayıt-yetkili @rol\`\nKayıt edebilecek yetkiliyi ayarlar\n\n> \`c.kayıt-yetkili sıfırla\`\nKayıt yetkili rolünü sıfırlarsınız\n\n> \`c.erkek-rol @rol\`\nErkek rolünü ayarlarsınız\n\n> \`c.erkek-rol sıfırla\`\nErkek rolünü sıfırlarsınız\n\n> \`c.kız-rol @rol\`\nKız rolünü ayarlarsınız\n\n> \`c.kız-rol sıfırla\`\nKız rolünü sıfırlarsınız\n\n> \`c.erkek @kullanıcı isim yaş\`\nErkekleri kayıt etmeye yarar\n\n> \`c.kız @kullanıcı isim yaş\`\nKızları kayıt etmeye yarar\n\n`)
    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0  
};

exports.help = { 
  name: 'kayıt-sistemi', 
  description: '',
  usage: 'kayıt-sistemi',
};