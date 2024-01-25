const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoReading = true //auto recording (true to on, false to off)
global.autoTyping = true //auto tying (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = true //auto block 212 (true to on, false to off)
global.autokickmorroco = true //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//—————「 Apikey Panel 」—————//
global.domain = 'https://fregazz.pannelvvip.my.id' // Isi Domain Lu
global.apikey2 = 'ptla_ZlSKZv67HRgoZT1s7OQC9PrQ5woqk2rAGLCqAGQWGix' // Isi Apikey Plta Lu
global.capikey2 = 'pltc_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // Sesuain Ama EGGS Lu
global.location = '1' // Sesuain Ama Location Lu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ownernomer = "6282143965793" //ur owner number2
global.ownername = "Mega Wati / [ Mega Lodon ]" //ur owner name
global.ytname = "YT: NESF_NICKY" //ur yt chanel name
global.socialm = "GitHub: RifalBotz-Md" //ur github or insta name
global.location = "Indonesia, Jawa Timur, Madura" //ur location

//new
global.botname = "P D I - P E R J U A N G A N"
global.ownernumber = '62XNXX'
global.ownerNumber = ["6282143965793@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@NESF_NICKY"
global.websitex = "https://youtube.com/@NESF_NICKY"
global.wagc = "https://chat.whatsapp.com/CUCSSvTRdCIBbS2xQDj7am""
global.themeemoji = '🪀'
global.wm = "RifalModzYT"
global.botscript = 'https://youtube.com/@NESF_NICKY' //script link
global.packname = "Sticker By
NESF_NICKY"
global.author = "NESF_NICKY +_+"
global.creator = "6282143965793@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'RifalModzYT' //Jangan Di Ubah Ya! Soalnya Ada Yang gwe Pasangin Di Fiturnya Takutnya Bakal Eror!
global.hituet = 0

//media target
global.thum = fs.readFileSync("./MediaRifal/theme/RifalModz.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./MediaRifal/theme/RifalModz.jpg") //ur logo pic
global.err4r = fs.readFileSync("./MediaRifal/theme/RifalModz.jpg") //ur error pic
global.thumb = fs.readFileSync("./MediaRifal/theme/RifalModz.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '```Done Boss!...```', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})