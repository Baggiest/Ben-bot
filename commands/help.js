/* eslint-disable no-unused-vars */
const moment = require('moment');
const { MessageEmbed, MessageActionRow, MessageButton, ButtonInteraction } = require('discord.js')


const helpEmbed = new MessageEmbed()
    .setTitle('Hey Hey')
    .setImage('https://cdn.discordapp.com/attachments/883245986166759437/960615193115762740/unknown.png')
    .setDescription(
        `commands: \n **yo ben** + your question \n **yo lab** for mixing potions \n \n other commands you can use
        \n yo TOS \n yo ping \n yo dono \n \n dont forget about the eastereggs here and there, dont be shy ask ben to **make some lean** for you and never try to ratio ben
        \n \n common problems: \n Ben should have a **100 percent response rate** and any ignoring is mnost probably because of missing permissions, so kick the bot and reinvite with the latest perms \n \n
        ben is completely **free and opensource** and I work on it and pay for its bills out of passion, so it would mean a lot if you even consider donating, you can contact and dm me at **MrBaggieBug#0606** \n \n 
        and again, you using this bot means the world to me, \n *sincerely, Bag <3*`
    )
    .setColor('PURPLE')

const row = new MessageActionRow()

    .addComponents(

        new MessageButton()
            .setStyle('LINK')
            .setLabel('Code base')
            .setEmoji('<:github:538520337529307145>')
            .setURL('https://github.com/mrbaggiebug/Ben-bot'),

        new MessageButton()
            .setURL('https://top.gg/bot/945330615685873704')
            .setLabel("Rate Ben on top.gg!!")
            .setEmoji("⭐")
            .setStyle('LINK'),

        new MessageButton()
            .setStyle('PRIMARY')
            .setLabel('Very dark Ben twitter account')
            .setURL('https://twitter.com/discordingben')

            .setStyle('LINK'),


        new MessageButton()
            .setURL('https://www.buymeacoffee.com/MrBaggieBug')
            .setLabel('Donations')
            .setStyle('LINK')
            .setEmoji('<:8bitL:942601692782936065>'),

        new MessageButton()
            .setLabel('Our support server!')
            .setURL('https://discord.gg/jb8vUDTF5s')
            .setEmoji('<:discord:935402576877346846>')
            .setStyle('LINK'),

    )

module.exports = {
    name: 'help',
    description: 'send help',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        message.channel.send({ embeds: [helpEmbed], components: [row] })
        console.log(`[${time}] H`)
    },
};
