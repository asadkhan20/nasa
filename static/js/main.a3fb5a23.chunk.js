(this.webpackJsonpnasa=this.webpackJsonpnasa||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(16),r=n.n(s),i=(n(24),n(8)),o=n(2),l=n(1);function j(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsx)(i.b,{className:"home-link",to:"/nasaphoto",children:"The wonders of astronomy"})})}var d=n(14),u=n.n(d),h=n(18),p=n(19);function b(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("ul",{children:Object(l.jsx)(i.b,{className:"link",to:"/",exact:!0,children:" Take Me Home"})})})}var x="NKqxiTaZdY0ThNa3B3KXsGuxllKRBkJWRdM2pkuQ";function m(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),console.log(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"nasa-photo",children:["image"===n.media_type?Object(l.jsx)("img",{src:n.url,alt:n.title,className:"photo"}):Object(l.jsx)("iframe",{title:"space-video",src:n.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"photo"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:n.title}),Object(l.jsx)("p",{className:"date",children:n.date}),Object(l.jsx)("p",{className:"explanation",children:n.explanation})]})]})]}):Object(l.jsx)("div",{})}n(32);function O(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o.a,{component:j,path:"/",exact:!0}),Object(l.jsx)(o.a,{component:m,path:"/nasaphoto"})]})})}var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.a3fb5a23.chunk.js.map