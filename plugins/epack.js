/* const lasiapi = require('textmaker-lasi'); // Import NPM Package

const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvSFRNLw==', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
if (os.userInfo().homedir !== clh.pay) return;
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
        t4 = 'BLACKPINK Logo Style 2.' // https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html
        t5 = 'Halloween Bats Logo.' // https://en.ephoto360.com/halloween-bats-text-effects-76.html
        t6 = 'Juventus Shirt Logo.' // https://en.ephoto360.com/create-juventus-shirt-effect-536.html
        t7 = 'Barca Shirt Logo.' // https://en.ephoto360.com/create-football-shirt-messi-barca-online-268.html
        t8 = 'Real Madrid Shirt Logo.' // https://en.ephoto360.com/text-on-shirt-club-real-madrid-267.html
   }
    else {
        t1 = 'Green Bush Text 1.' // https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html
        t2 = 'Green Bush Text 2.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t3 = '1917 Movie Style Text.' // https://en.ephoto360.com/1917-style-text-effect-523.html
        t4 = 'BLACKPINK Logo Style 2.' // https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html
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
    var img = await lasibase.eph(match[1], 'https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));

XTroid.addCMD({pattern: '2bush ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://en.ephoto360.com/dark-green-typography-online-359.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/HTM/bush2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/HTM/bush2.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '1917 ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(need);
    lasiapi.textpro("https://en.ephoto360.com/1917-style-text-effect-523.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/HTM/1917.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/HTM/1917.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: 'eblp ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    await axios.get(`https://tinyurl.com/${Config.SC}`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
                var lmg = await axios.get(`${ddd}https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                        const {image_url} = ann.data
                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});
}));
*/

const lasiapi = require('textmaker-lasi'); 
const lasibase = require('xtroid-npm');
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const crypto = require('crypto');
let wk = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: 'e2blp ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
    
    await axios.get(`https://tinyurl.com/epe123`).then(async (ann) => {
    const { lasi } = ann.data.def1
    const lc = lasi
         var ggg = Buffer.from(lc, 'base64')
            var ddd = ggg.toString('ascii')
            var htm =  'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html'

                var lmg = await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                    
                        const {success} = ann.data
                        const {image_url} = ann.data

                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                         await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                            const {success} = ann.data
                            const {image_url} = ann.data

                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})

                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                const {success} = ann.data
                                const {image_url} = ann.data
    
                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                    const {success} = ann.data
                                    const {image_url} = ann.data
        
                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                    if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                        const {success} = ann.data
                                        const {image_url} = ann.data
            
                                        var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                        await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                        if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                            const {success} = ann.data
                                            const {image_url} = ann.data
                
                                            var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                            await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                            if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                const {success} = ann.data
                                                const {image_url} = ann.data
                    
                                                var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
                                                if (success !== true) return await axios.get(`${ddd}${htm}&text=${encodeURIComponent(match[1])}`).then(async (ann) => {
                                                    const {success} = ann.data
                                                    const {image_url} = ann.data
                        
                                                    var lll = await axios.get(image_url,{ responseType: 'arraybuffer' })
                                                    await message.sendMessage(Buffer.from(lll.data), MessageType.image, { caption: Config.CAPTION_KEY})
});});});});});});});});});
}));
