const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Tenor252:K@mgangjovany25@cluster0.swgl0da.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237698181728";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjR2bG9ENHRvK0xwRlVIV3RldDBTOUFkRDFxNU90SDNuUlpqcDJneVFEUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1sUm12RDZtUlBlal9feWhZTmI5YUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE5OTk4MjQtMDkxYy00YmJhLWI3ZjAtYzY0ZjhkZmZmYjM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDExMixcbiAgICAgIDEwNCxcbiAgICAgIDg3LFxuICAgICAgMjQ0LFxuICAgICAgMzgsXG4gICAgICA3MixcbiAgICAgIDYsXG4gICAgICAxOTIsXG4gICAgICAyMzcsXG4gICAgICAyMyxcbiAgICAgIDI2LFxuICAgICAgMTIsXG4gICAgICAxMjQsXG4gICAgICAyMSxcbiAgICAgIDE1MyxcbiAgICAgIDI0NixcbiAgICAgIDE4NSxcbiAgICAgIDc4LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE4OSxcbiAgICAgIDE2LFxuICAgICAgMjE1LFxuICAgICAgMjMsXG4gICAgICAxNDMsXG4gICAgICAyNTAsXG4gICAgICAxNzIsXG4gICAgICAxNixcbiAgICAgIDE0MyxcbiAgICAgIDI1MyxcbiAgICAgIDE0LFxuICAgICAgMjQ4LFxuICAgICAgMjE2LFxuICAgICAgMjQyLFxuICAgICAgMSxcbiAgICAgIDgsXG4gICAgICA3MyxcbiAgICAgIDEyOCxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY2RjNMQUFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTgxODE3Mjg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MjEwOTkyNzczOTYwMzoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTDFscWNHRUxXaHJMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRxU05xNFFhN056Zmxybk10azhNMzVSRGU2djJQUlFEczBIU0ZvUHZHVnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUNrS2xEUjl3Z25OVHpoZG9ERlQzN2t3OXRsNHpoOEpyalhGNC9QK1Z2ZG9rNnBsUWxVVUFNUm9zZEowSktyOU9CdXlweWJhVHJhRStwalk5Y085RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1FXQVRQYTlDaTJoOGRuQzlCWmhCTTNOUFRiRVlwVlRXYWlYeGFoQU9FcEwya3Q5dkFaaDlGZUVFZ3lYSmYvUmp5L2o0QS81Rk15OVlUN21UZHJSaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njk4MTgxNzI4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjkyNjY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQktnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCS2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxU0MxUUR4aFphVUxlWGZQRVNpWlE5dEJGTXYvQVFjbExBREVHd0k4Q1BnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2OTI3NzcyMDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODczMzY4Njc2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-WATUpDcG2ouAWEKhXCeST3BlbkFJm6pbjFLpvEp3lkZw6BuQ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
