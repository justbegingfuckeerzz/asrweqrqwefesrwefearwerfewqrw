const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!!';
client.on('ready' , () => { 
    console.log('Fukcing ');
});


client.on('message', message => {
   if(message.author.bot) return;
     if(message.content.startsWith(prefix + 'setS online')) {
         if(message.guild.id !=="495233573264293915") return 

            client.user.setStatus('online');
     }

     if(message.content.startsWith(prefix + 'setS idle')) {
         if(message.guild.id !=="495233573264293915") return 
            client.user.setStatus('idle');
     }


     if(message.content.startsWith(prefix + 'setS offline')) {
         if(message.guild.id !=="495233573264293915") return 
            client.user.setStatus('invisible');
     }

     if(message.content.startsWith(prefix + 'setS dnd')) {
         if(message.guild.id !=="495233573264293915") return 
            client.user.setStatus('dnd');
     }
});

process.on("unhandledRejection", err => { console.log(`Unhandled rejection: ${err.stack}`) });

bot.login(process.env.BOT_TOKEN);
