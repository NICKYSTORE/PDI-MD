const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Owner Menu 』
│◦ self 🅞
│◦ public 🅞
│◦ addseller 🅞
│◦ delseller 🅞
│◦ listseller 🅞
│◦ join 🅞
│◦ bctext 🅞
│◦ poll 🅞
│◦ bcimage 🅞
│◦ bcvideo 🅞
│◦ creategc 🅞
│◦ setexif 🅞
│◦ userjid 🅞
│◦ setbotname 🅞
│◦ setbotbio 🅞
│◦ delppbot 🅞
│◦ shutdown 🅞
│◦ setppbot 🅞
│◦ addprem 🅞
│◦ delprem 🅞
│◦ addowner 🅞
│◦ delowner 🅞
│◦ addvn 🅞
│◦ addapk 🅞
│◦ addzip 🅞
│◦ addpdf 🅞
│◦ delapk 🅞
│◦ delzip 🅞
│◦ delpdf 🅞
│◦ delvn 🅞
│◦ addsticker 🅞
│◦ delsticker 🅞
│◦ addimage 🅞
│◦ delimage 🅞
│◦ addvideo 🅞
│◦ delvideo 🅞
│◦ upswtext 🅞
│◦ upswvideo 🅞
│◦ upswimage 🅞
│◦ upswaudio 🅞
│◦ block 🅞
│◦ unblock del 🅞
│◦ leavegc 🅞
│◦ pushcontact 🅞
│◦ pushcontactv2 🅞
└─────────────────✑⊱

┌✑⊱『 Group Menu 』
│◦ antilink 🅖
│◦ antiwame 🅖
│◦ grouplink 🅖
│◦ invite 🅖
│◦ ephemeral 🅖
│◦ delete 🅖
│◦ setppgroup 🅖
│◦ delppgroup 🅖
│◦ setname 🅖
│◦ setdesc 🅖
│◦ add 🅖
│◦ kick 🅖
│◦ promote 🅖
│◦ demote 🅖
│◦ getcontact 🅞
│◦ savecontact 🅞
│◦ sendcontact 🅞
│◦ contactag 🅞
│◦ hidetag 🅖
│◦ totag 🅖
│◦ tagall 🅖
│◦ editinfo 🅖
│◦ opentime 🅖
│◦ closetime 🅖
│◦ resetlink 🅖
│◦ getbio 🅖
│◦ vote 🅖
│◦ upvote 🅖
│◦ downvote 🅖
│◦ checkvote 🅖
│◦ delvote 🅖
│◦ autostickergc 🅖
│◦ antilinkgc 🅖
│◦ antiwame 🅖
│◦ antilinkall 🅖
│◦ antilinktiktok 🅖
│◦ antilinkfb 🅖
│◦ antilinktwitter 🅖
│◦ antilinkig 🅖
│◦ antlinktg 🅖
│◦ antilinkytvid 🅖
│◦ antilinkytch 🅖
│◦ antivirus 🅖
│◦ antitoxic 🅖
│◦ nsfw 🅖
│◦ react 🅖
└─────────────────✑⊱

┌✑⊱『 Download Menu 』
│◦ ytsearch 🅕
│◦ play 🅕
│◦ ytmp3 🅕
│◦ ytmp4 🅕
│◦ tiktokaudio 🅕
│◦ tiktok 🅕
│◦ igvideo 🅕
│◦ igimage 🅕
│◦ apk 🅕
│◦ google 🅕
│◦ imdb 🅕
│◦ weather 🅕
│◦ wanumber 🅕
│◦ spotify 🅟
│◦ gitclone 🅕
│◦ happymod 🅕
│◦ gdrive 🅕
│◦ pinterest 🅕
│◦ ringtone 🅕
└─────────────────✑⊱

┌✑⊱『 Random Video 』
│◦ tiktokgirl 🅕
│◦ tiktoknukthy 🅕
│◦ tiktokkayes 🅕
│◦ tiktokpanrika 🅕
│◦ tiktoknotnot 🅕
│◦ tiktokghea 🅕
│◦ tiktoksantuy 🅕
│◦ tiktokbocil 🅕
└─────────────────✑⊱

┌✑⊱『 Stalker 』
│◦ igstalk 🅕
│◦ ffstalk 🅕
│◦ mlstalk 🅕
│◦ npmstalk 🅕
│◦ ghstalk 🅕
└─────────────────✑⊱

–『 OpenAI 』
│◦ openai 🅕
│◦ ai 🅕
│◦ mathsai 🅕
│◦ remini 🅕
└─────────────────✑⊱

