(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{126:function(e,t){},127:function(e,t){},146:function(e,t,a){e.exports=a(178)},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),o=a(39),c=a(44),s=a(13),u=a(26),m=function e(t){var a=this;Object(u.a)(this,e),this.getFullPath=function(e){var t="";a._parentRoute&&(t+=a._parentRoute.getFullPath(e)),t+="/",t+=a._path;var n=Object(s.a)({},a._params);for(var r in e)n[r]&&(n[r]=e[r]);var l=Object.values(n);return l.length&&(t="".concat(t,"/").concat(l.join("/"))),t.replace(/\/+/g,"/")},this.getUrl=function(e){var t=window.location.pathname.split("/")[1];return a.getFullPath(e).replace(":projectName",t)},this._path=t.path,this._parentRoute=t.parentRoute||null,this._params=t.params||null},d=new m({path:""}),p=new m({path:"",params:{projectName:":projectName"}}),f=new m({path:"login",parentRoute:d}),g=new m({path:"dashboard",parentRoute:d}),h=new m({path:"structure",parentRoute:d}),b=new m({path:"timesheet",parentRoute:d}),E=new m({path:"backlog",parentRoute:p}),w=new m({path:"board",parentRoute:p}),k=new m({path:"raports",parentRoute:p}),v=new m({path:"task",params:{projectName:":taskId"}}),j=new m({path:"user",params:{projectName:":userId"}}),y=new m({path:"team",params:{projectName:":teamId"}}),O=a(14),z=a(8),C=a(262),x=a(226),S=a(234),P=a(233),D=a(232),I=a(263),F=a(58),N=Object(C.a)(x.a)({position:"absolute",alignSelf:"center",left:"40%"}),A=Object(C.a)(I.a)({width:"100%"}),R=Object(C.a)(D.a)({flex:"auto"}),W=Object(C.a)("div")({position:"absolute",top:0,left:0,backgroundColor:"#dedede",width:"100%",height:"100%",display:"flex",justifyContent:"center"}),T=Object(c.g)((function(e){var t=e.history,a=Object(n.useState)(),l=Object(z.a)(a,2),i=l[0],o=l[1];return r.a.createElement(W,null,r.a.createElement(N,null,r.a.createElement(P.a,null,r.a.createElement(F.a,{color:"textSecondary"},"Logowanie"),r.a.createElement(A,{name:"login",onChange:function(e){o(Object(s.a)({},i,Object(O.a)({},e.target.name,e.target.value)))},label:"Login"}),r.a.createElement(A,{name:"password",type:"password",label:"Has\u0142o"})),r.a.createElement(S.a,null,r.a.createElement(R,{onClick:function(){sessionStorage.setItem("user",i.login),t.push("/dashboard")},disabled:!(null===i||void 0===i?void 0:i.login)&&!(null===i||void 0===i?void 0:i.password)},"Zaloguj"))))})),B=a(86),L=a(236),Z=a(112),U=a.n(Z),G=a(235),J=a(29),H=a.n(J),M=a(237),K=a(5),Y=Object(C.a)(G.a)({justifyContent:"space-between"}),_=Object(C.a)("div")({display:"flex",alignItems:"center"}),V=Object(K.a)((function(e){return{root:{display:"flex",flexGrow:1},grow:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:255,width:"calc(100% - ".concat(255,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:-20,marginRight:20},hide:{display:"none"},drawer:{width:255,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:255,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(O.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+"px !important"},e.breakpoints.up("sm"),{width:e.spacing(1)}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},margin:{marginRight:10},hiddenPosition:{display:"none"}}}),{withTheme:!0})((function(e){var t=e.open,a=e.hover,n=e.handleDrawerOpen,l=e.withSideBar,i=e.classes;return r.a.createElement(L.a,{position:"fixed",className:H()(i.appBar,Object(O.a)({},i.appBarShift,t||a))},r.a.createElement(Y,null,r.a.createElement(_,null,l&&r.a.createElement(M.a,{color:"inherit","aria-label":"Open drawer",onClick:n,className:H()(i.menuButton,Object(O.a)({},i.hide,t||a))},r.a.createElement(U.a,null)),r.a.createElement(F.a,{style:{textTransform:"capitalize"},variant:"h6",color:"inherit"},l?window.location.pathname.split("/")[1].replace("-"," "):"Dashboard"))))})),X=a(87),q=a(240),Q=a(241),$=a(242),ee=a(243),te=a(231),ae=a(179),ne=a(238),re=a(239),le=a(114),ie=a.n(le),oe=a(115),ce=a.n(oe),se=a(42),ue=a(41),me=a(49),de=new(a(113))(me);de.onGet("/tasks").reply(200,{tasks:[{id:1,name:"John Smith"}]}),de.onGet("/projects").reply(200,{projects:[{name:"Project ALFA",url:"/project-alfa/",shortName:"PA"},{name:"Project BETA",url:"/project-beta/",shortName:"PB"}]}),de.onGet("/timesheet/detailed").reply(200,{details:[{task:"PA-1",time:4},{task:"PA-2",time:3},{task:"Zebranie zespo\u0142u",time:1,span:"10:30-11:30"}]}),de.onGet("/auth/permission").reply(200,{result:!0});var pe=function e(){Object(u.a)(this,e),this.get=function(e,t){return me.get(e,{params:t})},this.post=function(e,t){return me.post(e,t)},this.put=function(e,t){return me.put(e,t)},this.delete=function(e,t){return me.delete(e,{data:t})}},fe=function(e){Object(se.a)(a,e);var t=Object(ue.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getProjects=function(){return e.get("/projects")},e.getDayDetails=function(){return e.get("/timesheet/detailed")},e.checkPermissions=function(){return e.get("/auth/permissions")},e}return a}(pe),ge=new fe,he=Object(C.a)("div")({margin:20,marginTop:80,display:"flex"}),be=Object(C.a)(X.a)({margin:10,width:"100%",height:"fit-content",minHeight:150}),Ee=Object(C.a)("div")({margin:10,fontWeight:600,display:"flex",justifyContent:"space-between",alignItems:"center"}),we=function(){var e=Object(n.useState)(!1),t=Object(z.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),c=Object(z.a)(i,2),u=c[0],m=c[1],d=Object(n.useState)(!1),p=Object(z.a)(d,2),f=p[0],g=p[1],h=Object(n.useState)(),b=Object(z.a)(h,2),E=b[0],w=b[1],k=Object(n.useState)(),v=Object(z.a)(k,2),j=v[0],y=v[1],C=Object(n.useState)([{name:"Alfa"},{name:"Beta"}]),x=Object(z.a)(C,2),S=x[0],P=x[1],F=Object(n.useState)(),N=Object(z.a)(F,2),A=N[0],R=N[1];Object(n.useEffect)((function(){ge.getProjects().then((function(e){w(e.data.projects)}))}),[]);var W=function(){l(!a),y()},T=function(){m(!u),R()},L=function(){g(!f)},Z=function(e){y(Object(s.a)({},j,Object(O.a)({},e.target.name,e.target.value)))},U=function(e){R(Object(s.a)({},A,Object(O.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(he,null,r.a.createElement(be,{style:{width:"50%"},elevation:3},r.a.createElement(Ee,null,r.a.createElement("span",null,"Twoje Projekty"),"admin"===sessionStorage.getItem("user")&&r.a.createElement(D.a,{onClick:W},"Utw\xf3rz")),E&&E.map((function(e,t){return r.a.createElement(te.a,{comopnent:"nav",key:t},r.a.createElement(o.b,{to:e.url},r.a.createElement(ae.a,{button:!0},r.a.createElement(ne.a,null,r.a.createElement(ie.a,null)),r.a.createElement(re.a,{primary:"(".concat(e.shortName,") - ").concat(e.name)}))))}))),r.a.createElement(be,{elevation:3},r.a.createElement(Ee,null,"Przypisane zadania"),"Brak zada\u0144")),"admin"===sessionStorage.getItem("user")&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement(he,null,r.a.createElement(be,{style:{width:"50%"},elevation:3},r.a.createElement(Ee,null,r.a.createElement("span",null,"Zespo\u0142y"),r.a.createElement(D.a,{onClick:T},"Utw\xf3rz")),r.a.createElement(te.a,null,S&&S.map((function(e,t){return r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(ce.a,null)),r.a.createElement(re.a,null,e.name))})))),r.a.createElement(be,{elevation:3},r.a.createElement(Ee,null,"Ostatnie aktualizacje"),"Brak")),r.a.createElement(D.a,{style:{marginLeft:30},variant:"outlined",onClick:L},"Nowy u\u017cytkownik")),r.a.createElement(q.a,{open:a,onClose:W},r.a.createElement(Q.a,null,"Utw\xf3rz projekt"),r.a.createElement($.a,null,r.a.createElement(I.a,{autoFocus:!0,label:"Nazwa projektu",name:"name",value:null===j||void 0===j?void 0:j.name,onChange:Z,fullWidth:!0}),r.a.createElement(I.a,{label:"Skr\xf3t",name:"shortName",value:null===j||void 0===j?void 0:j.shortName,onChange:Z,fullWidth:!0}),r.a.createElement(I.a,{label:"Przypisany zesp\xf3\u0142",name:"team",value:null===j||void 0===j?void 0:j.team,onChange:Z,fullWidth:!0})),r.a.createElement(ee.a,null,r.a.createElement(D.a,{onClick:function(){w([].concat(Object(B.a)(E),[j])),W()},color:"primary"},"Potwierd\u017a"),r.a.createElement(D.a,{onClick:W,color:"primary"},"Anuluj"))),r.a.createElement(q.a,{open:u,onClose:T},r.a.createElement(Q.a,null,"Utw\xf3rz zesp\xf3\u0142"),r.a.createElement($.a,null,r.a.createElement(I.a,{autoFocus:!0,label:"Nazwa zespo\u0142u",name:"name",value:null===A||void 0===A?void 0:A.name,onChange:U,fullWidth:!0}),r.a.createElement(I.a,{label:"Leader",name:"leader",value:null===A||void 0===A?void 0:A.team,onChange:U,fullWidth:!0})),r.a.createElement(ee.a,null,r.a.createElement(D.a,{onClick:function(){P([].concat(Object(B.a)(S),[A])),T()},color:"primary"},"Potwierd\u017a"),r.a.createElement(D.a,{onClick:T,color:"primary"},"Anuluj"))),r.a.createElement(q.a,{open:f,onClose:L},r.a.createElement(Q.a,null,"Dodaj u\u017cytkownika"),r.a.createElement($.a,null,r.a.createElement(I.a,{autoFocus:!0,label:"Imi\u0119",fullWidth:!0}),r.a.createElement(I.a,{label:"Nazwisko",fullWidth:!0}),r.a.createElement(I.a,{label:"E-mail",fullWidth:!0}),r.a.createElement(I.a,{label:"Stanowisko",fullWidth:!0}),r.a.createElement(I.a,{label:"Stawka",fullWidth:!0})),r.a.createElement(ee.a,null,r.a.createElement(D.a,{onClick:L,color:"primary"},"Dodaj"),r.a.createElement(D.a,{onClick:L,color:"primary"},"Anuluj"))))},ke=a(260),ve=["red","#ff8400","#fff200","#a2ff00","#26ff00"],je=Object(C.a)(X.a)({minHeight:100,marginBottom:10,padding:5}),ye=Object(C.a)("div")({padding:7}),Oe=Object(C.a)("div")({color:"#828282"}),ze=Object(C.a)("span")({color:"#ffffff",backgroundColor:"#9e9e9e",borderRadius:5,padding:2}),Ce=Object(C.a)("div")({color:"#828282",float:"right"}),xe=Object(C.a)("div")((function(e){return{backgroundColor:e.color,width:7,height:10,marginRight:1,borderRadius:7}})),Se=Object(C.a)("div")({display:"flex",alignItems:"center"}),Pe=function(e){var t=e.parentId,a=e.openDialog,n=e.task,l=Object(ke.a)({item:{type:"task",taskId:n.id,parentId:t},collect:function(e){return{opacity:e.isDragging()?.5:1}}}),i=Object(z.a)(l,2),o=i[0].opacity,c=i[1];return r.a.createElement(je,{ref:c,onClick:function(){return a(n.id)},style:{opacity:o}},r.a.createElement(ye,null,n.name),r.a.createElement(Oe,null,n.estimate," godz."),r.a.createElement(Oe,null,n.osoba),r.a.createElement("div",null,"Pozosta\u0142o: ",r.a.createElement(ze,null,n.estimate-n.logged," godz.")," "),r.a.createElement(Se,null,"Priorytet:  ",function(e){for(var t=[],a=5;a>=e;a--)t.push(r.a.createElement(xe,{color:ve[e-1]}));return t}(n.prio)),r.a.createElement(Ce,null,n.id))},De=a(261),Ie=Object(C.a)("div")((function(e,t){return{display:"flex",alignItems:"stretch",width:"100%",backgroundColor:"#f4f5f7",margin:5,flexDirection:"column",padding:10}})),Fe=function(e){var t=e.taskId,a=e.children,n=e.moveTask,l=e.section,i=Object(De.a)({accept:"task",canDrop:function(e){return e.parentId===t},drop:function(e){return n(t,e.taskId,l.order)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}),o=Object(z.a)(i,2),c=o[0],s=c.isOver,u=c.canDrop,m=o[1];return r.a.createElement(Ie,{ref:m,canDrop:u,isOver:s,style:{backgroundColor:u?s?"#f3f9f4":"#ebf2f9":"#f4f5f7",outline:u?s?"3px dotted #14882c":"3px dotted #3b73af":"none"}},a)},Ne=a(74),Ae=a.n(Ne),Re=a(75),We=a.n(Re),Te=Object(C.a)("div")({top:239,position:"sticky",backgroundColor:"#ffffff",display:"flex",alignItems:"center"}),Be=Object(C.a)("span")({border:"1px solid gray",paddingLeft:3,paddingRight:3}),Le=function(e){var t=e.task,a=e.handleArrowClick,n=e.hidden;e.sections;return r.a.createElement(Te,null,n?r.a.createElement(Ae.a,{onClick:function(){return a()}}):r.a.createElement(We.a,{onClick:function(){return a(t.id)}}),r.a.createElement("span",null,t.id," ",r.a.createElement(Be,null,t.status)," ",t.name," ",t.subtasks.lenght))},Ze=Object(C.a)("div")({display:"flex",alignItems:"stretch",minHeight:150}),Ue=function(e){var t=e.task,a=e.sections,l=e.moveTask,i=e.openDialog,o=Object(n.useState)(!1),c=Object(z.a)(o,2),s=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,{task:t,sections:a,hidden:s,handleArrowClick:function(){u(!s)}}),r.a.createElement(Ze,{style:s?{minHeight:0}:{}},!s&&a.map((function(e){return r.a.createElement(Fe,{taskId:t.id,moveTask:l,section:e},t.subtasks.map((function(a){return a.status===e.order&&r.a.createElement(Pe,{parentId:t.id,task:a,openDialog:i})})))}))))},Ge=a(246),Je=a(128),He=a(130),Me=Object(C.a)("div")({borderRadius:5,padding:5,"&:hover":{backgroundColor:"#ebecf0"}}),Ke=function(e){var t=e.children,a=e.multiline,l=e.onChange,i=e.name,o=Object(n.useState)(!1),c=Object(z.a)(o,2),s=c[0],u=c[1];return s?r.a.createElement(I.a,{autoFocus:!0,onBlur:function(){u(!1)},style:{padding:5},multiline:a,value:t,onChange:function(e){return l(e.target.value,i)}}):r.a.createElement(Me,{style:a?{whiteSpace:"pre"}:{},onClick:function(){u(!s)}},t)},Ye=Object(C.a)("div")({width:"60vw",maxHeight:"80%",display:"flex",flexDirection:"column",padding:10}),_e=Object(C.a)("div")({display:"flex",justifyContent:"space-between",color:"#8c8c8c",marginBottom:15}),Ve=(Object(C.a)("div")({}),Object(C.a)("div")({display:"flex",overflowY:"auto"})),Xe=Object(C.a)("div")({fontWeight:"600",fontSize:20}),qe=Object(C.a)("div")({width:"100%",marginRight:20}),Qe=Object(C.a)("div")({width:"50%"}),$e=Object(C.a)("div")({fontWeight:600,margin:5}),et=Object(C.a)("div")({marginBottom:35}),tt=Object(C.a)("div")({}),at=Object(C.a)("div")({}),nt=Object(C.a)("div")({}),rt=function(){var e=Object(n.useState)({name:"TITLE",description:"Opis jaki\u015b",criteria:"jakies co\u015b"}),t=Object(z.a)(e,2),a=t[0],l=t[1],i=function(e,t){l(Object(s.a)({},a,Object(O.a)({},t,e)))};return r.a.createElement(Ye,null,r.a.createElement(_e,null,"task id / parent id"),r.a.createElement(Ve,null,r.a.createElement(qe,null,r.a.createElement(Xe,null,r.a.createElement(Ke,{onChange:i,name:"name"},a.name)),r.a.createElement(et,null,r.a.createElement($e,null,"Opis"),r.a.createElement(Ke,{multiline:!0,onChange:i,name:"description"},a.description)),r.a.createElement(et,null,r.a.createElement($e,null,"Kryteria akceptacji"),r.a.createElement(Ke,{onChange:i,name:"criteria"},a.criteria)),r.a.createElement(et,null,r.a.createElement($e,null,"Za\u0142\u0105czniki"),"brak"),r.a.createElement(tt,null,"comments"),r.a.createElement(at,null,"history")),r.a.createElement(Qe,null,r.a.createElement(nt,null,"ready"),r.a.createElement(et,null,r.a.createElement($e,null,"Priorytet"),"3 (medium)"),r.a.createElement(et,null,r.a.createElement($e,null,"Przypisana osoba"),"Pawe\u0142"),r.a.createElement(et,null,r.a.createElement($e,null,"Osoba zg\u0142aszaj\u0105ca"),"Jan"),r.a.createElement(et,null,r.a.createElement($e,null,"Zarejestruj godziny"),r.a.createElement("div",null,r.a.createElement(I.a,{variant:"outlined",type:"number",label:"Sp\u0119dzony czas"}),r.a.createElement(D.a,{style:{marginTop:15}},"Dodaj"),r.a.createElement(D.a,{style:{marginTop:15}},"Szczeg\xf3\u0142y"))))))},lt=function(e){var t=e.taskId,a=Object(He.a)(e,["taskId"]),l=Object(n.useState)(!0),i=Object(z.a)(l,2),o=i[0],c=i[1];return Object(n.useEffect)((function(){c(!0),c(!1)}),[]),r.a.createElement(q.a,Object.assign({maxWidth:"",open:t},a),o?"...":r.a.createElement(rt,null))},it=function(e){Object(se.a)(a,e);var t=Object(ue.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getTasks=function(){return e.get("/tasks")},e}return a}(pe),ot=a(244),ct=a(230),st=a(265),ut=a(258),mt=a(245),dt=a(117),pt=a.n(dt),ft=Object(C.a)("div")({position:"sticky",top:64,backgroundColor:"#ffffff",marginTop:-24,paddingTop:24}),gt=Object(C.a)("div")({display:"flex",alignItems:"stretch"}),ht=Object(C.a)("div")({display:"flex",alignItems:"stretch",width:"100%",backgroundColor:"#f4f5f7",margin:5,lineHeight:3,paddingLeft:15,borderRadius:"10px 10px 0 0"}),bt=Object(C.a)("div")({display:"flex",justifyContent:"space-between",paddingLeft:15,paddingRight:25}),Et=Object(C.a)("div")({fontSize:25}),wt=Object(C.a)("div")({display:"flex",alignItems:"center"}),kt=Object(C.a)("div")({paddingLeft:15,paddingBottom:15,display:"flex"}),vt=function(e){var t=e.sections,a=e.title,n=e.filters,l=e.setFilters,i=e.endSprint;return r.a.createElement(ft,null,r.a.createElement(bt,null,r.a.createElement(Et,null,a),i&&r.a.createElement(wt,null,r.a.createElement("div",null,"Pozosta\u0142o 7 dni"),r.a.createElement(D.a,null,"Zako\u0144cz sprint"))),r.a.createElement(kt,null,r.a.createElement(I.a,{label:"Filtruj",value:n,onChange:l,InputProps:{endAdornment:r.a.createElement(ot.a,{position:"end"},r.a.createElement(pt.a,null))}}),r.a.createElement(ct.a,{style:{minWidth:170,marginLeft:10}},r.a.createElement(st.a,null,"Przypisana osoba"),r.a.createElement(ut.a,{value:n,onChange:l},r.a.createElement(mt.a,{value:""},r.a.createElement("em",null,"Brak")),r.a.createElement(mt.a,{value:"Pawe\u0142 Rusnak"},"Pawe\u0142 Rusnak"),r.a.createElement(mt.a,{value:"Jan Kowalski"},"Jan Kowalski")))),t&&r.a.createElement(gt,null,t.map((function(e){return r.a.createElement(ht,null,e.label)}))))},jt=new it,yt=[{label:"Do zrobienia",order:"1"},{label:"W toku",order:"2"},{label:"Wstrzymane",order:"3"},{label:"Code Review",order:"4"},{label:"Testowanie",order:"5"},{label:"Zamkni\u0119te",order:"6"}],Ot=[{id:"PA-1",name:"Doda\u0107 map\u0119 na widok g\u0142\xf3wny",status:"W toku",type:"story",subtasks:[{id:"PA-2",name:"Przeprowadzi\u0107 research popularnych bibliotek",estimate:"8",logged:"8",osoba:"Pawe\u0142 Rusnak",prio:"5",status:"6"},{id:"PA-3",name:"Zaiplementowa\u0107 autoryzacj\u0119 klucza API",estimate:"5",logged:"1",osoba:"Pawe\u0142 Rusnak",prio:"2",status:"2"},{id:"PA-14",name:"Pobra\u0107 dane konfiguracji z API",estimate:"10",logged:"3",osoba:"Pawe\u0142 Rusnak",prio:"3",status:"3"},{id:"PA-16",name:"Utworzy\u0107 odpowiednie endpointy",estimate:"15",logged:"3",osoba:"Jan Kowalski",prio:"1",status:"2"},{id:"PA-15",name:"Nie mo\u017cna przybli\u017cy\u0107 widoku mapy",estimate:"5",logged:"0",osoba:"brak",prio:"4",status:"1"}]},{id:"PA-4",name:"Wysy\u0142anie powiadomie\u0144 w czasie rzeczywistym",status:"Testowanie",type:"story",subtasks:[{id:"PA-5",name:"Zaimplementowa\u0107 mechanizm po stronie serwera",estimate:"25",logged:"22",osoba:"Jan Nowak",prio:"2",status:"5"},{id:"Pa-6",name:"Odebra\u0107 dane i przedstawi\u0107 u\u017cytkownikowi",estimate:"15",logged:"14",osoba:"Pawe\u0142 Rusnak",prio:"2",status:"5"},{id:"Pa-7",name:"Zbudowa\u0107 struktur\u0119 do przechowywania historii powiadomie\u0144",estimate:"5",logged:"3",osoba:"Jan Kowalski",prio:"1",status:"6"}]},{id:"PA-8",name:"Doda\u0107 mo\u017cliwo\u015b\u0107 zmiany has\u0142a",status:"Zamkni\u0119te",type:"story",subtasks:[{id:"PA-9",name:"Utworzy\u0107 odpowiedni\u0105 formatk\u0119",estimate:"5",logged:"5",osoba:"Pawe\u0142 Rusnak",prio:"5",status:"6"},{id:"PA-10",name:"Przygotowa\u0107 endpoint",estimate:"10",logged:"10",osoba:"Jan Kowalski",prio:"5",status:"6"}]}],zt=function(){var e=r.a.useState(Ot),t=Object(z.a)(e,2),a=t[0],l=t[1],i=r.a.useState(),o=Object(z.a)(i,2),c=o[0],u=o[1],m=r.a.useState(),d=Object(z.a)(m,2),p=d[0],f=d[1];Object(n.useEffect)((function(){jt.getTasks().then((function(e){}))}),[]);var g=function(e,t,n){var r=a.filter((function(t){return t.id===e}))[0],i=r.subtasks.filter((function(e){return e.id===t}))[0];i.status=n,r.subtasks=r.subtasks.filter((function(e){return e.id!==t})).concat(i),l(a.filter((function(t){return t.id!==e})).concat(r))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge.a,{backend:Je.a},r.a.createElement(vt,{sections:yt,title:"Sprint 5",filters:p,setFilters:function(e){f(e.target.value)},endSprint:!0}),a.sort((function(e,t){return e.id>=t.id?1:-1})).map((function(e){var t=p?function(e){var t=p.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)||e.osoba.toLowerCase().includes(t)||e.id.toLowerCase().includes(t)}))}(e.subtasks):e.subtasks;return r.a.createElement(Ue,{task:Object(s.a)({},e,{subtasks:t}),sections:yt,moveTask:g,openDialog:u})}))),r.a.createElement(lt,{taskId:c,onClose:function(){u()}}))},Ct=Object(C.a)("div")({top:180,position:"sticky",backgroundColor:"#ffffff",display:"flex",alignItems:"center"}),xt=function(e){var t=e.group,a=e.handleArrowClick,n=e.hidden;return r.a.createElement(Ct,null,n?r.a.createElement(Ae.a,{onClick:function(){return a()}}):r.a.createElement(We.a,{onClick:function(){return a()}}),t.title)},St=Object(C.a)(X.a)({backgroundColor:"white",marginTop:5,marginBottom:5,height:40,display:"flex"}),Pt=Object(C.a)("div")({height:"100%",display:"flex",alignItems:"center",paddingLeft:10,paddingRight:10}),Dt=Object(C.a)("div")({height:"50%"}),It=function(e){var t=e.task;return r.a.createElement(St,{elevation:1},r.a.createElement(Pt,null,r.a.createElement("span",null,t.id)),r.a.createElement(Dt,null,r.a.createElement("div",{style:{fontWeight:600}},t.name),r.a.createElement("div",null,"".concat(t.status,", pozosta\u0142o ").concat(t.left," godz."))))},Ft=Object(C.a)("div")({display:"flex",flexDirection:"column",alignItems:"stretch",minHeight:50,margin:5,backgroundColor:"white"}),Nt=function(e){var t=e.group,a=(e.sections,e.moveTask,e.openDialog,Object(n.useState)(!1)),l=Object(z.a)(a,2),i=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(xt,{group:t,hidden:i,handleArrowClick:function(){o(!i)}}),r.a.createElement(Ft,{style:i?{minHeight:0}:{}},!i&&t.tasks.map((function(e){return r.a.createElement(It,{task:e})}))))},At=[{title:"Sprint 1",tasks:[{id:"PA-1",name:"Zbudowa\u0107 podstaw\u0119 aplikacji",status:"Zako\u0144czone",left:"0"}]},{title:"Sprint 2",tasks:[]},{title:"Sprint 3",tasks:[]},{title:"Sprint 4",tasks:[]},{title:"Sprint 5 (obecny)",tasks:[{id:"PA-4",name:"Widok mapy",status:"W toku",left:"15"},{id:"PA-5",name:"Wysy\u0142anie powiadomie\u0144 w czasie rzeczywistym",status:"Testowanie",left:"2"}]},{title:"Planned",tasks:[{id:"PA-8",name:"Wdro\u017cy\u0107 aplikacj\u0119 na \u015brodowisko produkcyjne",status:"Do zrobienia",left:"30"}]}],Rt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(vt,{title:"Backlog"}),At.map((function(e){return r.a.createElement(Nt,{group:e})})),r.a.createElement(D.a,{variant:"outlined"},"Dodaj zadanie"))},Wt=a(76),Tt=a(119),Bt=a.n(Tt),Lt=a(118),Zt=a.n(Lt),Ut=a(247),Gt=a(248),Jt=a(266),Ht=function(e){Object(se.a)(a,e);var t=Object(ue.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,hover:!1,user:null},e.handleDrawerOpen=function(){e.setState((function(e){return Object(s.a)({},e,{open:!0})}))},e.handleDrawerClose=function(){e.setState((function(e){return Object(s.a)({},e,{open:!1,hover:!1})}))},e.handleDrawerOpenTemp=function(){e.setState((function(e){return Object(s.a)({},e,{hover:!0})}))},e.handleDrawerCloseTemp=function(){e.setState((function(e){return Object(s.a)({},e,{hover:!1})}))},e.clickTab=function(t){e.setState((function(e){return Object(s.a)({},e,{tab:t})}))},e}return Object(Wt.a)(a,[{key:"render",value:function(){var e,t,a=this.props,n=a.classes,l=a.theme;return r.a.createElement("div",{className:n.root},r.a.createElement(Ut.a,null),r.a.createElement(V,{open:this.state.open,hover:this.state.hover,handleDraweOpen:this.handleDrawerOpen,withSideBar:!0}),r.a.createElement("div",{onMouseEnter:this.handleDrawerOpenTemp,onMouseLeave:this.handleDrawerCloseTemp},r.a.createElement(Jt.a,{variant:"permanent",className:H()(n.drawer,(e={},Object(O.a)(e,n.drawerOpen,this.state.open||this.state.hover),Object(O.a)(e,n.drawerClose,!(this.state.open||this.state.hover)),e)),classes:{paper:H()((t={},Object(O.a)(t,n.drawerOpen,this.state.open||this.state.hover),Object(O.a)(t,n.drawerClose,!(this.state.open||this.state.hover)),t))},open:this.state.open||this.state.hover},r.a.createElement("div",{className:n.toolbar},r.a.createElement(M.a,{onClick:this.handleDrawerClose},"rtl"===l.direction?r.a.createElement(Zt.a,null):r.a.createElement(Bt.a,null))),r.a.createElement(Gt.a,null),r.a.createElement(te.a,null,this.props.children.map((function(e){return r.a.createElement(o.b,{to:e.props.link,key:e.props.label},r.a.createElement(ae.a,{button:!0},r.a.createElement(ne.a,null,e.props.icon),r.a.createElement(re.a,{insetprimary:e.props.label},e.props.children)))}))))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),this.props.content))}}]),a}(r.a.Component),Mt=Object(K.a)((function(e){return{root:{display:"flex",flexGrow:1},grow:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:255,width:"calc(100% - ".concat(255,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:-20,marginRight:20},hide:{display:"none"},drawer:{width:255,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:255,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(O.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+"px !important"},e.breakpoints.up("sm"),{width:e.spacing(1)}),toolbar:Object(s.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},margin:{marginRight:10},hiddenPosition:{display:"none"}}}),{withTheme:!0})(Ht),Kt=a(120),Yt=a.n(Kt),_t=a(121),Vt=a.n(_t),Xt=a(122),qt=a.n(Xt),Qt=a(125),$t=a.n(Qt),ea=a(123),ta=a.n(ea),aa=a(124),na=a.n(aa),ra=function(e){Object(se.a)(a,e);var t=Object(ue.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(Wt.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout"},r.a.createElement(Mt,{content:this.props.children},r.a.createElement("div",{link:w.getUrl(),icon:r.a.createElement(Yt.a,null)},"Tablica"),r.a.createElement("div",{link:E.getUrl(),icon:r.a.createElement(Vt.a,null)},"Backlog"),r.a.createElement("div",{link:b.getUrl(),icon:r.a.createElement(qt.a,null)},"Czas pracy"),r.a.createElement("div",{link:h.getUrl(),icon:r.a.createElement(ta.a,null)},"Struktura"),r.a.createElement("div",{link:k.getUrl(),icon:r.a.createElement(na.a,null)},"Raporty"),r.a.createElement("div",{link:g.getUrl(),icon:r.a.createElement($t.a,null)},"Dashboard")))}}]),a}(n.Component),la=function(){return r.a.createElement("div",null)},ia=a(126),oa=a.n(ia),ca=function(){return r.a.createElement("div",null)},sa=a(127),ua=a.n(sa),ma=a(249),da=a(259),pa=a(267),fa=a(129),ga=a(250),ha="#fafafa",ba={name:"Imi\u0119 Nazwisko",children:[{name:"Imi\u0119 Nazwisko",children:[{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko",children:[{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko",children:[{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko"}]}]}]},{name:"Imi\u0119 Nazwisko",children:[{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko"},{name:"Imi\u0119 Nazwisko"}]}]};function Ea(e){var t=e.node;return r.a.createElement(ma.a,{top:t.x,left:t.y},r.a.createElement("rect",{height:40,width:75,y:-20,x:-37.5,fill:ha,stroke:"#03c0dc",strokeWidth:1,onClick:function(){alert("Klikni\u0119to: ".concat(JSON.stringify(t.data.name)))}}),r.a.createElement("text",{dy:".33em",fontSize:9,fontFamily:"Arial",textAnchor:"middle",style:{pointerEvents:"none"},fill:"black"},t.data.name))}var wa=function(e){var t=e.width,a=void 0===t?1300:t,n=e.height,l=void 0===n?500:n,i=e.margin,o=void 0===i?{top:0,left:50,right:50,bottom:0}:i,c=Object(fa.b)(ba),s=l-o.top-o.bottom,u=a-o.left-o.right;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Przyk\u0142adowy Diagram Drzewa Organizacji Firmy"),r.a.createElement("svg",{width:a,height:l},r.a.createElement(ga.a,{id:"lg",from:"#fd9b93",to:"#fe6e9e"}),r.a.createElement("rect",{width:a,height:l,rx:14,fill:ha}),r.a.createElement(da.a,{root:c,size:[s,u]},(function(e){return r.a.createElement(ma.a,{top:o.top,left:o.left},e.links().map((function(e,t){return r.a.createElement(pa.a,{key:"link-".concat(t),data:e,stroke:"#374469",strokeWidth:"1",fill:"none"})})),e.descendants().map((function(e,t){return r.a.createElement(Ea,{key:"node-".concat(t),node:e})})))}))))},ka=a(253),va=a(256),ja=a(251),ya=a(252),Oa=a(254),za=a(255),Ca=Object(C.a)("div")({display:"flex",alignItems:"baseline"}),xa=function(e){var t=e.open,a=e.closeDialog,l=e.date,i=e.task,o=e.enableActionSection,c=Object(n.useState)({}),u=Object(z.a)(c,2),m=u[0],d=u[1],p=new Date;Object(n.useEffect)((function(){d({date:l})}),[l]);var f=function(e){d(Object(s.a)({},m,Object(O.a)({},e.target.name,e.target.value)))};return r.a.createElement(q.a,{open:t,onClose:a},r.a.createElement(Q.a,null,"Zarejestruj godziny"),r.a.createElement($.a,null,o?r.a.createElement(I.a,{autoFocus:!0,label:"Zadanie",name:"task",onChange:f,value:m.task||"",fullWidth:!0}):{task:i},r.a.createElement(I.a,{label:"Data",type:"date",defaultValue:(null===m||void 0===m?void 0:m.date)||"".concat(p.getFullYear(),"-").concat((p.getMonth()+101).toString().substring(1),"-").concat((p.getDate()+100).toString().substring(1)),onChange:f,fullWidth:!0}),r.a.createElement(Ca,null,r.a.createElement(I.a,{label:"Liczba Godzin",name:"timespan",onChange:f,value:m.timespan||"",type:"number"}),r.a.createElement("span",{style:{margin:5}},"lub "),r.a.createElement(I.a,{style:{width:180},label:"Godzina rozpoczecia",name:"start'",onChange:f,defaultValue:"".concat(p.getHours(),":").concat(p.getMinutes()),type:"time"}),r.a.createElement(I.a,{style:{width:180},label:"Godzina zako\u0144czenia",name:"end",onChange:f,defaultValue:"".concat(p.getHours(),":").concat(p.getMinutes()),type:"time"})),r.a.createElement(I.a,{label:"Dodatkowy opis",name:"description",onChange:f,value:m.description||"",fullWidth:!0})),r.a.createElement(ee.a,null,r.a.createElement(D.a,{onClick:function(){a()},color:"primary"},"Dodaj"),r.a.createElement(D.a,{onClick:a,color:"primary"},"Anuluj")))},Sa=Object(C.a)("div")({display:"flex",justifyContent:"space-evenly",margin:5}),Pa=function(e){var t=e.entry;return r.a.createElement(Sa,null,r.a.createElement("span",{style:{width:"100%"}},t.task," "),r.a.createElement("span",{style:{width:"40%"}},t.time," ",t.span&&"(".concat(t.span,")")))},Da=function(e){var t=e.open,a=e.closeDialog,n=e.data,l=e.newEntry;return console.log(n),r.a.createElement(q.a,{open:t,onClose:a,fullWidth:!0,maxWidth:"xs"},r.a.createElement(Q.a,null,"Szczeg\xf3\u0142y dnia ",null===n||void 0===n?void 0:n.day),(null===n||void 0===n?void 0:n.data)&&n.data.map((function(e){return r.a.createElement(Pa,{entry:e})})),r.a.createElement(D.a,{onClick:l},"Dodaj kolejny"))},Ia=new fe,Fa=Object(C.a)(ja.a)((function(e){return{cursor:"pointer",backgroundColor:e.color,"&:hover":{backgroundColor:"#ebecf0"}}})),Na=Object(C.a)(ja.a)((function(e){return{backgroundColor:e.color}})),Aa=Object(C.a)("div")({});function Ra(e,t){return{name:e,logs:t}}var Wa=[Ra("Pawe\u0142 Rusnak",[8,8,8,0,0,24,8,8,8,8,0,0,8,8,8]),Ra("Jan Kowalski",[8,8,8,0,0,8,8,0,0,0,0,0,0,8,8])],Ta=function(){var e=Object(n.useState)(!1),t=Object(z.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!1),o=Object(z.a)(i,2),c=o[0],s=o[1],u=Object(n.useState)(),m=Object(z.a)(u,2),d=m[0],p=m[1],f=new Date,g=new Date(f.getFullYear(),f.getMonth()+1,0).getDate(),h=function(){l(!a)},b=function(){s(!c)},E=function(e){for(var t=[],a=function(a){var n=new Date(f.getFullYear(),f.getMonth()-1,a);t.push(r.a.createElement(Fa,{color:5===n.getDay()||6===n.getDay()?"#f0f1f5":"white",onClick:function(){return function(e,t){Ia.getDayDetails().then((function(e){p({data:e.data.details,day:"".concat(f.getFullYear(),"-").concat((f.getMonth()+101).toString().substring(1),"-").concat((t.getDate()+101).toString().substring(1))})})),b()}(e.name,n)}},0!==e.logs[a]&&e.logs[a]))},n=0;n<g;n++)a(n);return t};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Aa,null,"1-".concat(g," ").concat(f.toLocaleString("default",{month:"long"}).toUpperCase()," ").concat(f.getFullYear())),r.a.createElement(ya.a,{component:X.a},r.a.createElement(ka.a,{"aria-label":"simple table"},r.a.createElement(Oa.a,null,r.a.createElement(za.a,null,r.a.createElement(ja.a,null,"Pracownik"),function(){for(var e=[],t=0;t<g;t++){var a=new Date(f.getFullYear(),f.getMonth()-1,t);e.push(r.a.createElement(Na,{color:5===a.getDay()||6===a.getDay()?"#e6e7eb":"white"},t+1))}return e}(),r.a.createElement(Na,{color:"#f7f7f7"},"Suma"))),r.a.createElement(va.a,null,Wa.map((function(e){return r.a.createElement(za.a,{key:e.name},r.a.createElement(ja.a,{component:"th",scope:"row"},e.name),E(e),r.a.createElement(Na,{color:"#f7f7f7"},e.logs.reduce((function(e,t){return e+t}),0)))}))))),r.a.createElement(D.a,{variant:"outlined",onClick:h},"Dodaj godziny"),r.a.createElement(Da,{open:c,closeDialog:b,newEntry:function(){s(!1),l(!0)},data:d}),r.a.createElement(xa,{date:null===d||void 0===d?void 0:d.day,open:a,closeDialog:h,enableActionSection:!0}))},Ba=function(){return r.a.createElement(ra,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:w.getFullPath(),exact:!0,component:zt}),r.a.createElement(c.b,{path:E.getFullPath(),exact:!0,component:Rt}),r.a.createElement(c.b,{path:k.getFullPath(),exact:!0,component:la}),r.a.createElement(c.b,{path:v.getFullPath(),exact:!0,component:oa.a}),r.a.createElement(c.b,{path:j.getFullPath(),exact:!0,component:ca}),r.a.createElement(c.b,{path:y.getFullPath(),exact:!0,component:ua.a}),r.a.createElement(c.b,{path:h.getFullPath(),exact:!0,component:wa}),r.a.createElement(c.b,{path:b.getFullPath(),exact:!0,component:Ta}),r.a.createElement(c.a,{path:p.getFullPath(),exact:!0,to:w.getFullPath()})))},La=function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{path:f.getFullPath(),exact:!0,component:T}),r.a.createElement(c.a,{path:d.getFullPath(),exact:!0,to:f.getFullPath()}),r.a.createElement(c.b,{path:g.getFullPath(),component:we}),r.a.createElement(c.b,{path:"*",component:Ba}))},Za=function(){return r.a.createElement(o.a,null,r.a.createElement(La,null))};a(177);i.a.render(r.a.createElement(Za,null),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.ccaa26ee.chunk.js.map