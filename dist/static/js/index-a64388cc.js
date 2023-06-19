import{d as g,a as i,c as m,w as t,o as v,h as n,u as s,m as o,f as r,M as a,a6 as k,a7 as y,e as d}from"./index-0b3c812b.js";import{u as $}from"./hooks-f0936f85.js";import{d as c}from"./check-3815600c.js";const M=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," Message提示 ")],-1),w=d("h4",{class:"mb-4"},"element-plus 的消息提示，点击弹出提示信息",-1),_=d("h4",{class:"mb-4"}," 类似 Ant Design 风格的消息提示，点击弹出提示信息（基于 ElMessage 样式改版，不会影响 ElMessage 原本样式，使用和打包大小成本极低并适配暗黑模式） ",-1),S=g({name:"Message",__name:"index",setup(T){return(b,e)=>{const l=i("el-button"),p=i("el-space"),C=i("el-divider"),f=i("el-card");return v(),m(f,{shadow:"never"},{header:t(()=>[M]),default:t(()=>[w,n(p,{wrap:""},{default:t(()=>[n(l,{type:"info",onClick:e[0]||(e[0]=u=>s(o)("Info类型消息",{customClass:"el"}))},{default:t(()=>[r(" Info ")]),_:1}),n(l,{type:"success",onClick:e[1]||(e[1]=u=>s(o)("Success类型消息",{customClass:"el",type:"success"}))},{default:t(()=>[r(" Success ")]),_:1}),n(l,{type:"warning",onClick:e[2]||(e[2]=u=>s(o)("Warning类型消息",{customClass:"el",type:"warning"}))},{default:t(()=>[r(" Warning ")]),_:1}),n(l,{type:"danger",onClick:e[3]||(e[3]=u=>s(o)("Error类型消息",{customClass:"el",type:"error"}))},{default:t(()=>[r(" Error ")]),_:1}),n(l,{onClick:e[4]||(e[4]=u=>s(o)("可关闭消息",{customClass:"el",showClose:!0}))},{default:t(()=>[r(" 可关闭 ")]),_:1}),n(l,{onClick:e[5]||(e[5]=u=>s(o)("分组消息合并",{customClass:"el",type:"success",grouping:!0}))},{default:t(()=>[r(" 分组消息合并 ")]),_:1}),n(l,{onClick:e[6]||(e[6]=u=>s(o)("自定义消息图标",{customClass:"el",icon:s($)(s(c))}))},{default:t(()=>[r(" 自定义图标 ")]),_:1}),n(l,{onClick:e[7]||(e[7]=u=>s(o)("3秒后关闭",{customClass:"el",duration:3e3,onClose:()=>s(o)("消息已关闭",{customClass:"el",type:"success"})}))},{default:t(()=>[r(" 自定义延时关闭时间并设置关闭后其他操作 ")]),_:1}),n(l,{onClick:e[8]||(e[8]=u=>s(o)(a("p",null,[a("span",null,"Message can be "),a("i",{style:"color: teal"},"VNode")]),{customClass:"el"}))},{default:t(()=>[r(" 自定义内容 ")]),_:1}),n(l,{onClick:e[9]||(e[9]=u=>s(o)("<strong>This is <i>HTML</i> string</strong>",{customClass:"el",dangerouslyUseHTMLString:!0}))},{default:t(()=>[r(" HTML 片段作为正文内容 ")]),_:1})]),_:1}),n(C),_,n(p,{wrap:""},{default:t(()=>[n(l,{type:"info",onClick:e[10]||(e[10]=u=>s(o)("Info类型消息"))},{default:t(()=>[r("Info")]),_:1}),n(l,{type:"success",onClick:e[11]||(e[11]=u=>s(o)("Success类型消息",{type:"success"}))},{default:t(()=>[r(" Success ")]),_:1}),n(l,{type:"warning",onClick:e[12]||(e[12]=u=>s(o)("Warning类型消息",{type:"warning"}))},{default:t(()=>[r(" Warning ")]),_:1}),n(l,{type:"danger",onClick:e[13]||(e[13]=u=>s(o)("Error类型消息",{type:"error"}))},{default:t(()=>[r(" Error ")]),_:1}),n(l,{onClick:e[14]||(e[14]=u=>s(o)("可关闭消息",{showClose:!0}))},{default:t(()=>[r(" 可关闭 ")]),_:1}),n(l,{onClick:e[15]||(e[15]=u=>s(o)("分组消息合并",{type:"success",grouping:!0}))},{default:t(()=>[r(" 分组消息合并 ")]),_:1}),n(l,{onClick:e[16]||(e[16]=u=>s(o)("自定义消息图标",{icon:s(k)}))},{default:t(()=>[r(" 自定义图标 ")]),_:1}),n(l,{onClick:e[17]||(e[17]=u=>s(o)("3秒后关闭",{duration:3e3,onClose:()=>s(o)("消息已关闭",{type:"success"})}))},{default:t(()=>[r(" 自定义延时关闭时间并设置关闭后其他操作 ")]),_:1}),n(l,{onClick:e[18]||(e[18]=u=>s(o)(a("p",null,[a("span",null,"Message can be "),a("i",{style:"color: teal"},"VNode")])))},{default:t(()=>[r(" 自定义内容 ")]),_:1}),n(l,{onClick:e[19]||(e[19]=u=>s(o)("<strong>This is <i>HTML</i> string</strong>",{dangerouslyUseHTMLString:!0}))},{default:t(()=>[r(" HTML 片段作为正文内容 ")]),_:1})]),_:1}),n(C),n(l,{onClick:s(y)},{default:t(()=>[r(" 关闭所有消息提示 ")]),_:1},8,["onClick"])]),_:1})}}});export{S as default};
