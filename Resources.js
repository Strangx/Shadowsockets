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
