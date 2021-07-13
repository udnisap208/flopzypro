const lasiapi = require('textmaker-lasi'); // Import NPM Package
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var desc_msg = ''
if (Config.LANG == 'SI') desc_msg = 'X-Troid Logo එකතුව'
if (Config.LANG == 'EN') desc_msg = 'X-Troid Logo colection'
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
let wk = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: 'npack', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''

    if (Config.LANG == 'SI') {
        t1 = 'Club light Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Green Light Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Steel Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Xmas Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Cloud Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Blood Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Toxic Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Another Blood Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Carbon Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Lux Effect logo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Gold & Lether Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
       

    }
    else {
        t1 = 'Club light Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Green Light Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Steel Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Xmas Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Cloud Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Blood Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Toxic Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Another Blood Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Carbon Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Lux Effect logo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Gold & Lether Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
       
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'SI') {
        usage_cmd = '🍀 *උදා :* _'
        command_cmd = '👑 *විධානය :* '
        desc_cmd = '🌸*විස්තරය :* _'
    } else { 
        usage_cmd = '🌸 Example : '
        command_cmd = '👑 Command : '
        desc_cmd = '🍀 Desc : '
    }
    const msg = command_cmd + '```.nclub``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '*.nclub Xtroid*\n\n' +
        command_cmd + '```.ngreen``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.ngreenLasiya*\n\n' +
        command_cmd + '```.nsteel```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.nsteel Xtroid*\n\n' +
        command_cmd + '```.nxms``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.nxms Xtroid*\n\n' +
        command_cmd + '```.ncloud``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.ncloud Xtroid*\n\n' +
        command_cmd + '```.nblood``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.nblood Xtroid*\n\n' +
        command_cmd + '```.ntoxic``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.ntoxic Xtroid*\n\n' +
        command_cmd + '```.n2bld``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.n2bld Xtroid*\n\n' +
        command_cmd + '```.ncarb``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.ncarb Xtroid,Lasiya*\n\n' +
        command_cmd + '```.nlux``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.nlux Xtroid*\n\n' +
        command_cmd + '```.ngold``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.ngold Xtroid*\n\n' +
        


    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
