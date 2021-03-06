/*
 * jQuery Tools 1.2.4 - The missing UI library for the Web
 * 
 * [dateinput, rangeinput, validator]
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * File generated: Wed Aug 18 09:10:10 GMT 2010
 */
(function(d){function R(b,c){return 32-(new Date(b,c,32)).getDate()}function S(b,c){b=""+b;
for(c=c||2;
b.length<c;
)b="0"+b;
return b}function T(b,c,i){var p=b.getDate(),h=b.getDay(),q=b.getMonth();
b=b.getFullYear();
var f={d:p,dd:S(p),ddd:B[i].shortDays[h],dddd:B[i].days[h],m:q+1,mm:S(q+1),mmm:B[i].shortMonths[q],mmmm:B[i].months[q],yy:String(b).slice(2),yyyy:b};
c=c.replace(X,function(r){return r in f?f[r]:r.slice(1,r.length-1)});
return Y.html(c).html()}function y(b){return parseInt(b,10)}function U(b,
c){return b.getFullYear()===c.getFullYear()&&b.getMonth()==c.getMonth()&&b.getDate()==c.getDate()}function C(b){if(b){if(b.constructor==Date)return b;
if(typeof b=="string"){var c=b.split("-");
if(c.length==3)return new Date(y(c[0]),y(c[1])-1,y(c[2]));
if(!/^-?\d+$/.test(b))return;
b=y(b)}c=new Date;
c.setDate(c.getDate()+b);
return c}}function Z(b,c){function i(a,e,g){m=a;
D=a.getFullYear();
E=a.getMonth();
G=a.getDate();
g=g||d.Event("api");
g.type="change";
H.trigger(g,[a]);
if(!g.isDefaultPrevented()){b.val(T(a,
e.format,e.lang));
b.data("date",a);
h.hide(g)}}function p(a){a.type="onShow";
H.trigger(a);
d(document).bind("keydown.d",function(e){if(e.ctrlKey)return true;
var g=e.keyCode;
if(g==8){b.val("");
return h.hide(e)}if(g==27)return h.hide(e);
if(d(V).index(g)>=0){if(!v){h.show(e);
return e.preventDefault()}var j=d("#"+f.weeks+" a"),s=d("."+f.focus),n=j.index(s);
s.removeClass(f.focus);
if(g==74||g==40)n+=7;
else if(g==75||g==38)n-=7;
else if(g==76||g==39)n+=1;
else if(g==72||g==37)n-=1;
if(n>41){h.addMonth();
s=d("#"+
f.weeks+" a:eq("+(n-42)+")")}else if(n<0){h.addMonth(-1);
s=d("#"+f.weeks+" a:eq("+(n+42)+")")}else s=j.eq(n);
s.addClass(f.focus);
return e.preventDefault()}if(g==34)return h.addMonth();
if(g==33)return h.addMonth(-1);
if(g==36)return h.today();
if(g==13)d(e.target).is("select")||d("."+f.focus).click();
return d([16,17,18,9]).index(g)>=0});
d(document).bind("click.d",function(e){var g=e.target;
if(!d(g).parents("#"+f.root).length&&g!=b[0]&&(!L||g!=L[0]))h.hide(e)})}var h=this,q=new Date,f=c.css,r=B[c.lang],
k=d("#"+f.root),M=k.find("#"+f.title),L,I,J,D,E,G,m=b.attr("data-value")||c.value||b.val(),o=b.attr("min")||c.min,t=b.attr("max")||c.max,v;
if(o===0)o="0";
m=C(m)||q;
o=C(o||c.yearRange[0]*365);
t=C(t||c.yearRange[1]*365);
if(!r)throw"Dateinput: invalid language: "+c.lang;
if(b.attr("type")=="date"){var N=d("<input/>");
d.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(a,e){N.attr(e,b.attr(e))});
b.replaceWith(N);
b=N}b.addClass(f.input);
var H=
b.add(h);
if(!k.length){k=d("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",f.root);
k.children().eq(0).attr("id",f.head).end().eq(1).attr("id",f.body).children().eq(0).attr("id",f.days).end().eq(1).attr("id",f.weeks).end().end().end().find("a").eq(0).attr("id",f.prev).end().eq(1).attr("id",f.next);
M=k.find("#"+f.head).find("div").attr("id",f.title);
if(c.selectors){var z=d("<select/>").attr("id",f.year),A=d("<select/>").attr("id",f.month);
M.append(z.add(A))}for(var $=
k.find("#"+f.days),O=0;
O<7;
O++)$.append(d("<span/>").text(r.shortDays[(O+c.firstDay)%7]));
d("body").append(k)}if(c.trigger)L=d("<a/>").attr("href","#").addClass(f.trigger).click(function(a){h.show();
return a.preventDefault()}).insertAfter(b);
var K=k.find("#"+f.weeks);
A=k.find("#"+f.year);
z=k.find("#"+f.month);
d.extend(h,{show:function(a){if(!(b.is("[readonly]")||v)){a=a||d.Event();
a.type="onBeforeShow";
H.trigger(a);
if(!a.isDefaultPrevented()){d.each(W,function(){this.hide()});
v=true;
z.unbind("change").change(function(){h.setValue(A.val(),
d(this).val())});
A.unbind("change").change(function(){h.setValue(d(this).val(),z.val())});
I=k.find("#"+f.prev).unbind("click").click(function(){I.hasClass(f.disabled)||h.addMonth(-1);
return false});
J=k.find("#"+f.next).unbind("click").click(function(){J.hasClass(f.disabled)||h.addMonth();
return false});
h.setValue(m);
var e=b.position();
k.css({top:e.top+b.outerHeight({margins:true})+c.offset[0],left:e.left+c.offset[1]});
if(c.speed)k.show(c.speed,function(){p(a)});
else{k.show();
p(a)}return h}}},setValue:function(a,
e,g){var j;
if(parseInt(e,10)>=-1){a=y(a);
e=y(e);
g=y(g);
j=new Date(a,e,g)}else{j=a||m;
a=j.getFullYear();
e=j.getMonth();
g=j.getDate()}if(e==-1){e=11;
a--}else if(e==12){e=0;
a++}if(!v){i(j,c);
return h}E=e;
D=a;
g=new Date(a,e,1-c.firstDay);
g=g.getDay();
var s=R(a,e),n=R(a,e-1),P;
if(c.selectors){z.empty();
d.each(r.months,function(w,F){o<new Date(a,w+1,-1)&&t>new Date(a,w,0)&&z.append(d("<option/>").html(F).attr("value",w))});
A.empty();
j=q.getFullYear();
for(var l=j+c.yearRange[0];
l<j+c.yearRange[1];
l++)o<
new Date(l+1,-1,0)&&t>new Date(l,0,0)&&A.append(d("<option/>").text(l));
z.val(e);
A.val(a)}else M.html(r.months[e]+" "+a);
K.empty();
I.add(J).removeClass(f.disabled);
l=!g?-7:0;
for(var u,x;
l<(!g?35:42);
l++){u=d("<a/>");
if(l%7===0){P=d("<div/>").addClass(f.week);
K.append(P)}if(l<g){u.addClass(f.off);
x=n-g+l+1;
j=new Date(a,e-1,x)}else if(l>=g+s){u.addClass(f.off);
x=l-s-g+1;
j=new Date(a,e+1,x)}else{x=l-g+1;
j=new Date(a,e,x);
if(U(m,j))u.attr("id",f.current).addClass(f.focus);
else U(q,j)&&u.attr("id",f.today)}o&&
j<o&&u.add(I).addClass(f.disabled);
t&&j>t&&u.add(J).addClass(f.disabled);
u.attr("href","#"+x).text(x).data("date",j);
P.append(u)}K.find("a").click(function(w){var F=d(this);
if(!F.hasClass(f.disabled)){d("#"+f.current).removeAttr("id");
F.attr("id",f.current);
i(F.data("date"),c,w)}return false});
f.sunday&&K.find(f.week).each(function(){var w=c.firstDay?7-c.firstDay:0;
d(this).children().slice(w,w+1).addClass(f.sunday)});
return h},setMin:function(a,e){o=C(a);
e&&m<o&&h.setValue(o);
return h},setMax:function(a,
e){t=C(a);
e&&m>t&&h.setValue(t);
return h},today:function(){return h.setValue(q)},addDay:function(a){return this.setValue(D,E,G+(a||1))},addMonth:function(a){return this.setValue(D,E+(a||1),G)},addYear:function(a){return this.setValue(D+(a||1),E,G)},hide:function(a){if(v){a=d.Event();
a.type="onHide";
H.trigger(a);
d(document).unbind("click.d").unbind("keydown.d");
if(a.isDefaultPrevented())return;
k.hide();
v=false}return h},getConf:function(){return c},getInput:function(){return b},getCalendar:function(){return k},
getValue:function(a){return a?T(m,a,c.lang):m},isOpen:function(){return v}});
d.each(["onBeforeShow","onShow","change","onHide"],function(a,e){d.isFunction(c[e])&&d(h).bind(e,c[e]);
h[e]=function(g){d(h).bind(e,g);
return h}});
b.bind("focus click",h.show).keydown(function(a){var e=a.keyCode;
if(!v&&d(V).index(e)>=0){h.show(a);
return a.preventDefault()}return a.shiftKey||a.ctrlKey||a.altKey||e==9?true:a.preventDefault()});
C(b.val())&&i(m,c)}d.tools=d.tools||{version:"1.2.4"};
var W=[],Q,V=[75,76,38,39,
74,72,40,37],B={};
Q=d.tools.dateinput={conf:{format:"mm/dd/yy",selectors:false,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:undefined,max:undefined,trigger:false,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},localize:function(b,c){d.each(c,function(i,p){c[i]=p.split(",")});
B[b]=c}};
Q.localize("en",{months:"1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월",
shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"일,월,화,수,목,금,토"});
var X=/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,Y=d("<a/>");
d.expr[":"].date=function(b){var c=b.getAttribute("type");
return c&&c=="date"||!!d(b).data("dateinput")};
d.fn.dateinput=function(b){if(this.data("dateinput"))return this;
b=d.extend(true,{},Q.conf,b);
d.each(b.css,function(i,p){if(!p&&i!="prefix")b.css[i]=(b.css.prefix||"")+
(p||i)});
var c;
this.each(function(){var i=new Z(d(this),b);
W.push(i);
i=i.getInput().data("dateinput",i);
c=c?c.add(i):i});
return c?c:this}})(jQuery);