┌✑⊱『 Fun Menu 』
│◦ define 🅕
│◦ qc 🅕
│◦ lyrics 🅕
│◦ suit 🅕
│◦ math 🅕
│◦ tictactoe 🅕
│◦ fact 🅕
│◦ truth 🅕
│◦ dare 🅕
│◦ couple 🅕
│◦ soulmate 🅕
│◦ stupidcheck 🅕
│◦ handsomecheck 🅕
│◦ uncleancheck 🅕
│◦ hotcheck 🅕
│◦ smartcheck 🅕
│◦ greatcheck 🅕
│◦ evilcheck 🅕
│◦ dogcheck 🅕
│◦ coolcheck 🅕
│◦ waifucheck 🅕
│◦ awesomecheck 🅕
│◦ gaycheck 🅕
│◦ cutecheck 🅕
│◦ lesbiancheck 🅕
│◦ hornycheck 🅕
│◦ prettycheck 🅕
│◦ lovelycheck 🅕
│◦ uglycheck 🅕
│◦ pick 🅕
│◦ quotes 🅕
│◦ can 🅕
│◦ is 🅕
│◦ when 🅕
│◦ where 🅕
│◦ what 🅕
│◦ how 🅕
│◦ rate 🅕
│◦ cry 🅕
│◦ kill 🅕
│◦ hug 🅕
│◦ pat 🅕
│◦ lick 🅕 
│◦ kiss 🅕
│◦ bite 🅕
│◦ yeet 🅕
│◦ bully 🅕
│◦ bonk 🅕
│◦ wink 🅕
│◦ poke 🅕
│◦ nom 🅕
│◦ slap 🅕
│◦ smile 🅕 
│◦ wave 🅕
│◦ awoo 🅕
│◦ blush 🅕
│◦ smug 🅕
│◦ glomp 🅕 
│◦ happy 🅕
│◦ dance 🅕
│◦ cringe 🅕
│◦ cuddle 🅕
│◦ highfive 🅕 
│◦ shinobu 🅕
│◦ handhold 🅕
│◦ spank 🅕
│◦ tickle 🅕
│◦ avatar 🅕
│◦ feed 🅕
│◦ foxgirl 🅕
│◦ gecg 🅕
│◦ checkme 🅕
│◦ sound1 - sound161 🅕
└─────────────────✑⊱

┌✑⊱『 Random Photo 』
│◦ aesthetic 🅕
│◦ coffee 🅕
│◦ wikimedia 🅕
│◦ wallpaper 🅕
│◦ art 🅕
│◦ bts 🅕
│◦ dogwoof 🅕
│◦ catmeow 🅕
│◦ lizardpic 🅕
│◦ goosebird 🅕
│◦ 8ballpool 🅕
│◦ cosplay 🅕
│◦ hacker 🅕
│◦ cyber 🅕
│◦ gamewallpaper 🅕
│◦ islamic 🅕
│◦ jennie 🅕
│◦ jiso 🅕
│◦ satanic 🅕
│◦ justina 🅕
│◦ cartoon 🅕
│◦ pentol 🅕
│◦ cat 🅕
│◦ kpop 🅕
│◦ exo 🅕
│◦ lisa 🅕
│◦ space 🅕
│◦ car 🅕
│◦ technology 🅕
│◦ bike 🅕
│◦ shortquote 🅕
│◦ antiwork 🅕
│◦ hacking 🅕
│◦ boneka 🅕
│◦ rose 🅕
│◦ ryujin 🅕
│◦ ulzzangboy 🅕
│◦ ulzzanggirl 🅕
│◦ wallml 🅕
│◦ wallphone 🅕
│◦ mountain 🅕
│◦ goose 🅕
│◦ profilepic 🅕
│◦ couplepp 🅕
│◦ programming 🅕
│◦ pubg 🅕
│◦ blackpink 🅕
│◦ randomboy 🅕  
│◦ randomgirl 🅕
│◦ hijab 🅕  
│◦ chinese 🅕
│◦ indo 🅕
│◦ japanese 🅕
│◦ korean 🅕
│◦ malay 🅕
│◦ thai 🅕
│◦ vietnamese 🅕
└─────────────────✑⊱

┌✑⊱『 Sticker 』
│◦ goose 🅕
│◦ woof 🅕
│◦ 8ball 🅕
│◦ lizard 🅕
│◦ meow 🅕
│◦ gura 🅕
│◦ doge 🅕
│◦ patrick 🅕
│◦ lovestick 🅕
│◦ telestick 🅕
└─────────────────✑⊱

┌✑⊱『 Panel Menu 』
│
│◦ panel 🅞
│◦ listusr 🅞
│◦ delusr 🅞
│◦ listsrv 🅞
│◦ delsrv 🅞
│◦ ramlist 🅞
│◦ addusr 🅞
│◦ addsrv 🅞
│◦ crateadmin 🅞
│◦ listadmin 🅞
└─────────────────✑⊱

