const moment = require('moment');

module.exports = {
    name: 'tos',
    description: 'youre not going to read it anyways',
    cooldown: 5,
    async execute(message) {

        let time = moment().format("LTS")

        message.channel.send('GREAT NEWS! Main ben has been verified so you can now kick this bot and add that one from \n \n https://discord.com/api/oauth2/authorize?client_id=945330615685873704&permissions=412317248576&scope=bot')
        console.log(`[${time}] SEGGZ`)
    },
  };
  