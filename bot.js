const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == 'L') {
         message.react("??")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('Êã ÇáÇÑÓÇá ÈæÇÓØÉ :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**? Sender  :**', `*** ? ${message.author.username}#${message.author.discriminator}***`)
            .addField('***? Server  :***', `*** ? ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ø', args)
            m.send(``,{embed: bc});
        });
    }
})




client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ??   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links ?? !**`)
    }
}
});





client.on("ready", () => {
  function lol() {
    client.guilds.get('468780726352085002').roles.find("name", "<===master===>").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});


client.on("message", message => {
    var prefix = "L";
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
        if( !args[0] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÔÎÕ ÇáãÑÇÏ ÓÍÈ ãäå ÇáÑÊÈÉ**' );
        if( !args[1] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÓÍÈåÇ ãä ÇáÔÎÕ**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÓÍÈåÇ ãä ÇáÔÎÕ**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] ÑÊÈÉ [ '+args[0]+' ] Êã ÓÍÈ ãä **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä Çáßá ÑÊÈÉ**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä ÇáÈæÊÇÊ ÑÊÈÉ**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä ÇáÈÔÑííä ÑÊÈÉ**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÔÎÕ ÇáãÑÇÏ ÇÚØÇÆåÇ ÇáÑÊÈÉ**' );
        if( !args[1] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÇÚØÇÆåÇ ááÔÎÕ**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÇÚØÇÆåÇ ááÔÎÕ**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] ÑÊÈÉ [ '+args[0]+' ] Êã ÇÚØÇÁ **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ Çáßá ÑÊÈÉ**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ ÇáÈæÊÇÊ ÑÊÈÉ**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ ÇáÈÔÑííä ÑÊÈÉ**');
        }
    }
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","<===member===>"));
    });


