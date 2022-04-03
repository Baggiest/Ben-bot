/* eslint-disable no-unused-vars */
const Client = require('../client/client')
const { MessageEmbed, ButtonInteraction, MessageActionRow, MessageButton } = require('discord.js')


const labEmotes = {
    "Green": "<:Green:958421373527674940>",
    "Blue": "<:Blue:958421259815895131>",
    "LightBlue": "<:Skyblue:958421313771405353>",
    "Yellow": "<:minionCum:958421349037125672>",
    "Pink": "<:Lean:958421209094184980>",
    "gifLeMeme": "https://cdn.discordapp.com/attachments/883245986166759437/959316443399352350/no-bitches-gclik-gif.gif"
}

const labReactions = {
    "Burned": "",           // yellow and cyan
    "ExplosiveDrink": '',   // yellow and pink
    "Lava": '',             // yellow and Blue
    "FireExplotion": "",    // green and cyan
    "Boom": '',             // green and pink
    "Plant": '',            // green and blue
    "fire": '',             // green and yellow
    "FireBreath": "",       // cyan and pink 
    "lightning": "",        // cyan and blue 
    "tornado": ''           // pink and blue
}

const labEmbed = new MessageEmbed()
    .setTitle('mix your potions')
    .setImage('https://cdn.discordapp.com/attachments/883245986166759437/960154015616868432/unknown.png')
    .setColor('PURPLE')

const gifEmbed = new MessageEmbed()
    .setImage(labEmotes.gifLeMeme)
    .setTitle('cant mix the same 2 potions')
    .setColor("LUMINOUS_VIVID_PINK")

module.exports = {

    name: 'lab',
    description: 'lab stuff, lean lab hohoho',
    async execute(message) {


        const row = new MessageActionRow()
            .addComponents(

                new MessageButton()
                    .setCustomId('yellow')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Yellow),

                new MessageButton()
                    .setCustomId('green')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Green),

                new MessageButton()
                    .setCustomId('cyan')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.LightBlue),

                new MessageButton()
                    .setCustomId('pink')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Pink),

                new MessageButton()
                    .setCustomId('blue')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Blue)
                    .setDisabled(false)
            )

        message.reply({
            embeds: [labEmbed],
            components: [row]
        })

        const filter = (interaction) => {
            if (interaction.user.id === message.author.id){
                return true;
            }
        }

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: 2
        })

        collector.on("collect", (butIntr) => {
            let id = butIntr.customId;

            switch (id) {
                case "yellow": {
                    butIntr.reply('yellow mixed')
                    row.components[0].setDisabled(true);
                    break;
                }

                case "green": {
                    butIntr.reply('green mixed')
                    row.components[1].setDisabled(true);
                    break;
                }

                case "cyan": {
                    butIntr.reply('cyan mixed')
                    row.components[2].setDisabled(true);
                    break;
                }

                case "pink": {
                    butIntr.reply('pink mixed')
                    row.components[3].setDisabled(true);
                    break;
                }

                case "blue": {
                    butIntr.reply("blue mixed")
                    row.components[4].setDisabled(true);
                    break;
                }

                default: {
                    butIntr.reply("Idek how you got here");
                }
            }
        });

        collector.on('end', (butIntr) => {

            const buttons = [...butIntr.values()];
            const [firstIntr, secondIntr] = buttons;

            let first = firstIntr.customId;
            let second = secondIntr.customId;

            console.log(`${first} and ${second}`)

            switch (first) {


                case 'yellow':
                    switch (second) {

                        case "blue":
                            message.reply('Tornado')
                            break;

                        case "yellow":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "green":
                            message.reply('Boom')
                            break;

                        case "cyan":
                            message.reply('')
                            break;

                        case "pink":
                            message.reply('')

                    }

                    break;


                case 'green':
                    switch (second) {

                        case "blue":
                            message.reply('Tornado')
                            break;

                        case "yellow":
                            message.reply('fire')
                            break;

                        case "green":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "cyan":
                            message.reply("fireexplotion")
                            break;

                        case "pink":
                            message.reply('boom')
                    }

                    break;


                case 'cyan':

                    switch (second) {

                        case "blue":
                            message.reply('Tornado')
                            break;

                        case "yellow":
                            message.reply('Explosive drink')
                            break;

                        case "green":
                            message.reply('fireExplode')
                            break;

                        case "cyan":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "pink":
                            message.reply('FireBreath')
                    }

                    break;


                case 'pink':

                    switch (second) {

                        case "blue":
                            message.reply('Tornado')
                            break;

                        case "yellow":
                            message.reply('Explosive drink')
                            break;

                        case "green":
                            message.reply('Boom')
                            break;

                        case "cyan":
                            message.reply('')
                            break;

                        case "pink":
                            message.reply({ embeds: [gifEmbed] })
                            break;
                    }

                    break;

                case 'blue':

                    switch (second) {

                        case "blue":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "yellow":
                            message.reply('Explosive drink')
                            break;

                        case "green":
                            message.reply('Boom')
                            break;

                        case "cyan":
                            message.reply('')
                            break;

                        case "pink":
                            message.reply('')
                    }

            }
        })
    }
}