┌✑⊱『 Anime 』
│◦ akira 🅕
│◦ akiyama 🅕
│◦ ana 🅕
│◦ asuna 🅕
│◦ ayuzawa 🅕
│◦ boruto 🅕
│◦ chiho 🅕
│◦ chitoge 🅕
│◦ cosplayloli 🅕
│◦ cosplaysagiri 🅕
│◦ deidara 🅕
│◦ doraemon 🅕
│◦ elaina 🅕
│◦ emilia 🅕
│◦ erza 🅕
│◦ gremory 🅕
│◦ hestia 🅕
│◦ husbu 🅕
│◦ inori 🅕
│◦ isuzu 🅕
│◦ itachi 🅕
│◦ itori 🅕
│◦ kaga 🅕
│◦ kagura 🅕
│◦ kakasih 🅕
│◦ kaori 🅕
│◦ keneki 🅕
│◦ kotori 🅕
│◦ kurumi 🅕
│◦ loli 🅕
│◦ madara 🅕
│◦ megumin 🅕
│◦ mikasa 🅕
│◦ mikey 🅕
│◦ miku 🅕
│◦ minato 🅕
│◦ naruto 🅕
│◦ neko 🅕
│◦ neko2 🅕
│◦ nekonime 🅕
│◦ nezuko 🅕
│◦ onepiece 🅕
│◦ pokemon 🅕
│◦ randomnime 🅕
│◦ randomnime2 🅕
│◦ rize 🅕
│◦ sagiri 🅕
│◦ sakura 🅕
│◦ sasuke 🅕
│◦ shina 🅕
│◦ shinka 🅕
│◦ shinomiya 🅕
│◦ shizuka 🅕
│◦ shota 🅕
│◦ tejina 🅕
│◦ toukachan 🅕
│◦ tsunade 🅕
│◦ waifu 🅕
│◦ animewall 🅕
│◦ yotsuba 🅕
│◦ yuki 🅕
│◦ yulibocil 🅕
│◦ yumeko 🅕
│◦ 8ball 🅕
│◦ tickle 🅕
│◦ gecg 🅕
│◦ feed 🅕
│◦ animeawoo 🅕
│◦ animemegumin 🅕
│◦ animeshinobu 🅕
│◦ animehandhold 🅕
│◦ animehighfive 🅕
│◦ animecringe 🅕
│◦ animedance 🅕
│◦ animehappy 🅕
│◦ animeglomp 🅕
│◦ animeblush 🅕
│◦ animesmug 🅕
│◦ animewave 🅕
│◦ animesmille 🅕
│◦ animepoke 🅕
│◦ animewink 🅕
│◦ animebonk 🅕
│◦ animebully 🅕
│◦ animeyeet 🅕
│◦ animebite 🅕
│◦ animelick 🅕
│◦ animekill 🅕
│◦ animecry 🅕
│◦ animewlp 🅕
│◦ animekiss 🅕
│◦ animehug 🅕
│◦ animeneko 🅕
│◦ animepat 🅕
│◦ animeslap 🅕
│◦ animecuddle 🅕
│◦ animewaifu 🅕
│◦ animenom 🅕
│◦ animefoxgirl 🅕
│◦ animegecg 🅕
│◦ animetickle 🅕
│◦ animefeed 🅕
│◦ animeavatar 🅕
│◦ genshin 🅕
│◦ anime 🅕
└─────────────────✑⊱

┌✑⊱『 Anime NSFW 』
│◦ hentai 🅕
│◦ gifhentai 🅕
│◦ gifblowjob 🅕
│◦ hentaivid 🅕
│◦ hneko 🅕
│◦ nwaifu 🅕
│◦ animespank 🅕
│◦ trap 🅕
│◦ gasm 🅕
│◦ ahegao 🅕
│◦ ass 🅕
│◦ bdsm 🅕
│◦ blowjob 🅕
│◦ cuckold 🅕
│◦ cum 🅕
│◦ milf 🅕
│◦ eba 🅕
│◦ ero 🅕
│◦ femdom 🅕
│◦ foot 🅕
│◦ gangbang 🅕
│◦ glasses 🅕
│◦ jahy 🅕
│◦ masturbation 🅕
│◦ manga 🅕
│◦ neko-hentai 🅕
│◦ neko-hentai2 🅕
│◦ nsfwloli 🅕
│◦ orgy 🅕
│◦ panties 🅕 
│◦ pussy 🅕
│◦ tentacles 🅕
│◦ thighs 🅕
│◦ yuri 🅕
│◦ zettai 🅕
└─────────────────✑⊱

┌✑⊱『 PhotoOxy Maker 』
│◦ shadow 🅕 
│◦ write 🅕 
│◦ romantic 🅕 
│◦ burnpaper 🅕
│◦ smoke 🅕 
│◦ narutobanner 🅕 
│◦ love 🅕 
│◦ undergrass 🅕
│◦ doublelove 🅕 
│◦ coffecup 🅕
│◦ underwaterocean 🅕
│◦ smokyneon 🅕
│◦ starstext 🅕
│◦ rainboweffect 🅕
│◦ balloontext 🅕
│◦ metalliceffect 🅕
│◦ embroiderytext 🅕
│◦ flamingtext 🅕
│◦ stonetext 🅕
│◦ writeart 🅕
│◦ summertext 🅕
│◦ wolfmetaltext 🅕
│◦ nature3dtext 🅕
│◦ rosestext 🅕
│◦ naturetypography 🅕
│◦ quotesunder 🅕
│◦ shinetext 🅕
└─────────────────✑⊱