(function(e){function F(d,a){a=Math.pow(10,a);
return Math.round(d*a)/a}function p(d,a){if(a=parseInt(d.css(a),10))return a;
return(d=d[0].currentStyle)&&d.width&&parseInt(d.width,10)}function C(d){return(d=d.data("events"))&&d.onSlide}function G(d,a){function h(c,b,f,j){if(f===undefined)f=b/k*z;
else if(j)f-=a.min;
if(r)f=Math.round(f/r)*r;
if(b===undefined||r)b=f*k/z;
if(isNaN(f))return g;
b=Math.max(0,Math.min(b,k));
f=b/k*z;
if(j||!n)f+=a.min;
if(n)if(j)b=k-b;
else f=a.max-f;
f=F(f,t);
var q=c.type=="click";

if(D&&l!==undefined&&!q){c.type="onSlide";
A.trigger(c,[f,b]);
if(c.isDefaultPrevented())return g}j=q?a.speed:0;
q=q?function(){c.type="change";
A.trigger(c,[f])}:null;
if(n){m.animate({top:b},j,q);
a.progress&&B.animate({height:k-b+m.width()/2},j)}else{m.animate({left:b},j,q);
a.progress&&B.animate({width:b+m.width()/2},j)}l=f;
H=b;
d.val(f);
return g}function s(){if(n=a.vertical||p(i,"height")>p(i,"width")){k=p(i,"height")-p(m,"height");
u=i.offset().top+k}else{k=p(i,"width")-p(m,"width");
u=i.offset().left}}
function v(){s();
g.setValue(a.value||a.min)}var g=this,o=a.css,i=e("<div><div/><a href='#'/></div>").data("rangeinput",g),n,l,u,k,H;
d.before(i);
var m=i.addClass(o.slider).find("a").addClass(o.handle),B=i.find("div").addClass(o.progress);
e.each("min,max,step,value".split(","),function(c,b){c=d.attr(b);
if(parseFloat(c))a[b]=parseFloat(c,10)});
var z=a.max-a.min,r=a.step=="any"?0:a.step,t=a.precision;
if(t===undefined)try{t=r.toString().split(".")[1].length}catch(I){t=0}if(d.attr("type")=="range"){var w=
e("<input/>");
e.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","),function(c,b){w.attr(b,d.attr(b))});
w.val(a.value);
d.replaceWith(w);
d=w}d.addClass(o.input);
var A=e(g).add(d),D=true;
e.extend(g,{getValue:function(){return l},setValue:function(c,b){return h(b||e.Event("api"),undefined,c,true)},getConf:function(){return a},getProgress:function(){return B},getHandle:function(){return m},getInput:function(){return d},step:function(c,b){b=b||e.Event();

var f=a.step=="any"?1:a.step;
g.setValue(l+f*(c||1),b)},stepUp:function(c){return g.step(c||1)},stepDown:function(c){return g.step(-c||-1)}});
e.each("onSlide,change".split(","),function(c,b){e.isFunction(a[b])&&e(g).bind(b,a[b]);
g[b]=function(f){e(g).bind(b,f);
return g}});
m.drag({drag:false}).bind("dragStart",function(){D=C(e(g))||C(d)}).bind("drag",function(c,b,f){if(d.is(":disabled"))return false;
h(c,n?b:f)}).bind("dragEnd",function(c){if(!c.isDefaultPrevented()){c.type="change";
A.trigger(c,[l])}}).click(function(c){return c.preventDefault()});

i.click(function(c){if(d.is(":disabled")||c.target==m[0])return c.preventDefault();
s();
var b=m.width()/2;
h(c,n?k-u-b+c.pageY:c.pageX-u-b)});
a.keyboard&&d.keydown(function(c){if(!d.attr("readonly")){var b=c.keyCode,f=e([75,76,38,33,39]).index(b)!=-1,j=e([74,72,40,34,37]).index(b)!=-1;
if((f||j)&&!(c.shiftKey||c.altKey||c.ctrlKey)){if(f)g.step(b==33?10:1,c);
else if(j)g.step(b==34?-10:-1,c);
return c.preventDefault()}}});
d.blur(function(c){var b=e(this).val();
b!==l&&g.setValue(b,c)});
e.extend(d[0],{stepUp:g.stepUp,
stepDown:g.stepDown});
v();
k||e(window).load(v)}e.tools=e.tools||{version:"1.2.4"};
var E;
E=e.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:undefined,vertical:0,keyboard:true,progress:false,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};
var x,y;
e.fn.drag=function(d){document.ondragstart=function(){return false};
d=e.extend({x:true,y:true,drag:true},d);
x=x||e(document).bind("mousedown mouseup",function(a){var h=e(a.target);
if(a.type=="mousedown"&&
h.data("drag")){var s=h.position(),v=a.pageX-s.left,g=a.pageY-s.top,o=true;
x.bind("mousemove.drag",function(i){var n=i.pageX-v;
i=i.pageY-g;
var l={};
if(d.x)l.left=n;
if(d.y)l.top=i;
if(o){h.trigger("dragStart");
o=false}d.drag&&h.css(l);
h.trigger("drag",[i,n]);
y=h});
a.preventDefault()}else try{y&&y.trigger("dragEnd")}finally{x.unbind("mousemove.drag");
y=null}});
return this.data("drag",true)};
e.expr[":"].range=function(d){var a=d.getAttribute("type");
return a&&a=="range"||!!e(d).filter("input").data("rangeinput")};

