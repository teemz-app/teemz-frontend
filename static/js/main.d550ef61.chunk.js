(this["webpackJsonpfootball-app-front"]=this["webpackJsonpfootball-app-front"]||[]).push([[0],{32:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(6),o=n.n(c),i=(n(32),n(3)),u=function(){var e=Object(i.c)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"doButton",onClick:function(){e({type:"GENERATE_TEAMS"}),e({type:"NAV_TO_GENERATE"})},children:"Generate Teams"})})},m=function(e){var t=e.team_one_score;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{className:"teamCard_teamScore",children:t})})},j=Object(i.b)((function(e){return{team_one_score:e.team_one_score}}))(m),l=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},_=Object(i.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_ONE"})},onDecrement:function(){return e({type:"DEC_TEAM_ONE"})}}}))(l),d=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(a.jsx)(j,{}),Object(a.jsx)(_,{})]})},b={page:"menu",loaded:!1,team_one_score:0,team_two_score:0,team_one_name:"Team 1",team_two_name:"Team 2",teams_size:10,players:[{id:1,name:"Sokka",wins:2,losses:2},{id:2,name:"Ang",wins:1,losses:0},{id:3,name:"Appa",wins:0,losses:1},{id:4,name:"Momo",wins:5,losses:15},{id:5,name:"Iroh",wins:0,losses:0},{id:6,name:"Katara",wins:0,losses:0},{id:7,name:"Pabu",wins:0,losses:0},{id:8,name:"Azula",wins:0,losses:0},{id:9,name:"Zuko",wins:0,losses:0},{id:10,name:"Toph",wins:0,losses:0},{id:11,name:"Mako",wins:0,losses:0},{id:12,name:"Bolin",wins:0,losses:0},{id:13,name:"Lin Beifong",wins:0,losses:0},{id:14,name:"Jinora",wins:0,losses:0},{id:15,name:"Tenzin",wins:0,losses:0},{id:16,name:"Asami",wins:0,losses:0},{id:17,name:"Kyoshi",wins:0,losses:0},{id:18,name:"Tui",wins:0,losses:0},{id:19,name:"Hei Bai",wins:0,losses:0},{id:20,name:"Raava",wins:0,losses:0},{id:21,name:"Vatu",wins:0,losses:0},{id:22,name:"Zhu Li",wins:0,losses:0},{id:23,name:"Raiko",wins:0,losses:0},{id:24,name:"Iroh II",wins:0,losses:0}],team_one_players:[],team_two_players:[]},O=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"teamCard_playerName",children:Object(a.jsx)("p",{children:e.name})})})},h=function(e){var t=e.team_one_players;return Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)(O,{name:e.name},e.id)}))})},p=Object(i.b)((function(e){return{team_one_players:e.team_one_players}}))(h),f=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"teamCard_container",children:[Object(a.jsx)("h2",{className:"teamCard_teamName",children:b.team_one_name}),Object(a.jsx)(p,{}),Object(a.jsx)(d,{})]})})},x=function(e){var t=e.team_two_players;return Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)(O,{name:e.name},e.id)}))})},w=Object(i.b)((function(e){return{team_two_players:e.team_two_players}}))(x),E=function(e){var t=e.team_two_score;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{className:"teamCard_teamScore",children:t})})},N=Object(i.b)((function(e){return{team_two_score:e.team_two_score}}))(E),g=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},y=Object(i.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_TWO"})},onDecrement:function(){return e({type:"DEC_TEAM_TWO"})}}}))(g),C=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(a.jsx)(N,{}),Object(a.jsx)(y,{})]})},T=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"teamCard_container",children:[Object(a.jsx)("h2",{className:"teamCard_teamName",children:b.team_two_name}),Object(a.jsx)(w,{}),Object(a.jsx)(C,{})]})})},v=n(20),A=n(21),S=n(26),M=n(25),F=n.p+"static/media/loadingIcon.04f89c1e.gif",I=function(e){Object(S.a)(n,e);var t=Object(M.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.handleLoad)()}},{key:"render",value:function(){var e=this.props,t=e.children;return e.loaded?t:Object(a.jsxs)("div",{className:"teamCard_container",children:[Object(a.jsx)("p",{className:"title",children:"Loading..."}),Object(a.jsx)("img",{className:"loadingIcon",src:F,alt:"CGI football spinning"})]})}}]),n}(s.Component),k=n(22),D=n.n(k).a.create({baseURL:"https://peaceful-sea-21894.herokuapp.com/api/",headers:{Accept:"application/json"}}),L=Object(i.b)((function(e){return{loaded:e.loaded}}),(function(e){return{handleLoad:function(){return e((function(e){D.get("/players").then((function(t){e({type:"PLAYERS_LOADED",payload:t.data.data})}))}))}}}))(I),B=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(L,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(T,{})]})})},R=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{}),Object(a.jsx)(B,{})]})},G=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u,{})})},P=function(e){switch(e.page){case"generate":return Object(a.jsx)(R,{});case"menu":default:return Object(a.jsx)(G,{})}},V=Object(i.b)((function(e){return{page:e.page}}))(P),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},U=n(2),W=function(e){return Object(U.a)(Object(U.a)({},e),{},{team_one_score:e.team_one_score+1})},J=function(e){return Object(U.a)(Object(U.a)({},e),{},{team_one_score:e.team_one_score>0?e.team_one_score-1:e.team_one_score})},K=function(e){return Object(U.a)(Object(U.a)({},e),{},{team_two_score:e.team_two_score+1})},X=function(e){return Object(U.a)(Object(U.a)({},e),{},{team_two_score:e.team_two_score>0?e.team_two_score-1:e.team_two_score})},Y=function(e){return Object(U.a)(Object(U.a)({},e),{},{page:"generate"})},Z=function(e){var t=e[0],n=e[1],a=[];a.push(t);var s=[];s.push(n);for(var r=2;r<e.length;r+=1)r%2===0?s.push(e[r]):a.push(e[r]);return{team_one_players:a,team_two_players:s}},H=n(24),q=function(e){for(var t=e.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},Q=function(e){return 0===e.wins?-e.losses:e.wins/(e.wins+e.losses)},$=function(e,t){var n=Q(e),a=Q(t);return n<a?1:n>a?-1:0},ee=function(e,t){for(var n=Object(H.a)(q(t)),a=[],s=0;s<e;s+=1)a.push(n[s]);return a.sort($)},te=function(e){var t=e.players,n=e.teams_size,a=ee(n,t),s=Z(a);return Object(U.a)(Object(U.a)({},e),{},{team_one_players:s.team_one_players,team_two_players:s.team_two_players})},ne=function(e,t){switch(t.type){case"INC_TEAM_ONE":return W(e);case"DEC_TEAM_ONE":return J(e);case"INC_TEAM_TWO":return K(e);case"DEC_TEAM_TWO":return X(e);case"NAV_TO_GENERATE":return Y(e);case"NAV_TO_MENU":return{page:"menu"};case"PLAYERS_LOADED":return Object(U.a)(Object(U.a)({},e),{},{players:t.payload,loaded:!0});case"GENERATE_TEAMS":return te(e);default:return e}},ae=n(5),se=n(23),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.c,ce=Object(ae.d)(ne,b,re(Object(ae.a)(se.a))),oe=function(){var e=Object(i.c)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:"title",onClick:function(){return e({type:"NAV_TO_MENU"})},style:{cursor:"pointer"},children:"Teemz"})})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsxs)(i.a,{store:ce,children:[Object(a.jsx)(oe,{}),Object(a.jsx)(V,{})]})}),document.getElementById("root")),z()}},[[57,1,2]]]);
//# sourceMappingURL=main.d550ef61.chunk.js.map