┌✑⊱『 Ephoto360 Maker 』
│◦ glitchtext 🅕
│◦ writetext 🅕
│◦ advancedglow 🅕
│◦ typographytext 🅕
│◦ pixelglitch 🅕
│◦ neonglitch 🅕
│◦ flagtext 🅕
│◦ flag3dtext 🅕
│◦ deletingtext 🅕
│◦ blackpinkstyle 🅕
│◦ glowingtext 🅕
│◦ underwatertext 🅕
│◦ logomaker 🅕
│◦ cartoonstyle 🅕
│◦ papercutstyle 🅕
│◦ watercolortext 🅕
│◦ effectclouds 🅕
│◦ blackpinklogo 🅕
│◦ gradienttext 🅕
│◦ summerbeach 🅕
│◦ luxurygold 🅕
│◦ multicoloredneon 🅕
│◦ sandsummer 🅕
│◦ galaxywallpaper 🅕
│◦ 1917style 🅕
│◦ makingneon 🅕
│◦ royaltext 🅕
│◦ freecreate 🅕
│◦ galaxystyle 🅕
│◦ lighteffects 🅕
└─────────────────✑⊱

┌✑⊱『 Database 』
│◦ setcmd 🅕
│◦ delcmd 🅕
│◦ listcmd 🅕
│◦ lockcmd 🅕
│◦ addmsg 🅕
│◦ delmsg 🅕
│◦ getmsg 🅕
│◦ listmsg 🅕
└─────────────────✑⊱

┌✑⊱『 Bug & War 』
│◦ amountbug 🅟
│◦ pmbug 🅟
│◦ delaybug 🅟
│◦ docubug 🅟
│◦ unlimitedbug 🅟
│◦ bombug 🅟
│◦ lagbug 🅟
│◦ trollybug 🅟
│◦ gcbug 🅟
│◦ delaygcbug 🅟
│◦ laggcbug 🅟
│◦ bomgcbug 🅟
│◦ unlimitedgcbug 🅟
│◦ trollygcbug 🅟
│◦ docugcbug 🅟
│◦ verif 🅟
│◦ banv1 🅟
│◦ banv2 🅟
│◦ banv3 🅟
│◦ banv4 🅟
│◦ banv5 🅟
│◦ banv6 🅟
│◦ unbanv1 🅟
│◦ unbanv2 🅟
│◦ unbanv3 🅟
│◦ unbanv4 🅟
│◦ unbanv5 🅟
└─────────────────✑⊱

