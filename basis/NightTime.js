"use strict";{let e="";for(let t of document.getElementsByTagName("script"))t.src.includes("NightTime")&&(e=t.getAttribute("src"));e=e.slice(0,e.lastIndexOf("/")+1);let t=(t="")=>e+t,o=e=>Object.prototype.toString.call(e).slice(8,-1),r=new Object;"Object"===o(window.NightTime)&&Object.assign(r,NightTime);var NightTime=new Object;let a=NightTime,n=(new Date).getHours();(n<7||n>=19)&&(a.darkModeFact=!0),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(a.darkModeFact=!0),a.theme="",a.nightDo=a.lightDo=()=>{},a.CurrentModeStyle=()=>(a.css=document.getElementById("css"),a.css&&(a.theme=a.css.getAttribute("data-theme").toLowerCase()),a.darkModeFact?a.DarkModeStyle():a.LightModeStyle()),a.ToggleModeStyle=()=>(a.darkModeFact=!a.darkModeFact,a.CurrentModeStyle()),a.LightBackgroundColor="white",a.DarkBackgroundColor="#222",a.LightCSS=a.DarkCSS=void 0,a.defineCustomBackgroundColor=!1,String.prototype.i=function(e,t=""){return this.slice(0,e)+t+this.slice(e+1)},String.prototype.camelToHyphenCase=function(){var e="";for(let t=0;t<this.length;t++)this[t].toLowerCase()!==this[t]?e+="-"+this[t].toLowerCase():e+=this[t];return e},a.scrollbar=()=>{a.appendStyleByAjax("css/scrollbar.css","scrollbar",{"var(--text-color-parts)":a.darkModeFact?"255, 255, 255":"0, 0, 0"})};const l="The ID you specified has been occupied by the other element, please try to use other ID!";a.appendStyle=(e,t="")=>{var r;r="Object"==o(e)?(r=JSON.stringify(e,void 0,"\t")).replace(/\:\s*\{/g," {").replace(/\}\s*\,/g,"}").replace(/\,\n/g,";\n").replace(/\"/g,"").slice(1,-1):e;var a=document.getElementById(t);return a||((a=document.createElement("style")).id=t,a.type="text/css",document.head.appendChild(a)),"STYLE"!=a.tagName?(console.error(l),!1):(a.innerHTML=r,!0)},a.appendCSSLink=(e,t="")=>{var o=document.getElementById(t);return o||((o=document.createElement("link")).id=t,o.rel="stylesheet",o.type="text/css",document.head.appendChild(o)),"LINK"!=o.tagName?(console.error(l),!1):(o.href=e,!0)},a.appendStyleByAjax=(e,r="",a)=>{var n=new XMLHttpRequest;return n.onreadystatechange=()=>{if(4==n.readyState&&200==n.status){var e=n.responseText;if("Object"===o(a))for(let t in a)e=e.replaceAll(t,a[t]);var t=document.getElementById(r);return t||((t=document.createElement("style")).id=r,t.type="text/css",document.head.appendChild(t)),"STYLE"!=t.tagName?(console.error(l),!1):(t.innerHTML=e,!0)}},n.open("GET",t(e),!0),n.send()},a.removeStyle=a.removeCSSLink=e=>{let t=document.getElementById(e);return!!t&&(("STYLE"==t.tagName||"LINK"==t.tagName)&&(t.remove(),!0))},a.DarkModeStyle=()=>{if(a.darkModeFact=!0,a.theme.includes("bootstrap")){a.appendCSSLink("https://bootswatch.com/4/darkly/bootstrap.min.css","css");for(let e of document.getElementsByClassName("navbar"))e.classList.remove("navbar-light"),e.classList.remove("bg-light"),e.classList.add("navbar-dark"),e.classList.add("bg-dark");const e="bootstrap-btn-outline-light-style-fix";a.appendStyleByAjax(`css/${e}.css`,e)}return a.scrollbar(),a.removeStyle("light-root"),a.appendStyle({":root":{"--text-color":"white","--background-color":a.DarkBackgroundColor}},"dark-root"),a.nightDo(),a.defineCustomBackgroundColor&&(document.body.style.backgroundColor=a.DarkBackgroundColor),a.DarkCSS&&a.appendCSSLink(a.DarkCSS,"css"),!0},a.LightModeStyle=()=>{if(a.darkModeFact=!1,a.theme.includes("bootstrap")){a.appendCSSLink("https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.min.css","css");for(let e of document.getElementsByClassName("navbar"))e.classList.remove("navbar-dark"),e.classList.remove("bg-dark"),e.classList.add("navbar-light"),e.classList.add("bg-light")}return a.scrollbar(),a.removeStyle("bootstrap-btn-outline-light-style-fix"),a.removeStyle("dark-root"),a.appendStyle({":root":{"--text-color":"black","--background-color":a.LightBackgroundColor}},"light-root"),a.lightDo(),a.defineCustomBackgroundColor&&(document.body.style.backgroundColor=a.LightBackgroundColor),a.LightCSS&&a.appendCSSLink(a.LightCSS,"css"),!0},"Boolean"===o(r.darkMode)&&(a.darkModeFact=Boolean(r.darkMode)),r.nightDo&&"Function"===o(r.nightDo)&&(a.nightDo=r.nightDo),r.darkDo&&"Function"===o(r.darkDo)&&(a.nightDo=r.darkDo),r.lightDo&&"Function"===o(r.lightDo)&&(a.lightDo=r.lightDo),(r.lightBackgroundColor||r.darkBackgroundColor)&&(r.lightBackgroundColor&&(a.LightBackgroundColor=r.lightBackgroundColor),r.darkBackgroundColor&&(a.DarkBackgroundColor=r.darkBackgroundColor),a.defineCustomBackgroundColor=!0),r.lightCSS&&(a.LightCSS=r.lightCSS),r.darkCSS&&(a.DarkCSS=r.darkCSS),a.CurrentModeStyle()}