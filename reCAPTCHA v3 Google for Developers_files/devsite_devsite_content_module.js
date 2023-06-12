(function(_ds){var window=this;var L_=function(a){return!a.classList.contains("material-icons")},T_=async function(a,b){await DevsiteApp.whenReady();const c=_ds.E();var d=DevsiteApp.getInsecureHost();b=b.Ga;if(b.origin===c.origin||!d||b.origin===d){try{var e=(0,_ds.Tm)(b.data)}catch(g){return}d=_ds.Zf(e,1);if(4===d)M_(a,b);else{var f=e.getName();if(f&&(f=a.querySelector(`devsite-iframe iframe[name="${f}"]`)))switch(d){case 5:N_(e,f);break;case 8:O_(b,e,c);break;case 1:P_(b,e,c);break;case 6:case 7:Q_(d,c,e);break;case 9:R_(a,e);
break;case 10:S_(e,c)}}}},X_=function(a){a.o=a.querySelector(".devsite-article-body");a.o&&(U_(a),a.v=[]);a.g&&a.g.disconnect();a.h.clear();V_(a);if(!document.body.hasAttribute("appearance")){var b=[...a.querySelectorAll("picture > source.devsite-dark-theme")];for(var c of b){b=c.closest("picture");const d=b.querySelector("img");b.querySelectorAll("source:not(.devsite-dark-theme)").length?c.remove():b&&d&&b.replaceWith(d)}}c=Array.from(a.querySelectorAll(".devsite-nav-title, .devsite-page-title, td > code, th > code"));
"docs"===document.body.getAttribute("layout")&&a.o&&(b=Array.from(a.o.querySelectorAll("h1, h2, h3, h4, h5, h6")),c.push(...b));a.h.clear();a.h=new Set(c);if(_ds.E().hash){c=new _ds.LJ;for(const d of a.h)_ds.KJ(c,d,L_)}else W_(a,a.h);a.dispatchEvent(new CustomEvent("devsite-content-updated",{bubbles:!0}))},V_=function(a){Array.from(a.getElementsByTagName("table")).forEach(b=>{if(!b.parentNode.classList.contains("devsite-table-wrapper")){var c=document.createElement("div");c.classList.add("devsite-table-wrapper");
b.classList.contains("full-width")&&(c.classList.add("devsite-full-width-table"),b.classList.remove("full-width"));_ds.hj(c,b);c.appendChild(b)}})},M_=async function(a,b){const c=Y_(a,b.source);if(c){const e="goog_"+_ds.Ni++;c.setAttribute("name",e);var d=_ds.Rm(3);d=_ds.Cc(d,2,e);(b=b.source)&&b.postMessage(_ds.bg(d),"*");(b=document.body.getAttribute("appearance"))&&Z_(c,b);a.v.push(c)}},N_=async function(a,b){const c=_ds.$i(document).y,d=_ds.Xf(a,4);a=_ds.Xf(a,3);b=_ds.pj(b);d&&b.setAttribute("width",
`${d}px`);a&&b.setAttribute("height",`${a}px`);window.requestAnimationFrame(()=>{window.scrollTo(_ds.$i(document).x,c)})},O_=async function(a,b,c){b=_ds.Sm(_ds.Rm(8),_ds.x(b,8));c=_ds.Cc(b,6,c.toString());(a=a.source)&&a.postMessage(_ds.bg(c),"*")},P_=async function(a,b,c){b=_ds.Sm(_ds.Rm(2),_ds.x(b,8));c=_ds.Cc(b,7,`${c.search}${c.hash}`);(a=a.source)&&a.postMessage(_ds.bg(c),"*")},Q_=async function(a,b,c){const d=c.getTitle();b=new URL(c.getUrl(),b.origin);b=`${window.location.origin}${window.location.pathname}${b.search}${b.hash}`;
6===a?window.history.pushState({},d,b):window.history.replaceState({},d,b)},R_=async function(a,b){const c=_ds.x(b,9);let d;try{d=JSON.parse(_ds.x(b,10))}catch(e){console.warn("Event data from Framebox is not valid JSON.",a);return}"analyticsEvent"===c?a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:d,bubbles:!0})):"cloudtrackEvent"===c?a.dispatchEvent(new CustomEvent("devsite-analytics-observation-cloudtrack",{detail:{eventData:d},bubbles:!0})):"devsite-apix"===c&&a.dispatchEvent(new CustomEvent("devsite-apix-observation",
{detail:d,bubbles:!0}))},S_=async function(a,b){if(a=a.getUrl()){const c=new URL(a,b.origin);a.startsWith("#")||b.origin===c.origin&&b.pathname===c.pathname&&b.search===c.search?DevsiteApp.scrollToAnchor(c.hash,!0):DevsiteApp.fetchPage(c.href)}},Y_=function(a,b){let c;Array.from(a.querySelectorAll("devsite-iframe iframe")).forEach(d=>{_ds.qj(d)===b&&(c=d)});return c},Z_=function(a,b){var c=_ds.Rm(12);b=_ds.Cc(c,12,b);a&&a.contentWindow&&(a=a.contentWindow)&&a.postMessage(_ds.bg(b),"*")},U_=function(a){"full"===
document.body.getAttribute("layout")&&(a=a.o.querySelectorAll('h1[tabindex="0"],h2[tabindex="0"],h3[tabindex="0"],h4[tabindex="0"],h5[tabindex="0"],h6[tabindex="0"]'))&&Array.from(a).forEach(b=>{b.removeAttribute("tabindex")})},W_=function(a,b){a.g&&b.forEach(c=>{a.g.observe(c)})},$_=class extends _ds.D{constructor(){super();this.ea=new _ds.F;this.ma=new _ds.F;this.h=new Set;this.v=[];this.g=null;"IntersectionObserver"in window&&(this.g=new IntersectionObserver(a=>{for(const b of a)b.isIntersecting&&
(a=b.target,_ds.KJ(new _ds.LJ,a,L_),this.h.delete(a),this.g.unobserve(a))},{rootMargin:"100%"}))}connectedCallback(){this.ea.listen(window,"message",a=>T_(this,a));this.ea.listen(document.body,"devsite-appearance-updated",a=>{if((a=a.Ga.detail.preference)&&this.v.length)for(const b of this.v)Z_(b,a)});X_(this)}disconnectedCallback(){this.g&&this.g.disconnect();this.h.clear();_ds.H(this.ea);_ds.H(this.ma)}Xb(a){a&&([".devsite-article",".devsite-content-data","devsite-content-footer","devsite-notification"].forEach(b=>
{_ds.gi(this,this.querySelector(b),a.querySelector(b))}),X_(this))}};$_.prototype.updateContent=$_.prototype.Xb;$_.prototype.disconnectedCallback=$_.prototype.disconnectedCallback;$_.prototype.connectedCallback=$_.prototype.connectedCallback;try{window.customElements.define("devsite-content",$_)}catch(a){console.warn("devsite.app.customElement.DevsiteContent",a)};})(_ds_www);
