import{u as e,a as t,_ as l,b as s}from"./playlistCard.78fd4e23.js";import{g as a,ai as o,o as n,c as i,w as u,a as r,j as c,k as m,F as p,f,aj as b,s as d,v,af as _}from"./index-42e6d0b3.js";import{_ as h}from"./uni-section.609c8fa8.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const k=y({__name:"comment",props:["visible","type","id"],emits:["update:visible"],setup(y,{emit:k}){const g=y;e();const w=a(null),j=a([]),C=a([]);o((async()=>{var e,t;if(g.visible){null==(e=w.value)||e.open(),console.log("获取评论");const t=await b(g.type,g.id);console.log(t),C.value=t.comments,j.value=t.hotComments}else null==(t=w.value)||t.close()}));const x=e=>{e.show||k("update:visible",!1)};return(e,a)=>{const o=d(v("uni-list-item"),t),b=d(v("uni-list"),l),y=d(v("uni-section"),h),k=_,g=d(v("uni-popup"),s);return n(),i(g,{ref_key:"popup",ref:w,type:"bottom","background-color":"#fff",onChange:x},{default:u((()=>[r(k,{"scroll-y":"",class:"list"},{default:u((()=>[j.value.length>0?(n(),i(y,{key:0,title:"热门评论",type:"line"},{default:u((()=>[r(b,null,{default:u((()=>[(n(!0),c(p,null,m(j.value,((e,t)=>(n(),i(o,{key:e.commentId,title:e.user.nickname,note:e.content,showArrow:"",thumb:e.user.avatarUrl,"thumb-size":"base",clickable:""},null,8,["title","note","thumb"])))),128))])),_:1})])),_:1})):f("",!0),r(y,{title:"最新评论",type:"line"},{default:u((()=>[r(b,null,{default:u((()=>[(n(!0),c(p,null,m(C.value,((e,t)=>(n(),i(o,{key:e.commentId,title:e.user.nickname,note:e.content,showArrow:"",thumb:e.user.avatarUrl,"thumb-size":"base",clickable:""},null,8,["title","note","thumb"])))),128))])),_:1})])),_:1})])),_:1})])),_:1},512)}}},[["__scopeId","data-v-097d1cb8"]]);export{k as C};
