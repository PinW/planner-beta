(function(e){function t(t){for(var r,i,o=t[0],l=t[1],s=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/planner-beta/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09f2":function(e,t,n){e.exports=n.p+"media/jocko-good.315b792e.mp3"},"0cfe":function(e,t,n){"use strict";n("1978")},1978:function(e,t,n){},"19e2":function(e,t,n){e.exports=n.p+"media/beep-alarm-4s.b6a86083.mp3"},"1a17":function(e,t,n){"use strict";n("cc33")},"210d":function(e,t,n){e.exports=n.p+"media/david-goggins-2-getoutofyourhead.245c61c0.mp3"},2919:function(e,t,n){},3805:function(e,t,n){e.exports=n.p+"media/beep-alarm-soft-2x-3s.03912d7b.mp3"},4167:function(e,t,n){"use strict";n("f6b8")},"42ca":function(e,t,n){},"4a7b":function(e,t,n){e.exports=n.p+"media/david-goggins-1-lobsterdinner.a7dac29f.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"planner-app"};function c(e,t,n,c,i,o){var l=Object(r["p"])("planner-base");return Object(r["k"])(),Object(r["f"])("div",a,[Object(r["h"])(l)])}var i={class:"planner-base"};function o(e,t,n,a,c,o){var l=Object(r["p"])("Timer");return Object(r["k"])(),Object(r["f"])("div",i,[Object(r["h"])(l)])}var l=function(e){return Object(r["m"])("data-v-2ad47ec4"),e=e(),Object(r["l"])(),e},s={class:"interval-timer"},u={class:"clock-container"},d={key:0,class:"splash"},p=l((function(){return Object(r["g"])("h1",null,"Fix your nerd neck",-1)})),m=l((function(){return Object(r["g"])("h2",null,"Guided exercises with timed reminders and adjustable difficulty",-1)})),f={class:"start-actions"},b={class:"menu"},v=l((function(){return Object(r["g"])("div",{class:"spacer"},null,-1)})),h=l((function(){return Object(r["g"])("h4",null,"Alarm Sound Selection",-1)}));function j(e,t,n,a,c,i){var o=Object(r["p"])("clock"),l=Object(r["p"])("interval-list"),j=Object(r["p"])("sound-list"),O=Object(r["p"])("settings");return Object(r["k"])(),Object(r["f"])("div",s,[Object(r["g"])("div",u,[Object(r["h"])(o,{initialClockTime:c.intervals[c.currentIntervalIndex].intervalTime,active:!c.paused,onClockAlarm:i.onClockEnd,onClockUpdated:i.updateDocumentTitle,onClick:t[0]||(t[0]=function(e){return i.togglePause()})},null,8,["initialClockTime","active","onClockAlarm","onClockUpdated"]),Object(r["h"])(r["b"],{name:"fade"},{default:Object(r["s"])((function(){return[c.showSplash?(Object(r["k"])(),Object(r["f"])("div",d,[p,m,Object(r["g"])("div",f,[Object(r["g"])("button",{class:"primary start-button",onClick:t[1]||(t[1]=function(){return i.startTimer&&i.startTimer.apply(i,arguments)})},"Start Timer"),Object(r["g"])("button",{class:"primary start-exercise",onClick:t[2]||(t[2]=function(){return i.startExercise&&i.startExercise.apply(i,arguments)})},"Start Exercise")])])):Object(r["e"])("",!0)]})),_:1})]),Object(r["g"])("div",b,[Object(r["h"])(l,{intervals:c.intervals,currentIntervalIndex:c.currentIntervalIndex},null,8,["intervals","currentIntervalIndex"]),v,h,Object(r["h"])(j,{sounds:c.alarmSounds,selectedAlarmSound:c.selectedAlarmSound,onSelectSound:i.selectSound},null,8,["sounds","selectedAlarmSound","onSelectSound"]),Object(r["h"])(O,{"repeat-forever":c.repeatForever,onToggleRepeat:t[3]||(t[3]=function(e){return c.repeatForever=!c.repeatForever})},null,8,["repeat-forever"])])])}n("a9e3"),n("7db0"),n("b0c0");function O(e,t,n,a,c,i){var o=Object(r["p"])("readable-time");return Object(r["k"])(),Object(r["f"])("div",{class:Object(r["j"])(["clock",{paused:!n.active}])},[Object(r["h"])(o,{time:c.clockTime},null,8,["time"])],2)}n("99af");var g={name:"Clock",props:{initialClockTime:{default:60,type:Number},active:{default:!0,type:Boolean}},data:function(){return{clockTime:this.initialClockTime,clockInterval:null}},computed:{timePassed:function(){return this.initialClockTime-this.clockTime},readableTime:function(){var e=this.clockTime,t=Math.floor(e/60),n=e%60;return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)}},methods:{startClock:function(){var e=this;clearInterval(this.clockInterval),this.clockInterval=setInterval((function(){e.active&&(e.clockTime-=1,0==e.clockTime&&(e.clockAlarm(),e.stopClock()))}),1e3)},clockAlarm:function(){this.$emit("clock-alarm")},stopClock:function(){clearInterval(this.clockInterval)},resetClock:function(){this.clockTime=this.initialClockTime}},watch:{initialClockTime:function(){this.clockTime=this.initialClockTime,this.startClock()},clockTime:function(){this.$emit("clock-updated",this.readableTime)},active:function(e){1==e?this.startClock():this.stopClock()}},mounted:function(){this.active&&this.startClock()}},k=(n("b9c5"),n("6b0d")),I=n.n(k);const y=I()(g,[["render",O],["__scopeId","data-v-5742719b"]]);var x=y,S={class:"interval-list"};function T(e,t,n,a,c,i){var o=Object(r["p"])("interval-list-item");return Object(r["k"])(),Object(r["f"])("div",S,[(Object(r["k"])(!0),Object(r["f"])(r["a"],null,Object(r["o"])(n.intervals,(function(e,t){return Object(r["k"])(),Object(r["d"])(o,{class:Object(r["j"])({active:i.isActiveInterval(t)}),key:e.label,interval:e},null,8,["class","interval"])})),128))])}var C={class:"interval"},A={class:"interval-label"},_={class:"interval-time"};function w(e,t,n,a,c,i){var o=Object(r["p"])("readable-time");return Object(r["k"])(),Object(r["f"])("div",C,[Object(r["g"])("div",A,Object(r["q"])(n.interval.label),1),Object(r["g"])("div",_,[Object(r["h"])(o,{time:n.interval.intervalTime},null,8,["time"])])])}var L={name:"IntervalListItem",props:["interval"]};n("1a17");const B=I()(L,[["render",w],["__scopeId","data-v-77344838"]]);var P=B,F={name:"IntervalList",props:["intervals","currentIntervalIndex"],components:{IntervalListItem:P},methods:{isActiveInterval:function(e){return e==this.currentIntervalIndex}}};n("0cfe");const E=I()(F,[["render",T],["__scopeId","data-v-15388d76"]]);var D=E,M={class:"sound-list"};function R(e,t,n,a,c,i){var o=Object(r["p"])("sound-list-item");return Object(r["k"])(),Object(r["f"])("div",M,[(Object(r["k"])(!0),Object(r["f"])(r["a"],null,Object(r["o"])(n.sounds,(function(e){return Object(r["k"])(),Object(r["d"])(o,{class:Object(r["j"])({active:i.isActiveSound(e.name)}),key:e.name,onClick:function(t){return i.selectSound(e.name)},sound:e},null,8,["class","onClick","sound"])})),128))])}var G={class:"sound-item"},N={class:"sound-name"},H={class:"sound-length"};function U(e,t,n,a,c,i){var o=Object(r["p"])("readable-time");return Object(r["k"])(),Object(r["f"])("div",G,[Object(r["g"])("span",N,Object(r["q"])(n.sound.name),1),Object(r["g"])("span",H,[Object(r["h"])(o,{time:n.sound.alarmLength},null,8,["time"])])])}var $={name:"SoundListItem",props:["sound"]};n("4167");const q=I()($,[["render",U],["__scopeId","data-v-0bbd3f70"]]);var J=q,W={name:"SoundList",props:["sounds","selectedAlarmSound"],components:{SoundListItem:J},methods:{isActiveSound:function(e){return e==this.selectedAlarmSound.name},selectSound:function(e){this.$emit("select-sound",e)}}};n("b57c");const Y=I()(W,[["render",R],["__scopeId","data-v-717974d5"]]);var z=Y,K=function(e){return Object(r["m"])("data-v-371cdbb7"),e=e(),Object(r["l"])(),e},Q={class:"settings"},V={class:"repeat-option"},X=["checked"],Z=K((function(){return Object(r["g"])("label",{for:"repeat-option"},"Repeat Forever",-1)}));function ee(e,t,n,a,c,i){return Object(r["k"])(),Object(r["f"])("div",Q,[Object(r["g"])("div",V,[Object(r["g"])("input",{id:"repeat-option",type:"checkbox",checked:n.repeatForever,onClick:t[0]||(t[0]=function(){return i.toggleRepeat&&i.toggleRepeat.apply(i,arguments)})},null,8,X),Z])])}var te={name:"Settings",props:{repeatForever:Boolean},methods:{toggleRepeat:function(){this.$emit("toggle-repeat")}}};n("db76");const ne=I()(te,[["render",ee],["__scopeId","data-v-371cdbb7"]]);var re=ne,ae={name:"IntervalTimer",props:{repeatCount:Number},data:function(){return{intervals:[{label:"Nerd Time",intervalTime:3600,playAlarm:!0},{label:"Exercise Window",intervalTime:600,playAlarm:!1}],alarmSounds:[{name:"David Goggins - Lobster Dinner",file:"david-goggins-1-lobsterdinner.mp3",alarmLength:69},{name:"David Goggins - Get Out of Your Head",file:"david-goggins-2-getoutofyourhead.mp3",alarmLength:60},{name:"David Goggins - Stay Hard",file:"david-goggins-stayhard.mp3",alarmLength:3},{name:"Jocko Willink - Good",file:"jocko-good.mp3",alarmLength:139},{name:"Beep Beep Soft",file:"beep-alarm-soft-2x-3s.mp3",alarmLength:3},{name:"Beep Beep Alarm",file:"beep-alarm-4s.mp3",alarmLength:4},{name:"Beep Beep High",file:"beep-alarm-3x-2s.mp3",alarmLength:2}],currentIntervalIndex:0,selectedAlarmSound:null,repeatForever:!0,paused:!0,showSplash:!0}},created:function(){this.selectSound("Beep Beep High")},methods:{togglePause:function(){this.paused=!this.paused},startTimer:function(){this.paused=!1,this.showSplash=!1},startExercise:function(){this.currentIntervalIndex+=1,this.startTimer()},onClockEnd:function(){var e=this.intervals[this.currentIntervalIndex],t=this.selectedAlarmSound.file;if(e.playAlarm){var r=new Audio(n("67c7")("./"+t));r.play()}this.currentIntervalIndex<this.intervals.length-1?this.currentIntervalIndex+=1:this.repeatForever&&(this.currentIntervalIndex=0)},updateDocumentTitle:function(e){document.title=e+" — "+this.intervals[this.currentIntervalIndex].label},selectSound:function(e){this.selectedAlarmSound=this.alarmSounds.find((function(t){return t.name==e}))}},mounted:function(){},components:{Clock:x,IntervalList:D,SoundList:z,Settings:re}};n("ece0");const ce=I()(ae,[["render",j],["__scopeId","data-v-2ad47ec4"]]);var ie=ce,oe={name:"App",components:{Timer:ie}};const le=I()(oe,[["render",o]]);var se=le,ue={name:"App",components:{PlannerBase:se}};n("d1ef");const de=I()(ue,[["render",c]]);var pe=de,me=n("5502"),fe=Object(me["a"])({state:{},mutations:{},actions:{},modules:{}}),be={class:"readable-time"};function ve(e,t,n,a,c,i){return Object(r["k"])(),Object(r["f"])("span",be,Object(r["q"])(i.readableTime),1)}var he={name:"ReadableTime",props:["time"],computed:{readableTime:function(){var e=this.time,t=Math.floor(e/60),n=e%60;return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)}}};const je=I()(he,[["render",ve]]);var Oe=je;Object(r["c"])(pe).component("ReadableTime",Oe).use(fe).mount("#app")},"67c7":function(e,t,n){var r={"./beep-alarm-3x-2s.mp3":"aba0","./beep-alarm-4s.mp3":"19e2","./beep-alarm-soft-2x-3s.mp3":"3805","./david-goggins-1-lobsterdinner.mp3":"4a7b","./david-goggins-2-getoutofyourhead.mp3":"210d","./david-goggins-stayhard.mp3":"9f2a","./jocko-good.mp3":"09f2"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="67c7"},"72ac":function(e,t,n){},9335:function(e,t,n){},"9f2a":function(e,t,n){e.exports=n.p+"media/david-goggins-stayhard.c2120c8a.mp3"},aba0:function(e,t,n){e.exports=n.p+"media/beep-alarm-3x-2s.342c532d.mp3"},b57c:function(e,t,n){"use strict";n("72ac")},b9c5:function(e,t,n){"use strict";n("42ca")},bc17:function(e,t,n){},cc33:function(e,t,n){},d1ef:function(e,t,n){"use strict";n("2919")},db76:function(e,t,n){"use strict";n("9335")},ece0:function(e,t,n){"use strict";n("bc17")},f6b8:function(e,t,n){}});
//# sourceMappingURL=app.a705ced9.js.map