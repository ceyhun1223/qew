const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Kullanıcı Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Kullanıcı__----------------------**`,`
> \`c.afk\` Afk olursunuz
> \`c.avatar\` Avatarınıza ya da başkasının avatarına bakarsınız
> \`c.davet\` Bot davet linkini atar
 \`c.yaz\` Yazdığınız yazıyı resimli atar
> \`c.üyedurum\` Sunucudaki üye durumunu atar
> \`c.say\` Sunucu bilgilerini atar
> \`c.oylama\` Oylama yaparsınız
> \`c.discrim\` Sizinle aynı discrime sahip olanları atar
> \`c.davetlerim\` Davet sayınızı atar
> \`c.hava-durumu\` Hava durumuna bakarsınız
> \`c.korona\` İstediğiniz ülkenin korona bilgisine bakarsınız
> \`c.istatistik\` Bot istatistiğini atar
> \`c.rolbilgi\` İstediğiniz rolün bilgisini atar
> \`c.sunucu-tanıt\` Sunucunuzu destek sunucumuzda tanıtırsınız
> \`c.sponsor\` Sponsorumuzu gösterir
> \`c.ping\` Botun pingine bakarsınız
> \`c.seviye\` Seviyenize bakarsınız
> \`c.profil\` Sunucudaki profilinize bakarsınız
> \`c.toplam-komut\` Bottaki toplam komutu atar
> \`c.atam\` Atamın resmini atar
> \`c.yetkilerim\` Sunucudaki yetkilerinizi gösterir
`)

    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanici"],
  permLevel: 0  
};

exports.help = { 
  name: 'kullanıcı', 
  description: '',
  usage: '',
};