"use strict";(self.webpackChunkreact_storybook=self.webpackChunkreact_storybook||[]).push([[55],{"./src/stories/Header.stories.js":(y,e,t)=>{t.r(e),t.d(e,{LoggedIn:()=>o,LoggedOut:()=>l,__namedExportsOrder:()=>d,default:()=>r});var n=t("./src/stories/Header.jsx");const r={title:"Example/Header",component:n.Header,tags:["autodocs"],parameters:{layout:"fullscreen"}};var o={args:{user:{name:"Jane Doe"}}},l={args:{}};const d=["LoggedIn","LoggedOut"]},"./src/stories/Button.jsx":(y,e,t)=>{t.r(e),t.d(e,{Button:()=>g});var n=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/styled-jsx/style.js"),l=t.n(o),d=t("./node_modules/next/dist/compiled/react/index.js"),i=t("./node_modules/prop-types/index.js"),u=t.n(i),A=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=t.n(A),S=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),x=t.n(S),T=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),P=t.n(T),b=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=t.n(b),O=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=t.n(O),a=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=t.n(a),f=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css"),s={};s.styleTagTransform=C(),s.setAttributes=B(),s.insert=P().bind(null,"head"),s.domAPI=x(),s.insertStyleElement=c();var j=h()(f.default,s);const M=f.default&&f.default.locals?f.default.locals:void 0;var v=["primary","backgroundColor","size","label"],p=d.createElement,g=function(m){var I=m.primary,D=m.backgroundColor,R=m.size,W=m.label,E=(0,r.default)(m,v),z=I?"storybook-button--primary":"storybook-button--secondary";return p("button",(0,n.default)({type:"button"},E,{className:l().dynamic([["2054451296",[D]]])+" "+(E&&E.className!=null&&E.className||["storybook-button","storybook-button--".concat(R),z].join(" ")||"")}),W,p(l(),{id:"2054451296",dynamic:[D]},["button.__jsx-style-dynamic-selector{background-color:".concat(D,";}")]))};g.displayName="Button",g.propTypes={primary:u().bool,backgroundColor:u().string,size:u().oneOf(["small","medium","large"]),label:u().string.isRequired,onClick:u().func},g.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0}},"./src/stories/Header.jsx":(y,e,t)=>{t.r(e),t.d(e,{Header:()=>j});var n=t("./node_modules/next/dist/compiled/react/index.js"),r=t("./node_modules/prop-types/index.js"),o=t.n(r),l=t("./src/stories/Button.jsx"),d=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=t.n(d),u=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=t.n(u),h=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),S=t.n(h),x=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=t.n(x),P=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=t.n(P),B=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=t.n(B),c=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css"),a={};a.styleTagTransform=O(),a.setAttributes=T(),a.insert=S().bind(null,"head"),a.domAPI=A(),a.insertStyleElement=b();var C=i()(c.default,a);const f=c.default&&c.default.locals?c.default.locals:void 0;var s=n.createElement,j=function(v){var p=v.user,g=v.onLogin,L=v.onLogout,m=v.onCreateAccount;return s("header",null,s("div",{className:"storybook-header"},s("div",null,s("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},s("g",{fill:"none",fillRule:"evenodd"},s("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),s("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),s("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),s("h1",null,"Acme")),s("div",null,p?s(n.Fragment,null,s("span",{className:"welcome"},"Welcome, ",s("b",null,p.name),"!"),s(l.Button,{size:"small",onClick:L,label:"Log out"})):s(n.Fragment,null,s(l.Button,{size:"small",onClick:g,label:"Log in"}),s(l.Button,{primary:!0,size:"small",onClick:m,label:"Sign up"})))))};j.displayName="Header",j.propTypes={user:o().shape({name:o().string.isRequired}),onLogin:o().func.isRequired,onLogout:o().func.isRequired,onCreateAccount:o().func.isRequired},j.defaultProps={user:null}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css":(y,e,t)=>{t.r(e),t.d(e,{default:()=>i});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),o=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(o),d=l()(r());d.push([y.id,`.storybook-button {
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
`,""]);const i=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css":(y,e,t)=>{t.r(e),t.d(e,{default:()=>i});var n=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(n),o=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(o),d=l()(r());d.push([y.id,`.storybook-header {
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
`,""]);const i=d}}]);
