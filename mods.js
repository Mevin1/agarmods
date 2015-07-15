(function(d,e){function sb(){xa=!0;Pa();setInterval(Pa,18E4);G=ya=document.getElementById("canvas");f=G.getContext("2d");G.onmousedown=function(a){if(Qa){var b=a.clientX-(5+l/5/2),c=a.clientY-(5+l/5/2);if(Math.sqrt(b*b+c*c)<=l/5/2){Y();H(17);return}}ia=a.clientX;ja=a.clientY;za();Y()};G.onmousemove=function(a){ia=a.clientX;ja=a.clientY;za()};G.onmouseup=function(){};/firefox/i.test(navigator.userAgent)?document.addEventListener("DOMMouseScroll",Ra,!1):document.body.onmousewheel=Ra;var a=!1,b=!1,c=!1;d.onkeydown=function(q){32!=q.keyCode||a||(Y(),H(17),a=!0);81!=q.keyCode||b||(H(18),b=!0);87!=q.keyCode||c||(Y(),H(21),c=!0);27==q.keyCode&&Sa(!0)};d.onkeyup=function(q){32==q.keyCode&&(a=!1);87==q.keyCode&&(c=!1);81==q.keyCode&&b&&(H(19),b=!1)};d.onblur=function(){H(19);c=b=a=!1};d.onresize=Ta;d.requestAnimationFrame(Ua);setInterval(Y,40);y&&e("#region").val(y);Va();ka(e("#region").val());0==Aa&&y&&D();Z=!0;e("#overlays").show();Ta();d.location.hash&&6<=d.location.hash.length&&Wa(d.location.hash)}function Ra(a){I*=Math.pow(.9,a.wheelDelta/-120||a.detail||0);1>I&&(I=1);I>4/h&&(I=4/h)}function tb(){if(.4>h)$=null;else{for(var a=Number.POSITIVE_INFINITY,b=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,q=Number.NEGATIVE_INFINITY,d=0,n=0;n<v.length;n++){var g=v[n];!g.N()||g.R||20>=g.size*h||(d=Math.max(g.size,d),a=Math.min(g.x,a),b=Math.min(g.y,b),c=Math.max(g.x,c),q=Math.max(g.y,q))}$=ub.ka({ca:a-(d+100),da:b-(d+100),na:c+(d+100),oa:q+(d+100),la:2,ma:4});for(n=0;n<v.length;n++)if(g=v[n],g.N()&&!(20>=g.size*h))for(a=0;a<g.a.length;++a)b=g.a[a].x,c=g.a[a].y,b<t-l/2/h||c<u-s/2/h||b>t+l/2/h||c>u+s/2/h||$.m(g.a[a])}}function za(){la=(ia-l/2)/h+t;ma=(ja-s/2)/h+u}function Pa(){null==na&&(na={},e("#region").children().each(function(){var a=e(this),b=a.val();b&&(na[b]=a.text())}));e.get("https://m.agar.io/info",function(a){var b={},c;for(c in a.regions){var q=c.split(":")[0];b[q]=b[q]||0;b[q]+=a.regions[c].numPlayers}for(c in b)e('#region option[value="'+c+'"]').text(na[c]+" ("+b[c]+" players)")},"json")}function Xa(){e("#adsBottom").hide();e("#overlays").hide();Z=!1;Va();d.googletag&&d.googletag.pubads&&d.googletag.pubads().clear&&d.googletag.pubads().clear(d.aa)}function ka(a){a&&a!=y&&(e("#region").val()!=a&&e("#region").val(a),y=d.localStorage.location=a,e(".region-message").hide(),e(".region-message."+a).show(),e(".btn-needs-server").prop("disabled",!1),xa&&D())}function Sa(a){Z||(J=null,vb(),a&&(w=1),Z=!0,e("#overlays").fadeIn(a?200:3E3))}function aa(a){e("#helloContainer").attr("data-gamemode",a);O=a;e("#gamemode").val(a)}function Va(){e("#region").val()?d.localStorage.location=e("#region").val():d.localStorage.location&&e("#region").val(d.localStorage.location);e("#region").val()?e("#locationKnown").append(e("#region")):e("#locationUnknown").append(e("#region"))}function vb(){oa&&(oa=!1,setTimeout(function(){oa=!0},6E4*Ya),d.googletag&&d.googletag.pubads&&d.googletag.pubads().refresh&&d.googletag.pubads().refresh(d.aa))}function ba(a){return d.i18n[a]||d.i18n_dict.en[a]||a}function Za(){var a=++Aa;console.log("Find "+y+O);e.ajax("https://m.agar.io/",{error:function(){setTimeout(Za,1E3)},success:function(b){a==Aa&&(b=b.split("\n"),b[2]&&alert(b[2]),Ba("ws://"+b[0],b[1]))},dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:(y+O||"?")+"\n154669603"})}function D(){xa&&y&&(e("#connecting").show(),Za())}function Ba(a,b){if(p){p.onopen=null;p.onmessage=null;p.onclose=null;try{p.close()}catch(c){}p=null}Ca.ip&&(a="ws://"+Ca.ip);if(null!=K){var q=K;K=function(){q(b)}}if($a){var d=a.split(":");a=d[0]+"s://ip-"+d[1].replace(/\./g,"-").replace(/\//g,"")+".tech.agar.io:"+(+d[2]+2E3)}L=[];k=[];E={};v=[];P=[];F=[];x=z=null;Q=0;ca=!1;console.log("Connecting to "+a);p=new WebSocket(a);p.binaryType="arraybuffer";p.onopen=function(){var a;console.log("socket open");a=M(5);a.setUint8(0,254);a.setUint32(1,5,!0);N(a);a=M(5);a.setUint8(0,255);a.setUint32(1,154669603,!0);N(a);a=M(1+b.length);a.setUint8(0,80);for(var c=0;c<b.length;++c)a.setUint8(c+1,b.charCodeAt(c));N(a);ab()};p.onmessage=wb;p.onclose=xb;p.onerror=function(){console.log("socket error")}}function M(a){return new DataView(new ArrayBuffer(a))}function N(a){p.send(a.buffer)}function xb(){ca&&(pa=500);console.log("socket close");setTimeout(D,pa);pa*=2}function wb(a){yb(new DataView(a.data))}function yb(a){function b(){for(var b="";;){var d=a.getUint16(c,!0);c+=2;if(0==d)break;b+=String.fromCharCode(d)}return b}var c=0;240==a.getUint8(c)&&(c+=5);switch(a.getUint8(c++)){case 16:zb(a,c);break;case 17:da=a.getFloat32(c,!0);c+=4;ea=a.getFloat32(c,!0);c+=4;fa=a.getFloat32(c,!0);c+=4;break;case 20:k=[];L=[];break;case 21:Da=a.getInt16(c,!0);c+=2;Ea=a.getInt16(c,!0);c+=2;Fa||(Fa=!0,qa=Da,ra=Ea);break;case 32:L.push(a.getUint32(c,!0));c+=4;break;case 49:if(null!=z)break;var d=a.getUint32(c,!0),c=c+4;F=[];for(var r=0;r<d;++r){var n=a.getUint32(c,!0),c=c+4;F.push({id:n,name:b()})}bb();break;case 50:z=[];d=a.getUint32(c,!0);c+=4;for(r=0;r<d;++r)z.push(a.getFloat32(c,!0)),c+=4;bb();break;case 64:R=a.getFloat64(c,!0);c+=8;S=a.getFloat64(c,!0);c+=8;T=a.getFloat64(c,!0);c+=8;U=a.getFloat64(c,!0);c+=8;da=(T+R)/2;ea=(U+S)/2;fa=1;0==k.length&&(t=da,u=ea,h=fa);break;case 81:var g=a.getUint32(c,!0),c=c+4,e=a.getUint32(c,!0),c=c+4,f=a.getUint32(c,!0),c=c+4;setTimeout(function(){V({e:g,f:e,d:f})},1200)}}function zb(a,b){cb=B=Date.now();ca||(ca=!0,Ab());var c=Math.random();Ga=!1;var d=a.getUint16(b,!0);b+=2;for(var r=0;r<d;++r){var n=E[a.getUint32(b,!0)],g=E[a.getUint32(b+4,!0)];b+=8;n&&g&&(g.X(),g.s=g.x,g.t=g.y,g.r=g.size,g.J=n.x,g.K=n.y,g.q=g.size,g.Q=B)}for(r=0;;){d=a.getUint32(b,!0);b+=4;if(0==d)break;++r;var e,n=a.getInt32(b,!0);b+=4;g=a.getInt32(b,!0);b+=4;e=a.getInt16(b,!0);b+=2;for(var f=a.getUint8(b++),h=a.getUint8(b++),l=a.getUint8(b++),f=(f<<16|h<<8|l).toString(16);6>f.length;)f="0"+f;var f="#"+f,h=a.getUint8(b++),l=!!(h&1),s=!!(h&16);h&2&&(b+=4);h&4&&(b+=8);h&8&&(b+=16);for(var p,m="";;){p=a.getUint16(b,!0);b+=2;if(0==p)break;m+=String.fromCharCode(p)}p=m;m=null;E.hasOwnProperty(d)?(m=E[d],m.P(),m.s=m.x,m.t=m.y,m.r=m.size,m.color=f):(m=new ga(d,n,g,e,f,p),v.push(m),E[d]=m,m.ta=n,m.ua=g);m.h=l;m.n=s;m.J=n;m.K=g;m.q=e;m.ra=c;m.Q=B;m.ba=h;p&&m.B(p);-1!=L.indexOf(d)&&-1==k.indexOf(m)&&(document.getElementById("overlays").style.display="none",k.push(m),1==k.length&&(t=m.x,u=m.y,db()))}c=a.getUint32(b,!0);b+=4;for(r=0;r<c;r++)d=a.getUint32(b,!0),b+=4,m=E[d],null!=m&&m.X();Ga&&0==k.length&&Sa(!1)}function Ab(){e("#connecting").hide();eb();K&&(K(),K=null);null!=Ha&&clearTimeout(Ha);Ha=setTimeout(function(){d.ga&&(++fb,d.ga("set","dimension2",fb))},1E4)}function Y(){if(W()){var a=ia-l/2,b=ja-s/2;64>a*a+b*b||.01>Math.abs(gb-la)&&.01>Math.abs(hb-ma)||(gb=la,hb=ma,a=M(21),a.setUint8(0,16),a.setFloat64(1,la,!0),a.setFloat64(9,ma,!0),a.setUint32(17,0,!0),N(a))}}function eb(){if(W()&&ca&&null!=J){var a=M(1+2*J.length);a.setUint8(0,0);for(var b=0;b<J.length;++b)a.setUint16(1+2*b,J.charCodeAt(b),!0);N(a)}}function W(){return null!=p&&p.readyState==p.OPEN}function H(a){if(W()){var b=M(1);b.setUint8(0,a);N(b)}}function ab(){if(W()&&null!=A){var a=M(1+A.length);a.setUint8(0,81);for(var b=0;b<A.length;++b)a.setUint8(b+1,A.charCodeAt(b));N(a)}}function Ta(){l=d.innerWidth;s=d.innerHeight;ya.width=G.width=l;ya.height=G.height=s;var a=e("#helloContainer");a.css("transform","none");var b=a.height(),c=d.innerHeight;b>c/1.1?a.css("transform","translate(-50%, -50%) scale("+c/b/1.1+")"):a.css("transform","translate(-50%, -50%)");ib()}function jb(){var a;a=1*Math.max(s/1080,l/1920);return a*=I}function Bb(){if(0!=k.length){for(var a=0,b=0;b<k.length;b++)a+=k[b].size;a=Math.pow(Math.min(64/a,1),.4)*jb();h=(9*h+a)/10}}function ib(){var a=Date.now();++Cb;B=a;if(kb){var b=T-R,c=U-S,b=Math.min(l/b,s/c);h=(9*h+b)/10;b=(S+U)/2;t=(29*t+(R+T)/2)/30;u=(29*u+b)/30}else if(0<k.length){Bb();for(var d=c=b=0;d<k.length;d++)k[d].P(),b+=k[d].x/k.length,c+=k[d].y/k.length;da=b;ea=c;fa=h;t=(t+b)/2;u=(u+c)/2}else t=(29*t+da)/30,u=(29*u+ea)/30,h=(9*h+fa*jb())/10;tb();za();Ia||f.clearRect(0,0,l,s);Ia?(f.fillStyle=sa?"#111111":"#F2FBFF",f.globalAlpha=.05,f.fillRect(0,0,l,s),f.globalAlpha=1):Db();v.sort(function(a,b){return a.size==b.size?a.id-b.id:a.size-b.size});f.save();f.translate(l/2,s/2);f.scale(h,h);f.translate(-t,-u);for(d=0;d<P.length;d++)P[d].w(f);for(d=0;d<v.length;d++)v[d].w(f);if(Fa){qa=(3*qa+Da)/4;ra=(3*ra+Ea)/4;f.save();f.strokeStyle="#FFAAAA";f.lineWidth=10;f.lineCap="round";f.lineJoin="round";f.globalAlpha=.5;f.beginPath();for(d=0;d<k.length;d++)f.moveTo(k[d].x,k[d].y),f.lineTo(qa,ra);f.stroke();f.restore()}f.restore();x&&x.width&&(b=x.width,c=Math.min(x.height,s-20),f.drawImage(x,0,0,b,c,l-b-10,10,b,c));Q=Math.max(Q,Eb());0!=Q&&(null==ta&&(ta=new ua(24,"#FFFFFF")),ta.C(ba("score")+": "+~~(Q/100)),c=ta.L(),b=c.width,f.globalAlpha=.2,f.fillStyle="#000000",f.fillRect(10,s-10-24-10,b+10,34),f.globalAlpha=1,f.drawImage(c,15,s-10-24-5));Fb();a=Date.now()-a;a>1E3/60?C-=.01:a<1E3/65&&(C+=.01);.4>C&&(C=.4);1<C&&(C=1);a=B-lb;!W()||Z?(w+=a/2E3,1<w&&(w=1)):(w-=a/300,0>w&&(w=0));0<w&&(f.fillStyle="#000000",f.globalAlpha=.5*w,f.fillRect(0,0,l,s),f.globalAlpha=1);lb=B}function Db(){f.fillStyle=sa?"#111111":"#F2FBFF";f.fillRect(0,0,l,s);f.save();f.strokeStyle=sa?"#AAAAAA":"#000000";f.globalAlpha=.2*h;for(var a=l/h,b=s/h,c=(-t+a/2)%50;c<a;c+=50)f.beginPath(),f.moveTo(c*h-.5,0),f.lineTo(c*h-.5,b*h),f.stroke();for(c=(-u+b/2)%50;c<b;c+=50)f.beginPath(),f.moveTo(0,c*h-.5),f.lineTo(a*h,c*h-.5),f.stroke();f.restore()}function Fb(){if(Qa&&Ja.width){var a=l/5;f.drawImage(Ja,5,5,a,a)}}function Eb(){for(var a=0,b=0;b<k.length;b++)a+=k[b].q*k[b].q;return a}function bb(){x=null;if(null!=z||0!=F.length)if(null!=z||va){x=document.createElement("canvas");var a=x.getContext("2d"),b=60,b=null==z?b+24*F.length:b+180,c=Math.min(200,.3*l)/200;x.width=200*c;x.height=b*c;a.scale(c,c);a.globalAlpha=.4;a.fillStyle="#000000";a.fillRect(0,0,200,b);a.globalAlpha=1;a.fillStyle="#FFFFFF";c=null;c=ba("leaderboard");a.font="30px Ubuntu";a.fillText(c,100-a.measureText(c).width/2,40);if(null==z)for(a.font="20px Ubuntu",b=0;b<F.length;++b)c=F[b].name||ba("unnamed_cell"),va||(c=ba("unnamed_cell")),-1!=L.indexOf(F[b].id)?(k[0].name&&(c=k[0].name),a.fillStyle="#FFAAAA"):a.fillStyle="#FFFFFF",c=b+1+". "+c,a.fillText(c,100-a.measureText(c).width/2,70+24*b);else for(b=c=0;b<z.length;++b){var d=c+z[b]*Math.PI*2;a.fillStyle=Gb[b+1];a.beginPath();a.moveTo(100,140);a.arc(100,140,80,c,d,!1);a.fill();c=d}}}function Ka(a,b,c,d,r){this.V=a;this.x=b;this.y=c;this.i=d;this.b=r}function ga(a,b,c,d,r,n){this.id=a;this.s=this.x=b;this.t=this.y=c;this.r=this.size=d;this.color=r;this.a=[];this.W();this.B(n)}function ua(a,b,c,d){a&&(this.u=a);b&&(this.S=b);this.U=!!c;d&&(this.v=d)}function V(a,b){var c="1"==e("#helloContainer").attr("data-has-account-data");e("#helloContainer").attr("data-has-account-data","1");if(null==b&&d.localStorage.loginCache){var q=JSON.parse(d.localStorage.loginCache);q.f=a.f;q.d=a.d;q.e=a.e;d.localStorage.loginCache=JSON.stringify(q)}if(c){var r=+e("#agario-exp-bar .progress-bar-text").text().split("/")[0],c=+e("#agario-exp-bar .progress-bar-text").text().split("/")[1].split(" ")[0],q=e(".agario-profile-panel .progress-bar-star").text();if(q!=a.e)V({f:c,d:c,e:q},function(){e(".agario-profile-panel .progress-bar-star").text(a.e);e("#agario-exp-bar .progress-bar").css("width","100%");e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e(".progress-bar-star").removeClass("animated tada")});setTimeout(function(){e("#agario-exp-bar .progress-bar-text").text(a.d+"/"+a.d+" XP");V({f:0,d:a.d,e:a.e},function(){V(a,b)})},1E3)});else{var n=Date.now(),g=function(){var c;c=(Date.now()-n)/1E3;c=0>c?0:1<c?1:c;c=c*c*(3-2*c);e("#agario-exp-bar .progress-bar-text").text(~~(r+(a.f-r)*c)+"/"+a.d+" XP");e("#agario-exp-bar .progress-bar").css("width",(88*(r+(a.f-r)*c)/a.d).toFixed(2)+"%");1>c?d.requestAnimationFrame(g):b&&b()};d.requestAnimationFrame(g)}}else e(".agario-profile-panel .progress-bar-star").text(a.e),e("#agario-exp-bar .progress-bar-text").text(a.f+"/"+a.d+" XP"),e("#agario-exp-bar .progress-bar").css("width",(88*a.f/a.d).toFixed(2)+"%"),b&&b()}function mb(a){"string"==typeof a&&(a=JSON.parse(a));Date.now()+18E5>a.ja?e("#helloContainer").attr("data-logged-in","0"):(d.localStorage.loginCache=JSON.stringify(a),A=a.fa,e(".agario-profile-name").text(a.name),ab(),V({f:a.f,d:a.d,e:a.e}),e("#helloContainer").attr("data-logged-in","1"))}function Hb(a){a=a.split("\n");mb({name:a[0],sa:a[1],fa:a[2],ja:1E3*+a[3],e:+a[4],f:+a[5],d:+a[6]})}function La(a){if("connected"==a.status){var b=a.authResponse.accessToken;d.FB.api("/me/picture?width=180&height=180",function(a){d.localStorage.fbPictureCache=a.data.url;e(".agario-profile-picture").attr("src",a.data.url)});e("#helloContainer").attr("data-logged-in","1");null!=A?e.ajax("https://m.agar.io/checkToken",{error:function(){A=null;La(a)},success:function(a){a=a.split("\n");V({e:+a[0],f:+a[1],d:+a[2]})},dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:A}):e.ajax("https://m.agar.io/facebookLogin",{error:function(){A=null;e("#helloContainer").attr("data-logged-in","0")},success:Hb,dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:b})}}function Wa(a){aa(":party");e("#helloContainer").attr("data-party-state","4");a=decodeURIComponent(a).replace(/.*#/gim,"");Ma("#"+d.encodeURIComponent(a));e.ajax(Na+"//m.agar.io/getToken",{error:function(){e("#helloContainer").attr("data-party-state","6")},success:function(b){b=b.split("\n");e(".partyToken").val("agar.io/#"+d.encodeURIComponent(a));e("#helloContainer").attr("data-party-state","5");aa(":party");Ba("ws://"+b[0],a)},dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:a})}function Ma(a){d.history&&d.history.replaceState&&d.history.replaceState({},d.document.title,a)}if(!d.agarioNoInit){var Na=d.location.protocol,$a="https:"==Na;if($a&&-1==d.location.search.indexOf("fb"))d.location.href="http://agar.io/";else{var wa=d.navigator.userAgent;if(-1!=wa.indexOf("Android"))d.ga&&d.ga("send","event","MobileRedirect","PlayStore"),setTimeout(function(){d.location.href="market://details?id=com.miniclip.agar.io"},1E3);else if(-1!=wa.indexOf("iPhone")||-1!=wa.indexOf("iPad")||-1!=wa.indexOf("iPod"))d.ga&&d.ga("send","event","MobileRedirect","AppStore"),setTimeout(function(){d.location.href="https://itunes.apple.com/app/agar.io/id995999703"},1E3);else{var ya,f,G,l,s,$=null,p=null,t=0,u=0,L=[],k=[],E={},v=[],P=[],F=[],ia=0,ja=0,la=-1,ma=-1,Cb=0,B=0,lb=0,J=null,R=0,S=0,T=1E4,U=1E4,h=1,y=null,nb=!0,va=!0,Oa=!1,Ga=!1,Q=0,sa=!1,ob=!1,da=t=~~((R+T)/2),ea=u=~~((S+U)/2),fa=1,O="",z=null,xa=!1,kb=!1,Fa=!1,Da=0,Ea=0,qa=0,ra=0,pb=0,Gb=["#333333","#FF3333","#33FF33","#3333FF"],Ia=!1,ca=!1,cb=0,A=null,I=1,w=1,Z=!0,Aa=0,Ca={};(function(){var a=d.location.search;"?"==a.charAt(0)&&(a=a.slice(1));for(var a=a.split("&"),b=0;b<a.length;b++){var c=a[b].split("=");Ca[c[0]]=c[1]}})();var Qa="ontouchstart"in d&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent),Ja=new Image;Ja.src="img/split.png";var qb=document.createElement("canvas");if("undefined"==typeof console||"undefined"==typeof DataView||"undefined"==typeof WebSocket||null==qb||null==qb.getContext||null==d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this");else{var na=null;d.setNick=function(a){Xa();J=a;eb();Q=0};d.setRegion=ka;d.setSkins=function(a){nb=a};d.setNames=function(a){va=a};d.setDarkTheme=function(a){sa=a};d.setColors=function(a){Oa=a};d.setShowMass=function(a){ob=a};d.spectate=function(){J=null;H(1);Xa()};d.setGameMode=function(a){a!=O&&(":party"==O&&e("#helloContainer").attr("data-party-state","0"),aa(a),":party"!=a&&D())};d.setAcid=function(a){Ia=a};d.setShowWholeMap=function(a){kb=a};d.reconnect=D;null!=d.localStorage&&(null==d.localStorage.AB9&&(d.localStorage.AB9=0+~~(100*Math.random())),pb=+d.localStorage.AB9,d.ABGroup=pb);e.get(Na+"//gc.agar.io",function(a){var b=a.split(" ");a=b[0];b=b[1]||"";-1==["UA"].indexOf(a)&&rb.push("ussr");ha.hasOwnProperty(a)&&("string"==typeof ha[a]?y||ka(ha[a]):ha[a].hasOwnProperty(b)&&(y||ka(ha[a][b])))},"text");d.ga&&d.ga("send","event","User-Agent",d.navigator.userAgent,{nonInteraction:1});var oa=!1,Ya=0;setTimeout(function(){oa=!0},Math.max(6E4*Ya,1E4));var ha={AF:"JP-Tokyo",AX:"EU-London",AL:"EU-London",DZ:"EU-London",AS:"SG-Singapore",AD:"EU-London",AO:"EU-London",AI:"US-Atlanta",AG:"US-Atlanta",AR:"BR-Brazil",AM:"JP-Tokyo",AW:"US-Atlanta",AU:"SG-Singapore",AT:"EU-London",AZ:"JP-Tokyo",BS:"US-Atlanta",BH:"JP-Tokyo",BD:"JP-Tokyo",BB:"US-Atlanta",BY:"EU-London",BE:"EU-London",BZ:"US-Atlanta",BJ:"EU-London",BM:"US-Atlanta",BT:"JP-Tokyo",BO:"BR-Brazil",BQ:"US-Atlanta",BA:"EU-London",BW:"EU-London",BR:"BR-Brazil",IO:"JP-Tokyo",VG:"US-Atlanta",BN:"JP-Tokyo",BG:"EU-London",BF:"EU-London",BI:"EU-London",KH:"JP-Tokyo",CM:"EU-London",CA:"US-Atlanta",CV:"EU-London",KY:"US-Atlanta",CF:"EU-London",TD:"EU-London",CL:"BR-Brazil",CN:"CN-China",CX:"JP-Tokyo",CC:"JP-Tokyo",CO:"BR-Brazil",KM:"EU-London",CD:"EU-London",CG:"EU-London",CK:"SG-Singapore",CR:"US-Atlanta",CI:"EU-London",HR:"EU-London",CU:"US-Atlanta",CW:"US-Atlanta",CY:"JP-Tokyo",CZ:"EU-London",DK:"EU-London",DJ:"EU-London",DM:"US-Atlanta",DO:"US-Atlanta",EC:"BR-Brazil",EG:"EU-London",SV:"US-Atlanta",GQ:"EU-London",ER:"EU-London",EE:"EU-London",ET:"EU-London",FO:"EU-London",FK:"BR-Brazil",FJ:"SG-Singapore",FI:"EU-London",FR:"EU-London",GF:"BR-Brazil",PF:"SG-Singapore",GA:"EU-London",GM:"EU-London",GE:"JP-Tokyo",DE:"EU-London",GH:"EU-London",GI:"EU-London",GR:"EU-London",GL:"US-Atlanta",GD:"US-Atlanta",GP:"US-Atlanta",GU:"SG-Singapore",GT:"US-Atlanta",GG:"EU-London",GN:"EU-London",GW:"EU-London",GY:"BR-Brazil",HT:"US-Atlanta",VA:"EU-London",HN:"US-Atlanta",HK:"JP-Tokyo",HU:"EU-London",IS:"EU-London",IN:"JP-Tokyo",ID:"JP-Tokyo",IR:"JP-Tokyo",IQ:"JP-Tokyo",IE:"EU-London",IM:"EU-London",IL:"JP-Tokyo",IT:"EU-London",JM:"US-Atlanta",JP:"JP-Tokyo",JE:"EU-London",JO:"JP-Tokyo",KZ:"JP-Tokyo",KE:"EU-London",KI:"SG-Singapore",KP:"JP-Tokyo",KR:"JP-Tokyo",KW:"JP-Tokyo",KG:"JP-Tokyo",LA:"JP-Tokyo",LV:"EU-London",LB:"JP-Tokyo",LS:"EU-London",LR:"EU-London",LY:"EU-London",LI:"EU-London",LT:"EU-London",LU:"EU-London",MO:"JP-Tokyo",MK:"EU-London",MG:"EU-London",MW:"EU-London",MY:"JP-Tokyo",MV:"JP-Tokyo",ML:"EU-London",MT:"EU-London",MH:"SG-Singapore",MQ:"US-Atlanta",MR:"EU-London",MU:"EU-London",YT:"EU-London",MX:"US-Atlanta",FM:"SG-Singapore",MD:"EU-London",MC:"EU-London",MN:"JP-Tokyo",ME:"EU-London",MS:"US-Atlanta",MA:"EU-London",MZ:"EU-London",MM:"JP-Tokyo",NA:"EU-London",NR:"SG-Singapore",NP:"JP-Tokyo",NL:"EU-London",NC:"SG-Singapore",NZ:"SG-Singapore",NI:"US-Atlanta",NE:"EU-London",NG:"EU-London",NU:"SG-Singapore",NF:"SG-Singapore",MP:"SG-Singapore",NO:"EU-London",OM:"JP-Tokyo",PK:"JP-Tokyo",PW:"SG-Singapore",PS:"JP-Tokyo",PA:"US-Atlanta",PG:"SG-Singapore",PY:"BR-Brazil",PE:"BR-Brazil",PH:"JP-Tokyo",PN:"SG-Singapore",PL:"EU-London",PT:"EU-London",PR:"US-Atlanta",QA:"JP-Tokyo",RE:"EU-London",RO:"EU-London",RU:"RU-Russia",RW:"EU-London",BL:"US-Atlanta",SH:"EU-London",KN:"US-Atlanta",LC:"US-Atlanta",MF:"US-Atlanta",PM:"US-Atlanta",VC:"US-Atlanta",WS:"SG-Singapore",SM:"EU-London",ST:"EU-London",SA:"EU-London",SN:"EU-London",RS:"EU-London",SC:"EU-London",SL:"EU-London",SG:"JP-Tokyo",SX:"US-Atlanta",SK:"EU-London",SI:"EU-London",SB:"SG-Singapore",SO:"EU-London",ZA:"EU-London",SS:"EU-London",ES:"EU-London",LK:"JP-Tokyo",SD:"EU-London",SR:"BR-Brazil",SJ:"EU-London",SZ:"EU-London",SE:"EU-London",CH:"EU-London",SY:"EU-London",TW:"JP-Tokyo",TJ:"JP-Tokyo",TZ:"EU-London",TH:"JP-Tokyo",TL:"JP-Tokyo",TG:"EU-London",TK:"SG-Singapore",TO:"SG-Singapore",TT:"US-Atlanta",TN:"EU-London",TR:"TK-Turkey",TM:"JP-Tokyo",TC:"US-Atlanta",TV:"SG-Singapore",UG:"EU-London",UA:"EU-London",AE:"EU-London",GB:"EU-London",US:"US-Atlanta",UM:"SG-Singapore",VI:"US-Atlanta",UY:"BR-Brazil",UZ:"JP-Tokyo",VU:"SG-Singapore",VE:"BR-Brazil",VN:"JP-Tokyo",WF:"SG-Singapore",EH:"EU-London",YE:"JP-Tokyo",ZM:"EU-London",ZW:"EU-London"},K=null;d.connect=Ba;var pa=500,Ha=null,fb=0,gb=-1,hb=-1,x=null,C=1,ta=null,Ua=function(){var a=Date.now(),b=1E3/60;return function(){d.requestAnimationFrame(Ua);var c=Date.now(),e=c-a;e>b&&(a=c-e%b,!W()||240>Date.now()-cb?ib():console.warn("Skipping draw"),Ib())}}(),X={},rb="poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook".split(";"),Jb=["8","nasa"],Kb=["m'blob"];Ka.prototype={V:null,x:0,y:0,i:0,b:0};ga.prototype={id:0,a:null,name:null,o:null,O:null,x:0,y:0,size:0,s:0,t:0,r:0,J:0,K:0,q:0,ba:0,Q:0,ra:0,ia:0,G:!1,h:!1,n:!1,R:!0,Y:0,X:function(){var a;for(a=0;a<v.length;a++)if(v[a]==this){v.splice(a,1);break}delete E[this.id];a=k.indexOf(this);-1!=a&&(Ga=!0,k.splice(a,1));a=L.indexOf(this.id);-1!=a&&L.splice(a,1);this.G=!0;0<this.Y&&P.push(this)},l:function(){return Math.max(~~(.3*this.size),24)},B:function(a){if(this.name=a)null==this.o?this.o=new ua(this.l(),"#FFFFFF",!0,"#000000"):this.o.M(this.l()),this.o.C(this.name)},W:function(){for(var a=this.I();this.a.length>a;){var b=~~(Math.random()*this.a.length);this.a.splice(b,1)}for(0==this.a.length&&0<a&&this.a.push(new Ka(this,this.x,this.y,this.size,Math.random()-.5));this.a.length<a;)b=~~(Math.random()*this.a.length),b=this.a[b],this.a.push(new Ka(this,b.x,b.y,b.i,b.b))},I:function(){var a=10;20>this.size&&(a=0);this.h&&(a=30);var b=this.size;this.h||(b*=h);b*=C;this.ba&32&&(b*=.25);return~~Math.max(b,a)},pa:function(){this.W();for(var a=this.a,b=a.length,c=0;c<b;++c){var d=a[(c-1+b)%b].b,e=a[(c+1)%b].b;a[c].b+=(Math.random()-.5)*(this.n?3:1);a[c].b*=.7;10<a[c].b&&(a[c].b=10);-10>a[c].b&&(a[c].b=-10);a[c].b=(d+e+8*a[c].b)/10}for(var n=this,g=this.h?0:(this.id/1E3+B/1E4)%(2*Math.PI),c=0;c<b;++c){var f=a[c].i,d=a[(c-1+b)%b].i,e=a[(c+1)%b].i;if(15<this.size&&null!=$&&20<this.size*h&&0<this.id){var k=!1,l=a[c].x,p=a[c].y;$.qa(l-5,p-5,10,10,function(a){a.V!=n&&25>(l-a.x)*(l-a.x)+(p-a.y)*(p-a.y)&&(k=!0)});!k&&(a[c].x<R||a[c].y<S||a[c].x>T||a[c].y>U)&&(k=!0);k&&(0<a[c].b&&(a[c].b=0),a[c].b-=1)}f+=a[c].b;0>f&&(f=0);f=this.n?(19*f+this.size)/20:(12*f+this.size)/13;a[c].i=(d+e+8*f)/10;d=2*Math.PI/b;e=this.a[c].i;this.h&&0==c%2&&(e+=5);a[c].x=this.x+Math.cos(d*c+g)*e;a[c].y=this.y+Math.sin(d*c+g)*e}},P:function(){if(0>=this.id)return 1;var a;a=(B-this.Q)/120;a=0>a?0:1<a?1:a;var b=0>a?0:1<a?1:a;this.l();if(this.G&&1<=b){var c=P.indexOf(this);-1!=c&&P.splice(c,1)}this.x=a*(this.J-this.s)+this.s;this.y=a*(this.K-this.t)+this.t;this.size=b*(this.q-this.r)+this.r;return b},N:function(){return 0>=this.id?!0:this.x+this.size+40<t-l/2/h||this.y+this.size+40<u-s/2/h||this.x-this.size-40>t+l/2/h||this.y-this.size-40>u+s/2/h?!1:!0},w:function(a){if(this.N()){++this.Y;var b=0<this.id&&!this.h&&!this.n&&.4>h;5>this.I()&&(b=!0);if(this.R&&!b)for(var c=0;c<this.a.length;c++)this.a[c].i=this.size;this.R=b;a.save();this.ia=B;c=this.P();this.G&&(a.globalAlpha*=1-c);a.lineWidth=10;a.lineCap="round";a.lineJoin=this.h?"miter":"round";Oa?(a.fillStyle="#FFFFFF",a.strokeStyle="#AAAAAA"):(a.fillStyle=this.color,a.strokeStyle=this.color);if(b)a.beginPath(),a.arc(this.x,this.y,this.size+5,0,2*Math.PI,!1);else{this.pa();a.beginPath();var d=this.I();a.moveTo(this.a[0].x,this.a[0].y);for(c=1;c<=d;++c){var e=c%d;a.lineTo(this.a[e].x,this.a[e].y)}}a.closePath();d=this.name.toLowerCase();!this.n&&nb&&":teams"!=O?-1!=rb.indexOf(d)?(X.hasOwnProperty(d)||(X[d]=new Image,X[d].src="skins/"+d+".png"),c=0!=X[d].width&&X[d].complete?X[d]:null):c=null:c=null;c=(e=c)?-1!=Kb.indexOf(d):!1;b||a.stroke();a.fill();null==e||c||(a.save(),a.clip(),a.drawImage(e,this.x-this.size,this.y-this.size,2*this.size,2*this.size),a.restore());(Oa||15<this.size)&&!b&&(a.strokeStyle="#000000",a.globalAlpha*=.1,a.stroke());a.globalAlpha=1;null!=e&&c&&a.drawImage(e,this.x-2*this.size,this.y-2*this.size,4*this.size,4*this.size);c=-1!=k.indexOf(this);b=~~this.y;if(0!=this.id&&(va||c)&&this.name&&this.o&&(null==e||-1==Jb.indexOf(d))){e=this.o;e.C(this.name);e.M(this.l());d=0>=this.id?1:Math.ceil(10*h)/10;e.ea(d);var e=e.L(),n=~~(e.width/d),g=~~(e.height/d);a.drawImage(e,~~this.x-~~(n/2),b-~~(g/2),n,g);b+=e.height/2/d+4}0<this.id&&ob&&(c||0==k.length&&(!this.h||this.n)&&20<this.size)&&(null==this.O&&(this.O=new ua(this.l()/2,"#FFFFFF",!0,"#000000")),c=this.O,c.M(this.l()/2),c.C(~~(this.size*this.size/100)),d=Math.ceil(10*h)/10,c.ea(d),e=c.L(),n=~~(e.width/d),g=~~(e.height/d),a.drawImage(e,~~this.x-~~(n/2),b-~~(g/2),n,g));a.restore()}}};ua.prototype={F:"",S:"#000000",U:!1,v:"#000000",u:16,p:null,T:null,k:!1,D:1,M:function(a){this.u!=a&&(this.u=a,this.k=!0)},ea:function(a){this.D!=a&&(this.D=a,this.k=!0)},setStrokeColor:function(a){this.v!=a&&(this.v=a,this.k=!0)},C:function(a){a!=this.F&&(this.F=a,this.k=!0)},L:function(){null==this.p&&(this.p=document.createElement("canvas"),this.T=this.p.getContext("2d"));if(this.k){this.k=!1;var a=this.p,b=this.T,c=this.F,d=this.D,e=this.u,n=e+"px Ubuntu";b.font=n;var g=~~(.2*e);a.width=(b.measureText(c).width+6)*d;a.height=(e+g)*d;b.font=n;b.scale(d,d);b.globalAlpha=1;b.lineWidth=3;b.strokeStyle=this.v;b.fillStyle=this.S;this.U&&b.strokeText(c,3,e-g/2);b.fillText(c,3,e-g/2)}return this.p}};Date.now||(Date.now=function(){return(new Date).getTime()});(function(){for(var a=["ms","moz","webkit","o"],b=0;b<a.length&&!d.requestAnimationFrame;++b)d.requestAnimationFrame=d[a[b]+"RequestAnimationFrame"],d.cancelAnimationFrame=d[a[b]+"CancelAnimationFrame"]||d[a[b]+"CancelRequestAnimationFrame"];d.requestAnimationFrame||(d.requestAnimationFrame=function(a){return setTimeout(a,1E3/60)},d.cancelAnimationFrame=function(a){clearTimeout(a)})})();var ub={ka:function(a){function b(a,b,c,d,e){this.x=a;this.y=b;this.j=c;this.g=d;this.depth=e;this.items=[];this.c=[]}var c=a.la||2,d=a.ma||4;b.prototype={x:0,y:0,j:0,g:0,depth:0,items:null,c:null,H:function(a){for(var b=0;b<this.items.length;++b){var c=this.items[b];if(c.x>=a.x&&c.y>=a.y&&c.x<a.x+a.j&&c.y<a.y+a.g)return!0}if(0!=this.c.length){var d=this;return this.$(a,function(b){return d.c[b].H(a)})}return!1},A:function(a,b){for(var c=0;c<this.items.length;++c)b(this.items[c]);if(0!=this.c.length){var d=this;this.$(a,function(c){d.c[c].A(a,b)})}},m:function(a){0!=this.c.length?this.c[this.Z(a)].m(a):this.items.length>=c&&this.depth<d?(this.ha(),this.c[this.Z(a)].m(a)):this.items.push(a)},Z:function(a){return a.x<this.x+this.j/2?a.y<this.y+this.g/2?0:2:a.y<this.y+this.g/2?1:3},$:function(a,b){return a.x<this.x+this.j/2&&(a.y<this.y+this.g/2&&b(0)||a.y>=this.y+this.g/2&&b(2))||a.x>=this.x+this.j/2&&(a.y<this.y+this.g/2&&b(1)||a.y>=this.y+this.g/2&&b(3))?!0:!1},ha:function(){var a=this.depth+1,c=this.j/2,d=this.g/2;this.c.push(new b(this.x,this.y,c,d,a));this.c.push(new b(this.x+c,this.y,c,d,a));this.c.push(new b(this.x,this.y+d,c,d,a));this.c.push(new b(this.x+c,this.y+d,c,d,a));a=this.items;this.items=[];for(c=0;c<a.length;c++)this.m(a[c])},clear:function(){for(var a=0;a<this.c.length;a++)this.c[a].clear();this.items.length=0;this.c.length=0}};var e={x:0,y:0,j:0,g:0};return{root:new b(a.ca,a.da,a.na-a.ca,a.oa-a.da,0),m:function(a){this.root.m(a)},A:function(a,b){this.root.A(a,b)},qa:function(a,b,c,d,f){e.x=a;e.y=b;e.j=c;e.g=d;this.root.A(e,f)},H:function(a){return this.root.H(a)},clear:function(){this.root.clear()}}}},db=function(){var a=new ga(0,0,0,32,"#ED1C24",""),b=document.createElement("canvas");b.width=32;b.height=32;var c=b.getContext("2d");return function(){0<k.length&&(a.color=k[0].color,a.B(k[0].name));c.clearRect(0,0,32,32);c.save();c.translate(16,16);c.scale(.4,.4);a.w(c);c.restore();var d=document.getElementById("favicon"),e=d.cloneNode(!0);e.setAttribute("href",b.toDataURL("image/png"));d.parentNode.replaceChild(e,d)}}();e(function(){db()});e(function(){+d.localStorage.wannaLogin&&(d.localStorage.loginCache&&mb(d.localStorage.loginCache),d.localStorage.fbPictureCache&&e(".agario-profile-picture").attr("src",d.localStorage.fbPictureCache))});d.facebookLogin=function(){d.localStorage.wannaLogin=1};d.fbAsyncInit=function(){function a(){d.localStorage.wannaLogin=1;null==d.FB?alert("You seem to have something blocking Facebook on your browser, please check for any extensions"):d.FB.login(function(a){La(a)},{scope:"public_profile, email"})}d.FB.init({appId:"677505792353827",cookie:!0,xfbml:!0,status:!0,version:"v2.2"});d.FB.Event.subscribe("auth.statusChange",function(b){+d.localStorage.wannaLogin&&("connected"==b.status?La(b):a())});d.facebookLogin=a};d.logout=function(){A=null;e("#helloContainer").attr("data-logged-in","0");e("#helloContainer").attr("data-has-account-data","0");delete d.localStorage.wannaLogin;delete d.localStorage.loginCache;delete d.localStorage.fbPictureCache;D()};var Ib=function(){function a(a,b,c,d,e){var f=b.getContext("2d"),h=b.width;b=b.height;a.color=e;a.B(c);a.size=d;f.save();f.translate(h/2,b/2);a.w(f);f.restore()}var b=new ga(0,0,0,32,"#5bc0de","");b.id=-1;var c=new ga(0,0,0,32,"#5bc0de","");c.id=-1;var d=document.createElement("canvas");d.getContext("2d");d.width=d.height=70;a(c,d,"",26,"#ebc0de");return function(){e(".cell-spinner").filter(":visible").each(function(){var c=e(this),f=Date.now(),g=this.width,h=this.height,k=this.getContext("2d");k.clearRect(0,0,g,h);k.save();k.translate(g/2,h/2);for(var l=0;10>l;++l)k.drawImage(d,(.1*f+80*l)%(g+140)-g/2-70-35,h/2*Math.sin((.001*f+l)%Math.PI*2)-35,70,70);k.restore();(c=c.attr("data-itr"))&&(c=ba(c));a(b,this,c||"",+e(this).attr("data-size"),"#5bc0de")})}}();d.createParty=function(){aa(":party");K=function(a){Ma("/#"+d.encodeURIComponent(a));e(".partyToken").val("agar.io/#"+d.encodeURIComponent(a));e("#helloContainer").attr("data-party-state","1")};D()};d.joinParty=Wa;d.cancelParty=function(){Ma("/");e("#helloContainer").attr("data-party-state","0");aa("");D()};e(function(){e(sb)})}}}}})(window,window.jQuery);
