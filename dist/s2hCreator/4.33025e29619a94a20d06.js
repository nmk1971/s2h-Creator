(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{KEJB:function(t,e,n){"use strict";n.r(e),n.d(e,"CreatorModule",(function(){return Ft}));var i=n("weob"),o=n("bnxV"),s=n("jAig"),r=n("tyNb"),c=n("3Pt+"),a=n("ofXK"),u=n("fXoL"),l=n("AytR"),b=n("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t}postQuiz(t){return this.httpClient.post(l.a.apiUrl+"/api/v1/quizzes/add",t)}deleteQuiz(t){return this.httpClient.delete(`${l.a.apiUrl}/api/v1/quizzes/delete/${t}`)}updateQuiz(t,e){let n=Object.assign({},e);return this.httpClient.put(`${l.a.apiUrl}/api/v1/quizzes/update/${t}`,n)}getAllQuizzes(){return this.httpClient.get(l.a.apiUrl+"/api/v1/quizzes")}getQuizById(t){return this.httpClient.get(`${l.a.apiUrl}/api/v1/quizzes/${t}`)}getSharedQuizzes(){return this.httpClient.get(l.a.apiUrl+"/api/v1/quizzes/shared}")}getQuizzesByCreator(t){return this.httpClient.get(`${l.a.apiUrl}/api/v1/quizzes/creator/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(u.Wb(b.b))},t.\u0275prov=u.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t){this.quizService=t}resolve(t,e){return this.quizService.getQuizById(t.paramMap.get("id"))}}return t.\u0275fac=function(e){return new(e||t)(u.Wb(p))},t.\u0275prov=u.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=n("pzaG"),h=n("/t3+"),f=n("bTqV"),g=n("NFeN");let S=(()=>{class t{constructor(){}ngOnInit(){}getAvatar(t){return t?`${l.a.apiUrl}/${t}`:"assets/default-avatar.jpg"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-user-badge"]],inputs:{userInfo:"userInfo"},decls:4,vars:2,consts:[[1,"flex","flex-row","py-3","mx-auto"],["alt","avatar",1,"self-center","w-6","rounded-full","shadow-lg","h-6",3,"src"],[1,"w-full","font-mono","text-sm","text-center","text-gray-200","font-haireline"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Nb(1,"img",1),u.Sb(2,"span",2),u.Ac(3),u.Rb(),u.Rb()),2&t&&(u.Bb(1),u.kc("src",e.getAvatar(null==e.userInfo?null:e.userInfo.avatar_url),u.sc),u.Bb(2),u.Bc(null==e.userInfo?null:e.userInfo.fullusername))},styles:[""]}),t})();const R=function(){return["home"]},q=function(){return["active","inactive"]},v=function(){return["quiz"]},x=function(){return["about"]},k=function(){return["support"]},y=function(){return["settings"]};let w=(()=>{class t{constructor(t,e){this.authenticationService=t,this.router=e}ngOnInit(){this.subscription=this.authenticationService.currentUser.subscribe({next:t=>{this._user=Object.assign({},t)},error:t=>console.log(t),complete:()=>console.log("Ok")})}ngOnDestroy(){this.subscription.unsubscribe()}logout(){this.authenticationService.logout(),this.router.navigate(["/home"])}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(m.a),u.Mb(r.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-navbar"]],decls:21,vars:21,consts:[["color","primary",1,"flex","justify-around","w-full"],[1,"flex","justify-between","w-full","bg-transparent","navbar"],[1,"flex","justify-start","align-middle"],[1,"flex","flex-row","block","px-2","py-2","font-mono","font-extrabold"],[1,"hidden","sm:flex"],["routerLinkActive","active-link","mat-button","",3,"routerLink","routerLinkActive"],["mat-stroked-button","","color","warn",1,"w-full","justify-end",3,"click"],[3,"userInfo"]],template:function(t,e){1&t&&(u.Sb(0,"mat-toolbar",0),u.Sb(1,"mat-toolbar-row",1),u.Sb(2,"div",2),u.Sb(3,"div",3),u.Ac(4," Espace Cr\xe9ateur "),u.Rb(),u.Sb(5,"div",4),u.Sb(6,"a",5),u.Sb(7,"mat-icon"),u.Ac(8,"home"),u.Rb(),u.Ac(9," Home "),u.Rb(),u.Sb(10,"a",5),u.Ac(11," Quiz "),u.Rb(),u.Sb(12,"a",5),u.Ac(13," About "),u.Rb(),u.Sb(14,"a",5),u.Ac(15," Support "),u.Rb(),u.Sb(16,"a",5),u.Ac(17," Settings "),u.Rb(),u.Rb(),u.Sb(18,"button",6),u.Zb("click",(function(){return e.logout()})),u.Ac(19,"Se d\xe9connecter"),u.Rb(),u.Nb(20,"app-user-badge",7),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Bb(6),u.kc("routerLink",u.lc(11,R))("routerLinkActive",u.lc(12,q)),u.Bb(4),u.kc("routerLink",u.lc(13,v))("routerLinkActive",u.lc(14,q)),u.Bb(2),u.kc("routerLink",u.lc(15,x))("routerLinkActive",u.lc(16,q)),u.Bb(2),u.kc("routerLink",u.lc(17,k))("routerLinkActive",u.lc(18,q)),u.Bb(2),u.kc("routerLink",u.lc(19,y))("routerLinkActive",u.lc(20,q)),u.Bb(4),u.kc("userInfo",e._user))},directives:[h.a,h.c,f.a,r.e,r.d,g.a,f.b,S],styles:[""]}),t})();var z=n("XhcP"),C=n("MutI"),Q=n("FKr1");const A=function(){return["/back/settings"]},I=function(){return["/back/profile"]},L=function(){return["/back/gallery"]},B=function(){return["/back/users"]},M=function(){return["/back/customer"]};let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-side-bar"]],decls:37,vars:10,consts:[["color","primary"],[3,"routerLink"],["mat-line",""]],template:function(t,e){1&t&&(u.Sb(0,"mat-nav-list"),u.Sb(1,"mat-list"),u.Sb(2,"mat-list-item"),u.Sb(3,"mat-icon",0),u.Ac(4,"settings"),u.Rb(),u.Sb(5,"a",1),u.Sb(6,"h4",2),u.Ac(7,"Settings"),u.Rb(),u.Rb(),u.Nb(8,"h4",2),u.Rb(),u.Sb(9,"mat-list-item"),u.Sb(10,"mat-icon",0),u.Ac(11,"supervisor_account"),u.Rb(),u.Sb(12,"a",1),u.Sb(13,"h4",2),u.Ac(14,"Profile"),u.Rb(),u.Rb(),u.Nb(15,"h4",2),u.Rb(),u.Sb(16,"mat-list-item"),u.Sb(17,"mat-icon",0),u.Ac(18,"perm_media"),u.Rb(),u.Sb(19,"a",1),u.Sb(20,"h4",2),u.Ac(21,"Gallery"),u.Rb(),u.Rb(),u.Nb(22,"h4",2),u.Rb(),u.Sb(23,"mat-list-item"),u.Sb(24,"mat-icon",0),u.Ac(25,"verified_user"),u.Rb(),u.Sb(26,"a",1),u.Sb(27,"h4",2),u.Ac(28,"Granted Users"),u.Rb(),u.Rb(),u.Nb(29,"h4",2),u.Rb(),u.Sb(30,"mat-list-item"),u.Sb(31,"mat-icon",0),u.Ac(32,"person"),u.Rb(),u.Sb(33,"a",1),u.Sb(34,"h4",2),u.Ac(35,"Customers"),u.Rb(),u.Rb(),u.Nb(36,"h4",2),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Bb(5),u.kc("routerLink",u.lc(5,A)),u.Bb(7),u.kc("routerLink",u.lc(6,I)),u.Bb(7),u.kc("routerLink",u.lc(7,L)),u.Bb(7),u.kc("routerLink",u.lc(8,B)),u.Bb(7),u.kc("routerLink",u.lc(9,M)))},directives:[C.d,C.a,C.b,g.a,r.e,Q.k],styles:[""]}),t})(),_=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"flex","w-full","justify-end","align-center","py-6","-px3"],[1,"px-3","italic"]],template:function(t,e){1&t&&(u.Sb(0,"footer",0),u.Sb(1,"p",1),u.Ac(2,"S2H Quiz Creator"),u.Rb(),u.Rb())},styles:[""]}),t})(),N=(()=>{class t{constructor(){}ngOnInit(){}log(t){console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-creator-land-page"]],decls:11,vars:0,consts:[[1,""],["mode","side",3,"closed","opened"],["adminsidenav",""],["color","accent",3,"click"]],template:function(t,e){if(1&t){const t=u.Tb();u.Sb(0,"div",0),u.Nb(1,"app-navbar"),u.Sb(2,"mat-sidenav-container"),u.Sb(3,"mat-sidenav",1,2),u.Zb("closed",(function(){return e.log("closed")}))("opened",(function(){return e.log("opened")})),u.Nb(5,"app-side-bar"),u.Rb(),u.Sb(6,"mat-sidenav-content"),u.Sb(7,"mat-icon",3),u.Zb("click",(function(){return u.rc(t),u.pc(4).toggle()})),u.Ac(8,"menu"),u.Rb(),u.Nb(9,"router-outlet"),u.Rb(),u.Rb(),u.Nb(10,"app-footer"),u.Rb()}},directives:[w,z.b,z.a,O,z.c,g.a,r.g,_],styles:["mat-sidenav-container[_ngcontent-%COMP%]{height:100%}mat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%]{padding:1rm;height:87vh;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;min-height:-webkit-min-content;min-height:min-content}mat-sidenav[_ngcontent-%COMP%]{width:250px}mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-home-page"]],decls:3,vars:0,template:function(t,e){1&t&&(u.Sb(0,"h1"),u.Ac(1,"Page d'accueil du cr\xe9ateur"),u.Rb(),u.Ac(2," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem, reiciendis temporibus officiis voluptas ratione quae sapiente illum eaque delectus expedita rerum recusandae totam, dolores, impedit excepturi. Rerum, molestiae in!"))},styles:[""]}),t})();var U=n("s3dw"),P=n("0IaG"),$=n("kmnG"),F=n("d3UM");function G(t,e){if(1&t&&(u.Sb(0,"mat-option",8),u.Ac(1),u.Rb()),2&t){const t=e.$implicit;u.kc("value",t),u.Bb(1),u.Cc(" ",t," ")}}let D=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e,this.qtypes=["QCM","QCU","INPUT","ORDERING"]}onNoClick(){this.dialogRef.close()}ngOnInit(){}confirm(){this.dialogRef.close(this.question_type)}cancel(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(P.g),u.Mb(P.a))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-choix-type-question"]],decls:16,vars:2,consts:[["mat-dialog-title","",1,"flex","text-center"],["appearance","fill"],["name","question_type",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","flex-row","justify-between","py-5"],[1,"flex","items-center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close","","color","warn",3,"click"],[3,"value"]],template:function(t,e){1&t&&(u.Sb(0,"h1",0),u.Ac(1,"Veillez Choisir le type de votre question"),u.Rb(),u.Nb(2,"hr"),u.Sb(3,"mat-dialog-content"),u.Sb(4,"mat-form-field",1),u.Sb(5,"mat-label"),u.Ac(6,"Type de Question"),u.Rb(),u.Sb(7,"mat-select",2),u.Zb("ngModelChange",(function(t){return e.question_type=t})),u.zc(8,G,2,2,"mat-option",3),u.Rb(),u.Rb(),u.Rb(),u.Sb(9,"mat-dialog-actions",4),u.Sb(10,"div",5),u.Sb(11,"button",6),u.Zb("click",(function(){return e.confirm()})),u.Ac(12," Yes "),u.Rb(),u.Rb(),u.Sb(13,"div",5),u.Sb(14,"button",7),u.Zb("click",(function(){return e.cancel()})),u.Ac(15," No "),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Bb(7),u.kc("ngModel",e.question_type),u.Bb(1),u.kc("ngForOf",e.qtypes))},directives:[P.h,P.e,$.c,$.g,F.a,c.m,c.p,a.k,P.c,f.b,P.d,Q.m],styles:[""]}),t})();var Z=n("dNgK"),j=n("2Vo4");let X=(()=>{class t{constructor(t){this.http=t,this.questionList=[],this.currentQuestionList$=new j.a(this.questionList)}postQuestion(t){return this.http.post(l.a.apiUrl+"/api/v1/questions/add",t)}deleteQuestionFromAPI(t){return this.http.delete(`${l.a.apiUrl}/api/v1/questions/delete/${t}`)}updateQuestionInAPI(t,e){return this.http.put(`${l.a.apiUrl}/api/v1/questions/update/${t}`,e)}loadQuestions(t){this.questionList=[...t],this.currentQuestionList$.next(this.questionList)}addQuestion(t){this.questionList.push(t),this.currentQuestionList$.next(this.questionList)}deleteQuestion(t){this.questionList=this.questionList.filter(e=>e._id!==t),this.currentQuestionList$.next(this.questionList)}updateQuestion(t){let e=this.questionList.findIndex(e=>e._id===t._id);console.log(e,"  ",t),this.questionList[e]=t,this.currentQuestionList$.next(this.questionList)}}return t.\u0275fac=function(e){return new(e||t)(u.Wb(b.b))},t.\u0275prov=u.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=n("qFsG"),V=n("bSwM");let H=(()=>{class t{constructor(t,e,n){this.data=t,this.dialogRef=e,this.message=n}ngOnInit(){}confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(P.a),u.Mb(P.g),u.Mb(P.a))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-confirmation-dialog"]],decls:13,vars:1,consts:[["mat-dialog-title","",1,"flex","text-center"],[1,"mat-display-1","font-mono","text-gray-900"],[1,"flex","flex-row","justify-between","py-5"],[1,"flex","items-center"],["mat-raised-button","","mat-dialog-close","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(u.Sb(0,"h1",0),u.Ac(1,"Confirmation"),u.Rb(),u.Nb(2,"hr"),u.Sb(3,"mat-dialog-content"),u.Sb(4,"span",1),u.Ac(5),u.Rb(),u.Rb(),u.Sb(6,"mat-dialog-actions",2),u.Sb(7,"div",3),u.Sb(8,"button",4),u.Zb("click",(function(){return e.cancel()})),u.Ac(9," Non "),u.Rb(),u.Rb(),u.Sb(10,"div",3),u.Sb(11,"button",5),u.Zb("click",(function(){return e.confirm()})),u.Ac(12," Oui "),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Bb(5),u.Bc(e.message))},directives:[P.h,P.e,P.c,f.b,P.d],styles:[""]}),t})(),K=(()=>{class t{transform(t,e){return""!==e?t.filter(t=>-1!==t.questionText.toLowerCase().indexOf(e.toLowerCase())||-1!==t.question_type.toLowerCase().indexOf(e.toLowerCase())):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=u.Lb({name:"questionListFilter",type:t,pure:!0}),t})();function J(t,e){if(1&t){const t=u.Tb();u.Sb(0,"li",10),u.Sb(1,"span",11),u.Ac(2),u.Rb(),u.Sb(3,"span",12),u.Sb(4,"span",13),u.Ac(5),u.Rb(),u.Sb(6,"button",14),u.Zb("click",(function(){u.rc(t);const n=e.$implicit;return u.dc().deleteQuestion(n._id)})),u.Sb(7,"mat-icon",15),u.Ac(8,"delete"),u.Rb(),u.Rb(),u.Sb(9,"button",14),u.Zb("click",(function(){u.rc(t);const n=e.$implicit;return u.dc().updateQuestion(n)})),u.Sb(10,"mat-icon",16),u.Ac(11,"edit"),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&t){const t=e.$implicit;u.Bb(2),u.Cc(" ",t.questionText," "),u.Bb(3),u.Cc(" ",t.question_type,"")}}let W=(()=>{class t{constructor(t,e,n){this.questionService=t,this.shnackBar=e,this.dialog=n,this.onQuestionUpdateCliqued=new u.o,this.searchText=""}ngOnInit(){this.questions$=this.questionService.currentQuestionList$.asObservable()}deleteQuestion(t){this.dialog.open(H,{width:"450px",data:"Supprimer la Question?"}).afterClosed().subscribe(e=>{e&&this.questionService.deleteQuestionFromAPI(t).subscribe({next:e=>{this.shnackBar.open(e.message,"X",{duration:3e3}),"success"===e.status&&this.questionService.deleteQuestion(t)},error:t=>{this.shnackBar.open(t.message,"X")},complete:console.log})})}updateQuestion(t){this.onQuestionUpdateCliqued.next(t)}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(X),u.Mb(Z.a),u.Mb(P.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-question-list"]],outputs:{onQuestionUpdateCliqued:"onQuestionUpdateCliqued"},decls:15,vars:10,consts:[[1,"w-full"],[1,"text-center"],[1,"text-blue-800"],[1,"flex","flex-row","content-end","block","inline-block","p-3","mx-auto","my-2","mr-6"],["type","search","placeholder","Filter...",1,"p-3","border-0","rounded","shadow","bg-purple-white",3,"ngModel","ngModelChange"],[1,"mt-3","mr-4","pin-r","pin-t","text-purple-lighter"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 52.966 52.966",0,"xml","space","preserve",1,"h-4","text-dark",2,"enable-background","new 0 0 52.966 52.966"],["d","M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21\n      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279\n      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19\n      S32.459,40,21.983,40z"],[1,"w-full","px-4","mx-2","flex","flex-col"],["class","bg-gray-200 text-gray-800 justify-between flex  w-full",4,"ngFor","ngForOf"],[1,"bg-gray-200","text-gray-800","justify-between","flex","w-full"],[1,"py-2","inline-block","align-middle"],[1,"align-middle"],[1,"text-red-700","inline-block","align-middle"],["mat-button","",3,"click"],["color","warn",1,"icon-button"],["color","primary",1,"icon-button"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"h1",1),u.Ac(2,"Liste des Questions "),u.Sb(3,"span",2),u.Ac(4),u.ec(5,"async"),u.Rb(),u.Rb(),u.Sb(6,"div",3),u.Sb(7,"input",4),u.Zb("ngModelChange",(function(t){return e.searchText=t})),u.Rb(),u.Sb(8,"div",5),u.cc(),u.Sb(9,"svg",6),u.Nb(10,"path",7),u.Rb(),u.Rb(),u.Rb(),u.bc(),u.Sb(11,"ol",8),u.zc(12,J,12,2,"li",9),u.ec(13,"questionListFilter"),u.ec(14,"async"),u.Rb(),u.Rb()),2&t&&(u.Bb(4),u.Bc(u.fc(5,3,e.questions$).length),u.Bb(3),u.kc("ngModel",e.searchText),u.Bb(5),u.kc("ngForOf",u.gc(13,5,u.fc(14,8,e.questions$),e.searchText)))},directives:[c.c,c.m,c.p,a.k,f.b,g.a],pipes:[a.b,K],styles:[""]}),t})();var Y=n("Wp6s"),tt=n("QibW");function et(t,e){if(1&t){const t=u.Tb();u.Sb(0,"li"),u.Sb(1,"div",7),u.Sb(2,"div",8),u.Sb(3,"mat-radio-button",9),u.Zb("change",(function(){u.rc(t);const n=e.index;return u.dc().radioChecked(n)})),u.Rb(),u.Rb(),u.Sb(4,"div",10),u.Sb(5,"mat-form-field",1),u.Sb(6,"input",11),u.Zb("ngModelChange",(function(n){u.rc(t);const i=e.index;return u.dc().qcuResponseList[i].label=n})),u.Rb(),u.Rb(),u.Rb(),u.Sb(7,"div",12),u.Sb(8,"mat-icon",13),u.Zb("click",(function(){u.rc(t);const n=e.$implicit;return u.dc().deleteResponse(n)})),u.Ac(9,"delete"),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&t){const t=e.$implicit,n=e.index,i=u.dc();u.Bb(3),u.kc("checked",t.isValid),u.Bb(3),u.kc("ngModel",i.qcuResponseList[n].label)}}function nt(t,e){if(1&t){const t=u.Tb();u.Sb(0,"button",14),u.Zb("click",(function(){return u.rc(t),u.dc().saveQuestion()})),u.Ac(1,"Enregistrer"),u.Rb()}if(2&t){const t=u.dc();u.kc("disabled",!t.oneChecked)}}let it=(()=>{class t{constructor(t,e,n){this.fb=t,this.questionService=e,this.snackBar=n,this.onQuestionSave=new u.o,this.qcuResponseList=[],this.oneChecked=!1,this.QCUQuestionForm=t.group({questionText:[""]})}ngOnInit(){"new"===this.context?(this.qcuResponseList.push({label:"",isValid:!1}),this.qcuResponseList.push({label:"",isValid:!1})):"update"===this.context&&(this.QCUQuestionForm=this.fb.group({questionText:[this.question.questionText]}),this.qcuResponseList=[...this.question.qcxResponse])}ngOnChanges(){"update"===this.context&&(this.QCUQuestionForm=this.fb.group({questionText:[this.question.questionText]}),this.qcuResponseList=[...this.question.qcxResponse],this.oneChecked=!0)}addResponse(){this.qcuResponseList.push({label:"",isValid:!1})}deleteResponse(t){this.qcuResponseList=this.qcuResponseList.filter(e=>e!==t)}radioChecked(t){for(var e=0;e<this.qcuResponseList.length;e++)this.qcuResponseList[e].isValid=e===t;this.oneChecked=!0}createQuestion(){this.questionService.postQuestion({quizId:this.quizId,questionText:this.QCUQuestionForm.value.questionText,question_type:"QCU",qcxResponse:this.qcuResponseList}).subscribe({next:t=>{this.snackBar.open(t.message,"x",{duration:3e3}),this.questionService.addQuestion(t.payload),this.onQuestionSave.emit("Ok")},error:t=>{this.snackBar.open(t.message,"x")},complete:console.log})}updateQuestion(){let t={_id:this.question._id,quizId:this.quizId,questionText:this.QCUQuestionForm.value.questionText,question_type:"QCU",qcxResponse:this.qcuResponseList};this.questionService.updateQuestionInAPI(this.question._id,t).subscribe({next:e=>{this.snackBar.open(e.message,"x",{duration:3e3}),this.questionService.updateQuestion(t),this.onQuestionSave.emit("Ok")},error:t=>{this.snackBar.open(t.message,"x")},complete:console.log})}saveQuestion(){"new"===this.context?this.createQuestion():"update"===this.context&&this.updateQuestion()}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(c.e),u.Mb(X),u.Mb(Z.a))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-qcu-question-form"]],inputs:{quizId:"quizId",context:"context",question:"question"},outputs:{onQuestionSave:"onQuestionSave"},features:[u.zb],decls:16,vars:3,consts:[[1,"w-1/2"],[1,"w-full"],[1,"w-full","p-5","m-5",3,"formGroup"],["type","text","placeholder","Texte de la question","formControlName","questionText","matInput","",1,"bg-transparent","border-b","m-auto","block","border-gray-500","w-full","mb-6","text-gray-700","pb-1"],[4,"ngFor","ngForOf"],[3,"click"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],[1,"flex","w-full"],[1,"flex","m-2","align-center"],[3,"checked","change"],[1,"flex-grow","px-4","py-2","m-2"],["matInput","","type","text","placeholder","Texte de la R\xe9ponse","name","qcuResponseList[i].label",1,"w-full","bg-transparent","border-b","m-auto","block","border-gray-500","mb-6","text-gray-700","p-1",3,"ngModel","ngModelChange"],[1,"flex-none","text-center","px-4","py-2","m-2"],["color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(u.Sb(0,"mat-card"),u.Sb(1,"mat-card-header"),u.Sb(2,"mat-card-title"),u.Ac(3," QUESTION "),u.Rb(),u.Sb(4,"mat-card-subtitle",0),u.Ac(5," :) "),u.Rb(),u.Rb(),u.Sb(6,"mat-card-content",1),u.Sb(7,"form",2),u.Sb(8,"mat-form-field",1),u.Nb(9,"input",3),u.Rb(),u.Rb(),u.Sb(10,"ol"),u.zc(11,et,10,2,"li",4),u.Rb(),u.Sb(12,"mat-icon",5),u.Zb("click",(function(){return e.addResponse()})),u.Ac(13,"add"),u.Rb(),u.Rb(),u.Sb(14,"mat-dialog-actions"),u.zc(15,nt,2,1,"button",6),u.Rb(),u.Rb()),2&t&&(u.Bb(7),u.kc("formGroup",e.QCUQuestionForm),u.Bb(4),u.kc("ngForOf",e.qcuResponseList),u.Bb(4),u.kc("ngIf",""!=e.QCUQuestionForm.value.questionText))},directives:[Y.a,Y.c,Y.f,Y.e,Y.b,c.t,c.n,c.g,$.c,c.c,E.b,c.m,c.f,a.k,g.a,P.c,a.l,tt.a,c.p,f.b],styles:["mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),t})(),ot=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-qcm-question-form"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Sb(0,"p"),u.Ac(1,"qcm-question-form works!"),u.Rb())},styles:[""]}),t})(),st=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-input-question-form"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Sb(0,"p"),u.Ac(1,"input-question-form works!"),u.Rb())},styles:[""]}),t})(),rt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-ordering-question-form"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Sb(0,"p"),u.Ac(1,"ordering-question-form works!"),u.Rb())},styles:[""]}),t})();function ct(t,e){if(1&t){const t=u.Tb();u.Sb(0,"app-qcu-question-form",3),u.Zb("onQuestionSave",(function(){return u.rc(t),u.dc().questionSaved()})),u.Rb()}if(2&t){const t=u.dc();u.kc("quizId",t.quizId)("context",t.context)("question",t.question)}}function at(t,e){if(1&t&&u.Nb(0,"app-qcm-question-form",4),2&t){const t=u.dc();u.kc("quizId",t.quizId)}}function ut(t,e){if(1&t&&u.Nb(0,"app-input-question-form",4),2&t){const t=u.dc();u.kc("quizId",t.quizId)}}function lt(t,e){if(1&t&&u.Nb(0,"app-ordering-question-form",4),2&t){const t=u.dc();u.kc("quizId",t.quizId)}}let bt=(()=>{class t{constructor(){this.onQuestionSave=new u.o}ngOnInit(){}questionSaved(){this.onQuestionSave.next("Ok")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-question-form"]],inputs:{question_type:"question_type",quizId:"quizId",context:"context",question:"question"},outputs:{onQuestionSave:"onQuestionSave"},decls:5,vars:5,consts:[[3,"ngSwitch"],[3,"quizId","context","question","onQuestionSave",4,"ngSwitchCase"],[3,"quizId",4,"ngSwitchCase"],[3,"quizId","context","question","onQuestionSave"],[3,"quizId"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.zc(1,ct,1,3,"app-qcu-question-form",1),u.zc(2,at,1,1,"app-qcm-question-form",2),u.zc(3,ut,1,1,"app-input-question-form",2),u.zc(4,lt,1,1,"app-ordering-question-form",2),u.Rb()),2&t&&(u.kc("ngSwitch",e.question_type),u.Bb(1),u.kc("ngSwitchCase","QCU"),u.Bb(1),u.kc("ngSwitchCase","QCM"),u.Bb(1),u.kc("ngSwitchCase","INPUT"),u.Bb(1),u.kc("ngSwitchCase","ORDERING"))},directives:[a.n,a.o,it,ot,st,rt],styles:[""]}),t})();function pt(t,e){1&t&&(u.Sb(0,"span"),u.Ac(1,"Cr\xe9er le quiz"),u.Rb())}function dt(t,e){1&t&&(u.Sb(0,"span"),u.Ac(1,"Enregistrer"),u.Rb())}function mt(t,e){if(1&t){const t=u.Tb();u.Sb(0,"button",16),u.Zb("click",(function(){return u.rc(t),u.dc().openDialog()})),u.Sb(1,"mat-icon"),u.Ac(2,"add"),u.Rb(),u.Ac(3,"Question "),u.Rb()}}let ht=(()=>{class t{constructor(t,e,n,i,o,s,r,c){this.router=t,this.fb=e,this.quizService=n,this.snackBar=i,this.authenticationService=o,this.dialog=s,this.route=r,this.questionService=c,this.isCreated=!1,this.context="new",this.createQuizForm=this.fb.group({title:[""],description:[""],theme:[""],isShared:[!1]})}ngOnChanges(t){}ngOnInit(){var t,e;this.userSubscription=this.authenticationService.currentUser.subscribe(t=>this.currentUser=t);let n=null===(e=null===(t=this.route.snapshot.data)||void 0===t?void 0:t._quiz)||void 0===e?void 0:e.payload;n?(this.createQuizForm=this.fb.group({title:[n.title],description:[n.description],theme:[n.theme],isShared:[n.isSahred]}),this.isCreated=!0,this.currentQuiz=n,this.questionService.loadQuestions(n.questions)):this.questionService.loadQuestions([])}createQuiz(){let t=Object.assign({},this.createQuizForm.value);t.creator=this.currentUser._id,t.dateCreated=new Date,t.cover="assets/quiz.jpg",this.subscription=this.quizService.postQuiz(t).subscribe({next:t=>{"success"==t.status?(this.snackBar.open(t.status+"\n"+t.message,"X",{duration:4e3}),this.currentQuiz=t.payload,this.isCreated=!0):this.snackBar.open(t.status+"\n"+t.message,"X")},error:t=>{this.snackBar.open(t,"close")},complete:console.log})}saveQuiz(){this.isCreated?this.updateQuiz():this.createQuiz()}updateQuiz(){this.updateSubscription=this.quizService.updateQuiz(this.currentQuiz._id,this.createQuizForm.value).subscribe({next:t=>{this.snackBar.open(t.status+"\n"+t.message,"X",{duration:4e3})},error:t=>{this.snackBar.open(t,"close")},complete:console.log})}openDialog(){this.dialog.open(D,{width:"250px",data:{question_type:["QCM","QCU","INPUT","ORDERING"]}}).afterClosed().subscribe(t=>{this.currentQuestionType=t}),this.context="new"}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.userSubscription&&this.userSubscription.unsubscribe(),this.updateSubscription&&this.updateSubscription.unsubscribe()}updateQuestionContext(t){this.currentQuestionType=t.question_type,this.questionToUpdate=Object.assign({},t),this.context="update"}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(r.b),u.Mb(c.e),u.Mb(p),u.Mb(Z.a),u.Mb(m.a),u.Mb(P.b),u.Mb(r.a),u.Mb(X))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-add-quiz"]],features:[u.zb],decls:24,vars:9,consts:[[1,"flex","flex-col","mx-auto"],[1,"flex","flex-row"],[1,"shadow-lg","sm:flex","sm:w-full","bg-white","p-8","mx-2","w-1/2"],[1,"w-full","p-5","m-5",3,"formGroup"],[1,"w-full"],["matInput","","type","text","placeholder","Titre","required","","formControlName","title",1,"bg-transparent","border-b","m-auto","block","border-gray-500","w-full","mb-6","text-gray-700","pb-1","text-4xl"],["type","text","placeholder","Description","formControlName","description","matInput","",1,"bg-transparent","border-b","m-auto","block","border-gray-500","w-full","mb-6","text-gray-700","pb-1"],["type","text","placeholder","Theme","formControlName","theme","matInput","",1,"bg-transparent","border-b","m-auto","block","border-gray-500","w-full","mb-6","text-gray-700","pb-1"],["formControlName","isShared",1,"px-6"],["mat-raised-button","","color","primary",3,"disabled","click"],[4,"ngIf"],["mat-button","",3,"click",4,"ngIf"],[1,"w-full",3,"onQuestionUpdateCliqued"],[1,"flex","w-full","justify-center","py-4","px-2","bg-gray-200","m-3"],[1,"w-3/4"],[3,"quizId","question_type","context","question","onQuestionSave"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"form",3),u.Sb(4,"mat-form-field",4),u.Nb(5,"input",5),u.Rb(),u.Sb(6,"mat-form-field",4),u.Nb(7,"input",6),u.Rb(),u.Sb(8,"mat-form-field",4),u.Nb(9,"input",7),u.Rb(),u.Sb(10,"div",4),u.Sb(11,"mat-checkbox",8),u.Ac(12,"Partag\xe9"),u.Rb(),u.Rb(),u.Sb(13,"div",4),u.Sb(14,"button",9),u.Zb("click",(function(){return e.saveQuiz()})),u.zc(15,pt,2,0,"span",10),u.zc(16,dt,2,0,"span",10),u.Rb(),u.Rb(),u.Sb(17,"div",4),u.zc(18,mt,4,0,"button",11),u.Rb(),u.Rb(),u.Rb(),u.Sb(19,"div",2),u.Sb(20,"app-question-list",12),u.Zb("onQuestionUpdateCliqued",(function(t){return e.updateQuestionContext(t)})),u.Rb(),u.Rb(),u.Rb(),u.Sb(21,"div",13),u.Sb(22,"div",14),u.Sb(23,"app-question-form",15),u.Zb("onQuestionSave",(function(){return e.currentQuestionType=""})),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&t&&(u.Bb(3),u.kc("formGroup",e.createQuizForm),u.Bb(11),u.kc("disabled",!e.createQuizForm.valid),u.Bb(1),u.kc("ngIf",!e.isCreated),u.Bb(1),u.kc("ngIf",e.isCreated),u.Bb(2),u.kc("ngIf",e.isCreated),u.Bb(5),u.kc("quizId",null==e.currentQuiz?null:e.currentQuiz._id)("question_type",e.currentQuestionType)("context",e.context)("question",e.questionToUpdate))},directives:[c.t,c.n,c.g,$.c,E.b,c.c,c.r,c.m,c.f,V.a,f.b,a.l,W,bt,g.a],styles:[""]}),t})();var ft=n("M9IT"),gt=n("Dh3D"),St=n("+0xr"),Rt=n("Xa2L");function qt(t,e){1&t&&(u.Sb(0,"div",22),u.Nb(1,"mat-spinner"),u.Rb())}function vt(t,e){1&t&&(u.Sb(0,"th",23),u.Ac(1," Date de cr\xe9ation "),u.Rb())}function xt(t,e){if(1&t&&(u.Sb(0,"td",24),u.Ac(1),u.ec(2,"date"),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.Cc(" ",u.hc(2,1,null==t?null:t.dateCreated,"d MMMM y","","fr-FR")," ")}}function kt(t,e){1&t&&(u.Sb(0,"th",23),u.Ac(1," Th\xe8me "),u.Rb())}function yt(t,e){if(1&t&&(u.Sb(0,"td",24),u.Ac(1),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.Cc(" ",null==t?null:t.theme," ")}}function wt(t,e){1&t&&(u.Sb(0,"th",23),u.Ac(1," Title "),u.Rb())}function zt(t,e){if(1&t&&(u.Sb(0,"td",24),u.Ac(1),u.Nb(2,"br"),u.Sb(3,"p",25),u.Ac(4),u.Rb(),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.Cc(" ",null==t?null:t.title," "),u.Bb(3),u.Cc(" ",null==t?null:t.description,"")}}function Ct(t,e){1&t&&(u.Sb(0,"th",26),u.Ac(1," Cover "),u.Rb())}function Qt(t,e){if(1&t&&(u.Sb(0,"td",24),u.Nb(1,"img",27),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.kc("src",null==t?null:t.cover,u.sc)}}function At(t,e){1&t&&(u.Sb(0,"th",26),u.Ac(1," Shared "),u.Rb())}function It(t,e){if(1&t&&(u.Sb(0,"td",24),u.Ac(1),u.Rb()),2&t){const t=e.$implicit;u.Bb(1),u.Cc(" ",t.isShared," ")}}function Lt(t,e){1&t&&(u.Sb(0,"th",26),u.Ac(1," Actions "),u.Rb())}const Bt=function(t){return["/creator/quiz/update",t]};function Mt(t,e){if(1&t){const t=u.Tb();u.Sb(0,"td",24),u.Sb(1,"button",28),u.Zb("click",(function(){u.rc(t);const n=e.$implicit;return u.dc().delete(null==n?null:n._id)})),u.Sb(2,"mat-icon",29),u.Ac(3,"delete"),u.Rb(),u.Rb(),u.Sb(4,"button",30),u.Sb(5,"mat-icon",31),u.Ac(6,"edit"),u.Rb(),u.Rb(),u.Rb()}if(2&t){const t=e.$implicit;u.Bb(4),u.kc("routerLink",u.mc(1,Bt,t._id))}}function Ot(t,e){1&t&&u.Nb(0,"mat-header-row")}function _t(t,e){1&t&&u.Nb(0,"mat-row")}const Nt=function(){return["/creator/quiz/add"]},Tt=function(){return[5,10,20]};let Ut=(()=>{class t{constructor(t,e,n){this.quizService=t,this.shnackBar=e,this.dialog=n,this.isLoadingResults=!1,this.displayedColumns=["dateCreated","theme","title","cover","shared","actions"],this.resultsLength=0}ngOnInit(){this.getAllQuizzes()}ngOnChanges(){this.datasource=new St.k(this.quiz),this.datasource.paginator=this.paginator,this.datasource.sort=this.sort}delete(t){this.dialog.open(H,{width:"450px",data:"Supprimer le Quiz?\n"}).afterClosed().subscribe(e=>{e&&this.quizService.deleteQuiz(t).subscribe({next:t=>{this.shnackBar.open(t.message,"X",{duration:3e3}),this.getAllQuizzes()},error:t=>{this.shnackBar.open(t.message,"X")},complete:console.log})})}edit(t){console.log(t)}applyFilter(t){this.datasource.filter=t.trim().toLowerCase()}ngOnDestroy(){this.subscription.unsubscribe()}getAllQuizzes(){this.subscription=this.quizService.getAllQuizzes().subscribe({next:t=>{var e;this.isLoadingResults=!0,this.quiz=t.payload,this.datasource=new St.k(this.quiz),this.resultsLength=null===(e=this.quiz)||void 0===e?void 0:e.length,this.datasource.paginator=this.paginator,this.datasource.sort=this.sort,this.shnackBar.open(t.message,"X",{duration:3e3})},error:t=>{this.shnackBar.open(t.message,"X")},complete:()=>{this.isLoadingResults=!1}})}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(p),u.Mb(Z.a),u.Mb(P.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["app-quiz-list"]],viewQuery:function(t,e){var n;1&t&&(u.vc(ft.a,!0),u.vc(gt.a,!0)),2&t&&(u.oc(n=u.ac())&&(e.paginator=n.first),u.oc(n=u.ac())&&(e.sort=n.first))},features:[u.zb],decls:34,vars:10,consts:[[1,"container","w-full","flex-full"],[1,"flex","mx-auto"],[1,"justify-start","px-12","align-center"],["matPrefix",""],["matInput","","placeholder","Filter",1,"px-12","py-3","text-teal-900","rounded-b","shadow-md",3,"keyup"],[1,"align-center"],["mat-stroked-button","",1,"justify-end",3,"routerLink"],["class","spinner-container center align-center",4,"ngIf"],[1,"shadow-lg","mat-elevation-z8","px-6exi",2,"cursor","pointer"],["mat-table","","matSort","","matSortActive","dateCreated","matSortDirection","desc","matSortDisableClear","",1,"font-mono",3,"dataSource"],["matColumnDef","dateCreated"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","theme"],["matColumnDef","title"],["matColumnDef","cover",1,"lg:hidden"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","shared"],["matColumnDef","actions"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],[1,"spinner-container","center","align-center"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"w-full","text-gray-700","font-mono"],["mat-header-cell",""],[1,"h-12",3,"src"],["mat-button","",3,"click"],["color","warn",1,"icon-button"],["mat-button","",3,"routerLink"],["color","primary",1,"icon-button"]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"mat-form-field",2),u.Sb(3,"mat-icon",3),u.Ac(4,"search"),u.Rb(),u.Sb(5,"input",4),u.Zb("keyup",(function(t){return e.applyFilter(t.target.value)})),u.Rb(),u.Rb(),u.Sb(6,"div",5),u.Sb(7,"a",6),u.Sb(8,"mat-icon"),u.Ac(9,"add"),u.Rb(),u.Rb(),u.Rb(),u.zc(10,qt,2,0,"div",7),u.Rb(),u.Sb(11,"div",8),u.Sb(12,"table",9),u.Qb(13,10),u.zc(14,vt,2,0,"th",11),u.zc(15,xt,3,6,"td",12),u.Pb(),u.Qb(16,13),u.zc(17,kt,2,0,"th",11),u.zc(18,yt,2,1,"td",12),u.Pb(),u.Qb(19,14),u.zc(20,wt,2,0,"th",11),u.zc(21,zt,5,2,"td",12),u.Pb(),u.Qb(22,15),u.zc(23,Ct,2,0,"th",16),u.zc(24,Qt,2,1,"td",12),u.Pb(),u.Qb(25,17),u.zc(26,At,2,0,"th",16),u.zc(27,It,2,1,"td",12),u.Pb(),u.Qb(28,18),u.zc(29,Lt,2,0,"th",16),u.zc(30,Mt,7,3,"td",12),u.Pb(),u.zc(31,Ot,1,0,"mat-header-row",19),u.zc(32,_t,1,0,"mat-row",20),u.Rb(),u.Nb(33,"mat-paginator",21),u.Rb(),u.Rb()),2&t&&(u.Bb(7),u.kc("routerLink",u.lc(8,Nt)),u.Bb(3),u.kc("ngIf",e.isLoadingResults),u.Bb(2),u.kc("dataSource",e.datasource),u.Bb(19),u.kc("matHeaderRowDef",e.displayedColumns),u.Bb(1),u.kc("matRowDefColumns",e.displayedColumns),u.Bb(1),u.kc("length",null==e.quiz?null:e.quiz.length)("pageSize",5)("pageSizeOptions",u.lc(9,Tt)))},directives:[$.c,g.a,$.h,E.b,f.a,r.e,a.l,St.j,gt.a,St.c,St.e,St.b,St.g,St.i,ft.a,Rt.b,St.d,gt.b,St.a,f.b,r.c,St.f,St.h],pipes:[a.e],styles:["table[_ngcontent-%COMP%]{width:100%}mat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{border-bottom:none;border-top:none}.mat-column-dateCreated[_ngcontent-%COMP%]{flex:6rem;min-width:6rem}.mat-column-theme[_ngcontent-%COMP%]{flex:4rem;min-width:4rem}.mat-column-title[_ngcontent-%COMP%]{flex:9rem;min-width:9rem}.mat-column-cover[_ngcontent-%COMP%], .mat-column-shared[_ngcontent-%COMP%]{flex:2rem;min-width:2rem}.mat-column-actions[_ngcontent-%COMP%]{flex:4rem;min-width:4rem}th[_ngcontent-%COMP%]{border-bottom:transparent;font-size:1rem}td[_ngcontent-%COMP%]{border:transparent;padding:5px}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#8a2be2}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}"]}),t})();const Pt=[{path:"",component:N,children:[{path:"home",component:T},{path:"quiz",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-repos-page"]],decls:4,vars:0,consts:[[1,"text-blue-900"],[1,"container"]],template:function(t,e){1&t&&(u.Sb(0,"h1",0),u.Ac(1," Quiz List"),u.Rb(),u.Sb(2,"div",1),u.Nb(3,"app-quiz-list"),u.Rb())},directives:[Ut],styles:[""]}),t})()},{path:"quiz/add",component:ht},{path:"quiz/update/:id",component:ht,resolve:{_quiz:d}},{path:"about",component:U.a},{path:"support",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-support-page"]],decls:9,vars:0,consts:[[1,""]],template:function(t,e){1&t&&(u.Sb(0,"div",0),u.Sb(1,"h3"),u.Ac(2,"Support For Creator"),u.Rb(),u.Sb(3,"p"),u.Ac(4," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur corrupti, recusandae impedit dolores molestias architecto est neque quod, laborum minus? Nam quae error quaerat nostrum nesciunt saepe tenetur at."),u.Rb(),u.Sb(5,"h3"),u.Ac(6,"Issues"),u.Rb(),u.Sb(7,"p"),u.Ac(8," Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur corrupti, recusandae impedit dolores molestias architecto est neque quod, laborum minus? Nam quae error quaerat nostrum nesciunt saepe tenetur at."),u.Rb(),u.Rb())},styles:[""]}),t})()},{path:"settings",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["app-settings"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Sb(0,"p"),u.Ac(1,"settings works!"),u.Rb())},styles:[""]}),t})()},{path:"**",redirectTo:"home",pathMatch:"full"}]},{path:"**",redirectTo:""}];let $t=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[r.f.forChild(Pt)],r.f]}),t})(),Ft=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[a.c,$t,c.h,r.f,c.q,s.a,o.a,i.a]]}),t})()}}]);