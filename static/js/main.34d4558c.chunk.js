(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var c=i(1),a=i.n(c),n=i(9),s=i.n(n),r=(i(14),i(15),i(16),i.p+"static/media/mainportrait.2be15b17.png"),l=(i(17),i.p+"static/media/github.895050b2.svg"),o=i.p+"static/media/linkedin.64c918fa.svg",h=i.p+"static/media/twitter.d73e4478.svg",j=i(0);var b=function(){return Object(j.jsxs)("div",{className:"social-container",children:[Object(j.jsx)("a",{href:"https://github.com/dirklo",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:l,alt:"github link"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/rick-moore-5b587a99/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:o,alt:"linkedin link"})}),Object(j.jsx)("a",{href:"https://twitter.com/rickstachemoore",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:h,alt:"twitter link"})})]})},u=i(2),m=i(3),d=i(5),p=i(4),O=(i(19),function(t){Object(d.a)(i,t);var e=Object(p.a)(i);function i(){return Object(u.a)(this,i),e.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"intro-container",children:[Object(j.jsx)("p",{id:"top",children:"-Introduction-"}),Object(j.jsxs)("p",{id:"middle",children:["Full-Stack",Object(j.jsx)("br",{}),"Web Developer"]}),Object(j.jsx)("p",{id:"bottom",children:"Creative web product designer, with experience in React/Redux, Ruby on Rails, NodeJS/Express, Python, HTML5, CSS3"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"http://nowhere.com",children:"My Story >"})]})}}]),i}(c.Component)),g=(i(20),function(t){Object(d.a)(i,t);var e=Object(p.a)(i);function i(){return Object(u.a)(this,i),e.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsx)("a",{href:"#projects",children:"Projects"}),Object(j.jsx)("a",{href:"#resume",children:"Resume"}),Object(j.jsx)("a",{href:"#contact",children:"Contact"})]})}}]),i}(c.Component));function x(){return Object(j.jsxs)("div",{className:"title_container",children:[Object(j.jsx)("h1",{children:"Rick Moore"}),Object(j.jsx)("img",{src:r,id:"main-portrait",alt:"main portrait"}),Object(j.jsx)("div",{id:"rect1"}),Object(j.jsx)("div",{id:"diamond",className:"slow"}),Object(j.jsx)("div",{id:"diamond2",className:"slower"}),Object(j.jsx)(b,{}),Object(j.jsx)(O,{}),Object(j.jsx)(g,{})]})}i(21),i(22);var f=function(t){return Object(j.jsxs)("div",{className:"project-card",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("img",{src:t.titleImg.url,alt:t.title,height:t.titleImg.height})}),Object(j.jsx)("div",{className:"techs-list",children:t.techs.map((function(t){return Object(j.jsx)("img",{src:t.img,alt:t.name,height:t.height},t.name)}))}),Object(j.jsx)("div",{className:"links-list",children:t.links.map((function(t){return Object(j.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:t.type},t.type)}))})]})},v=i.p+"static/media/pantam.8de9c3f7.png",k=i.p+"static/media/chartsource.437f5ef5.png",y=i.p+"static/media/quizit.389882f4.png",N=i.p+"static/media/javascript.081325c6.svg",C=i.p+"static/media/rails.bec848e2.png",F=i.p+"static/media/ruby.724766cb.svg",S=[{title:"Pantam",titleImg:{url:v,height:"80px"},techs:[{name:"javascript",img:N,height:"85px"},{name:"rails",img:C,height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/hang-pan-frontend"},{type:"Demo",url:"https://youtu.be/36xpt6U-q0g"},{type:"Live App",url:"https://dirklo.github.io/hang-pan-frontend/"}]},{title:"Chart Source",titleImg:{url:k,height:"55.44px"},techs:[{name:"ruby",img:F,height:"75px"},{name:"rails",img:C,height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/chart-source"},{type:"Demo",url:"https://youtu.be/WjS2R5mJihA"},{type:"Live App",url:"https://chart-source.herokuapp.com/"}]},{title:"Quit It",titleImg:{url:y,height:"80px"},techs:[{name:"ruby",img:F,height:"75px"},{name:"sinatra",img:i.p+"static/media/sinatra.5c61ac4b.png",height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/quiz-it"},{type:"Demo",url:"https://youtu.be/_Yxp_dMFs2I"},{type:"Live App",url:"https://quiz-it-three.herokuapp.com/"}]}],w=function(t){Object(d.a)(i,t);var e=Object(p.a)(i);function i(){return Object(u.a)(this,i),e.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"projects-container",children:S.map((function(t){return Object(j.jsx)(f,{title:t.title,titleImg:t.titleImg,techs:t.techs,links:t.links},t.title)}))})}}]),i}(c.Component),I=(i(23),i(6)),A=i(8),R=(i(24),function(t){Object(d.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(u.a)(this,i),(t=e.call(this)).handleOnChange=function(e){t.setState(Object(A.a)(Object(A.a)({},t.state),{},Object(I.a)({},e.target.name,e.target.value)))},t.handleOnSubmit=function(e){e.preventDefault(),console.log(t.state)},t.activateField=function(e){t.setState(Object(I.a)({},"".concat(e.target.name,"Active"),!0))},t.disableField=function(e){t.setState(Object(I.a)({},"".concat(e.target.name,"Active"),!1))},t.disableFocus=function(e){""===e.target.value&&t.disableField(e)},t.state={contactName:"",email:"",message:"",contactNameActive:!1,emailActive:!1},t}return Object(m.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"contact-form",onSubmit:this.handleOnSubmit,children:[Object(j.jsxs)("div",{className:"input-div",children:[Object(j.jsx)("label",{className:this.state.contactNameActive?"active":"",htmlFor:"contactName",children:"Name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"contactName",id:"contactName",onChange:this.handleOnChange,onFocus:this.activateField,onBlur:this.disableFocus,value:this.state.contactName,placeholder:" "})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"input-div",children:[Object(j.jsx)("label",{className:this.state.emailActive?"active":"",htmlFor:"email",children:"Email"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handleOnChange,onFocus:this.activateField,onBlur:this.disableFocus,value:this.state.email,placeholder:" "})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"message",children:"Message"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{name:"message",id:"message",onChange:this.handleOnChange,value:this.state.message})]})}}]),i}(c.Component));function _(){return Object(j.jsx)("div",{className:"contact-container",children:Object(j.jsx)(R,{})})}var D=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsx)(w,{}),Object(j.jsx)(_,{})]})},L=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(e){var i=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,s=e.getTTFB;i(t),c(t),a(t),n(t),s(t)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),L()}],[[25,1,2]]]);
//# sourceMappingURL=main.34d4558c.chunk.js.map