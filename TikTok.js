/*
 github: https://github.com/Ariszy/script
 boxjs: https://raw.githubusercontent.com/Ariszy/Private-Script/master/Ariszy.boxjs.json
 Reprint leave a name, thank you
 Invitation code: 8025524531
 Mine--enter the invitation code, set a dollar, withdraw directly, thank you
 Author: Ariszy
 Currently contains:
 Sign in
 Modify the number of steps to get coins
 Watch the video (self-test)
 The script is first completed, produced by non-professionals, please correct me
 # Sign in to get signheader and signcookie
 #Walk to modify the number of steps, you need to get ck again in advance, otherwise the submission fails, you can enter the task interface once
 #Watch a video pop up gold coins to get readheader and readkey
 [mitm]
 hostname = *.amemv.com
 #圈x
 [rewrite local]
 luckycat/aweme/v1/task/sign_in/detail? url script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/dyjsb.js

 luckycat/aweme/v1/task/done/read? url script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/dyjsb.js

 luckycat/aweme/v1/task/walk/step_submit?-script-request-header https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/dyjsb.js

#loon
 http-request /luckycat/aweme/v1/task/sign_in/detail? script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/dyjsb.js, requires-body=true,  timeout=10, tag=Tiktok Extreme Edition sign

 http-request /luckycat/aweme/v1/task/done/read? script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/dyjsb.js, requires-body=true,  timeout=10, tag=Quick version of Douyin read

 http-request /luckycat/aweme/v1/task/walk/step_submit? script-path=https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/dyjsb.js, requires-body=true,  timeout=10, tag=trembling speed version step

 #surge
 dyjsbsign = type=http-request,pattern=/luckycat/aweme/v1/task/sign_in/detail?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/  Ariszy/Private-Script/master/Scripts/dyjsb.js,script-update-interval=0

 dyjsbread = type=http-request,pattern=/luckycat/aweme/v1/task/done/read?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/  Ariszy/Private-Script/master/Scripts/dyjsb.js,script-update-interval=0

 dyjsbstep = type=http-request,pattern=/luckycat/aweme/v1/task/walk/step_submit?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/  Ariszy/Private-Script/master/Scripts/dyjsb.js,script-update-interval=0


*/
 const jsname='Vibrato Speedy Edition'
 const $ = Env(jsname)
 const notify = $.isNode() ?require('./sendNotify'):'';
 $.idx = ($.idx = ($.getval("dyjsbcount") || "1")-1)> 0? `${$.idx + 1}`: ""; // Account extension characters
 const signheaderArr = [],signcookieArr=[]
 const stepheaderArr = [],stepkeyArr=[]
 const readheaderArr = [],readkeyArr=[]
 let signheader = $.getdata('signheader')
 let signcookie = $.getdata('signcookie')

 let stepheader = $.getdata('stepheader')
 let stepkey = $.getdata('stepkey')

 let readheader = $.getdata('readheader')
 let readkey = $.getdata('readkey')

 let dyhost = $.getdata('dyhost')
 let dyjsbaccount;
 let tz = ($.getval('tz') || '1');//0 turns off notifications, 1 turns on by default
 const invite=1;//New users are automatically invited, 0 is off, 1 is on by default
 const logs =0;//0 is to close the log, 1 is to open
 let cash = 1
 let coins;
 var hour=''
 var minute=''
 const readbody = `{
   "in_sp_time": 0,
   "task_key": "read"
 }`
 if ($.isNode()) {
    hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
    minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
 }else{
    hour = (new Date()).getHours();
    minute = (new Date()).getMinutes();
 }
 //CK run

 let isGetCookie = typeof $request !=='undefined'
 if (isGetCookie) {
    GetCookie();
    $.done()
 }
 if ($.isNode()) {
 //sign
   if (process.env.SIGNHEADER && process.env.SIGNHEADER.indexOf('#')> -1) {
    signheader = process.env.SIGNHEADER.split('#');
    console.log(`Your choice is separated by "#"\n`)
   }
   else if (process.env.SIGNHEADER && process.env.SIGNHEADER.indexOf('\n')> -1) {
    signheader = process.env.SIGNHEADER.split('\n');
    console.log(`You choose to separate with line breaks\n`)
   } else {
    signheader = process.env.SIGNHEADER.split()
   };
   if (process.env. SIGNCOOKIE&& process.env.SIGNCOOKIE.indexOf('#')> -1) {
    signcookie = process.env.SIGNCOOKIE.split('#');
   }
   else if (process.env.SIGNCOOKIE && process.env.SIGNCOOKIE.split('\n').length> 0) {
    signcookie = process.env.SIGNCOOKIE.split('\n');
   } else {
    signcookie = process.env.SIGNCOOKIE.split()
   };
 //step
 if (process.env.STEPHEADER && process.env.STEPHEADER.indexOf('#')> -1) {
    stepheader = process.env.STEPHEADER.split('#');
    console.log(`Your choice is separated by "#"\n`)
   }
   else if (process.env.STEPHEADER && process.env.STEPHEADER.indexOf('\n')> -1) {
    stepheader = process.env.STEPHEADER.split('\n');
    console.log(`You choose to separate with line breaks\n`)
   } else {
    stepheader = process.env.STEPHEADER.split()
   };
   if (process.env. STEPKEY&& process.env.STEPKEY.indexOf('#')> -1) {
    stepkey = process.env.STEPKEY.split('#');
   }
   else if (process.env.STEPKEY && process.env.STEPKEY.split('\n').length> 0) {
    stepkey = process.env.STEPKEY.split('\n');
   } else {
    stepkey = process.env.STEPKEY.split()
   };
 //read
 if (process.env.READHEADER && process.env.READHEADER.indexOf('#')> -1) {
    readheader = process.env.READHEADER.split('#');
    console.log(`Your choice is separated by "#"\n`)
   }
   else if (process.env.READHEADER && process.env.READHEADER.indexOf('\n')> -1) {
    readheader = process.env.READHEADER.split('\n');
    console.log(`You choose to separate with line breaks\n`)
   } else {
    readheader = process.env.READHEADER.split()
   };
   if (process.env. READKEY&& process.env.READKEY.indexOf('#')> -1) {
    readkey = process.env.READKEY.split('#');
   }
   else if (process.env.READKEY && process.env.READKEY.split('\n').length> 0) {
    readkey = process.env.READKEY.split('\n');
   } else {
    readkey = process.env.READKEY.split()
   };
 //sign
   Object.keys(signheader).forEach((item) => {
         if (signheader[item]) {
           signheaderArr.push(signheader[item])
         }
     });
     Object.keys(signcookie).forEach((item) => {
         if (signcookie[item]) {
           signcookieArr.push(signcookie[item])
         }
     });
 //step
 Object.keys(stepheader).forEach((item) => {
         if (stepheader[item]) {
           stepheaderArr.push(stepheader[item])
         }
     });
     Object.keys(stepkey).forEach((item) => {
         if (stepkey[item]) {
           stepkeyArr.push(stepkey[item])
         }
     });
 //read
 Object.keys(readheader).forEach((item) => {
         if (readheader[item]) {
           readheaderArr.push(readheader[item])
         }
     });
     Object.keys(readkey).forEach((item) => {
         if (readkey[item]) {
           readkeyArr.push(readkey[item])
         }
     });
    console.log(`============ Script execution-Universal Standard Time (UTC): ${new Date().toLocaleString()} ============  =\n`)
     console.log(`============ Script execution-Beijing Time (UTC+8): ${new Date(new Date().getTime() + 8 * 60 * 60 * 1000)  .toLocaleString()} =============\n`)
  } else {
     signheaderArr.push($.getdata('signheader'))
     signcookieArr.push($.getdata('signcookie'))
     stepheaderArr.push($.getdata('stepheader'))
     stepkeyArr.push($.getdata('stepkey'))
     readheaderArr.push($.getdata('readheader'))
     readkeyArr.push($.getdata('readkey'))
     let dyjsbcount = ($.getval('dyjsbcount') || '1');
   for (let i = 2; i <= dyjsbcount; i++) {
     signheaderArr.push($.getdata(`signheader${i}`))
     signcookieArr.push($.getdata(`signcookie${i}`))
     stepheaderArr.push($.getdata(`stepheader${i}`))
     stepkeyArr.push($.getdata(`stepkey${i}`))
     readheaderArr.push($.getdata(`readheader${i}`))
     readkeyArr.push($.getdata(`readkey${i}`))
   }
 }
 !(async () => {
 if (!signheaderArr[0]) {
     $.msg($.name,'[Reminder] Please get the TikTok Extreme Edition cookie first')
     return;
   }
    console.log(`------------- A total of ${signheaderArr.length} accounts----------------\n`)
   for (let i = 0; i <signheaderArr.length; i++) {
     if (signheaderArr[i]) {
       message =''
       signheader = signheaderArr[i];
       signcookie = signcookieArr[i];
       stepheader = stepheaderArr[i];
       stepkey = stepkeyArr[i];
       readheader = readheaderArr[i];
       readkey = readkeyArr[i];
       dyjsbaccount = $.getval(`dyjsbaccount${i}`)
       $.index = i + 1;
       console.log(`\nStart [TikTok Extreme Edition${$.index}]`)
       //await invite()
       await sign_in()
       //await withdraw()
       //await step_submit();
       //await step_reward();
       await watch_video()
       await control()
       //await profit()
       await showmsg()
   }
  }
 })()
     .catch((e) => $.logErr(e))
     .finally(() => $.done())
 function GetCookie() {
  if($request&&$request.url.indexOf("aweme" && "sign_in")>=0) {
   const signheader = $request.url.split(`?`)[1]
     if (signheader) $.setdata(signheader,`signheader${$.idx}`)
     $.log(`[${jsname}] Get sign request: success, signheader: ${signheader}`)
     $.msg(`Get signheader: success 🎉`, ``)
    const signcookie = $request.headers['Cookie']
   if(signcookie) $.setdata(signcookie,`signcookie${$.idx}`)
     $.log(`[${jsname}] Get sign request: success, signcookie: ${signcookie}`)
     $.msg(`Get signcookie: success 🎉`, ``)
  }
  if($request&&$request.url.indexOf("aweme" && "step_submit")>=0) {
 const stepheader = $request.url.split(`?`)[1]
 if (stepheader) $.setdata(stepheader,`stepheader${$.idx}`)
 $.log(`[${jsname}] Get step request: success, stepheader: ${stepheader}`)
 $.msg(`Get stepheader: success 🎉`, ``)
 const stepkey = JSON.stringify($request.headers)
 if(stepkey) $.setdata(stepkey,`stepkey${$.idx}`)
 $.log(`[${jsname}] Get step request: success, stepkey: ${stepkey}`)
 $.msg(`Get stepkey: success 🎉`, ``)
 }
  if($request&&$request.url.indexOf("aweme" && "done/read")>=0) {
 const readheader = $request.url.split(`?`)[1]
 if (readheader) $.setdata(readheader,`readheader${$.idx}`)
 $.log(`[${jsname}] Get read request: success, readheader: ${readheader}`)
 $.msg(`Get readheader: success 🎉`, ``)
 const readkey = JSON.stringify($request.headers)
 if(readkey) $.setdata(readkey,`readkey${$.idx}`)
 $.log(`[${jsname}] Get read request: success, readkey: ${readkey}`)
 $.msg(`Get readkey: success 🎉`, ``)
     const dyhost = $request.headers['Host']
     if(dyhost) $.setdata(dyhost,'dyhost')
     $.log(`[${jsname}] Get host request: success, host: ${host}`)
 }
     }
 async function control(){
      if(stepheader && hour == 12 && minute <= 30){
       await step_submit();
       await step_reward();
      }
      if(invite == 1){
       await invitation();
      }
      if(dyjsbaccount){
       await profit()
      }
      if(cash == 1 && coins >= 30){
       await withdraw()
      }
 }