┌✑⊱『 Other Menu 』
│◦ ping 🅕
│◦ menu 🅕
│◦ myip 🅕
│◦ thanksto 🅕
│◦ reportbug 🅕
│◦ listhargapanel 🅕
│◦ listpem 🅕
│◦ liststicker 🅕
│◦ listimage 🅕
│◦ listvideo 🅕
│◦ listvn 🅕
│◦ listapk 🅕
│◦ listzip 🅕
│◦ listpdf 🅕
│◦ listbadword 🅕
│◦ listpc 🅕
│◦ listgc 🅕
│◦ idgroup 🅕
│◦ owner 🅕
│◦ totalfitur 🅕
│◦ jadibot 🅕
│◦ listjadibot 🅕
│◦ donate 🅕
│◦ friend 🅕
│◦ obfuscate 🅕
│◦ styletext 🅕
│◦ fliptext 🅕
│◦ tts 🅕
│◦ say 🅕
│◦ togif 🅕
│◦ toqr 🅕
│◦ bass 🅕
│◦ blown 🅕
│◦ deep 🅕
│◦ earrape 🅕
│◦ fast 🅕
│◦ fat 🅕
│◦ nightcore 🅕
│◦ reverse 🅕
│◦ robot 🅕
│◦ slow 🅕
│◦ smooth 🅕
│◦ squirrel 🅕
│◦ tinyurl 🅕
│◦ tinyurl 🅕
│◦ tovn 🅕
│◦ toaudio 🅕
│◦ tomp3 🅕
│◦ tomp4🅕
│◦ toimg 🅕
│◦ toonce 🅕
│◦ sticker 🅕
│◦ take 🅟
│◦ tqto 🅕
│◦ emoji 🅕
│◦ volume 🅕
│◦ ebinary 🅕
│◦ dbinary 🅕
│◦ ssweb 🅕
│◦ quoted 🅕
│◦ runtime 🅕
└─────────────────✑⊱
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Anime 』
│◦ akira 🅕
│◦ akiyama 🅕
│◦ ana 🅕
│◦ asuna 🅕
│◦ ayuzawa 🅕
│◦ boruto 🅕
│◦ chiho 🅕
│◦ chitoge 🅕
│◦ cosplayloli 🅕
│◦ cosplaysagiri 🅕
│◦ deidara 🅕
│◦ doraemon 🅕
│◦ elaina 🅕
│◦ emilia 🅕
│◦ erza 🅕
│◦ gremory 🅕
│◦ hestia 🅕
│◦ husbu 🅕
│◦ inori 🅕
│◦ isuzu 🅕
│◦ itachi 🅕
│◦ itori 🅕
│◦ kaga 🅕
│◦ kagura 🅕
│◦ kakasih 🅕
│◦ kaori 🅕
│◦ keneki 🅕
│◦ kotori 🅕
│◦ kurumi 🅕
│◦ loli 🅕
│◦ madara 🅕
│◦ megumin 🅕
│◦ mikasa 🅕
│◦ mikey 🅕
│◦ miku 🅕
│◦ minato 🅕
│◦ naruto 🅕
│◦ neko 🅕
│◦ neko2 🅕
│◦ nekonime 🅕
│◦ nezuko 🅕
│◦ onepiece 🅕
│◦ pokemon 🅕
│◦ randomnime 🅕
│◦ randomnime2 🅕
│◦ rize 🅕
│◦ sagiri 🅕
│◦ sakura 🅕
│◦ sasuke 🅕
│◦ shina 🅕
│◦ shinka 🅕
│◦ shinomiya 🅕
│◦ shizuka 🅕
│◦ shota 🅕
│◦ tejina 🅕
│◦ toukachan 🅕
│◦ tsunade 🅕
│◦ waifu 🅕
│◦ animewall 🅕
│◦ yotsuba 🅕
│◦ yuki 🅕
│◦ yulibocil 🅕
│◦ yumeko 🅕
│◦ 8ball 🅕
│◦ tickle 🅕
│◦ gecg 🅕
│◦ feed 🅕
│◦ animeawoo 🅕
│◦ animemegumin 🅕
│◦ animeshinobu 🅕
│◦ animehandhold 🅕
│◦ animehighfive 🅕
│◦ animecringe 🅕
│◦ animedance 🅕
│◦ animehappy 🅕
│◦ animeglomp 🅕
│◦ animeblush 🅕
│◦ animesmug 🅕
│◦ animewave 🅕
│◦ animesmille 🅕
│◦ animepoke 🅕
│◦ animewink 🅕
│◦ animebonk 🅕
│◦ animebully 🅕
│◦ animeyeet 🅕
│◦ animebite 🅕
│◦ animelick 🅕
│◦ animekill 🅕
│◦ animecry 🅕
│◦ animewlp 🅕
│◦ animekiss 🅕
│◦ animehug 🅕
│◦ animeneko 🅕
│◦ animepat 🅕
│◦ animeslap 🅕
│◦ animecuddle 🅕
│◦ animewaifu 🅕
│◦ animenom 🅕
│◦ animefoxgirl 🅕
│◦ animegecg 🅕
│◦ animetickle 🅕
│◦ animefeed 🅕
│◦ animeavatar 🅕
│◦ genshin 🅕
│◦ anime 🅕
└─────────────────✑⊱
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Owner Menu 』
│◦ self 🅞
│◦ public 🅞
│◦ addseller 🅞
│◦ delseller 🅞
│◦ listseller 🅞
│◦ join 🅞
│◦ bctext 🅞
│◦ poll 🅞
│◦ bcimage 🅞
│◦ bcvideo 🅞
│◦ creategc 🅞
│◦ userjid 🅞
│◦ setexif 🅞
│◦ setbotname 🅞
│◦ setbotbio 🅞
│◦ delppbot 🅞
│◦ shutdown 🅞
│◦ setppbot 🅞
│◦ addprem 🅞
│◦ delprem 🅞
│◦ addowner 🅞
│◦ delowner 🅞
│◦ addvn 🅞
│◦ addapk 🅞
│◦ addzip 🅞
│◦ addpdf 🅞
│◦ delapk 🅞
│◦ delzip 🅞
│◦ delpdf 🅞
│◦ delvn 🅞
│◦ addsticker 🅞
│◦ delsticker 🅞
│◦ addimage 🅞
│◦ delimage 🅞
│◦ addvideo 🅞
│◦ delvideo 🅞
│◦ upswtext 🅞
│◦ upswvideo 🅞
│◦ upswimage 🅞
│◦ upswaudio 🅞
│◦ block 🅞
│◦ unblock del 🅞
│◦ leavegc 🅞
│◦ pushcontact 🅞
│◦ pushcontactv2 🅞
└─────────────────✑⊱
`}

global.panelmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Panel Menu 』
│
│◦ panel 🅞
│◦ listusr 🅞
│◦ delusr 🅞
│◦ listsrv 🅞
│◦ delsrv 🅞
│◦ ramlist 🅞
│◦ addusr 🅞
│◦ addsrv 🅞
│◦ crateadmin 🅞
│◦ listadmin 🅞
└─────────────────✑⊱`
}

