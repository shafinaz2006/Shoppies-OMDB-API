(this["webpackJsonpshoppies-omdb-api"]=this["webpackJsonpshoppies-omdb-api"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(17),o=n.n(c),s=(n(23),n(24),n(25),n(3)),m=n(6),r=n(4),l=n(18),h=n.n(l),u=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),o=Object(r.a)(c,2),l=o[0],u=o[1],d=Object(a.useState)([]),b=Object(r.a)(d,2),j=b[0],v=b[1],O=Object(a.useState)(!1),f=Object(r.a)(O,2),p=f[0],N=f[1],_=Object(a.useState)([]),g=Object(r.a)(_,2),x=g[0],S=g[1];Object(a.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("nominations"));e&&S(Object(m.a)(e))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("nominations",JSON.stringify(x))}),[x]);var T=function(e){h.a.get("".concat("https://www.omdbapi.com/?apikey=").concat("4bb50978","&s=").concat(e)).then((function(e){if(e.data.Search){var t=e.data.Search.map((function(e){return e.imdbID})),n=e.data.Search.filter((function(e,n){var a=e.imdbID;return!t.includes(a,n+1)})).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{nominated:!1})}));v(Object(m.a)(n)),N(!1)}else N(!0),v([])})).catch((function(e){return console.log("error in movie data",e)}))};return{searchTitleTemp:n,searchTitle:l,movieList:j,movieNotFound:p,nominations:x,handleSearch:function(e){i(e.target.value)},handleKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),u(n),T(n))},handleSubmit:function(e){e.preventDefault(),u(n),T(n)},handleAddNominate:function(e,t){S((function(e){return[].concat(Object(m.a)(e),[t])}));var n=j.map((function(e){return e.imdbID===t.imdbID?Object(s.a)(Object(s.a)({},e),{},{nominated:!0}):Object(s.a)({},e)}));v(n)},handleRemoveNominate:function(e,t){var n=x.filter((function(e){return e.imdbID!==t.imdbID}));S(Object(m.a)(n));var a=j.map((function(e){return e.imdbID===t.imdbID?Object(s.a)(Object(s.a)({},e),{},{nominated:!1}):Object(s.a)({},e)}));v(a)}}},d=n(0),b=function(e){var t=e.searchTitleTemp,n=e.handleSearch,a=e.handleKeyPress,i=e.handleSubmit;return Object(d.jsxs)("form",{className:"home__movieSearch",onSubmit:i,children:[Object(d.jsxs)("label",{className:"input-label",htmlFor:"movieTitle",children:["Movie title"," "]}),Object(d.jsx)("input",{className:"input input--search",name:"movieTitle",placeholder:"movie title",value:t,onKeyPress:a,onChange:n}),Object(d.jsx)("input",{className:"button button--search",type:"submit",value:"Search"})]})},j=n.p+"static/media/star.ecf2636e.svg",v=function(e){var t=e.movie,n=e.buttonName,a=e.handleOnClick;return Object(d.jsxs)("li",{className:"home__item",children:[Object(d.jsxs)("span",{className:"home__movieName",children:[Object(d.jsx)("img",{className:"home__starIcon",src:j,alt:"star icon"}),t.Title," (",t.Year,")"]}),Object(d.jsx)("button",{className:"button button--nominate",disabled:t.nominated,onClick:function(e){return a(e,t)},children:n})]})},O=function(e){var t=e.movieNotFound,n=e.movieList,a=e.searchTitle,i=e.handleAddNominate;return Object(d.jsxs)("div",{className:"home__movieResult",children:[t||n<=0?Object(d.jsx)("p",{className:"home__messageHeading",children:t?'No movie found for "'.concat(a,'"'):"Search any movie!!"}):"",n.length>0?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"home__subHeading home__subHeading--movieResult",children:['Results for "',a,'"']}),Object(d.jsx)("ul",{className:"home__list",children:n.map((function(e){return Object(d.jsx)(v,{movie:e,buttonName:"Nominate",handleOnClick:i},e.imdbID)}))})]}):""]})},f=function(e){var t=e.nominations;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"home__subHeading home__subHeading--movieResult",children:"Nominations"}),t.length>=5?Object(d.jsxs)("p",{className:"home__messageHeading home__messageHeading--nominationsMore",children:["You have nominated ",t.length," movies!!!"]}):""]})},p=function(e){var t=e.nominations,n=e.handleRemoveNominate;return Object(d.jsx)("div",{className:"home__movieResult",children:t.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{nominations:t}),Object(d.jsx)("ul",{className:"home__list",children:t.map((function(e){return Object(d.jsx)(v,{movie:e,buttonName:"Remove",handleOnClick:n},e.imdbID)}))})]}):Object(d.jsx)("div",{className:"home__messageHeading",children:Object(d.jsx)("p",{children:" Nominate your favourite movie!! "})})})},N=function(){var e=u(),t=e.searchTitleTemp,n=e.searchTitle,a=e.movieList,i=e.movieNotFound,c=e.nominations,o=e.handleSearch,s=e.handleKeyPress,m=e.handleSubmit,r=e.handleAddNominate,l=e.handleRemoveNominate;return Object(d.jsxs)("section",{className:"home",children:[Object(d.jsx)("h1",{className:"home__heading",children:"The Shoppies"}),Object(d.jsx)(b,{searchTitleTemp:t,handleSearch:o,handleKeyPress:s,handleSubmit:m}),Object(d.jsxs)("div",{className:"home__movieInfo",children:[Object(d.jsx)(O,{movieList:a,movieNotFound:i,searchTitle:n,handleAddNominate:r}),Object(d.jsx)(p,{nominations:c,handleRemoveNominate:l})]})]})};var _=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(N,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.0b17066b.chunk.js.map