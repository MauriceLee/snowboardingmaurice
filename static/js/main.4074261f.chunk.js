(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/img1.9895bfa4.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/img2.66c81c45.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/img3.157a281a.jpg"},33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),c=a(16),i=a(14),u=a(5),s=a(6),m=a(8),d=a(7),p=a(9),h=a(51),b=a(52),E=a(53),f=a(58),j=(a(38),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(b.a,{className:"row no-gutters"},r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(c.b,{to:"/snowboardingmaurice/"},r.a.createElement(f.a,{variant:"outline-primary",block:!0},"Home"))),r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(c.b,{to:"/Todolist"},r.a.createElement(f.a,{variant:"outline-primary",block:!0},"Todolist")))))}}]),t}(n.Component)),O=a(54),y=(a(47),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(O.a,{fluid:!0},r.a.createElement("h1",null,"SnowBoarding For Life"),r.a.createElement("p",null,r.a.createElement("br",null),"I am a engineer from taiwan.",r.a.createElement("br",null),"Named Maurice.",r.a.createElement("br",null),"Someone likes snowboarding very much.",r.a.createElement("br",null),"Hope one day I can go to Niseko in Japan Hokkaido.",r.a.createElement("br",null),"So I build this website and a Todolist program to help me to get my dream.")))}}]),t}(n.Component)),v=a(56),k=a(57),w=a(28),g=a.n(w),N=a(29),x=a.n(N),T=a(30),C=a.n(T),I=a(55),S=(a(48),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={error:null,isLoaded:!1,weather:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/forecast?q=Niseko,JP&APPID=c674981b3e07e38b9b49ac5b4b480167&units=metric").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,weather:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.weather;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement(I.a,null,r.a.createElement("tr",null,r.a.createElement("td",null,"Country"),r.a.createElement("td",null,n.city.country)),r.a.createElement("tr",null,r.a.createElement("td",null,"city"),r.a.createElement("td",null,n.city.name)),r.a.createElement("tr",null,r.a.createElement("td",null,"weather"),r.a.createElement("td",null,n.list[0].weather[0].main)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temperature"),r.a.createElement("td",null,n.list[0].main.temp))):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),L=(a(49),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(k.a,null,r.a.createElement(k.a.Img,{variant:"top",src:g.a}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{className:"cardtitle"},"About Niseko United"),r.a.createElement(k.a.Text,null,"Niseko United is comprised of four resorts on the one mountain, Niseko Annupuri (1,308m).",r.a.createElement("br",null),r.a.createElement("br",null),"100km south of Sapporo, Niseko Annupuri is a part of the Niseko-Shakotan-Otaru Kaigan Quasi-National Park and is the most eastern park of the Niseko Volcanic Group.",r.a.createElement("br",null),r.a.createElement("br",null),"Seasonal winds from the Eurasian continent pick up moisture over the warm currents of the Sea of Japan to from snow clouds and in turn some of the driest, lightest powder in the world.",r.a.createElement("br",null),r.a.createElement("br",null),"With its rich variety of terrain and beautiful winter woods, Niseko offers an unforgettable experience for all levels of skier/snowborder."))),r.a.createElement(k.a,{className:"text-center"},r.a.createElement(k.a.Img,{variant:"top",src:x.a}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{className:"cardtitle"},"Current Weather"),r.a.createElement(S,null),r.a.createElement(k.a.Title,{className:"cardtitle"},r.a.createElement("br",null),r.a.createElement("br",null),"Website Link"),r.a.createElement(f.a,{href:"http://www.niseko.ne.jp",variant:"primary",size:"lg"},"Push Me"))),r.a.createElement(k.a,{className:"text-center"},r.a.createElement(k.a.Img,{variant:"top",src:C.a}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{className:"cardtitle"},"Niseko United PV 2018"),r.a.createElement("iframe",{title:"NISEKO UNITED PV 2018",src:"https://www.youtube.com/embed/G_qFhknHEiY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))}}]),t}(n.Component)),P=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(L,null))}}]),t}(n.Component),D=a(32),B=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todos;return r.a.createElement(h.a,null,r.a.createElement("h1",null,"\u5f85\u8fa6\u4e8b\u9805\u6e05\u55ae"),r.a.createElement("h4",null,"\u5269\u9918\u6578\u76ee\uff1a",e.length))}}]),t}(n.Component),J=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos;return r.a.createElement(h.a,null,r.a.createElement("ol",null,t.map(function(t,a){return r.a.createElement("li",{key:t.id,onClick:function(){return e.props.remove(t.id)}},t.text)})))}}]),t}(n.Component),K=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).createTodo=function(){e.state.text&&(e.props.createTodo(e.state.text),e.setState({text:""}))},e.state={text:""},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onInputChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleKeyDown",value:function(e){e.target.value&&13===e.keyCode&&this.createTodo()}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("input",{type:"text",onChange:function(t){return e.onInputChange(t)},value:this.state.text,onKeyDown:function(t){return e.handleKeyDown(t)}}),r.a.createElement("button",{onClick:this.createTodo},"\u65b0\u589e"))}}]),t}(n.Component),A=function(e){function t(){var e;Object(u.a)(this,t);return(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={todos:[{id:0,text:"\u7bc4\u4f8b"}],startId:1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"createTodo",value:function(e){this.setState({todos:[].concat(Object(D.a)(this.state.todos),[{id:this.state.startId,text:e}]),startId:this.state.startId+1})}},{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter(function(t){return t.id!==e})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,{todos:this.state.todos}),r.a.createElement("br",null),r.a.createElement(K,{createTodo:function(t){return e.createTodo(t)}}),r.a.createElement("br",null),r.a.createElement(J,{todos:this.state.todos,remove:function(t){return e.removeTodo(t)}}))}}]),t}(n.Component),H=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/snowboardingmaurice/",component:P}),r.a.createElement(i.a,{path:"/Todolist",component:A}))}}]),t}(n.Component);o.a.render(r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(H,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4074261f.chunk.js.map