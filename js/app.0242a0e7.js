(function(e){function t(t){for(var r,a,o=t[0],l=t[1],s=t[2],d=0,v=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&v.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/planner-beta/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2919:function(e,t,n){},2921:function(e,t,n){},"4a7b":function(e,t,n){e.exports=n.p+"media/david-goggins-1-lobsterdinner.a7dac29f.mp3"},"56a9":function(e,t,n){"use strict";n("8f89")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"planner-app"};function i(e,t,n,i,a,o){var l=Object(r["n"])("planner-base");return Object(r["i"])(),Object(r["c"])("div",c,[Object(r["f"])(l)])}var a={class:"planner-base"};function o(e,t,n,c,i,o){var l=Object(r["n"])("Timer");return Object(r["i"])(),Object(r["c"])("div",a,[Object(r["f"])(l)])}var l=function(e){return Object(r["k"])("data-v-2bba112d"),e=e(),Object(r["j"])(),e},s={class:"repeating-timer"},u={class:"clock-container"},d={class:"interval-list"},v={class:"interval-label"},p={class:"interval-time"},f=l((function(){return Object(r["d"])("div",{class:"spacer"},null,-1)})),b={class:"repeat-option"},m=["checked"],h=l((function(){return Object(r["d"])("label",{for:"repeat-option"},"Repeat Forever",-1)}));function O(e,t,n,c,i,a){var o=Object(r["n"])("clock");return Object(r["i"])(),Object(r["c"])("div",s,[Object(r["d"])("div",u,[Object(r["f"])(o,{initialClockTime:i.intervals[i.currentIntervalIndex].intervalTime,onClockAlarm:t[0]||(t[0]=function(e){a.onClockEnd()})},null,8,["initialClockTime"])]),Object(r["d"])("div",d,[(Object(r["i"])(!0),Object(r["c"])(r["a"],null,Object(r["m"])(i.intervals,(function(e,t){return Object(r["i"])(),Object(r["c"])("div",{class:Object(r["h"])(["interval",{active:a.isActiveInterval(t)}]),key:e.label},[Object(r["e"])(Object(r["o"])(e.index)+" ",1),Object(r["d"])("div",v,Object(r["o"])(e.label),1),Object(r["d"])("div",p,Object(r["o"])(a.readableTime(e.intervalTime)),1)],2)})),128)),f,Object(r["d"])("div",b,[Object(r["d"])("input",{id:"repeat-option",type:"checkbox",checked:n.repeatForever},null,8,m),h])])])}n("a9e3"),n("99af");var j={class:"clock"};function k(e,t,n,c,i,a){return Object(r["i"])(),Object(r["c"])("div",j,Object(r["o"])(a.readableTime),1)}var T={name:"Clock",props:{initialClockTime:{default:60,type:Number},active:{default:!0,type:Boolean}},data:function(){return{clockTime:this.initialClockTime,clockInterval:null}},computed:{readableTime:function(){var e=this.clockTime,t=Math.floor(e/60),n=e%60;return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)},timePassed:function(){return this.initialClockTime-this.clockTime}},methods:{startClock:function(){var e=this;clearInterval(this.clockInterval),this.clockInterval=setInterval((function(){e.clockTime-=1,0==e.clockTime&&(e.clockAlarm(),e.stopClock())}),1e3)},clockAlarm:function(){this.$emit("clock-alarm")},stopClock:function(){clearInterval(this.clockInterval)},resetClock:function(){this.clockTime=this.initialClockTime}},watch:{initialClockTime:function(){this.clockTime=this.initialClockTime,this.startClock()}},mounted:function(){this.active&&this.startClock()}},I=(n("56a9"),n("6b0d")),y=n.n(I);const g=y()(T,[["render",k],["__scopeId","data-v-269cdf29"]]);var C=g,x={name:"RepeatingTimer",props:{repeatForever:{default:!0,type:Boolean},repeatCount:Number},data:function(){return{intervals:[{label:"Nerd Neck Time",intervalTime:3600,alarmSound:"../assets/sounds/alerts/david-goggins-1-lobsterdinner.mp3"},{label:"Exercise Window",intervalTime:600}],currentIntervalIndex:0}},methods:{onClockEnd:function(){var e=this.intervals[this.currentIntervalIndex];if(e){var t=new Audio(n("4a7b"));t.play(),console.log("lets go")}this.currentIntervalIndex<this.intervals.length-1?this.currentIntervalIndex+=1:this.repeatForever&&(this.currentIntervalIndex=0)},readableTime:function(e){var t=Math.floor(e/60),n=e%60;return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n)},isActiveInterval:function(e){return e==this.currentIntervalIndex}},mounted:function(){},components:{Clock:C}};n("b1e7");const w=y()(x,[["render",O],["__scopeId","data-v-2bba112d"]]);var _=w,P={name:"App",components:{Timer:_}};const A=y()(P,[["render",o]]);var M=A,S={name:"App",components:{PlannerBase:M}};n("d1ef");const F=y()(S,[["render",i]]);var N=F,B=n("5502"),E=Object(B["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["b"])(N).use(E).mount("#app")},"8f89":function(e,t,n){},b1e7:function(e,t,n){"use strict";n("2921")},d1ef:function(e,t,n){"use strict";n("2919")}});
//# sourceMappingURL=app.0242a0e7.js.map