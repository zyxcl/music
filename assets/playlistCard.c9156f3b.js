import{al as t,am as s,an as i,o as e,c as o,w as a,d as n,n as r,b as l,f as h,i as c,j as p,k as u,r as m,a as d,ad as f,g as y,h as g,l as k,s as w,F as b,v as C,m as T,B as x,V as $}from"./index-b8f274da.js";import{u as _,a as S,_ as A}from"./music.e91e1b1f.js";import{_ as v}from"./uni-section.e33daa21.js";import{_ as P}from"./plugin-vueexport-helper.1b428a4d.js";class D{constructor(s,i){this.options=s,this.animation=t({...s}),this.currentStepAnimates={},this.next=0,this.$=i}_nvuePushAnimates(t,s){let i=this.currentStepAnimates[this.next],e={};if(e=i||{styles:{},config:{}},B.includes(t)){e.styles.transform||(e.styles.transform="");let i="";"rotate"===t&&(i="deg"),e.styles.transform+=`${t}(${s+i}) `}else e.styles[t]=`${s}`;this.currentStepAnimates[this.next]=e}_animateRun(t={},s={}){let i=this.$.$refs.ani.ref;if(i)return new Promise(((e,o)=>{nvueAnimation.transition(i,{styles:t,...s},(t=>{e()}))}))}_nvueNextAnimate(t,s=0,i){let e=t[s];if(e){let{styles:o,config:a}=e;this._animateRun(o,a).then((()=>{s+=1,this._nvueNextAnimate(t,s,i)}))}else this.currentStepAnimates={},"function"==typeof i&&i(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const B=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function j(t,s){if(s)return clearTimeout(s.timer),new D(t,s)}B.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{D.prototype[t]=function(...s){return this.animation[t](...s),this}}));const I=P({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},s="";for(let i in t){s+=this.toLine(i)+":"+t[i]+";"}return s},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=j(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,s={}){if(this.animation){for(let s in t)try{"object"==typeof t[s]?this.animation[s](...t[s]):this.animation[s](t[s])}catch(i){console.error(`方法 ${s} 不存在`)}return this.animation.step(s),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:s}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=s,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=j(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:s}=this.styleInit(!1);this.opacity=t||1,this.transform=s,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let s={transform:""},i=(t,i)=>{"fade"===i?s.opacity=this.animationType(t)[i]:s.transform+=this.animationType(t)[i]+" "};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((s=>{i(t,s)})),s},tranfromInit(t){let s=(t,s)=>{let i=null;"fade"===s?i=t?0:1:(i=t?"-100%":"0","zoom-in"===s&&(i=t?.8:1),"zoom-out"===s&&(i=t?1.2:1),"slide-right"===s&&(i=t?"100%":"0"),"slide-bottom"===s&&(i=t?"100%":"0")),this.animation[this.animationMode()[s]](i)};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((i=>{s(t,i)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,p,u,m,d,f){const y=c;return d.isShow||u.onceRender?s((e(),o(y,{key:0,ref:"ani",animation:d.animationData,class:r(u.customClass),style:l(f.transformStyles),onClick:f.onClick},{default:a((()=>[n(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[i,d.isShow]]):h("",!0)}]]);const E=P({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(s=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const e=s.key,o=t[i];return o===e||Array.isArray(o)&&o.includes(e)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:s,windowTop:i,safeArea:e,screenHeight:o,safeAreaInsets:a}=f();this.popupWidth=t,this.popupHeight=s+(i||0),e&&this.safeArea?this.safeAreaInsets=a.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,s,i,f,y,g){const k=p(u("uni-transition"),I),w=c,b=m("keypress");return y.showPopup?(e(),o(w,{key:0,class:r(["uni-popup",[y.popupstyle,g.isDesktop?"fixforpc-z-index":""]])},{default:a((()=>[d(w,{onTouchstart:g.touchstart},{default:a((()=>[y.maskShow?(e(),o(k,{key:"1",name:"mask","mode-class":"fade",styles:y.maskClass,duration:y.duration,show:y.showTrans,onClick:g.onTap},null,8,["styles","duration","show","onClick"])):h("",!0),d(k,{key:"2","mode-class":y.ani,name:"content",styles:y.transClass,duration:y.duration,show:y.showTrans,onClick:g.onTap},{default:a((()=>[d(w,{class:r(["uni-popup__wrapper",[y.popupstyle]]),style:l({backgroundColor:g.bg}),onClick:g.clear},{default:a((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),y.maskShow?(e(),o(b,{key:0,onEsc:g.onTap},null,8,["onEsc"])):h("",!0)])),_:3},8,["class"])):h("",!0)}],["__scopeId","data-v-a1518068"]]),M=P({__name:"playlistCard",props:["visible"],emits:["update:visible"],setup(t,{emit:s}){const i=t,n=_(),r=y(null);g((()=>{var t,s;i.visible?null==(t=r.value)||t.open():null==(s=r.value)||s.close()}));const l=t=>{t.show||s("update:visible",!1)};return(t,s)=>{const i=x,h=c,m=p(u("uni-list-item"),S),f=p(u("uni-list"),A),y=$,g=p(u("uni-section"),v),_=p(u("uni-popup"),E);return e(),o(_,{ref_key:"popup",ref:r,type:"bottom","background-color":"#fff",onChange:l},{default:a((()=>[d(g,{title:`播放列表(${k(n).playlist.length})`,type:"line"},{default:a((()=>[d(y,{"scroll-y":"",class:"list"},{default:a((()=>[d(f,null,{default:a((()=>[(e(!0),w(b,null,C(k(n).playlist,((t,s)=>{return e(),o(m,{key:t.id,title:t.name,note:(r=t.ar,r.map((t=>t.name)).join("/")),showArrow:"",thumb:t.al.picUrl,"thumb-size":"lg",clickable:"",ellipsis:"1",onClick:t=>k(n).changeMusic(s)},{footer:a((()=>[d(h,{class:"right-text"},{default:a((()=>[k(n).curSongDetail.id===t.id?(e(),o(i,{key:0,class:"red"},{default:a((()=>[T("正在播放")])),_:1})):(e(),o(i,{key:1},{default:a((()=>[T("播放")])),_:1}))])),_:2},1024)])),_:2},1032,["title","note","thumb","onClick"]);var r})),128))])),_:1})])),_:1})])),_:1},8,["title"])])),_:1},512)}}},[["__scopeId","data-v-4256ad23"]]);export{M as _,E as a};