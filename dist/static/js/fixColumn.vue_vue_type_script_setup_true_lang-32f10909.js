import{a as e}from"./data-8a1dd42f.js";import{d as m,a as n,o as u,c as _,w as a,h as i,f as r,u as t}from"./index-0b3c812b.js";const C=m({__name:"fixColumn",props:{height:{default:null}},setup(p){const o=p,s=[{label:"日期",prop:"date",width:"260",fixed:!0},{label:"姓名",prop:"name",width:"260"},{label:"地区",prop:"state",width:"260"},{label:"城市",prop:"city",width:"260"},{label:"地址",prop:"address",width:"260"},{label:"邮编",prop:"post-code",width:"260"},{label:"操作",width:"120",fixed:"right",slot:"operation"}];function f(c){}return(c,b)=>{const l=n("el-button"),d=n("pure-table");return u(),_(d,{data:o.height?t(e).concat(t(e)).concat(t(e)):t(e),columns:s,height:o.height},{operation:a(({row:h})=>[i(l,{link:"",type:"primary",size:"small",onClick:w=>void 0},{default:a(()=>[r(" Detail ")]),_:2},1032,["onClick"]),i(l,{link:"",type:"primary",size:"small"},{default:a(()=>[r("Edit")]),_:1})]),_:1},8,["data","height"])}}});export{C as _};
