(this["webpackJsonpfootball-app-front"]=this["webpackJsonpfootball-app-front"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);for(var r=n(0),c=n(1),a=n.n(c),o=n(4),s=n.n(o),j=(n(16),n(2)),_=function(e){var t=e.team_one_score;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{className:"teamCard_teamScore",children:t})})},m=Object(j.b)((function(e){return{team_one_score:e.team_one_score}}))(_),u=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(r.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},i=Object(j.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_ONE"})},onDecrement:function(){return e({type:"DEC_TEAM_ONE"})}}}))(u),l=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(r.jsx)(m,{}),Object(r.jsx)(i,{})]})},b={page:"GenerateMatch",team_one_score:0,team_two_score:0,team_one_name:"Team 1",team_two_name:"Team 2",teams_size:10,players:["Katara","Ang","Apa","Sokka","Momo","Pabu","Iroh","Azula","Zuko","Toph"],team_one_players:[],team_two_players:[]},O=function(e){var t=e.name;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"teamCard_playerName",children:Object(r.jsx)("p",{children:t})})})},d=function(e){var t=e.team_one_players;return Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(O,{name:e},e)}))})},h=Object(j.b)((function(e){return{team_one_players:e.team_one_players}}))(d),x=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"teamCard_container",children:[Object(r.jsx)("h2",{className:"teamCard_teamName",children:b.team_one_name}),Object(r.jsx)(h,{}),Object(r.jsx)(l,{})]})})},f=function(e){var t=e.team_two_players;return Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(O,{name:e},e)}))})},p=Object(j.b)((function(e){return{team_two_players:e.team_two_players}}))(f),E=function(e){var t=e.team_two_score;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{className:"teamCard_teamScore",children:t})})},N=Object(j.b)((function(e){return{team_two_score:e.team_two_score}}))(E),C=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(r.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},T=Object(j.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_TWO"})},onDecrement:function(){return e({type:"DEC_TEAM_TWO"})}}}))(C),g=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(r.jsx)(N,{}),Object(r.jsx)(T,{})]})},w=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"teamCard_container",children:[Object(r.jsx)("h2",{className:"teamCard_teamName",children:b.team_two_name}),Object(r.jsx)(p,{}),Object(r.jsx)(g,{})]})})},y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(w,{})]})},S=function(e){var t=e.onClick;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{className:"doButton",onClick:t,children:"Generate Teams"})})},v=Object(j.b)(null,(function(e){return{onClick:function(){return e({type:"GENERATE_TEAMS"})}}}))(S),F=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{className:"title",children:"Teemz"})}),Object(r.jsx)(v,{}),Object(r.jsx)(y,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},M=n(3),D=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_one_score:e.team_one_score+1})},I=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_one_score:e.team_one_score>0?e.team_one_score-1:e.team_one_score})},k=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_two_score:e.team_two_score+1})},B=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_two_score:e.team_two_score>0?e.team_two_score-1:e.team_two_score})},z=b.players,G=[],L=[],R=[];G.length<b.teams_size;){var W=Math.floor(Math.random()*z.length);G.push(b.players[W]),z.splice(W,1)}for(var X=0;X<b.teams_size;X+=1)L.length>=R.length?R.push(G[X]):L.push(G[X]);var P=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_one_players:L,team_two_players:R})},J=function(e,t){switch(t.type){case"INC_TEAM_ONE":return D(e);case"DEC_TEAM_ONE":return I(e);case"INC_TEAM_TWO":return k(e);case"DEC_TEAM_TWO":return B(e);case"GENERATE_TEAMS":return P(e);default:return e}},U=n(5),V=Object(U.b)(J,b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j.a,{store:V,children:Object(r.jsx)(F,{})})}),document.getElementById("root")),A()}},[[23,1,2]]]);
//# sourceMappingURL=main.c42177af.chunk.js.map