(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{68:function(e,t,a){e.exports=a(83)},73:function(e,t,a){},74:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(73),a(63)),i=a(117),s=a(113),m=a(118),p=a(29),u=a(26),d=a(11),E=a(7),h=a(14),b=a(15),v=a(24),y=a(16),f=a(103),g=a(119),w=a(106),j=a(107),O=a(108),x=a(109),D=a(110),k=a(41),N=a(115),C=a(59),I=a.n(C),S=a(46),P=a.n(S),T=a(60),W=a.n(T),J=a(55),A=a.n(J),G=a(62),L=a.n(G),B=a(61),F=a.n(B),M=a(56),K=a.n(M),R=a(57),U=a.n(R),$=a(58),q=a.n($),z=(a(74),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={open:!1},a.handleToggleDrawer=a.handleToggleDrawer.bind(Object(v.a)(a)),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"handleToggleDrawer",value:function(){this.state.open?this.setState({open:!1}):this.setState({open:!0})}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"sideNav",role:"presentation",onClick:this.handleToggleDrawer,onKeyDown:this.handleToggleDrawer},r.a.createElement(p.a,null),r.a.createElement(f.a,null,r.a.createElement(p.b,{to:"/dashboard",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(g.a,{button:!0},r.a.createElement(w.a,{className:"drawer-icon"},r.a.createElement(A.a,null)),r.a.createElement(j.a,{primary:"Dashboard"}))),r.a.createElement(p.b,{to:"/jobapps",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(g.a,{button:!0},r.a.createElement(w.a,{className:"drawer-icon"},r.a.createElement(K.a,null)),r.a.createElement(j.a,{primary:"Job Applications"}))),r.a.createElement(p.b,{to:"/interviews",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(g.a,{button:!0},r.a.createElement(w.a,{className:"drawer-icon"},r.a.createElement(U.a,null)),r.a.createElement(j.a,{primary:"Interviews"}))),r.a.createElement(p.b,{to:"/jobs",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(g.a,{button:!0},r.a.createElement(w.a,{className:"drawer-icon"},r.a.createElement(q.a,null)),r.a.createElement(j.a,{primary:"Job Listings"}))),r.a.createElement(p.b,{to:"/profile",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(g.a,{button:!0},r.a.createElement(w.a,{className:"drawer-icon"},r.a.createElement(P.a,null)),r.a.createElement(j.a,{primary:"My Profile"})))));return r.a.createElement("div",null,r.a.createElement(O.a,{position:"static",className:"app-bar"},r.a.createElement(x.a,{className:"nav-toolbar"},r.a.createElement(D.a,{edge:"start",className:"menu-button",onClick:this.handleToggleDrawer,color:"inherit","aria-label":"menu"},r.a.createElement(I.a,null)),r.a.createElement(k.a,{variant:"h6"},"Dashboard"),r.a.createElement(N.a,{open:this.state.open,onOpen:this.handleToggleDrawer,onClose:this.handleToggleDrawer,className:"side-drawer"},e),r.a.createElement("div",{className:"right"},r.a.createElement(D.a,{color:"inherit","aria-label":"add"},r.a.createElement(W.a,null)),r.a.createElement(D.a,{color:"inherit","aria-label":"Notifications"},r.a.createElement(F.a,null)),r.a.createElement(D.a,{color:"inherit","aria-label":"profile"},r.a.createElement(P.a,null)),r.a.createElement(D.a,{color:"inherit","aria-label":"settings"},r.a.createElement(L.a,null))))))}}]),t}(n.Component)),H=Object(u.f)(z),Q=a(111),V=a(84),X=a(112),Y=a(116),Z=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(Q.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(Q.a,{item:!0,xs:1},r.a.createElement(Y.a,{style:{padding:"4px"},inputProps:{"aria-label":"checkbox"}})),r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(k.a,{variant:"body1",noWrap:!0},this.props.title)),r.a.createElement(Q.a,{item:!0,xs:!0},r.a.createElement(k.a,{variant:"body1",noWrap:!0},this.props.company)),r.a.createElement(Q.a,{item:!0,xs:2},r.a.createElement(k.a,{variant:"body1",noWrap:!0},this.props.status)))}}]),t}(n.Component);Z.defaultProps={};var _=Z,ee=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(g.a,null,r.a.createElement(_,{title:t.title,company:t.company,status:t.status})),e.props.divided&&a+1<e.props.jobs.length?r.a.createElement(X.a,null):null)}));return r.a.createElement(f.a,null,t)}}]),t}(n.Component);ee.defaultProps={jobs:[],widget:!1,divided:!1};var te=ee,ae=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e={year:"numeric",month:"short",day:"numeric"},t=this.props.date instanceof Date?this.props.date.toLocaleDateString("en-EN",e):new Date(this.props.date).toLocaleDateString("en-EN",e);return r.a.createElement(Q.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(Q.a,{item:!0,xs:1},r.a.createElement(Y.a,{style:{padding:"4px"},inputProps:{"aria-label":"checkbox"}})),r.a.createElement(Q.a,{item:!0,xs:!0},r.a.createElement(k.a,{variant:"body1",noWrap:!0},this.props.company)),r.a.createElement(Q.a,{item:!0,xs:5},r.a.createElement(k.a,{variant:"body1",noWrap:!0},this.props.title)),r.a.createElement(Q.a,{item:!0,xs:2},r.a.createElement(k.a,{variant:"body1",noWrap:!0},t)))}}]),t}(n.Component);ae.defaultProps={title:"",date:"No Date"};var ne=ae,re=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props.interviews.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(g.a,null,r.a.createElement(ne,{title:t.title,company:t.company,date:t.date})),e.props.divided&&a+1<e.props.interviews.length?r.a.createElement(X.a,null):null)}));return r.a.createElement(f.a,null,t)}}]),t}(n.Component);re.defaultProps={interviews:[],widget:!1,divided:!1};var le=re,oe=(a(81),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=[{title:"Software Engineer New Grad",company:"Facebook",date:"12-12-19"},{title:"Software Engineer Intern",company:"Google",date:new Date("1/10/2019")}];return r.a.createElement("div",{className:"dashboard"},r.a.createElement(Q.a,{container:!0,direction:"column",spacing:2,style:{height:"100%",width:"100%",margin:"0"}},r.a.createElement(Q.a,{item:!0,xs:!0},r.a.createElement("h1",null,"Recent Job Applications"),r.a.createElement(V.a,{style:{height:"60%",overflow:"auto"}},r.a.createElement(te,{jobs:[{title:"Software Engineer Intern",company:"Microsoft",status:"Applied"},{title:"Software Engineer New Grad",company:"Facebook",status:"Interviewing"},{title:"Software Engineer Intern",company:"Google",status:"Interviewing"}],divided:!0}))),r.a.createElement(Q.a,{item:!0,xs:!0},r.a.createElement("h1",null,"Upcoming Interviews"),r.a.createElement(V.a,{style:{height:"60%",overflow:"auto"}},r.a.createElement(le,{interviews:e,divided:!0})))))}}]),t}(n.Component)),ce=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,this.props.statusCode)}}]),t}(n.Component);ce.defaultProps={statusCode:404};var ie=ce,se=(a(82),Object(c.a)({palette:{type:"dark"}}));se=Object(i.a)(se);var me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{theme:se},r.a.createElement(m.a,null),r.a.createElement(p.a,null,r.a.createElement(H,null),r.a.createElement("div",{className:"app-content"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/dashboard",component:oe}),r.a.createElement(u.a,{exact:!0,path:"/",component:oe}),r.a.createElement(u.a,{component:ie}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[68,1,2]]]);
//# sourceMappingURL=main.6aa8c94e.chunk.js.map