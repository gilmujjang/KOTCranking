(this.webpackJsonpkotc_ranking=this.webpackJsonpkotc_ranking||[]).push([[0],{250:function(e,t,a){},279:function(e,t,a){},445:function(e,t,a){},565:function(e,t,a){},566:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(68),r=a.n(c),i=a(97),l=(a(344),a(250),a(8)),d=a(45),j=a(29),o=a(10),u=a.n(o),m=a(30),b=a(39);a(346),a(197),a(568);b.a.initializeApp({apiKey:"AIzaSyBHxC9KHBIJunwnJgf9w2-I38y66-SbMJ8",authDomain:"ranking-e77e3.firebaseapp.com",databaseURL:"https://ranking-e77e3.firebaseio.com",projectId:"ranking-e77e3",storageBucket:"ranking-e77e3.appspot.com",messagingSenderId:"198460170843",appId:"1:198460170843:web:bb151c4e352fb386ff957e",measurementId:"G-EZ9XRH78P4"});var O=b.a,h=b.a.auth(),x=b.a.firestore(),p=b.a.storage(),g=a(46),f=a(201),v=a(3),N=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(l.a)(c,2),i=r[0],d=r[1],o=Object(n.useState)(""),b=Object(l.a)(o,2),x=b[0],p=b[1],N=Object(j.f)(),w=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(a=new O.auth.GoogleAuthProvider),e.next=4,h.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?s(n):"password"===a&&d(n)},k=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h.signOut();case 3:return e.prev=3,e.next=6,h.signInWithEmailAndPassword(a,i);case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),p(e.t0.message);case 12:N.push("/");case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(g.a,{icon:f.a,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)("div",{children:" \uad6c\uae00 \ub85c\uadf8\uc778\ub9cc \uac00\ub2a5 \ubc11\uc5d0 Continue with Google \ud074\ub9ad\ud558\uc148"}),Object(v.jsxs)("form",{onSubmit:k,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:_,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:_,className:"authInput"}),Object(v.jsx)("input",{className:"authInput authSubmit",type:"submit",value:"Log In"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("div",{className:"authBtns",children:Object(v.jsxs)("button",{onClick:w,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(g.a,{icon:f.a})]})})]})},w=function(){var e=Object(j.f)();return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("span",{className:"headerText",children:"KOTC \ub7ad\ud0b9\uc2dc\uc2a4\ud15c \uad00\ub9ac\uc790 \ud398\uc774\uc9c0"}),Object(v.jsx)("i",{class:"fas fa-sign-out-alt fa-2x logout needMargin",onClick:function(){h.signOut(),e.push("/")}})]})},_=a(146),k=a(50),C=a(618),y=a(619),S=a(620),M=function(){var e=Object(n.useState)({name:"",studentid:"",department:"",start_rating:"",rating:"",status:"\uc7ac\ud559"}),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(l.a)(c,2),i=r[0],d=r[1],j=a.name,o=a.studentid,b=a.department,O=a.start_rating,h=a.status,g=function(e){var t=e.target,n=t.value,c=t.name;s(Object(k.a)(Object(k.a)({},a),{},Object(_.a)({},c,n)))},f=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,c,r,l,m,g,f,v,N,w,_;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==j){e.next=4;break}return alert("\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 4:if(""!==o){e.next=7;break}return alert("\ud559\ubc88\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 7:if(""!==b){e.next=10;break}return alert("\ud559\uacfc\ub97c \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 10:if(""!==O){e.next=13;break}return alert("\ucd08\uae30 \ub808\uc774\ud305\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 13:if(""!==h){e.next=16;break}return alert("\uc7ac\ud559\uc0c1\ud0dc\ub97c \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 16:if(a="",""===i){e.next=25;break}return n=p.ref().child("userprofile").child(j),e.next=21,n.putString(i,"data_url");case 21:return c=e.sent,e.next=24,c.ref.getDownloadURL();case 24:a=e.sent;case 25:return r=new Date,l=r.getFullYear(),(m=r.getMonth()+1)<10&&(m="0"+m),(g=r.getDate())<10&&(g="0"+g),(f=r.getHours())<10&&(f="0"+f),(v=r.getMinutes())<10&&(v="0"+v),(N=r.getSeconds())<10&&(N="0"+N),w=l+""+m+g+f+v+N,_={name:j,studentid:parseInt(o),department:b,start_rating:parseInt(O),rating:parseInt(O),status:h,time:w,attachmentUrl:a,game_all:0,game_win:0,game_lose:0},e.next=41,x.collection("user").doc(j).set(_);case 41:d(""),s({name:"",studentid:"",department:"",start_rating:"",rating:"",status:"\uc7ac\ud559"});case 43:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(v.jsx)("div",{className:"userMaker",children:Object(v.jsxs)(C.a,{className:"noteWriter",children:[Object(v.jsxs)("div",{className:"userProfileImage",children:[Object(v.jsx)("span",{children:"\ud504\uc0ac"}),Object(v.jsx)(y.a,{type:"file",name:"file",id:"exampleFile",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)}})]}),i&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{className:"profileImg",src:i,alt:"profile image"}),Object(v.jsx)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:Object(v.jsx)("span",{children:"Remove"})})]}),Object(v.jsxs)("div",{className:"needMargin",children:[Object(v.jsx)("span",{children:"\uc774\ub984"}),Object(v.jsx)(y.a,{type:"text",name:"name",onChange:g,value:j})]}),Object(v.jsxs)("div",{className:"needMargin",children:[Object(v.jsx)("span",{children:"\ud559\ubc88"}),Object(v.jsx)(y.a,{type:"text",name:"studentid",onChange:g,value:o})]}),Object(v.jsxs)("div",{className:"needMargin",children:[Object(v.jsx)("span",{children:"\ud559\uacfc"}),Object(v.jsx)(y.a,{type:"text",name:"department",onChange:g,value:b})]}),Object(v.jsxs)("div",{className:"needMargin",children:[Object(v.jsx)("span",{children:"\ucd08\uae30\ub808\uc774\ud305"}),Object(v.jsx)(y.a,{type:"text",name:"start_rating",onChange:g,value:O})]}),Object(v.jsxs)("div",{className:"needMargin",children:[Object(v.jsx)("span",{children:"\uc0c1\ud0dc"}),Object(v.jsxs)(y.a,{type:"select",name:"status",onChange:g,value:h,children:[Object(v.jsx)("option",{children:"\uc7ac\ud559"}),Object(v.jsx)("option",{children:"\uc878\uc5c5"})]})]}),Object(v.jsx)(S.a,{className:"needMargin",onClick:f,children:"\uc804\uc1a1"})]})});return Object(v.jsx)("div",{className:"ShortBox",children:N})},I=(a(355),a(356),a(315)),U=a.n(I),F=function(e){var t=e.allUsers,a=b.a.firestore.FieldValue.increment(1),s=Object(n.useState)(""),c=Object(l.a)(s,2),r=c[0],i=c[1],j=Object(n.useState)([]),o=Object(l.a)(j,2),O=o[0],h=o[1],p=Object(n.useState)(""),g=Object(l.a)(p,2),f=g[0],N=g[1],w=Object(n.useState)([]),_=Object(l.a)(w,2),k=_[0],M=_[1],I=Object(n.useState)(""),F=Object(l.a)(I,2),B=F[0],D=F[1],R=Object(n.useState)([]),G=Object(l.a)(R,2),E=G[0],A=G[1],H=Object(n.useState)([]),L=Object(l.a)(H,2),P=L[0],W=L[1],V=Object(n.useState)(new Date),K=Object(l.a)(V,2),T=K[0],J=K[1],z=Object(n.useState)([]),Y=Object(l.a)(z,2),q=Y[0],X=Y[1];Object(n.useEffect)((function(){t.map((function(e){X((function(t){return[].concat(Object(d.a)(t),[e.name])}))}))}),[t]);var Z=function(e){if("Enter"===e.key){if(e.preventDefault(),E.length>=2)return alert("2\uba85\uc774\ud558\ub9cc"),void i("");if(q.includes(r)){if(B.includes(r))return alert("\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc720\uc800\uc785\ub2c8\ub2e4"),void i("");A(E.concat(r)),D(B.concat(r)),x.collection("user").where("name","==",r).get().then((function(e){e.forEach((function(e){h(O.concat(e.data().rating))}))})),i("")}else Number.isInteger(parseInt(r))?(A(E.concat(r)),i(""),h(O.concat(Number(r)))):(alert("\ub4f1\ub85d\ub41c \uc720\uc800\uac00 \uc544\ub2d9\ub2c8\ub2e4"),i(""))}else i(e.target.value)},Q=function(e){if("Enter"===e.key){if(e.preventDefault(),P.length>=2)return alert("2\uba85\uc774\ud558\ub9cc"),void N("");if(q.includes(f)){if(B.includes(f))return alert("\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc720\uc800\uc785\ub2c8\ub2e4"),void N("");D(B.concat(f)),W(P.concat(f)),x.collection("user").where("name","==",f).get().then((function(e){e.forEach((function(e){M(k.concat(e.data().rating))}))})),N("")}else Number.isInteger(parseInt(f))?(W(P.concat(f)),N(""),M(k.concat(Number(f)))):(alert("\ub4f1\ub85d\ub41c \uc720\uc800\uac00 \uc544\ub2d9\ub2c8\ub2e4"),N(""))}else N(e.target.value)},$=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,s,c,r,l,d,j,o,m,b,p,g,f,v,w,_,C;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=O[0],s=k[0],2==O.length&&(n=(Math.max(O[0],O[1])+2*Math.min(O[0],O[1]))/3),2==k.length&&(s=(Math.max(k[0],k[1])+2*Math.min(k[0],k[1]))/3),c=(1/(1+Math.pow(10,(s-n)/400))).toFixed(2),r=(1-c).toFixed(2),l=0,l=2==O.length?Math.round(16*r):Math.round(32*r),0!==E.length){e.next=12;break}return alert("\uc2b9\uc790\ub97c \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 12:if(0!==P.length){e.next=15;break}return alert("\ud328\uc790\ub97c \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 15:if(E.length===P.length){e.next=18;break}return alert("\uc778\uc6d0\uc744 \ub9de\ucd94\uc2dc\uc624"),e.abrupt("return");case 18:if(d=new Date,j=d.getFullYear(),(o=d.getMonth()+1)<10&&(o="0"+o),(m=d.getDate())<10&&(m="0"+m),(b=d.getHours())<10&&(b="0"+b),(p=d.getMinutes())<10&&(p="0"+p),(g=d.getSeconds())<10&&(g="0"+g),f=j+""+o+m+b+p+g,j=T.getFullYear(),(o=T.getMonth()+1)<10&&(o="0"+o),(m=T.getDate())<10&&(m="0"+m),v=j+""+o+m,w=O.map((function(e){return e+l})),_=k.map((function(e){return e-l})),C={winners:E,winnerRatingBefore:O,winnerRatingAfter:w,losers:P,loserRatingBefore:k,loserRatingAfter:_,percentage:Math.round(100*c),ratingChange:l,date:v,write_time:f},NaN!=c){e.next=43;break}return alert("percentage is never NaN"),e.abrupt("return");case 43:return e.next=45,x.collection("game").doc(v+"-"+f).set(C);case 45:return e.next=47,E.map((function(e){x.collection("user").doc(e).collection("game_record").doc(v+"-"+f).set(C),x.collection("user").doc(e).update({rating:O.shift()+l,game_all:a,game_win:a})}));case 47:return e.next=49,P.map((function(e){x.collection("user").doc(e).collection("game_record").doc(v+"-"+f).set(C),x.collection("user").doc(e).update({rating:k.shift()-l,game_all:a,game_lose:a})}));case 49:i(""),N(""),A([]),W([]),D([]),h([]),M([]);case 50:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=Object(v.jsx)("div",{className:"userMaker",children:Object(v.jsxs)(C.a,{className:"noteWriter",children:[Object(v.jsxs)("div",{className:"matchResult",children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:"\uc2b9"}),Object(v.jsx)(y.a,{type:"text",name:"win",value:r,onChange:Z,onKeyPress:Z}),Object(v.jsx)("div",{className:"users playerView",children:E.map((function(e){return Object(v.jsx)("span",{className:"targetUser",children:e})}))})]}),Object(v.jsx)("span",{className:"versus",children:" VS "}),Object(v.jsxs)("span",{children:[Object(v.jsx)("div",{children:"\ud328"}),Object(v.jsx)(y.a,{type:"text",name:"lose",value:f,onChange:Q,onKeyPress:Q}),Object(v.jsx)("div",{className:"users",children:Object(v.jsx)("div",{className:"flexWrap",children:P.map((function(e){return Object(v.jsx)("span",{className:"targetUser",children:e})}))})})]})]}),Object(v.jsxs)("div",{className:"datepicker",children:[Object(v.jsx)("span",{className:"needMargin",children:"\uc2dc\ud569\uc77c"}),Object(v.jsx)(U.a,{selected:T,onChange:function(e){return J(e)}})]}),Object(v.jsx)(S.a,{className:"needMargin",onClick:$,children:"\uc804\uc1a1"})]})});return Object(v.jsx)("div",{className:"ShortBox",children:ee})},B=a(630),D=a(621),R=function(e){var t=e.allUsers.map((function(e){return Object(v.jsxs)(B.a,{children:[Object(v.jsx)(D.a,{children:Object(v.jsxs)("div",{className:"spaceBetween",children:[Object(v.jsxs)("div",{children:[e.name,"__"]}),Object(v.jsx)("div",{children:e.status})]})}),Object(v.jsxs)("div",{className:"needMargin spaceBetween",children:[Object(v.jsxs)("div",{children:["\ud559\ubc88 : ",e.studentid]}),Object(v.jsxs)("div",{children:["\ud559\uacfc : ",e.department]})]}),Object(v.jsxs)("div",{className:"needMargin spaceBetween",children:[Object(v.jsxs)("div",{children:["Rating : ",e.rating]}),Object(v.jsxs)("div",{children:["\uc804\uc801 : ",e.game_win,"\uc2b9 ",e.game_lose,"\ud328"]})]})]})}));return Object(v.jsx)("div",{className:"LongBox",children:t})},G=function(e){var t=e.allGame,a=function(){var e=Object(m.a)(u.a.mark((function e(a){var n,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],s=[],c=0,t.map((function(e){e.id==a.target.id&&(n=n.concat(e.winners),s=s.concat(e.losers),c=e.ratingChange)})),e.next=6,n.map((function(e){x.collection("user").doc(e).collection("game_record").doc(a.target.id).delete(),x.collection("user").doc(e).update({rating:b.a.firestore.FieldValue.increment(-c),game_all:b.a.firestore.FieldValue.increment(-1),game_win:b.a.firestore.FieldValue.increment(-1)})}));case 6:return e.next=8,s.map((function(e){x.collection("user").doc(e).collection("game_record").doc(a.target.id).delete(),x.collection("user").doc(e).update({rating:b.a.firestore.FieldValue.increment(c),game_all:b.a.firestore.FieldValue.increment(-1),game_lose:b.a.firestore.FieldValue.increment(-1)})}));case 8:return e.next=10,x.collection("game").doc(a.target.id).delete();case 10:alert(a.target.id+" \ub97c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=t.map((function(e){return Object(v.jsxs)("div",{className:"displayFlex",children:[Object(v.jsxs)(B.a,{children:[Object(v.jsxs)(D.a,{children:[e.winners.map((function(e){return Object(v.jsx)("span",{className:"targetUser",children:e})})),"vs",e.losers.map((function(e){return Object(v.jsx)("span",{className:"targetUser",children:e})}))]}),Object(v.jsxs)("div",{className:"needMargin flexWrap spaceBetween",children:[Object(v.jsxs)("div",{children:["\ub808\uc774\ud305\ubcc0\ud654 : ",e.ratingChange]}),Object(v.jsxs)("div",{children:["\uc2b9\ub960\uc608\uce21 : ",e.percentage,"%"]})]}),Object(v.jsxs)("div",{className:"needMargin flexWrap spaceBetween",children:["\ub4f1\ub85d\uc2dc\uac01 : ",e.time]})]}),Object(v.jsx)("i",{class:"far fa-trash-alt deleteIcon",id:e.date+"-"+e.time,onClick:a})]})}));return Object(v.jsxs)("div",{className:"LongBox",children:[Object(v.jsxs)("div",{className:"gameListHeader",children:[Object(v.jsx)("span",{children:"\uc2b9\ub9ac\ud300"}),Object(v.jsx)("span",{children:"\ud328\ubc30\ud300"})]}),Object(v.jsx)("div",{children:n})]})},E=(a(445),function(e){var t=e.allUsers,a=e.allGame;return Object(v.jsxs)("div",{className:"AdminMain",children:[Object(v.jsx)(w,{}),Object(v.jsxs)("div",{className:"Content",children:[Object(v.jsx)(M,{}),Object(v.jsx)(F,{allUsers:t}),Object(v.jsx)(R,{allUsers:t}),Object(v.jsx)(G,{allGame:a})]})]})}),A=function(e){var t=e.userObj,a=Object(n.useState)(!1),s=Object(l.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),o=j[0],b=j[1],g=Object(n.useState)([]),f=Object(l.a)(g,2),N=f[0],w=f[1],_=Object(n.useState)(""),k=Object(l.a)(_,2),C=k[0],y=k[1],S=Object(n.useState)([]),M=Object(l.a)(S,2),I=M[0],U=M[1],F=Object(n.useState)([]),B=Object(l.a)(F,2),D=B[0],R=B[1];Object(n.useEffect)((function(){w([]),x.collection("post").orderBy("date","desc").limit(30).get().then((function(e){e.docs.map((function(e){var t={content:e.data().content,writer:e.data().writer,writerprofile:e.data().writerprofile,date:e.data().date,recent_fix:e.data().recent_fix,imageurl:e.data().imageurl};w((function(e){return[].concat(Object(d.a)(e),[t])}))}))}))}),[o]);var G=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(a=new O.auth.GoogleAuthProvider),e.next=4,h.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(u.a.mark((function e(a){var n,s,i,l,d,j,O,h,g,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==C){e.next=4;break}return alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 4:return n=new Date,s=n.getFullYear(),(i=n.getMonth()+1)<10&&(i="0"+i),(l=n.getDate())<10&&(l="0"+l),(d=n.getHours())<10&&(d="0"+d),(j=n.getMinutes())<10&&(j="0"+j),(O=n.getSeconds())<10&&(O="0"+O),h=s+""+i+l+d+j+O,0!==I.length&&(g=0,I.map(function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g+=1,e.next=3,p.ref().child("post/").child(h).child(String(g));case 3:return a=e.sent,e.next=6,a.putString(t,"data_url");case 6:return n=e.sent,e.next=9,n.ref.getDownloadURL();case 9:return s=e.sent,e.next=12,R(D.concat(s));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),f={date:h,recent_fix:h,content:C,writer:t.displayName,writerprofile:t.photoUrl,imageurl:D},e.next=21,x.collection("post").doc(h).set(f);case 21:y(""),r(!c),b(!o),U([]),R([]);case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){r(!c)},H=N.map((function(e){return Object(v.jsxs)("div",{className:"post",children:[Object(v.jsxs)("div",{className:"postHeader",children:[Object(v.jsx)("div",{className:"postHeaderLeft",children:Object(v.jsx)("img",{className:"userProfile",src:e.writerprofile})}),Object(v.jsxs)("div",{className:"postHeaderRight",children:[Object(v.jsx)("div",{classNames:"userName",children:e.writer}),Object(v.jsxs)("div",{classNames:"postDate",children:[e.date.slice(0,4),"\ub144 ",e.date.slice(4,6),"\uc6d4 ",e.date.slice(6,8),"\uc77c"]})]})]}),Object(v.jsxs)("div",{className:"postContent",children:[Object(v.jsx)("div",{children:e.content}),Object(v.jsx)("div",{children:e.imageurl&&e.imageurl.map((function(e){return Object(v.jsx)("img",{src:e,className:"postImage"})}))})]})]})})),L=Object(v.jsxs)("div",{className:c?"postMaker active":"postMaker",children:[Object(v.jsx)("div",{className:"postMakeHeader",children:" \uac8c\uc2dc\ubb3c \ub9cc\ub4e4\uae30 "}),Object(v.jsx)("textarea",{className:"makePost",onChange:function(e){e.preventDefault(),y(e.target.value)},value:C,placeholder:"\ubc18\uac11\uc2b5\ub2c8\ub2e4 ".concat(t.displayName,"\ub2d8!")}),Object(v.jsxs)("div",{className:"file",children:[Object(v.jsxs)("div",{className:"fileHeader",children:[Object(v.jsx)("input",{type:"file",id:"fileInput",className:"fileInput",multiple:!0,onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;U(I.concat(t))},a.readAsDataURL(t)}}),Object(v.jsxs)("label",{htmlFor:"fileInput",children:[Object(v.jsx)("span",{children:"\uc774\ubbf8\uc9c0 \ucd94\uac00\ud558\uae30"}),Object(v.jsx)("i",{class:"fas fa-images fa-2x"})]})]}),I.length<6&&I.map((function(e){return Object(v.jsx)("img",{className:"images",src:e,alt:"photo"})})),I.length>=6&&I.map((function(e){return Object(v.jsx)("img",{className:"images",src:e,alt:"photo"})}))]}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)("button",{className:"writeModeBtn",onClick:A,children:"\ucde8\uc18c"}),Object(v.jsx)("button",{className:"writeModeBtn",onClick:E,children:"\uc791\uc131"})]})]}),P=Object(v.jsxs)("div",{className:"postMakeBtn",children:[Object(v.jsxs)("div",{children:[t.displayName," \ub2d8 \uc548\ub155\ud558\uc138\uc694!"]}),Object(v.jsx)("button",{className:"writeModeBtn",onClick:A,children:"\uc791\uc131"})]}),W=Object(v.jsx)("button",{onClick:G,name:"google",className:"writeModeBtn",children:"\uad6c\uae00 \ub85c\uadf8\uc778"});return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"postMain",children:[L,Object(v.jsxs)("div",{className:c?"postList active":"postList",children:[t.displayName?Object(v.jsx)(v.Fragment,{children:P}):Object(v.jsx)(v.Fragment,{children:W}),H]})]})})},H=(a(279),a(55)),L=function(e){var t=e.allUsers,a=(e.allGame,e.contentMode),s=(e.setContentMode,t.filter((function(e){return"\uc7ac\ud559"===e.status}))),c=(t.filter((function(e){return 16===e.studentid})),Object(n.useState)({end:9})),r=Object(l.a)(c,2),i=r[0],d=r[1],j=Object(n.useState)([]),o=Object(l.a)(j,2),u=o[0],m=o[1],b=Object(n.useState)("\uc804\uccb4"),O=Object(l.a)(b,2),h=O[0],x=O[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),N=f[0],w=f[1];Object(n.useEffect)((function(){if("\uc7ac\ud559\uc0dd\ub7ad\ud0b9"===a)m(s.slice(0,i.end));else if("\uc804\uccb4\ub7ad\ud0b9"===a)switch(h){case"\uc804\uccb4":m(t);break;case"\ud559\ubc88":m(N?t.filter((function(e){return e.studentid===parseInt(N)})):t);break;default:m(t)}}),[a,t,i,h,N]);var _=u.map((function(e,t){return Object(v.jsxs)("div",{className:"ranking",children:[Object(v.jsx)("p",{className:"item--left grade",children:t+1}),Object(v.jsx)("div",{className:"item--img",children:e.attachmentUrl?Object(v.jsx)("img",{src:e.attachmentUrl,alt:"profile-img"}):Object(v.jsx)("img",{src:"https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/68/d768b6caa2c0d23507bc12087bf171a8.jpeg",alt:"profile-img"})}),Object(v.jsxs)("div",{className:"item--right",children:[Object(v.jsx)("span",{className:"rating",children:e.rating}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"studentName",children:e.name}),Object(v.jsx)("span",{className:"studentId",children:e.studentid}),Object(v.jsx)("span",{className:"department",children:e.department})]})]})]},t)}));function C(e){var t=e.target.id;x(t)}var y=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"dropdown",children:[Object(v.jsxs)("div",{className:"dropdown--selected",children:[Object(v.jsx)("span",{className:"selected",children:h}),Object(v.jsx)(g.a,{icon:H.a})]}),Object(v.jsxs)("ul",{className:"dropdown--list",children:[Object(v.jsx)("li",{id:"\uc804\uccb4",className:"dropdown--list__item",onClick:C,children:"\uc804\uccb4"}),Object(v.jsx)("li",{id:"\ud559\ubc88",className:"dropdown--list__item",onClick:C,children:"\ud559\ubc88"})]})]}),Object(v.jsx)("input",{type:"text",className:"filter--rangkingContent",placeholder:"text me...",onChange:function(e){w(e.target.value)}})]});return Object(v.jsxs)(v.Fragment,{children:["\uc804\uccb4\ub7ad\ud0b9"===a&&y,Object(v.jsx)("div",{className:"rankingContainer",onScroll:function(e){var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight)switch(s.length-i.end){case 0:break;case 1:d((function(e){return Object(k.a)(Object(k.a)({},e),{},{end:e.end+1})}));break;case 2:d((function(e){return Object(k.a)(Object(k.a)({},e),{},{end:e.end+2})}));break;case 3:d((function(e){return Object(k.a)(Object(k.a)({},e),{},{end:e.end+3})}));break;case 4:d((function(e){return Object(k.a)(Object(k.a)({},e),{},{end:e.end+4})}));break;default:d((function(e){return Object(k.a)(Object(k.a)({},e),{},{end:e.end+5})}))}},children:_})]})},P=function(e){var t=e.allGame.slice(0,5).map((function(e,t){return Object(v.jsxs)("div",{className:"game",children:[Object(v.jsxs)("div",{className:"top",children:[e.date.slice(0,4),"\ub144 ",e.date.slice(4,6),"\uc6d4 ",e.date.slice(6),"\uc77c"]}),Object(v.jsx)("div",{className:"bot",children:2===e.winners.length?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"winner",children:[Object(v.jsx)("span",{children:"Winner! ^^"}),Object(v.jsxs)("div",{className:"winnerInfo",children:[Object(v.jsxs)("div",{className:"winnerNames",children:[Object(v.jsx)("span",{className:"winner__name",children:e.winners[0]}),Object(v.jsx)("span",{className:"winner__name",children:e.winners[1]})]}),Object(v.jsxs)("div",{className:"winnerRatings",children:[Object(v.jsxs)("span",{className:"winner__rating>",children:[e.ratingChange,Object(v.jsx)(g.a,{className:"icon--win",icon:H.b})]}),Object(v.jsxs)("span",{className:"winner__rating>",children:[e.ratingChange,Object(v.jsx)(g.a,{className:"icon--win",icon:H.b})]})]})]})]}),Object(v.jsxs)("div",{className:"loser",children:[Object(v.jsx)("span",{children:"loser! \u3160\u3160"}),Object(v.jsxs)("div",{className:"loserInfo",children:[Object(v.jsxs)("div",{className:"loserNames",children:[Object(v.jsx)("span",{className:"loser__name",children:e.losers[0]}),Object(v.jsx)("span",{className:"loser__name",children:e.losers[1]})]}),Object(v.jsxs)("div",{className:"loserRatings",children:[Object(v.jsxs)("span",{className:"loser__rating>",children:[e.ratingChange,Object(v.jsx)(g.a,{className:"icon--lose",icon:H.a})]}),Object(v.jsxs)("span",{className:"loser__rating>",children:[e.ratingChange,Object(v.jsx)(g.a,{className:"icon--lose",icon:H.a})]})]})]})]})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"winner",children:[Object(v.jsx)("span",{children:"Winner! ^^"}),Object(v.jsxs)("div",{className:"winnerInfo",children:[Object(v.jsx)("div",{className:"winnerNames",children:Object(v.jsx)("span",{className:"winner__name",children:e.winners[0]})}),Object(v.jsx)("div",{className:"winnerRatings",children:Object(v.jsxs)("span",{className:"winner__rating>",children:[e.ratingChange,Object(v.jsx)(g.a,{className:"icon--win",icon:H.b})]})})]})]}),Object(v.jsxs)("div",{className:"loser",children:[Object(v.jsx)("span",{children:"loser! \u3160\u3160"}),Object(v.jsxs)("div",{className:"loserInfo",children:[Object(v.jsx)("div",{className:"loserNames",children:Object(v.jsx)("span",{className:"loser__name",children:e.losers[0]})}),Object(v.jsx)("div",{className:"loserRatings",children:Object(v.jsxs)("span",{className:"loser__rating>",children:[e.ratingChange,Object(v.jsx)(g.a,{className:"icon--lose",icon:H.a})]})})]})]})]})})]},t)}));return Object(v.jsx)("div",{className:"games",children:t})},W=(a(446),function(e){var t=e.allUsersByTime,a=e.setIsDetailOn,n=e.userKey,s=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"detail--profile",children:Object(v.jsx)("img",{src:t[n].attachmentUrl,alt:"detail profile"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"detail__name",children:t[n].name}),Object(v.jsxs)("span",{className:"detail__department",children:[t[n].department,"\uacfc"]}),Object(v.jsxs)("span",{className:"detail__status",children:[t[n].studentid,"\ud559\ubc88 / ",t[n].status]})]})]});return Object(v.jsxs)("div",{className:"detailContainer",children:[Object(v.jsxs)("div",{className:"top",children:[Object(v.jsx)("div",{className:"top--left",children:s}),Object(v.jsx)("div",{className:"top--right"})]}),Object(v.jsx)("div",{className:"bottom"}),Object(v.jsx)(g.a,{icon:H.c,className:"close",onClick:function(e){a(!1)}})]})}),V=function(e){var t=e.allUsers,a=(e.allGame,Object(d.a)(t));a.sort((function(e,t){return e.time>t.time?-1:e.time<t.time?1:0}));var s=Object(n.useState)([]),c=Object(l.a)(s,2),r=c[0],i=c[1],j=Object(n.useState)(!1),o=Object(l.a)(j,2),u=o[0],m=o[1],b=Object(n.useState)(""),O=Object(l.a)(b,2),h=O[0],x=O[1],p=Object(n.useState)(0),g=Object(l.a)(p,2),f=g[0],N=g[1];function w(e){m(!0),N(e.target.dataset.num)}var _=r.map((function(e,t){return Object(v.jsxs)("div",{className:"userInfo",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"userImage",src:e.attachmentUrl,onClick:w,"data-num":t,alt:"profile--detail"},t)}),Object(v.jsxs)("div",{className:"userInfoRightSide",children:[Object(v.jsxs)("div",{className:"userInfoUpSide",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"studentName",children:e.name}),Object(v.jsx)("span",{className:"userStatus",children:e.status})]}),Object(v.jsxs)("div",{className:"win_lose",children:[Object(v.jsxs)("div",{className:"department",children:[e.game_win,"\uc2b9"]}),Object(v.jsxs)("div",{className:"department",children:[e.game_lose,"\ud328"]})]})]}),Object(v.jsxs)("div",{className:"userInfoBottomSide",children:[Object(v.jsxs)("span",{className:"rating",children:["\ub808\uc774\ud305: ",e.rating]}),Object(v.jsx)("span",{className:"department",children:e.department})]})]})]},t)}));return Object(n.useEffect)((function(){i(h?a.filter((function(e){return e.name===h})):a.sort((function(e,t){return e.time>t.time?-1:e.time<t.time?1:0})))}),[h]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",{type:"text",className:"filter--info",placeholder:"text name...",onChange:function(e){x(e.target.value)}}),Object(v.jsxs)("div",{className:"usersInformation",children:[Object(v.jsx)("div",{className:"userList",children:_}),u&&Object(v.jsx)(W,{setIsDetailOn:m,allUsersByTime:a,userKey:f})]})]})},K=(a(565),function(e){var t=e.userObj,a=e.allUsers,s=e.allGame,c=Object(n.useState)("\uc7ac\ud559\uc0dd\ub7ad\ud0b9"),r=Object(l.a)(c,2),i=r[0],d=r[1],j=function(e){e.preventDefault(),d(e.target.id)};return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("div",{className:"client-container",children:[Object(v.jsxs)("div",{className:"nav",children:[Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{id:"\uc7ac\ud559\uc0dd\ub7ad\ud0b9",onClick:j,children:"\uc7ac\ud559\uc0dd \ub7ad\ud0b9"}),Object(v.jsx)("li",{id:"\uc804\uccb4\ub7ad\ud0b9",onClick:j,children:"\uc804\uccb4 \ub7ad\ud0b9"}),Object(v.jsx)("li",{id:"\uc120\uc218\uc0c1\uc138\uc815\ubcf4",onClick:j,children:"\uc120\uc218 \uc0c1\uc138\uc815\ubcf4"}),Object(v.jsx)("li",{id:"\uac8c\uc2dc\uae00",onClick:j,children:"\uac8c\uc2dc\uae00"})]}),Object(v.jsxs)("footer",{children:[Object(v.jsx)("p",{className:"footer--top",children:"\xa9 2021, Built by"}),Object(v.jsx)("p",{className:"footer--bot",children:"gilmujjang & Hyeon-Gwang"})]})]}),Object(v.jsxs)("div",{className:"ClientMain",children:[["\uc7ac\ud559\uc0dd\ub7ad\ud0b9","\uc804\uccb4\ub7ad\ud0b9"].includes(i)&&Object(v.jsx)(L,{allGame:s,allUsers:a,contentMode:i,setContentMode:d}),"\uc120\uc218\uc0c1\uc138\uc815\ubcf4"===i&&Object(v.jsx)(V,{allUsers:a}),"\uac8c\uc2dc\uae00"===i&&Object(v.jsx)(A,{userObj:t})]}),!["\uc120\uc218\uc0c1\uc138\uc815\ubcf4","\uac8c\uc2dc\uae00"].includes(i)&&Object(v.jsxs)("div",{className:"aside",children:[Object(v.jsx)("div",{className:"aside1",children:Object(v.jsx)(P,{allGame:s})}),Object(v.jsx)("div",{className:"aside2",children:Object(v.jsx)("h2",{children:"aside2"})})]})]})})}),T=function(e){var t=e.userObj,a=Object(n.useState)([]),s=Object(l.a)(a,2),c=s[0],r=s[1],o=Object(n.useState)([]),u=Object(l.a)(o,2),m=u[0],b=u[1];return Object(n.useEffect)((function(){x.collection("user").orderBy("rating","desc").get().then((function(e){e.docs.map((function(e){var t={name:e.data().name,rating:e.data().rating,game_all:e.data().game_all,game_win:e.data().game_win,game_lose:e.data().game_lose,studentid:e.data().studentid,department:e.data().department,status:e.data().status,time:e.data().time,attachmentUrl:e.data().attachmentUrl};r((function(e){return[].concat(Object(d.a)(e),[t])}))}))}))}),[]),Object(n.useEffect)((function(){x.collection("game").orderBy("write_time","desc").limit(10).get().then((function(e){e.docs.map((function(e){var t={winners:e.data().winners,losers:e.data().losers,ratingChange:e.data().ratingChange,percentage:e.data().percentage,date:e.data().date,time:e.data().write_time,id:e.data().date+"-"+e.data().write_time};b((function(e){return[].concat(Object(d.a)(e),[t])}))}))}))}),[]),Object(v.jsxs)(i.b,{children:[Object(v.jsx)(j.a,{exact:!0,path:"/",children:Object(v.jsx)(K,{allUsers:c,allGame:m,userObj:t})}),Object(v.jsx)(j.c,{children:t.displayName?Object(v.jsx)(j.a,{path:"/admin",children:Object(v.jsx)(E,{userObj:t,allUsers:c,allGame:m})}):Object(v.jsx)(j.a,{exact:!0,path:"/admin",children:Object(v.jsx)(N,{})})})]})};var J=function(){var e=h.currentUser,t=Object(n.useState)(!1),a=Object(l.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)({displayName:null}),i=Object(l.a)(r,2),d=i[0],j=i[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){e?j({displayName:e.displayName,uid:e.uid,photoUrl:e.photoURL}):h.signInAnonymously().catch((function(e){console.log(e.code),console.log(e.message)})),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:s?Object(v.jsx)(T,{refreshUser:function(){j(h.currentUser),j({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(d),userObj:d}):"Initailizing..."})};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(i.a,{children:Object(v.jsx)(J,{})})}),document.getElementById("root"))}},[[566,1,2]]]);
//# sourceMappingURL=main.e94a9c9b.chunk.js.map