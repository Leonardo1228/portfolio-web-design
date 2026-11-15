/* Navegación entre páginas (por #hash) y círculos negros aleatorios. */
var secs=[].slice.call(document.querySelectorAll("main>section")),ids=secs.map(function(s){return s.id}),T={};
secs.forEach(function(s){T[s.id]=s.dataset.title});
var nav=document.getElementById("nav");
nav.innerHTML=ids.map(function(i){return '<a href="#'+i+'">'+T[i]+'</a>'}).join("");
function route(){
 var h=location.hash.slice(1);if(h==="proceso")h="proyectos";if(ids.indexOf(h)<0)h="inicio";
 secs.forEach(function(s){s.hidden=s.id!==h});
 [].forEach.call(nav.children,function(a){a.getAttribute("href")==="#"+h?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")});
 var k=ids.indexOf(h),p=k>0?ids[k-1]:null,n=k<ids.length-1?ids[k+1]:null;
 document.getElementById("pager").innerHTML=(p?'<a href="#'+p+'">‹ '+T[p]+'</a>':'<span></span>')+(n?'<a href="#'+n+'">'+T[n]+' ›</a>':'');
 document.title=(h==="inicio"?"":T[h]+" · ")+"Portafolio profesional · Sergio Leonardo";
 scatter();window.scrollTo(0,0);
}
function scatter(){[].forEach.call(document.querySelectorAll(".page"),function(p){if(p.offsetParent===null)return;[].forEach.call(p.querySelectorAll(":scope>.dot"),function(o){o.remove()});var n=Math.max(2,Math.round(p.offsetHeight/150)+1);for(var i=0;i<n;i++){var o=document.createElement("span"),s=20+Math.random()*70;o.className="dot";o.setAttribute("aria-hidden","true");o.style.cssText="width:"+s+"px;height:"+s+"px;left:"+(Math.random()*96)+"%;top:"+(Math.random()*96)+"%";p.insertBefore(o,p.firstChild)}})}
window.addEventListener("hashchange",route);route();
