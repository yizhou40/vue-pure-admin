import{useColumns as p}from"./columns-ea6d6251.js";import{d,r as u,a as f,o as C,c as m,u as e}from"./index-0b3c812b.js";const z=d({__name:"index",setup(_){const a=u(),{loading:o,columns:i,dataList:t,pagination:n,loadingConfig:r,adaptiveConfig:g,onSizeChange:l,onCurrentChange:s}=p();return(h,v)=>{const c=f("pure-table");return C(),m(c,{ref_key:"tableRef",ref:a,border:"",adaptive:"",adaptiveConfig:e(g),"row-key":"id",alignWhole:"center",showOverflowTooltip:"",loading:e(o),"loading-config":e(r),data:e(t).slice((e(n).currentPage-1)*e(n).pageSize,e(n).currentPage*e(n).pageSize),columns:e(i),pagination:e(n),onPageSizeChange:e(l),onPageCurrentChange:e(s)},null,8,["adaptiveConfig","loading","loading-config","data","columns","pagination","onPageSizeChange","onPageCurrentChange"])}}});export{z as _};
