import{u as l,g as a,h as s,o as e,c as t,w as r,j as o,l as u,a as i,m as n,v as d,z as c,b as f,F as p,x as v,_ as m,p as _,q as g,i as k,A as b,C as y,k as j,y as h}from"./index-d70e6ac5.js";import{a as C,_ as w}from"./music.4a25ada5.js";import{a as x}from"./playerBar.b4a2b48d.js";import{_ as I}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-icons.d6a86738.js";import"./mIcon.d624976b.js";import"./playlistCard.0527c21a.js";import"./uni-section.8c79d9a4.js";const $=I({__name:"mine",setup(I){const $=l(),U=a([]);s((async()=>{var l;if(null==(l=$.account)?void 0:l.id){const l=await m($.account.id);U.value=l.playlist}}));return(l,a)=>{const s=_,m=g,I=k,z=b,B=y,F=o(j("uni-list-item"),C),q=o(j("uni-list"),w),A=o(j("playerBar"),x);return e(),t(A,null,{default:r((()=>{var l;return[u($).profile?(e(),d(p,{key:1},[i(I,{class:"header",style:f({backgroundImage:`url(${null==(l=u($).profile)?void 0:l.backgroundUrl})`})},{default:r((()=>{var l;return[i(z,{class:"avatar",src:null==(l=u($).profile)?void 0:l.avatarUrl,mode:"aspectFill"},null,8,["src"]),i(I,{class:"nickname"},{default:r((()=>{var l;return[n(c(null==(l=u($).profile)?void 0:l.nickname),1)]})),_:1}),i(I,{class:"desc"},{default:r((()=>[i(I,{class:"desc-tag"},{default:r((()=>[i(B,{class:"bold"},{default:r((()=>{var l;return[n(c(null==(l=u($).profile)?void 0:l.followeds),1)]})),_:1}),n("关注 ")])),_:1}),i(I,{class:"desc-tag"},{default:r((()=>[i(B,{class:"bold"},{default:r((()=>{var l;return[n(c(null==(l=u($).profile)?void 0:l.follows),1)]})),_:1}),n("粉丝 ")])),_:1}),i(I,{class:"desc-tag"},{default:r((()=>[i(B,{class:"bold"},{default:r((()=>{var l;return[n("Lv."+c(null==(l=u($).profile)?void 0:l.level),1)]})),_:1}),n("等级 ")])),_:1}),i(I,{class:"desc-tag"},{default:r((()=>[i(B,{class:"bold"},{default:r((()=>{var l;return[n(c(null==(l=u($).profile)?void 0:l.listenSongs)+"首",1)]})),_:1}),n("听歌 ")])),_:1})])),_:1})]})),_:1},8,["style"]),i(q,null,{default:r((()=>[(e(!0),d(p,null,v(U.value,(l=>(e(),t(F,{key:l.id,title:l.name,note:`${l.trackCount}首·${l.playCount}次播放`,thumb:l.coverImgUrl,"thumb-size":"lg",clickable:"",onClick:a=>{return s=l.id,void h({url:`/pages/songlist/songlist?id=${s}`});var s}},null,8,["title","note","thumb","onClick"])))),128))])),_:1})],64)):(e(),t(I,{key:0},{default:r((()=>[i(m,{url:"/pages/login/login"},{default:r((()=>[i(s,null,{default:r((()=>[n("去登录")])),_:1})])),_:1})])),_:1}))]})),_:1})}}},[["__scopeId","data-v-4126cffb"]]);export{$ as default};