e.fn.rangeinput=function(d){if(this.data("rangeinput"))return this;
d=e.extend(true,{},E.conf,d);
var a;
this.each(function(){var h=new G(e(this),e.extend(true,{},d));
h=h.getInput().data("rangeinput",h);
a=a?a.add(h):h});
return a?a:this}})(jQuery);

(function(e){function t(a,b,c){var k=a.offset().top,f=a.offset().left,l=c.position.split(/,?\s+/),p=l[0];
l=l[1];
k-=b.outerHeight()-c.offset[0];
f+=a.outerWidth()+c.offset[1];
c=b.outerHeight()+a.outerHeight();
if(p=="center")k+=c/2;
if(p=="bottom")k+=c;
a=a.outerWidth();
if(l=="center")f-=(a+b.outerWidth())/2;
if(l=="left")f-=a;
return{top:k,left:f}}function x(a){function b(){return this.getAttribute("type")==a}b.key="[type="+a+"]";
return b}function u(a,b,c){function k(g,d,j){if(!(!c.grouped&&g.length)){var h;

if(j===false||e.isArray(j)){h=i.messages[d.key||d]||i.messages["*"];
h=h[c.lang]||i.messages["*"].en;
(d=h.match(/\$\d/g))&&e.isArray(j)&&e.each(d,function(n){h=h.replace(this,j[n])})}else h=j[c.lang]||j;
g.push(h)}}var f=this,l=b.add(f);
a=a.not(":button, :image, :reset, :submit");
e.extend(f,{getConf:function(){return c},getForm:function(){return b},getInputs:function(){return a},reflow:function(){a.each(function(){var g=e(this),d=g.data("msg.el");
if(d){g=t(g,d,c);
d.css({top:g.top,left:g.left})}});
return f},
invalidate:function(g,d){if(!d){var j=[];
e.each(g,function(h,n){h=a.filter("[name='"+h+"']");
if(h.length){h.trigger("OI",[n]);
j.push({input:h,messages:[n]})}});
g=j;
d=e.Event()}d.type="onFail";
l.trigger(d,[g]);
d.isDefaultPrevented()||r[c.effect][0].call(f,g,d);
return f},reset:function(g){g=g||a;
g.removeClass(c.errorClass).each(function(){var d=e(this).data("msg.el");
if(d){d.remove();
e(this).data("msg.el",null)}}).unbind(c.errorInputEvent||"");
return f},destroy:function(){b.unbind(c.formEvent).unbind("reset.V");

a.unbind(c.inputEvent||"").unbind("change.V");
return f.reset()},checkValidity:function(g,d){g=g||a;
g=g.not(":disabled");
if(!g.length)return true;
d=d||e.Event();
d.type="onBeforeValidate";
l.trigger(d,[g]);
if(d.isDefaultPrevented())return d.result;
var j=[],h=c.errorInputEvent+".v";
g.not(":radio:not(:checked)").each(function(){var q=[],m=e(this).unbind(h).data("messages",q);
e.each(v,function(){var o=this,s=o[0];
if(m.filter(s).length){o=o[1].call(f,m,m.val());
if(o!==true){d.type="onBeforeFail";
l.trigger(d,
[m,s]);
if(d.isDefaultPrevented())return false;
var w=m.attr(c.messageAttr);
if(w){q=[w];
return false}else k(q,s,o)}}});
if(q.length){j.push({input:m,messages:q});
m.trigger("OI",[q]);
c.errorInputEvent&&m.bind(h,function(o){f.checkValidity(m,o)})}if(c.singleError&&j.length)return false});
var n=r[c.effect];
if(!n)throw'Validator: cannot find effect "'+c.effect+'"';
if(j.length){f.invalidate(j,d);
return false}else{n[1].call(f,g,d);
d.type="onSuccess";
l.trigger(d,[g]);
g.unbind(h)}return true}});
e.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),
function(g,d){e.isFunction(c[d])&&e(f).bind(d,c[d]);
f[d]=function(j){e(f).bind(d,j);
return f}});
c.formEvent&&b.bind(c.formEvent,function(g){if(!f.checkValidity(null,g))return g.preventDefault()});
b.bind("reset.V",function(){f.reset()});
a[0]&&a[0].validity&&a.each(function(){this.oninvalid=function(){return false}});
if(b[0])b[0].checkValidity=f.checkValidity;
c.inputEvent&&a.bind(c.inputEvent,function(g){f.checkValidity(e(this),g)});
a.filter(":checkbox, select").filter("[required]").bind("change.V",
function(g){var d=e(this);
if(this.checked||d.is("select")&&e(this).val())r[c.effect][1].call(f,d,g)});
var p=a.filter(":radio").change(function(g){f.checkValidity(p,g)});
e(window).resize(function(){f.reflow()})}e.tools=e.tools||{version:"1.2.4"};
var y=/\[type=([a-z]+)\]/,z=/^-?[0-9]*(\.[0-9]+)?$/,A=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,B=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#\?\/\w \.\-=]*$/i,i;
i=e.tools.validator={conf:{grouped:false,effect:"default",errorClass:"invalid",inputEvent:null,
errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:false,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(a,b){e.each(b,function(c,k){i.messages[c]=i.messages[c]||{};
i.messages[c][a]=k})},localizeFn:function(a,b){i.messages[a]=i.messages[a]||{};
e.extend(i.messages[a],b)},fn:function(a,b,c){if(e.isFunction(b))c=b;
else{if(typeof b=="string")b={en:b};
this.messages[a.key||
a]=b}if(b=y.exec(a))a=x(b[1]);
v.push([a,c])},addEffect:function(a,b,c){r[a]=[b,c]}};
var v=[],r={"default":[function(a){var b=this.getConf();
e.each(a,function(c,k){c=k.input;
c.addClass(b.errorClass);
var f=c.data("msg.el");
if(!f){f=e(b.message).addClass(b.messageClass).appendTo(document.body);
c.data("msg.el",f)}f.css({visibility:"hidden",display:"none"}).find("span").remove();
e.each(k.messages,function(l,p){e("<span/>").html(p).appendTo(f)});
f.outerWidth()==f.parent().width()&&f.add(f.find("p")).css({display:"inline"});

k=t(c,f,b);
f.css({visibility:"visible",position:"absolute",top:k.top,left:k.left}).fadeIn(b.speed)})},function(a){var b=this.getConf();
a.removeClass(b.errorClass).each(function(){var c=e(this).data("msg.el");
c&&c.css({visibility:"hidden"})})}]};
e.each("email,url,number".split(","),function(a,b){e.expr[":"][b]=function(c){return c.getAttribute("type")===b}});
e.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)};
i.fn(":email","Please enter a valid email address",function(a,b){return!b||
A.test(b)});
i.fn(":url","Please enter a valid URL",function(a,b){return!b||B.test(b)});
i.fn(":number","Please enter a numeric value.",function(a,b){return z.test(b)});
i.fn("[max]","Please enter a value smaller than $1",function(a,b){if(b===""||e.tools.dateinput&&a.is(":date"))return true;
a=a.attr("max");
return parseFloat(b)<=parseFloat(a)?true:[a]});
i.fn("[min]","Please enter a value larger than $1",function(a,b){if(b===""||e.tools.dateinput&&a.is(":date"))return true;
a=a.attr("min");
return parseFloat(b)>=
parseFloat(a)?true:[a]});
i.fn("[required]","Please complete this mandatory field.",function(a,b){if(a.is(":checkbox"))return a.is(":checked");
return!!b});
i.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");
return b.test(a.val())});
e.fn.validator=function(a){var b=this.data("validator");
if(b){b.destroy();
this.removeData("validator")}a=e.extend(true,{},i.conf,a);
if(this.is("form"))return this.each(function(){var c=e(this);
b=new u(c.find(":input"),c,a);
c.data("validator",b)});
else{b=
new u(this,this.eq(0).closest("form"),a);
return this.data("validator",b)}}})(jQuery);


