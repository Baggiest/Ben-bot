const { promises: fs } = require('fs');
const Discord = require('discord.js');
const { join } = require('path');

module.exports = class CommandsModule {
  constructor() {
    this.commands = new Discord.Collection();
    this.cooldowns = new Discord.Collection();
  }

  register(client) {
    this.client = client;
    this.client.registerEvent(
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
    const prefix = this.client.settings.get('prefix');

    let mContent = message.content.toString().toLowerCase()
    //bro it work???????? lets gooooooooooooo
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const [commandName = commandName.toLowerCase(), ...args] = mContent
      .slice(prefix.length)
      .split(/\s+/);

    if (!this.commands.has(commandName)) return;
    const command = this.commands.get(commandName);
    command.execute(message, args, this.client);
  }
};
