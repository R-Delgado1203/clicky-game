(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",clicked:!1},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",clicked:!1},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",clicked:!1},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",clicked:!1},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",clicked:!1},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",clicked:!1},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",clicked:!1},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",clicked:!1},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",clicked:!1},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",clicked:!1},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",clicked:!1},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",clicked:!1}]},,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(2),c=n.n(o),r=(n(15),function(){return a.a.createElement("div",{className:"jumbotron jumbotron-fluid"},a.a.createElement("div",{className:"container text-center"},a.a.createElement("h1",{className:"display-4"},"React Clicky Game!"),a.a.createElement("p",{className:"lead"},"Click Each Image Once To Test Your Memory!")))}),s=n(3),l=n(4),m=n(7),d=n(5),g=n(8),u=(n(17),function(e){return a.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},a.a.createElement("img",{id:e.name,src:e.image,alt:e.name}))}),p=n(6),k=(n(19),function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={images:p,message:"",score:0,topScore:0},n.handleClick=function(e,t){var i=n.state.images;if(t)return i.forEach(function(e,t){i[t].clicked=!1}),n.setState({image:i.sort(function(){return Math.random()-.5}),message:"You Guessed Incorrectly!",score:0});i.forEach(function(t,n){e===t.id&&(i[n].clicked=!0)});var a=n.state,o=a.topScore,c=a.score+1,r=c>o?c:o;return n.setState({image:i.sort(function(){return Math.random()-.5}),message:"You Guessed Correctly!",score:c,topScore:r})},n}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container-fluid mainCardContainer"},a.a.createElement("div",{className:"gameMessage text-center row"},a.a.createElement("div",{className:"text-right col-6"},this.state.message," "),a.a.createElement("div",{className:"text-left col-6"},"Score: ",this.state.score," | Top Score: ",this.state.topScore)),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},this.state.images.map(function(t){return a.a.createElement(u,{key:t.id,id:t.id,name:t.name,clicked:t.clicked,image:t.image,handleClick:e.handleClick})}))))}}]),t}(i.Component)),f=(n(21),function(){return a.a.createElement("div",{className:"container-fluid mainContainer"},a.a.createElement(r,null),a.a.createElement(k,null))}),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/clicky-game","/service-worker.js");v?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):h(e)})}}()}],[[9,2,1]]]);
//# sourceMappingURL=main.6f94c903.chunk.js.map