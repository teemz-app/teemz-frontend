(this["webpackJsonpfootball-app-front"]=this["webpackJsonpfootball-app-front"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n.n(r),c=n(5),o=n.n(c),i=(n(18),n(3)),m=function(){var e=Object(i.c)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{className:"doButton",onClick:function(){e({type:"GENERATE_TEAMS"}),e({type:"NAV_TO_GENERATE"})},children:"Generate Teams"})})},j=function(e){var t=e.team_one_score;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("p",{className:"teamCard_teamScore",children:t})})},u=Object(i.b)((function(e){return{team_one_score:e.team_one_score}}))(j),l=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(s.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},_=Object(i.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_ONE"})},onDecrement:function(){return e({type:"DEC_TEAM_ONE"})}}}))(l),b=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(s.jsx)(u,{}),Object(s.jsx)(_,{})]})},d={page:"menu",loaded:!1,team_one_score:0,team_two_score:0,team_one_name:"Team 1",team_two_name:"Team 2",teams_size:10,players:[{id:1,name:"Sokka",wins:2,losses:2},{id:2,name:"Ang",wins:1,losses:0},{id:3,name:"Appa",wins:0,losses:1},{id:4,name:"Momo",wins:5,losses:15},{id:5,name:"Iroh",wins:0,losses:0},{id:6,name:"Katara",wins:0,losses:0},{id:7,name:"Pabu",wins:0,losses:0},{id:8,name:"Azula",wins:0,losses:0},{id:9,name:"Zuko",wins:0,losses:0},{id:10,name:"Toph",wins:0,losses:0},{id:11,name:"Mako",wins:0,losses:0},{id:12,name:"Bolin",wins:0,losses:0},{id:13,name:"Lin Beifong",wins:0,losses:0},{id:14,name:"Jinora",wins:0,losses:0},{id:15,name:"Tenzin",wins:0,losses:0},{id:16,name:"Asami",wins:0,losses:0},{id:17,name:"Kyoshi",wins:0,losses:0},{id:18,name:"Tui",wins:0,losses:0},{id:19,name:"Hei Bai",wins:0,losses:0},{id:20,name:"Raava",wins:0,losses:0},{id:21,name:"Vatu",wins:0,losses:0},{id:22,name:"Zhu Li",wins:0,losses:0},{id:23,name:"Raiko",wins:0,losses:0},{id:24,name:"Iroh II",wins:0,losses:0}],team_one_players:[],team_two_players:[]},O=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"teamCard_playerName",children:Object(s.jsx)("p",{children:e.name})})})},h=function(e){var t=e.team_one_players;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)(O,{name:e.name},e)}))})},f=Object(i.b)((function(e){return{team_one_players:e.team_one_players}}))(h),x=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"teamCard_container",children:[Object(s.jsx)("h2",{className:"teamCard_teamName",children:d.team_one_name}),Object(s.jsx)(f,{}),Object(s.jsx)(b,{})]})})},w=function(e){var t=e.team_two_players;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)(O,{name:e.name},e)}))})},p=Object(i.b)((function(e){return{team_two_players:e.team_two_players}}))(w),E=function(e){var t=e.team_two_score;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("p",{className:"teamCard_teamScore",children:t})})},N=Object(i.b)((function(e){return{team_two_score:e.team_two_score}}))(E),T=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(s.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},C=Object(i.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_TWO"})},onDecrement:function(){return e({type:"DEC_TEAM_TWO"})}}}))(T),g=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(s.jsx)(N,{}),Object(s.jsx)(C,{})]})},y=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"teamCard_container",children:[Object(s.jsx)("h2",{className:"teamCard_teamName",children:d.team_two_name}),Object(s.jsx)(p,{}),Object(s.jsx)(g,{})]})})},v=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(x,{}),Object(s.jsx)(y,{})]})},A=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(v,{})]})},S=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{className:"title",children:"Teemz"})}),Object(s.jsx)(A,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))},M=n(2),I=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_one_score:e.team_one_score+1})},k=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_one_score:e.team_one_score>0?e.team_one_score-1:e.team_one_score})},D=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_two_score:e.team_two_score+1})},B=function(e){return Object(M.a)(Object(M.a)({},e),{},{team_two_score:e.team_two_score>0?e.team_two_score-1:e.team_two_score})},R=function(e){return Object(M.a)(Object(M.a)({},e),{},{page:"generate"})},z=function(e){var t=e[0],n=e[1],s=[];s.push(t);var r=[];r.push(n);for(var a=2;a<e.length;a+=1)a%2===0?r.push(e[a]):s.push(e[a]);return{team_one_players:s,team_two_players:r}},G=n(12),L=function(e){for(var t=e.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),s=[e[n],e[t]];e[t]=s[0],e[n]=s[1]}return e},P=function(e){return 0===e.wins?-e.losses:e.wins/(e.wins+e.losses)},V=function(e,t){var n=P(e),s=P(t);return n<s?1:n>s?-1:0},W=function(e,t){for(var n=Object(G.a)(L(t)),s=[],r=0;r<e;r+=1)s.push(n[r]);return s.sort(V)},J=function(e){var t=e.players,n=e.teams_size,s=W(n,t),r=z(s);return Object(M.a)(Object(M.a)({},e),{},{team_one_players:r.team_one_players,team_two_players:r.team_two_players})},K=function(e,t){switch(t.type){case"INC_TEAM_ONE":return I(e);case"DEC_TEAM_ONE":return k(e);case"INC_TEAM_TWO":return D(e);case"DEC_TEAM_TWO":return B(e);case"NAV_TO_GENERATE":return R(e);case"GENERATE_TEAMS":return J(e);default:return e}},X=n(4),Z=n(11),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,U=Object(X.d)(K,d,H(Object(X.a)(Z.a)));o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(i.a,{store:U,children:Object(s.jsx)(S,{})})}),document.getElementById("root")),F()}},[[25,1,2]]]);
//# sourceMappingURL=main.3eec5b62.chunk.js.map