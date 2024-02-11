(self.webpackChunkreact_storybook=self.webpackChunkreact_storybook||[]).push([[256],{"./src/stories/Page.stories.js":(d,s,t)=>{"use strict";t.r(s),t.d(s,{LoggedIn:()=>g,LoggedOut:()=>z,__namedExportsOrder:()=>N,default:()=>f});var n=t("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),u=t("./node_modules/@babel/runtime/regenerator/index.js"),r=t.n(u),l=t("./node_modules/@storybook/test/dist/index.mjs"),a=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/next/dist/compiled/react/index.js"),y=t("./src/stories/Header.jsx"),T=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=t.n(T),D=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=t.n(D),O=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),L=t.n(O),I=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=t.n(I),C=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(C),m=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=t.n(m),c=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/page.css"),e={};e.styleTagTransform=W(),e.setAttributes=M(),e.insert=L().bind(null,"head"),e.domAPI=B(),e.insertStyleElement=p();var S=P()(c.default,e);const H=c.default&&c.default.locals?c.default.locals:void 0;var o=i.createElement,v=function(){var R=i.useState(),x=(0,a.default)(R,2),h=x[0],j=x[1];return o("article",null,o(y.Header,{user:h,onLogin:function(){return j({name:"Jane Doe"})},onLogout:function(){return j(void 0)},onCreateAccount:function(){return j({name:"Jane Doe"})}}),o("section",{className:"storybook-page"},o("h2",null,"Pages in Storybook"),o("p",null,"We recommend building UIs with a"," ",o("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},o("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),o("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),o("ul",null,o("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),o("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),o("p",null,"Get a guided tutorial on component-driven development at"," ",o("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",o("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),o("div",{className:"tip-wrapper"},o("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",o("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},o("g",{fill:"none",fillRule:"evenodd"},o("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};v.displayName="Page";const f={title:"Example/Page",component:v,parameters:{layout:"fullscreen"}};var z={},g={play:function(){var A=(0,n.default)(r().mark(function x(h){var j,b,U,K;return r().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return j=h.canvasElement,b=(0,l.within)(j),U=b.getByRole("button",{name:/Log in/i}),E.next=5,(0,l.expect)(U).toBeInTheDocument();case 5:return E.next=7,l.userEvent.click(U);case 7:return E.next=9,(0,l.expect)(U).not.toBeInTheDocument();case 9:return K=b.getByRole("button",{name:/Log out/i}),E.next=12,(0,l.expect)(K).toBeInTheDocument();case 12:case"end":return E.stop()}},x)}));function R(x){return A.apply(this,arguments)}return R}()};const N=["LoggedOut","LoggedIn"]},"./node_modules/@storybook/instrumenter/dist sync recursive":d=>{function s(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}s.keys=()=>[],s.resolve=s,s.id="./node_modules/@storybook/instrumenter/dist sync recursive",d.exports=s},"./node_modules/@storybook/test/dist sync recursive":d=>{function s(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}s.keys=()=>[],s.resolve=s,s.id="./node_modules/@storybook/test/dist sync recursive",d.exports=s},"./src/stories/Button.jsx":(d,s,t)=>{"use strict";t.r(s),t.d(s,{Button:()=>f});var n=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),u=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/styled-jsx/style.js"),l=t.n(r),a=t("./node_modules/next/dist/compiled/react/index.js"),i=t("./node_modules/prop-types/index.js"),y=t.n(i),T=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=t.n(T),D=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=t.n(D),O=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),L=t.n(O),I=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=t.n(I),C=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(C),m=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=t.n(m),c=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css"),e={};e.styleTagTransform=W(),e.setAttributes=M(),e.insert=L().bind(null,"head"),e.domAPI=B(),e.insertStyleElement=p();var S=P()(c.default,e);const H=c.default&&c.default.locals?c.default.locals:void 0;var o=["primary","backgroundColor","size","label"],v=a.createElement,f=function(g){var N=g.primary,A=g.backgroundColor,R=g.size,x=g.label,h=(0,u.default)(g,o),j=N?"storybook-button--primary":"storybook-button--secondary";return v("button",(0,n.default)({type:"button"},h,{className:l().dynamic([["2054451296",[A]]])+" "+(h&&h.className!=null&&h.className||["storybook-button","storybook-button--".concat(R),j].join(" ")||"")}),x,v(l(),{id:"2054451296",dynamic:[A]},["button.__jsx-style-dynamic-selector{background-color:".concat(A,";}")]))};f.displayName="Button",f.propTypes={primary:y().bool,backgroundColor:y().string,size:y().oneOf(["small","medium","large"]),label:y().string.isRequired,onClick:y().func},f.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0}},"./src/stories/Header.jsx":(d,s,t)=>{"use strict";t.r(s),t.d(s,{Header:()=>S});var n=t("./node_modules/next/dist/compiled/react/index.js"),u=t("./node_modules/prop-types/index.js"),r=t.n(u),l=t("./src/stories/Button.jsx"),a=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=t.n(a),y=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=t.n(y),P=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),D=t.n(P),B=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=t.n(B),L=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=t.n(L),M=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=t.n(M),p=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css"),m={};m.styleTagTransform=C(),m.setAttributes=O(),m.insert=D().bind(null,"head"),m.domAPI=T(),m.insertStyleElement=I();var W=i()(p.default,m);const c=p.default&&p.default.locals?p.default.locals:void 0;var e=n.createElement,S=function(o){var v=o.user,f=o.onLogin,z=o.onLogout,g=o.onCreateAccount;return e("header",null,e("div",{className:"storybook-header"},e("div",null,e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e("g",{fill:"none",fillRule:"evenodd"},e("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),e("h1",null,"Acme")),e("div",null,v?e(n.Fragment,null,e("span",{className:"welcome"},"Welcome, ",e("b",null,v.name),"!"),e(l.Button,{size:"small",onClick:z,label:"Log out"})):e(n.Fragment,null,e(l.Button,{size:"small",onClick:f,label:"Log in"}),e(l.Button,{primary:!0,size:"small",onClick:g,label:"Sign up"})))))};S.displayName="Header",S.propTypes={user:r().shape({name:r().string.isRequired}),onLogin:r().func.isRequired,onLogout:r().func.isRequired,onCreateAccount:r().func.isRequired},S.defaultProps={user:null}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(n),r=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(r),a=l()(u());a.push([d.id,`.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`,""]);const i=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(n),r=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(r),a=l()(u());a.push([d.id,`.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,""]);const i=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/page.css":(d,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(n),r=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(r),a=l()(u());a.push([d.id,`.storybook-page {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}

.storybook-page h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  text-decoration: none;
  color: #1ea7fd;
}

.storybook-page ul {
  padding-left: 30px;
  margin: 1em 0;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
}

.storybook-page .tip-wrapper {
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}
`,""]);const i=a}}]);
