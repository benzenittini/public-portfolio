(window.webpackJsonp=window.webpackJsonp||[]).push([[0,6,7],{255:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("1161235e",content,!1,{sourceMap:!1})},256:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("07485789",content,!1,{sourceMap:!1})},268:function(t,e,n){"use strict";var r=n(11),o=n(5),l=n(3),d=n(106),c=n(16),f=n(12),m=n(182),h=n(33),v=n(75),y=n(180),z=n(4),S=n(76).f,w=n(27).f,x=n(15).f,_=n(269),A=n(270).trim,Y="Number",k=o.Number,D=k.prototype,T=o.TypeError,I=l("".slice),C=l("".charCodeAt),N=function(t){var e=y(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,o,l,d,c,code,f=y(t,"number");if(v(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=A(f),43===(e=C(f,0))||45===e){if(88===(n=C(f,2))||120===n)return NaN}else if(48===e){switch(C(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(d=(l=I(f,2)).length,c=0;c<d;c++)if((code=C(l,c))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(d(Y,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var M,G=function(t){var e=arguments.length<1?0:k(N(t)),n=this;return h(D,n)&&z((function(){_(n)}))?m(Object(e),n,G):e},H=r?S(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;H.length>R;R++)f(k,M=H[R])&&!f(G,M)&&x(G,M,w(k,M));G.prototype=D,D.constructor=G,c(o,Y,G,{constructor:!0})}},269:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},270:function(t,e,n){var r=n(3),o=n(23),l=n(13),d=n(271),c=r("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var n=l(o(e));return 1&t&&(n=c(n,m,"")),2&t&&(n=c(n,h,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},271:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},272:function(t,e,n){n(273)},273:function(t,e,n){"use strict";var r=n(2),o=n(8),l=n(3),d=n(23),c=n(6),f=n(107),m=n(13),h=n(34),v=n(132),y=n(181),z=n(7),S=n(18),w=z("replace"),x=TypeError,_=l("".indexOf),A=l("".replace),Y=l("".slice),k=Math.max,D=function(t,e,n){return n>t.length?-1:""===e?n:_(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,l,z,T,I,C,N,E,M=d(this),G=0,H=0,R="";if(null!=t){if((n=f(t))&&(r=m(d(v(t))),!~_(r,"g")))throw x("`.replaceAll` does not allow non-global regexes");if(l=h(t,w))return o(l,t,M,e);if(S&&n)return A(m(M),t,e)}for(z=m(M),T=m(t),(I=c(e))||(e=m(e)),C=T.length,N=k(1,C),G=D(z,T,0);-1!==G;)E=I?m(e(T,G,z)):y(T,z,G,[],void 0,e),R+=Y(z,H,G)+E,H=G+C,G=D(z,T,G+N);return H<z.length&&(R+=Y(z,H)),R}})},274:function(t,e,n){"use strict";n(255)},275:function(t,e,n){var r=n(104)(!1);r.push([t.i,".bz-timespan[data-v-6504de5d]{position:absolute;width:100%}.bz-timespan svg[data-v-6504de5d]{display:block}.bz-timespan line[data-v-6504de5d],.bz-timespan path[data-v-6504de5d]{stroke-width:4px;fill:transparent}.bz-timespan .bz-content-bubble[data-v-6504de5d]{position:absolute;border:4px solid #fff;border-radius:6px;padding:20px;min-width:380px;z-index:10}.bz-timespan .bz-content-bubble h3[data-v-6504de5d],.bz-timespan .bz-content-bubble p[data-v-6504de5d],.bz-timespan .bz-content-bubble ul[data-v-6504de5d]{margin:0;padding:0}.bz-timespan .bz-content-bubble h4[data-v-6504de5d]{margin:1.3em 0 .6em}.bz-timespan .bz-content-bubble ul[data-v-6504de5d]{padding:0 0 0 20px}.bz-timespan .bz-content-bubble .bz-daterange[data-v-6504de5d]{font-size:11pt;float:right;font-style:italic}.bz-timespan .bz-content-bubble .bz-jobposition[data-v-6504de5d]{font-style:italic;margin-bottom:20px}.bz-timespan.bz-left-side svg[data-v-6504de5d]{right:0;position:absolute}.bz-timespan.bz-left-side .bz-content-bubble[data-v-6504de5d]{right:50px}.bz-timespan.bz-right-side .bz-content-bubble[data-v-6504de5d]{left:50px}@media(max-width:650px){.bz-timespan[data-v-6504de5d]{position:relative}.bz-timespan svg[data-v-6504de5d]{display:none}.bz-timespan .bz-content-bubble[data-v-6504de5d]{position:relative;min-width:unset;transform:none!important;top:0!important;margin:20px}.bz-timespan.bz-right-side .bz-content-bubble[data-v-6504de5d]{left:unset}}",""]),t.exports=r},276:function(t,e,n){"use strict";n(256)},277:function(t,e,n){var r=n(104)(!1);r.push([t.i,".bz-timeline polygon[data-v-735237c1]{fill:#fff}.bz-timeline line[data-v-735237c1]{stroke:#fff}.bz-timeline line.major-axis[data-v-735237c1]{stroke-width:3px}.bz-timeline text[data-v-735237c1]{fill:#fff;font-size:.9em}",""]),t.exports=r},281:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("34156d0b",content,!1,{sourceMap:!1})},288:function(t,e,n){"use strict";n.r(e);n(44),n(268),n(28),n(77),n(272);var r={name:"Timespan",props:{side:String,color:String,mainTitle:String,position:String,dateRange:String,categorizedNotes:Object,notes:Array,spanYStart:Number,spanYStop:Number,notesShift:Number},data:function(){return{svgHeight:this.spanYStart-this.spanYStop,midpoint:this.spanYStop+(this.spanYStart-this.spanYStop)/2}},computed:{uniqueId:function(){return this.mainTitle.replaceAll(" ","-")},bubbleStyle:function(){return{"border-color":this.color,top:this.midpoint+"px",transform:"translateY(-50%) translateY(".concat(this.notesShift,"px)")}}}},o=(n(274),n(43)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bz-timespan",class:{"bz-left-side":"left"===t.side,"bz-right-side":"right"===t.side}},[t.svgHeight&&t.svgHeight>0?e("svg",{style:{transform:"translateY(".concat(t.spanYStop,"px)")},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 ".concat(t.svgHeight),height:t.svgHeight,width:"50"}},[e("defs",[e("linearGradient",{attrs:{id:t.uniqueId+"-linear",x1:"0%",y1:"0%",x2:"0%",y2:"100%"}},[-1===t.spanYStop?e("stop",{attrs:{offset:"5%","stop-color":"transparent"}}):e("stop",{attrs:{offset:"5%","stop-color":t.color}}),t._v(" "),e("stop",{attrs:{offset:"30%","stop-color":t.color}})],1)],1),t._v(" "),"right"===t.side?e("g",[e("path",{attrs:{stroke:"url(#".concat(t.uniqueId,"-linear)"),d:"M 0 5 h 20 q 10 0, 10 10 v ".concat(t.svgHeight-30," q 0 10, -10 10 h -20")}}),t._v(" "),e("line",{attrs:{stroke:t.color,x1:"30",x2:"50",y1:t.midpoint-t.spanYStop,y2:t.midpoint-t.spanYStop}})]):e("g",[e("path",{attrs:{stroke:"url(#".concat(t.uniqueId,"-linear)"),d:"M 50 5 h -20 q -10 0, -10 10 v ".concat(t.svgHeight-30," q 0 10, 10 10 h 20")}}),t._v(" "),e("line",{attrs:{stroke:t.color,x1:"0",x2:"20",y1:t.midpoint-t.spanYStop,y2:t.midpoint-t.spanYStop}})])]):t._e(),t._v(" "),e("div",{staticClass:"bz-content-bubble",style:t.bubbleStyle},[e("p",{staticClass:"bz-daterange"},[t._v(t._s(t.dateRange))]),t._v(" "),e("h3",[t._v(t._s(t.mainTitle))]),t._v(" "),e("p",{staticClass:"bz-jobposition"},[t._v(t._s(t.position))]),t._v(" "),t.notes&&t.notes.length>0?e("ul",t._l(t.notes,(function(n,i){return e("li",{key:t.mainTitle+"-note-"+i},[t._v(t._s(n))])})),0):t._l(Object.keys(t.categorizedNotes),(function(n){return e("div",{key:t.mainTitle+"-"+n},[e("h4",[t._v(t._s(n))]),t._v(" "),e("ul",t._l(t.categorizedNotes[n],(function(r,i){return e("li",{key:t.mainTitle+"-"+n+"-"+i},[t._v(t._s(r))])})),0)])}))],2)])}),[],!1,null,"6504de5d",null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r={name:"Timeline",props:{timeline:Array},data:function(){return{svgHeight:this.timeline[0].height}}},o=(n(276),n(43)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{staticClass:"bz-timeline",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 "+t.svgHeight,height:t.svgHeight,width:"100"}},[e("line",{staticClass:"major-axis",attrs:{x1:"50",x2:"50",y1:"0",y2:t.svgHeight}}),t._v(" "),e("polygon",{attrs:{points:"50,0 40,20 60,20"}}),t._v(" "),t._l(t.timeline,(function(t){return e("line",{key:"tick-"+t.year,attrs:{x1:"40",x2:"60",y1:t.height,y2:t.height}})})),t._v(" "),t._l(t.timeline,(function(n){return e("text",{key:"label-"+n.year,attrs:{x:"55",y:n.height-5}},[t._v(t._s(n.year))])}))],2)}),[],!1,null,"735237c1",null);e.default=component.exports},293:function(t,e,n){"use strict";n(281)},294:function(t,e,n){var r=n(104)(!1);r.push([t.i,"#bz-history[data-v-0c0b2efe]{margin-top:150px;padding-bottom:100px;background:#2d2d2d}#bz-history #bz-history-wrapper[data-v-0c0b2efe]{margin:0 auto;max-width:1500px}#bz-history #bz-history-flex[data-v-0c0b2efe]{display:flex}#bz-history #bz-history-flex h2[data-v-0c0b2efe]{width:80%;border-bottom:1px solid #0ff;text-align:center;padding:10px;margin:40px auto}#bz-history #bz-history-flex #bz-history-education[data-v-0c0b2efe]{flex-grow:1;position:relative;right:-20px}#bz-history #bz-history-flex #bz-history-education .bz-timespan[data-v-0c0b2efe]{top:150px}#bz-history #bz-history-flex #bz-history-timeline[data-v-0c0b2efe]{margin-top:150px}#bz-history #bz-history-flex #bz-history-employment[data-v-0c0b2efe]{flex-grow:2;position:relative;left:-20px}#bz-history #bz-history-flex #bz-history-employment .bz-timespan[data-v-0c0b2efe]{top:150px}@media(max-width:1150px){#bz-history #bz-history-education[data-v-0c0b2efe]{display:none}}@media(max-width:650px){#bz-history #bz-history-flex #bz-history-timeline[data-v-0c0b2efe]{display:none}#bz-history #bz-history-flex #bz-history-employment[data-v-0c0b2efe]{left:0}#bz-history #bz-history-flex #bz-history-employment .bz-timespan[data-v-0c0b2efe]{top:0}}",""]),t.exports=r},297:function(t,e,n){"use strict";n.r(e);var r=n(128);var o=n(172),l=n(100);function d(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(45),n(19),n(108),n(35);var c={name:"History",data:function(){var t=this;return{timeline:t.getYears().map((function(e){return{year:e.toString(),height:t.calculateYGivenDate(new Date(e.toString()))}})),leftSideEvents:[{color:"#B6BA00",mainTitle:"Veggie Raps",position:"Co-Developer, Co-Architect, Co-Designer",dateRange:"Jan 2022 - Present",spanYStart:t.calculateYGivenDate(new Date("January 2022")),spanYStop:-1,notesShift:70,notes:['Contributed to a small (but growing) library of minigames and orchestration collectively known as "Veggie Raps".',"Implemented an extensible framework on top of Phaser 3 (a JS game library) for quickly creating new minigames.","Synchronized data between the cell phone controllers, the display, and the server.","Created graphics using Figma / SVG."]},{color:"#5184B0",mainTitle:"PictureStork",position:"Developer / Technology Consultant",dateRange:"Sept 2017 - Nov 2019",spanYStart:t.calculateYGivenDate(new Date("September 2017")),spanYStop:t.calculateYGivenDate(new Date("November 2019")),notesShift:0,notes:["Designed and implemented PictureStork's website using Vue 2 and JavaScript.","Worked with Instagram's API to allow users to authorize our service on their Instagram account.","Created integrations with Instagram's API to fetch a user's posts that contained a predefined #hashtag.","Utilized third-party libraries for organizing and printing a user's photos."]},{color:"#AAAAAA",mainTitle:"Penn State University",position:"Student",dateRange:"Aug 2010 - May 2014",spanYStart:t.calculateYGivenDate(new Date("August 2010")),spanYStop:t.calculateYGivenDate(new Date("May 2014")),notesShift:0,notes:["BS in Computer Science","Minor in Mathematics","Overall GPA: 3.64 / 4.00"]}],rightSideEvents:[{color:"#B35F87",mainTitle:"Moonwafer LLC",position:"Founder, All Roles",dateRange:"July 2021 - Present",spanYStart:t.calculateYGivenDate(new Date("July 2021")),spanYStop:-1,notesShift:150,categorizedNotes:{Product:['Designed, architected, and implemented "Spacia", a visual project organization tool.',"Created the front-end using Vue 3 with TypeScript.","Built the REST server on ExpressJS running on NodeJS.","Implemented a replayable action framework for handling user actions and ensuring data integrity.","Designed a reusable data interface for integrating with various backend datastores.","Created all designs and graphics using Figma and SVG."],Deployment:["Automated the deployment across multiple environments using Ansible.","Deployed product as horizontally-scalable Docker containers on a Hashicorp Nomad cluster.","Incorporated Hashicorp Consul for service discovery, and Hashicorp Vault for secret and certificate management.","Utilized DigitalOcean's Droplets, Spaces, and managed PostgreSQL instances."]}},{color:"#74C34D",mainTitle:"PTC",position:"Principal Software Engineer",dateRange:"Sept 2015 - July 2021",spanYStart:t.calculateYGivenDate(new Date("September 2015")),spanYStop:t.calculateYGivenDate(new Date("July 2021")),notesShift:150,categorizedNotes:{Product:["Redesigned and implemented a Java stream processing product built on Flink and RabbitMQ to greatly improve performance and scalability.","Contributed to various pieces of a machine learning project built on SparkML.","Created and consumed numerous REST APIs for interacting with the product.","Worked with data stored in multiple backends (PostgreSQL, Redshift, S3, local, parquet)","Supported RedHat, Ubuntu, and Windows Server operating systems."],Tooling:["Created and maintained Jenkins builds for interconnected projects across multiple versions.","Coordinated the migration of artifacts across Artifactory instances.","Automated server provisioning and code deployments using AWS tools.","Designed and implemented a fully automated end-to-end test orchestration library which included utilities for Azure VM creation, prerequisite software installations, product installation, test suite execution, result reporting, and machine tear-down."],Social:["Served as scrum master, and facilitated our office's adoption of SAFe (Scaled Agile Framework).","Created and heavily maintained a Confluence wiki containing technical references, training materials, and aided with cross-team coordination.","Participated in the interview process for bringing in new team members.","Worked with escalated customers to resolve urgent / ongoing issues."]}},{color:"#3A6BC8",mainTitle:"Lockheed Martin",position:"Associate Software Engineer",dateRange:"June 2014 - Sept 2015",spanYStart:t.calculateYGivenDate(new Date("June 2014")),spanYStop:t.calculateYGivenDate(new Date("September 2015")),notesShift:30,notes:["Worked on an internal social network ('Eureka').","Designed / wrote enhancements, fixed bugs, supported users.","Assisted teammates with code changes and design choices.","Created automated UI tests using Selenium.","Languages / software used: Java, PostgreSQL, Google Web Toolkit (GWT), Spring Framework, Hibernate, Tomcat 6, Maven, Git."]},{color:"#AAAAAA",mainTitle:"Penn State Applied Research Lab",position:"Software Engineering Intern",dateRange:"May 2013 - May 2014",spanYStart:t.calculateYGivenDate(new Date("May 2013")),spanYStop:t.calculateYGivenDate(new Date("May 2014")),notesShift:70,notes:["Configured Tomcat 6 to replace Apache web server.","Generated KML for visualizing data in Google Earth.","Added Spring Security and Single Sign-On to Tomcat.","Improved pointer tracking on multi-display system for user motion input.","Researched Git with the goal of replacing Subversion."]}]}},methods:{calculateYGivenDate:function(t){return(new Date-t)/17e7},getYears:function(){console.log(new Date);var t=(new Date).getFullYear();return d(Array(t+1-2010).keys()).map((function(t){return t+2010}))}}},f=(n(293),n(43)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"bz-history"}},[e("div",{attrs:{id:"bz-history-wrapper"}},[e("div",{attrs:{id:"bz-history-flex"}},[e("div",{attrs:{id:"bz-history-education"}},[e("h2",[t._v("Education / Side Projects")]),t._v(" "),t._l(t.leftSideEvents,(function(n){return e("HistoryTimespan",t._b({key:n.mainTitle,attrs:{side:"left"}},"HistoryTimespan",n,!1))}))],2),t._v(" "),e("div",{attrs:{id:"bz-history-timeline"}},[e("HistoryTimeline",{attrs:{timeline:t.timeline}})],1),t._v(" "),e("div",{attrs:{id:"bz-history-employment"}},[e("h2",[t._v("Employment")]),t._v(" "),t._l(t.rightSideEvents,(function(n){return e("HistoryTimespan",t._b({key:n.mainTitle,attrs:{side:"right"}},"HistoryTimespan",n,!1))}))],2)])])])}),[],!1,null,"0c0b2efe",null);e.default=component.exports;installComponents(component,{HistoryTimespan:n(288).default,HistoryTimeline:n(289).default})}}]);