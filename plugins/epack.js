const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
var desc_msg = ''
if (Config.LANG == 'SI') desc_msg = 'X-Troid Logo එකතුව'
if (Config.LANG == 'EN') desc_msg = 'Logo colection 2'
const need = "*type some word after command*"
let wk = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: 'epack$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
if (Config.LANG == 'SI') {
        t1 = 'Green Bush Text 1.' // https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html
        t2 = 'Green Bush Text 2.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t3 = '1917 Movie Style Text.' // https://en.ephoto360.com/1917-style-text-effect-523.html
        t4 = 'BLACKPINK Logo Style 2.' // https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-710.html
        t5 = 'Halloween Bats Logo.' // https://en.ephoto360.com/halloween-bats-text-effects-76.html
        t6 = 'Juventus Shirt Logo.' // https://en.ephoto360.com/create-juventus-shirt-effect-536.html
        t7 = 'Barca Shirt Logo.' // https://en.ephoto360.com/create-football-shirt-messi-barca-online-268.html
        t8 = 'Real Madrid Shirt Logo.' // https://en.ephoto360.com/text-on-shirt-club-real-madrid-267.html
   }
    else {
        t1 = 'Green Bush Text 1.' // https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html
        t2 = 'Green Bush Text 2.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t3 = '1917 Movie Style Text.' // https://en.ephoto360.com/1917-style-text-effect-523.html
        t4 = 'BLACKPINK Logo Style 2.' // https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-710.html
        t5 = 'Halloween Bats Logo.' // https://en.ephoto360.com/halloween-bats-text-effects-76.html
        t6 = 'Juventus Shirt Logo.' // https://en.ephoto360.com/create-juventus-shirt-effect-536.html
        t7 = 'Barca Shirt Logo.' // https://en.ephoto360.com/create-football-shirt-messi-barca-online-268.html
        t8 = 'Real Madrid Shirt Logo.' // https://en.ephoto360.com/text-on-shirt-club-real-madrid-267.html
    }
  
   var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'SI') {
        usage_cmd = '🌹 *උදා :* _'
        command_cmd = '🔥 *විධානය :* '
        desc_cmd = '🎵*විස්තරය :* _'
    } else { 
        usage_cmd = '*🎵 Example :* '
        command_cmd = '*🔥 Command :* '
        desc_cmd = '*🌹 Desc :* '
    }
  
  const msg = command_cmd + '```.1bush``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '*.1bush Text1*\n\n' +
        command_cmd + '```.2bush``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '*.2bush Text1*\n\n' +
        command_cmd + '```.1917``` \n' + desc_cmd + t3 + '_\n' + usage_cmd + '*.1917 Text1*\n\n' +
        command_cmd + '```.2blackpink```\n' + desc_cmd + t4 + '_\n' + usage_cmd + '*.2blackpink Text1*\n\n' +
        command_cmd + '```.bats``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '*.bats Text1*\n\n' +
        command_cmd + '```.juventus``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '*.juventus Name,Number*\n\n' +
        command_cmd + '```.barca```\n' + desc_cmd + t7 + '_\n' + usage_cmd + '*.barca Name,Number*\n\n' +
        command_cmd + '```.realmadrid```\n' + desc_cmd + t8 + '_\n' + usage_cmd + '*.realmadrid Name,Number*\n\n' 
   await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));

XTroid.addCMD({pattern: '1bush ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
     let url =`https://api.codebazan.ir/ephoto/writeText?output=json&effect=https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html&text=${encodeURIComponent(match[1])}`
     const response = await got(url);
	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.image_url), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVETEXT });
}));

XTroid.addCMD({pattern: '2bush ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
     let url =`https://api.codebazan.ir/ephoto/writeText?output=json&effect=https://en.ephoto360.com/dark-green-typography-online-359.html&text=${encodeURIComponent(match[1])}`
     const response = await got(url);
	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.image_url), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVETEXT });
}));

XTroid.addCMD({pattern: '1917 ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
     let url =`https://api.codebazan.ir/ephoto/writeText?output=json&effect=https://en.ephoto360.com/1917-style-text-effect-523.html&text=${encodeURIComponent(match[1])}`
     const response = await got(url);
	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.image_url), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVETEXT });
}));

XTroid.addCMD({pattern: '2bp ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
     let url =`https://api.codebazan.ir/ephoto/writeText?output=json&effect=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-710.html&text=${encodeURIComponent(match[1])}`
     const response = await got(url);
	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.image_url), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVETEXT });
}));

XTroid.addCMD({pattern: 'bats ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
     let url =`https://api.codebazan.ir/ephoto/writeText?output=json&effect=https://en.ephoto360.com/halloween-bats-text-effects-76.html&text=${encodeURIComponent(match[1])}`
     const response = await got(url);
	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.image_url), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVETEXT });
}));

XTroid.addCMD({pattern: 'juve ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
     let url =`https://api.codebazan.ir/ephoto/writeText?output=json&effect=https://en.ephoto360.com/create-juventus-shirt-effect-536.html&text=${encodeURIComponent(match[1])}`
     const response = await got(url);
	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.image_url), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVETEXT });
}));
