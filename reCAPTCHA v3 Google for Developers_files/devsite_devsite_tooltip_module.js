(function(_ds){var window=this;var mfa=function(a){return(0,_ds.R)('<span class="devsite-tooltip-msg">'+_ds.S(a.wx)+"</span>")};var nfa=["dl.google.com"],ofa="abc.xyz admob.com android.com blogger.com blogspot.com chrome.com chromium.org domains.google doubleclick.com feedburner.com g.co ggpht.com gmail.com gmodules.com goo.gl google.com google.org googleapis.com googleapps.com googlecode.com googledrive.com googlemail.com googlesource.com googlesyndication.com googletagmanager.com googleusercontent.com gv.com keyhole.com madewithcode.com panoramio.com urchin.com withgoogle.com youtu.be youtube.com ytimg.com".split(" "),pfa=
function(a){const b=Array.from(document.querySelectorAll(".devsite-article-body [title]"));for(const c of b){let d;c.setAttribute("data-title",null!=(d=c.getAttribute("title"))?d:"");c.removeAttribute("title")}if(a.hasAttribute("blocked-link")){a=Array.from(document.getElementsByTagName("a"));for(const c of a)if(a=c.getAttribute("href")){const d=(new URL(a,document.location.origin)).hostname.replace("www.","");!nfa.some(e=>-1!==d.indexOf(e))&&ofa.some(e=>-1!==d.indexOf(e))&&(c.setAttribute("data-title",
"This link may not be accessible in your region."),c.removeAttribute("title"))}}},qfa=function(a){a.eventHandler.listen(document.body,"devsite-content-updated",()=>{a.o.Qa()});a.eventHandler.listen(document.body,"onpointermove"in window?"pointermove":"mousemove",b=>{if(b=b.Ga.composedPath()){var c=!1,d=null;for(d of b)if(_ds.qr()(d)&&(c=F8(d)),c)break;d&&c?G8(a,d):H8(a)}});a.eventHandler.listen(document.body,"focusin",b=>{b=b.target;const c=b.firstElementChild;(b.classList.contains("devsite-nav-title")&&
c?F8(c):F8(b))?G8(a,b):H8(a)});a.eventHandler.listen(document.body,["devsite-sticky-scroll","devsite-sticky-resize"],()=>{H8(a)})},H8=function(a){if(a.g){a.g=null;var b=a.h;a.h=null;b&&(_ds.Cg(b,_ds.mg,()=>{_ds.jj(b);_ds.gj(b)}),window.setTimeout(()=>{_ds.jj(b);_ds.gj(b)},1E3),b.style.opacity="0")}},F8=function(a){return a.hasAttribute("no-tooltip")?!1:a.hasAttribute("data-title")||a.hasAttribute("data-tooltip")||a.hasAttribute("tooltip")&&a.clientWidth<a.scrollWidth},G8=function(a,b){if(a.g!==b){H8(a);
var c,d=b.getAttribute("data-tooltip")||b.getAttribute("data-title")||(null!=(c=b.textContent)?c:"").trim(),e=_ds.O(mfa,{wx:d});e.style.opacity="0";document.body.appendChild(e);var f=_ds.Yi(window),g=e.getBoundingClientRect(),{top:h,left:k,width:l,height:m}=b.getBoundingClientRect();c=h+m;c+g.height+4>f.height&&(c=h-g.height-16);d=k+l/2-g.width/2;g.width>f.width?d=0:(d=Math.max(d,4),f=f.width-(d+g.width+4),0>f&&(d+=f));e.style.top=`${c}px`;e.style.left=`${d}px`;a.g=b;a.h=e;window.requestAnimationFrame(()=>
{e.style.opacity="1"})}},rfa=class extends _ds.IJ{constructor(){super();this.eventHandler=new _ds.F;this.h=this.g=null;this.o=new _ds.Rl(()=>void pfa(this),250)}connectedCallback(){document.body.hasAttribute("touch")?_ds.jj(this):(qfa(this),this.o.Qa())}disconnectedCallback(){super.disconnectedCallback();_ds.H(this.eventHandler)}};try{window.customElements.define("devsite-tooltip",rfa)}catch(a){console.warn("devsite.app.customElement.DevsiteTooltip",a)};})(_ds_www);
