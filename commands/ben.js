/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const moment = require('moment');
const config = require('../config.json');


module.exports = {
    name: 'ben',
    description: 'answers',
    cooldown: 5,
    async execute(message) {


        let time = moment().format("LTS");
        //saving the emotes and gifs as variables 
        const BenEmotes = {
            ben: "<a:Ben:946330195294584842>",
            yes: "<a:BenYes:945670382281687080>",
            no: "<a:BenNo:945670479711187034>",
            hoho: "<a:BenHohoho:945670730891264102>",
            hangup: "<a:BenHangup:945682532962291802>",
            ugh: "<a:BenUgh:945670730442473472>",
            gifLean: "https://cdn.discordapp.com/attachments/883245986166759437/959332263261261864/ezgif-1-16b7bb9a8f.gif",
            gifRatio: "https://cdn.discordapp.com/attachments/883245986166759437/959334706611101696/talking-benballs.gif",
        }
        //get the incoming message and make sure everything is an string

        let mString = message.content.toString().toLowerCase()
        let mSplit = mString.split(config.prefix)


        //temporary solution to making sure that
        //the incoming message is just "yo ben"
        //and its response to that should always be Ben
        // modifications to work for any prefix

        if (mSplit == 'ben') {
            //default response to (prefix) ben

            message.reply(`${BenEmotes.ben} Ben.`)
            console.log(`[${time}] Ben`)
            //random person on reddit got a point
            // lmao wtf
        }
        else if (mSplit == 'ben make some lean') {
            
            message.reply(BenEmotes.gifLean)
            console.log(`[${time}] Lean`)
        }

        else if (mSplit == "ben ratio") {

            message.reply(BenEmotes.gifRatio)
            console.log(`[${time} Ratio]`)
        }

        else {
            // function to easily add for more use later :)
            function random(min, max) {
                const num = Math.floor(Math.random() * (max - min + 1)) + min;
                return num;
            }
            //random 1 to 10 number generator
            let r = random(1, 10)
            console.log(`[${time}] ${r}`)

            // essentially, i think this now works as a procedural system, if not, im simply stupid.
            // it should break (similar to return) and stop it from going.
            // if it doesnt, please let me know in the pr that this is being submitted in.
            
            switch (true) {

                case (r <= 3):
                    //yes
                    message.reply(`${BenEmotes.yes} yes`)
                    break;

                case (r <= 5):
                    //no
                    message.reply(`${BenEmotes.no} no`)
                    break;

                case (r <= 7):
                    //hohoho
                    message.reply(`${BenEmotes.hoho} hohoho`)
                    break;

                case (r <= 9):
                    //ugh
                    message.reply(`${BenEmotes.ugh} ughhh`)
                    break;

                case (r <= 10):
                    //hangup
                    message.reply(`${BenEmotes.hangup} ...`)
                    break

            }
        }

    },
};
