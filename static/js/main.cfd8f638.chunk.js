(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,o){},11:function(e,t,o){},13:function(e,t,o){"use strict";o.r(t);var c=o(1),l=o.n(c),a=o(4),n=o.n(a),s=(o(10),o(2)),r=(o(11),o(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"/about",children:e.about})})]}),Object(r.jsxs)("div",{className:"form-check form-switch mx-1 text-".concat(e.mode,"==='light'?dark:light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleModeYellow,type:"checkbox",role:"switch",id:"flexSwitchCheckDefaultyellow"})," Yellow"]}),Object(r.jsxs)("div",{className:"form-check form-switch mx-1 text-".concat(e.mode,"==='light'?dark:light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleModeGreen,type:"checkbox",role:"switch",id:"flexSwitchCheckDefaultgreen"})," Green"]}),Object(r.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat(e.mode,"==='light'?dark:light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleModeBlue,type:"checkbox",role:"switch",id:"flexSwitchCheckDefaultblue"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{color:"dark"===e.mode?"white":"black"},children:e.modeText})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]})]})]})})}function d(e){var t=Object(c.useState)(""),o=Object(s.a)(t,2),l=o[0],a=o[1],n=0;return n=0===l.length?0:l.split(" ").length,Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{style:{color:"dark"===e.mode?"white":"black"},children:e.heading}),Object(r.jsx)("div",{className:"mb-2",children:Object(r.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"dark"===e.mode?"#b1a7a7":"White",color:"dark"===e.mode?"red":"black"},onChange:function(e){console.log("Handle on change"),a(e.target.value)},rows:"10",value:l})}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Convert to Uppercase clicked");var t=l.toUpperCase();a(t),""!=l?e.showAlert(": Converted to Uppercase","success"):e.showAlert(": Write something","warning")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Convert to Lowercase clicked");var t=l.toLowerCase();a(t),""!=l?e.showAlert(": Converted to Lowercase","success"):e.showAlert(": Write something","warning")},style:{margin:"0px 16px"},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Clear the Text"),a(""),""!=l?e.showAlert(": Text has been Cleared","success"):e.showAlert(": Nothing to Clear","warning")},style:{margin:"0px"},children:"Clear Text"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Copy the text");var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),""!=l?e.showAlert(": Copied to the dashboard","success"):e.showAlert(": Write something","warning")},style:{margin:"0px 12px"},children:"Copy Text"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(t){console.log("Remove Extra spaces"),a(l.split(" ").filter((function(e){return e})).join(" ")),""!=l?e.showAlert(": Extra spaces has been removed","success"):e.showAlert(": Write something","warning")},style:{margin:"0px 4px"},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h2",{style:{color:"dark"===e.mode?"white":"black"},children:"Your Text Summary"}),Object(r.jsxs)("p",{style:{color:"dark"===e.mode?"white":"black"},children:[n," words, ",l.length," characters"]}),Object(r.jsxs)("p",{style:{color:"dark"===e.mode?"white":"black"},children:["Reading Time : ",.008*n," minutes"]})]}),Object(r.jsx)("h2",{className:"mx-3",style:{color:"dark"===e.mode?"white":"black"},children:"Preview"}),Object(r.jsx)("p",{className:"mx-3",style:{color:"dark"===e.mode?"white":"black"},children:l.length>0?l:"Enter something to preview over here"})]})}function b(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),"  ",e.alert.msg]})}i.defaultProps={title:"Set Title here",about:"About"};var h=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),o=t[0],l=t[1],a=Object(c.useState)("Enable Light Mode"),n=Object(s.a)(a,2),h=n[0],m=n[1],u=Object(c.useState)(null),g=Object(s.a)(u,2),j=g[0],x=g[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",mode:o,toggleModeBlue:function(){console.log("toggle Mode"),"light"===o?(l("dark"),m("Enable Light Mode"),document.body.style.backgroundColor="#09283E",p(": Blue Mode has been enabled","success"),document.title="TextUtils - Home Blue Mode"):(l("light"),m("Enable Dark Mode"),document.body.style.backgroundColor="white",p(": Light Mode has been enabled","success"),document.title="TextUtils - Home Light Mode")},toggleModeGreen:function(){console.log("toggle Mode"),"light"===o?(l("dark"),m("Enable Light Mode"),document.body.style.backgroundColor="#2a7908",p(": Green Mode has been enabled","success"),document.title="TextUtils - Home Green Mode"):(l("light"),m("Enable Dark Mode"),document.body.style.backgroundColor="white",p(": Light Mode has been enabled","success"),document.title="TextUtils - Home Light Mode")},toggleModeYellow:function(){console.log("toggle Mode"),"light"===o?(l("dark"),m("Enable Light Mode"),document.body.style.backgroundColor="#e4b31f",p(": Yellow Mode has been enabled","success"),document.title="TextUtils - Home Yellow Mode"):(l("light"),m("Enable Dark Mode"),document.body.style.backgroundColor="white",p(": Light Mode has been enabled","success"),document.title="TextUtils - Home Light Mode")},modeText:h}),Object(r.jsx)(b,{alert:j}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(d,{heading:"Enter the Text to Analyze",mode:o,showAlert:p})})]})},m=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,15)).then((function(t){var o=t.getCLS,c=t.getFID,l=t.getFCP,a=t.getLCP,n=t.getTTFB;o(e),c(e),l(e),a(e),n(e)}))};n.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.cfd8f638.chunk.js.map