`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐ธ|      (๐)๐๐๐ง๐๐ซ ๐๐ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐ธ|`;
`|๐ธ|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`./_๐๐๐_`);
const ๊ฐแดแดแด = require(`./oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Zener_Text_But = async (ำสวำษจีผส, chat, ฦึสศถวีผว, โ๐๐๐๐๐โข, MainText) => {
try {
if (ฦึสศถวีผว.isReply) {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
const buttonMessage = {
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 1,
};
ำสวำษจีผส
.sendMessage(ฦึสศถวีผว.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
})
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
} else {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ฦึสศถวีผว.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const buttonMessage = {
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 1,
};
ำสวำษจีผส
.sendMessage(ฦึสศถวีผว.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
})
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
}
} catch (Error) {
return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat);
}
};
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Zener_Image_But = async (ำสวำษจีผส, chat, ฦึสศถวีผว, MainText, MediaUrl) => {
try {
if (ฦึสศถวีผว.isReply) {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
const media = await ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.image,
{ mimetype: Mimetype.png }
);
return await ำสวำษจีผส
.sendMessage(
ฦึสศถวีผว.chatId,
{
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
}
)
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
} else {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ฦึสศถวีผว.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const media = await ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.image,
{ mimetype: Mimetype.png }
);
return await ำสวำษจีผส
.sendMessage(
ฦึสศถวีผว.chatId,
{
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
}
)
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
}
} catch (Error) {
return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat);
}
};
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Zener_Video_But = async (ำสวำษจีผส, chat, ฦึสศถวีผว, MainText, MediaUrl) => {
try {
if (ฦึสศถวีผว.isReply) {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
const media = await ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/mp4` }
);
return await ำสวำษจีผส
.sendMessage(
ฦึสศถวีผว.chatId,
{
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
}
)
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
} else {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ฦึสศถวีผว.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const media = await ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/mp4` }
);
return await ำสวำษจีผส
.sendMessage(
ฦึสศถวีผว.chatId,
{
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
}
)
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
}
} catch (Error) {
return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat);
}
};
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Zener_GIF_But = async (ำสวำษจีผส, chat, ฦึสศถวีผว, MainText, MediaUrl) => {
try {
if (ฦึสศถวีผว.isReply) {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
const media = await ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/gif` }
);
return await ำสวำษจีผส
.sendMessage(
ฦึสศถวีผว.chatId,
{
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
}
)
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
} else {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ฦึสศถวีผว.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const media = await ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.video,
{ mimetype: `video/gif` }
);
return await ำสวำษจีผส
.sendMessage(
ฦึสศถวีผว.chatId,
{
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
}
)
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
}
} catch (Error) {
return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat);
}
};
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Zener_VideoAudio_But = async (
ำสวำษจีผส,
chat,
ฦึสศถวีผว,
MainText,
MediaUrl
) => {
try {
if (ฦึสศถวีผว.isReply) {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
} else {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ฦึสศถวีผว.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
}
const media = ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.mp4Audio,
{ mimetype: `audio/mp4` }
);
const buttonMessages = {
videoMessage: media.message.videoMessage,
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 5,
};
ำสวำษจีผส
.sendMessage(ฦึสศถวีผว.chatId, buttonMessages, MessageType.buttonsMessage, {
mimetype: Mimetype.mp4Audio,

quoted: chat,
})
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
} catch (Error) {
return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat);
}
};
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Zener_Location_But = async (
ำสวำษจีผส,
chat,
ฦึสศถวีผว,
MainText,
MediaUrl
) => {
try {
if (ฦึสศถวีผว.isReply) {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
} else {
var ีกษฆึึษีผศถษฆวศถ = ฦึสศถวีผว.sender;
var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ
.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ฦึสศถวีผว.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
}
const media = ำสวำษจีผส.prepareMessage(
ฦึสศถวีผว.chatId,
{ url: MediaUrl },
MessageType.location
);
const buttonMessages = {
locationMessage: media.message.locationMessage,
contentText: MainText,
footerText: `โฟ ยฉ๏ธ ๐๐๐ง๐๐ซ ๐๐ โ`,
buttons: [
{
buttonId: `${แดแดษช}help`,
buttonText: { displayText: `${แดแดษช}help` },
type: 1,
},
{
buttonId: `${แดแดษช}faq`,
buttonText: { displayText: `${แดแดษช}faq` },
type: 1,
},
],
headerType: 6,
};
ำสวำษจีผส
.sendMessage(ฦึสศถวีผว.chatId, buttonMessages, MessageType.buttonsMessage, {
quoted: chat,
})
.catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat));
} catch (Error) {
return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ฦึสศถวีผว, chat);
}
};
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
module.exports = {
MTB: Zener_Text_But,
MGB: Zener_GIF_But,
MIB: Zener_Image_But,
MVB: Zener_Video_But,
MLB: Zener_Location_But,
MAB: Zener_VideoAudio_But,
};
`|๐ธ|`;
`|๐ธ|`;
`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐ธ|      (๐)๐๐๐ง๐๐ซ ๐๐ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
