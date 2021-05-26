/**
 ☑️ Resource Parser ©𝐒𝐡𝐚𝐰𝐧 ⟦2021-05-01 21:20⟧
 --------------------------------------------------  --------
 🛠 Found 𝐁𝐔𝐆 Please feedback: @Shawn_KOP_bot
 ⛳️ Follow 🆃🅶 Related channels: https://t.me/QuanX_API
 🗣 🆃🄷🄰🄽🄺🅂 🆃🄾 @Jamie CHIEN, @M**F**, @c0lada, @Peng-YM

 🤖 Main functions:
 ❶ Parse server subscriptions in other formats into 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 format
 ☑︎ support 𝗩𝗺𝗲𝘀𝘀 / 𝗦𝗦 (𝗥 / 𝗗) / 𝗛𝗧𝗧𝗣 (𝗦) / 𝗧𝗿𝗼𝗷𝗮𝗻 / 𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁 (𝗫) / 𝗦𝘂𝗿𝗴𝗲 / 𝐂𝐥𝐚𝐬𝐡 / 𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭 / 𝐋𝐨𝐨𝐧 format
 ☑︎ Provide instructions for optional personalized parameters in 1⃣️ (filtering, renaming, etc.)
 ❷ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(rewrite) & 𝗳𝗶𝗹𝘁𝗲𝗿(diversion) conversion & filtering
 ☑︎ is used to disable certain (several) items in remote references.
 ☑︎ 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 type rule 𝗹𝗶𝘀𝘁 and module 𝐦𝐨𝐝𝐮𝐥𝐞
 --------------------------------------------------  --------
 0️⃣ ⟦Original link⟧ is used after adding "#", and different parameters are connected with "&":
 ⚠️ ☞ https://mysub.com#emoji=1&tfo=1&in=Hong Kong+Taiwan
 ❖ To quote local resource fragments, please fill in the parameter "#𝗶𝗻=𝘅𝘅𝘅." in line ① of the file ❖
 ❖ 🚦 Support Chinese, please replace the following special characters when "operating" 🚦
   ∎ "+"⇒"%2B", space⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\."

 1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 node⟧ ➠ parameter description:
 ⦿ info=1, turn on the notification prompt airport ✈️ Traffic information (if provided);
 ⦿ emoji=1 (2 for national bank equipment)/-1, add/remove regional flags in the node name;
 ⦿ udp=1/-1, tfo=1/-1, respectively forced to open (close) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
 ⦿ tls13=1, cert=1, respectively enable 𝐭𝐥𝐬1.3 and 𝐭𝐥𝐬 certificate verification (default off);
 ⦿ in, out, and regex are reserved, deleted, and regular filter nodes respectively;
   ❖ In, out, multiple parameters (logical "or") are represented by "+", and logical "and" are represented by ".";
   ❖ In/out/regex all match the complete information of the node (type, port, encryption, etc.);
   ❖ Demonstration: "in=Hong Kong.0\.2 rate+Taiwan&out=Hong Kong%20BGP&regex=(?i)iplc"
 ⦿ rename rename, "old name@新名", "prefix@", "@postfix", connect multiple parameters with "+";
   ❖ Delete field: "Field 1. Field 2☠️", use "\." instead when you want to delete "."
   ❖ Demonstration: "rename=Hong Kong@𝐇𝐊+[𝐒𝐒]@+@[1𝐗]+flow.0\.2☠️"
   ❖ The default Mr. emoji effect, if you want to change the order, please use 𝗿𝗿𝗻𝗮𝗺𝗲 parameters
   ❖ $type0/1/2/3/4/5 placeholders, take the node type (ss/ssr/vmess, etc.) as operable parameters, such as
     ∎ rename=@|$type2
     ∎ The styles are "𝐬𝐬", "𝐒𝐒", "🅢🅢", "🆂🆂", "ⓢⓢ", "🅂🅂"
   ❖ $emoji1/2 placeholder, take the node area emoji (🇭🇰 🇯🇵 etc.) as operable parameters, such as
     ∎ rename=@「$emoji1」
 ⦿ suffix=-1/1 Add the node type as a prefix/suffix to the node name, such as ``𝗌𝗌'' ``𝖵𝗆𝖾𝗌𝗌''
 ⦿ ptn=1-6, respectively replace the English in the node name with pattern words ⇒ 🅰/🄰/𝐀/𝗮/𝔸/𝕒
 ⦿ npt=1-6, respectively replace the numbers in the node name with pattern numbers ⇒ ①\❶\⓵\𝟙\¹\₁
 ⦿ delreg, use regular expressions to delete fields in "node name" (⚠️ use with caution)
 ⦿ replace parameter, regular replacement of the content in the node, can be used to rename/change the encryption method, etc.
   ❖ replace=regex1@𝘀𝘁𝗿1+regex2@𝘀𝘁𝗿2
   ❖ replace=𝗿𝗲𝗴𝗲𝘅1@ is equivalent to 𝗱𝗲𝗹𝗿𝗲𝗴 Parameters
 ⦿ sort=1/-1/x/specified rule, sorted by node name forward/reverse/random/specified rule
   ❖ The specified rules are regular expressions or simple keywords, connect with "<" or ">"
   ❖ sort=🇭🇰>🇸🇬>🇯🇵>🇺🇸, sort first
   ❖ sort=IEPL<IPLC<BGP, sort backward
 ⦿ del=1, when there is a node with the same name, use this parameter to delete the duplicate node (rename and keep by default)
 ⦿ ⟦Advanced parameters⟧: 𝘀𝗳𝗶𝗹𝘁𝗲𝗿/𝘀𝗿𝗲𝗻𝗮𝗲𝗻𝗮𝗺𝗲, pass in a base64-encoded script, which can be used for more complex [filter/rename] requirements
   ❖ Description: https://github.com/KOP-XIAO/QuantumultX/pull/9

2⃣️ ⟦𝐫𝐞𝐰𝐫𝐢𝐭𝐞 rewrite ⟧/⟦𝐟𝐢𝐥𝐭𝐞𝐫 shunt⟧ ➠ parameter description:
 ⦿ in, out, keep/disable related diversion and rewrite rules according to keywords;
 ⦿ inhn, outhn, "Keep/Delete" hostname (𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆);
   ❖ Demonstration: Disable "Taobao Price Comparison" and "weibo" js with the same host name
   𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐥𝐢𝐬𝐭#𝒐𝒖𝒕=tb_price.js+wb_ad.js&outhn=weibo
 ⦿ regex, regular filtering, please toss the regular expression yourself;
   ❖ Can be used together with in(hn)/out(hn), in(hn)/out(hn) will be executed first;
   ❖ Yes
 ⦿ policy parameter, used to directly specify the policy group, or 𝐒𝐮𝐫𝐠𝐞 type 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 to generate a policy group (default "𝐒𝐚𝐰)𝐧"
 ⦿ replace parameter, regular replacement 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 content, regex@newregex;
   ❖ Replace the script in Taobao price comparison with the lite version, and replace JP in tiktok with KR
     ∎ replace=(price)(.*)@$1_lite$2+jp@kr
 ⦿ dst=rewrite/filter, respectively, to convert 𝐦𝐨𝐝𝐮𝐥𝐞&𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 into rewrite/diversion;
   ❖ ⚠️ Convert 𝐦𝐨𝐝𝐮𝐥𝐞 to rewrite by default, 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 to component flow
   ❖ ⚠️ When converting 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 𝐮𝐫𝐥-𝐫𝐞𝐠𝐞𝐱 to rewrite, you must add dst=rewrite;
   ❖ ⚠️ When converting the shunt rules in 𝐦𝐨𝐝𝐮𝐥𝐞, you must add dst=filter
 ⦿ cdn=1, convert the address of the github script to cdn.jsdelivr.net

3⃣️ Other parameters
 ⦿ Notification parameter ntf=0/1, used to close/open the prompt notification of the resource parser
   ❖ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 default "on" notification prompt to prevent accidental deletion of rules
   ❖ 𝘀𝗲𝗿𝘃𝗲𝗿 resource analysis is "off" notification prompt by default
 ⦿ Type parameter type=domain-set/rule/module/list/nodes
   ❖ When the parser fails to correctly identify the type, you can try to use this parameter to force the specification
 ⦿ Hidden parameter hide=1, hide the filtered diversion/rewrite, the default method is disabled
 --------------------------------------------------  --------
 */


/**
 * Instructions for use,
 0️⃣ In the [general] section of the QuantumultX configuration file, add
 resource_parser_url = https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
 ⚠️⚠️If it says "No custom parser", please press and hold the icon in the lower right corner and then click the refresh button on the left to update the resource and exit the app in the background until the parser description appears
 1️⃣ Assuming the original subscription connection is: https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt,
 2️⃣ Assuming that the parameter you want to keep is in=tls+ss, and the parameter you want to filter is out=http+2, please note that the "#" symbol must be added after the subscription link below
 3️⃣ Then fill in the total link referenced by the Quanx node as https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt#in=tls+ss&out=http+2
 4️⃣ Fill in the above link and open the resource parser switch
 ------------------------------
 */


//beginning parser is used normally, debugging and commenting this part

 let [link0, content0, subinfo] = [$resource.link, $resource.content, $resource.info]
 const subtag = $resource.tag != undefined? $resource.tag: "";
 ////// The sand sculpture situation of non-raw links
 content0 = content0.indexOf("DOCTYPE html") != -1 && link0.indexOf("github.com") != -1? ToRaw(content0): content0;
 //ends normal use part, debugging comment this part


 var para = /^(http|https)\:\/\//.test(link0)? link0: content0.split("\n")[0];
 var para1 = para.slice(para.indexOf("#") + 1).replace(/\$type/g,"node_type_para_prefix").replace(/\$emoji/g,"node_emoji_flag_prefix") //Prevent parameters  "#" also exists in other positions in
 var mark0 = para.indexOf("#") != -1? true: false; //Is there any parameters to be parsed
 var Pinfo = mark0 && para1.indexOf("info=") != -1? para1.split("info=")[1].split("&")[0]: 0;
 var ntf_flow = 0;
 //Common amount
 const Base64 = new Base64Code();
 const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&'); //Handle special symbols  So that regular matching can be used
 var link1 = link0.split("#")[0]
 const qxpng = "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png" // server sub-info link
 const subinfo_link = {"open-url": "https://t.me/QuanX_API", "media-url": "https://shrtm.nu/ebAr" };
 const subinfo_link1 = {"open-url": link1, "media-url": "https://shrtm.nu/uo13"} // server sub-info link(fake-nodes)
 const rwrite_link = {"open-url": link1, "media-url": "https://shrtm.nu/x3o2"} // rewrite filter link
 const rwhost_link = {"open-url": link1, "media-url": "https://shrtm.nu/0n5J"} // hostname filter link
 const rule_link = {"open-url": link1, "media-url": "https://shrtm.nu/cpHD"} // rule filter link
 const nan_link = {"open-url": link1, "media-url": qxpng} // nan error link
 const bug_link = {"open-url": "https://t.me/Shawn_KOP_bot", "media-url": "https://shrtm.nu/obcB"} // bug link
 const sub_link = {"open-url": link1, "media-url": "https://shrtm.nu/ebAr"} // server link


 SubFlow() //Flow notification

// parameter acquisition
 var Pin0 = mark0 && para1.indexOf("in=") != -1? (para1.split("in=")[1].split("&")[0].split("+"))  .map(decodeURIComponent): null;
 var Pout0 = mark0 && para1.indexOf("out=") != -1? (para1.split("out=")[1].split("&")[0].split("+"))  .map(decodeURIComponent): null;
 var Psfilter = mark0 && para1.indexOf("sfilter=") != -1? Base64.decode(para1.split("sfilter=")[1].split("&")[0]): null; /  /script filter
 var Preg = mark0 && para1.indexOf("regex=") != -1? decodeURIComponent(para1.split("regex=")[1].split("&")[0]).replace(/\,  /g,","): null; //server regular filter parameters
 var Pregdel = mark0 && para1.indexOf("delreg=") != -1? decodeURIComponent(para1.split("delreg=")[1].split("&")[0]).replace(/\,  /g,","): null; // Regularly delete parameters
 var Phin0 = mark0 && para1.indexOf("inhn=") != -1? (para1.split("inhn=")[1].split("&")[0].split("+"))  .map(decodeURIComponent): null; //hostname
 var Phout0 = mark0 && para1.indexOf("outhn=") != -1? (para1.split("outhn=")[1].split("&")[0].split("+"))  .map(decodeURIComponent): null; //hostname
 var Preplace = mark0 && para1.indexOf("replace=") != -1? para1.split("replace=")[1].split("&")[0]: null; //filter/rewrite regular  replace
 var Pemoji = mark0 && para1.indexOf("emoji=") != -1? para1.split("emoji=")[1].split("&")[0]: null;
 var Pudp0 = mark0 && para1.indexOf("udp=") != -1? para1.split("udp=")[1].split("&")[0]: 0;
 var Ptfo0 = mark0 && para1.indexOf("tfo=") != -1? para1.split("tfo=")[1].split("&")[0]: 0;
 var Prname = mark0 && para1.indexOf("rename=") != -1? para1.split("rename=")[1].split("&")[0].split("+"): null  ;
 var Psrename = mark0 && para1.indexOf("srename=") != -1? Base64.decode(para1.split("srename=")[1].split("&")[0]): null; /  /script rename
 var Prrname = mark0 && para1.indexOf("rrname=") != -1? para1.split("rrname=")[1].split("&")[0].split("+"): null  ;
 var Psuffix = mark0 && para1.indexOf("suffix=") != -1? para1.split("suffix=")[1].split("&")[0]: 0;
 var Ppolicy = mark0 && para1.indexOf("policy=") != -1? decodeURIComponent(para1.split("policy=")[1].split("&")[0]): "Shawn";
 var Pcert0 = mark0 && para1.indexOf("cert=") != -1? para1.split("cert=")[1].split("&")[0]: 0;
 var Psort0 = mark0 && para1.indexOf("sort=") != -1? para1.split("sort=")[1].split("&")[0]: 0;
 var PsortX = mark0 && para1.indexOf("sortx=") != -1? para1.split("sortx=")[1].split("&")[0]: 0;
 var PTls13 = mark0 && para1.indexOf("tls13=") != -1? para1.split("tls13=")[1].split("&")[0]: 0;
 var Pntf0 = mark0 && para1.indexOf("ntf=") != -1? para1.split("ntf=")[1].split("&")[0]: 2;
 var Phide = mark0 && para1.indexOf("hide=") != -1? para1.split("hide=")[1].split("&")[0]: 0;
 var Pb64 = mark0 && para1.indexOf("b64=") != -1? para1.split("b64=")[1].split("&")[0]: 0;
 var emojino = [" 0️⃣ ", "1⃣️ "," 2⃣️ ", "3⃣️ "," 4⃣️ ", "5⃣️ "," 6⃣️ ", "7⃣️ "," 8⃣️ ", "9⃣️ "," 🔟 "]
 var pfi = Pin0? "in=" + Pin0.join(", ") + ", ": ""
 var pfo = Pout0? "out=" + Pout0.join(", "): ""
 var pfihn = Phin0? "inhn=" + Phin0.join(", ") + ", ": ""
 var pfohn = Phout0? "outhn=" + Phout0.join(", "): ""
 var Pcnt = para1.indexOf("cnt=") != -1? para1.split("cnt=")[1].split("&")[0]: 0;
 var Pcap = para1.indexOf("cap=") != -1? para1.split("cap=")[1].split("&")[0]: "";
 var Pptn = para1.indexOf("ptn=") != -1? para1.split("ptn=")[1].split("&")[0]: ""; //Fancy English characters
 var Pnptn = para1.indexOf("npt=") != -1? para1.split("npt=")[1].split("&")[0]: ""; //Fancy number
 var Pcdn = para1.indexOf("cdn=") != -1? para1.split("cdn=")[1].split("&")[0]: "";
 let [flow, exptime, errornode, total] = "";
 var Pdel = mark0 && para1.indexOf("del=") != -1? para1.split("del=")[1].split("&")[0]: 0; //Delete duplicate nodes
 var typeU = para1.indexOf("type=") != -1? para1.split("type=")[1].split("&")[0]: "";


