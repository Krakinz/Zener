`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐ธ|      (๐)๐๐๐ง๐๐ซ ๐๐ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐ธ|`;
`|๐ธ|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const _๐๐๐_ = require(`./_๐๐๐_`);
require(`python-format-js`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const vers = require(`../package.json`);
const Ping = Pong.toFixed(4) * 60;
const date = require(`date-and-time`);
const now = new Date();
const cleanRF = require(`./cleanRF`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const fs = require(`fs`);
var Flower = [`๐`, `๐ป`, `๐ผ`, `๐น`, `๐ธ`, `๐ฎ`];
var People = [`๐ฎ`, `๐ณ`, `๐คฑ`, `๐คฐ`, `๐`];
`โฌก๐ธโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
exports.welbuts = async (
ำสวำษจีผส,
GroupID,
GroupMemData,
GroupMemG,
GroupMemBio,
MemNum,
Message
) => {
try {
const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
const PeopleWel = People[Math.floor(Math.random() * People.length)];
var แดแดแดกแดสแดแดแดแด = MemNum.substring(0, MemNum.length - 15).replace(
/[+ ]/g,
""
);
let ๐ป๐ป๐๐๐๐๐;
try {
๐ป๐ป๐๐๐๐๐ = await ำสวำษจีผส.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
} catch {
๐ป๐ป๐๐๐๐๐ = "https://i.postimg.cc/wxWL9G8F/no-profile-picture-300x216.png";
}
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐ธ๐๐จ๐ซ๐ญ๐๐ง๐๐๐(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
const downloader = await new Downloader({
url: ๐ป๐ป๐๐๐๐๐,
directory: `./`,
fileName: `${Date.now().toString()}.png`,
cloneFiles: false,
});
try {
await downloader.download();
const media = await ำสวำษจีผส.prepareMessage(
GroupID,
fs.readFileSync(`./${Date.now().toString()}.png`),
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ำสวำษจีผส
.sendMessage(
GroupID,
{
contentText: `
โโโโโโโโโโโโโโโโโโ
โ  ๐ฅ๐๐๐ฅ๐๐จ๐ฆ๐๐ซ๐ฅ
โโโโโโโโโโโโโโโโโโ

โโโโโโโฃ๏ธ๐?๐ฒ๐ป๐๐ถ๐ผ๐ป: @${แดแดแดกแดสแดแดแดแด}
โ${FlowerWel} ๐๐ถ๐ผ: ${GroupMemBio.status}
โ${PeopleWel} ๐๐๐ฆ๐๐๐ซ๐ณ: ${GroupMemG}
โ๐ช ๐๐ซ๐จ๐ฎ๐ฉ: ${GroupMemData.subject}
โโโโโโโโโโโโโโ

${Message}`,
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
contextInfo: { mentionedJid: [MemNum] },
}
)
.catch((Error) => console.log(Error));
return await cleanRF.cleanRF(`./${Date.now().toString()}.png`);
} catch (Error) {
const media = await ำสวำษจีผส.prepareMessage(
GroupID,
{ url: ๐ป๐ป๐๐๐๐๐ },
MessageType.image,
{
mimetype: Mimetype.png,
}
);
await ำสวำษจีผส
.sendMessage(
GroupID,
{
contentText: `๐ชถ ๐๐๐ฒ: @${แดแดแดกแดสแดแดแดแด}
โโโโโโโโโโโโโโโโโโ
โ  ๐ฅ๐๐๐ฅ๐๐จ๐ฆ๐๐ซ๐ฅ
โโโ
โโโ
โ${FlowerWel} ๐๐ถ๐ผ: ${GroupMemBio.status}
โ${PeopleWel} ๐๐๐ฆ๐๐๐ซ๐ณ: ${GroupMemG}
โ๐ช ๐๐ซ๐จ๐ฎ๐ฉ: ${GroupMemData.subject}
โโโโโโโโโโโโโโ

${Message}`,
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
contextInfo: { mentionedJid: [MemNum] },
}
)
.catch((Error) => console.log(Error));
}
} catch (Error) {
console.log(Error);
}
};
`|๐ธ|`;
`|๐ธ|`;
`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐ธ|      (๐)๐๐๐ง๐๐ซ ๐๐ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐ธ|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
