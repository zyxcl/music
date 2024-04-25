import{g as l,R as a,T as s,o as e,s as r,a as c,w as o,l as i,F as n,i as t,j as f,b as u,P as d,c as A,v as p,m as g,z as v,U as m,V as S,x as b,k as w,W as y,n as k,X as T}from"./index-b8f274da.js";import{_ as D}from"./uni-icons.4a6317bd.js";import{_ as F}from"./comment.40fd2ef2.js";import{_ as h}from"./playlistCard.c9156f3b.js";import{u as R}from"./music.e91e1b1f.js";import{_ as J}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-section.e33daa21.js";const K=J({__name:"player",setup(J){const K=R(),H=l(!1),B=l(!1),G=l([]),P=l(!1),C=l(0);a((()=>K.currentTime),(()=>{G.value.forEach(((l,a)=>{K.currentTime>=l[0]&&K.currentTime<G.value[a+1][0]&&(C.value=a)}))}));a((()=>K.curSongDetail),(()=>{var l;K.curSongDetail.id&&((async()=>{const l=(await T(K.curSongDetail.id)).lrc.lyric.split(/\n/).map((l=>{let[a,s]=l.split("]"),[e,r]=a.slice(1).split(":");return a=60*e+1*r,[a,s]}));G.value=l})(),m({title:K.curSongDetail.name+" - "+(null==(l=K.curSongDetail.ar)?void 0:l.map((l=>l.name)).join("/"))}))}),{immediate:!0});const j=s((()=>K.isPlay?"../../static/icon/zanting.png":"../../static/icon/bofang.png")),L=l=>{var a;return`${Math.floor(l/60)}:${(a=parseInt(l%60))>=10?a:"0"+a}`};return(l,a)=>{const s=t,m=S,T=b,R=f(w("uni-icons"),D),J=y,M=f(w("comment"),F),Y=f(w("playlistCard"),h);return e(),r(n,null,[c(s,{class:"bg"},{default:o((()=>{var l;return[c(s,{class:"blur-image",style:u({backgroundImage:`url(${null==(l=i(K).curSongDetail.al)?void 0:l.picUrl})`})},null,8,["style"])]})),_:1}),c(s,{class:"player-wrap"},{default:o((()=>[d("div",{class:"center",onClick:a[0]||(a[0]=l=>P.value=!P.value)},[P.value?(e(),A(m,{key:0,"scroll-y":"","scroll-top":30*C.value,class:"lyric"},{default:o((()=>[(e(!0),r(n,null,p(G.value,((l,a)=>(e(),A(s,{key:a,class:k(["lyric-row",{active:C.value===a}])},{default:o((()=>[g(v(l[1]),1)])),_:2},1032,["class"])))),128))])),_:1},8,["scroll-top"])):(e(),A(s,{key:1,class:"song-disc"},{default:o((()=>[c(T,{class:"needle-ab nobg",src:"/music/assets/needle-ab-63009d3f.png",mode:"widthFix"}),c(s,{class:"song-circle"},{default:o((()=>{var l;return[c(T,{class:"circle-bg nobg",src:"/music/assets/disc-23c9ad09.png",mode:"widthFix"}),c(T,{class:"nobg",src:null==(l=i(K).curSongDetail.al)?void 0:l.picUrl,mode:"widthFix"},null,8,["src"])]})),_:1})])),_:1}))]),c(s,{class:"control"},{default:o((()=>[c(s,{class:"icons-bar"},{default:o((()=>[c(R,{type:"heart",size:"40",color:"#ffffff"}),c(R,{type:"chat",size:"40",color:"#ffffff",onClick:a[1]||(a[1]=l=>B.value=!0)})])),_:1}),c(s,{class:"progress"},{default:o((()=>[c(s,{class:"time"},{default:o((()=>[g(v(L(i(K).currentTime)),1)])),_:1}),c(J,{value:i(K).currentTime/i(K).duration*100,onChange:a[2]||(a[2]=l=>i(K).changeCurrent(l.detail.value)),activeColor:"#10AEFF",backgroundColor:"#ffffff","block-color":"#ffffff","block-size":"10"},null,8,["value"]),c(s,{class:"time"},{default:o((()=>[g(v(L(i(K).duration)),1)])),_:1})])),_:1}),c(s,{class:"play-bar"},{default:o((()=>[i(K).isRandom?(e(),A(T,{key:0,class:"icon",src:"data:image/png;base64,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",mode:"widthFix",onClick:a[3]||(a[3]=l=>i(K).isRandom=!1)})):(e(),A(R,{key:1,class:"icon",type:"loop",color:"#ffffff",onClick:a[4]||(a[4]=l=>i(K).isRandom=!0)})),c(R,{class:"icon",type:"arrow-left",color:"#ffffff",onClick:a[5]||(a[5]=l=>i(K).changeMusic(i(K).currentIndex-1))}),c(T,{class:"icon nobg",src:i(j),mode:"widthFix",onClick:a[6]||(a[6]=l=>i(K).play())},null,8,["src"]),c(R,{class:"icon",type:"arrow-right",color:"#ffffff",onClick:a[7]||(a[7]=l=>i(K).changeMusic(i(K).currentIndex+1))}),c(R,{class:"icon",type:"list",color:"#ffffff",onClick:a[8]||(a[8]=l=>H.value=!0)})])),_:1})])),_:1})])),_:1}),c(M,{visible:B.value,"onUpdate:visible":a[9]||(a[9]=l=>B.value=l),type:"music",id:i(K).curSongDetail.id},null,8,["visible","id"]),c(Y,{visible:H.value,"onUpdate:visible":a[10]||(a[10]=l=>H.value=l)},null,8,["visible"])],64)}}},[["__scopeId","data-v-467bc48c"]]);export{K as default};
