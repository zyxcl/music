import{g as a,N as l,o as e,c as s,w as t,O as r,j as o,a as i,P as n,b as c,m as u,z as d,s as f,v as m,F as p,t as v,i as _,x as y,k as b,Q as g,l as k}from"./index-b8f274da.js";import{_ as h}from"./uni-icons.4a6317bd.js";import{_ as j}from"./mIcon.3cfcb4b7.js";import{u as C,a as x,_ as I}from"./music.e91e1b1f.js";import{_ as w}from"./comment.40fd2ef2.js";import{a as z}from"./playerBar.2dd627a5.js";import{_ as U}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-section.e33daa21.js";import"./playlistCard.c9156f3b.js";const F=U({__name:"songlist",setup(U){const F=C(),S=a({}),A=a(!1),B=a("");l((a=>{B.value=a.id,(async a=>{const l=await r(a);S.value=l.playlist})(a.id)}));const D=()=>{const a=S.value.trackIds.map((a=>a.id));F.playAllSongs(a),v({url:"/pages/player/player"})};return(a,l)=>{const r=_,C=y,U=o(b("uni-icons"),h),N=o(b("mIcon"),j),O=o(b("uni-list-item"),x),P=o(b("uni-list"),I),Q=o(b("comment"),w),$=o(b("playerBar"),z);return e(),s($,null,{default:t((()=>[i(r,{class:"header"},{default:t((()=>[n("div",{class:"bg",style:c({backgroundImage:`url(${S.value.coverImgUrl})`})},[i(r,{class:"after"})],4),i(r,{class:"header-content"},{default:t((()=>[i(r,{class:"info"},{default:t((()=>[i(C,{src:S.value.coverImgUrl,mode:"widthFix"},null,8,["src"]),i(r,{class:"header-right"},{default:t((()=>[i(r,{class:"title"},{default:t((()=>[u(d(S.value.name),1)])),_:1}),i(r,{class:"creator"},{default:t((()=>{var a;return[i(C,{src:null==(a=S.value.creator)?void 0:a.avatarUrl,mode:"widthFix"},null,8,["src"]),i(r,{class:"nickname"},{default:t((()=>{var a;return[u(d(null==(a=S.value.creator)?void 0:a.nickname),1)]})),_:1})]})),_:1})])),_:1})])),_:1}),i(r,{class:"desc"},{default:t((()=>[u(d(S.value.description),1)])),_:1}),i(r,{class:"btns"},{default:t((()=>[i(r,{class:"btn"},{default:t((()=>[i(U,{type:"redo-filled",size:"20",color:"#ffffff"}),u(" "+d(S.value.shareCount||"分享"),1)])),_:1}),i(r,{class:"btn",onClick:l[0]||(l[0]=a=>A.value=!0)},{default:t((()=>[i(U,{type:"chat-filled",size:"20",color:"#ffffff"}),u(" "+d(S.value.commentCount||"评论"),1)])),_:1}),i(r,{class:"btn"},{default:t((()=>[i(U,{type:"folder-add-filled",size:"20",color:"#ffffff"}),u(" "+d(S.value.subscribedCount||"收藏"),1)])),_:1})])),_:1})])),_:1})])),_:1}),i(r,{class:"song-list"},{default:t((()=>[i(P,{border:!0},{default:t((()=>[i(O,{clickable:"",onClick:D},{header:t((()=>[i(N,{type:"bofang2",color:"#c84341",size:26})])),body:t((()=>[i(r,{class:"play-all"},{default:t((()=>[u("播放全部("+d(S.value.trackCount)+")",1)])),_:1})])),_:1}),(e(!0),f(p,null,m(S.value.tracks,((a,l)=>{return e(),s(O,{key:a.id,title:a.name,note:(o=a.ar,o.map((a=>a.name)).join("/")),ellipsis:"1",showArrow:"",clickable:"",onClick:l=>(a=>{F.addSong(a),v({url:"/pages/player/player"})})(a)},g({header:t((()=>[i(r,{class:"no"},{default:t((()=>[u(d(l+1),1)])),_:2},1024)])),_:2},[k(F).curSongDetail.id===a.id?{name:"footer",fn:t((()=>[i(r,{class:"right-text"},{default:t((()=>[u("正在播放")])),_:1})])),key:"0"}:void 0]),1032,["title","note","onClick"]);var o})),128))])),_:1})])),_:1}),i(Q,{visible:A.value,"onUpdate:visible":l[1]||(l[1]=a=>A.value=a),type:"playlist",id:B.value},null,8,["visible","id"])])),_:1})}}},[["__scopeId","data-v-35fedb69"]]);export{F as default};