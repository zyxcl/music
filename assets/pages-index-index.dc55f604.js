import{r as e,o as s,c as t,w as a,a as i,n as l,b as r,d as n,e as o,f as c,i as u,u as d,g as p,h as m,j as h,k as _,l as f,m as w,p as y,q as g,s as v,F as k,t as b,v as E,x as j,S as A,y as I,z as D,A as T}from"./index-bf4b3835.js";import{_ as S,a as C}from"./playerBar.ef90d490.js";import{_ as U}from"./uni-icons.75c1414b.js";import{_ as x}from"./uni-search-bar.c62286c6.js";import{_ as L,u as B}from"./music.57f72305.js";import{_ as F}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as M}from"./uni-section.8fd4648c.js";import"./mIcon.f6d9ce0f.js";import"./playlistCard.f7efc20e.js";const O=F({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const e={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(s=>{if(this.disable)return;const t=Object.keys(e).find((t=>{const a=s.key,i=e[t];return i===a||Array.isArray(i)&&i.includes(a)}));t&&setTimeout((()=>{this.$emit(t,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(e){("mask"!==e||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(e,s,t){this[e]=t,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[s]=t,this.$emit("change",t)}),t?50:300)}}},[["render",function(d,p,m,h,_,f){const w=u,y=e("keypress");return _.visibleSync?(s(),t(w,{key:0,class:l([{"uni-drawer--visible":_.showDrawer},"uni-drawer"]),onTouchmove:o(f.clear,["stop","prevent"])},{default:a((()=>[i(w,{class:l(["uni-drawer__mask",{"uni-drawer__mask--visible":_.showDrawer&&m.mask}]),onClick:p[0]||(p[0]=e=>f.close("mask"))},null,8,["class"]),i(w,{class:l(["uni-drawer__content",{"uni-drawer--right":_.rightMode,"uni-drawer--left":!_.rightMode,"uni-drawer__content--visible":_.showDrawer}]),style:r({width:_.drawerWidth+"px"})},{default:a((()=>[n(d.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),i(y,{onEsc:p[1]||(p[1]=e=>f.close("mask"))})])),_:3},8,["class","onTouchmove"])):c("",!0)}],["__scopeId","data-v-99368944"]]),R=F({__name:"userDeawer",props:["visible"],emits:["update:visible"],setup(e,{emit:l}){const r=e,n=d(),o=p(null);m((()=>{var e,s;r.visible?null==(e=o.value)||e.open():null==(s=o.value)||s.close()}));const c=e=>{e||l("update:visible",!1)};return(e,l)=>{const r=h(_("uni-list-chat"),S),d=h(_("uni-list"),L),p=u,m=y,v=g,k=h(_("uni-drawer"),O);return s(),t(k,{ref_key:"userDrawer",ref:o,mode:"left",width:320,onChange:c},{default:a((()=>[f(n).profile?(s(),t(p,{key:0},{default:a((()=>[i(d,{border:!0},{default:a((()=>[i(r,{"avatar-circle":!0,title:f(n).profile.nickname,avatar:f(n).profile.avatarUrl},null,8,["title","avatar"])])),_:1})])),_:1})):(s(),t(v,{key:1,url:"/pages/login/login"},{default:a((()=>[i(m,{type:"primary",size:"mini"},{default:a((()=>[w("去登录")])),_:1})])),_:1}))])),_:1},512)}}},[["__scopeId","data-v-d372bea2"]]),G=F({__name:"Header",setup(e){const t=p(!1),l=()=>{b({url:"/pages/search/search"})};return(e,r)=>{const n=h(_("uni-icons"),U),o=h(_("uni-search-bar"),x),c=u,d=h(_("userDeawer"),R);return s(),v(k,null,[i(c,{class:"header"},{default:a((()=>[i(n,{class:"bars",color:"#5e6d82",type:"bars",size:"30",onClick:r[0]||(r[0]=e=>t.value=!0)}),i(c,{class:"search",onClick:l},{default:a((()=>[i(o,{placeholder:"搜索",bgColor:"#EEEEEE",readonly:""})])),_:1})])),_:1}),i(d,{visible:t.value,"onUpdate:visible":r[1]||(r[1]=e=>t.value=e)},null,8,["visible"])],64)}}},[["__scopeId","data-v-123e4ebd"]]),H=F({__name:"Banner",props:["banners"],setup:e=>(l,r)=>{const n=j,o=A,c=I,d=u;return s(),t(d,{class:"swiper-wrap"},{default:a((()=>[i(c,{class:"swiper","indicator-dots":"","indicator-color":"rgba(255, 255, 255, .4)","indicator-active-color":"#ffffff",autoplay:"",circular:""},{default:a((()=>[(s(!0),v(k,null,E(e.banners,(e=>(s(),t(o,{key:e.targetId},{default:a((()=>[i(n,{src:e.pic,mode:"widthFix"},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1})}},[["__scopeId","data-v-9439e4da"]]),N=F({__name:"Ball",setup(e){const l=[{id:-1,name:"每日推荐",iconUrl:"http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",url:"/pages/recommend/recommend"},{id:-6,name:"私人FM",iconUrl:"http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",url:"/pages/personalfm/personalfm"},{id:-2,name:"歌单",iconUrl:"http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",url:""},{id:-3,name:"排行榜",iconUrl:"http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg",url:"/pages/toplist/toplist"},{id:1025001,name:"有声书",iconUrl:"http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg",url:""},{id:13e3,name:"数字专辑",iconUrl:"http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg",url:""},{id:11e3,name:"直播",iconUrl:"http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg",url:""},{id:1025e3,name:"关注新歌",iconUrl:"http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg",url:""},{id:1027e3,name:"收藏家",iconUrl:"http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg",url:""}];return(e,r)=>{const n=j,o=u,c=A,d=I;return s(),t(d,{class:"icon-swiper","display-multiple-items":"5"},{default:a((()=>[(s(),v(k,null,E(l,(e=>i(c,{key:e.id},{default:a((()=>[i(n,{src:e.iconUrl,mode:"widthFix",onClick:s=>{var t;(t=e.url)&&b({url:t})}},null,8,["src","onClick"]),i(o,{class:"icon-name"},{default:a((()=>[w(D(e.name),1)])),_:2},1024)])),_:2},1024))),64))])),_:1})}}},[["__scopeId","data-v-d232f0d5"]]),W=F({__name:"Playlist",props:["list","title"],setup:e=>(l,r)=>{const n=j,o=u,c=h(_("uni-section"),M);return s(),t(c,{type:"line",title:e.title},{default:a((()=>[i(o,{class:"playlist"},{default:a((()=>[(s(!0),v(k,null,E(e.list,(e=>(s(),t(o,{class:"playlist-item",key:e.creativeId,onClick:s=>{return t=e.creativeId,void b({url:`/pages/songlist/songlist?id=${t}`});var t}},{default:a((()=>{var s;return[i(n,{src:null==(s=e.uiElement.image)?void 0:s.imageUrl,mode:"widthFix"},null,8,["src"]),i(o,{class:"playlist-item-name"},{default:a((()=>[w(D(e.uiElement.mainTitle.title),1)])),_:2},1024)]})),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["title"])}},[["__scopeId","data-v-c6bed9e2"]]),z=F({__name:"Songs",props:["list","title","ids"],setup(e){const l=e,r=B();return(n,o)=>{const c=j,d=u,p=A,m=I,f=h(_("uni-section"),M);return s(),t(f,{type:"line",title:e.title},{default:a((()=>[i(m,{class:"song-swiper"},{default:a((()=>[(s(!0),v(k,null,E(e.list,((e,n)=>(s(),t(p,{key:n},{default:a((()=>[(s(!0),v(k,null,E(e.resources,(e=>(s(),t(d,{class:"song",key:e.resourceId,onClick:s=>(async e=>{const s=l.ids.indexOf(e);await r.playAllSongs(l.ids),r.currentIndex=s,b({url:"/pages/player/player"})})(e.resourceId)},{default:a((()=>[i(c,{src:e.uiElement.image.imageUrl,mode:"widthFix"},null,8,["src"]),i(d,{class:"song-info"},{default:a((()=>[w(D(e.uiElement.mainTitle.title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)))),128))])),_:1})])),_:1},8,["title"])}}},[["__scopeId","data-v-99980e67"]]),P={__name:"index",setup(e){d();const l=p([]);return T().then((e=>{console.log(e.data.blocks),l.value=e.data.blocks})),(e,r)=>{const n=u,o=h(_("playerBar"),C);return s(),t(o,null,{default:a((()=>[i(f(G)),(s(!0),v(k,null,E(l.value,((e,i)=>(s(),t(n,{class:"block"},{default:a((()=>["BANNER"===e.showType?(s(),t(f(H),{key:0,banners:e.extInfo.banners},null,8,["banners"])):"DRAGON_BALL"===e.showType?(s(),t(f(N),{key:1})):"HOMEPAGE_SLIDE_PLAYLIST"===e.showType?(s(),t(f(W),{key:2,title:e.uiElement.subTitle.title,list:e.creatives},null,8,["title","list"])):"HOMEPAGE_SLIDE_SONGLIST_ALIGN"===e.showType?(s(),t(f(z),{key:3,title:e.uiElement.subTitle.title,list:e.creatives,ids:e.resourceIdList},null,8,["title","list","ids"])):c("",!0)])),_:2},1024)))),256))])),_:1})}}};export{P as default};
