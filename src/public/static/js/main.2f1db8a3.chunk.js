(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{138:function(e,t,a){e.exports=a(172)},143:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),s=(a(143),a(37)),o=a(2),c=a(114),u=a(235),h=a(228),d=a(229),p=a(45),m=a(29),b=a(32),f=a(19),g=a.n(f),v=a(8),E=a(17),O=a.n(E),y=a(22),j=a(10),w=a(7),k=a(11),C=a(12),S=a(9),x=a(13),N=a(74),D=a(55),F=a(230),V=a(209),A=a(233),P=a(210),W=a(237),I=a(236),L=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={isValid:!0,value:""},a.handleOnChange=a.handleOnChange.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleOnChange",value:function(e){var t=e.target.value,a=new RegExp(this.props.regex),n=!!t.match(a);this.props.onChange&&this.props.onChange(t,n),this.setState({value:t,isValid:n})}},{key:"render",value:function(){return r.a.createElement(I.a,{required:!0,error:!this.state.isValid&&this.props.showError,label:this.props.label,placeholder:this.props.placeholder,margin:"normal",variant:"outlined",onChange:this.handleOnChange,fullWidth:!0})}}]),t}(n.Component);L.defaultProps={label:"Email",placeholder:void 0,showError:!1,regex:'^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'};var J=L,M=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={isValid:!0,value:""},a.handleOnChange=a.handleOnChange.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleOnChange",value:function(e){var t,a=e.target.value,n=new RegExp(this.props.regex);t=this.props.match?a===this.props.match:!!a.match(n),this.setState({value:a,isValid:t}),this.props.onChange&&this.props.onChange(a,t)}},{key:"render",value:function(){return r.a.createElement(I.a,{required:!0,error:!this.state.isValid&&this.props.showError,label:this.props.label,placeholder:this.props.placeholder,margin:"normal",variant:"outlined",type:"password",onChange:this.handleOnChange,fullWidth:!0})}}]),t}(n.Component);M.defaultProps={label:"Password",placeholder:void 0,regex:/^.*(?=.{8,})((?=.*[!?@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g,showError:!1};var T=M,U=a(3),z=a(100),R=a.n(z),H=a(102),q=a.n(H),B=a(103),$=a.n(B),K=a(105),Z=a.n(K),Y=a(204),G=a(205),_=a(207),Q=a(206),X=a(101),ee=a.n(X),te=a(104),ae={success:R.a,warning:ee.a,error:q.a,info:$.a},ne=Object(te.a)((function(e){return{success:{backgroundColor:Y.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:G.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));var re=function(e){var t=ne(),a=e.className,n=e.message,i=e.onClose,l=e.variant,s=Object(o.a)(e,["className","message","onClose","variant"]),c=ae[l];return r.a.createElement(Q.a,Object.assign({className:Object(U.a)(t[l],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(c,{className:Object(U.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(_.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},r.a.createElement(Z.a,{className:t.icon}))]},s))};a(96);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var le=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={emailValue:"",emailValid:!1,passwordValue:"",checkedRememberMe:!1,failSnackbarOpen:!1},a.handleEmailField=a.handleEmailField.bind(Object(S.a)(a)),a.handlePasswordField=a.handlePasswordField.bind(Object(S.a)(a)),a.handleLogin=a.handleLogin.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleEmailField",value:function(e,t){this.setState({emailValue:e,emailValid:t})}},{key:"handlePasswordField",value:function(e){this.setState({passwordValue:e})}},{key:"handleLogin",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.state.emailValid){e.next=8;break}return t={email:this.state.emailValue,password:this.state.passwordValue},e.next=5,g.a.post("/api/user/login",t);case 5:200===(a=e.sent).status?localStorage.setItem("authed","true"):(localStorage.setItem("authed","false"),this.setState({failSnackbarOpen:!0})),this.props.onAuthChange&&this.props.onAuthChange(200===a.status);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),this.setState({failSnackbarOpen:!0});case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"auth-container"},r.a.createElement(N.a,{className:"login-form"},r.a.createElement("h1",null,"Login"),r.a.createElement(J,{showError:!0,onChange:this.handleEmailField}),r.a.createElement(T,{onChange:this.handlePasswordField}),r.a.createElement(D.a,null,r.a.createElement(F.a,{textAlign:"left",style:{}},r.a.createElement(V.a,{control:r.a.createElement(A.a,{checked:this.state.checkedRememberMe,onChange:(e="checkedRememberMe",function(a){t.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t.state,Object(v.a)({},e,a.target.checked)))}),color:"primary",value:"checkedRememberMe"}),label:"Remember Me"}))),r.a.createElement(P.a,{className:"login-button",variant:"contained",color:"primary",style:{margin:"20px 0"},onClick:this.handleLogin},"Login"),r.a.createElement(D.a,null,r.a.createElement(F.a,{textAlign:"center"},"Don't have an account?",r.a.createElement(m.b,{to:"/signup",className:"signup-link"},"Sign up here.")))),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.failSnackbarOpen,autoHideDuration:6e3,onClose:function(){return t.setState({failSnackbarOpen:!1})}},r.a.createElement(re,{onClose:function(){return t.setState({failSnackbarOpen:!1})},variant:"error",message:"Unable to login, please try again."})))}}]),t}(n.Component),se=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={firstNameValue:"",firstNameValid:!1,lastNameValue:"",lastNameValid:!1,emailValue:"",emailValid:!1,passwordValue:"",passwordValid:!1,passwordConfirmValue:"",passwordConfirmValid:!1,failSnackbarOpen:!1},a.handleFirstNameField=a.handleFirstNameField.bind(Object(S.a)(a)),a.handleLastNameField=a.handleLastNameField.bind(Object(S.a)(a)),a.handleEmailField=a.handleEmailField.bind(Object(S.a)(a)),a.handlePasswordField=a.handlePasswordField.bind(Object(S.a)(a)),a.handlePasswordConfirmField=a.handlePasswordConfirmField.bind(Object(S.a)(a)),a.handleSignUp=a.handleSignUp.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleFirstNameField",value:function(e){var t=e.target.value;this.setState({firstNameValue:t,firstNameValid:t.length>0})}},{key:"handleLastNameField",value:function(e){var t=e.target.value;this.setState({lastNameValue:t,lastNameValid:t.length>0})}},{key:"handleEmailField",value:function(e,t){this.setState({emailValue:e,emailValid:t})}},{key:"handlePasswordField",value:function(e,t){this.setState({passwordValue:e,passwordValid:t})}},{key:"handlePasswordConfirmField",value:function(e,t){this.setState({passwordConfirmValue:e,passwordConfirmValid:t})}},{key:"handleSignUp",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.state.firstNameValid&&this.state.lastNameValid&&this.state.emailValid&&this.state.passwordValid&&this.state.passwordConfirmValid){e.next=3;break}return e.abrupt("return");case 3:return t={firstName:this.state.firstNameValue,lastName:this.state.lastNameValue,email:this.state.emailValue,password:this.state.passwordValue},e.next=6,g.a.post("/api/user/signup",t);case 6:a=e.sent,console.log(a),200===a.status?localStorage.setItem("authed","true"):(localStorage.setItem("authed","false"),this.setState({failSnackbarOpen:!0})),this.props.onAuthChange&&this.props.onAuthChange(200===a.status),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),this.setState({failSnackbarOpen:!0});case 16:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"auth-container"},r.a.createElement(N.a,{className:"login-form"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(I.a,{required:!0,autoFocus:!0,fullWidth:!0,label:"First Name",margin:"normal",variant:"outlined",onChange:this.handleFirstNameField}),r.a.createElement(I.a,{required:!0,fullWidth:!0,label:"Last Name",margin:"normal",variant:"outlined",onChange:this.handleLastNameField}),r.a.createElement(J,{onChange:this.handleEmailField,showError:!0}),r.a.createElement(T,{onChange:this.handlePasswordField,showError:!0}),r.a.createElement(T,{label:"Confirm Password",onChange:this.handlePasswordConfirmField,match:this.state.passwordValue,showError:!0}),r.a.createElement(P.a,{className:"login-button",variant:"contained",color:"primary",style:{margin:"20px 0"},onClick:this.handleSignUp},"Sign Up"),r.a.createElement(D.a,{component:"div"},r.a.createElement(F.a,{textAlign:"center",component:"p"},"Already have an account?",r.a.createElement(m.b,{to:"/login",className:"signup-link"},"Go to login.")))),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.failSnackbarOpen,autoHideDuration:6e3,onClose:function(){return e.setState({failSnackbarOpen:!1})}},r.a.createElement(re,{onClose:function(){return e.setState({failSnackbarOpen:!1})},variant:"error",message:"Unable to sign up at this time."})))}}]),t}(n.Component),oe=a(203),ce=a(174),ue=a(211),he=a(212),de=a(213),pe=a(214),me=a(234),be=a(111),fe=a.n(be),ge=a(80),ve=a.n(ge),Ee=a(59),Oe=a.n(Ee),ye=a(107),je=a.n(ye),we=a(112),ke=a.n(we),Ce=a(108),Se=a.n(Ce),xe=a(109),Ne=a.n(xe),De=a(110),Fe=a.n(De),Ve=a(113),Ae=a.n(Ve),Pe=(a(168),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={open:!1},a.handleToggleDrawer=a.handleToggleDrawer.bind(Object(S.a)(a)),a.handleLogOut=a.handleLogOut.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleToggleDrawer",value:function(){this.state.open?this.setState({open:!1}):this.setState({open:!0})}},{key:"handleLogOut",value:function(){var e=Object(y.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/user/logout");case 2:localStorage.setItem("authed","false"),window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=r.a.createElement("div",{className:"sideNav",role:"presentation",onClick:this.handleToggleDrawer,onKeyDown:this.handleToggleDrawer},r.a.createElement(m.a,null),r.a.createElement(oe.a,null,r.a.createElement(m.b,{to:"/dashboard",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(ce.a,{button:!0},r.a.createElement(ue.a,{className:"drawer-icon"},r.a.createElement(je.a,null)),r.a.createElement(he.a,{primary:"Dashboard"}))),r.a.createElement(m.b,{to:"/jobapps",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(ce.a,{button:!0},r.a.createElement(ue.a,{className:"drawer-icon"},r.a.createElement(Se.a,null)),r.a.createElement(he.a,{primary:"Job Applications"}))),r.a.createElement(m.b,{to:"/interviews",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(ce.a,{button:!0},r.a.createElement(ue.a,{className:"drawer-icon"},r.a.createElement(Ne.a,null)),r.a.createElement(he.a,{primary:"Interviews"}))),r.a.createElement(m.b,{to:"/jobs",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(ce.a,{button:!0},r.a.createElement(ue.a,{className:"drawer-icon"},r.a.createElement(Fe.a,null)),r.a.createElement(he.a,{primary:"Job Listings"}))),r.a.createElement(m.b,{to:"/profile",style:{color:"inherit",textDecoration:"none"}},r.a.createElement(ce.a,{button:!0},r.a.createElement(ue.a,{className:"drawer-icon"},r.a.createElement(ve.a,null)),r.a.createElement(he.a,{primary:"My Profile"}))))),t="";switch(this.props.location.pathname){case"/dashboard":t="Dashboard";break;case"/jobapps":t="Job Applications";break;case"/interviews":t="Interviews";break;case"/jobs":t="Job Listings";break;case"/profile":t="Profile";break;default:t=""}return r.a.createElement("div",null,r.a.createElement(de.a,{position:"static",className:"app-bar"},r.a.createElement(pe.a,{className:"nav-toolbar"},r.a.createElement(_.a,{edge:"start",className:"menu-button",onClick:this.handleToggleDrawer,color:"inherit","aria-label":"menu"},r.a.createElement(fe.a,null)),r.a.createElement(D.a,{variant:"h6"},t),r.a.createElement(me.a,{open:this.state.open,onOpen:this.handleToggleDrawer,onClose:this.handleToggleDrawer,className:"side-drawer"},e),r.a.createElement("div",{className:"right"},r.a.createElement(_.a,{color:"inherit","aria-label":"add"},r.a.createElement(Oe.a,null)),r.a.createElement(_.a,{color:"inherit","aria-label":"Notifications"},r.a.createElement(ke.a,null)),r.a.createElement(_.a,{color:"inherit","aria-label":"profile"},r.a.createElement(ve.a,null)),r.a.createElement(_.a,{color:"inherit","aria-label":"settings",onClick:this.handleLogOut},r.a.createElement(Ae.a,null))))))}}]),t}(n.Component)),We=Object(p.g)(Pe),Ie=a(215),Le=a(216),Je=function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement(Ie.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(Ie.a,{item:!0,xs:1},r.a.createElement(A.a,{style:{padding:"4px"},inputProps:{"aria-label":"checkbox"}})),r.a.createElement(Ie.a,{item:!0,xs:6},r.a.createElement(D.a,{variant:"body1",noWrap:!0},this.props.title)),r.a.createElement(Ie.a,{item:!0,xs:!0},r.a.createElement(D.a,{variant:"body1",noWrap:!0},this.props.company)),r.a.createElement(Ie.a,{item:!0,xs:2},r.a.createElement(D.a,{variant:"body1",noWrap:!0},this.props.status)))}}]),t}(n.Component);Je.defaultProps={};var Me=Je,Te=function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(ce.a,null,r.a.createElement(Me,{title:t.title,company:t.company,status:t.status})),e.props.divided&&a+1<e.props.jobs.length?r.a.createElement(Le.a,null):null)}));return r.a.createElement(oe.a,{style:{height:"100%"}},t)}}]),t}(n.Component);Te.defaultProps={jobs:[],widget:!1,divided:!1};var Ue=Te,ze=function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e={year:"numeric",month:"short",day:"numeric"},t=this.props.date instanceof Date?this.props.date.toLocaleDateString("en-EN",e):new Date(this.props.date).toLocaleDateString("en-EN",e);return r.a.createElement(Ie.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(Ie.a,{item:!0,xs:1},r.a.createElement(A.a,{style:{padding:"4px"},inputProps:{"aria-label":"checkbox"}})),r.a.createElement(Ie.a,{item:!0,xs:!0},r.a.createElement(D.a,{variant:"body1",noWrap:!0},this.props.company)),r.a.createElement(Ie.a,{item:!0,xs:5},r.a.createElement(D.a,{variant:"body1",noWrap:!0},this.props.title)),r.a.createElement(Ie.a,{item:!0,xs:2},r.a.createElement(D.a,{variant:"body1",noWrap:!0},t)))}}]),t}(n.Component);ze.defaultProps={title:"",date:"No Date"};var Re=ze,He=function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.interviews.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(ce.a,null,r.a.createElement(Re,{title:t.title,company:t.company,date:t.date})),e.props.divided&&a+1<e.props.interviews.length?r.a.createElement(Le.a,null):null)}));return r.a.createElement(oe.a,null,t)}}]),t}(n.Component);He.defaultProps={interviews:[],widget:!1,divided:!1};var qe=He,Be=(a(169),function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={applications:[],interviews:[]},a.reloadDashboardData=a.reloadDashboardData.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){this.reloadDashboardData()}},{key:"reloadDashboardData",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/application/all");case 2:return t=e.sent,e.next=5,g.a.get("/api/interview/all");case 5:if((a=e.sent)||t){e.next=9;break}return localStorage.setItem("authed",!1),e.abrupt("return");case 9:t&&200===t.status&&this.setState({applications:t.data.jobApplications}),a&&200===a.status&&this.setState({interviews:a.data.jobInterviews});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(Ie.a,{container:!0,direction:"column",spacing:2,style:{height:"100%",width:"100%",margin:"0"}},r.a.createElement(Ie.a,{item:!0,xs:!0,style:{height:"60%"}},r.a.createElement("h1",null,"Recent Job Applications"),r.a.createElement(N.a,{style:{height:"75%",overflow:"auto"}},r.a.createElement(Ue,{jobs:this.state.applications,divided:!0}))),r.a.createElement(Ie.a,{item:!0,xs:!0,style:{height:"60%"}},r.a.createElement("h1",null,"Upcoming Interviews"),r.a.createElement(N.a,{style:{height:"75%",overflow:"auto"}},r.a.createElement(qe,{interviews:this.state.interviews,divided:!0})))))}}]),t}(n.Component)),$e=a(217),Ke=a(218),Ze=a(219),Ye=a(221),Ge=a(201),_e=a(239),Qe=a(232),Xe=a(220),et=a(222),tt=a(27),at=a(231),nt=a(72),rt=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={open:!1,successSnackbarOpen:!1,failSnackbarOpen:!1,company:"",title:"",status:"",priority:1,appliedDate:new Date},a.handleOpen=a.handleOpen.bind(Object(S.a)(a)),a.handleClose=a.handleClose.bind(Object(S.a)(a)),a.handleClearFields=a.handleClearFields.bind(Object(S.a)(a)),a.handleOnAdd=a.handleOnAdd.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleClearFields",value:function(){this.setState({company:"",title:"",status:"",appliedDate:new Date})}},{key:"handleOnAdd",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a,n,r,i,l,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.title,n=t.company,r=t.status,i=t.appliedDate,l=t.priority,a&&n&&r&&i&&l){e.next=5;break}this.setState({failSnackbarOpen:!0}),e.next=10;break;case 5:return s={title:a,company:n,status:r,appliedDate:i,priority:l},e.next=8,g.a.post("/api/application/new",s);case 8:200===e.sent.status?(this.props.onAdd&&this.props.onAdd(),this.handleClose(),this.handleClearFields(),this.setState({successSnackbarOpen:!0})):this.setState({failSnackbarOpen:!0});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement($e.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ke.a,null,"New Job Application"),r.a.createElement(Ze.a,null,r.a.createElement(I.a,{autoFocus:!0,margin:"dense",value:this.state.company,label:"Company",type:"name",onChange:function(t){return e.setState({company:t.target.value})},fullWidth:!0}),r.a.createElement(I.a,{margin:"dense",value:this.state.title,label:"Job Title",type:"name",onChange:function(t){return e.setState({title:t.target.value})},fullWidth:!0}),r.a.createElement(I.a,{margin:"dense",value:this.state.status,label:"Status",type:"name",onChange:function(t){return e.setState({status:t.target.value})},fullWidth:!0}),r.a.createElement(Ge.a,{margin:"dense",fullWidth:!0},r.a.createElement(_e.a,{id:"demo-simple-select-label"},"Priority"),r.a.createElement(Qe.a,{value:this.state.priority,onChange:function(t){return e.setState({priority:t.target.value})}},r.a.createElement(Xe.a,{value:0},"Low"),r.a.createElement(Xe.a,{value:1},"Medium"),r.a.createElement(Xe.a,{value:2},"High"))),r.a.createElement(tt.a,{utils:nt.a},r.a.createElement(at.a,{margin:"dense",variant:"inline",label:"Applied Date",format:"MM/dd/yyyy",value:this.state.appliedDate,onChange:function(t){return e.setState({appliedDate:t})},KeyboardButtonProps:{"aria-label":"change date"},fullWidth:!0}))),r.a.createElement(Ye.a,null,r.a.createElement(P.a,{onClick:function(){e.handleClearFields(),e.handleClose()},color:"primary"},"Cancel"),r.a.createElement(P.a,{onClick:this.handleClearFields,color:"primary"},"Clear All"),r.a.createElement(P.a,{onClick:this.handleOnAdd,color:"primary"},"Add"))),r.a.createElement(et.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"absolute"},onClick:this.handleOpen},r.a.createElement(Oe.a,null)),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.successSnackbarOpen,autoHideDuration:6e3,onClose:function(){return e.setState({successSnackbarOpen:!1})}},r.a.createElement(re,{onClose:function(){return e.setState({successSnackbarOpen:!1})},variant:"success",message:"Your new job application has been added!"})),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.failSnackbarOpen,autoHideDuration:6e3,onClose:function(){return e.setState({failSnackbarOpen:!1})}},r.a.createElement(re,{onClose:function(){return e.setState({failSnackbarOpen:!1})},variant:"error",message:"Unable to add new job application, please try again."})))}}]),t}(n.Component),it=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={applications:[],dialogOpen:!1},a.loadJobApplications=a.loadJobApplications.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.loadJobApplications()}},{key:"loadJobApplications",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/application/all");case 2:if(t=e.sent){e.next=8;break}return localStorage.setItem("authed",!1),e.abrupt("return");case 8:t&&200===t.status&&this.setState({applications:t.data.jobApplications});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(Ie.a,{container:!0,direction:"column",spacing:2,style:{height:"100%",margin:"0"}},r.a.createElement(Ie.a,{item:!0,xs:!0},r.a.createElement(N.a,{style:{height:"100%",overflow:"auto"}},r.a.createElement(Ue,{jobs:this.state.applications,divided:!0})),r.a.createElement(rt,{open:this.state.dialogOpen,onAdd:this.loadJobApplications}))))}}]),t}(n.Component),lt=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={open:!1,successSnackbarOpen:!1,failSnackbarOpen:!1,company:"",title:"",status:"",type:"",interviewDate:new Date},a.handleOpen=a.handleOpen.bind(Object(S.a)(a)),a.handleClose=a.handleClose.bind(Object(S.a)(a)),a.handleClearFields=a.handleClearFields.bind(Object(S.a)(a)),a.handleOnAdd=a.handleOnAdd.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleClearFields",value:function(){this.setState({company:"",title:"",status:"",interviewDate:new Date})}},{key:"handleOnAdd",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a,n,r,i,l,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.title,n=t.company,r=t.status,i=t.interviewDate,l=t.type,a&&n&&r&&i&&l){e.next=5;break}this.setState({failSnackbarOpen:!0}),e.next=10;break;case 5:return s={title:a,company:n,status:r,date:i,type:l},e.next=8,g.a.post("/api/interview/new",s);case 8:200===e.sent.status?(this.props.onAdd&&this.props.onAdd(),this.handleClose(),this.handleClearFields(),this.setState({successSnackbarOpen:!0})):this.setState({failSnackbarOpen:!0});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement($e.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(Ke.a,null,"New Job Interview"),r.a.createElement(Ze.a,null,r.a.createElement(I.a,{autoFocus:!0,margin:"dense",value:this.state.company,label:"Company",type:"name",onChange:function(t){return e.setState({company:t.target.value})},fullWidth:!0}),r.a.createElement(I.a,{margin:"dense",value:this.state.title,label:"Job Title",type:"name",onChange:function(t){return e.setState({title:t.target.value})},fullWidth:!0}),r.a.createElement(I.a,{margin:"dense",value:this.state.status,label:"Status",type:"name",onChange:function(t){return e.setState({status:t.target.value})},fullWidth:!0}),r.a.createElement(I.a,{margin:"dense",value:this.state.type,label:"Interview Type",type:"name",onChange:function(t){return e.setState({type:t.target.value})},fullWidth:!0}),r.a.createElement(tt.a,{utils:nt.a},r.a.createElement(at.a,{margin:"dense",variant:"inline",label:"Date",format:"MM/dd/yyyy",value:this.state.interviewDate,onChange:function(t){return e.setState({interviewDate:t})},KeyboardButtonProps:{"aria-label":"change date"},fullWidth:!0}))),r.a.createElement(Ye.a,null,r.a.createElement(P.a,{onClick:function(){e.handleClearFields(),e.handleClose()},color:"primary"},"Cancel"),r.a.createElement(P.a,{onClick:this.handleClearFields,color:"primary"},"Clear All"),r.a.createElement(P.a,{onClick:this.handleOnAdd,color:"primary"},"Add"))),r.a.createElement(et.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"absolute"},onClick:this.handleOpen},r.a.createElement(Oe.a,null)),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.successSnackbarOpen,autoHideDuration:6e3,onClose:function(){return e.setState({successSnackbarOpen:!1})}},r.a.createElement(re,{onClose:function(){return e.setState({successSnackbarOpen:!1})},variant:"success",message:"Your interview has been added!"})),r.a.createElement(W.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.failSnackbarOpen,autoHideDuration:6e3,onClose:function(){return e.setState({failSnackbarOpen:!1})}},r.a.createElement(re,{onClose:function(){return e.setState({failSnackbarOpen:!1})},variant:"error",message:"Unable to add new interview, please try again."})))}}]),t}(n.Component),st=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={interviews:[],dialogOpen:!1},a.loadInterviews=a.loadInterviews.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.loadInterviews()}},{key:"loadInterviews",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/interview/all");case 2:if(t=e.sent){e.next=8;break}return localStorage.setItem("authed",!1),e.abrupt("return");case 8:t&&200===t.status&&this.setState({interviews:t.data.jobInterviews});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(Ie.a,{container:!0,direction:"column",spacing:2,style:{height:"100%",width:"100%",margin:"0"}},r.a.createElement(Ie.a,{item:!0,xs:!0},r.a.createElement(N.a,{style:{height:"100%",overflow:"auto"}},r.a.createElement(qe,{interviews:this.state.interviews,divided:!0})),r.a.createElement(lt,{open:this.state.dialogOpen,onAdd:this.loadInterviews}))))}}]),t}(n.Component),ot=a(223),ct=a(224),ut=a(225),ht=a(226),dt=a(227),pt=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(k.a)(this,Object(C.a)(t).call(this,e))).state={jobs:[]},a.getJobListings=a.getJobListings.bind(Object(S.a)(a)),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.getJobListings()}},{key:"getJobListings",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a,n,r,i=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:void 0,a=i.length>1&&void 0!==i[1]?i[1]:void 0,e.next=4,g.a.get("/api/jobs",{params:{description:t,location:a}});case 4:n=e.sent,r=n.data.jobs,this.setState({jobs:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.jobs.map((function(e,t){return r.a.createElement(ot.a,{key:t},r.a.createElement(ct.a,{component:"th",scope:"row"},e.title),r.a.createElement(ct.a,{align:"right"},e.company),r.a.createElement(ct.a,{align:"right"},e.location),r.a.createElement(ct.a,{align:"right"},e.type))}));return r.a.createElement("div",{className:"dashboard"},r.a.createElement(Ie.a,{container:!0,direction:"column",spacing:2,style:{height:"100%",width:"100%",margin:"0"}},r.a.createElement(Ie.a,{item:!0,xs:!0},r.a.createElement(N.a,{style:{height:"100%",width:"100%",overflow:"auto"}},r.a.createElement(ut.a,{style:{minWidth:"100%"}},r.a.createElement(ht.a,null,r.a.createElement(ot.a,{style:{minWidth:"100%"}},r.a.createElement(ct.a,{style:{fontWeight:900}},"Job Title"),r.a.createElement(ct.a,{align:"right",style:{fontWeight:900}},"Company"),r.a.createElement(ct.a,{align:"right",style:{fontWeight:900}},"Location"),r.a.createElement(ct.a,{align:"right",style:{fontWeight:900}},"Type"))),r.a.createElement(dt.a,null,e))))))}}]),t}(n.Component),mt=function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,this.props.statusCode)}}]),t}(n.Component);mt.defaultProps={statusCode:404};var bt=mt,ft=(a(170),function(e){function t(){return Object(j.a)(this,t),Object(k.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m.a,null,r.a.createElement(We,null),r.a.createElement("div",{className:"app-content"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/dashboard",component:Be}),r.a.createElement(p.b,{exact:!0,path:"/jobapps",component:it}),r.a.createElement(p.b,{exact:!0,path:"/interviews",component:st}),r.a.createElement(p.b,{exact:!0,path:"/jobs",component:pt}),r.a.createElement(p.b,{exact:!0,path:"/",component:Be}),r.a.createElement(p.b,{component:bt})))))}}]),t}(n.Component)),gt=(a(171),Object(c.a)({palette:{type:"dark"}}));gt=Object(u.a)(gt);var vt=function(e){var t=e.component,a=e.authed,n=Object(o.a)(e,["component","authed"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))};var Et=function(){var e=Object(n.useState)("true"===localStorage.getItem("authed")),t=Object(s.a)(e,2),a=t[0],i=t[1],l=Object(b.a)();return g.a.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status&&(localStorage.setItem("authed",!1),i(!1))})),r.a.createElement(h.a,{theme:gt},r.a.createElement(d.a,null),r.a.createElement(m.a,{history:l},r.a.createElement(p.d,null,r.a.createElement(vt,{path:"/dashboard",authed:a,component:ft}),a?r.a.createElement(p.a,{to:"/dashboard"}):void 0,r.a.createElement(p.b,{exact:!0,path:"/login"},r.a.createElement(le,{onAuthChange:i})),r.a.createElement(p.b,{exact:!0,path:"/signup"},r.a.createElement(se,{onAuthChange:i})),r.a.createElement(p.b,{path:"/"},r.a.createElement(p.a,{to:a?"/dashboard":"/login"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.2f1db8a3.chunk.js.map