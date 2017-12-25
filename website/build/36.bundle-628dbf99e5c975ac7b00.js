webpackJsonp([36],{266:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=o(i),c=n(7),d=function(e){function t(){var n,o,a;l(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=o=r(this,e.call.apply(e,[this].concat(u))),o.previousLocation=o.props.location,a=n,r(o,a)}return a(t,e),t.prototype.componentWillUpdate=function(e){var t=this.props.location;"POP"===e.history.action||t.state&&t.state.modal||(this.previousLocation=this.props.location)},t.prototype.render=function(){var e=this.props.location,t=!(!e.state||!e.state.modal||this.previousLocation===e);return u.default.createElement("div",null,u.default.createElement(c.Switch,{location:t?this.previousLocation:e},u.default.createElement(c.Route,{exact:!0,path:"/",component:p}),u.default.createElement(c.Route,{path:"/gallery",component:h}),u.default.createElement(c.Route,{path:"/img/:id",component:E})),t?u.default.createElement(c.Route,{path:"/img/:id",component:v}):null)},t}(u.default.Component),f=[{id:0,title:"Dark Orchid",color:"DarkOrchid"},{id:1,title:"Lime Green",color:"LimeGreen"},{id:2,title:"Tomato",color:"Tomato"},{id:3,title:"Seven Ate Nine",color:"#789"},{id:4,title:"Crimson",color:"Crimson"}],m=function(e){var t=e.color;return u.default.createElement("div",{style:{width:50,height:50,background:t}})},s=function(e){var t=e.color;return u.default.createElement("div",{style:{width:"100%",height:400,background:t}})},p=function(){return u.default.createElement("div",null,u.default.createElement(c.Link,{to:"/gallery"},"Visit the Gallery"),u.default.createElement("h2",null,"Featured Images"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/img/2"},"Tomato")),u.default.createElement("li",null,u.default.createElement(c.Link,{to:"/img/4"},"Crimson"))))},h=function(){return u.default.createElement("div",null,f.map(function(e){return u.default.createElement(c.Link,{key:e.id,to:{pathname:"/img/"+e.id,state:{modal:!0}}},u.default.createElement(m,{color:e.color}),u.default.createElement("p",null,e.title))}))},E=function(e){var t=e.match,n=f[parseInt(t.params.id,10)];return n?u.default.createElement("div",null,u.default.createElement("h1",null,n.title),u.default.createElement(s,{color:n.color})):u.default.createElement("div",null,"Image not found")},v=function(e){var t=e.match,n=e.history,o=f[parseInt(t.params.id,10)];if(!o)return null;var l=function(e){e.stopPropagation(),n.goBack()};return u.default.createElement("div",{onClick:l,style:{position:"absolute",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.15)"}},u.default.createElement("div",{className:"modal",style:{position:"absolute",background:"#fff",top:25,left:"10%",right:"10%",padding:15,border:"2px solid #444"}},u.default.createElement("h1",null,o.title),u.default.createElement(s,{color:o.color}),u.default.createElement("button",{type:"button",onClick:l},"Close")))},y=function(){return u.default.createElement(c.BrowserRouter,null,u.default.createElement(c.Route,{component:d}))};t.default=y}});