//Sign in
 function sign_in() {
 return new Promise((resolve, reject) => {
   let sign_inurl ={
     url: `https://${dyhost}/luckycat/aweme/v1/task/done/sign_in?${signheader}`,
     headers :{
     Cookie: signcookie,
     'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.12 (KHTNL, like Gecko) Mobile/15E148'
     }
 }
    $.post(sign_inurl,(error, response, data) =>{
      const result = JSON.parse(data)
        if(logs) $.log(data)
           message +='📣Sign in\n'
       if(result.err_no == 10006) {
           message += result.err_tips+'\n'
       }else{
           message +='⚠️Exception'+result.err_tips+'\n'
            }
           resolve()
     })
    })
   }
 //Submit the number of steps
 function step_submit() {
 const steps = Math.round(Math.random()*(12000-10001) + 10001);
 const time = Math.round(new Date().getTime()/1000).toString();
 return new Promise((resolve, reject) => {
   let step_submiturl ={
 url: `https://${dyhost}/luckycat/aweme/v1/task/walk/step_submit?${stepheader}`,
     headers: JSON.parse(stepkey),
     body:`{
   "step": ${steps},
   "submit_time" :${time},
   "in_sp_time": 0
 }`
 }

    $.post(step_submiturl,(error, response, data) =>{
      const result = JSON.parse(data)
       if(logs) $.log(data)
       message +='📣Submit steps\n'
       if(result.err_no == 0) {
            message += result.err_tips+"Today's steps:"+result.data.today_step+'\n'
        }else{
     message +='⚠️Exception'+result.err_tips+'\n'
        }
           resolve()
     })
    })
   }
  
  //Get walking gold coins
 function step_reward() {
 return new Promise((resolve, reject) => {
   let step_rewardurl ={
       url: `https://${dyhost}/luckycat/aweme/v1/task/walk/receive_step_reward?${stepheader}`,
       headers: JSON.parse(stepkey),
 body:`{"in_sp_time":0}`
 }
    $.post(step_rewardurl,(error, response, data) =>{
      const result = JSON.parse(data)
      if(logs) $.log(data)
      message +='📣Get reward\n'
      if(result.err_no == 0) {
           message += result.err_tips+"Get:"+result.data.reward_amount+'\n'
       }else{
    message +='⚠️Exception'+result.err_tips+'\n'
       }
          resolve()
    })
   })
  }
 //Watch the video
 function watch_video() {
 return new Promise((resolve, reject) => {
   let watch_videourl ={
     url: `https://${dyhost}/luckycat/aweme/v1/task/done/read?${readheader}`,
     headers: JSON.parse(readkey),
     body: `{
   "in_sp_time": 0,
   "task_key": "read"
 }`
 }
    $.post(watch_videourl,(error, response, data) =>{
      const result = JSON.parse(data)
        if(logs) $.log(data)
        message +='📣Watch video\n'
       if(result.err_no == 0) {
           message +='🎉'+result.err_tips+'obtained:'+result.data.score_amount+"\n"
         }
       else if(result.err_no == 10006){
           message +='⚠️Exception: I have already read it\n'
       }
       else{
           message +='⚠️Exception:'+result.err_tips+'\n'+'Please get readkey again\n'
           let other ='⚠️Exception:'+result.err_tips+'Please get readkey again\n'
           $.msg(jsname,'',other)
       }
           resolve()
     })
    })
   }
 function invitation() {
 return new Promise((resolve, reject) => {
   let invitatonurl ={
     url: `https://${dyhost}/luckycat/aweme/v1/task/done/post_invite_code?${signheader}`,
     headers: JSON.parse(readkey),
     body: JSON.stringify({"in_sp_time":0,"invite_code":"8025524531"})
 }

    $.post(invitatonurl,(error, response, data) =>{
      const result = JSON.parse(data)
           resolve()
     })
    })
   }
  
  //profit page
 function profit() {
 return new Promise((resolve, reject) => {
   let profiturl ={
     url: `https://${dyhost}/luckycat/aweme/v1/wallet/profit_detail_page?income_type=1&offset=0&num=50&share_page=profits_detail_page&key=coin&${readheader}`,
     headers: JSON.parse(readkey),
 }
    $.get(profiturl,async(error, response, data) =>{
      const result = JSON.parse(data)
      if(logs) $.log(data)
      let time = Math.round(new Date(new Date().toLocaleDateString()).getTime()/1000)
 coins = result.data.income_data.cash_balance
 if(result.data.profit_detail.cash_income_list.find(item => item.time >= time) && result.data.profit_detail.cash_income_list.find(item => item.task_id == "213")){
      cash = 0;
      }
           resolve()
     })
    })
   }
 //withdraw alipay 0.3
 function withdraw() {
 return new Promise((resolve, reject) => {
   let withdrawurl ={
     url: `https://${dyhost}/luckycat/aweme/v1/wallet/take_cash?task_key=jiao_take_cash&${signheader}`,
     headers: JSON.parse(readkey),
     body: `{
   "account": "${dyjsbaccount}",
   "is_auto": false,
   "take_cash_type": 3,
   "tab_type": "alipay",
   "in_sp_time": 0,
   "cash_amount": -30,
   "name": ""
 }`
 }

    $.post(withdrawurl,(error, response, data) =>{
      const result = JSON.parse(data)
      if(logs) $.log(data)
      if(result.err_no == 0){
      console.log(result.err_tips+'Withdraw 0.3 yuan\n')
      message += result.err_tips+'Withdraw 0.3 yuan\n'
      }else{
      console.log(result.err_tips)
      }
           resolve()
     })
    })
   }
 async function showmsg() {
     if (tz == 1) {
       if ($.isNode()) {
         if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
           await notify.sendNotify($.name, message)
         } else {
           $.log(message)
         }
       } else {
         if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
           $.msg(jsname,'', message)
         } else {
           $.log(message)
         }
       }
     } else {
       $.log(message)
   }
 }

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
