(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),s=(n(26),n(10),n(1)),i=n.n(s),u=n(2),l=n(5),f=n(6),p=n(8),d=n(7),m=n(9),v=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r,c,o){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.addStream(n),e.next=4,t.createOffer();case 4:return s=e.sent,e.next=7,t.setLocalDescription(s);case 7:r(a,s,c,o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a,r,c,o){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new RTCPeerConnection({iceServers:[{urls:"stun:stun2.1.google.com:19302"}]}),e.abrupt("return",t);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),w=function(e,t,n,a,r,c){e.onicecandidate=function(e){e.candidate&&c(n,e.candidate,a,t)},e.ontrack=function(e){r.srcObject!==e.streams[0]&&(r.srcObject=e.streams[0])}},C=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r,c,o){var s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.addStream(n),s=JSON.parse(a.offer),t.setRemoteDescription(s),e.next=6,t.createAnswer();case 6:u=e.sent,t.setLocalDescription(u),r(a.from,u,c,o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,a,r,c,o){return e.apply(this,arguments)}}(),y=function(e,t){var n=JSON.parse(t.answer);e.setRemoteDescription(n)},g=function(e,t){var n=JSON.parse(t.candidate);e.addIceCandidate(new RTCIceCandidate(n))},O=n(12),k=n.n(O),x=(n(17),{apiKey:"AIzaSyC1O3pc7AQ1SOVUU0u6_7qfeIuVrUGCEVw",authDomain:"serverless-video-chat.firebaseapp.com",databaseURL:"https://serverless-video-chat.firebaseio.com",projectId:"serverless-video-chat",storageBucket:"serverless-video-chat.appspot.com",messagingSenderId:"728740478864",appId:"1:728740478864:web:fc584331943322ea6bfd15"}),R=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ref("/notifs/"+t).remove();case 2:n.ref("/notifs/"+t).on("value",(function(e){e.exists()&&a(e.val(),t)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ref("/notifs/"+t).set({type:"offer",from:r,offer:JSON.stringify(n)});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ref("/notifs/"+t).update({type:"answer",from:r,answer:JSON.stringify(n)});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(t,n,a,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ref("/notifs/"+t).update({type:"candidate",from:r,candidate:JSON.stringify(n)});case 2:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),V=(n(31),n(20)),L=n.n(V),U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).onLoginClicked=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.onLogin(n.state.username);case 2:n.setState({isLoggedIn:!0});case 3:case"end":return e.stop()}}),e)}))),n.onStartCallClicked=function(){n.props.startCall(n.state.username,n.state.userToCall)},n.renderVideos=function(){return r.a.createElement("div",{className:L()("videos",{active:n.state.isLoggedIn})},r.a.createElement("div",null,r.a.createElement("label",null,n.state.username),r.a.createElement("video",{ref:n.props.setLocalVideoRef,autoPlay:!0,playsInline:!0})),r.a.createElement("div",null,r.a.createElement("label",null,n.props.connectedUser),r.a.createElement("video",{ref:n.props.setRemoteVideoRef,autoPlay:!0,playsInline:!0})))},n.renderForms=function(){return n.state.isLoggedIn?r.a.createElement("div",{key:"a",className:"form"},r.a.createElement("label",null,"Call to"),r.a.createElement("input",{value:n.state.userToCall,type:"text",onChange:function(e){return n.setState({userToCall:e.target.value})}}),r.a.createElement("button",{onClick:n.onStartCallClicked,id:"call-btn",className:"btn btn-primary"},"Call")):r.a.createElement("div",{key:"b",className:"form"},r.a.createElement("label",null,"Type a name"),r.a.createElement("input",{value:n.state.username,type:"text",onChange:function(e){return n.setState({username:e.target.value})}}),r.a.createElement("button",{onClick:n.onLoginClicked,id:"login-btn",className:"btn btn-primary"},"Login"))},n.state={isLoggedIn:!1,userToCall:null,username:null},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"container"},this.props.connectedUser?null:this.renderForms(),this.renderVideos())}}]),t}(r.a.Component),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.a.initializeApp(x),e.next=3,h();case 3:return t=e.sent,n.localVideoRef.srcObject=t,e.next=7,b();case 7:a=e.sent,n.setState({database:k.a.database(),localStream:t,localConnection:a});case 9:case"end":return e.stop()}}),e)}))),n.startCall=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var r,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.state,c=r.localConnection,o=r.database,s=r.localStream,w(c,t,a,o,n.remoteVideoRef,E),v(c,s,a,j,o,t);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),n.onLogin=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t,n.state.database,n.handleUpdate);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.setLocalVideoRef=function(e){n.localVideoRef=e},n.setRemoteVideoRef=function(e){n.remoteVideoRef=e},n.handleUpdate=function(e,t){var a=n.state,r=a.localConnection,c=a.database,o=a.localStream;if(e)switch(e.type){case"offer":n.setState({connectedUser:e.from}),w(r,t,e.from,c,n.remoteVideoRef,E),C(r,o,e,S,c,t);break;case"answer":n.setState({connectedUser:e.from}),y(r,e);break;case"candidate":g(r,e)}},n.state={database:null,connectedUser:null,localStream:null,localConnection:null},n.localVideoRef=r.a.createRef(),n.remoteVideoRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.database===t.database&&(this.state.localStream===t.localStream&&this.state.localConnection===t.localConnection)}},{key:"render",value:function(){return r.a.createElement(U,{startCall:this.startCall,onLogin:this.onLogin,setLocalVideoRef:this.setLocalVideoRef,setRemoteVideoRef:this.setRemoteVideoRef,connectedUser:this.state.connectedUser})}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"React Video Chat App"),r.a.createElement("h2",null,"WebRTC + Firebase"),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.dd576088.chunk.js.map