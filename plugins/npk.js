
const XTroid = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const config = require('../config')
const desc_msg = "NLogo colection"
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"

if (config.WORKTYPE == 'private') {
XTroid.addCMD({pattern: 'npack', fromMe: true, desc: desc_msg}, (async (message, match) => {
    var t1 = 'Club light Logo.'
    var t2 = 'Green Light Icon'
    var t3 = 'Steel Effect'
    var t4 = 'Xmas Effect'
    var t5 = 'Cloud Logo.'
    var t6 = 'Blood Themed Logo'
    var t7 = 'Toxic Themed Logos.'
    var t8 = 'Another Blood Themed Logo'
    var t9 = 'Carbon Effect'
    var t10 = 'Lux Effect logo'
    var t11 = 'Gold & Lether Logo.'


    var usage_cmd = '🍀 *Ex :* '
    var command_cmd = '👑 *CMD :* '
    var desc_cmd = '🌸*DESC :* '

    const msg = command_cmd + '```.nclub``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '*.nclub Text*\n\n' +
        command_cmd + '```.ngreen``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.ngreenText*\n\n' +
        command_cmd + '```.nsteel```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.nsteel Text*\n\n' +
        command_cmd + '```.nxms``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.nxms Text*\n\n' +
        command_cmd + '```.ncloud``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.ncloud Text*\n\n' +
        command_cmd + '```.nblood``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.nblood Text*\n\n' +
        command_cmd + '```.ntoxic``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.ntoxic Text*\n\n' +
        command_cmd + '```.n2bld``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.n2bld Text*\n\n' +
        command_cmd + '```.ncarb``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.ncarb Text1,Text2*\n\n' +
        command_cmd + '```.nlux``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.nlux Text*\n\n' +
        command_cmd + '```.ngold``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.ngold Text*\n\n' 
        


    await message.client.sendMessage(message.jid,msg, MessageType.text)
}));
}

else if (config.WORKTYPE == 'public') {
    XTroid.addCMD({pattern: 'npack', fromMe: false, desc: desc_msg}, (async (message, match) => {
    var t1 = 'Club light Logo.'
    var t2 = 'Green Light Icon'
    var t3 = 'Steel Effect'
    var t4 = 'Xmas Effect'
    var t5 = 'Cloud Logo.'
    var t6 = 'Blood Themed Logo'
    var t7 = 'Toxic Themed Logos.'
    var t8 = 'Another Blood Themed Logo'
    var t9 = 'Carbon Effect'
    var t10 = 'Lux Effect logo'
    var t11 = 'Gold & Lether Logo.'

    var usage_cmd = '🍀 *Ex :* '
    var command_cmd = '👑 *CMD :* '
    var desc_cmd = '🌸*DESC :* '

    const msg = command_cmd + '```.nclub``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '*.nclub Text*\n\n' +
        command_cmd + '```.ngreen``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.ngreenText*\n\n' +
        command_cmd + '```.nsteel```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.nsteel Text*\n\n' +
        command_cmd + '```.nxms``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.nxms Text*\n\n' +
        command_cmd + '```.ncloud``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.ncloud Text*\n\n' +
        command_cmd + '```.nblood``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.nblood Text*\n\n' +
        command_cmd + '```.ntoxic``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.ntoxic Text*\n\n' +
        command_cmd + '```.n2bld``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.n2bld Text*\n\n' +
        command_cmd + '```.ncarb``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.ncarb Text1,Text2*\n\n' +
        command_cmd + '```.nlux``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.nlux Text*\n\n' +
        command_cmd + '```.ngold``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.ngold Text*\n\n' 
        


    await message.client.sendMessage(message.jid,msg, MessageType.text)
}));
    XTroid.addCMD({pattern: 'npack', fromMe: true, desc: desc_msg}, (async (message, match) => {
    var t1 = 'Club light Logo.'
    var t2 = 'Green Light Icon'
    var t3 = 'Steel Effect'
    var t4 = 'Xmas Effect'
    var t5 = 'Cloud Logo.'
    var t6 = 'Blood Themed Logo'
    var t7 = 'Toxic Themed Logos.'
    var t8 = 'Another Blood Themed Logo'
    var t9 = 'Carbon Effect'
    var t10 = 'Lux Effect logo'
    var t11 = 'Gold & Lether Logo.'

    var usage_cmd = '🍀 *Ex :* '
    var command_cmd = '👑 *CMD :* '
    var desc_cmd = '🌸*DESC :* '

    const msg = command_cmd + '```.nclub``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '*.nclub Text*\n\n' +
        command_cmd + '```.ngreen``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.ngreenText*\n\n' +
        command_cmd + '```.nsteel```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.nsteel Text*\n\n' +
        command_cmd + '```.nxms``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.nxms Text*\n\n' +
        command_cmd + '```.ncloud``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.ncloud Text*\n\n' +
        command_cmd + '```.nblood``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.nblood Text*\n\n' +
        command_cmd + '```.ntoxic``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.ntoxic Text*\n\n' +
        command_cmd + '```.n2bld``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.n2bld Text*\n\n' +
        command_cmd + '```.ncarb``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '*.ncarb Text1,Text2*\n\n' +
        command_cmd + '```.nlux``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '*.nlux Text*\n\n' +
        command_cmd + '```.ngold``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '*.ngold Text*\n\n'  
        


    await message.client.sendMessage(message.jid,msg, MessageType.text)
}));
}
