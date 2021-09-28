const XTroid = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"
const Ln = "HPACK Logolist"
const HPK = `_*👻 H-PACK 👻_*
*🎃 - .silk* text
*🎃 - .lava* text
*🎃 - .rock* text
*🎃 - .sbanner* text
*🎃 - .warface* text
*🎃 - .coverwatch* text
*🎃 - .mtm* text
*🎃 - .wmatrix* text
*🎃 - .sand* text
*🎃 - .bcwall* text
*🎃 - .ninjalogo* text
*🎃 - .buttonyt* text
*🎃 - .glitch* text
*🎃 - .freefire* text
*🎃 - .cfire* text
*🎃 - .light* text
*🎃 - .cslogo* text
*🎃 - .nlogo* text
*🎃 - .s3d* text
*🎃 - .neolight* text
*🎃 - .blood* text
*🎃 - .3dtext* text
*🎃 - .nsky* text
*🎃 - .nleaves* text
*🎃 - .nglow* text
*🎃 - .nfire* text
*🎃 - .anony* text
*👻 _H-PACK PRO 👻*_
*🎃 - .ptext* text
*🎃 - .colortext* text
*🎃 - .vtext* text`



if (Config.WORKTYPE == 'public') {
XTroid.addCMD({pattern: 'hpack', fromMe: false, deleteCommand: false, desc: Ln,}, (async (message, match) => {
  await message.client.sendMessage(message.jid,HPK, MessageType.text);}));

 XTroid.addCMD({pattern: 'freefire ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikeyVI6j4t4wCbwoc6Deh5wgrJL2Kt1=&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'cfire ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})
  
      }));

XTroid.addCMD({pattern: 'light ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})
    
    }));

XTroid.addCMD({pattern: 'cslogo ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})
  
    }));

XTroid.addCMD({pattern: 's3d ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({ pattern: 'nlogo ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY })

    }));

XTroid.addCMD({pattern: 'neonlight ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'blood ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: '3dtext ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

   }));

XTroid.addCMD({pattern: 'nfire ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'ninjalogo ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'nglow ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'nleaves ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'nsky ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'buttonyt ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'bcwall ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'anony ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=2270813be0bf2e3fbf0415cc&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'vtext ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=62203531b66c44b4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'ptext ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=62203531b66c44b4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'colortext ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=cc9e73713a1857f5`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'emoji ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'rock ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'warface ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/warface?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'sbanner ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/shinebannerlol?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'sand ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'lava ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'wmatrix ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'mtm ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/multimaterial?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'coverwatch ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/coveroverwatch?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'silk ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/silk?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:  Config.CAPTION_KEY})

    }));

}

if (Config.WORKTYPE == 'private') {
XTroid.addCMD({pattern: 'hpack', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {
  await message.client.sendMessage(message.jid,HPK, MessageType.text);}));
    
XTroid.addCMD({pattern: 'glitch ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/gtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'freefire ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikeyVI6j4t4wCbwoc6Deh5wgrJL2Kt1=&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'cfire ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
  
      }));

XTroid.addCMD({pattern: 'light ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));

XTroid.addCMD({pattern: 'cslogo ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
  
    }));

XTroid.addCMD({pattern: 's3d ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
XTroid.addCMD({ pattern: 'nlogo ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));

XTroid.addCMD({pattern: 'neonlight ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'blood ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=ab9942f95c09ca89`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: '3dtext ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

   }));

XTroid.addCommand({pattern: 'nfire ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'ninjalogo ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'nglow ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'nleaves ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'nsky ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'ytbutton ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'bcwall ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'anony ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=2270813be0bf2e3fbf0415cc&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'vtext ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=62203531b66c44b4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'ptext ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=62203531b66c44b4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'colortext ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=cc9e73713a1857f5`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption:  Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'emoji ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=VI6j4t4wCbwoc6Deh5wgrJL2Kt1&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'rock ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/rock?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'warface ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/warface?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'sbanner ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/shinebannerlol?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'sand ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/sandwriting??text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'lava ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/lava?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'wmatrix ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/underwebmatrix?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'mtm ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/multimaterial?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'coverwatch ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/coveroverwatch?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

XTroid.addCMD({pattern: 'silk ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/silk?text=${match[1]}&APIKEY=0aaf6f8151148cb2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

}
