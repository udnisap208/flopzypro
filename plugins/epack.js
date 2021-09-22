const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const WhatsAsenaStack = require('whatsasena-npm');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: 'epack ?(.*)', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t58 = ''
    var t59 = ''
    var t60 = ''
    var t61 = ''
    var t62 = ''
    var t63 = ''
    var t64 = ''
    var t65 = ''
    var t66 = ''
    var t67 = ''
    var t68 = ''
    var t69 = ''
    var t70 = ''
    var t71 = ''
    var t72 = ''
    var t73 = ''
    var t74 = ''
    var t75 = ''
    var t76 = ''
    var t77 = ''
    var t78 = ''
    var t79 = ''
    var t80 = ''
    
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        
        t58 = '2. Bir Siyah ve Pembe Temalı Logo Yapar.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'PUBG Temalı Video Logo Yapar.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Yol Temalı Logo Yapar.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Üzgün Temalı Logo Yapar.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Animasyonlu Ayı Logosu Yapar.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Animasyonlu Yavru Köpek Logosu Yapar.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = '2. Bir PUBG Temalı Video Logo Yapar.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = '3. Bir PUBG Temalı Logo Yapar.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.
        t66 = 'Kalp Animasyonlu Logo Yapar.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = '4. Bir Graffiti Temalı Logo Yapar.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = '2. Bir Uzay Temalı Logo Yapar.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Melek Temalı Logo Yapar.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Yaprak Temalı Logo Yapar.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Altın Temalı Logo Yapar.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = '3. Bir Uzay Temalı Logo Yapar.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = '3. Bir Alev Temalı Logo Yapar.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html
        t74 = '5. Bir Graffiti Temalı Logo Yapar.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Kar Temalı Logo Yapar.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = '2. Bir Renk Gradyan Temalı Logo Yapar.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = '6. Bir Neon Temalı Logo Yapar.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Sıcak Hava Balonu Temalı Logo Yapar.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = '2. Bir Altın Temalı Logo Yapar.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Matrix Temalı Logo Yapar.' // https://en.ephoto360.com/matrix-text-effect-154.html
    }
    else {
        
        t58 = 'Makes a Second Black and Pink Themed Logo.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'Makes PUBG Themed Video Logo.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Makes Road Themed Logo.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Makes a Sad Themed Logo.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Makes Animated Bear Logo.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Makes Animated Puppy Logo.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = 'Makes Second PUBG Themed Video Logo.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = 'Makes Third PUBG Themed Logo.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html
        t66 = 'Makes Heart Animated Logo.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = 'Makes Fourth Graffiti Themed Logo.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = 'Makes a Second Space Themed Logo.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Makes Angel Themed Logo.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Makes Leaf Themed Logo.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Makes Gold Themed Logo.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = 'Makes a Third Space Themed Logo.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = 'Makes Third Flame Themed Logo.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html 
        t74 = 'Makes Fifth Graffiti Themed Logo.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Makes Snow Themed Logo.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = 'Makes a Second Color Gradient Themed Logo.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = 'Makes a Sixth Neon Themed Logo.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Makes a Hot Air Balloon Themed Logo.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = 'Makes a Second Gold Themed Logo.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Makes Matrix Themed Logos.' // https://en.ephoto360.com/matrix-text-effect-154.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '🌹 *Örnek:* _'
        command_cmd = '🔥 *Komut:* '
        desc_cmd = '🎵 *Açıklama:* _'
    } else { 
        usage_cmd = '*🌹 Example:* _'
        command_cmd = '🔥 *Command:* '
        desc_cmd = '🎵 *Description:* _'
    }
    const msg = 
        command_cmd + '```.e6neon``` \n' + desc_cmd + t77 + '_\n' + usage_cmd + '.e6neon Phaticusthiccy_\n\n' +
        command_cmd + '```.e4graf``` \n' + desc_cmd + t67 + '_\n' + usage_cmd + '.e4graf Phaticusthiccy_\n\n' +
        command_cmd + '```.e5graf``` \n' + desc_cmd + t74 + '_\n' + usage_cmd + '.e5graf Phaticusthiccy_\n\n' +
        command_cmd + '```.e2space``` \n' + desc_cmd + t68 + '_\n' + usage_cmd + '.e2space Phaticusthiccy_\n\n' +
        command_cmd + '```.e3space``` \n' + desc_cmd + t72 + '_\n' + usage_cmd + '.e3space Phaticusthiccy_\n\n' +
        command_cmd + '```.e3fire``` \n' + desc_cmd + t73 + '_\n' + usage_cmd + '.e3fire Phaticusthiccy_\n\n' +      
        command_cmd + '```.e2gradient``` \n' + desc_cmd + t76 + '_\n' + usage_cmd + '.e2gradient Phaticusthiccy_\n\n' +
        command_cmd + '```.e2pink``` \n' + desc_cmd + t58 + '_\n' + usage_cmd + '.e2pink Phaticusthiccy_\n\n' +
        command_cmd + '```.epubg``` \n' + desc_cmd + t59 + '_\n' + usage_cmd + '.epubg Phaticusthiccy_\n\n' +
        command_cmd + '```.eroad``` \n' + desc_cmd + t60 + '_\n' + usage_cmd + '.eroad Phaticusthiccy_\n\n' +
        command_cmd + '```.esad``` \n' + desc_cmd + t61 + '_\n' + usage_cmd + '.esad Phaticusthiccy_\n\n' +
        command_cmd + '```.eabear``` \n' + desc_cmd + t62 + '_\n' + usage_cmd + '.eabear Phaticusthiccy_\n\n' +
        command_cmd + '```.epuppy``` \n' + desc_cmd + t63 + '_\n' + usage_cmd + '.epuppy Phaticusthiccy_\n\n' +
        command_cmd + '```.e2pubg``` \n' + desc_cmd + t64 + '_\n' + usage_cmd + '.e2pubg Phaticusthiccy_\n\n' +
        command_cmd + '```.e3pubg``` \n' + desc_cmd + t65 + '_\n' + usage_cmd + '.e3pubg Phaticusthiccy_\n\n' +
        command_cmd + '```.eheart``` \n' + desc_cmd + t66 + '_\n' + usage_cmd + '.eheart Phaticusthiccy_\n\n' +
        command_cmd + '```.eangel``` \n' + desc_cmd + t69 + '_\n' + usage_cmd + '.eangel Phaticusthiccy_\n\n' +
        command_cmd + '```.eleaf``` \n' + desc_cmd + t70 + '_\n' + usage_cmd + '.eleaf Phaticusthiccy_\n\n' +
        command_cmd + '```.egold``` \n' + desc_cmd + t71 + '_\n' + usage_cmd + '.egold Phaticusthiccy_\n\n' +
        command_cmd + '```.e2gold``` \n' + desc_cmd + t79 + '_\n' + usage_cmd + '.e2gold Phaticusthiccy_\n\n' +
        command_cmd + '```.esnow``` \n' + desc_cmd + t75 + '_\n' + usage_cmd + '.esnow Phaticusthiccy_\n\n' +
        command_cmd + '```.eballoon``` \n' + desc_cmd + t78 + '_\n' + usage_cmd + '.eballoon Phaticusthiccy_\n\n' +
        command_cmd + '```.ematrix``` \n' + desc_cmd + t80 + '_\n' + usage_cmd + '.ematrix Phaticusthiccy_\n\n' 
        
    await message.client.sendMessage(message.jid,msg, MessageType.e, { quoted: message.data })
}));

XTroid.addCMD({pattern: 'eleaf ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'ematrix ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/matrix-text-effect-154.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'e2gradient ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'eballoon ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'esnow ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'e2gold ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/gold-text-effect-pro-271.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'e5graf ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
  var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'e3fire ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'e2space ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena'})
}));
XTroid.addCMD({pattern: 'e3space ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'egold ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/modern-gold-3-212.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'e3space ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'eangel ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/wings-galaxy-206.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'e2pink ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'eabear ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena', mimetype: Mimetype.gif })
}));
XTroid.addCMD({pattern: 'e6neon ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
XTroid.addCMD({pattern: 'eheart ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena', mimetype: Mimetype.gif })
}));
XTroid.addCMD({pattern: 'e4graf ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'epuppy ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena', mimetype: Mimetype.gif })
}));
XTroid.addCMD({pattern: 'eroad ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'esad ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'e3pubg ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena' })
}));
XTroid.addCMD({pattern: 'epubg ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var vid = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena', mimetype: Mimetype.mp4 })
}));
XTroid.addCMD({pattern: 'e2pubg ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    var vid = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { mimetype: Mimetype.png, caption: 'Made by WhatsAsena', mimetype: Mimetype.mp4 })
}));
