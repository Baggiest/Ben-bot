const Discord = require('discord.js');
const { join } = require('path');
const CCPClient = require('./client/ccp-client');
const SettingsProvider = require('./client/settings-provider');
const CommandsModule = require('./client/modules/commands');
const config = require('./config.json');
require("dotenv").config();

const clientOptions = {
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
};

const settings = new SettingsProvider(config);
const client = new CCPClient(clientOptions, settings);

const commandsModule = new CommandsModule();
commandsModule.loadFromDirectory(join(__dirname, 'commands'));


async function bootstrap() {
  await client.registerModule('commands', commandsModule);

  client.registerEvent('ready', () => {
    console.log('Ready!');
    
  });

  await client.init(config.token);
}

bootstrap();
