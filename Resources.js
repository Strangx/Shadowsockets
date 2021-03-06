โ๏ธ Resource Parser ยฉ๐๐ก๐๐ฐ๐ง โฆ2021-05-01 21:20โง
 --------------------------------------------------  --------
 ๐  Found ๐๐๐ Please feedback: @Shawn_KOP_bot
 โณ๏ธ Follow ๐๐ถ Related channels: https://t.me/QuanX_API
 ๐ฃ ๐๐ท๐ฐ๐ฝ๐บ๐ ๐๐พ @Jamie CHIEN, @M**F**, @c0lada, @Peng-YM

 ๐ค Main functions:
 โถ Parse server subscriptions in other formats into ๐๐ฎ๐๐ง๐ญ๐ฎ๐ฆ๐ฎ๐ฅ๐ญ ๐ format
 โ๏ธ support ๐ฉ๐บ๐ฒ๐๐ / ๐ฆ๐ฆ (๐ฅ / ๐) / ๐๐ง๐ง๐ฃ (๐ฆ) / ๐ง๐ฟ๐ผ๐ท๐ฎ๐ป / ๐ค๐๐ฎ๐ป๐๐๐บ๐๐น๐ (๐ซ) / ๐ฆ๐๐ฟ๐ด๐ฒ / ๐๐ฅ๐๐ฌ๐ก / ๐๐ก๐๐๐จ๐ฐ๐ซ๐จ๐๐ค๐๐ญ / ๐๐จ๐จ๐ง format
 โ๏ธ Provide instructions for optional personalized parameters in 1โฃ๏ธ (filtering, renaming, etc.)
 โท ๐ฟ๐ฒ๐๐ฟ๐ถ๐๐ฒ(rewrite) & ๐ณ๐ถ๐น๐๐ฒ๐ฟ(diversion) conversion & filtering
 โ๏ธ is used to disable certain (several) items in remote references.
 โ๏ธ ๐๐ฎ๐ซ๐ ๐/๐๐ฅ๐๐ฌ๐ก type rule ๐น๐ถ๐๐ and module ๐ฆ๐จ๐๐ฎ๐ฅ๐
 --------------------------------------------------  --------
 0๏ธโฃ โฆOriginal linkโง is used after adding "#", and different parameters are connected with "&":
 โ ๏ธ โ https://mysub.com#emoji=1&tfo=1&in=Hong Kong+Taiwan
 โ To quote local resource fragments, please fill in the parameter "#๐ถ๐ป=๐๐๐." in line โ  of the file โ
 โ ๐ฆ Support Chinese, please replace the following special characters when "operating" ๐ฆ
   โ "+"โ"%2B", spaceโ"%20", "@"โ"%40", "&"โ"%26", "."โ"\."

 1๏ธโฃ โฆ๐ฌ๐๐ซ๐ฏ๐๐ซ nodeโง โ  parameter description:
 โฆฟ info=1, turn on the notification prompt airport โ๏ธ Traffic information (if provided);
 โฆฟ emoji=1 (2 for national bank equipment)/-1, add/remove regional flags in the node name;
 โฆฟ udp=1/-1, tfo=1/-1, respectively forced to open (close) ๐ฎ๐๐ฉ-๐ซ๐๐ฅ๐๐ฒ/๐๐๐ฌ๐ญ-๐จ๐ฉ๐๐ง;
 โฆฟ tls13=1, cert=1, respectively enable ๐ญ๐ฅ๐ฌ1.3 and ๐ญ๐ฅ๐ฌ certificate verification (default off);
 โฆฟ in, out, and regex are reserved, deleted, and regular filter nodes respectively;
   โ In, out, multiple parameters (logical "or") are represented by "+", and logical "and" are represented by ".";
   โ In/out/regex all match the complete information of the node (type, port, encryption, etc.);
   โ Demonstration: "in=Hong Kong.0\.2 rate+Taiwan&out=Hong Kong%20BGP&regex=(?i)iplc"
 โฆฟ rename rename, "old name@ๆฐๅ", "prefix@", "@postfix", connect multiple parameters with "+";
   โ Delete field: "Field 1. Field 2โ ๏ธ", use "\." instead when you want to delete "."
   โ Demonstration: "rename=Hong Kong@๐๐+[๐๐]@+@[1๐]+flow.0\.2โ ๏ธ"
   โ The default Mr. emoji effect, if you want to change the order, please use ๐ฟ๐ฟ๐ป๐ฎ๐บ๐ฒ parameters
   โ $type0/1/2/3/4/5 placeholders, take the node type (ss/ssr/vmess, etc.) as operable parameters, such as
     โ rename=@|$type2
     โ The styles are "๐ฌ๐ฌ", "๐๐", "๐ข๐ข", "๐๐", "โขโข", "๐๐"
   โ $emoji1/2 placeholder, take the node area emoji (๐ญ๐ฐ ๐ฏ๐ต etc.) as operable parameters, such as
     โ rename=@ใ$emoji1ใ
 โฆฟ suffix=-1/1 Add the node type as a prefix/suffix to the node name, such as ``๐๐'' ``๐ต๐๐พ๐๐''
 โฆฟ ptn=1-6, respectively replace the English in the node name with pattern words โ ๐ฐ/๐ฐ/๐/๐ฎ/๐ธ/๐
 โฆฟ npt=1-6, respectively replace the numbers in the node name with pattern numbers โ โ \โถ\โต\๐\ยน\โ
 โฆฟ delreg, use regular expressions to delete fields in "node name" (โ ๏ธ use with caution)
 โฆฟ replace parameter, regular replacement of the content in the node, can be used to rename/change the encryption method, etc.
   โ replace=regex1@๐๐๐ฟ1+regex2@๐๐๐ฟ2
   โ replace=๐ฟ๐ฒ๐ด๐ฒ๐1@ is equivalent to ๐ฑ๐ฒ๐น๐ฟ๐ฒ๐ด Parameters
 โฆฟ sort=1/-1/x/specified rule, sorted by node name forward/reverse/random/specified rule
   โ The specified rules are regular expressions or simple keywords, connect with "<" or ">"
   โ sort=๐ญ๐ฐ>๐ธ๐ฌ>๐ฏ๐ต>๐บ๐ธ, sort first
   โ sort=IEPL<IPLC<BGP, sort backward
 โฆฟ del=1, when there is a node with the same name, use this parameter to delete the duplicate node (rename and keep by default)
 โฆฟ โฆAdvanced parametersโง: ๐๐ณ๐ถ๐น๐๐ฒ๐ฟ/๐๐ฟ๐ฒ๐ป๐ฎ๐ฒ๐ป๐ฎ๐บ๐ฒ, pass in a base64-encoded script, which can be used for more complex [filter/rename] requirements
   โ Description: https://github.com/KOP-XIAO/QuantumultX/pull/9

 2โฃ๏ธ โฆ๐ซ๐๐ฐ๐ซ๐ข๐ญ๐ rewrite โง/โฆ๐๐ข๐ฅ๐ญ๐๐ซ shuntโง โ  parameter description:
 โฆฟ in, out, keep/disable related diversion and rewrite rules according to keywords;
 โฆฟ inhn, outhn, "Keep/Delete" hostname (๐๐๐๐๐๐๐๐);
   โ Demonstration: Disable "Taobao Price Comparison" and "weibo" js with the same host name
   ๐ก๐ญ๐ญ๐ฉ๐ฌ://๐ฆ๐ฒ๐ฅ๐ข๐ฌ๐ญ#๐๐๐=tb_price.js+wb_ad.js&outhn=weibo
 โฆฟ regex, regular filtering, please toss the regular expression yourself;
   โ Can be used together with in(hn)/out(hn), in(hn)/out(hn) will be executed first;
   โ Yes
 โฆฟ policy parameter, used to directly specify the policy group, or ๐๐ฎ๐ซ๐ ๐ type ๐ฟ๐๐น๐ฒ-๐๐ฒ๐ to generate a policy group (default "๐๐๐ฐ)๐ง"
 โฆฟ replace parameter, regular replacement ๐๐ข๐ฅ๐ญ๐๐ซ/๐ซ๐๐ฐ๐ซ๐ข๐ญ๐ content, regex@newregex;
   โ Replace the script in Taobao price comparison with the lite version, and replace JP in tiktok with KR
     โ replace=(price)(.*)@$1_lite$2+jp@kr
 โฆฟ dst=rewrite/filter, respectively, to convert ๐ฆ๐จ๐๐ฎ๐ฅ๐&๐ฟ๐๐น๐ฒ-๐๐ฒ๐ into rewrite/diversion;
   โ โ ๏ธ Convert ๐ฆ๐จ๐๐ฎ๐ฅ๐ to rewrite by default, ๐ฟ๐๐น๐ฒ-๐๐ฒ๐ to component flow
   โ โ ๏ธ When converting ๐ฟ๐๐น๐ฒ-๐๐ฒ๐ ๐ฎ๐ซ๐ฅ-๐ซ๐๐ ๐๐ฑ to rewrite, you must add dst=rewrite;
   โ โ ๏ธ When converting the shunt rules in ๐ฆ๐จ๐๐ฎ๐ฅ๐, you must add dst=filter
 โฆฟ cdn=1, convert the address of the github script to cdn.jsdelivr.net

 3โฃ๏ธ Other parameters
 โฆฟ Notification parameter ntf=0/1, used to close/open the prompt notification of the resource parser
   โ ๐ฟ๐ฒ๐๐ฟ๐ถ๐๐ฒ/๐ณ๐ถ๐น๐๐ฒ๐ฟ default "on" notification prompt to prevent accidental deletion of rules
   โ ๐๐ฒ๐ฟ๐๐ฒ๐ฟ resource analysis is "off" notification prompt by default
 โฆฟ Type parameter type=domain-set/rule/module/list/nodes
   โ When the parser fails to correctly identify the type, you can try to use this parameter to force the specification
 โฆฟ Hidden parameter hide=1, hide the filtered diversion/rewrite, the default method is disabled
