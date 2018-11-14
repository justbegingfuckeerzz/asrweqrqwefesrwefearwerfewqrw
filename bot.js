const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!!';
client.on('ready' , () => { 
    console.log(${client.user.tag} ready...);
    console.log('Fukcing ');
});


client.on('message', message => {
   if(message.author.bot) return;
     if(message.content.startsWith(prefix + 'setS online')) {
         if(message.guild.id !=="495233573264293915") return 

            client.user.setStatus('online');
        console.log(Edit Status to: ['online'] by ${message.author.tag} (${message.author.id}));
     }

     if(message.content.startsWith(prefix + 'setS idle')) {
         if(message.guild.id !=="495233573264293915") return 
            client.user.setStatus('idle');
        console.log(Edit Status to: ['idle'] by ${message.author.tag} (${message.author.id}));
     }


     if(message.content.startsWith(prefix + 'setS offline')) {
         if(message.guild.id !=="495233573264293915") return 
            client.user.setStatus('invisible');
        console.log(Edit Status to: ['invisible'] by ${message.author.tag} (${message.author.id}));
     }

     if(message.content.startsWith(prefix + 'setS dnd')) {
         if(message.guild.id !=="495233573264293915") return 
            client.user.setStatus('dnd');
        console.log(Edit Status to: ['dnd'] by ${message.author.tag} (${message.author.id}));
     }
});

process.on("unhandledRejection", err => { console.log(Unhandled rejection: ${err.stack}) });
bot.login(process.env.BOT_TOKEN);