//Flower pattern
 var pat=[]
 pat[0] = ["a","b","c","d","e","f","g","h","i","j","k",  "l","m","n","o","p","k","r","s","t","u","v","w","x  ","y","z"]
 pat[1] = ["🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺",  "🅻","🅼","🅽","🅾","🅿","🅺","🆁","🆂","🆃","🆄","🆅","🆆","🆇  ","🆈","🆉"]
 pat[2] = ["🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺",  "🄻","🄼","🄽","🄾","🄿","🄺","🅁","🅂","🅃","🅄","🅅","🅆","🅇  ","🅈","🅉"]
 pat[3] = ["𝐀","𝐁","𝐂","𝐃","𝐄","𝐅","𝐆","𝐇","𝐈","𝐉","𝐊",  "𝐋","𝐌","𝐍","𝐎","𝐏","𝐊","𝐑","𝐒","𝐓","𝐔","𝐕","𝐖","𝐗  ","𝐘","𝐙"]
 pat[4] = ["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","𝗶","𝗷","𝗸",  "𝗹","𝗺","𝗻","𝗼","𝗽","𝗸","𝗿","𝘀","𝐭","𝘂","𝘃","𝘄","𝘅  ","𝘆","𝘇"]
 pat[5] = ["𝔸","𝔹","ℂ","𝔹","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂",  "𝕃","𝕄","ℕ","𝕆","ℙ","𝕂","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏  ","𝕐","ℤ"]
 pat[6] = ["𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜",  "𝕝","𝕞","𝕟","𝕠","𝕡","𝕜","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩  ","𝕪","𝕫"]

// Fancy numbers
 var patn=[]
 patn[0] = ["0","1","2","3","4","5","6","7","8","9"]
 patn[1] = ['⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨']
 patn[2] = ['⓪','❶','❷','❸','❹','❺','❻','❼','❽','❾']
 patn[3] = ['⓪','⓵','⓶','⓷','⓸','⓹','⓺','⓼','⓻','⓽']
 patn[4] = ['𝟘','𝟙','𝟚','𝟛','𝟜','𝟝','𝟞','𝟟','𝟠','𝟡']
 patn[5] = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹']
 patn[6] = ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉']

 var type0=""
 //flag=1,2,3 are server, rewrite, rule types respectively
 var flag = 1

 function Parser() {
   try {
     type0 = Type_Check(content0); // type judgment
     //$notify(type0,"hh")
     total = ResourceParse();
    
   } catch (err) {
     $notify("❌ Parsing error", "⚠️ Please click to send link feedback", err, bug_link);
   }
   //$notify("","",total)
   $done({ content: total });
 }

 if (typeof($resource)!=="undefined") {
   Parser()
   $done({ content: total })
 }


 /**
 # The following is the specific function

 */

 function ParseUnkown(cnt){
   try {
     cnt = JSON.parse(cnt)
     if(cnt) {
       $notify("⚠️ The content returned by the link is not a valid subscription"+ "⟦" + subtag + "⟧","⁉️ Please check the original link by yourself and return the content 👇️👇️",JSON.stringify(cnt), bug_link)
     }
    
   } catch(err) {
     $notify("😭 failed to recognize the subscription format: "+ "⟦" + subtag + "⟧", "⚠️ will be directly imported into Quantumult X \n If you think it is a BUG, ​​please click the notification to jump feedback", "link to return content  :\n"+cnt, bug_link);
   }
 }

function ResourceParse() {
   //Processing such as preprocessing, diversion/rewriting, etc. is completed
   if (type0 == "Subs-B64Encode") {
     total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13);
   } else if (type0 == "Subs") {
     total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
   } else if (type0 == "QuanX" || type0 == "Clash" || type0 == "Surge") {
     total = Subs2QX(isQuanX(content0).join("\n"), Pudp0, Ptfo0, Pcert0, PTls13);
   } else if (type0 == "sgmodule") {// surge module module/rule-set with url-regex
     flag = 2
     total = SGMD2QX(content0) // conversion
     total = Rewrite_Filter(total, Pin0, Pout0,Preg); // filter filter
     if (Preplace) {total = ReplaceReg(total, Preplace)}
     if (Pcdn) {total = CDN(total)
     } else {total = total.join("\n")}
   } else if (type0 == "rewrite") {// rewrite type
     flag = 2;
     total = Rewrite_Filter(isQuanXRewrite(content0.split("\n")), Pin0, Pout0,Preg);
     if (Preplace) {total = ReplaceReg(total, Preplace)}
     if (Pcdn) {total = CDN(total)
     } else {total = total.join("\n")}
   } else if (type0 == "Rule") {// rule type, processed
     flag = 3;
     total = Rule_Handle(content0.split("\n"), Pout0, Pin0).filter(Boolean);
     if (Preg && total.length!=0) {// Regular filtering rules filter
     total = total.map(Regex).filter(Boolean).join("\n")
     RegCheck(total, "Diversion Reference", Preg)}
     if (Preplace) {total = ReplaceReg(total, Preplace)}
     total = total.join("\n")
   } else if (content0.trim() == "") {
     $notify("‼️ reference" + "⟦" + subtag + "⟧" + "return content is empty", "⁉️ click the notification jump to confirm whether the link is invalid", para.split("#")[0],  nan_link);
     flag = 0;
   } else if (type0 == "unknown") {
     ParseUnkown(content0)
     flag = -1;
   }


//Start processing
   if (flag == 1) {//server type unified processing
     total = total.filter(Boolean)
     if (Pinfo == 1 && ntf_flow == 0) {//Flow notification of fake node type
       flowcheck(total)
     }
     if (Pin0 || Pout0) {total = Filter(total, Pin0, Pout0)} // in & out
     if (Preg) {total = total.map(Regex).filter(Boolean) // regex
       RegCheck(total, "Node Subscription", Preg)}
     if (Psfilter) {total = FilterScript(total, Psfilter)}
     if (Prrname) {
       Prn = Prrname;
       total = total.map(Rename);
     }
     if (Pemoji) {total = emoji_handle(total, Pemoji);}
     if (Pregdel) {
       delreg = Pregdel
       total = total.map(DelReg)
     }
     if (Preplace) {// The server type can also be renamed with the replace parameter
       total = ReplaceReg(total, Preplace)
     }
     if (Prname) {
       Prn = Prname;
       total = total.map(Rename);
     }
     if (Psrename) {total = RenameScript(total, Psrename)}
     if (Psort0) {
       total = QXSort(total, Psort0);
     }
     if (total.length> 0){
       if (Psuffix==1 || Psuffix==-1) {total = Psuffix == 1? total.map(type_suffix):total.map(type_prefix)
       }
       total = total.map(type_handle).map(emoji_prefix_handle)
       total = TagCheck_QX(total).join("\n") //Node name check
       if (Pcnt == 1) {$notify("Final return content after parsing", "Number of nodes: "+total.split("\n").length, total)}
       total = Base64.encode(total) //Force the node type base64 to be encrypted before importing Quantumult X
       $done({ content: total });
     } else {
       $notify("❓❓ Friendly Tips", "⚠️⚠️ No valid content after parsing", "🚥🚥 Please check the relevant parameters yourself, or click the notification to jump to the feedback", bug_link)
       total = errornode
       $done({ content: errornode })
     }
   } else if (flag == 0){ //empty/error type
     total = errornode
     $done({ content: errornode })
   } else if (flag == -1){ //unknown type
     total = content0
     $done({ content: content0 })
   }
   return total
  
 }


