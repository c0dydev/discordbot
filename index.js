const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const prefix = "!";


client.on('ready', () => { 
    client.user.setGame('hi')
});
// it sets the status to "hi" when you run it


// that was the setup part, now we're going to set the commands up


client.on('message', (message) => {

        if(message.content == '!help') {
			// constantly checks the server for the !help message
             message.channel.send("sorry, but I can't help you at the moment.");
			 // you can customize it the way you want it to be
        }

    });

// that was a simple command, now let's go to some of the more complex ones


client.on('message', (message) => {

	let args = message.content.split(" ").slice(1);
        if(message.content == '!roll') {
			var dice = ['1','2','3','4','5','6'];
			message.channel.send(dice[Math.floor(Math.random () * dice.length)])
		}
});


client.on('guildMemberAdd', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`Welcome to servernamehere, ${member}!`);
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('guildMemberRemove', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`Goodbye, ${member}.`);
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Goodbye, ${member}.`);
});


// now lets move on to embeds

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0]
  command = command.slice(prefix.length)
  
 
  let args = message.content.split(" ").slice(1);
if (command === "embed") {
  const embed = new Discord.RichEmbed()
  .setColor(0xFF8C00)
  .addField("white line of text", "gray line of text")
  message.channel.send({embed})
		}
	});

	
// now, a simple "say" command

client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0]
 command = command.slice(prefix.length)
 

 let args = message.content.split(" ").slice(1);
if (command === "say") {
      message.channel.send(args.join(" "))
  }});

  
  
// that was it for this bot, but you can add a shitton more commands by learning from this and the docs, https://discord.js.org/
	
client.login('MzM0Mzg2Nzg1ODY4MDU0NTQ5.DEouzA.vDc5251-NovfgbDPZcEvShK4g-4');