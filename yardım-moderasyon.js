const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
    let yardim = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Cyrex Bot Moderasyon Menüsü")
    .setDescription("<a:nice:810222682863566898> Botu davet etmek için `c.davet` yazabilirsiniz.")
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/824885108389052416/cyrexgifff1.gif")
    .addField(`**----------------------__Kurucular__----------------------**`,`
> \`c.nuke\` Kanalı siler ve kopyasını oluşturur
> \`c.ban\` Sunucudan üyeyi banlamanızı sağlar
> \`c.kurallar\` Hazır kurallar atar
> \`c.rolver\` Üyeye rol verirsiniz
> \`c.rolal\` Üyeye rol alırsınız
> \`c.unban\` Banlı üyenin banını kaldırır
> \`c.sunucu-kur\` Sunucu kurar
> \`c.otorol-ayarla\` Otorol ayarlasınız
> \`c.otorol-mesaj-ayarla\` Otorol mesaj ayarlarsınız
> \`c.otorol-mesaj-sıfırla\` Otorol mesajını sıfırlarsınız
> \`c.otorol-sıfırla\` Otorolü sıfırlarsınız
> \`c.kick\` Üyeyi sunucudan atarsınız
> \`c.kick-log #kanal\` Kick kanalını ayarlarsınız
> \`c.bot-ekle\` Bot ekleme komutu
> \`c.bot-onayla\` Botu onaylarsınız
> \`c.bot-reddet\` Botu reddedersiniz
> \`c.botlist-ayar\` Botlist ayarlarını gösterir
`)
    .addField(`**----------------------__Yetkililer__----------------------**`,`
> \`c.banlist\` Banlananları gösterir
> \`c.bansay\` Banlanan kişi sayısını gösterir
> \`c.mutesistemi\` Mute komutlarını atar
> \`c.boost-sistemi\` Boost sistemini atar
> \`c.sayaç-ayarla\` Sayaç ayarlarsınız
> \`c.sayaç-kanal-ayarla\` Sayaç kanalını ayarlarsınız
> \`c.çekiliş-sistemi\` Çekiliş komutlarını gösterir
> \`c.capsengel\` Yüzdeli capsengel yüzdesi ayarlanabilir
> \`c.prefix-ayarla\` Prefixi ayarlar
> \`c.prefix-sıfırla\` Prefixi sıfırlar
> \`c.sa-as\` Üye sa yazınca bot geri cevap verir
> \`c.sil\` Mesajları silersiniz
> \`c.slowmode\` Kanalda yazma süresini ayarlar
> \`c.uyarı\` Üyeleri uyarabilirsiniz
> \`c.reklam-engel\` Reklam engeli açıp kapatırsınız
> \`c.küfür-engel\` Küfür engeli açıp kapatırsınız
> \`c.otocevap\` Otocevap ayarlarını gösterir
`)
    message.channel.send(yardim)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0  
};

exports.help = { 
  name: 'moderasyon', 
  description: '',
  usage: '',
};