//Response header traffic processing part
 function SubFlow() {
   if (Pinfo == 1 && subinfo) {
     var sinfo = subinfo.replace(/ /g, "").toLowerCase();
     var total = "Total flow: "+ (parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)).toFixed(2) +"  GB";
     var usd = "Used traffic: "+ ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:  "0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3)).toFixed(2) + "GB"
     var left = "Remaining flow: "+ ((parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3))-((parseFloat(sinfo  .indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download="  )[1].split(",")[0])) / (1024 ** 3))).toFixed(2) + "GB"
     if (sinfo.indexOf("expire=") != -1) {
       var epr = new Date(parseFloat(sinfo.split("expire=")[1].split(",")[0]) * 1000);
       var year = epr.getFullYear(); // Get the full year (4 digits, 1970)
       var mth = epr.getMonth() + 1 <10? '0' + (epr.getMonth() + 1): (epr.getMonth() + 1); // Get the month (0-11,0 represents January  , Remember to add 1 when you use it)
       var day = epr.getDate() <10? "0" + (epr.getDate()): epr.getDate();
       epr = "Expiration time: "+ year + "-" + mth + "-" + day
     } else {
       epr = ""; //"Expiration time: ✈️ This information is not provided" //Display subscription link without expiration time
     }
     var message = total + "\n" + usd + ", "+ left;
     ntf_flow = 1;
     $notify("Traffic information: ⟦" + subtag + "⟧", epr, message, subinfo_link)
   }
 //} else if (Pinfo ==1){
 // $notify("Traffic information: ⟦" + subtag + "⟧", "", "⚠️ The subscription link did not return any traffic information", subinfo_link)
 //}
 }

 //flowcheck-fake-server
 function flowcheck(cnt) {
     for (var i = 0; i <cnt.length; i++) {
         var item = cnt[i];
         var nl = item.slice(item.indexOf("tag"))
         var nm = nl.slice(nl.indexOf("=") + 1)
         if (item.indexOf("Remaining Flow") != -1) {
             flow = nm
         } else if (item.indexOf("period time") != -1) {
             exptime = nm
         }
     }
   flow = flow? flow: "⚠️ The subscription did not return any flow information"
   exptime = exptime? exptime: "⚠️ The subscription did not return package time information"
     if (flow != "") {$notify("Flow information: ⟦" + subtag + "⟧", flow, exptime, subinfo_link1)}
 }

 // Check after regex
 function RegCheck(total, typen, regpara) {
 if(total.length == 0){
 $notify("‼️ "+ typen +" ➟ "+ "⟦" + subtag + "⟧", "⛔️ Screening regular: regex=" + regpara, "⚠️ After screening, the remaining items are 0️⃣, please check regular parameters and original links  ", nan_link)
 }else if((typen != "Node subscription" && Pntf0 !=0) || (typen == "Node subscription" && Pntf0 ==1)){
 var nolist = total.length <= 10? emojino[total.length]: total.length
 $notify("🤖 "+ typen +" ➟ "+ "⟦" + subtag + "⟧", "⛔️ filtering regular: regex=" + regpara, "⚠️ remaining after filtering the following" + nolist + "matches\n  ⨷ "+ total.join("\n ⨷ "), sub_link)
 }
 }

//Determine the subscription type
 function Type_Check(subs) {
     var type = "unknown"
     var RuleK = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,", "geoip,", "user-agent,  ", "ip6-cidr,"];
     var DomainK = ["domain-set,"]
     var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http="];
     var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,", "=https,", "=shadowsocks", "=shadowsocksr"]  ;
     var ClashK = ["proxies:"]
     var SubK = ["dm1lc3M", ​​"c3NyOi8v", "CnNzOi8", "dHJvamFu", "c3M6Ly", "c3NkOi8v", "c2hhZG93",,"aHR0c"];
     var RewriteK = [" url "]
     var SubK2 = ["ss://", "vmess://", "ssr://", "trojan://", "ssd://", "https://"];
     var ModuleK = ["[Script]", "[Rule]", "[URL Rewrite]", "[Map Local]", "[MITM]", "\nhttp-r"]
     var html = "DOCTYPE html"
     var subi = subs.replace(/ /g, "")
     const RuleCheck = (item) => subi.toLowerCase().indexOf(item) != -1;
     const NodeCheck = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
     const RewriteCheck = (item) => subs.indexOf(item) != -1;
     var subsn = subs.split("\n")
     if (subs.indexOf(html) != -1 && link0.indexOf("github.com" == -1)) {
       $notify("‼️ The content returned by the link is incorrect", "⁉️ Click the notification to jump to confirm whether the link is invalid", link0, nan_link);
       type = "web";
     } else if (typeU == "nodes") {
       type = "Subs-B64Encode"
     } else if (ClashK.some(NodeCheck) || typeU == "clash"){ // Clash type node conversion
       type = "Clash";
       content0 = Clash2QX(subs)
     } else if ((/^hostname\s*\=|pattern\=/.test(subi) || RewriteK.some(RewriteCheck)) && !/\[(Proxy|filter_local)\]/.test(subs)  && para1.indexOf("dst=filter")==-1 && subi.indexOf("securehostname") == -1 && !/module|nodes/.test(typeU)) {
       type = "rewrite" //Quantumult X type rewrite/ Surge Script/
     } else if ((((ModuleK.some(RewriteCheck) || para1.indexOf("dst=rewrite") != -1) && (para1.indexOf("dst=filter") == -1) && subs.  indexOf("[Proxy]") == -1) || typeU == "module") && typeU != "nodes") {// Surge type module /rule-set (including url-regex) type
       type = "sgmodule"
     } else if (((RuleK.some(RuleCheck) && subs.indexOf(html) == -1 && !/\[(Proxy|server_local)\]/.test(subs)) || typeU == "rule"  || para1.indexOf("dst=filter")!=-1) && typeU != "nodes") {
       type = "Rule";
     } else if ((DomainK.some(RuleCheck) || typeU == "domain-set") && subs.indexOf("[Proxy]") == -1 && typeU != "nodes") {
       type = "Rule";
       content0 = Domain2Rule(content0) // convert domain-set
     } else if (subsn.length >= 1 && SubK2.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) {//Unencrypted multi-line URI combination subscription
       type = "Subs"
     } else if (SubK.some(NodeCheck)) {//b64 encrypted subscription type
       type = "Subs-B64Encode"
     } else if ((subi.indexOf("tag=") != -1 && QuanXK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU =="  list") {
       type = "Subs" // QuanX list
     } else if (subs.indexOf("[Proxy]") != -1) {
       type = "Surge"; // Surge Profiles
       content0 = Surge2QX(content0).join("\n");
     } else if ((SurgeK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU == "list") {
       type = "Subs" // Surge proxy list
     } else if (subs.indexOf("[server_local]") != -1) {
       //type = "QuanX" // QuanX Profile
       type = "Subs"
     } else if (content0.indexOf("server") !=-1 && content0.indexOf("server_port") !=-1) {//SIP008
       //type = "QuanX"
       type = "Subs"
       content0 = SIP2QuanX(content0)
     }
   // Used to notify the judgment type, debug
   if(typeU == "X"){
     $notify(type,"",content0)
   }
     return type
 }

// Check node names (duplicate and empty names) that are not allowed by QuanX, and "irregular" methods such as multiple spaces
 function TagCheck_QX(content) {
   console.log(content)
     var Olist = content.map(item =>item.trim().replace(/\s{2,}/g," "))
     //$notify("","",Olist)
     var [Nlist, nmlist] = [[], []]
     var [nulllist,duplist] = [[], [] ]; //Record empty name node & duplicate name node
     var no = 0;
     for (var i = 0; i <Olist.length; i++) {
         var item = Olist[i]? Olist[i]: ""
         if (item.replace(/ /gm, "").indexOf("tag=") != -1) {
             var nl = item.slice(item.indexOf("tag"))
             var nm = nl.slice(nl.indexOf("=") + 1)
             if (nm == "") {//empty name
                 nm = "[" + item.split("=")[0] + "]" + item.split("=")[1].split(",")[0].split(":")  [0]
                 item = item.split("tag")[0] + "tag=" + nm.replace("shadowsocks", "ss")
                 nulllist.push(nm.replace("shadowsocks", "ss"))
             }
             var ni = 0
             while (nmlist.indexOf(nm) != -1) {//Duplicate name
                 nm = nm+ NoReplace(ni+1)
                 item = Pdel != 1? item.split("tag")[0] + "tag=" + nm: ""
                 ni = ni + 1
             }
             if (ni != 0) {duplist.push(nm)}
             nmlist.push(nm)
           if (Pcap) {
             item = Capitalize(item,Pcap)
             console.log(item)
           }
           if (Pptn || Pnptn) {
             item = Pattern(item,Pptn,Pnptn)
             console.log(item)
           }
             ni = 0
             if (item) {
             Nlist.push(item)
           }
         }// if "tag="
     } // for
     if (nulllist.length >= 1) {
         no = nulllist.length <= 10? emojino[nulllist.length]: nulllist.length;
         $notify("⚠️ reference" + "⟦" + subtag + "⟧" + "contains" + no + "an empty node name", "✅ The node "type+IP" has been set as the node name", "⨁  "+ nulllist.join("\n ⨁ "), nan_link)
     }
     if (duplist.length >= 1) {
         no = duplist.length <= 10? emojino[duplist.length]: duplist.length;
       if (Pdel!=1){
         $notify("⚠️ reference" + "⟦" + subtag + "⟧" + "contains" + no + "a node with repeated names", "✅ has added a number to distinguish, delete please add parameter del=1:",  "⨁" + duplist.join("\n ⨁ "), nan_link)
       } else {
         $notify("⚠️ reference" + "⟦" + subtag + "⟧" + "contains" + no + "nodes with duplicate names", "❌️ has been deleted all, if you want to keep, please remove the parameter del=1:"  , "⨁" + duplist.join("\n ⨁ "), nan_link)
       }
     }
     return Nlist
 }

 //Add the number sequence number replacement when the node name is the same
 function NoReplace(cnt) {
   if(cnt){
     for (var i=0;i<10;i++) {
       cnt = cnt.toString().replace(new RegExp(patn[0][i], "gmi"),patn[5][i])
     }
     return "" + cnt + ""
   }
 }


 // Pattern operation on node name
 function PatternN(cnt, para,npara) {
   if(cnt){
     if(para!=""){//character
       for (var i=0;i<26;i++) {
         cnt = cnt.toLowerCase()
         cnt = cnt.replace(new RegExp(pat[0][i], "gmi"),pat[para][i])
       }
     }
     if(npara!=""){ //number
       for (var i=0;i<10;i++) {
         cnt = cnt.replace(new RegExp(patn[0][i], "gmi"),patn[npara][i])
       }
     }
     console.log(cnt)
     return cnt
   }
 }


 function Pattern(cnt,para,npara) {
   if (para != "" || npara != "") {
     cnt = cnt.split("tag=")[0] +"tag="+ PatternN(cnt.split("tag=")[1],para,npara)
   }
   return cnt
 }


 //Case
 function Capitalize(cnt,para) {
   if (para == 1) {
     cnt = cnt.split("tag=")[0] +"tag="+ cnt.split("tag=")[1].toUpperCase()
   } else if (para == -1) {
     cnt = cnt.split("tag=")[0] +"tag="+ cnt.split("tag=")[1].toLowerCase()
   } else if (para == 0) {
     cnt =cnt.split("tag=")[0] +"tag="+titleCase(cnt.split("tag=")[1])
   }
   return cnt
 }

 function titleCase(str) {
   var newStr = str.split(" ");
   for(var i = 0; i<newStr.length; i++){
     newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
   } return newStr.join(" ");
 }


 // Type prefix/suffix
 function type_prefix(item) {
   if(item.trim()!="") {
     typefix = {"shadowsocks":"""𝐬𝐬""","vmess":""𝐯𝐦𝐞𝐬𝐬"","trojan":"" "𝐭𝐫𝐨𝐣𝐚𝐧""","𝐚𝐧"","𝐚𝐧"","http":""
     typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? "「𝐬𝐬𝐫」": "「𝐬𝐬」"
     tp = typefix[item.split("=")[0].trim()]
     return [[item.split("tag=")[0]+
       "tag=", tp, item.split("tag=")[1]].join(" ")].join(" ")
   }
 }
 function type_suffix(item) {
   if(item.trim()!=""){
     typefix={"shadowsocks":"""𝐬𝐬""","vmess":""𝐯𝐦𝐞𝐬𝐬"","trojan":"" "𝐭𝐫𝐨𝐣𝐚𝐧""","𝐚𝐧"","𝐚𝐧"","𝐚𝐧"","http"𝐩":""
     typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? "「𝐬𝐬𝐫」": "「𝐬𝐬」"
     tp = typefix[item.split("=")[0].trim()]
     return [item, tp].join(" ")
   }
 }

 //Get type
 function getnode_type(item,ind) {
   if(item.trim()!="" && item.indexOf("tag=")!=-1) {
     ind = !/^(0|1|2|3|4|5)$/.test(ind)? 6: ind
     typefix = {"shadowsocks":["𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","SS"],"shadowsocksr":"["🅢",  "𝐒𝐒𝐑","🅢🅢🅡","🆂🆂🆁","ⓢⓢⓡ","🅂🅂🅁","SSR"],"vmess":["𝐯🝐,"🝐🝐🝐🝐🝐🝐🝐🝐🝐🝐🝐🝐🅡🅡", "🆂🆂🆁"  🅢🅢 "," 🆅🅼🅴🆂🆂 "," ⓥⓜⓔⓢⓢ "," 🅅🄼🄴🅂🅂 "," VMESS "]," trojan ": [" 𝐭𝐫𝐨𝐣𝐚𝐧 "," 𝐓𝐑𝐎𝐉𝐀𝐍 "," 🅣🅡🅞  🅙🅐🅝","🆃🆁🅾🅹🅰🅽","ⓣⓡⓞⓙⓐⓝ","🅃🅁🄾🄹🄰🐩","TRO"🝓🐩","🝹🄰🐩","🝹🄰🐩","🝹🄰🐩","🝓🐩","🝓🐩","🅾🅹🅰🅽","🅾🅹🅰🅽","  "🅗🅣🅣🅟","🅷🆃🆃🅿","ⓗⓣⓣⓟ","🄷🅃🅃🄿","HTTP"]}
     typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? typefix["shadowsocksr"]: typefix["shadowsocks"]
     tp = typefix[item.split("=")[0].trim()][ind]
     return tp
   }
 }

// Operation node type placeholder
 function type_handle(item) {
   if(item.indexOf("node_type_para_prefix")!=-1) {
     item = item.replace(/node_type_para_prefix(\d{0,1})/g,getnode_type(item,item.split("node_type_para_prefix")[1][0]))
   }
   return item
 }

 // Manipulate emoji placeholders
 function emoji_prefix_handle(item) {
   if(item.indexOf("node_emoji_flag_prefix")!=-1) {
     item = item.replace(/node_emoji_flag_prefix\d{0,1}/g,getnode_emoji(item,item.split("node_emoji_flag_prefix")[1][0]))
     //console.log(item)
   }
   return item
 }

 // Get emoji
 function getnode_emoji(item,ind){
   ind = !/^(1|2)$/.test(ind)? 2: ind
   if(item.indexOf("tag=")!=-1) {
     return get_emoji(ind,item.split("tag=")[1])[1]
   }
 }

 // For the tag parameter of a single URI, specify the node name directly
 function URI_TAG(cnt0,tag0) {
   cnt0 = cnt0.split("tag=")[0] + "tag=" + tag0
   return cnt0
 }

 // Used for the problem that some weird users do not use raw links
 function rawtest(cnt) {
   var Preg0 = RegExp(".*js-file-line\".*?\<\/td\>", "i")
   if (Preg0.test(cnt)) {
     return cnt.replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g,"$2").replace(/&/g,"&  ").replace(/</g,"<").replace(/>/g,">").trim()
   }
 }

 function ToRaw(cnt) {
   cnt = cnt.split("\n").map(rawtest).filter(Boolean).join("\n")
   var rawlink = link0.replace("github.com","raw.githubusercontent.com").replace("/blob","")
   if (cnt) {
     $notify( "⚠️⚠️ will try to parse the resource" + "⟦" + subtag + "⟧", "🚥 please use the GitHub raw link correctly", "❌ Your link: "+link0+"\n✅ Correct link:  "+rawlink, {"open-url":rawlink})
   } else if(content0.indexOf("gridcell")!=-1) {
     $notify( "⚠️⚠️ Parse the resource" + "⟦" + subtag + "⟧ failed", "🚥 Your link seems to be a directory, not a file", "❌ Your link: "+link0, {"open-  url":link0})
   }
   return cnt
 }

 function CDN(cnt) {
   console.log("CDN start")
   cnt = cnt.join("\n").replace(/https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gmi,"  https://cdn.jsdelivr.net/gh/$1/$2@$3")
   return cnt
 }

 //url-regex is converted to Quantumult X
 function URX2QX(subs) {
     var nrw = []
     var rw = ""
     subs = subs.split("\n")
     var NoteK = ["//", "#", ";"]; //Exclude comment items
     for (var i = 0; i <subs.length; i++) {
         const notecheck = (item) => subs[i].indexOf(item) == 0
         if (!NoteK.some(notecheck)) {
         if (subs[i].slice(0, 9) == "URL-REGEX") {// regex type
             rw = subs[i].replace(/ /g, "").split(",REJECT")[0].split("GEX,")[1] + "url" + "reject-200"
             nrw.push(rw)
         } else if (subs[i].indexOf("data=") != -1 && subs.indexOf("[Map Local]") != -1){ // Map Local type
             rw = subs[i].replace(/ /g, "").split("data=")[0] + "url" + "reject-dict"
             nrw.push(rw)
         }
     }
     }
     return nrw
 }

 //script&rewrite is converted to Quantumult X
 function SCP2QX(subs) {
   var nrw = []
   var rw = ""
   subs = subs.split("\n").map(x => x.trim().replace(/\s+/g," "))
   for (var i = 0; i <subs.length; i++) {
     if (subs[i].slice(0, 8) == "hostname") {
       hn = subs[i].replace(/\%.*\%/g, "")
       nrw.push(hn)
     }
     var SC = ["type=", ".js", "pattern=", "script-path="]
     var NoteK = ["//", "#", ";"]; //Exclude comment items
     const sccheck = (item) => subs[i].indexOf(item) != -1
     const notecheck = (item) => subs[i].indexOf(item) == 0
     if (!NoteK.some(notecheck)){
       if (SC.every(sccheck)) {// surge js new format
         ptn = subs[i].replace(/\s/gi,"").split("pattern=")[1].split(",")[0]
         js = subs[i].replace(/\s/gi,"").split("script-path=")[1].split(",")[0]
         type = subs[i].replace(/\s/gi,"").split("type=")[1].split(",")[0].trim()
         subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
         if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
           type = "script-response-body"
         } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
           type = "script-response-header"
         } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
           type = "script-request-body"
         } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
           type = "script-request-header"
         } else {type = ""}
         if (type != "") {
           rw = ptn + "url" + type + js
           nrw.push(rw)
         }
       } else if (subs[i].indexOf(" 302") != -1 || subs[i].indexOf(" 307") != -1) {//rewrite 302&307 copy
         //tpe = subs[i].indexOf(" 302") != -1? "302":"307"
         rw = subs[i].split(" ")[0] + "url" + subs[i].split(" ")[2] + "" + subs[i].split(" ")[1]  .trim()
         //if(rw.indexOf("307")!=-1) {$notify("XX",subs[i],rw.split(" "))}
         nrw.push(rw)
       } else if(subs[i].split(" ")[2] == "header") {// rewrite header type
         var pget = subs[i].split(" ")[0].split(".com")[1]
         var pgetn = subs[i].split(" ")[1].split(".com")[1]
         rw = subs[i].split(" ")[0] + "url request-header ^GET" + pget +"(.+\\r\\n)Host:.+(\\r\\n)  request-header GET "+ pgetn + "$1Host:" + subs[i].split(" ")[1].split("://")[1].split(".com")[0]  + ".com$2"
         nrw.push(rw)
       } else if(subs[i].split(" ")[1] == "header-replace") {// rewrite header-replace type
         console.log(subs[i])
         var pget = subs[i].split("header-replace")[1].split(":")[0].trim()
         var pgetn = subs[i].split("header-replace")[1].trim()
         rw = subs[i].split(" ")[0] + "url request-header" +"(.+\\r\\n)"+pget+":.+(\\r\\n) request  -header "+ "$1" + pgetn + "$2"
         nrw.push(rw)
       } else if(subs[i].indexOf("-reject") != -1) {// rewrite reject type
         rw = subs[i].split(" ")[0] + "url reject-200"
         nrw.push(rw)
       } else if (subs[i].indexOf("script-path") != -1) {//surge js old way of writing
         type = subs[i].replace(/\s+/g," ").split(" ")[0]
         js = subs[i].split("script-path")[1].split("=")[1].split(",")[0]
         ptn = subs[i].replace(/\s+/g," ").split(" ")[1]
         subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
         if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
           type = "script-response-body"
         } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
           type = "script-response-header"
         } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
           type = "script-request-body"
         } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
           type = "script-request-header"
         } else {type = ""}
         if (type != "") {
           rw = ptn + "url" + type + js
           nrw.push(rw)
         }
        
       }
     }
    
   }
   return nrw
 }

// If both URL-Regex and rewrite/script are required
 function SGMD2QX(subs) {
     var nrw0 = URX2QX(subs)
     var nrw1 = SCP2QX(subs)
     var nrwt = [...nrw0, ...nrw1]
     return nrwt
 }

 //Rewrite filter, use + to connect multiple keywords (logical "or"): in is reserved, out is excluded
 function Rewrite_Filter(subs, Pin, Pout,Preg) {
     var Nlist = [];
     var noteK = ["//", "#", ";"];
     var hnc = 0;
     var dwrite = []
     var hostname = ""
     for (var i = 0; i <subs.length; i++) {
         subi = subs[i].trim();
         var subii = subi.replace(/ /g, "")
         if (subi != "" && (subi.indexOf(" url ")!=-1 || /^hostname\=/.test(subii))) {
             const notecheck = (item) => subi.indexOf(item) == 0
             if (noteK.some(notecheck)) {// note item skip
                 continue;
             } else if (hnc == 0 && subii.indexOf("hostname=") == 0) {//hostname part
                 hostname = (Phin0 || Phout0 || Preg)? HostNamecheck(subi, Phin0, Phout0): subi;//hostname part
             } else if (subii.indexOf("hostname=") != 0) {//rewrite part
                 var inflag = Rcheck(subi, Pin);
                 var outflag = Rcheck(subi, Pout);
                 if (outflag == 1 || inflag == 0) {
                     dwrite.push(subi.replace(" url ","-")); //out hit
                 } else if (outflag == 0 && inflag != 0) {//out miss && in not excluded
                     Nlist.push(subi);
                 } else if (outflag == 2 && inflag != 0) {//No out parameter && in not excluded
                     Nlist.push(subi);
                 }
             }
         }
     }
     if (Pntf0 != 0) {
         nowrite = dwrite.length <= 10? emojino[dwrite.length]: dwrite.length
         no1write = Nlist.length <= 10? emojino[Nlist.length]: Nlist.length
         if (Pin0 && no1write != "0️⃣ ") {//If there is an in parameter, notify the reserved item
             $notify("🤖 "+ "Rewrite reference ➟" + "⟦" + subtag + "⟧", "⛔️ Filter parameters: "+ pfi + pfo, "☠️ Rewrite rewrite to keep the following" + no1write + "matches  Item: "+ "\n ⨷" + Nlist.join("\n ⨷ "), rwrite_link)
         } else if (dwrite.length> 0) {
             $notify("🤖 "+ "Rewrite reference➟" + "⟦" + subtag + "⟧", "⛔️ Filter parameters: "+ pfi + pfo, "☠️ Rewrite the following disabled in rewrite" + nowrite + "  Matches: "+ "\n ⨷" + dwrite.join("\n ⨷ "), rwrite_link)
         }
     }
     if (Nlist.length == 0) {$notify("🤖 "+ "Rewrite reference➟" + "⟦" + subtag + "⟧", "⛔️ Filter parameters: "+ pfi + pfo, "⚠️ remaining after filtering  The number of rewrite rules is 0️⃣, please check the parameters and the original link", nan_link)}
     if(Preg){ Nlist = Nlist.map(Regex).filter(Boolean) // regex to filter rewrites
     RegCheck(Nlist, "Rewrite Reference", Preg)}
     if (hostname != "") {Nlist.push(hostname)}
     Nlist =Phide ==1? Nlist: [...dwrite,...Nlist]
     return Nlist
 }

 // Host name processing
 function HostNamecheck(content, parain, paraout) {
     var hname = content.replace(/ /g, "").split("=")[1].split(",");
     var nname = [];
     var dname = []; //Delete item
     for (var i = 0; i <hname.length; i++) {
         dd = hname[i]
         const excludehn = (item) => dd.indexOf(item) != -1;
         if (paraout && paraout != "") {//When there is an out parameter
             if (!paraout.some(excludehn)) {//out miss 🎯️
                 if (parain && parain != "") {
                     if (parain.some(excludehn)) {//Pin hits 🎯️
                         nname.push(hname[i])
                     } else {
                         dname.push(hname[i])
                     } //Pin miss the record of 🎯️
                 } else {nname.push(hname[i])} //No in parameter
             } else {dname.push(hname[i])} //out parameter hit
         } else if (parain && parain != "") {//There is no out, but when there is an in parameter
             if (parain.some(excludehn)) {//Pin hits 🎯️
                 nname.push(hname[i])
             } else {dname.push(hname[i])}
         } else {
             nname.push(hname[i])
         }
     } //for j
     if (Pntf0 != 0) {
         if (paraout || parain) {
             var noname = dname.length <= 10? emojino[dname.length]: dname.length
             var no1name = nname.length <= 10? emojino[nname.length]: nname.length
             if (parain && no1name != "0️⃣ ") {
                 $notify("🤖 "+ "Rewrite reference➟" + "⟦" + subtag + "⟧", "⛔️ Filter parameters: "+ pfihn + pfohn, "☠️ The following" + no1name + "are reserved in the hostname hostname  Matches: "+ "\n ⨷" + nname.join(","), rwhost_link)
             } else if (dname.length> 0) {
                 $notify("🤖 "+ "Rewrite reference ➟" + "⟦" + subtag + "⟧", "⛔️ Filter parameters: "+ pfihn + pfohn, "☠️ The following hostnames have been deleted from hostname" + noname + "  Matches: "+ "\n ⨷" + dname.join(","), rwhost_link)
             }
         }
     }
     if (nname.length == 0) {
         $notify("🤖 "+ "Rewrite reference➟" + "⟦" + subtag + "⟧", "⛔️ Filter parameters: "+ pfihn + pfohn, "⚠️ The remaining 0️⃣ items in the hostname hostname, please check the parameters and original  Link", nan_link)
     }
     if(Preg){ nname = nname.map(Regex).filter(Boolean)
     RegCheck(nname, "hostname hostname", Preg)}
     hname = "hostname=" + nname.join(", ");
     return hname
 }

 //Rewrite filter function
 function Rcheck(content, param) {
     name = content.toUpperCase()
     if (param) {
         var flag = 0; // missed
         const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
         if (param.some(checkpara)) {
             flag = 1 //hit
         }
         return flag
     } else {//if param
         return 2
     } //No parameters
 }

