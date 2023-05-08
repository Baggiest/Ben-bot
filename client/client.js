const Discord = require('discord.js');

module.exports = class Client {
  constructor(clientOptions, settingsProvider) {
    this.client = new Discord.Client(clientOptions);
    this.listeners = new Discord.Collection();
    this.modules = new Discord.Collection();
    this.settings = settingsProvider;
  }

  registerEvent(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
  }

  async registerModule(name, module) {
    this.modules.set(name, module);
    await module.register(this);
  }

  async init(token = this.settings.get('token')) {
    this.listeners.forEach((callbacks, event) =>
      this.client.on(event, async (...args) =>
        callbacks.forEach((callback) => callback(...args))
      )
    );

    this.client.login(token);
  }
};