global.listhargapanel = (prefix) => {
return `
┌✑⊱『 List Harga Panel 』
│
│◦ RAM 1 GB / 2K
│◦ RAM 2 GB / 3K
│◦ RAM 3 GB / 4K
│◦ RAM 4 GB / 5K
│◦ RAM 5 GB / 6K
│◦ RAM 6 GB / 7K
│◦ RAM 7 GB / 8K
│◦ RAM 8 GB / 9K
│◦ RAM 9 GB / 10K
│◦ RAM 10 GB / 11K
│◦ RAM UNLI / 12K
└─────────────────✑⊱
 *[ KEUNTUNGAN DAN KE GUNAAN PANEL ]*
┌─────────────────✑⊱
*🗣️ : Kak Kenapa Mahal?*
*👫 : Karena Panel Kami 90%*
      *Aman, Fresh, Private Anti Delay²!*
  
*🗣️ : Kak Keuntungan Panel Dan*
      *Admin Panel Apa Sih?*
*👫 : *Keuntungan Panel Dan Admin Panel*
      *Sebagai Berikut!. ⤵*

*_KEUNTUNGAN PANEL_*

• _Bisa Jadibot_
• _Hemat Penyimpanan_
• _Tidak Boros Kouta_
• _Web Close Bot Tetap On_
• _Server Fresh 90% Lancar_
• _No Delay²_
• _Anti Colong² Script_

*_KEUNTUNGAN ADMIN PANEL_*

• _Bisa Open Seller_
• _Bisa Jualan Panel_
• _Free Sc Cpanel_
• _Server Fresh Anti Delay_
• _Server Private Anti Colong Sc_
- _Run Bot Sepuasnya_ 
• _Website Close Bot Tetap On_

Jika Anda Berminat Silahkan Ketik [ *Owner* ]
*Dan Hubungi Owner Untuk Membeli Panel!.*
*Terimakasih🙏*
└─────────────────✑⊱`
}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Other Menu 』
│◦ ping 🅕
│◦ menu 🅕
│◦ myip 🅕
│◦ reportbug 🅕
│◦ listpem 🅕
│◦ liststicker 🅕
│◦ listimage 🅕
│◦ listvideo 🅕
│◦ listvn 🅕
│◦ listapk 🅕
│◦ listzip 🅕
│◦ listpdf 🅕
│◦ listbadword 🅕
│◦ listpc 🅕
│◦ listgc 🅕
│◦ isgroup 🅕
│◦ owner 🅕
│◦ totalfitur 🅕
│◦ jadibot 🅕
│◦ listjadibot 🅕
│◦ donate 🅕
│◦ friend 🅕
│◦ obfuscate 🅕
│◦ styletext 🅕
│◦ fliptext 🅕
│◦ tts 🅕
│◦ say 🅕
│◦ togif 🅕
│◦ toqr 🅕
│◦ bass 🅕
│◦ blown 🅕
│◦ deep 🅕
│◦ earrape 🅕
│◦ fast 🅕
│◦ fat 🅕
│◦ nightcore 🅕
│◦ reverse 🅕
│◦ robot 🅕
│◦ slow 🅕
│◦ smooth 🅕
│◦ squirrel 🅕
│◦ tinyurl 🅕
│◦ tinyurl 🅕
│◦ tovn 🅕
│◦ toaudio 🅕
│◦ tomp3 🅕
│◦ tomp4🅕
│◦ toimg 🅕
│◦ toonce 🅕
│◦ sticker 🅕
│◦ take 🅟
│◦ emoji 🅕
│◦ volume 🅕
│◦ ebinary 🅕
│◦ dbinary 🅕
│◦ ssweb 🅕
│◦ quoted 🅕
│◦ runtime 🅕
│◦ sound1 - sound161 🅕
└─────────────────✑⊱
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Download Menu 』
│◦ ytsearch 🅕
│◦ play 🅕
│◦ ytmp3 🅕
│◦ ytmp4 🅕
│◦ tiktokaudio 🅕
│◦ tiktok 🅕
│◦ igvideo 🅕
│◦ igimage 🅕
│◦ apk 🅕
│◦ google 🅕
│◦ imdb 🅕
│◦ weather 🅕
│◦ wanumber 🅕
│◦ spotify 🅟
│◦ gitclone 🅕
│◦ happymod 🅕
│◦ gdrive 🅕
│◦ pinterest 🅕
│◦ ringtone 🅕
└─────────────────✑⊱
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Group Menu 』
│◦ antilink 🅖
│◦ antiwame 🅖
│◦ grouplink 🅖
│◦ invite 🅖
│◦ ephemeral 🅖
│◦ delete 🅖
│◦ setppgroup 🅖
│◦ delppgroup 🅖
│◦ setname 🅖
│◦ setdesc 🅖
│◦ add 🅖
│◦ kick 🅖
│◦ promote 🅖
│◦ demote 🅖
│◦ getcontact 🅞
│◦ savecontact 🅞
│◦ sendcontact 🅞
│◦ contactag 🅞
│◦ hidetag 🅖
│◦ totag 🅖
│◦ tagall 🅖
│◦ editinfo 🅖
│◦ opentime 🅖
│◦ closetime 🅖
│◦ resetlink 🅖
│◦ getbio 🅖
│◦ vote 🅖
│◦ upvote 🅖
│◦ downvote 🅖
│◦ checkvote 🅖
│◦ delvote 🅖
│◦ autostickergc 🅖
│◦ antilinkgc 🅖
│◦ antiwame 🅖
│◦ antilinkall 🅖
│◦ antilinktiktok 🅖
│◦ antilinkfb 🅖
│◦ antilinktwitter 🅖
│◦ antilinkig 🅖
│◦ antlinktg 🅖
│◦ antilinkytvid 🅖
│◦ antilinkytch 🅖
│◦ antivirus 🅖
│◦ antitoxic 🅖
│◦ nsfw 🅖
│◦ react 🅖
└─────────────────✑⊱
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Fun Menu 』
│◦ define 🅕
│◦ qc 🅕
│◦ lyrics 🅕
│◦ tictactoe 🅕
│◦ suit 🅕
│◦ math 🅕
│◦ fact 🅕
│◦ truth 🅕
│◦ dare 🅕
│◦ couple 🅕
│◦ soulmate 🅕
│◦ stupidcheck 🅕
│◦ handsomecheck 🅕
│◦ uncleancheck 🅕
│◦ hotcheck 🅕
│◦ smartcheck 🅕
│◦ greatcheck 🅕
│◦ evilcheck 🅕
│◦ dogcheck 🅕
│◦ coolcheck 🅕
│◦ waifucheck 🅕
│◦ awesomecheck 🅕
│◦ gaycheck 🅕
│◦ cutecheck 🅕
│◦ lesbiancheck 🅕
│◦ hornycheck 🅕
│◦ prettycheck 🅕
│◦ lovelycheck 🅕
│◦ uglycheck 🅕
│◦ pick 🅕
│◦ quotes 🅕
│◦ can 🅕
│◦ is 🅕
│◦ when 🅕
│◦ where 🅕
│◦ what 🅕
│◦ how 🅕
│◦ rate 🅕
│◦ cry 🅕
│◦ kill 🅕
│◦ hug 🅕
│◦ pat 🅕
│◦ lick 🅕 
│◦ kiss 🅕
│◦ bite 🅕
│◦ yeet 🅕
│◦ bully 🅕
│◦ bonk 🅕
│◦ wink 🅕
│◦ poke 🅕
│◦ nom 🅕
│◦ slap 🅕
│◦ smile 🅕 
│◦ wave 🅕
│◦ awoo 🅕
│◦ blush 🅕
│◦ smug 🅕
│◦ glomp 🅕 
│◦ happy 🅕
│◦ dance 🅕
│◦ cringe 🅕
│◦ cuddle 🅕
│◦ highfive 🅕 
│◦ shinobu 🅕
│◦ handhold 🅕
│◦ spank 🅕
│◦ tickle 🅕
│◦ avatar 🅕
│◦ feed 🅕
│◦ foxgirl 🅕
│◦ gecg 🅕
│◦ checkme 🅕
│◦ sound1 - sound161 🅕
└─────────────────✑⊱
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Stalker 』
│◦ igstalk 🅕
│◦ ffstalk 🅕
│◦ mlstalk 🅕
│◦ npmstalk 🅕
│◦ ghstalk 🅕
└─────────────────✑⊱
`}

global.stickermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Sticker 』
│◦ goose 🅕
│◦ woof 🅕
│◦ 8ball 🅕
│◦ lizard 🅕
│◦ meow 🅕
│◦ gura 🅕
│◦ doge 🅕
│◦ patrick 🅕
│◦ lovestick 🅕
│◦ telestick 🅕
└─────────────────✑⊱
`}

