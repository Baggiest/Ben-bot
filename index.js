/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const { join, format } = require('path');
const Client = require('./client/client');
const SettingsProvider = require('./client/settings-provider');
const CommandsModule = require('./client/modules/commands');
const config = require('./config.json');
const moment = require('moment');
const { lstat } = require('fs');

require("dotenv").config();

// LTS here just means that moment will 
// format the time in [H:M:S AM/PM] 
const time = moment().format("LTS")


// to do, trim off the unnecessary guilds and perms
// spoilers i didnt

const clientOptions = {
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
};

const settings = new SettingsProvider(config);
const client = new Client(clientOptions, settings);

const commandsModule = new CommandsModule();
commandsModule.loadFromDirectory(join(__dirname, 'commands'));


async function bootstrap() {
  await client.registerModule('commands', commandsModule);

  client.registerEvent('ready', () => {
    // do i really have to explain when this shit runs
    console.log(`[${time}] Ready!`);
    
  try {
      client.client.user.setPresence({
        status: 'idle',
        game: {
          name: "this bot will be soon deleted, invite the main verified ben",  // The message shown
          type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
  }
 })
    }catch(e){
      console.log(e)
    }
    

  });

  //when mfs add the bot to their server
  client.registerEvent('guildCreate', () => {
    console.log(`[${time}] Some mf really added this mf to their server 💀`);

  });

  //when bozos kick ben
  client.registerEvent('guildDelete', () => {
    console.log(`[${time}] Kicked The Fraud alt W`);
  });


  client.registerEvent('interactionCreate', async interaction => {
    //
  })
  await client.init();
}

bootstrap();
