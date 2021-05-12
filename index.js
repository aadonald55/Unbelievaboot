const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	message.embeds.forEach((embed) => {
		if (message.embeds[0].author.name === 'Balance updated' && message.author.discriminator === '0000') {
			const recieved = message.embeds[0];
			const resend = new Discord.MessageEmbed(recieved);
			const chanHere = message.embeds[0].description.match(/(?<=<#)(.*?)(?=\s*>)/);
			//console.log(chanHere[0]);
			client.channels.cache.get(chanHere[0]).send(resend).then(msg => msg.delete({timeout: 10000}));
		}
	});
});


client.login(process.env.TOKEN);