import{d as r,M as f,aJ as u,aK as s,aL as a}from"./index-0b3c812b.js";function I(e,t){const o=/^IF-/;if(o.test(e)){const n=e.split(o)[1],c=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),i=n.slice(n.indexOf(" ")+1,n.length);return r({name:"FontIcon",render(){return f(u,{icon:c,iconType:i,...t})}})}else return typeof e=="function"||typeof(e==null?void 0:e.render)=="function"?e:typeof e=="object"?r({name:"OfflineIcon",render(){return f(s,{icon:e,...t})}}):r({name:"Icon",render(){const n=e&&e.includes(":")?a:s;return f(n,{icon:e,...t})}})}export{I as u};