//Diversion rule conversion and filtering, can be used in the rule-list of surge and quanx
 function Rule_Handle(subs, Pout, Pin) {
     cnt = subs //.split("\n");
     Tin = Pin; //Reserve parameters
     Tout = Pout; //Filter parameters
     ply = Ppolicy; //Policy group
     var nlist = []
     var RuleK = ["//", "#", ";"];
     var RuleK2 = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,", "geoip,", "user-agent,  ", "ip6-cidr,"];
     if (Tout != "" && Tout != null) {// When there is an out parameter
         var dlist = [];
         for (var i = 0; i <cnt.length; i++) {
             cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
             const exclude = (item) => cc.indexOf(item) != -1; // delete item
             const RuleCheck = (item) => cc.indexOf(item) != -1; //Ignore the comment line
             if (Tout.some(exclude) && !RuleK.some(RuleCheck)) {
                 dlist.push(Rule_Policy("-" + cc))
             } else if (!RuleK.some(RuleCheck) && cc) {//if Pout.some, do not operate comment items
                 dd = Rule_Policy(cc);
                 if (Tin != "" && Tin != null) {
                     const include = (item) => dd.indexOf(item) != -1; // reserved item
                     if (Tin.some(include)) {
                         nlist.push(dd);
                     }
                 } else {
                     nlist.push(dd);
                 }
             } //else if cc
         }//for cnt
         var no = dlist.length <= 10? emojino[dlist.length]: dlist.length
         if (dlist.length> 0) {
             if (Pntf0 != 0) {$notify("🤖 "+ "divergent reference➟" + "⟦" + subtag + "⟧", "⛔️ disabled: "+ Tout, "☠️ The following" + no + "items are disabled  Matching rules: "+ "\n ⨷" + dlist.join("\n ⨷ "), rule_link)}
         } else {$notify("🤖 "+ "streaming reference➟" + "⟦" + subtag + "⟧", "⛔️ Disable: "+ Tout, "⚠️ No match was found, please check the parameters or original link",  nan_link)}
         if (Tin != "" && Tin != null) {//When there are in and out parameters
             if (nlist.length> 0) {
                 var noin0 = nlist.length <= 10? emojino[nlist.length]: nlist.length
                 if (Pntf0 != 0) {
                     $notify("🤖 "+ "Branch Quotes➟" + "⟦" + subtag + "⟧", "✅ Reserved:" + Tin, "🎯 The following matching rules have been reserved" + noin0 + "matching rules:" + "\n  ⨁ "+ nlist.join("\n ⨁ "), rule_link)
                 }
             } else {
                 $notify("🤖 "+ "Shunt Quotation➟" + "⟦" + subtag + "⟧", "✅ Reserved: "+ Tin + ",⛔️ Disabled:" + Tout, "⚠️ The number of remaining rules after filtering is 0️⃣  , Please check the parameters and the original link", nan_link)
             }
         } else {// if Tin (No Tin)
             if (nlist.length == 0) {
                 $notify("🤖 "+ "Shunt Quote➟" + "⟦" + subtag + "⟧", "⛔️ Disabled: "+ Tout, "⚠️ The number of remaining rules after filtering is 0️⃣, please check the parameters and the original link",  nan_link)
             }
         }
       nlist =Phide ==1? nlist: [...dlist,...nlist]
         return nlist;
     } else if (Tin != "" && Tin != null) {//if Tout
         var dlist = [];
         for (var i = 0; i <cnt.length; i++) {
             cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
             const RuleCheck = (item) => cc.indexOf(item) != -1; //Ignore the comment line
             if (!RuleK.some(RuleCheck) && cc) {//if Pout.some, do not operate comment items
                 dd = Rule_Policy(cc);
                 const include = (item) => dd.indexOf(item) != -1; // reserved item
                 if (Tin.some(include)) {
                     nlist.push(dd);
                 } else {dlist.push("-" + dd)}
             }
         } // for cnt
         if (nlist.length> 0) {
             var noin = nlist.length <= 10? emojino[nlist.length]: nlist.length
             if (Pntf0 != 0) {
                 $notify("🤖 "+ "Branch Quotes➟" + "⟦" + subtag + "⟧", "✅ Reserved:" + Tin, "🎯 The following matching rules have been reserved" + noin + ":" + "\n  ⨁ "+ nlist.join("\n ⨁ "), rule_link)
             }
         } else {$notify("🤖 "+ "Branch reference ➟" + "⟦" + subtag + "⟧", "✅ Reserved: "+ Tin, "⚠️ The number of remaining rules after filtering is 0️⃣, please check the parameters and the original  Link", nan_link)}
       nlist =Phide ==1? nlist: [...dlist,...nlist]
       return nlist;
     } else {//if Tin
         return cnt.map(Rule_Policy)
     }
 }

 function Rule_Policy(content) {//Add or replace policy
     var cnt = content.replace(/^\s*\-\s/g,"").replace(/REJECT-TINYGIF/gi,"reject").trim().split(",");
     var RuleK = ["//", "#", ";"];
     var RuleK1 = ["host", "domain", "ip-cidr", "geoip", "user-agent", "ip6-cidr"];
     const RuleCheck = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0; //Ignore the comment line
     const RuleCheck1 = (item) => cnt[0].trim().toLowerCase().indexOf(item) != -1; //ignore rule categories not supported by quanx
     if (RuleK1.some(RuleCheck1)) {
         if (cnt.length == 3 && cnt.indexOf("no-resolve") == -1) {
             ply0 = Ppolicy != "Shawn"? Ppolicy: cnt[2]
             nn = cnt[0] + ", "+ cnt[1] + "," + ply0
         } else if (cnt.length == 2) {//Surge rule-set
             ply0 = Ppolicy != "Shawn"? Ppolicy: "Shawn"
             nn = cnt[0] + ", "+ cnt[1] + "," + ply0
         } else if (cnt.length == 3 && cnt[2].indexOf("no-resolve") != -1) {
             ply0 = Ppolicy != "Shawn"? Ppolicy: "Shawn"
             nn = cnt[0] + ", "+ cnt[1] + "," + ply0 + ", "+ cnt[2]
         } else if (cnt.length == 4 && cnt[3].indexOf("no-resolve") != -1) {
             ply0 = Ppolicy != "Shawn"? Ppolicy: cnt[2]
             nn = cnt[0] + ", "+ cnt[1] + "," + ply0 + ", "+ cnt[3]
         } else if (!RuleK.some(RuleCheck) && content) {
             //$notify("Failed to resolve" + "⟦" + subtag + "⟧" + "Part of the rules:", content, nan_link);
             return ""
         } else {return ""}
         if (cnt[0].indexOf("URL-REGEX") != -1 || cnt[0].indexOf("PROCESS") != -1) {
             nn = ""
         } else {nn = nn.replace("IP-CIDR6", "ip6-cidr")}
         return nn
     } else {return "" }//if RuleK1 check
 }

 // Domain-Set
 function Domain2Rule(content) {
     var cnt = content.split("\n");
     var RuleK = ["//", "#", ";"]
     var nlist = []
     for (var i = 0; i< cnt.length; i++) {
         cc = cnt[i].trim();
         const RuleCheck = (item) => cc.indexOf(item) != -1; //Ignore the comment line
         if(!RuleK.some(RuleCheck) && cc) {
             if (cc[0] == "."){
                 nlist.push("host-suffix, "+ cc.slice(1, cc.length))
             } else {
                 nlist.push("host, "+ cc)
             }
         }
     }
     return nlist.join("\n")
 }

 // Regularly replace the filter/rewrite part
 // Purpose: such as tiktok change zone: JP -> KR, such as Taobao price comparison script -> lite banner notification version
 function ReplaceReg(cnt, para) {
     var cnt0 = cnt//.join("\n")
     //$notify("0","",cnt0)
     var pp = para.replace(/\\\@/g,"atsymbol").replace(/\\\+/g,"plussymbol").split("+");
     for (var i = 0; i <pp.length; i++) {
         var p1 = decodeURIComponent(pp[i].split("@")[0]).replace(/atsymbol/g,"\@").replace(/plussymbol/g,"\\\+").replace  (/\, /g,",");
         var p2 = decodeURIComponent(pp[i].split("@")[1]).replace(/atsymbol/g,"@").replace(/plussymbol/g,"+").replace(/\,  /g,",");
         p1 = new RegExp(p1, "gmi");
         cnt0 = cnt0.map(item => item.replace(p1, p2));
         //$notify(p1,p2,cnt0)
     }
   //$notify("1","",cnt0)
     return cnt0//.split("\n")
 }

//Mixed subscription type, used for types that have not been base64 encoded as a whole
 function Subs2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
     var list0 = subs.split("\n");
     var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http="];
     var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,"];
     var LoonK = ["=shadowsocks", "=shadowsocksr"]
     var QXlist = [];
     var failedList = [];
     for (var i = 0; i <list0.length; i++) {
         var node = ""
         if (list0[i].trim().length> 3 && !/\;|\/|\#/.test(list0[i][0])) {
             var type = list0[i].split("://")[0].trim()
             var listi = list0[i].replace(/ /g, "")
             var tag0 = list0[i].indexOf("tag=")!=-1? list0[i].split(/\&*(emoji|udp|tf0|cert|rename|replace)\=/)[0  ].split("tag=")[1]: ""
             list0[i] = (type == "vmess" || type=="ssr")? list0[i].split("#")[0]: list0[i]
             const NodeCheck = (item) => listi.toLowerCase().indexOf(item) != -1;
             try {
                 if (type == "vmess" && list0[i].indexOf("remarks=") == -1) {
                     var bnode = Base64.decode(list0[i].split("vmess://")[1])
                     if (bnode.indexOf("over-tls=") == -1) {//v2rayN
                         node = V2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
                     } else {//quantumult type
                         node = VQ2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
                     }
                   node = tag0 != ""? URI_TAG(node, tag0): node
                 } else if (type == "vmess" && list0[i].indexOf("remarks=") != -1) {//shadowrocket type
                     node = VR2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
                     node = tag0 != ""? URI_TAG(node, tag0): node
                 } else if (type == "ssr") {
                     node = SSR2QX(list0[i], Pudp, Ptfo)
                     node = tag0 != ""? URI_TAG(node, tag0): node
                 } else if (type == "ss") {
                     node = SS2QX(list0[i], Pudp, Ptfo)
                     node = tag0 != ""? URI_TAG(node, tag0): node
                 } else if (type == "ssd") {
                     node = SSD2QX(list0[i], Pudp, Ptfo)
                 } else if (type == "trojan") {
                     node = TJ2QX(list0[i], Pudp, Ptfo, Pcert, Ptls13)
                     node = tag0 != ""? URI_TAG(node, tag0): node
                 } else if (type == "https" && list0[i].indexOf(",") == -1) {
                     if (listi.indexOf("@") != -1) {
                         node = HPS2QX(list0[i], Ptfo, Pcert, Ptls13)
                         node = tag0 != ""? URI_TAG(node, tag0): node
                     } else {
                         var listh = Base64.decode(listi.split("https://")[1].split("#")[0])
                         listh = "https://" + listh + "#" + listi.split("https://")[1].split("#")[1]
                         node = HPS2QX(listh, Ptfo, Pcert, Ptls13)
                         node = tag0 != ""? URI_TAG(node, tag0): node
                     }
                 } else if (QuanXK.some(NodeCheck)) {
                     node = QX_TLS(isQuanX(list0[i])[0])
                 } else if (SurgeK.some(NodeCheck)) {
                     node = QX_TLS(Surge2QX(list0[i])[0])
                 } else if (LoonK.some(NodeCheck)) {
                     node = Loon2QX(list0[i])
                 }
             } catch (e) {
                 failedList.push(`<<<\nContent: ${list0[i]}\nError: ${e}`)
             }
             if (node ​​instanceof Array) {
                 for (var j in node) {
                   node[j] = Pudp != 0? XUDP(node[j],Pudp): node[j]
                   node[j] = Ptfo != 0? XTFO(node[j],Ptfo): node[j]
                     QXlist.push(node[j])
                 }
             } else if (node ​​!= "" && node) {
               node = Pudp != 0? XUDP(node,Pudp): node
               node = Ptfo != 0? XTFO(node,Ptfo): node
                 QXlist.push(node)
             }
         }
     }
     if (failedList.length> 0 && Pntf0 != 0) {
         $notify(`⚠️ There are ${failedList.length} data parsing failed, ignored`, "error content 👇", failedList.join("\n"));
     }
     return QXlist;
 }

 // qx type tls verification problem
 function QX_TLS(cnt,Pcert,Ptls13) {
   var cert0 = Pcert == 1? "tls-verification=true, ": "tls-verification=false,"
   if(cnt.indexOf("tls-verification") != -1){
     cnt = cnt.replace(RegExp("tls\-verification.*?\,", "gmi"), cert0)
   }else if(cnt.indexOf("obfs=over-tls")!=-1 || cnt.indexOf("obfs=wss")!=-1){
     cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), cert0+"tag=")
   }
   return cnt
 }

 //Convert the subscription in sip008 format to quanx format
 function SIP2QuanX (cnt) {
   cnt = JSON.parse(cnt)
   ll =cnt.length
   nodes =[]
   for (i=0; i<ll; i++) {
     node = "shadowsocks="
     cnti = cnt[i]
     ip = cnti.server + ":" + cnti.server_port
     mtd = "method=" + cnti.method
     pwd = "password=" + cnti.password
     obfs = cnti.plugin_opts? cnti.plugin_opts.replace(";", ", "):""
     tag = "tag="+cnti.remarks
     node = node +[ip,pwd, mtd, obfs, tag].filter(Boolean).join(", ")
     nodes.push(node)
   }
   return nodes.join("\n")
   //console.log(nodes)
 }

 //http=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, tls13=true, fast-open=false, udp-  relay=false, tag=http-tls-02
 //HTTPS type URI is converted to QUANX format
 function HPS2QX(subs, Ptfo, Pcert, Ptls13) {
     var server = subs.replace("https://", "").trim()//Base64.decode(subs.replace("https://", "")).trim().split("  \u0000")[0];
     var nss = []
     if (server != "") {
         var ipport = "http=" + server.split("@")[1].split("#")[0].split("/")[0];
         var uname = "username=" + server.split(":")[0];
         var pwd = "password=" + server.split("@")[0].split(":")[1];
         var tag = "tag=" + server.split("#")[1];
         var tls = "over-tls=true";
         var cert = Pcert != 0? "tls-verification=true": "tls-verification=false";
         var tfo = Ptfo == 1? "fast-open=true": "fast-open=false";
         var tls13 = Ptls13 == 1? "tls13=true": "tls13=false";
         nss.push(ipport, uname, pwd, tls, cert, tfo, tls13, tag)
     }
     var QX = nss.join(",");
     return QX
 }

