(function(_ds){var window=this;var K5,L5=function(){return"devsite-notification"},M5=function(a){a.dispatchEvent(new CustomEvent("devsite-hide-notification-snackbar-msg",{bubbles:!0}))},N5=class extends _ds.D{constructor(){super(["devsite-snackbar"])}async connectedCallback(){await window.customElements.whenDefined("devsite-snackbar");const a=this.getAttribute("link"),b=this.getAttribute("link-text"),c=this.getAttribute("message");a!==K5&&(!a&&K5?(K5="",M5(this)):a&&c&&(K5&&M5(this),K5=a,this.dispatchEvent(new CustomEvent("devsite-show-notification-snackbar-msg",
{detail:{href:a,linkText:b,msg:c,hidePrevious:"true"},bubbles:!0}))))}};N5.prototype.connectedCallback=N5.prototype.connectedCallback;N5.getTagName=L5;try{window.customElements.define(L5(),N5)}catch(a){console.warn("devsite.app.customElement.DevsiteNotification",a)};})(_ds_www);
