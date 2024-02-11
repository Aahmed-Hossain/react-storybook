"use strict";(self.webpackChunkreact_storybook=self.webpackChunkreact_storybook||[]).push([[416],{"./src/stories/Button.stories.js":(b,s,t)=>{t.r(s),t.d(s,{Large:()=>l,Primary:()=>d,Secondary:()=>e,Small:()=>u,__namedExportsOrder:()=>o,default:()=>a});var r=t("./src/stories/Button.jsx");const a={title:"Example/Button",component:r.Button,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};var d={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},l={args:{size:"large",label:"Button"}},u={args:{size:"small",label:"Button"}};const o=["Primary","Secondary","Large","Small"]},"./src/stories/Button.jsx":(b,s,t)=>{t.r(s),t.d(s,{Button:()=>y});var r=t("./node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=t("./node_modules/styled-jsx/style.js"),e=t.n(d),l=t("./node_modules/next/dist/compiled/react/index.js"),u=t("./node_modules/prop-types/index.js"),o=t.n(u),p=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=t.n(p),f=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),E=t.n(f),S=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),x=t.n(S),P=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=t.n(P),T=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=t.n(T),C=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=t.n(C),m=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css"),n={};n.styleTagTransform=h(),n.setAttributes=B(),n.insert=x().bind(null,"head"),n.domAPI=E(),n.insertStyleElement=A();var L=g()(m.default,n);const z=m.default&&m.default.locals?m.default.locals:void 0;var O=["primary","backgroundColor","size","label"],j=l.createElement,y=function(i){var D=i.primary,v=i.backgroundColor,M=i.size,I=i.label,c=(0,a.default)(i,O),W=D?"storybook-button--primary":"storybook-button--secondary";return j("button",(0,r.default)({type:"button"},c,{className:e().dynamic([["2054451296",[v]]])+" "+(c&&c.className!=null&&c.className||["storybook-button","storybook-button--".concat(M),W].join(" ")||"")}),I,j(e(),{id:"2054451296",dynamic:[v]},["button.__jsx-style-dynamic-selector{background-color:".concat(v,";}")]))};y.displayName="Button",y.propTypes={primary:o().bool,backgroundColor:o().string,size:o().oneOf(["small","medium","large"]),label:o().string.isRequired,onClick:o().func},y.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css":(b,s,t)=>{t.r(s),t.d(s,{default:()=>u});var r=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(r),d=t("./node_modules/css-loader/dist/runtime/api.js"),e=t.n(d),l=e()(a());l.push([b.id,`.storybook-button {
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
`,""]);const u=l}}]);
