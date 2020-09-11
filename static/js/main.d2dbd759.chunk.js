(this["webpackJsonpspotify-clone-app"]=this["webpackJsonpspotify-clone-app"]||[]).push([[0],{47:function(e,a,t){e.exports=t(67)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=(t(52),t(10)),i=(t(53),t(54),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9bba7f61f73f456f847ae45edaa1c202","&redirect_uri=").concat("https://andrewtclin.github.io/spotify-clone/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var s=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif",alt:""}),l.a.createElement("a",{href:i},"LOGIN WITH SPOTIFY"))};t(55),t(56),t(57);var m=function(e){var a=e.title,t=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},t&&l.a.createElement(t,{className:"sidebarOption_icon"}),t?l.a.createElement("h4",null,a):l.a.createElement("p",null,a))},u=t(26),d=t.n(u),E=t(19),p=t.n(E),f=t(31),v=t.n(f),y=Object(n.createContext)(),h=function(e){var a=e.initialState,t=e.reducer,r=e.children;return l.a.createElement(y.Provider,{value:Object(n.useReducer)(t,a)},r)},_=function(){return Object(n.useContext)(y)},b=function(){var e,a=_(),t=Object(o.a)(a,2),n=t[0].playlists;t[1];return l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar_logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),l.a.createElement(m,{Icon:d.a,title:"Home"}),l.a.createElement(m,{Icon:p.a,title:"Search"}),l.a.createElement(m,{Icon:v.a,title:"Your Library"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar_title"},"PLAYLIST"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(m,{title:e.name})})))},g=(t(63),t(81));var N=function(){var e,a=_(),t=Object(o.a)(a,2),n=t[0].user;return t[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header_left"},l.a.createElement(p.a,null),l.a.createElement("input",{placeholder:"Search for Artist, Songs, or Podcasts",type:"text"})),l.a.createElement("div",{className:"header_right"},l.a.createElement(g.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),l.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))};t(64);var S=function(e){var a=e.track;return l.a.createElement("div",{className:"songRow"},l.a.createElement("img",{className:"songRow_album",src:a.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow_info"},l.a.createElement("h1",null,a.name),l.a.createElement("p",null,a.artists.map((function(e){return e.name})).join(", ")," -"," ",a.album.name)))},w=t(32),O=t.n(w),k=t(33),j=t.n(k),T=t(34),I=t.n(T);t(65);var L=function(e){var a=e.spotify,t=_(),n=Object(o.a)(t,2),r=n[0].discover_weekly;return n[1],l.a.createElement("div",{className:"body"},l.a.createElement(N,{spotify:a}),l.a.createElement("div",{className:"body_info"},l.a.createElement("img",{src:null===r||void 0===r?void 0:r.images[0].url,alt:""}),l.a.createElement("div",{className:"body_infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover Weekly"),l.a.createElement("p",null,null===r||void 0===r?void 0:r.description),l.a.createElement("p",{style:{color:"red"}},"Sorry! This Discover Weekly is specially designed for Andrew Lin!"),l.a.createElement("p",{style:{color:"red"}},"\u4e0d\u597d\u610f\u601d! \u9019\u500bSpotify Clone\u7684Discover Weekly\u662f\u7279\u5225\u7d66\u81ea\u5df1\u6253\u9020!"))),l.a.createElement("div",{className:"body_songs"},l.a.createElement("div",{className:"body_icons"},l.a.createElement(O.a,{className:"body_shuffle"}),l.a.createElement(j.a,{fontSize:"large"}),l.a.createElement(I.a,null)),null===r||void 0===r?void 0:r.tracks.items.map((function(e){return l.a.createElement(S,{track:e.track})}))))},P=(t(66),t(37)),R=t.n(P),W=t(36),Y=t.n(W),x=t(38),C=t.n(x),A=t(35),U=t.n(A),D=t(39),z=t.n(D),K=t(79),M=t(80),V=t(40),B=t.n(V),H=t(41),J=t.n(H);var F=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer_left"},l.a.createElement("img",{className:"footer_albumLogo",src:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Usher_-_Confessions_album_cover.jpg/220px-Usher_-_Confessions_album_cover.jpg",alt:""}),l.a.createElement("div",{className:"footer_songInfo"},l.a.createElement("h4",null,"Yeah!"),l.a.createElement("p",null,"Usher"))),l.a.createElement("div",{className:"footer_center"},l.a.createElement(U.a,{className:"footer_green"}),l.a.createElement(Y.a,{className:"footer_icon"}),l.a.createElement(R.a,{fontSize:"large",className:"footer_icon"}),l.a.createElement(C.a,{className:"footer_icon"}),l.a.createElement(z.a,{className:"footer_green"})),l.a.createElement("div",{className:"footer_right"},l.a.createElement(K.a,{container:!0,spacing:2},l.a.createElement(K.a,{item:!0},l.a.createElement(B.a,null)),l.a.createElement(K.a,{item:!0},l.a.createElement(J.a,null)),l.a.createElement(K.a,{item:!0,xs:!0},l.a.createElement(M.a,null)))))};var G=function(e){var a=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player_body"},l.a.createElement(b,null),l.a.createElement(L,{spotify:a})),l.a.createElement(F,null))},Q=t(42),X=new(t.n(Q).a);var Z=function(){var e=_(),a=Object(o.a)(e,2),t=a[0],r=(t.user,t.token),c=a[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,a){var t=a.split("=");return e[t[0]]=decodeURIComponent(t[1]),e}),{});window.location.hash="";var a=e.access_token;a&&(c({type:"SET_TOKEN",payload:a}),X.setAccessToken(a),X.getMe().then((function(e){c({type:"SET_USER",payload:e})})),X.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",payload:e})})),X.getPlaylist("37i9dQZEVXcMhzsW0va913").then((function(e){return c({type:"SET_DISCOVER_WEEKLY",payload:e})})))}),[]),l.a.createElement("div",{className:"app"},r?l.a.createElement(G,{spotify:X}):l.a.createElement(s,null))},$=t(9),q=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:a.payload});case"SET_TOKEN":return Object($.a)(Object($.a)({},e),{},{token:a.payload});case"SET_PLAYLISTS":return Object($.a)(Object($.a)({},e),{},{playlists:a.payload});case"SET_DISCOVER_WEEKLY":return Object($.a)(Object($.a)({},e),{},{discover_weekly:a.payload});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:q},l.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d2dbd759.chunk.js.map