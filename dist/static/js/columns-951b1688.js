import{h as l,a,F as s,f as n,m as r}from"./index-0b3c812b.js";import{t as c}from"./data-8a1dd42f.js";function u(){const o=[{label:"日期",prop:"date",cellRenderer:({row:e})=>l("div",{style:"display: flex; align-items: center"},[l(a("iconify-icon-online"),{icon:"ep:timer"},null),l("span",{style:"margin-left: 10px"},[e.date])])},{label:"姓名",prop:"name",cellRenderer:({row:e})=>l(a("el-popover"),{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:()=>l(s,null,[l("div",null,[n("name: "),e.name]),l("div",null,[n("address: "),e.address])]),reference:()=>l(a("el-tag"),null,{default:()=>[e.name]})})},{label:"地址",prop:"address"},{label:"操作",cellRenderer:({index:e,row:t})=>l(s,null,[l(a("el-button"),{size:"small",onClick:()=>i(e+1,t)},{default:()=>[n("Edit")]}),l(a("el-button"),{size:"small",type:"danger",onClick:()=>d(e+1,t)},{default:()=>[n("Delete")]})])}],i=(e,t)=>{r(`您编辑了第 ${e} 行，数据为：${JSON.stringify(t)}`,{type:"success"})},d=(e,t)=>{r(`您删除了第 ${e} 行，数据为：${JSON.stringify(t)}`)};return{columns:o,tableData:c}}export{u as useColumns};
