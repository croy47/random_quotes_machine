(this.webpackJsonprandom_quote_machine=this.webpackJsonprandom_quote_machine||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(6),i=n.n(o),s=(n(13),n(2)),a=n(4),u=n.n(a),d=n(7),j=n(8),b=function(e,t){if("QUOTES_FETCHED"===t.type){var n=Math.floor(Math.random()*(t.payload.length-1));return Object(s.a)(Object(s.a)({},e),{},{quotes:t.payload,loading:!1,index:n,previousIndex:n})}if("SMALL_SCREEN_DETECTED"===t.type)return Object(s.a)(Object(s.a)({},e),{},{bigScreen:!1});if("GET_QUOTE"===t.type){var c=Math.floor(Math.random()*(e.quotes.length-1));return c===e.index&&(c=e.index+1),Object(s.a)(Object(s.a)({},e),{},{index:c,previousIndex:null!==e.index&&e.index})}return"GO_BACK_IN_TIME"===t.type?Object(s.a)(Object(s.a)({},e),{},{index:e.previousIndex,previousIndex:e.index}):e},l=n(0),h=r.a.createContext(),x={loading:!0,quotes:[],index:null,bigScreen:!0,previousIndex:null},O=function(e){var t=e.children,n=Object(c.useReducer)(b,x),r=Object(j.a)(n,2),o=r[0],i=r[1],a=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i({type:"QUOTES_FETCHED",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){a(),window.innerWidth<600&&i({type:"SMALL_SCREEN_DETECTED"})}),[]);return Object(l.jsx)(h.Provider,{value:Object(s.a)(Object(s.a)({},o),{},{fetchQuotes:a,getNewQuote:function(){console.log("test"),i({type:"GET_QUOTE"})},getPreviousQuote:function(){i({type:"GO_BACK_IN_TIME"})}}),children:t})},p=function(){return Object(c.useContext)(h)},f=n(5),v=function(){var e=p(),t=e.quotes,n=e.index,c=e.getNewQuote,r=e.getPreviousQuote,o=e.bigScreen,i=t[n],s=i.text,a=i.author,u="https://twitter.com/intent/tweet?hashtags=quotes&text="+encodeURIComponent(s+"-"+a);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{id:"quote-box",children:[Object(l.jsxs)("blockquote",{id:"text",children:[Object(l.jsx)(f.a,{}),Object(l.jsx)("p",{id:"quote",children:s}),Object(l.jsx)(f.b,{}),Object(l.jsx)("cite",{id:"author",children:Object(l.jsx)("b",{children:a})})]}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("div",{className:"icons",children:Object(l.jsx)("a",{className:"quote-btn",href:u,target:"_blank",rel:"noreferrer",children:"Tweet This"})}),Object(l.jsxs)("div",{id:"changeQuote-btn",children:[Object(l.jsx)("button",{id:"prev-quote",className:"quote-btn",onClick:r,children:"".concat(o?"Previous Quote":"Previous")}),Object(l.jsx)("button",{id:"new-quote",className:"quote-btn",onClick:c,children:"".concat(o?" Next Quote":"Next")})]})]})]}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("a",{href:"mailto:croy4744@gmail.com",children:Object(l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/77880663?v=4",alt:"Chandan Roy"})}),Object(l.jsx)("p",{children:Object(l.jsx)("u",{children:"Designed by Chandan Roy on 29.04.2021"})})," ",Object(l.jsx)("p",{children:Object(l.jsxs)("a",{href:"https://github.com/croy47/random_quotes_machine",target:"_blank",rel:"noreferrer",children:[" ","Source Code"]})})]})]})},m=function(){return Object(l.jsx)("div",{className:"loader"})};var E=function(){return p().loading?Object(l.jsx)(m,{}):Object(l.jsx)(v,{})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{children:Object(l.jsx)(E,{})})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5a56e1c9.chunk.js.map