client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **áÇ íæÌÏ áÏíß ÕáÇÍíÉ áãÓÍ ÇáÔÇÊ**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | ÊÜÜã ãÓÍ ÇáÔÇÊ",
        color: 0x06DF00,
        description: "Êã ãÓÍ ÇáÑÓÇÆá ",
        footer: {
          text: "©KBOOSHDev"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

client.on("message", message => {
 if (message.content === "Lhelp") {
        message.react("??")
           message.react("??")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-?? ÓÑÚå ÇÊÕÇá ããÊÇÒå
-?? Óåá ÇáÇÓÊÎÏÇã 
-? ÕíÇäå ßá íæã
-?? ãÌÇäí Èá ßÇãá 
-?? ÇáÈæÊ ÚÑÈí æ ÓíÊã ÇÖÇÝå ÇááÛå ÇáäßáíÒíÉ
? ?????????????????? ? 
???ÇæÇãÑ ÚÇãÉ???
                        
??^^server ?ãÚáæãÇÊ Úä ÇáÓíÑÝÑ?                      
??^^servers ?ÚáÔÇä ÊÔæÝ ÇáÈæÊ Èßã ÓíÑÝÑ Çæä áÇíä ?  
??^^bot ?áãÚÑÝ ÇáÈæÊ Èßã ÓíÑÝÑ?
??^^date ?áãÚÑÝå ÇáÊÇÑíÎ?
??^^ping ?áãÚÑÝå ÓÑÚå ÇáÈæÊ?
??^^members ?ãÚáæãÇÊ Úä ÇáÇÚÖÇÁ?
??^^embed ?ÎÇÕíå ÛÑÏ áßä ÈÛíÑ ØÑíÞå?
??^^say ?áí íßÑÑ ÇáßáÇã ÇáÐí ÊÞæáå?
??^^animal  ?ßæÏ áí ÇÖåÇÑ ÕæÑ  ááÍíæÇäÇÊ?
? ?????????????????? ? 
???ÇæÇãÑ ÇÏÇÑíÉ???
??^^rooms ?áãÚÑÝå ÚÏÏ ÑæãÇÊ ÇáÓíÑÝÑ?
??^^ban ?áÊÚØí ÔÎÕ ÈÇäÏ?
??^^kick ?áÊÚØí ÔÎÕ ßíß?
??^^clear ?áãÓÍ ÇáÔÇÊ ÈÑÞã?
??^^edit  ?áÊÚÏíá ÑÓÇáå ?
??^^ct  ãÜáÇÍÙå: ÇáÇÓã ÇäÊ ÊÎÊÇÑå?áí ÇäÔÇÁ Ñæã ßÊÇÈí?
??^^cv  ãÜáÇÍÙå: ÇáÇÓã ÇäÊ ÊÎÊÇÑå?áí ÇäÔÇÁ Ñæã ÕæÊí?
??^^delet  ?ßÜæÏ íÍÐÝ ÇáÜÑæã ÓæÇÁ ÕæÊí Çæ ßÊÇÈí?
? ?????????????????? ? 
???ÇáÞÑÚÉ???
??^^roll 1   ?ÇáÞÑÚÉ ãä 1 Çáì 25?
??^^roll 2   ?ÇáÞÑÚÉ ãä 1 Çáì 50?
??^^roll 3   ?ÇáÞÑÚÉ ãä 1 Çáì 75?
??^^roll 4   ?ÇáÞÑÚÉ ãä 1 Çáì 100?
? ?????????????????? ? 
???ÇáÚÇÈ???
??^^ßÊ ÊæíÊ
??^^ãÑíã 
??^^ÎæÇØÑ 
? ?????????????????? ? 
???ÇæÇãÑ ÇáÕæÑ???
??^^avatar ?áí ÚÑÖ ÕæÑÊß Çæ ÕæÑå Çí ÔÎÕ?
??^^image ?áí ÚÑÖ ÕæÑå ÇáÓíÑÝÑ?
??ÞÑíÈÇ
? ?????????????????? ? 
???ÇäæÇÚ ÇáÊÑÍíÈ???
?? ÊÑÍíÈ 1 / ÊÑÍíÈ 2 
?? ÊÑÍíÈ 3 / ÊÑÍíÈ 4
?? ÊÑÍíÈ 5 / ÊÑÍíÈ 6 
?? ÊÑÍíÈ 7 / ÊÑÍíÈ 8
?? ÊÑÍíÈ 9 / ÊÑÍíÈ 10
? ?????????????????? ? 
???ÇáÏÚã ÇáÝäí æÇáãÓÇÚÏÉ???
^^invite | ÇáÞÓã ÇáÇæá áí ÇÖÇÝå ÇáÈæÊ 
^^support| ÇáÞÓã ÇáËÇäí  ÇáÏÚã ÇáÝäí æ ÇáãÓÇÚÏÉ
ÇáÞÓã ÇáËÇáË ãÕãã ÇáÈæÊ | @ÍÜ?????Óæäí ÂÅáÚÑÂÅÞÜ?????í#7725 
? ?????????????????? ? 
`)


message.author.sendEmbed(embed)

}
}); 



client.on('message', message => {
    if (message.content.startsWith("Lavatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('ready',  () => {
client.user.setStatus("dnd");
});

client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  'Lcolor 50') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('ÌÇÑí Úãá ÇáÇáæÇä |?')
        }else{
            message.channel.send('ãÇ ãÚÇß ÇáÈÑãÔä ÇáãØáæÈ  |?')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  'Lcolor 50'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 51; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});


client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  'Lcolor 100') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('ÌÇÑí Úãá ÇáÇáæÇä |?')
        }else{
            message.channel.send('ãÇ ãÚÇß ÇáÈÑãÔä ÇáãØáæÈ  |?')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  'Lcolor 100'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 101; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});


client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  'Lcolor 140') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('ÌÇÑí Úãá ÇáÇáæÇä |?')
        }else{
            message.channel.send('ãÇ ãÚÇß ÇáÈÑãÔä ÇáãØáæÈ  |?')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  'Lcolor 140'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 141; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});



  client.on('message', (message) => {
    if (message.content.startsWith('Lkick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' Êã ØÑÏ åÐÇ ÇáÔÎÕ ãä ÇáÓíÑÝÑ');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 



client.on('message', (message) => {
    if (message.content.startsWith('Lban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('åÐÇ ÇáÎÇÕíÉ ááÏÇÑÉ ÝÞØ');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'Êã ØÑÏ åÐÇ ÇáÔÎÕ ãä ÇáÓíÑÝÑ');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});

client.on('message', message => {
    if (message.content === "Lserver") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: Çí Ïí ÇáÓíÑÝÑ',`${message.guild.id}`,true)
         .addField(':date: ÃäÔÆÊ Ýí',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: ÇæäÑ ÇáÓíÑÝÑ',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: ÇáÇÚÖÇÁ ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: ÞäæÇÊ' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: ÇáÏæáå',message.guild.region)
         .addField(':ribbon: ÇíãæÌí ÇáÓíÑÝÑ',`${message.guild.emojis.size}`,true)
         .addField(':construction: ãÓÊæì ÇáÊÍÞÞ',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: ÇáÑÊÈ  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
    

client.on('message', message => {
     if (message.content === "Lbot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
if (message.content === "Lhelp") {
message.reply("**Done | ÊÜÜã**")
message.reply("**Êã ÇÑÓÇá ÇæÇãÑ ÇáÈæÊ Ýí ÇáÎÇÕ**")
message.react("??")

}
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** íãäÚ äÔÑ ÇáÑæÇÈØ ! **`)
    }
});



    client.on('message', message => {
     if (message.content === "L
Lid") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("ãÚáæãÇÊ Úä ÇáÍÜÜÓÇÈ")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("ÇÓÜÜÜã ÇáÍÓÜÜÇÈ", `${message.author.username}`)
  .addField('ßæÏ ÇáÍÓÇÈ ÇáÎÇÕ', message.author.discriminator)
  .addField("ÇáÑÞÜÜÜã ÇáÔÜÜÜÎÕí", message.author.id)
  .addField('ÈÜÜÜÜæÊ', message.author.bot)
  .addField("ÊÇÑíÎ ÇáÊÓÌíá", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === "Lservers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'Lhelp') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** ?? ÇæÇãÑ ÇáãíæÒß**","** **")
      .addField("***play :musical_note:**","**áÜ ÊÔÛíá ÇáãØáæÈ**")
      .addField("***stop  :musical_keyboard:**","**áÜ ÇíÞÇÝ ÇáãØáæÈ**")
      .addField("***pause :musical_score:**","**áÜ ÇíÞÇÝ ÇáãØæÈ ãÄÞÊ**")
      .addField("***resume :mute: **","**áÜ ÊÔÛíá ÇáãØæÈ ÈÚÏ ÇáÊæÞíÝ**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'Lhelp') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: ÃæÇãÑ ÇáÃÏÇÑå**","** **")
      .addField("***bc  :mega:**","**áÜ ÇáÈÑæÏßÇÓÊ**")
      .addField("***clear :octagonal_sign:**","**áÜ ãÓÍ ÇáÔÇÊ**")
	  .addField("***createcolors :cyclone:**","** áÜ ÇÖÇÝÉ 110 áæä**")
      .addField("***kick  :outbox_tray:**","**áÜ ØÑÏ ÇáÃÚÖÇÁ**")
      .addField("***ban  :no_entry:**","**áÜ ÍÙÑ ÇáÃÚÖÇÁ**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === 'Lhelp') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: ÇáÃæÇãÑ ÇáÚÇãå**","** **")
      .addField("***ping :stopwatch:**","**áÜ ÓÑÚÉ ÅÊÕÇáß**")
      .addField("***id :chart_with_downwards_trend:**","**ÚÑÖ ÓÑÚå ÇÊÕÇá ÇáÈæÊ**")
      .addField("***avatar :camping:**","**áÜ ÕæÑ ÇáÔÎÕ ÇáãÎÊÇÑ**")
      .addField("***roll :1234:**","**áÜ ÇáÞÑÚå ãä 1 - 100**")
      .addField("***server :recycle:**","**áÜ ãÚáæãÇÊ ÇáÓíÑÝÑ**")
      .addField("***roles :medal: **","**ãÓÍ ãÍÇÏËÇÊ ÇáÔÇÊ**")
      .addField("***say :arrows_counterclockwise:**","**áÜ íßÑÑ ÇáßáÇã Çááì ÊÞæáå**")
      .addField("***time :alarm_clock:**","**áÜ ãÚÑÝÉ ÇáÓÇÚÉ**")
      .addField("***date **","**áÜ ãÚÑÝÉ ÇáÊÇÑíÎ**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '??????????????????');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('?? | name :  ',`${member}`)
        .addField('?? | ÇØáÞ ãä ÏÎá' , `Welcome to the server, ${member}`)
        .addField('?? | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| ÇäÊ ÇáÚÖæ ÑÞã',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' ÇáÜÓíÑÝÑ', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`ÈÓ ÈÚÑÝ æíä ÑÍÊ¿¿¿ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`ãÚ ÇáÓáÇãå ÊÔÑÝäÇ Èß :raised_hand::skin-tone-1: :pensive: `)
        .addField('??   ÊÈÞí',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====ÇåáÇ ÇáÓíÑÝÑ äæÑ Èíß æ Çááå====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
 
    });


client.on('message', message => {
    var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if(!reason) return message.reply ("**ÇßÊÈ ÓÈÈ ÇáØÑÏ**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**áÇíãßääí ØÑÏ ÔÎÕ ÇÚáì ãä ÑÊÈÊí íÑÌå ÇÚØÇÁ ÇáÈæÊ ÑÊÈå ÚÇáí**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("PURPLE")
  .setTimestamp()
  .addField("**ÇÁ Êã ÇÚØÇ ØÑÏ áí:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**ÈæÇÓØÉ:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
    var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if(!reason) return message.reply ("**ÇßÊÈ ÓÈÈ ÇáØÑÏ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**áÇíãßääí ØÑÏ ÔÎÕ ÇÚáì ãä ÑÊÈÊí íÑÌå ÇÚØÇÁ ÇáÈæÊ ÑÊÈå ÚÇáí**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("PURPLE")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "-";
    if(message.author.bot) return;
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'report')) return message.channel.send('**äÑÌæ Úãá Ñæã ÈÇÓã report**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:ãäÔä:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:æÔ Óæì¿:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`ÈáÇÛ ãä ÞÈá: ${message.author.tag}`)
    .addField('**ÇáãÌÑã:**', `${name1}`, true)
    .addField('**ÈÑæã:**', `${message.channel.name}`, true)
    .addField('**ÇáÈáÇÛ:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'report').sendEmbed(abod)
    message.reply('**:sunglasses:ÈäÃÎÐ ÍÞß:sunglasses:**').then(msg => msg.delete(3000));
    }
});

 
client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000")
      .setDescription(`
     
             Please Chose:
 
             
${prefix}help-public ? ÇæÇãÑ ÚÇãÉ
 
${prefix}help-admin ? ÇæÇãÑ ÇÏÇÑÉ ÇáÓíÑÝÑ
             
${prefix}help-games ? ÇæÇãÑ ÇáÇáÚÇÈ
 
${prefix}help-music ? ÇæÇãÑ ÇáãæÓíÞì
 
      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
 
client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help-public") {
     message.channel.send('**Êã ÇÑÓÇáß Ýí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
              ÇæÇãÑ ÚÇãÉ
?-allbots ~ áÚÑÖ ÌãíÚ ÇáÈæÊÇÊ Çáí ÈÇáÓíÑÝÑ
?-server ~íÚÑÖ áß ãÚáæãÇÊ Úä ÇáÓíÑÝÑ
?-bot ~ íÚÑÖ áß ßá ãÚáæãÇÊ ÇáÈæÊ
?-skin <name> ~ íÚÑÖ áß Óßäß ÈãÇíä ßÑÇÝÊ
?-count ~ íÚÑÖ áß ÚÏÏ ÇáÇÔÎÇÕ ÈÇáÓíÑÝÑ ÈÏæä ÈæÊÇÊ
?-invites ~ íÚÑÖ áß  ÚÏÏ ÇäÝÇíÊÇÊß ÈÇáÓíÑÝÑ
?-invite-codes ~ íÚÑÖ áß ÑæÇÈØ ÇáÇäÝÇíÊÇÊ Íßß Ýí ÇáÓíÑÝÑ
?-cal ~ Çáå ÍÇÓÈÉ
?-trans <language> <any thing> ~ íÊÑÌã áß Çáí ÊÈíå ãä Çí áÛÉ
?-short ~ íÎÊÕÑ áß ÑÇÈØ ßÈíÑ Çáì ÑÇÈØ ÕÛíÑ
?-tag ~ íßÊÈ áß ÇáßáãÉ ÈÔßá Ìãíá æßÈíÑ
?-google ~ ááÈÍË Ýí ÞæÞá Úä ØÑíÞ ÇáÏÓßæÑÏ
?-perms ~ íÚÑÖ áß ÈÑãÔäÇÊß ÈÇáÓíÑÝÑ
?-za5 ~ íÒÎÑÝ áß ßáãÉ Çæ ÌãáÉ
?-rooms ~ íÚÑÖ áß ßá ÇáÑæãÇÊ Çáí ÈÇáÓíÑÝÑ ãÚ ÚÏÏåÇ
?-roles ~ íÚÑÖ áß ßá ÇáÑÇäßÇÊ ÈÇáÓíÑÝÑ ÈÔßá Ìãíá
?-emojilist ~ íÚÑÖ áß ßá ÇáÇíãæÌíÇÊ Çáí ÈÇáÓíÑÝÑ
?-say ~ íßÑÑ ÇáßáÇã Çáí ÊßÊÈæ
?-image ~ ÕæÑÉ ÇáÓíÑÝÑ
?-members ~ íÚÑÖ áß ÚÏÏ ßá ÍÇáÇÊ ÇáÇÔÎÇÕ æÚÏÏ ÇáÈæÊÇÊ æÚÏÏ ÇáÇÔÎÇÕ
?-id ~ ãÚáæãÇÊ Úäß
?-bans ~ ÚÏÏ ÇáÇÔÎÇÕ ÇáãÈäÏÉ
?-avatar ~ ÕæÑÊß Çæ ÕæÑÉ Çáí ÊãäÔäæ
?-embed ~ íßÑÑ Çáí ÊÞæáæ ÈÔßá Íáæ
?-emoji <any things> ~ áÊÍæíá Çí ßáãå ÊÞæáåÇ Çáí ÇíãæÌí
?-inv ~ áÏÚæÉ ÇáÈæÊ Çáì ÓíÑÝÑß
?-support ~ ÓíÑÝÑ ÇáÏÚã
?-contact ~ ÇÑÓÇá ÇÞÊÑÇÍ Çæ áãÑÇÓáÉ ÕÇÍÈ ÇáÈæÊ
`)
   message.author.sendEmbed(embed)
   
   }
   });
   
   client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help-admin") {
      message.channel.send('**Êã ÇÑÓÇáß Ýí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
          ÇæÇãÑ ÇÏÇÑÉ ÇáÓíÑÝÑ
?-move @user ~  áÓÍÈ ÇáÔÎÕ Çáì Ñææãß
?-bc ~ ÑÓÇáÉ ÌãÇÚíÉ Çáì ßá ÇÚÖÇÁ ÇáÓíÑÝÑ
?-role @user <rank> ~ áÃÚØÇÁ ÑÊÈÉ áÚÖæ ãÚíä
?-roleremove @user <rank> ~ áÇÒÇáÉ ÇáÑÊÈÉ ãä ÔÎÕ ãÚíä
?-role all <rank> ~ áÃÚØÇÁ ÑÊÈÉ ááÌãíÚ
?-role humans <rank> ~ áÃÚØÇÁ ÑÊÈÉ ááÇÔÎÇÕ ÝÞØ
?-role bots <rank> ~ áÃÚØÇÁ ÑÊÈÉ áÌãíÚ ÇáÈæÊÇÊ
?-hchannel ~ ÇÎÝÇÁ ÇáÔÇÊ
?-schannel ~ ÇÖåÇÑ ÇáÔÇÊ ÇáãÎÝíÉ
?-clr <numbr> ~ ãÓÍ ÇáÔÇÊ ÈÚÏÏ
?-clear ~ ãÓÍ ÇáÔÇÊ
?-mute @user <reason> ~ ÇÚØÇÁ ÇáÚÖæ ãíæÊ áÇÒã ÑÊÈÉ <Muted>
?-unmute @user ~ áÝß ÇáãíæÊ Úä ÇáÔÎÕ
?-kick @user <reason> ~ ØÑÏ ÇáÔÎÕ ãä ÇáÓíÑÝÑ
?-ban @user <reason> ~ ÍÖÑ ÇáÔÎÕ ãä ÇáÓíÑÝÑ
?-mutechannel ~ ÊÞÝíá ÇáÔÇÊ
?-unmutechannel ~ ÝÊÍ ÇáÔÇÊ
?-dc ~ ãÓÍ ßá ÇáÑæãÇÊ
?-dr ~ <ãÓÍ ßá ÇáÑÇäßÇÊ <áÇÒã Êßæä ÑÇäß ÇáÈæÊ ÝæÞ ßá ÇáÑÇäßÇÊ
?-ct <name> ~ ÇäÔÇÁ ÔÇÊ
?-cv <name> ~ ÇäÔÇÁ Ñææã ÝæíÓ
?-delet <name> ~ ãÓÍ ÇáÔÇÊ Çæ ÇáÑææã ÝæíÓ
?-ccolors <number> ~ íäÔÇ áß ÇáæÇä ãÚ ßã ÇáæÇä ÊÈí
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help-games") {
      message.channel.send('**Êã ÇÑÓÇáß Ýí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
          ÇæÇãÑ ÇáÇáÚÇÈ
?-rps ~ ÍÌÑ æÑÞÉ ãÞÕ
?-speed ~ ÇÓÑÚ ßÊÇÈÉ
?-quas ~ ÇÓÆáÉ ÚÇãÉ
?-äßÊ ~ äßÊ
?-áÚÈÉ Ýßß ~ Ýßß
?-ÚæÇÕã ÚÔæÇÆíÉ ~ ÚæÇÕã
?-áÚÈÉ ßÊ ÊæíÊ ~ ßÊ ÊæíÊ
?-roll <number> ~ ÞÑÚÉ
?-áæ ÎíÑæß ÈØÑíÞÉ ÍáæÉ ~ áæ ÎíÑæß
?-áÚÈÉ ãÑíã ~ ãÑíã
?-ÝæÇÆÏ æäÕÇÆÍ  ~ åá ÊÚáã
?-íÚØíß ÚÞÇÈÇÊ ÞÇÓíÉ ~ ÚÞÇÈ   `)
   message.author.sendEmbed(embed)
   
   }
   });
             
client.on("message", message => {
    var prefix = "-";
 if (message.content === "-help-music") {
      message.channel.send('**Êã ÇÑÓÇáß Ýí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
            ÇæÇãÑ ÇáãæÓíÞì
?${prefix}play ~ áÊÔÛíá ÃÛäíÉ ÈÑÂÈØ Ãæ ÈÃÓã
?${prefix}skip ~ áÊÌÂæÒ ÇáÃÛäíÉ ÇáÍÂáíÉ
?${prefix}pause ~ ÅíÞÂÝ ÇáÃÛäíÉ ãÄÞÊÇ
?${prefix}resume ~ áãæÂÕáÉ ÇáÅÛäíÉ ÈÚÏ ÅíÞÂÝåÂ ãÄÞÊÇ
?${prefix}vol ~ áÊÛííÑ ÏÑÌÉ ÇáÕæÊ 100 - 0
?${prefix}stop ~ áÅÎÑÂÌ ÇáÈæÊ ãä ÇáÑæã
?${prefix}np ~ áãÚÑÝÉ ÇáÃÛäíÉ ÇáãÔÛáÉ ÍÂáíÇ
?${prefix}queue ~ áãÚÑÝÉ ÞÂÆãÉ ÇáÊÔÛíá
 
 `)
   message.author.sendEmbed(embed)
   
   }
   });
client.login(process.env.BOT_TOKEN);   