//quantumult format vmess URI conversion
 function VQ2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
     var server = String(Base64.decode(subs.replace("vmess://", "").trim()).split("\u0000")[0])
     var node = ""
     var ip = "vmess=" + server.split(",")[1].trim() + ":" + server.split(",")[2].trim() + ", "+ "method  =aes-128-gcm, "+ "password=" + server.split(",")[4].split("\"")[1] + ","
     var tag = "tag=" + server.split("=")[0]
     var tfo = subs.indexOf("tfo=1") != -1? "fast-open=true, ": "fast-open=false,"
     var udp = Pudp == 1? "udp-relay=true, ": "udp-relay=false, ";
     node = ip + tfo + udp
     var obfs = ""
     if (server.indexOf("obfs=") == -1) {// non-ws type
         obfs = server.indexOf("over-tls=true") != -1? "obfs=over-tls, ": "" //over-tls
         var host = server.indexOf("tls-host") != -1? "obfs-host=" + server.split("tls-host=")[1].split(",")[0] +  ", ": ""
         obfs = obfs + host
     } else if (server.indexOf("obfs=ws") != -1) {
         obfs = server.indexOf("over-tls=true") != -1? "obfs=wss, ": "obfs=ws," //ws,wss type
         var uri = server.indexOf("obfs-path=") != -1? "obfs-uri=" + server.split("obfs-path=")[1].split("\"")[1  ] + ", ": "obfs-uri=/,"
         obfs = obfs + uri
         var host = server.indexOf("obfs-header=") != -1? "obfs-host=" + server.split("obfs-header=\"Host:")[1].split("["  )[0].trim() + ", ": ""
         obfs = obfs + host
     }
     if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
         var cert = Pcert != 0 || subs.indexOf("allowInsecure=1") != -1? "tls-verification=false, ": "tls-verification=true,"
         var tls13 = Ptls13 == 1? "tls13=true, ": ""
         obfs = obfs + cert + tls13
     }
     node = node + obfs + tag
     return node
 }

 //Vmess URI conversion in Shadowrocket format
 function VR2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
     var server = String(Base64.decode(subs.replace("vmess://", "").split("?remarks")[0]).trim()).split("\u0000")[0  ]
     var node = ""
     var ip = "vmess=" + server.split("@")[1] + ", "+ "method=aes-128-gcm," + "password=" + server.split("@")[0  ].split(":")[1] + ", "
     var tag = "tag=" + decodeURIComponent(subs.split("remarks=")[1].split("&")[0])
     var tfo = subs.indexOf("tfo=1") != -1? "fast-open=true, ": "fast-open=false,"
     var udp = Pudp == 1? "udp-relay=true, ": "udp-relay=false, ";
     node = ip + tfo + udp
     var obfs = subs.split("obfs=")[1].split("&")[0]
     if (obfs == "none") {//
         obfs = subs.indexOf("tls=1") != -1? "obfs=over-tls, ": "" //over-tls
     } else if (obfs == "websocket") {
         obfs = subs.indexOf("tls=1") != -1? "obfs=wss, ": "obfs=ws," //ws,wss type
         var ouri = subs.indexOf("&path=") != -1? subs.split("&path=")[1].split("&")[0]: "/" //ws,wss type
         obfs = obfs + "obfs-uri=" + ouri + ", "
         var host = subs.indexOf("&obfsParam=") != -1? "obfs-host=" + subs.split("&obfsParam=")[1].split("&")[0] + ", "  : ""
         obfs = obfs + host
     }
     if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
         var cert = Pcert != 0 || subs.indexOf("allowInsecure=1") != -1? "tls-verification=false, ": "tls-verification=true,"
         var tls13 = Ptls13 == 1? "tls13=true, ": ""
         obfs = obfs + cert + tls13
     }
     node = node + obfs + tag
     return node
 }

 //V2RayN uri converted to QUANX format
 function V2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
   var cert = Pcert
   var tls13 = Ptls13
   var server = String(Base64.decode(subs.replace("vmess://", "")).trim()).split("\u0000")[0];
   var nss = [];
   if (server != "") {
     ss = JSON.parse(server);
     ip = "vmess=" + ss.add + ":" + ss.port;
     pwd = "password=" + ss.id;
    
     mtd = "method=aes-128-gcm"
     try {
       tag = "tag=" + decodeURIComponent(ss.ps);
     } catch (e) {
       tag = "tag=" + ss.ps;
     }
     udp = Pudp == 1? "udp-relay=true": "udp-relay=false";
     tfo = Ptfo == 1? "fast-open=true": "fast-open=false";
     obfs = Pobfs(ss, cert, tls13);
     if (obfs == "" || obfs == undefined) {
       nss.push(ip, mtd, pwd, tfo, udp, tag)
     } else if(obfs != "NOT-SUPPORTTED"){
       nss.push(ip, mtd, pwd, obfs, tfo, udp, tag);
     }
     QX = nss.join(", ");
   }
   return QX
 }

 // Vmess obfs parameters
 function Pobfs(jsonl, Pcert, Ptls13) {
     var obfsi = [];
     var cert = Pcert;
     tcert = cert == 0? "tls-verification=false": "tls-verification=true";
     tls13 = Ptls13 == 1? "tls13=true": "tls13=false"
     if (jsonl.net == "ws" && jsonl.tls == "tls") {
         obfs0 = "obfs=wss, "+ tcert + "," + tls13 + ", ";
         uri0 = jsonl.path && jsonl.path != ""? "obfs-uri=" + jsonl.path: "obfs-uri=/";
         uri0 = uri0.indexOf("uri=/")!=-1? uri0:uri0.replace("uri=","uri=/")
         host0 = jsonl.host && jsonl.host != ""? "obfs-host=" + jsonl.host + ", ": "";
         obfsi.push(obfs0 + host0 + uri0)
         return obfsi.join(", ")
     } else if (jsonl.net == "ws") {
         obfs0 = "obfs=ws";
         uri0 = jsonl.path && jsonl.path != ""? "obfs-uri=" + jsonl.path: "obfs-uri=/";
         uri0 = uri0.indexOf("uri=/")!=-1? uri0:uri0.replace("uri=","uri=/")
         host0 = jsonl.host && jsonl.host != ""? "obfs-host=" + jsonl.host + ", ": "";
         obfsi.push(obfs0, host0 + uri0);
         return obfsi.join(", ")
     } else if (jsonl.tls == "tls" && jsonl.net == "tcp") {// filter out h2/http and other types
         obfs0 = "obfs=over-tls, "+ tcert + "," + tls13;
         uri0 = jsonl.path && jsonl.path != ""? "obfs-uri=" + jsonl.path: "";
         uri0 = uri0.indexOf("uri=/")!=-1? uri0:uri0.replace("uri=","uri=/")
         host0 = jsonl.host && jsonl.host != ""? ", obfs-host=" + jsonl.host: "";
         obfsi.push(obfs0 + host0)
         return obfsi.join(", ")
     } else if(jsonl.net !="tcp"){ // Filter out h2/http and other types
       return "NOT-SUPPORTTED"
     } else if(jsonl.net =="tcp" && jsonl.type != "none") {
       return "NOT-SUPPORTTED"
     } else {return ""}
 }

 //Special treatment for .(in/out & rename)
 function Dot2(cnt) {
     cnt = cnt? cnt.replace(/\\\./g, "This is a dot"): ""
     return cnt
 }

 function ToDot(cnt) {
     cnt = cnt? cnt.replace(/This is a dot/g, "."): ""
     return cnt
 }

 //Regular filtering, complete content matching
 function Regex(content) {
     var Preg0 = RegExp(Preg, "i")
     cnt = content //.split("tag=")[1]
     if (Preg0.test(cnt)) {
         return content
     }
 }

 // Judging the function of node filtering
 function Scheck(content, param) {
     name = content.split("tag=")[1].toUpperCase()
     param = param? param.map(Dot2): param // Special treatment for symbols.
     if (param) {
         var flag = 0;
         for (var i = 0; i <param.length; i++) {
             var params = param[i].split(".").map(ToDot);
             const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
             if (params.every(checkpara)) {
                 flag = 1
             }
         }//for
         return flag
     } else {//if param
         return 2
     }
 }

//Node filtering, use + to connect multiple keywords (logical "or"): in is reserved, out is excluded, "and" logic please use the symbol "." to connect
 function Filter(servers, Pin, Pout) {
     var Nlist = [];
     var Delist = [];
     var Nname = [];
     servers = servers.filter(Boolean)
     for (var i = 0; i <servers.length; i++) {
         if (Scheck(servers[i], Pin) != 0 && Scheck(servers[i], Pout) != 1) {
             Nlist.push(servers[i])
             Nname.push(servers[i].replace(/ /g, "").split("tag=")[1])
         } else {Delist.push(servers[i].replace(/ /g, "").split("tag=")[1])} //Record unreserved nodes
     }//for
     var no = Delist.length <= 10? emojino[Delist.length]: Delist.length;
     var no1 = Nlist.length <= 10? emojino[Nlist.length]: Nlist.length;
     if (Pntf0 == 1 && Delist.length >= 1) {//Notification part
         if (Pin && no1> 0) {//If there is an in parameter, notify the reserved part
             $notify("👥 reference" + "⟦" + subtag + "⟧" + "start node filtering", "🕹 Filter keywords: "+ pfi + pfo, "☠️ The following" + no1 + "nodes are reserved\n  "+ Nname.join(", "), sub_link);
         } else if (Pout && no> 0) {
             $notify("👥 reference" + "⟦" + subtag + "⟧" + "start node filter", "🕹 filter keywords: "+ pfi + pfo, "☠️ The following" + no + "nodes have been deleted\n  "+ Delist.join(", "), sub_link);
         }
     } else if (no1 == 0 || no1 == null) {// Mandatory notification when there are no remaining nodes
         $notify("‼️ ⟦" + subtag + "⟧" + "The number of nodes after filtering is 0️⃣", "⚠️ Please check the original link and filtering parameters yourself", link0, sub_link);
     }
     return Nlist
 }

 function FilterScript(servers, script) {
     $notify("🤖 enable script to filter", "", script);
     try {
         const $ = Tools();
         eval(script);
         // extract server tags
         const nodes = Tools().getNodeInfo(servers);
         const IN = filter(nodes);
         const res = servers.filter((_, i) => IN[i]);
         if (res.length === 0) {
             $notify("‼️ ⟦" + subtag + "⟧" + "The number of nodes after filtering is 0️⃣", "⚠️ Please check the original link and filtering parameters yourself", link0, sub_link);
         }
         return res;
     } catch (err) {
         $notify("❌ An error occurred in the script filtering", "", err);
         return servers;
     }
 }

 //SSR type URI conversion quanx format
 function SSR2QX(subs, Pudp, Ptfo) {
     var nssr = []
     var cnt = Base64.decode(subs.split("ssr://")[1].replace(/-/g, "+").replace(/_/g, "/")).split("  \u0000")[0]
     var obfshost ='';
     var oparam ='';
     if (cnt.split(":").length <= 6) {//Troubleshoot ipv6 nodes
         type = "shadowsocks=";
         ip = cnt.split(":")[0] + ":" + cnt.split(":")[1];
         pwd = "password=" + Base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g, "+").replace(/_  /g, "/")).split("\u0000")[0];
         mtd = "method=" + cnt.split(":")[3];
         obfs = "obfs=" + cnt.split(":")[4] + ", ";
         ssrp = "ssr-protocol=" + cnt.split(":")[2];
         if (cnt.indexOf("obfsparam=") != -1) {
             obfshost = cnt.split("obfsparam=")[1].split("&")[0] != ""? "obfs-host=" + Base64.decode(cnt.split("obfsparam=")[  1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/")).split(",")[0].split(  "\u0000")[0] + ", ": ""
         }
         if (cnt.indexOf("protoparam=") != -1) {
             oparam = cnt.split("protoparam=")[1].split("&")[0] != ""? "ssr-protocol-param=" + Base64.decode(cnt.split("protoparam="  )[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/")).split(",")[0].  split("\u0000")[0] + ", ": ""
         }
         tag = "tag=" + (Base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g, "+").replace(/  _/g, "/"))).split("\u0000")[0]
         pudp = Pudp == 1? "udp-relay=true": "udp-relay=false";
         ptfo = Ptfo == 1? "fast-open=true": "fast-open=false";
         nssr.push(type + ip, pwd, mtd, obfs + obfshost + oparam + ssrp, pudp, ptfo, tag)
         QX = nssr.join(", ")
     } else {QX = ""}
     return QX;
 }

