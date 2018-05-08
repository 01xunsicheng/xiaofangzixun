















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16)); } return id;
};

var doyoo={
env:{
secure:false,
mon:'http://m2423.looyu.com/monitor',
chat:'http://looyuoms2432.looyu.com/chat',
file:'http://yun-static.soperson.com/131221',
compId:20002422,
confId:10073121,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'b2162a8697235854af48868e6547bcbefafc6d296ff3640afa96df9fdb80c3ff16c5719d17b5b3b0'
},
chat:{
mobileColor:'#c73289',
mobileHeight:80,
mobileChatHintBottom:0,
mobileChatHintMode:0,
mobileChatHintColor:'#b7c7c4',
mobileChatHintSize:0,
priorMiniChat:0
}

, monParam:{
index:1,
preferConfig:0,

title:'',
text:'',
auto:-1,
group:'10069666',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:0,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0,
minBallon:1,
chatFollow:1,
backCloseChat:0
}



,msgParam:{
title:'\u5168\u56fd\u6ce8\u518c\u6d88\u9632\u5de5\u7a0b\u5e08\u62a5\u540d',
index:0,
pos:0,
group:10069666,
delay:0,
hidePhone:0
}


};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?171107"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?180223" charset="utf-8"></scr'+'ipt>');
}
}
