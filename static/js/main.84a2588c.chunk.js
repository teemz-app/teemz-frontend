(this["webpackJsonpfootball-app-front"]=this["webpackJsonpfootball-app-front"]||[]).push([[0],{32:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(6),o=n.n(s),i=(n(32),n(2)),l=function(e){var t=e.team_one_score;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{className:"teamCard_teamScore",children:t})})},j=Object(i.b)((function(e){return{team_one_score:e.team_one_score}}))(l),u=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},m=Object(i.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_ONE"})},onDecrement:function(){return e({type:"DEC_TEAM_ONE"})}}}))(u),_=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(a.jsx)(j,{}),Object(a.jsx)(m,{})]})},d={page:"menu",loaded:!1,team_one_score:0,team_two_score:0,team_one_name:"Team 1",team_two_name:"Team 2",teams_size:10,players:[],team_one_players:[],team_two_players:[]},b=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"teamCard_playerName",children:Object(a.jsx)("p",{children:e.name})})})},O=function(e){var t=e.team_one_players;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsx)(b,{name:e.name},e.id)}))})},p=Object(i.b)((function(e){return{team_one_players:e.team_one_players}}))(O),h=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"teamCard_container",children:[Object(a.jsx)("h2",{className:"teamCard_teamName",children:d.team_one_name}),Object(a.jsx)(p,{}),Object(a.jsx)(_,{})]})})},f=function(e){var t=e.team_two_players;return Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)(b,{name:e.name},e.id)}))})},x=Object(i.b)((function(e){return{team_two_players:e.team_two_players}}))(f),y=function(e){var t=e.team_two_score;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{className:"teamCard_teamScore",children:t})})},N=Object(i.b)((function(e){return{team_two_score:e.team_two_score}}))(y),w=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:n,children:"-"}),Object(a.jsx)("button",{className:"teamCard_setScoreButton",onClick:t,children:"+"})]})})},C=Object(i.b)(null,(function(e){return{onIncrement:function(){return e({type:"INC_TEAM_TWO"})},onDecrement:function(){return e({type:"DEC_TEAM_TWO"})}}}))(w),E=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"teamCard_setScore",children:"Set Score"}),Object(a.jsx)(N,{}),Object(a.jsx)(C,{})]})},g=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"teamCard_container",children:[Object(a.jsx)("h2",{className:"teamCard_teamName",children:d.team_two_name}),Object(a.jsx)(x,{}),Object(a.jsx)(E,{})]})})},v=n(20),T=n(21),A=n(26),S=n(25),F=n.p+"static/media/loadingIcon.04f89c1e.gif",M=function(e){Object(A.a)(n,e);var t=Object(S.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.handleLoad)()}},{key:"render",value:function(){var e=this.props,t=e.children;return e.loaded?t:Object(a.jsxs)("div",{className:"teamCard_container",children:[Object(a.jsx)("p",{className:"title",children:"Loading..."}),Object(a.jsx)("img",{className:"loadingIcon",src:F,alt:"CGI football spinning"})]})}}]),n}(r.Component),k=n(22),L=n.n(k).a.create({baseURL:"https://peaceful-sea-21894.herokuapp.com/api/",headers:{Accept:"application/json"}}),D=Object(i.b)((function(e){return{loaded:e.loaded}}),(function(e){return{handleLoad:function(){return e((function(e){L.get("/players").then((function(t){e({type:"PLAYERS_LOADED",payload:t.data.data})})).then((function(){return e({type:"GENERATE_TEAMS"})}))}))}}}))(M),R=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(D,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(g,{})]})})},I=function(e){var t=e.handleClick,n=e.label;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"doButton",onClick:t,children:n})})},B=function(e){var t=e.handleClick,n=e.data;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R,{}),Object(a.jsx)(I,{handleClick:function(){t(n)},label:"Save Game!",type:"button"})]})},P=Object(i.b)((function(e){return{data:{team_one_name:e.team_one_name,team_one_score:e.team_one_score,team_two_name:e.team_two_name,team_two_score:e.team_two_score,team_one_players:e.team_one_players,team_two_players:e.team_two_players}}}),(function(e){return{handleClick:function(t){return function(e){var t=e.team_one_name,n=e.team_one_score,a=e.team_two_name,r=e.team_two_score,c=e.team_one_players,s=e.team_two_players;return function(){L.post("/games",{team_one:t,team_one_score:n,team_two:a,team_two_score:r}).then((function(){return console.log(c,n)})).then((function(){c.forEach((function(e){n>r?L.patch("/players/".concat(e.id),{name:e.name,wins:e.wins+1,losses:e.losses}):r>n&&L.patch("/players/".concat(e.id),{name:e.name,wins:e.wins,losses:e.losses+1})}))})).then((function(){s.forEach((function(e){n>r?L.patch("/players/".concat(e.id),{name:e.name,wins:e.wins+1,losses:e.losses}):r>n&&L.patch("/players/".concat(e.id),{name:e.name,wins:e.wins,losses:e.losses+1})}))}))}}(t)(e)}}}))(B),G=function(){var e=Object(i.c)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"doButton",onClick:function(){return e({type:"NAV_TO_GENERATE"})},children:"Generate Teams"})})},V=function(){var e=Object(i.c)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"doButton",onClick:function(){return e({type:"NAV_TO_PLAYERS"})},children:"See Players"})})},W=function(){return Object(a.jsxs)("nav",{className:"menu",children:[Object(a.jsx)(G,{}),Object(a.jsx)(V,{})]})},U=function(e){return 0===e.wins?-e.losses:e.wins/(e.wins+e.losses)},Y=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"playerCard_container",children:[Object(a.jsx)("h2",{className:"playerCard_playerName",children:e.name}),Object(a.jsxs)("div",{className:"playerCard_dataRow",children:[Object(a.jsx)("p",{className:"playerCard_dataLabel",children:"Wins"}),Object(a.jsx)("p",{className:"playerCard_data",children:e.wins})]}),Object(a.jsxs)("div",{className:"playerCard_dataRow",children:[Object(a.jsx)("p",{className:"playerCard_dataLabel",children:"Losses"}),Object(a.jsx)("p",{className:"playerCard_data",children:e.losses})]}),Object(a.jsxs)("div",{className:"playerCard_dataRow",children:[Object(a.jsx)("p",{className:"playerCard_dataLabel",children:"Win Rate:"}),Object(a.jsx)("p",{className:"playerCard_data playerWR",children:U(e).toFixed(2)})]})]})})},z=Object(i.b)((function(e){return{players:e.players}}))((function(e){var t=e.players;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(D,{children:[Object(a.jsx)("h1",{className:"title",children:"Main Menu"}),t.map((function(e){return Object(a.jsx)(Y,{name:e.name,wins:e.wins,losses:e.losses},e.id)}))]})})})),J=function(e){switch(e.page){case"generate":return Object(a.jsx)(P,{});case"menu":return Object(a.jsx)(W,{});case"players":return Object(a.jsx)(z,{});default:return Object(a.jsx)(W,{})}},X=Object(i.b)((function(e){return{page:e.page}}))(J),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},q=n(3),K=function(e){return Object(q.a)(Object(q.a)({},e),{},{team_one_score:e.team_one_score+1})},Q=function(e){return Object(q.a)(Object(q.a)({},e),{},{team_one_score:e.team_one_score>0?e.team_one_score-1:e.team_one_score})},Z=function(e){return Object(q.a)(Object(q.a)({},e),{},{team_two_score:e.team_two_score+1})},$=function(e){return Object(q.a)(Object(q.a)({},e),{},{team_two_score:e.team_two_score>0?e.team_two_score-1:e.team_two_score})},ee=function(e){return Object(q.a)(Object(q.a)({},e),{},{page:"generate"})},te=function(e){return Object(q.a)(Object(q.a)({},e),{},{page:"menu"})},ne=function(e){return Object(q.a)(Object(q.a)({},e),{},{page:"players"})},ae=function(e){var t=e[0],n=e[1],a=[];a.push(t);var r=[];r.push(n);for(var c=2;c<e.length;c+=1)c%2===0?r.push(e[c]):a.push(e[c]);return{team_one_players:a,team_two_players:r}},re=n(24),ce=function(e){for(var t=e.length-1;t>0;t-=1){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},se=function(e,t){var n=U(e),a=U(t);return n<a?1:n>a?-1:0},oe=function(e,t){for(var n=Object(re.a)(ce(t)),a=[],r=0;r<e;r+=1)a.push(n[r]);return a.sort(se)},ie=function(e){var t=e.players,n=e.teams_size,a=oe(n,t),r=ae(a);return Object(q.a)(Object(q.a)({},e),{},{team_one_players:r.team_one_players,team_two_players:r.team_two_players})},le=function(e,t){switch(t.type){case"INC_TEAM_ONE":return K(e);case"DEC_TEAM_ONE":return Q(e);case"INC_TEAM_TWO":return Z(e);case"DEC_TEAM_TWO":return $(e);case"NAV_TO_MENU":return te(e);case"NAV_TO_GENERATE":return ee(e);case"NAV_TO_PLAYERS":return ne(e);case"PLAYERS_LOADED":return Object(q.a)(Object(q.a)({},e),{},{players:t.payload,loaded:!0});case"GENERATE_TEAMS":return ie(e);default:return e}},je=n(5),ue=n(23),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.c,_e=Object(je.d)(le,d,me(Object(je.a)(ue.a))),de=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.page})),n=function(){return e({type:"NAV_TO_MENU"})};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{children:"players"===t?Object(a.jsx)("h1",{className:"stickyHeader",onClick:n,style:{cursor:"pointer"},children:"Main Menu"}):Object(a.jsx)("h1",{className:"title",onClick:n,style:{cursor:"pointer"},children:"Teemz"})})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsxs)(i.a,{store:_e,children:[Object(a.jsx)(de,{}),Object(a.jsx)(X,{})]})}),document.getElementById("root")),H()}},[[57,1,2]]]);
//# sourceMappingURL=main.84a2588c.chunk.js.map