//Trojan type URI is converted to QX
 function TJ2QX(subs, Pudp, Ptfo, Pcert, Ptls13) {
     var ntrojan = []
     var cnt = subs.split("trojan://")[1]
     type = "trojan=";
     if (cnt.indexOf(":443") != -1) {
         ip = cnt.split("@")[1].split(":443")[0] + ":443";
     } else {
         ip = cnt.split("@")[1].split("?")[0].split("\n")[0].trim(); //A wonderful airport other than port 443?
     }
     pwd = "password=" + cnt.split("@")[0];
     obfs = "over-tls=true";
     pcert = cnt.indexOf("allowInsecure=0") != -1? "tls-verification=true": "tls-verification=false";
     thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split(/&|#/)[0]:""
     ptls13 = Ptls13 == 1? "tls13=true": "tls13=false"
     if (Pcert == 0) {
       pcert = "tls-verification=false"
     } else if (Pcert == 1) {
       pcert = "tls-verification=true"
     }
     pudp = Pudp == 1? "udp-relay=true": "udp-relay=false";
     ptfo = Ptfo == 1? "fast-open=true": "fast-open=false";
     tag = cnt.indexOf("#") != -1? "tag=" + decodeURIComponent(cnt.split("#")[1]): "tag= [trojan]" + ip
     ntrojan.push(type + ip, pwd, obfs, pcert, thost, ptls13, pudp, ptfo, tag)
     QX = ntrojan.filter(Boolean).join(", ");
     return QX;
 }

 //SS type URI conversion quanx format
 function SS2QX(subs, Pudp, Ptfo) {
     var nssr = []
     var cnt = subs.split("ss://")[1]
     if (cnt.split(":").length <= 6) {//Troubleshoot ipv6 nodes
         type = "shadowsocks=";
         if (cnt.indexOf("@") != -1) {
             ip = cnt.split("@")[1].split("#")[0].split("/")[0];
             pwdmtd = Base64.decode(cnt.split("@")[0].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")  [0].split(":")
         } else {
             var cnt0 = Base64.decode(cnt.split("#")[0].replace(/-/g, "+").replace(/_/g, "/").split("\u0000")  [0]);
             ip = cnt0.split("@")[1].split("#")[0].split("/")[0];
             pwdmtd = cnt0.split("@")[0].split(":")
         }
         pwd = "password=" + pwdmtd[1];
         mtd = "method=" + pwdmtd[0];
         obfs = cnt.split("obfs%3D")[1] != null? ", obfs=" + cnt.split("obfs%3D")[1].split("%3B")[0].  split("#")[0]: "";
         obfshost = cnt.split("obfs-host%3D")[1] != null? ", obfs-host=" + cnt.split("obfs-host%3D")[1].split("&"  )[0].split("#")[0]: "";
         tag = "tag=" + decodeURIComponent(cnt.split("#")[1])
         pudp = Pudp == 1? "udp-relay=true": "udp-relay=false";
         ptfo = Ptfo == 1? "fast-open=true": "fast-open=false";
         nssr.push(type + ip, pwd, mtd + obfs + obfshost, pudp, ptfo, tag)
         QX = nssr.join(", ")
         return QX;
     }
 }

 //SSD type URI conversion quanx format
 function SSD2QX(subs, Pudp, Ptfo) {
     var j = 0
     var QX = []
     var cnt = JSON.parse(Base64.decode(subs.split("ssd://")[1]))
     var type = "shadowsocks=";
     var pwd = "password=" + cnt.password;
     var mtd = "method=" + cnt.encryption;
     var obfs = ""
     var obfshost = ""
     var port = cnt.port? ":" + cnt.port: ""
     if (cnt.plugin_options) {
         obfs = cnt.plugin_options.split(";")[0] != null? ", "+ cnt.plugin_options.split(";")[0]: "";
         obfshost = cnt.plugin_options.split(";")[1] != null? ", "+ cnt.plugin_options.split(";")[1]: "";
     }
     pudp = Pudp == 1? "udp-relay=true": "udp-relay=false";
     ptfo = Ptfo == 1? "fast-open=true": "fast-open=false";
     for (var i in cnt.servers) {
         ip = cnt.servers[i].server;
         if (cnt.servers[i].plugin_options) {
             obfs = cnt.servers[i].plugin_options.split(";")[0] != null? ", "+ cnt.servers[i].plugin_options.split(";")[0]: "";
             obfshost = cnt.servers[i].plugin_options.split(";")[1] != null? ", "+ cnt.servers[i].plugin_options.split(";")[1]: "";
         }
         if (cnt.servers[i].encryption) {//Independent encryption method
             mtd = "method=" + cnt.servers[i].encryption
         }
         if (cnt.servers[i].password) {//Independent password
             pwd = "password=" + cnt.servers[i].password
         }
         if (ip.indexOf(".")> 0) {//Troubleshoot ipv6 nodes
             port = cnt.servers[i].port? ":" + cnt.servers[i].port: port;
             tag = "tag=" + cnt.servers[i].remarks;
             QX[j] = type + ip + port + ", "+ pwd + "," + mtd + obfs + obfshost + ", "+ pudp + "," + ptfo + ", "+ tag;
             var j = j + 1;
         }
     }
     return QX;
 }

// Correct part of the irregular writing (not writing the tag at the end)
 function QXFix(cntf) {
   var cnti = cntf.replace(/tag\s+\=/,"tag=").replace("chacha20-poly","chacha20-ietf-poly")
   var hd = cnti.split("tag=")[0]
   var tag = "tag="+cnti.split("tag=")[1].split(",")[0]
   var tail = cnti.split(tag+",")
   cnti = tail.length<=1? cntf: cntf //String(hd + tail[1] +"," + tag)
   return cnti
 }

 // Used to filter non-node parts (such as other content in the entire configuration), while correcting part of the irregular writing (not writing the tag at the end)
 function isQuanX(content) {
     var cnts = content.split("\n");
     var nlist = []
     for (var i = 0; i <cnts.length; i++) {
         var cnti = cnts[i];
         if (cnti.indexOf("=") != -1 && cnti.indexOf("tag") != -1) {
             var cnt = cnti.split("=")[0].trim()
             if (cnt == "http" || cnt == "shadowsocks" || cnt == "trojan" || cnt == "vmess") {
                 nlist.push(QXFix(cnti))
             }
         }
     }
     return nlist
 }

 //surge script/rewrite-> quanx
 function isQuanXRewrite(content) {
   cnt = content
   cnt0=[]
   var RuleK = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,", "geoip,", "user-agent,  ", "ip6-cidr,","force-http"];
  
   for (var i = 0; i< cnt.length; i++){
     if(cnt[i]){
       var cnti = cnt[i]
       const RuleCheck = (item) => cnti.toLowerCase().indexOf(item) != -1;
      
       if (cnti.indexOf("pattern")!=-1 && cnti.indexOf("type")!=-1 || cnti.indexOf("http-r")!=-1) {
         cnti=SGMD2QX(cnti)[0]? SGMD2QX(cnti)[0]:""
         //console.log(cnti)
       }else if ((cnti.indexOf(" 302")!=-1 || cnti.indexOf(" 307")!=-1) && cnti.indexOf(" url ")==-1){
         cnti=SGMD2QX(cnti)[0]? SGMD2QX(cnti)[0]:""
         //console.log("sss",cnti)
       }else if(cnti.indexOf("URL-REGEX")!=-1 || cnti.indexOf(" header")!=-1 || cnti.replace(/ /g,"").indexOf("hostname  =")!=-1){
         cnti=SGMD2QX(cnti)[0]? SGMD2QX(cnti)[0]:""
       }else if(cnti.indexOf(" data=")!=-1){
         cnti=cnti.replace(/ /g, "").split("data=")[0] + "url" + "reject-dict"
       }
       if (cnti.trim()[0]!="[" && cnti.indexOf("RULE-SET")==-1 && !/cronexp\=|type\=cron/.test(cnti.replace(/  /g,"")) && !RuleK.some(RuleCheck)) {
         cnt0.push(cnti) // Write after excluding other items
       }
     }
   }
   //console.log(cnt0)
   return cnt0
 }



 //Sort by node name (without emoji part)
 function QXSort(content, para) {
     var nlist = content;//.split("\n");
     if (para == 1) {
         return nlist.sort(ToTag)
     } else if (para == -1) {
         return nlist.sort(ToTagR)
     } else if(para == "x") {
         return shuffle(nlist)
     } else if(para == "0") {
         return nlist
     } else {
       return Sort_KWD (nlist,para) //Keyword sort
     }
 }
 //Positive sequence
 function ToTag(elem1, elem2) {
     var tag1 = elem1.split("tag")[1].split("=")[1].trim()
     var tag2 = elem2.split("tag")[1].split("=")[1].trim()
     res = tag1> tag2? 1: -1
     return res
 }
 //Reverse order
 function ToTagR(elem1, elem2) {
     var tag1 = elem1.split("tag")[1].split("=")[1].trim()
     var tag2 = elem2.split("tag")[1].split("=")[1].trim()
     res = tag1> tag2? -1: 1
     return res
 }
 // Randomly shuffle and sort
 function shuffle(arr) {
     var input = arr;
     for (var i = input.length-1; i >= 0; i--) {
         var randomIndex = Math.floor(Math.random() * (i + 1));
         var itemAtIndex = input[randomIndex];
         input[randomIndex] = input[i];
         input[i] = itemAtIndex;
     }
     return input;
 }

 //Sort according to the specified rules
 function Sort_KWD (cnt,strs) {
   strlist = strs.indexOf("<") != -1? strs.split("<"):strs.split(">")
   regj = strlist.map(item => RegExp(item, "i"))
   //dir = PsortX
   dir = strs.indexOf("<") != -1? -1:1
   var arr = new Array(strlist.length+1); //The table has n rows
   for(var i = 0;i <arr.length; i++){
     arr[i] = []; //Each row has columns
   }
   for (var i =0; i<cnt.length; i++) {
     flag = 0
     for (var j=0; j<strlist.length; j++){
       if(regj[j].test(cnt[i])) {
         arr[j].push(cnt[i])
         flag = 1
         break
       }
     }
     if (flag != 1){
       arr[strlist.length].push(cnt[i])} // does not match
   }
   //console.log(arr)
   arr = PsortX == -1? arr.map(item => item.sort(ToTagR)): arr
   arr = PsortX == 1? arr.map(item => item.sort(ToTag)): arr
   newarr = MixArr(arr,dir)
   return newarr
 }

 function MixArr(cnt,dir){
   var cnt0=[]
   for (i=0; i<cnt.length-1; i++){
     //console.log(dir)
     cnt0 = dir ==1? cnt0.concat(cnt[i]):cnt0.concat(cnt[cnt.length-2-i])
   }
   cnt0 = dir ==1? cnt0.concat(cnt[cnt.length-1].sort(ToTag)):(cnt[cnt.length-1].sort(ToTagR)).concat(cnt0)
   return cnt0
 }


 //Regularly delete the characters in the node name
 function DelReg(content) {
     delreg = RegExp(delreg, "gmi")
     cnt0 = content.split("tag=")[0]
     cnt1 = content.split("tag=")[1]
     cnt = cnt0 + "tag=" + cnt1.replace(delreg, "")
     return cnt
 }

 //Node rename
 function Rename(str) {
     var server = str;
     if (server.indexOf("tag=") != -1) {
         hd = server.split("tag=")[0]
         name = server.split("tag=")[1].split(",")[0].trim()
         tail = server.split("tag=")[1].split(",").length <=1? "": server.split("tag=")[1].split(name)[1]
         for (var i = 0; i <Prn.length; i++) {
             nname = Prn[i].split("@")[1]? decodeURIComponent(Prn[i].split("@")[1]): Prn[i].split("@")[1];
             oname = Prn[i].split("@")[0]? decodeURIComponent(Prn[i].split("@")[0]): Prn[i].split("@")[0];
             if (oname && nname) {//rename
                 var rn = escapeRegExp(oname)
                 name = name.replace(new RegExp(rn, "gmi"), nname)
             } else if (oname && nname == "") {//prefix
                 var nemoji = emoji_del(name)
                 if ((Pemoji == 1 || Pemoji == 2) && Prname) {//Determine whether there is a duplicate emoji, if there is, delete the old one
                     name = name.replace(name.split(" ")[0] + "", name.split(" ")[0] +" "+ oname)
                 } else {name = oname + name.trim()}
             } else if (nname && oname == "") {//suffix
                 name = name.trim() + nname
             } else if (oname && oname.indexOf("☠️") != -1) {//Delete specific characters, use multiple characters. Connect
                 hh = Dot2(oname.slice(0, oname.length-2)).split(".") //Special treatment of symbols.
                 for (j = 0; j <hh.length; j++) {
                     var nn = escapeRegExp(ToDot(hh[j]))
                     var del = new RegExp(nn, "gmi");
                     name = name.replace(del, "")
                 }
             } else if (oname == "" && nname == "") {//When there is only @, delete the @ symbol
                 name = name.replace(/@/g, "")
             } else {
                 name = name
             }
             nserver = hd + "tag=" + name + tail
         }
       return nserver
     } else {
       return server
     }
 }

 function RenameScript(servers, script) {
     $notify("🤖 Enable script to rename", "", script);
     try {
         const $ = Tools().rename;
         // extract server tags
         const nodes = Tools().getNodeInfo(servers);
         eval(script);
         const newNames = rename(nodes);
         // rename nodes
         return servers.map((s, i) => s.split("tag=")[0] + "tag=" + newNames[i]);
     } catch (err) {
         $notify("❌ An error occurred during script renaming", "", err);
         return servers;
     }

 }

//Delete emoji
 function emoji_del(str) {
     return str.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim();//unescape(escape(str).replace(  /\%uD.{3}/g,''));
 }

 //Add emoji to the node name
 function get_emoji(emojip, sname) {
     var Lmoji = {"🏳️‍🌈": ["Flow", "Time", "Emergency", "Expired", "Bandwidth", "expire"], "🇦🇹": ["Austria", "Austria",  "Austria", "Vienna"], "🇦🇺": ["AU", "Australia", "Sydney", "Australia", "Australia", "Melbourne", "Sydney" ,"Tuao", "京 "Australia","广澳","沪澳"], "🇧🇪": ["BE", "Belgium", "Belgium"], "🇧🇬": ["Bulgaria", "Bulgaria"], "🇵  🇰":["Pakistan"], "🇰🇭":["Cambodia"], "🇺🇦":["Ukraine","Ukraine"], "🇨🇦": ["Canada","CANADA", "  CAN", "Waterloo", "Canada", "Montreal", "Vancouver", "Maple Leaf", "Maple Leaf", "Waterloo", "Toronto"], "🇨🇭": ["Switzerland", "Zurich",  "Switzerland"], "🇨🇿": ["Czechia", "Czech"], "🇩🇪": ["DE", "German", "GERMAN", "Germany", "Germany", "Frankfurt",  "京德","沪德","广德"], "🇩🇰": ["DK","DNK","Denmark","Denmark"], "🇪🇸": ["ES", "  Spain", "Spain"], "🇪🇺": ["EU", "European Union", "Europa"], "🇫🇮": ["Finland", "Finland", "Finland", "Helsinki"],  "🇫🇷": ["FR", "France", "France", "France", "Paris"], "🇬🇧": ["UK", "GB", "England", "United Kingdom",  "United Kingdom", "London", "英"], "🇲🇴": ["MO", "Macao", "Macao", "Macao", "CTM"], "🇰🇿": ["Kazakhstan"  ], "🇭🇺": ["Hungary", "Hungary"], "🇭🇰": ["HK", "Hongkong", "Hong Kong", "HongKong", "HONG KONG", "香港", "  "Shenzhen Hong Kong", "Shanghai Hong Kong", "Hugang", "HKT", "HKBN", "HGC", "WTT", "CMI", "Guigang", "Jinggang", "港"], "  🇮🇩": ["Indonesia"  , "Indonesia", "Indonesia", "Jakarta"], "🇮🇪": ["Ireland", "IRELAND", "Ireland", "Ireland", "Dublin"], "🇮🇱": ["Israel"  , "Israel"], "🇮🇳": ["India", "IND", "INDIA","India", "Mumbai", "Mumbai"], "🇮🇸":["IS","ISL"  , "Iceland","Iceland"],"🇰🇵": ["KP", "North Korea"], "🇰🇷": ["KR", "Korea", "KOR", "Korea", "Seoul"  , "韩", "韩"], "🇱🇻": ["Latvia", "Latvija", "Latvia"], "🇲🇽️": ["MEX", "MX", "Mexico"],"🇮  🇲":["Isle of Man", "Isle of Man" ,"Isle of Man"], "🇲🇾": ["MY", "Malaysia","MALAYSIA", "Malaysia", "Malaysia", "Malaysia  ", "Kuala Lumpur"], "🇳🇱": ["NL", "Netherlands", "Netherlands", "Netherlands", "Netherlands", "Amsterdam"], "🇵🇭": ["PH",  "Philippines", "Philippines", "Philippines"], "🇷🇴": ["RO", "Romania"], "🇷🇺": ["RU", "Russia", "Russia", "Russia",  "Russia", "Boli", "Moscow", "Saint Petersburg", "Siberia", "Novosibirsk", "Beijing Russia", "Hang Russia", "Guang Russia", "Shanghai Russia"], "🇸🇦  ": ["Saudi", "Dubai"], "🇸🇪": ["SE", "Sweden", "Sweden"], "🇸🇬": ["SG", "Singapore","SINGAPORE", "  Singapore", "Lion City", "Huxin", "Jingxin", "Quanxin", "Suixin", "Shenxin", "Hangxin", "Guangxin", "Guangxin", "Shanghai  New"], "🇹🇭": ["TH", "Thailand", "Thailand", "Thailand", "Bangkok"], "🇹🇷": ["TR", "Turkey", "Turkey", "  Istanbul"], "🇹🇼": ["TW", "Taiwan","TAIWAN", "Taiwan", "Taipei", "Taichung", "New Taipei", "Changhua", "CHT", "台",  "HINET"], "🇺🇸": ["US", "USA", "America", "United  States", "United States", "Beauty", "Jingmei", "Portland", "Dallas", "Oregon", "Phoenix", "Fremont", "Silicon Valley", "Silicon Valley", "  "Las Vegas", "Los Angeles", "San Jose", "Santa Clara", "Seattle", "Chicago", "Humei", "Columbus", "New York"], "🇻🇳": ["  VN", "Vietnam", "Ho Chi Minh City"], "🇮🇹": ["Italy", "IT", "Nachash", "Italy", "Milan", "Italy"], "🇿🇦":  ["South Africa", "South Africa"], "🇦🇪": ["United Arab Emirates", "UAE"], "🇧🇷": ["BR", "Brazil", "Brazil", "São Paulo"]  , "🇯🇵": ["JP", "Japan", "JAPAN", "日", "日本", "Tokyo", "Osaka", "Saitama", "沪日", "穗日", "  Chuanri", "China-Japan", "Quanri", "Hangri", "Shenri", "Liaori", "Guangri"], "🇦🇷": ["AR", "Argentina"],  "🇳🇴": ["Norway", "Norway", "NO"], "🇨🇳": ["CN", "China", "Return to China", "China", "Jiangsu", "Beijing", "  Shanghai", "Guangzhou", "Shenzhen", "Hangzhou", "Xuzhou", "Qingdao", "Ningbo", "Zhenjiang", "back"],"🇵🇱": ["PL", "POL",  "Poland","Poland"], "🇨🇱": ["Chile"],"🇳🇿":["New Zealand","New Zealand"],"🇵🇹":["Portugal"]}
     str1 = JSON.stringify(Lmoji)
     aa = JSON.parse(str1)
     bb = JSON.parse(str1.replace(/🇹🇼/g, "🇨🇳"))
     var cnt = emojip ==1? aa:bb;
     var flag = 0;
     for (var key in cnt) {
         dd = cnt[key]
         for (i in dd) {
             if (sname.indexOf(dd[i]) != -1) {
                 flag = 1;
                 nname = key + "" + sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim(); // use regex to  remove the original flag
                 return [nname,key]
             }
         }
     }
     if (flag == 0) {return ["🏴‍☠️ "+ sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").  trim(), "🏴‍☠️"]}
 }

 //emoji processing
 function emoji_handle(servers, Pemoji) {
     var nlist = []
     var ser0 = servers

     for (var i = 0; i <ser0.length; i++) {
         if (ser0[i].indexOf("tag=") != -1) {
             var oname = ser0[i].split("tag=")[1].trim();
             var hd = ser0[i].split("tag=")[0];
             var nname = oname;//emoji_del(oname);
             // Code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, Emoji: https://emojipedia.org/flags/
             if (Pemoji == 1) {
                 var nname = get_emoji(1, nname)[0]
             } else if (Pemoji == 2) {
                 var nname = get_emoji(2, nname)[0]
             } else if (Pemoji == -1) {
                 nname = emoji_del(oname);
             }
             var nserver = hd + "tag=" + nname.replace(" ", "").trim()
             nlist.push(nserver)
         }
     }
     return nlist
 }

//Surge2QX conversion main function
 function Surge2QX(conf) {
   var QXlist = conf.split("\n").map(isSurge).filter(Boolean)
   var Nlist = []
   var node=""
   for (var i = 0; i <QXlist.length; i++) {
     var cnt = QXlist[i];
     if (cnt.split("=")[1].split(",")[0].indexOf("trojan") != -1) {
       node = Strojan2QX(cnt)//trojan of surge 3
     } else if (cnt.split("=")[1].split(",")[0].indexOf("http") != -1) {
       node = Shttp2QX(cnt) // http of surge 3
     } else if (cnt.split("=")[1].split(",")[0].indexOf("vmess") != -1) {
       node = SVmess2QX(cnt) //Vmess of surge 3
     } else if (cnt.split("=")[1].split(",")[0].indexOf("ss") != -1) {
       node = SSS2QX(cnt) //surge 3's SS
     } else if (cnt.split("=")[1].split(",")[0].indexOf("custom") != -1) {
       node = SCT2QX(cnt) //surge2 writing
     }
     node = Pudp0 != 0? XUDP(node,Pudp0): node
     node = Ptfo0 != 0? XTFO(node,Ptfo0): node
     if (cnt.indexOf("test-url") !=-1) {
       var checkurl = ", server_check_url" + cnt.split("test-url")[1].split(",")[0]
       node = node.replace(/\,(\s)*tag/, checkurl + ", tag")
     }
     Nlist.push(node)
   }
   return (Nlist)
 }


 // SS type writing in surge2 (custom)
 //🇷🇺 Russian GIA = custom, ip, 152, aes-128-gcm, password123, https://xxx/download/SSEncrypt.module, obfs=tls, obfs-host=xxx.windows.com, udp-relay  =true
 function SCT2QX(content) {
     var cnt = content;
     var tag = "tag=" + cnt.split("=")[0].trim();
     var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
     var pmtd = "method=" + cnt.split(",")[3].trim();
     var pwd = "password=" + cnt.split(",")[4].trim();
     if (cnt.indexOf("obfs") != -1) {
         pobfs = "obfs=" + cnt.replace(/obfs-host/, "").split("obfs")[1].split(",")[0].split("=")[1]
     } else {pobfs = ""}
     var phost = cnt.indexOf("obfs-host") != -1? "obfs-host" + cnt.split("obfs-host")[1].split(",")[0].trim(  ): "";
     if (phost != "") {
         pobfs = pobfs + ", "+ phost
     }
     var ptfo = paraCheck(cnt, "tfo") == "true"? "fast-open=true": "fast-open=false";
     var pudp = paraCheck(cnt, "udp-relay") == "true"? "udp-relay=true": "udp-relay=false";
     var nserver = pobfs != ""? "shadowsocks= "+ [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(", "): "shadowsocks=" + [ipport, pmtd, pwd, ptfo  , pudp, tag].join(", ");
     return nserver
 }


 // SS type in surge3
 function SSS2QX(content) {
     var cnt = content;
     var tag = "tag=" + cnt.split("=")[0].trim();
     var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
     var pmtd = "method=" + cnt.split("encrypt-method")[1].split(",")[0].split("=")[1];
     var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1];
     if (cnt.indexOf("obfs") != -1) {
         pobfs = "obfs=" + cnt.replace(/obfs-host/, "").split("obfs")[1].split(",")[0].split("=")[1]
     } else {pobfs = ""}
     var phost = cnt.indexOf("obfs-host") != -1? "obfs-host" + cnt.split("obfs-host")[1].split(",")[0].trim(  ): "";
     if (phost != "") {
         pobfs = pobfs + ", "+ phost
     }
     var ptfo = paraCheck(cnt, "tfo") == "true"? "fast-open=true": "fast-open=false";
     var pudp = paraCheck(cnt, "udp-relay") == "true"? "udp-relay=true": "udp-relay=false";
     var nserver = pobfs != ""? "shadowsocks= "+ [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(", "): "shadowsocks=" + [ipport, pmtd, pwd, ptfo  , pudp, tag].join(", ");
     return nserver
 }

 // Vmess type in surge
 function SVmess2QX(content) {
     var cnt = content;
     var tag = "tag=" + cnt.split("=")[0].trim();
     var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
     var puname = cnt.indexOf("username") != -1? "password=" + cnt.split("username")[1].split(",")[0].split("=")[  1].trim(): "";
     var pmtd = "method=aes-128-gcm";
     var ptls13 = paraCheck(cnt, "tls13") == "true"? "tls13=true": "tls13=false";
     var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1? "tls-verification=true": "tls-verification=false";
     pvefify = Pcert0 == 1? "tls-verification=true": pverify;
     if (paraCheck(cnt.replace(/tls13/, ""), "tls") == "true" && paraCheck(cnt.replace(/ws-header/, ""), "ws") == "true  ") {
         pobfs = "obfs=wss" + ", "+ ptls13 + "," + pverify
     } else if (paraCheck(cnt.replace(/ws-header/, ""), "ws") == "true") {
         pobfs = "obfs=ws"
     } else if (paraCheck(cnt.replace(/tls13/, ""), "tls") != "false") {
         pobfs = "obfs=over-tls" + ", "+ ptls13 + "," + pverify
     } else if (paraCheck(cnt.replace(/ws-header/, ""), "ws") == "false") {
         pobfs = ""
     }
     var puri = paraCheck(cnt, "ws-path") != "false"? "obfs-uri=" + cnt.split("ws-path")[1].split(",")[0].  split("=")[1].trim(): "obfs-uri=/"
     var phost = cnt.indexOf("ws-headers") != -1? "obfs-host=" + cnt.split("ws-headers")[1].split(",")[0].split  ("=")[1].split(":")[1].trim(): "";
     if (pobfs.indexOf("ws" || "wss") != -1) {
         if (phost != "") {
             pobfs = pobfs + ", "+ puri + "," + phost
         } else {pobfs = pobfs + ", "+ puri}
     }
     var ptfo = paraCheck(cnt, "tfo") == "true"? "fast-open=true": "fast-open=false";
     var nserver = pobfs != ""? "vmess= "+ [ipport, puname, pmtd, pobfs, ptfo, tag].join(", "): "vmess=" + [ipport, puname, pmtd, ptfo, tag  ].join(", ");
     return nserver
 }

 // Used to filter non-node parts (such as other content in the entire configuration)
 function isSurge(content) {
   if (content.indexOf("=") != -1) {
     cnt = content.split("=")[1].split(",")[0].trim()
     if (cnt == "http" || cnt == "ss" || cnt == "trojan" || cnt == "vmess" || cnt == "custom") {
         return content
     }
   }
 }
 // Used for parameter checking
 function paraCheck(content, para) {
   content=content.replace(/ /g,"")
   if (content.indexOf(para+"=") == -1) {
     return "false"
   } else {
       //console.log(para)
     return content.split(para+"=")[1].split(",")[0].trim()
   }
 }
 //trojan type conversion in surge
 function Strojan2QX(content) {
   var cnt = content;
   var tag = "tag=" + cnt.split("=")[0].trim();
   var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
   var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim();
   var ptls = "over-tls=true";
   var ptfo = paraCheck(cnt, "tfo") == "true"? "fast-open=true": "fast-open=false";
   var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1? "tls-verification=true": "tls-verification=false";
   pvefify = Pcert0 == 1? "tls-verification=true": pverify;
   var ptls13 = paraCheck(cnt, "tls13") == "true"? "tls13=true": "tls13=false";
   var nserver = "trojan= "+ [ipport, pwd, ptls, ptfo, ptls13, pverify, tag].join(", ");
   return nserver
 }
 // http type in surge
 function Shttp2QX(content) {
   var cnt = content;
   var tag = "tag=" + cnt.split("=")[0].trim();
   var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
   var puname = cnt.indexOf("username") != -1? "username=" + cnt.split("username")[1].split(",")[0].split("=")[  1].trim(): "";
   var pwd = cnt.indexOf("password") != -1? "password=" + cnt.split("password")[1].split(",")[0].split("=")[  1].trim(): "";
   var ptls = cnt.split("=")[1].split(",")[0].trim() == "https"? "over-tls=true": "over-tls=false";
   var ptfo = paraCheck(cnt, "tfo") == "true"? "fast-open=true": "fast-open=false";
   if (ptls == "over-tls=true") {
     var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1? "tls-verification=true": "tls-verification=false";
     pvefify = Pcert0 == 1? "tls-verification=true": pverify;
     var ptls13 = paraCheck(cnt, "tls13") == "true"? "tls13=true": "tls13=false";
     ptls = ptls + ", "+ pverify + "," + ptls13
   }
   var nserver = puname != ""? "http= "+ [ipport, puname, pwd, ptls, ptfo, tag].join(", "): "http=" + [ipport, ptls, ptfo, tag].  join(", ");
   return nserver
 }

 function Loon2QX(cnt) {
   var type = cnt.split("=")[1].split(",")[0].trim()
   var node = ""
   if (type == "Shadowsocks") {//ss type
       node = LoonSS2QX(cnt)
   } else if (type == "ShadowsocksR") {//ssr type
       node = LoonSSR2QX(cnt)
   }
   return node
 }
 //Loon's ss part
 function LoonSS2QX(cnt) {
   var node = "shadowsocks="
   var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
   var mtd = "method=" + cnt.split(",")[3].trim()
   var pwd = "password=" + cnt.split(",")[4].trim().split("\"")[1]
   var obfs = cnt.split(",").length == 7? ", "+ ["obfs=" + cnt.split(",")[5].trim(), "obfs-host=" +  cnt.split(",")[6].trim()].join(","): ""
   var tag = ", tag=" + cnt.split("=")[0].trim()
   node = node + [ip, mtd, pwd].join(", ") + obfs + tag
   return node
 }

 //Loon's ssr part
 //# SSR format: name=protocol type, address, port, encryption method, password, protocol type, {protocol parameter}, obfuscation type, {obfuscation parameter}
 //3 = ShadowsocksR, 1.2.3.4, 443, aes-256-cfb,"password",auth_aes128_md5,{},tls1.2_ticket_auth,{}
 function LoonSSR2QX(cnt) {
   var node = "shadowsocks="
   var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
   var mtd = "method=" + cnt.split(",")[3].trim()
   var pwd = "password=" + cnt.split(",")[4].trim().split("\"")[1]
   var ssrp = "ssr-protocol=" + cnt.split(",")[5].trim()
   var ssrpara = "ssr-protocol-param=" + cnt.split(",")[6].replace(/\{|\}/g, "").trim()
   var obfs = "obfs=" + cnt.split(",")[7].trim()
   var obfshost = "obfs-host=" + cnt.split(",")[8].replace(/\{|\}/g, "").trim()
   var tag = ", tag=" + cnt.split("=")[0].trim()
   node = node + [ip, mtd, pwd, ssrp, ssrpara, obfs, obfshost].join(", ") + tag
   return node
 }


 // fix yaml parse mistakes
 function YAMLFix(cnt){
  
   if (cnt.indexOf("{") != -1){
     cnt = cnt.replace(/\[/g,"yaml@bug1")
     cnt = cnt.replace(/(^|\n)- /g, "$1-").replace(/-/g,"-").replace(/:(?!\s)/g,":  ").replace(/\,\"/g,", \"").replace(/: {/g, ": {, ")
     //.replace(/, (host|path|tls|mux|skip)/g,", $1")
     //console.log(cnt)
     cnt = cnt.replace(/{\s*name: /g,"{name: \"").replace(/, server:/g,"\", server:")
     cnt = cnt.replace(/{|}/g,"").replace(/,/g,"\n ")
     console.log(cnt)
   }
   cnt = cnt.replace(/ -\n.*name/g,"-name").replace(/\$|\`/g,"").split("proxy-providers:")[0].  split("proxy-groups:")[0].replace(/\"(name|type|server|port|cipher|password|)(\"*)/g,"$1")
   //console.log(cnt)
   cnt = cnt.indexOf("proxies:") == -1? "proxies:\n" + cnt :"proxies:"+cnt.split("proxies:")[1]
   cnt = cnt.replace(/name\:(.*?)\:(.*?)\n/gmi,"name:$1colon$2\n") //rare bug fix
   //console.log(cnt.replace(/name\:(.*?)\:(.*?)\n/gmi,"name:$1colon$2"))
   return cnt
 }

 // Clash parser
 function Clash2QX(cnt) {
   const yaml = new YAML()
   var aa = JSON.stringify(yaml.parse(YAMLFix(cnt))).replace(/yaml@bug1/g,"[").replace(/colon/gmi,":")
   var bb = JSON.parse(aa).proxies
   //$notify("YAML Parse", "content", JSON.stringify(bb))
   //console.log(bb)
   var nl = bb.length
   var nodelist=[]
   var node=""
   for (i=0; i<nl; i++){
     try{
       node=bb[i]
       typec = node.type
       if (typec == "ss") {
         node = CSS2QX(node)
       } else if (typec == "ssr"){
         node = CSSR2QX(node)
       } else if (typec == "vmess"){
         node = CV2QX(node)
       } else if (typec == "trojan"){
         node = CT2QX(node)
       } else if (typec == "http"){
         node = CH2QX(node)
       }
       node = Pudp0 != 0? XUDP(node,Pudp0): node
       node = Ptfo0 != 0? XTFO(node,Ptfo0): node
       nodelist.push(node)
     }catch (e) {
       $notify(`⚠️The node parsing error, temporarily ignored the processing`, `clickable notification feedback to bot`,node,bug_link)
     }
   }
   return nodelist.join("\n")
 }

 //Clash ss type server
 function CSS2QX(cnt) {
   tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi,"")
   ipt = cnt.server+":"+cnt.port
   pwd = "password=" + cnt.password
   mtd = "method="+ cnt.cipher
   udp = cnt.udp? "udp-relay=true": "udp-relay=false"
   tfo = cnt.tfo? "fast-open=true": "fast-open=false"
   obfs = cnt["plugin-opts"]? "obfs=" + cnt["plugin-opts"].mode: ""
   ohost = cnt["plugin-opts"]? "obfs-host=" + cnt["plugin-opts"].host: ""
   ouri = ""
   cert = ""
   if (obfs.indexOf("websocket") != -1) {
       obfs = cnt["plugin-opts"].tls? "obfs=wss": "obfs=ws"
       ohost = cnt["plugin-opts"].host? "obfs-host=" + cnt["plugin-opts"].host:""
       ouri = cnt["plugin-opts"].path? "obfs-uri=" + cnt["plugin-opts"].path: ""
     if (obfs == "obfs=wss") {// tls verification
       cert = Pcert0 == 1? "": "tls-verification =false"}
   }
   node = "shadowsocks="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, tag].filter(Boolean).join(", ")
   return node
 }

 //Clash ssr type server
 function CSSR2QX(cnt) {
   tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi,"")
   ipt = cnt.server+":"+cnt.port
   pwd = "password=" + cnt.password
   mtd = "method="+ cnt.cipher
   udp = cnt.udp? "udp-relay=true": "udp-relay=false"
   tfo = cnt.tfo? "fast-open=true": "fast-open=false"
   prot = "ssr-protocol=" + cnt.protocol
   ppara = "ssr-protocol-param=" + cnt["protocol-param"]
   obfs = "obfs=" + cnt.obfs
   ohost = "obfs-host=" + cnt["obfs-param"]
   node = "shadowsocks="+[ipt, pwd, mtd, udp, tfo, prot, ppara, obfs, ohost, tag].filter(Boolean).join(", ")
   //console.log(node)
   return node
 }

 //Clash vmess type server
 function CV2QX(cnt) {
 tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
 ipt = cnt.server+":"+cnt.port
 pwd = "password=" + cnt.uuid
 mtd = "method="+ "aes-128-gcm" //cnt.cipher
   udp = cnt.udp? "udp-relay=true": "udp-relay=false"
   tfo = cnt.tfo? "fast-open=true": "fast-open=false"
   obfs = ""
   if (cnt.network == "ws" && cnt.tls) {
       obfs = "obfs=wss"
   } else if (cnt.network == "ws"){
       obfs = "obfs=ws"
   } else if (cnt.tls){
       obfs = "obfs=over-tls"
   }
   ohost = cnt["ws-headers"]? "obfs-host=" + cnt["ws-headers"]["Host"]: ""
   ouri = cnt["ws-path"]? "obfs-uri="+cnt["ws-path"]: ""
   cert = cnt["skip-cert-verify"] && cnt.tls? "tls-verification=false": ""
   //$notify(cert)
   if (Pcert0 == 1 && cnt.tls) {
     cert = "tls-verification=true"
   } else if (Pcert0 == 1 && cnt.tls) {
     cert = "tls-verification=false"
   }
   node = "vmess="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, tag].filter(Boolean).join(", ")
   //console.log(node)
   return node
 }

 //Clash Trojan
 function CT2QX(cnt) {
   tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
   ipt = cnt.server+":"+cnt.port
   pwd = "password=" + cnt.password
   otls = "over-tls=true"
   cert = cnt["skip-cert-verify"]? "tls-verification=false": "tls-verification=true"
   cert = Pcert0 == 1? "tls-verification=true": "tls-verification=false"
   udp = cnt.udp? "udp-relay=true": "udp-relay=false"
   tfo = cnt.tfo? "fast-open=true": "fast-open=false"
   node = "trojan="+[ipt, pwd, otls, cert, udp, tfo, tag].filter(Boolean).join(", ")
   //console.log(node)
   return node

 }


// Clash http
function CH2QX(cnt){
    tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
    ipt = cnt.server+":"+cnt.port
    uname = cnt.username ? "username=" + cnt.username : ""
    pwd = cnt.password && typeof(cnt.password) == "string" ? "password=" + cnt.password : ""
    tls = cnt.tls ? "over-tls=true" : ""
    cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
    if (Pcert0 == 1 && cnt.tls) {
      cert = "tls-verification=true"
    } else if (Pcert0 != 1 && cnt.tls) {
      cert = "tls-verification=false"
    }
    node = "http="+[ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(", ")
    //console.log(node)
    return node
}

// UDP/TFO 参数 (强制 surge/quanx 类型转换)
function XUDP(cnt,pudp) {
    var udp = pudp == 1? "udp-relay=true, " : "udp-relay=false, "
    if(cnt.indexOf("udp-relay") != -1){
        var cnt0 = cnt.replace(RegExp("udp\-relay.*?\,", "gmi"), udp)
    }else{
        var cnt0 = cnt.replace(new RegExp("tag.*?\=", "gmi"), udp+"tag=")
    }
    return cnt0
}

function XTFO(cnt,ptfo) {
    var tfo = ptfo == 1? "fast-open=true, " : "fast-open=false, "
    if(cnt.indexOf("fast-open") != -1){
        var cnt0 = cnt.replace(RegExp("fast\-open.*?\,", "gmi"), tfo)
    }else{
        var cnt0 = cnt.replace(RegExp("tag.*?\=", "gmi"), tfo+"tag=")
    }
    return cnt0
}

//比较完美的一款 base64 encode/decode 工具
/*
 *  base64.js: https://github.com/dankogai/js-base64#readme
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
//base64 完毕
function Base64Code() {
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function (bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                    + fromCharCode(0x80 | (cc & 0x3f)))
                    : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                        + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                        + fromCharCode(0x80 | (cc & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                + fromCharCode(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function (u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
            ord = ccc.charCodeAt(0) << 16
                | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
                | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
            chars = [
                b64chars.charAt(ord >>> 18),
                b64chars.charAt((ord >>> 12) & 63),
                padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
                padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
            ];
        return chars.join('');
    };
    var btoa = function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    // var _encode = function(u) {
    // 	var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
    // 	return isUint8Array ? u.toString('base64')
    // 		: btoa(utob(String(u)));
    // }
    this.encode = function (u) {
        var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
        return isUint8Array ? u.toString('base64')
            : btoa(utob(String(u)));
    }
    var uriencode = function (u, urisafe) {
        return !urisafe
            ? _encode(u)
            : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function (u) { return uriencode(u, true) };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)),
                    offset = cp - 0x10000;
                return (fromCharCode((offset >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
            case 3:
                return fromCharCode(
                    ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2))
                );
            default:
                return fromCharCode(
                    ((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1))
                );
        }
    };
    var btou = function (b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function (cccc) {
        var len = cccc.length,
            padlen = len % 4,
            n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
                | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
                | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0)
                | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
            chars = [
                fromCharCode(n >>> 16),
                fromCharCode((n >>> 8) & 0xff),
                fromCharCode(n & 0xff)
            ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = function (a) {
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function (a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    // var _decode = buffer ?
    // 	buffer.from && Uint8Array && buffer.from !== Uint8Array.from
    // 	? function(a) {
    // 		return (a.constructor === buffer.constructor
    // 				? a : buffer.from(a, 'base64')).toString();
    // 	}
    // 	: function(a) {
    // 		return (a.constructor === buffer.constructor
    // 				? a : new buffer(a, 'base64')).toString();
    // 	}
    // 	: function(a) { return btou(_atob(a)) };
    var _decode = function (u) {
        return btou(_atob(u))
    }
    this.decode = function (a) {
        return _decode(
            String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        ).replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    };
}


/*
YAML parser for Javascript
Author: Diogo Costa

This program is released under the MIT License as follows:

Copyright (c) 2011 Diogo Costa (costa.h4evr@gmail.com)

*/

function YAML() {
        var errors = [],
                reference_blocks = [],
                processing_time = 0,
                regex =
                {
                        "regLevel" : new RegExp("^([\\s\\-]+)"),
                        "invalidLine" : new RegExp("^\\-\\-\\-|^\\.\\.\\.|^\\s*#.*|^\\s*$"),
                        "dashesString" : new RegExp("^\\s*\\\"([^\\\"]*)\\\"\\s*$"),
                        "quotesString" : new RegExp("^\\s*\\\'([^\\\']*)\\\'\\s*$"),
                        "float" : new RegExp("^[+-]?[0-9]+\\.[0-9]+(e[+-]?[0-9]+(\\.[0-9]+)?)?$"),
                        "integer" : new RegExp("^[+-]?[0-9]+$"),
                        "array" : new RegExp("\\[\\s*(.*)\\s*\\]"),
                        "map" : new RegExp("\\{\\s*(.*)\\s*\\}"),
                        "key_value" : new RegExp("([a-z0-9_-][ a-z0-9_-]*):( .+)", "i"),
                        "single_key_value" : new RegExp("^([a-z0-9_-][ a-z0-9_-]*):( .+?)$", "i"),
                        "key" : new RegExp("([a-z0-9_-][ a-z0-9_-]+):( .+)?", "i"),
                        "item" : new RegExp("^-\\s+"),
                        "trim" : new RegExp("^\\s+|\\s+$"),
                        "comment" : new RegExp("([^\\\'\\\"#]+([\\\'\\\"][^\\\'\\\"]*[\\\'\\\"])*)*(#.*)?")
                };
 
         /**
            * @class A block of lines of a given level.
            * @param {int} lvl The block's level.
            * @private
            */
        function Block(lvl) {
                return {
                        /* The block's parent */
                        parent: null,
                        /* Number of children */
                        length: 0,
                        /* Block's level */
                        level: lvl,
                        /* Lines of code to process */
                        lines: [],
                        /* Blocks with greater level */
                        children : [],
                        /* Add a block to the children collection */
                        addChild : function(obj) {
                                this.children.push(obj);
                                obj.parent = this;
                                ++this.length;
                        }
                };
        }

        // function to create an XMLHttpClient in a cross-browser manner

        function fromURL(src, ondone) {
                var client = createXMLHTTPRequest();
                client.onreadystatechange = function() {
                        if (this.readyState == 4 || this.status == 200) {
                                var txt = this.responseText;
                                ondone(YAML.eval0(txt));
                        }
                };
                client.open('GET', src);
                client.send();
        }

        function parser(str) {
                var regLevel = regex["regLevel"];
                var invalidLine = regex["invalidLine"];
                var lines = str.split("\n");
                var m;
                var level = 0, curLevel = 0;
                
                var blocks = [];
                
                var result = new Block(-1);
                var currentBlock = new Block(0);
                result.addChild(currentBlock);
                var levels = [];
                var line = "";
                
                blocks.push(currentBlock);
                levels.push(level);
                
                for(var i = 0, len = lines.length; i < len; ++i) {
                        line = lines[i];
                        
                        if(line.match(invalidLine)) {
                                continue;
                        }
                
                        if(m = regLevel.exec(line)) {
                                level = m[1].length;
                        } else
                                level = 0;
                        
                        if(level > curLevel) {
                                var oldBlock = currentBlock;
                                currentBlock = new Block(level);
                                oldBlock.addChild(currentBlock);
                                blocks.push(currentBlock);
                                levels.push(level);
                        } else if(level < curLevel) {                
                                var added = false;

                                var k = levels.length - 1;
                                for(; k >= 0; --k) {
                                        if(levels[k] == level) {
                                                currentBlock = new Block(level);
                                                blocks.push(currentBlock);
                                                levels.push(level);
                                                if(blocks[k].parent!= null)
                                                        blocks[k].parent.addChild(currentBlock);
                                                added = true;
                                                break;
                                        }
                                }
                                
                                if(!added) {
                                        errors.push("Error: Invalid indentation at line " + i + ": " + line);
                                        return;
                                }
                        }
                        
                        currentBlock.lines.push(line.replace(regex["trim"], ""));
                        curLevel = level;
                }
                
                return result;
        }
        
        function processValue(val) {
                val = val.replace(regex["trim"], "");
                var m = null;

                if(val == 'true') {
                        return true;
                } else if(val == 'false') {
                        return false;
                } else if(val == '.NaN') {
                        return Number.NaN;
                } else if(val == 'null') {
                        return null;
                } else if(val == '.inf') {
                        return Number.POSITIVE_INFINITY;
                } else if(val == '-.inf') {
                        return Number.NEGATIVE_INFINITY;
                } else if(m = val.match(regex["dashesString"])) {
                        return m[1];
                } else if(m = val.match(regex["quotesString"])) {
                        return m[1];
                } else if(m = val.match(regex["float"])) {
                        return parseFloat(m[0]);
                } else if(m = val.match(regex["integer"])) {
                        return parseInt(m[0]);
                } else if( !isNaN(m = Date.parse(val))) {
                        return new Date(m);
                } else if(m = val.match(regex["single_key_value"])) {
                        var res = {};
                        res[m[1]] = processValue(m[2]);
                        return res;
                } else if(m = val.match(regex["array"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                                } else if(str === false && (c == '[' || c == '{')) {
                                        ++count;
                                } else if(str === false && (c == ']' || c == '}')) {
                                        --count;
                                } else if(str === false && count == 0 && c == ',') {
                                        res.push(processValue(content));
                                        content = "";
                                        continue;
                                }
                                
                                content += c;
                        }
                        
                        if(content.length > 0)
                                res.push(processValue(content));
                        return res;
                } else if(m = val.match(regex["map"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                                } else if(str === false && (c == '[' || c == '{')) {
                                        ++count;
                                } else if(str === false && (c == ']' || c == '}')) {
                                        --count;
                                } else if(str === false && count == 0 && c == ',') {
                                        res.push(content);
                                        content = "";
                                        continue;
                                }
                                
                                content += c;
                        }
                        
                        if(content.length > 0)
                                res.push(content);
                                
                        var newRes = {};
                        for(var j = 0, lenJ = res.length; j < lenJ; ++j) {
                                if(m = res[j].match(regex["key_value"])) {
                                        newRes[m[1]] = processValue(m[2]);
                                }
                        }
                        
                        return newRes;
                } else 
                        return val;
        }
        
        function processFoldedBlock(block) {
                var lines = block.lines;
                var children = block.children;
                var str = lines.join(" ");
                var chunks = [str];
                for(var i = 0, len = children.length; i < len; ++i) {
                        chunks.push(processFoldedBlock(children[i]));
                }
                return chunks.join("\n");
        }
        
        function processLiteralBlock(block) {
                var lines = block.lines;
                var children = block.children;
                var str = lines.join("\n");
                for(var i = 0, len = children.length; i < len; ++i) {
                        str += processLiteralBlock(children[i]);
                }
                return str;
        }
        
        function processBlock(blocks) {
                var m = null;
                var res = {};
                var lines = null;
                var children = null;
                var currentObj = null;
                
                var level = -1;
                
                var processedBlocks = [];
                
                var isMap = true;
                
                for(var j = 0, lenJ = blocks.length; j < lenJ; ++j) {
                        
                        if(level != -1 && level != blocks[j].level)
                                continue;
                
                        processedBlocks.push(j);
                
                        level = blocks[j].level;
                        lines = blocks[j].lines;
                        children = blocks[j].children;
                        currentObj = null;
                
                        for(var i = 0, len = lines.length; i < len; ++i) {
                                var line = lines[i];

                                if(m = line.match(regex["key"])) {
                                        var key = m[1];
                                        
                                        if(key[0] == '-') {
                                                key = key.replace(regex["item"], "");
                                                if (isMap) { 
                                                        isMap = false;
                                                        if (typeof(res.length) === "undefined") {
                                                                res = [];
                                                        } 
                                                }
                                                if(currentObj != null) res.push(currentObj);
                                                currentObj = {};
                                                isMap = true;
                                        }

if(typeof m[2] != "undefined") {
                                                var value = m[2].replace(regex["trim"], "");
                                                if(value[0] == '&') {
                                                        var nb = processBlock(children);
                                                        if(currentObj != null) currentObj[key] = nb;
                                                        else res[key] = nb;
                                                        reference_blocks[value.substr(1)] = nb;
                                                } else if(value[0] == '|') {
                                                        if(currentObj != null) currentObj[key] = processLiteralBlock(children.shift());
                                                        else res[key] = processLiteralBlock(children.shift());
                                                } else if(value[0] == '*') {
                                                        var v = value.substr(1);
                                                        var no = {};
                                                        
                                                        if(typeof reference_blocks[v] == "undefined") {
                                                                errors.push("Reference '" + v + "' not found!");
                                                        } else {
                                                                for(var k in reference_blocks[v]) {
                                                                        no[k] = reference_blocks[v][k];
                                                                }
                                                                
                                                                if(currentObj != null) currentObj[key] = no;
                                                                else res[key] = no;
                                                        }
                                                } else if(value[0] == '>') {
                                                        if(currentObj != null) currentObj[key] = processFoldedBlock(children.shift());
                                                        else res[key] = processFoldedBlock(children.shift());
                                                } else {
                                                        if(currentObj != null) currentObj[key] = processValue(value);
                                                        else res[key] = processValue(value);
                                                }
                                        } else {
                                                if(currentObj != null) currentObj[key] = processBlock(children);
                                                else res[key] = processBlock(children);                        
                                        }
                                } else if(line.match(/^-\s*$/)) {
                                        if (isMap) { 
                                                isMap = false;
                                                if (typeof(res.length) === "undefined") {
                                                        res = [];
                                                } 
                                        }
                                        if(currentObj != null) res.push(currentObj);
                                        currentObj = {};
                                        isMap = true;
                                        continue;
                                } else if(m = line.match(/^-\s*(.*)/)) {
                                        if(currentObj != null) 
                                                currentObj.push(processValue(m[1]));
                                        else {
                                                if (isMap) { 
                                                        isMap = false;
                                                        if (typeof(res.length) === "undefined") {
                                                                res = [];
                                                        } 
                                                }
                                                res.push(processValue(m[1]));
                                        }
                                        continue;
                                }
                        }
                        
                        if(currentObj != null) {
                                if (isMap) { 
                                        isMap = false;
                                        if (typeof(res.length) === "undefined") {
                                                res = [];
                                        } 
                                }
                                res.push(currentObj);
                        }
                }
                
                for(var j = processedBlocks.length - 1; j >= 0; --j) {
                        blocks.splice.call(blocks, processedBlocks[j], 1);
                }

                return res;
        }
                
        function semanticAnalysis(blocks) {
                var res = processBlock(blocks.children);
                return res;
        }
        
        function preProcess(src) {
                var m;
                var lines = src.split("\n");
                
                var r = regex["comment"];
                
                for(var i in lines) {
                        if(m = lines[i].match(r)) {
/*                var cmt = "";
                                if(typeof m[3] != "undefined")
                                        lines[i] = m[1];
                                else if(typeof m[3] != "undefined")
                                        lines[i] = m[3]; 
                                else
                                        lines[i] = "";
                                        */
                                if(typeof m[3] !== "undefined") {
                                        lines[i] = m[0].substr(0, m[0].length - m[3].length);
                                }
                        }
                }
                
                return lines.join("\n");
        }
        
        this.parse = function eval0(str) {
                errors = [];
                reference_blocks = [];
                processing_time = (new Date()).getTime();
                var pre = preProcess(str)
                var doc = parser(pre);
                var res = semanticAnalysis(doc);
                processing_time = (new Date()).getTime() - processing_time;
                
                return res;
        }

};


/***********************************************************************************************/
function Tools() {
    const filter = (src, ...regex) => {
        const initial = [...Array(src.length).keys()].map(() => false);
        return regex.reduce((a, expr) => OR(a, src.map(item => expr.test(item))), initial)
    }

    const rename = {
        replace: (src, old, now) => {
            return src.map(item => item.replace(old, now));
        },

        delete: (src, ...args) => {
            return src.map(item => args.reduce((now, expr) => now.replace(expr, ''), item));
        },

        trim: (src) => {
            return src.map(item => item.trim().replace(/[^\S\r\n]{2,}/g, ' '));
        }
    }

    const getNodeInfo = servers => {
        const nodes = {
            names: servers.map(s => s.split("tag=")[1]),
            types: servers.map(s => {
                const type = s.match(/^(vmess|trojan|shadowsocks|http)=/);
                return type ? type[1] : 'unknown';
            })
        };
        return nodes;
    }


    return {
        filter, rename, getNodeInfo
    }
}

function AND(...args) {
    return args.reduce((a, b) => a.map((c, i) => b[i] && c));
}

function OR(...args) {
    return args.reduce((a, b) => a.map((c, i) => b[i] || c))
}

function NOT(array) {
    return array.map(c => !c);
}
