(this["webpackJsonpcreate-react-app-webpack-bundle"]=this["webpackJsonpcreate-react-app-webpack-bundle"]||[]).push([[0],{20:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var a,r,i,c,o,s,l,d,u,h,b=e(0),p=e.n(b),f=e(11),g=e.n(f),m=e(5),x=e(13),j=e(6),O=e(7),v=e(9),C=e(8),y=(e(20),e(2)),w=e(3),k=w.a.div(a||(a=Object(y.a)(["\n  width: 1400px;\n  min-height: 100vh;\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  margin-left: auto;\n  margin-right: auto;\n\n  background-color: grey;\n"]))),S=w.a.h1(r||(r=Object(y.a)(["\n  font-size: 36px;\n  font-weight: 700;\n\n  margin: 0px;\n  margin-bottom: 10px;\n  padding: 0px;\n"]))),z=(w.a.h2(i||(i=Object(y.a)(["\n  font-size: 30px;\n  font-weight: 600px;\n\n  margin: 0px;\n  margin-bottom: 10px;\n  padding: 0px;\n"]))),e(4)),L=e(27),A=w.a.form(c||(c=Object(y.a)(["\n  text-align: center;\n\n  padding: 20px;\n\n  border-bottom: 5px solid black;\n"]))),J=w.a.label(o||(o=Object(y.a)(["\n  font-size: 30px;\n  font-weight: 600;\n\n  display: flex;\n  justify-content: ",";\n  align-items: ",";\n\n  flex-direction: ",";\n\n  transition-duration: 500ms;\n\n  cursor: pointer;\n\n  margin-bottom: 10px;\n\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"])),(function(n){return n.filter?"center":"space-between"}),(function(n){return n.filter?"center":"baseline"}),(function(n){return n.filter?"column":"row"})),I=w.a.input(s||(s=Object(y.a)(["\n  height: 30px;\n  width: 300px;\n\n  font-size: 20px;\n  font-weight: 500;\n\n  outline: none;\n\n  border: none;\n  border-radius: 10px;\n\n  transition-duration: 500ms;\n\n  padding-left: 10px;\n  margin-left: 20px;\n\n  &:hover,\n  &:focus {\n    color: orange;\n    border: 2px solid orange;\n  }\n"]))),D=w.a.button(l||(l=Object(y.a)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  width: 150px;\n  height: 30px;\n\n  border-radius: 10px;\n\n  transition-duration: 500ms;\n\n  &:hover,\n  &:focus {\n    background-color: orange;\n  }\n"]))),M=e(1),Z=function(n){Object(v.a)(e,n);var t=Object(C.a)(e);function e(n){var a;return Object(j.a)(this,e),(a=t.call(this,n)).state={name:"",number:""},a.handleChange=a.handleChange.bind(Object(z.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(z.a)(a)),a}return Object(O.a)(e,[{key:"handleChange",value:function(n){var t=n.target.name;this.setState(Object(m.a)({},t,n.target.value))}},{key:"handleSubmit",value:function(n){var t=this,e=this.state,a=e.name,r=e.number,i={id:Object(L.a)(),name:a,number:r},c=this.props.contacts.some((function(n){return n.name===t.state.name})),o=this.props.contacts.some((function(n){return n.number===t.state.number}));return n.preventDefault(),c?alert(this.state.name+" \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d(\u0430) \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"):o?alert("\u0423\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c: "+this.state.number):""===this.state.name||""===this.state.number?alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f \u0438 \u043d\u043e\u043c\u0435\u0440."):(this.props.addContact(i),void this.clear())}},{key:"clear",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(M.jsxs)(A,{children:[Object(M.jsxs)(J,{children:["\u0418\u043c\u044f:",Object(M.jsx)(I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:this.handleChange,value:t})]}),Object(M.jsxs)(J,{children:["\u041d\u043e\u043c\u0435\u0440:",Object(M.jsx)(I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",onChange:this.handleChange,value:e})]}),Object(M.jsx)(D,{type:"submit",onClick:this.handleSubmit,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})}}]),e}(b.Component),q=e(14),B=w.a.ul(d||(d=Object(y.a)(["\n  list-style: none;\n\n  width: 1000px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  margin: 0px;\n  margin-top: 20px;\n  padding: 0px;\n"]))),N=w.a.li(u||(u=Object(y.a)(["\n  font-size: 26px;\n  font-weight: 600;\n\n  width: 400px;\n  height: 50px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  border: 1px solid black;\n\n  background-color: #4b4b4b;\n\n  margin-right: 10px;\n  margin-bottom: 10px;\n  padding: 5px;\n"]))),E=w.a.button(h||(h=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid black;\n  border-radius: 50%;\n\n  padding: 5px;\n\n  background-color: #4b4b4b;\n\n  cursor: pointer;\n\n  transition-duration: 500ms;\n\n  &:hover,\n  &:focus {\n    border: 1px solid orange;\n    transform: rotate(360deg) scale(1.15);\n\n    svg {\n      fill: orange;\n    }\n  }\n\n  svg {\n    width: 30px;\n    height: 30px;\n\n    transition-duration: 500ms;\n  }\n"])));function T(n){var t=n.contacts,e=n.deleteContact;return Object(M.jsx)(B,{children:t().map((function(n){return Object(M.jsxs)(N,{children:[n.name,": ",n.number,Object(M.jsx)(E,{id:n.id,onClick:e,children:Object(M.jsx)(q.a,{})})]},n.id)}))})}function U(n){var t=n.filter,e=n.onChange;return Object(M.jsxs)(J,{filter:"true",children:["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",Object(M.jsx)(I,{name:"filter",onChange:e,value:t})]})}var $=function(n){Object(v.a)(e,n);var t=Object(C.a)(e);function e(){var n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},n.getLocalContacts=function(t,e){var a=JSON.parse(localStorage.getItem("contacts"));n.setState({contacts:a})},n.updateLocalContacts=function(){localStorage.setItem("contacts",JSON.stringify(n.state.contacts))},n.addContact=function(t){n.setState((function(n){return{contacts:[].concat(Object(x.a)(n.contacts),[t])}}))},n.deleteContact=function(t){var e=n.state.contacts.findIndex((function(n){return n.id===t.currentTarget.id})),a=n.state.contacts;a.splice(e,1),n.setState({contacts:a}),n.updateLocalContacts()},n.handleChange=function(t){var e=t.target.name;n.setState(Object(m.a)({},e,t.target.value))},n.filter=function(){return n.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n.state.filter.toLowerCase())}))},n}return Object(O.a)(e,[{key:"componentDidMount",value:function(){this.getLocalContacts()}},{key:"componentDidUpdate",value:function(n,t){t.contacts.length!==this.state.contacts.length&&this.updateLocalContacts()}},{key:"render",value:function(){var n=this.state,t=n.filter,e=n.contacts,a=Object(M.jsx)("h2",{children:"\u041d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 `=("});return Object(M.jsxs)(k,{children:[Object(M.jsx)(S,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430:"}),Object(M.jsx)(Z,{addContact:this.addContact,contacts:e}),Object(M.jsx)(U,{filter:t,onChange:this.handleChange}),this.state.contacts.length<1?a:Object(M.jsx)(T,{contacts:this.filter,deleteContact:this.deleteContact})]})}}]),e}(b.Component);g.a.render(Object(M.jsx)(p.a.StrictMode,{children:Object(M.jsx)($,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e2eba9cf.chunk.js.map