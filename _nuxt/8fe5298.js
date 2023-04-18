(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{254:function(e,t,o){var content=o(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(105).default)("c6246d86",content,!1,{sourceMap:!1})},266:function(e,t,o){"use strict";o(254)},267:function(e,t,o){var n=o(104)(!1);n.push([e.i,"#bz-projectlist[data-v-020d1b15]{max-width:1000px;margin:150px auto;padding:0 20px}#bz-projectlist #bz-projects[data-v-020d1b15]{background:#2d2d2d;box-shadow:3px 5px 4px rgba(0,0,0,.5);border-radius:6px;margin:20px;padding:0 50px}#bz-projectlist .bz-project[data-v-020d1b15]{padding:50px 0;display:flex;justify-content:center;flex-wrap:wrap;grid-gap:20px;gap:20px;border-bottom:3px solid #3d3d3d}#bz-projectlist .bz-project[data-v-020d1b15]:last-child{border-bottom:none}#bz-projectlist .bz-project .bz-project-icon[data-v-020d1b15]{height:173px;width:222px;align-self:center;position:relative}#bz-projectlist .bz-project .bz-tech-list[data-v-020d1b15]{flex-basis:130px;flex-shrink:0;align-self:center}#bz-projectlist .bz-project .bz-tech-list p[data-v-020d1b15]{background:#3d3d3d;border-radius:20px;box-shadow:inset 3px 5px 4px rgba(0,0,0,.5);margin:4px 0;padding:9px 0 4px;text-align:center}#bz-projectlist .bz-project .bz-tech-list .bz-open-source[data-v-020d1b15]{background:#39acac}#bz-projectlist .bz-project .bz-tech-list .bz-open-source a[data-v-020d1b15]{color:#2d2d2d;font-weight:700}#bz-projectlist .bz-project .bz-project-desc[data-v-020d1b15]{flex-basis:50%;flex-grow:1}#bz-projectlist .bz-project .bz-project-desc p[data-v-020d1b15]{font-size:15px}#bz-projectlist .bz-project .bz-project-dates[data-v-020d1b15]{float:right;margin:16px 0 0;font-style:italic}@media(max-width:551px){#bz-projectlist #bz-projects[data-v-020d1b15]{padding:0 30px;margin:20px 0}#bz-projectlist .bz-tech-list[data-v-020d1b15]{flex-grow:1;text-align:center}#bz-projectlist .bz-tech-list p[data-v-020d1b15]{display:inline-block;padding:9px 15px 4px!important;margin:5px!important}#bz-projectlist .bz-project-dates[data-v-020d1b15]{display:none}}",""]),e.exports=n},286:function(e,t,o){"use strict";o.r(t);o(26);var n={name:"ProjectList",data:function(){return{projectList:[{name:"Constellation",openSource:"https://github.com/benzenittini/constellation",dateRange:"February 2023 - Present",url:"https://getconstellation.dev",icon:"constellation-icon.png",technologies:["Vue 3","TypeScript","Sass","Electron"],descriptions:["Constellation is the replacement for Spacia (see next project). With the closing of my company, I wanted a solution to continue offering Spacia without needing to monitor servers 24/7.","This runs as a fully-offline Electron application, persisting board state to the user's local filesystem. For users who want to use collaborative features or access their boards from multiple locations, a simple, self-hostable server is also provided.","Constellation is open source and free of charge - give it a try!"]},{name:"Spacia",openSource:!1,dateRange:"July 2021 - March 2023",url:"https://spacia.moonwafer.io",icon:"spacia-icon.png",technologies:["Vue 3","TypeScript","Sass","Stripe","DigitalOcean"],descriptions:["Spacia is a visual project management tool. It uses a mindmap as its foundation and builds the more conventional task tracking features on top, making it ideal for all of us visually-organized people. It's still under development, but is live and operational.","I designed, implemented, and deployed the initial version of the project over the course of a year. It's a VueJS app deployed as horizontally scalable Docker containers on a Nomad cluster via Ansible scripts. Spacia is running on DigitalOcean Droplets, and makes use of DigitalOcean's managed Postgres and Spaces offerings."]},{name:"Vue 3 Plugins",openSource:"https://github.com/moonwafer-io",dateRange:"Oct 2021 - Present",url:"https://github.com/moonwafer-io",icon:"vue-libraries-icon.png",technologies:["Vue 3","TypeScript"],descriptions:["During the early days of Spacia, Vue 3 was still in beta release. At that point, there weren't any modal or pop-up notification libraries which were Vue 3 compatible.","My solution: create some. These two projects are open-source for anyone to use and contribute to, though so far they only have a very basic set of features that were required by Spacia."]},{name:"Dev Portfolio",openSource:!1,dateRange:"July 2022 - Present",url:"https://ben.zenittini.dev",icon:"portfolio-icon.png",technologies:["Nuxt 2","Vue 2","Sass"],descriptions:["This website you're currently viewing was designed and created from scratch.","I ventured into the world of Nuxt for this since I wanted this to be a static site and I already have experience in the Vue ecosystem. It didn't take long, but I'm in love with Nuxt 2 and looking forward to Nuxt 3 becoming more stable!"]},{name:"PictureStork",openSource:!1,dateRange:"Sept 2017 - Nov 2019",url:"https://picturestork.zenittini.dev",icon:"picturestork-icon.png",technologies:["Vue 2","NodeJS","Sass","Stripe","AWS"],descriptions:["PictureStork was a subscription service that made it easy for Instagram users to receive printed copies of their posted photos.","This was a side-hustle I worked on with my brother. He took care of the business and feature design while I took care of the technical aspects. This included the website, payment processing, Instagram API integration, and an automated process for printing photos.","Unfortunately we've since taken the service down, but I built a non-functional version of the site accessible for reference."]}]}}},r=(o(266),o(43)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bz-projectlist"}},[t("h2",[e._v("Notable Projects")]),e._v(" "),t("div",{attrs:{id:"bz-projects"}},e._l(e.projectList,(function(o){return t("div",{key:o.name,staticClass:"bz-project"},[t("div",{staticClass:"bz-tech-list"},[o.openSource?t("p",{staticClass:"bz-open-source"},[t("a",{attrs:{href:o.openSource}},[e._v("Open Source")])]):e._e(),e._v(" "),e._l(o.technologies,(function(o){return t("p",{key:o},[e._v(e._s(o))])}))],2),e._v(" "),t("a",{staticClass:"bz-project-icon",attrs:{href:o.url}},[t("img",{attrs:{src:o.icon}})]),e._v(" "),t("div",{staticClass:"bz-project-desc"},[t("p",{staticClass:"bz-project-dates"},[e._v(e._s(o.dateRange))]),e._v(" "),t("h3",[t("a",{attrs:{href:o.url}},[e._v(e._s(o.name))])]),e._v(" "),e._l(o.descriptions,(function(desc,i){return t("p",{key:o.name+i+"-desc"},[e._v(e._s(desc))])}))],2)])})),0)])}),[],!1,null,"020d1b15",null);t.default=component.exports}}]);