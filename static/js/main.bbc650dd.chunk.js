(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(n,t,e){n.exports=e(84)},84:function(n,t,e){"use strict";e.r(t);var a,o,r=e(0),i=e.n(r),c=e(28),u=e.n(c),l=e(5),s=e(6),p=e(13),d=e(12),f=e(29),h=e.n(f),b=e(8),m=s.a.div(a||(a=Object(l.a)(["\nposition: relative;\nwidth: 550px;\nbackground-color: ",";\nborder-radius: 10px;\npadding: 15px;\nbox-sizing: border-box;\n\n.quote-wrapper{\n    width: 100%; \n    top: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    box-sizing: border-box;\n    &>p{\n        transition-timing-function: ease-in;\n        transition-duration: 2s;\n        width: 80%;\n        text-align: center;\n        font-size: 40px;\n\n    }\n    &>div{\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        margin-right: 20px;\n        p{\n            font-size: 20px;\n        }\n    }\n}\n.interactions-wrapper{\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 20px;\n    div{\n        width: 100px;\n        height: 40px;\n        display: flex;\n        justify-content: space-between;\n        a{\n            width: 40px;\n            height: 40px;\n            background-color: ",";\n            border-radius: 5px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            *{\n                width: 23px;\n                height: 23px;\n                color: black;\n            }\n        }\n\n    }\n    button{\n        width: 175px;\n        height: 35px;\n        font-size: 18px;\n        background-color: ",";\n        border: none;\n        border-radius: 5px;\n        font-weight: 600;\n        &:hover{\n            cursor: pointer;\n        }\n    }\n}\n"])),"#ffffff","#f9f21b","#f9f21b");function x(n){var t,e=Object(r.useState)({text:"",author:""}),a=Object(p.a)(e,2),o=a[0],c=a[1],u=Object(r.useState)([{}]),l=Object(p.a)(u,2),s=l[0],f=l[1];function x(){c(s[Math.floor(s.length*Math.random())])}return Object(r.useEffect)(function(){h.a.get("https://type.fit/api/quotes").then(function(n){return f(n.data)})},[]),Object(r.useEffect)(function(){x()},[s]),i.a.createElement(b.AnimatePresence,null,i.a.createElement(m,{id:"quote-box"},i.a.createElement(b.motion.div,{key:Object(r.useId)()+o.author,initial:{opacity:0},transition:{type:"spring",duration:2},animate:{opacity:1},exit:{opacity:0},className:"quote-wrapper"},i.a.createElement(b.motion.p,{id:"text"},'"'+o.text+'"'),i.a.createElement("div",null,i.a.createElement("p",{id:"author"},"-",null===o.author?"Unknown":o.author))),i.a.createElement("div",{className:"interactions-wrapper"},i.a.createElement("div",null,i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:(t=o,'https://twitter.com/intent/tweet?hashtags=quotes&text="'.concat(t.text,'" -').concat(null===t.author?"Unknown":t.author)),id:"tweet-quote"},i.a.createElement(d.b,null)),i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:function(n){if(void 0!==n)return"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=".concat(null===n.author?"Unknown":n.author,"&content=").concat(n.text,"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button")}(o),id:"tumblr-quote"},i.a.createElement(d.a,null))),i.a.createElement("button",{onClick:x,id:"new-quote"},"New quote"))))}var w=s.a.div(o||(o=Object(l.a)(['\n  background-image: url("./assets/background.jpg");\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'])));var g=function(){return i.a.createElement(w,{className:"App"},i.a.createElement(x,null))};u.a.createRoot(document.getElementById("root")).render(i.a.createElement(g,null))}},[[33,2,1]]]);
//# sourceMappingURL=main.bbc650dd.chunk.js.map