global.databasemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Database 』
│◦ setcmd 🅕
│◦ delcmd 🅕
│◦ listcmd 🅕
│◦ lockcmd 🅕
│◦ addmsg 🅕
│◦ delmsg 🅕
│◦ getmsg 🅕
│◦ listmsg 🅕
└─────────────────✑⊱
`}

global.aimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 OpenAI 』
│◦ openai 🅕
│◦ ai 🅕
│◦ mathsai 🅕
│◦ remini 🅕
└─────────────────✑⊱
`}

global.bugmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Bug & War 』
│◦ amountbug 🅟
│◦ pmbug 🅟
│◦ delaybug 🅟
│◦ docubug 🅟
│◦ unlimitedbug 🅟
│◦ bombug 🅟
│◦ lagbug 🅟
│◦ trollybug 🅟
│◦ gcbug 🅟
│◦ delaygcbug 🅟
│◦ laggcbug 🅟
│◦ bomgcbug 🅟
│◦ unlimitedgcbug 🅟
│◦ trollygcbug 🅟
│◦ docugcbug 🅟
│◦ verif 🅟
│◦ banv1 🅟
│◦ banv2 🅟
│◦ banv3 🅟
│◦ banv4 🅟
│◦ banv5 🅟
│◦ banv6 🅟
│◦ unbanv1 🅟
│◦ unbanv2 🅟
│◦ unbanv3 🅟
│◦ unbanv4 🅟
│◦ unbanv5 🅟
└─────────────────✑⊱
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Random Photo 』
│◦ aesthetic 🅕
│◦ coffee 🅕
│◦ wikimedia 🅕
│◦ wallpaper 🅕
│◦ art 🅕
│◦ bts 🅕
│◦ dogwoof 🅕
│◦ catmeow 🅕
│◦ lizardpic 🅕
│◦ goosebird 🅕
│◦ 8ballpool 🅕
│◦ cosplay 🅕
│◦ hacker 🅕
│◦ cyber 🅕
│◦ gamewallpaper 🅕
│◦ islamic 🅕
│◦ jennie 🅕
│◦ jiso 🅕
│◦ satanic 🅕
│◦ justina 🅕
│◦ cartoon 🅕
│◦ pentol 🅕
│◦ cat 🅕
│◦ kpop 🅕
│◦ exo 🅕
│◦ lisa 🅕
│◦ space 🅕
│◦ car 🅕
│◦ technology 🅕
│◦ bike 🅕
│◦ shortquote 🅕
│◦ antiwork 🅕
│◦ hacking 🅕
│◦ boneka 🅕
│◦ rose 🅕
│◦ ryujin 🅕
│◦ ulzzangboy 🅕
│◦ ulzzanggirl 🅕
│◦ wallml 🅕
│◦ wallphone 🅕
│◦ mountain 🅕
│◦ goose 🅕
│◦ profilepic 🅕
│◦ couplepp 🅕
│◦ programming 🅕
│◦ pubg 🅕
│◦ blackpink 🅕
│◦ randomboy 🅕  
│◦ randomgirl 🅕
│◦ hijab 🅕  
│◦ chinese 🅕
│◦ indo 🅕
│◦ japanese 🅕
│◦ korean 🅕
│◦ malay 🅕
│◦ thai 🅕
│◦ vietnamese 🅕
└─────────────────✑⊱
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Random Video 』
│◦ tiktokgirl 🅕
│◦ tiktoknukthy 🅕
│◦ tiktokkayes 🅕
│◦ tiktokpanrika 🅕
│◦ tiktoknotnot 🅕
│◦ tiktokghea 🅕
│◦ tiktoksantuy 🅕
│◦ tiktokbocil 🅕
└─────────────────✑⊱
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 PhotoOxy Maker 』
│◦ shadow 🅕 
│◦ write 🅕 
│◦ romantic 🅕 
│◦ burnpaper 🅕
│◦ smoke 🅕 
│◦ narutobanner 🅕 
│◦ love 🅕 
│◦ undergrass 🅕
│◦ doublelove 🅕 
│◦ coffecup 🅕
│◦ underwaterocean 🅕
│◦ smokyneon 🅕
│◦ starstext 🅕
│◦ rainboweffect 🅕
│◦ balloontext 🅕
│◦ metalliceffect 🅕
│◦ embroiderytext 🅕
│◦ flamingtext 🅕
│◦ stonetext 🅕
│◦ writeart 🅕
│◦ summertext 🅕
│◦ wolfmetaltext 🅕
│◦ nature3dtext 🅕
│◦ rosestext 🅕
│◦ naturetypography 🅕
│◦ quotesunder 🅕
│◦ shinetext 🅕
└─────────────────✑⊱
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Ephoto360 Maker 』
│◦ glitchtext 🅕
│◦ writetext 🅕
│◦ advancedglow 🅕
│◦ typographytext 🅕
│◦ pixelglitch 🅕
│◦ neonglitch 🅕
│◦ flagtext 🅕
│◦ flag3dtext 🅕
│◦ deletingtext 🅕
│◦ blackpinkstyle 🅕
│◦ glowingtext 🅕
│◦ underwatertext 🅕
│◦ logomaker 🅕
│◦ cartoonstyle 🅕
│◦ papercutstyle 🅕
│◦ watercolortext 🅕
│◦ effectclouds 🅕
│◦ blackpinklogo 🅕
│◦ gradienttext 🅕
│◦ summerbeach 🅕
│◦ luxurygold 🅕
│◦ multicoloredneon 🅕
│◦ sandsummer 🅕
│◦ galaxywallpaper 🅕
│◦ 1917style 🅕
│◦ makingneon 🅕
│◦ royaltext 🅕
│◦ freecreate 🅕
│◦ galaxystyle 🅕
│◦ lighteffects 🅕
└─────────────────✑⊱
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌✑⊱『 Anime NSFW 』
│◦ hentai 🅕
│◦ gifhentai 🅕
│◦ gifblowjob 🅕
│◦ hentaivid 🅕
│◦ hneko 🅕
│◦ nwaifu 🅕
│◦ animespank 🅕
│◦ trap 🅕
│◦ gasm 🅕
│◦ ahegao 🅕
│◦ ass 🅕
│◦ bdsm 🅕
│◦ blowjob 🅕
│◦ cuckold 🅕
│◦ cum 🅕
│◦ milf 🅕
│◦ eba 🅕
│◦ ero 🅕
│◦ femdom 🅕
│◦ foot 🅕
│◦ gangbang 🅕
│◦ glasses 🅕
│◦ jahy 🅕
│◦ masturbation 🅕
│◦ manga 🅕
│◦ neko-hentai 🅕
│◦ neko-hentai2 🅕
│◦ nsfwloli 🅕
│◦ orgy 🅕
│◦ panties 🅕 
│◦ pussy 🅕
│◦ tentacles 🅕
│◦ thighs 🅕
│◦ yuri 🅕
│◦ zettai 🅕
└─────────────────✑⊱
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})