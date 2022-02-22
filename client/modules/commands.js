const { promises: fs } = require('fs');
const Discord = require('discord.js');
const { join } = require('path');

module.exports = class CommandsModule {
  constructor() {
    this.commands = new Discord.Collection();
    this.cooldowns = new Discord.Collection();
  }

  register(ccpClient) {
    this.ccpClient = ccpClient;
    this.ccpClient.registerEvent(
      'messageCreate',
      this.handleMessage.bind(this)
    );
  }

  async loadFromDirectory(path) {
    const files = await fs.readdir(path);

    files.forEach((file) => {
      const command = require(join(path, file));
      this.commands.set(command.name, command);
    });
  }

  async handleMessage(message) {
    const prefix = this.ccpClient.settings.get('prefix');
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const [commandName = commandName.toLowerCase(), ...args] = message.content
      .slice(prefix.length)
      .split(/\s+/);

    if (!this.commands.has(commandName)) return;
    const command = this.commands.get(commandName);
    command.execute(message, args, this.ccpClient);
  }
};
