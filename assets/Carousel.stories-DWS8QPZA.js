import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as Ie,S as Te,s as v,a as x,b as _}from"./storyDocs-CoQtGjOG.js";import{r as d}from"./index-DyTKwKRb.js";import{F as Z,K as Ne,j as qe}from"./index-A9ZUQmzb.js";import{S as ke,T as $e}from"./Text-DqgU3e9e.js";import{b as le}from"./breakpoints-LdF9JrQK.js";import{C as Oe}from"./Card-UAWlkjxH.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function ce({className:t,message:r="Nenhum item disponivel para este carrossel."}){return e.jsx("div",{className:t,role:"status","aria-live":"polite",children:r})}ce.__docgenInfo={description:"",methods:[],displayName:"CarouselEmptyState",props:{className:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Nenhum item disponivel para este carrossel.'",computed:!1}}}};const Fe=t=>{const r=t==null?void 0:t.match(/(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)(["&?/\s]?)([^"&?/\s]{11})/);if(r&&r[2])return r[2];const l=t==null?void 0:t.match(/(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);return l?l[1]:null},Qe=t=>{const r=t==null?void 0:t.match(/vimeo\.com\/(\d+)/);return r?r[1]:null};function Pe({data:t,items:r,autoplay:l=!0,autoplaySpeed:f=3e3,circular:u=!0,width:C="default",indicators:q="default",enableSwipe:ae=!0,noArrowsMobile:U=!0}){const c=Array.isArray(t)?t:Array.isArray(r)?r:[],[p,S]=d.useState(0),[oe,k]=d.useState(0),[$,w]=d.useState({}),[V,P]=d.useState("right"),[A,h]=d.useState(!1),[O,F]=d.useState(null),[D,Q]=d.useState(null),[y,I]=d.useState(!1);d.useEffect(()=>{const o=()=>{I(window.matchMedia(`(max-width: ${le.smartphonePortraitMax})`).matches)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),d.useEffect(()=>{if(!l||c.length<=1)return;const o=window.setInterval(()=>{S(s=>{const i=(s+1)%c.length;return!u&&i===0?(window.clearInterval(o),s):i})},f);return()=>window.clearInterval(o)},[l,f,c.length,u]);const m=o=>{o===p||A||o<0||o>=c.length||(k(p),P(o>p?"right":"left"),h(!0),S(o),window.setTimeout(()=>h(!1),500))},g=()=>{A||!u&&p===0||(k(p),P("left"),h(!0),S(o=>o===0?c.length-1:o-1),window.setTimeout(()=>h(!1),500))},j=()=>{A||!u&&p===c.length-1||(k(p),P("right"),h(!0),S(o=>(o+1)%c.length),window.setTimeout(()=>h(!1),500))},T=50,E=ae&&c.length>1,te=o=>{E&&(Q(null),F(o.targetTouches[0].clientX))},R=o=>{E&&Q(o.targetTouches[0].clientX)},M=()=>{if(!E||O==null||D==null)return;const o=O-D,s=o>T,i=o<-T;s?j():i&&g()};if(!c||c.length===0)return e.jsx(ce,{className:"carousel-placeholder",message:"Nenhum item foi configurado para este carrossel."});const L=!u&&p===0,B=!u&&p===c.length-1,z=c.length>1&&!(U&&y),re=[y?"headers-4":"headers-12","carousel-title"].join(" "),se=[y?"paragraph-4-small":"paragraph-12-small","carousel-description"].join(" ");return e.jsxs("div",{className:"carousel-container carousel-default","aria-roledescription":"carousel","aria-label":"Carrossel padrão",children:[e.jsxs("div",{className:"carousel-wrapper",children:[z?e.jsx("div",{className:"carousel-arrow carousel-arrow-prev",children:e.jsx("button",{className:`carousel-button carousel-button-prev icon-${C}`,type:"button",onClick:g,disabled:L,"aria-label":"Slide anterior",children:e.jsx(Z,{icon:Ne})})}):null,e.jsx("div",{className:`carousel-content carousel-width-${C}`,onTouchStart:te,onTouchMove:R,onTouchEnd:M,children:c.map((o,s)=>{const i=s===p,n=s===oe&&A,a=i||n,G=V==="right"?"left":"right";let N="carousel-slide";i?N=`carousel-slide active slide-in-${V}`:n&&(N=`carousel-slide previous slide-out-${G}`);const ue=o.href||o.url,_e=!!(ue&&!o.videoUrl),Ue=o.videoUrl?(()=>{const ie=Fe(o.videoUrl),me=Qe(o.videoUrl);return ie?$[s]?e.jsx("iframe",{src:`https://www.youtube.com/embed/${ie}?autoplay=1`,title:o.title||`YouTube video ${s+1}`,className:"carousel-video carousel-iframe",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):e.jsxs("div",{className:"carousel-video-thumbnail",onClick:()=>w(b=>({...b,[s]:!0})),role:"button",tabIndex:0,"aria-label":o.title?`Reproduzir vídeo ${o.title}`:"Reproduzir vídeo",onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&w(ne=>({...ne,[s]:!0}))},children:[e.jsx("img",{src:`https://img.youtube.com/vi/${ie}/maxresdefault.jpg`,alt:o.title||`Video thumbnail ${s+1}`,className:"carousel-thumbnail-image"}),e.jsx("span",{className:"carousel-play-overlay","aria-hidden":!0,children:e.jsx("span",{className:"play-icon"})})]}):me?$[s]?e.jsx("iframe",{src:`https://player.vimeo.com/video/${me}?autoplay=1`,title:o.title||`Vimeo video ${s+1}`,className:"carousel-video carousel-iframe",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0}):e.jsxs("div",{className:"carousel-video-thumbnail",onClick:()=>w(b=>({...b,[s]:!0})),role:"button",tabIndex:0,"aria-label":o.title?`Reproduzir vídeo ${o.title}`:"Reproduzir vídeo",onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&w(ne=>({...ne,[s]:!0}))},children:[e.jsxs("div",{className:"carousel-thumbnail-placeholder",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),e.jsx("span",{children:"Vimeo Video"})]}),e.jsx("span",{className:"carousel-play-overlay","aria-hidden":!0,children:e.jsx("span",{className:"play-icon"})})]}):e.jsxs("video",{src:o.videoUrl,controls:!0,className:"carousel-video","aria-label":o.title||`Video ${s+1}`,children:[e.jsx("track",{kind:"captions"}),"Your browser does not support the video tag."]})})():o.image?e.jsx("img",{src:o.image,alt:o.imageAlt||o.title||`Slide ${s+1}`,className:"carousel-image"}):e.jsxs("div",{className:"carousel-image-placeholder",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),e.jsx("span",{children:"Sem imagem ou vídeo"})]}),pe=e.jsxs(e.Fragment,{children:[Ue,(o.title||o.description)&&e.jsxs(ke,{className:"carousel-text",gap:1,children:[o.title?e.jsx("h3",{className:re,children:o.title}):null,o.description?e.jsx("p",{className:se,children:o.description}):null]})]});return e.jsx("div",{className:N,"aria-hidden":!a,children:_e?e.jsx("a",{href:ue,className:"carousel-slide-panel-link",target:o.linkTarget,rel:o.linkTarget==="_blank"?"noopener noreferrer":void 0,"aria-label":o.title||`Ir para slide ${s+1}`,children:pe}):pe},s)})}),z?e.jsx("div",{className:"carousel-arrow carousel-arrow-next",children:e.jsx("button",{className:`carousel-button carousel-button-next icon-${C}`,type:"button",onClick:j,disabled:B,"aria-label":"Próximo slide",children:e.jsx(Z,{icon:qe})})}):null]}),e.jsx("div",{className:`carousel-indicators carousel-indicators-${q}`,children:q==="numbers"?e.jsxs("div",{className:"carousel-indicator-numbers",children:[p+1," / ",c.length]}):c.map((o,s)=>e.jsx("button",{type:"button",className:`carousel-indicator ${s===p?"active":""}`,onClick:()=>m(s),"aria-label":`Ir para slide ${s+1}`},s))})]})}Pe.__docgenInfo={description:"",methods:[],displayName:"CarouselDefault",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
  href?: string;
  url?: string;
  linkTarget?: '_blank' | '_self';
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"image",value:{name:"string",required:!1}},{key:"imageAlt",value:{name:"string",required:!1}},{key:"videoUrl",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"url",value:{name:"string",required:!1}},{key:"linkTarget",value:{name:"union",raw:"'_blank' | '_self'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"}],required:!1}}]}}],raw:"CarouselDefaultItem[]"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
  href?: string;
  url?: string;
  linkTarget?: '_blank' | '_self';
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"image",value:{name:"string",required:!1}},{key:"imageAlt",value:{name:"string",required:!1}},{key:"videoUrl",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"url",value:{name:"string",required:!1}},{key:"linkTarget",value:{name:"union",raw:"'_blank' | '_self'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"}],required:!1}}]}}],raw:"CarouselDefaultItem[]"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},autoplaySpeed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},circular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'default' | 'full'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},indicators:{required:!1,tsType:{name:"union",raw:"'default' | 'inside' | 'numbers'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inside'"},{name:"literal",value:"'numbers'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},enableSwipe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},noArrowsMobile:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Re=(t,r)=>{if(!Array.isArray(t)||t.length===0)return[];const l=Math.max(1,r||1),f=[];for(let u=0;u<t.length;u+=l)f.push(t.slice(u,u+l));return f},ve=[0,4,6,8,10,12,14,16,18,20,24,28,32,36,40,48,64],Be=t=>ve.reduce((r,l)=>Math.abs(l-t)<Math.abs(r-t)?l:r,ve[0]),Ge=t=>Math.min(Math.max(Math.round(t),1),6);function De({title:t,description:r,items:l=[],cardVariant:f,cardsPerView:u=3,cardsPerViewTablet:C=2,cardsPerViewMobile:q=1,gap:ae=16,autoplay:U=!1,autoplaySpeed:c=5e3,circular:p=!0,enableSwipe:S=!0,noArrowsMobile:oe=!0,showIndicators:k=!0,showArrows:$=!0}){var s;const[w,V]=d.useState(u),[P,A]=d.useState(!1),[h,O]=d.useState(null),[F,D]=d.useState(null),Q=Be(ae),y=Ge(w);d.useEffect(()=>{const i=()=>{const n=window.matchMedia(`(max-width: ${le.smartphonePortraitMax})`).matches,a=window.matchMedia(`(max-width: ${le.tabletLandscapeMax})`).matches;if(A(n),n){V(q);return}if(a){V(C);return}V(u)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[u,q,C]);const I=d.useMemo(()=>Re(l,y),[l,y]),m=I.length||1,[g,j]=d.useState(0),T=$&&m>1&&!(oe&&P),E=Math.min(g,Math.max(m-1,0)),te=Math.max(((s=I[E])==null?void 0:s.length)??y,1),R=50,M=S&&m>1;d.useEffect(()=>{j(0)},[w,l]),d.useEffect(()=>{if(!U||m<=1)return;const i=window.setInterval(()=>{j(n=>{const a=n+1;return a>=m?p?0:n:a})},c);return()=>window.clearInterval(i)},[U,c,p,m]);const L=i=>{if(!p){j(Math.min(Math.max(i,0),m-1));return}const n=(i%m+m)%m;j(n)},B=()=>L(g-1),z=()=>L(g+1),re=i=>{M&&(D(null),O(i.targetTouches[0].clientX))},se=i=>{M&&D(i.targetTouches[0].clientX)},o=()=>{if(!M||h==null||F==null)return;const i=h-F,n=i>R,a=i<-R;n?z():a&&B()};return!l||l.length===0?e.jsx(ce,{className:"carousel-card-placeholder",message:"Nenhum card foi configurado para este carrossel."}):e.jsxs("section",{className:"carousel-card","data-gap":Q,"data-per-view":y,"data-active-items":te,"aria-roledescription":"carousel","aria-label":t||"Carrossel de cards",children:[(t||r)&&e.jsxs(ke,{as:"header",className:"carousel-card-header",gap:1,children:[t&&e.jsx("h2",{className:"carousel-card-title",children:t}),r?e.jsx($e,{className:"carousel-card-description",children:r}):null]}),e.jsxs("div",{className:`carousel-card-frame ${T?"carousel-card-frame--with-arrows":""}`,children:[T&&e.jsx("button",{className:"carousel-card-button prev",type:"button",onClick:B,"aria-label":"Slide anterior",children:e.jsx(Z,{icon:Ne})}),e.jsx("div",{className:"carousel-card-viewport",onTouchStart:re,onTouchMove:se,onTouchEnd:o,children:e.jsx("div",{className:"carousel-card-track",children:I.map((i,n)=>e.jsx("div",{className:`carousel-card-slide ${n===g?"active":""}`,role:"group","aria-label":`Slide ${n+1} de ${m}`,"aria-hidden":n!==g,children:i.map((a,G)=>{const N=f||(a==null?void 0:a.variant)||"post";return e.jsx("div",{className:`carousel-card-item ${N==="icon"?"carousel-card-item-icon":""}`,children:e.jsx(Oe,{title:(a==null?void 0:a.title)||(a==null?void 0:a.heading)||`Card ${G+1}`,description:(a==null?void 0:a.description)||(a==null?void 0:a.text),image:a==null?void 0:a.image,imageAlt:a==null?void 0:a.imageAlt,href:(a==null?void 0:a.href)||(a==null?void 0:a.url),linkTarget:a==null?void 0:a.linkTarget,variant:N,size:a==null?void 0:a.size,disabled:a==null?void 0:a.disabled,itens:a==null?void 0:a.itens,bodyImg:a==null?void 0:a.bodyImg,bodyImgAlt:a==null?void 0:a.bodyImgAlt,acao:a==null?void 0:a.acao,onLike:a==null?void 0:a.onLike,onShare:a==null?void 0:a.onShare})},`${n}-${G}`)})},n))})}),T&&e.jsx("button",{className:"carousel-card-button next",type:"button",onClick:z,"aria-label":"Proximo slide",children:e.jsx(Z,{icon:qe})})]}),k&&m>1&&e.jsx("div",{className:"carousel-card-indicators","aria-hidden":!0,children:I.map((i,n)=>e.jsx("button",{type:"button",className:`carousel-card-indicator ${n===g?"active":""}`,onClick:()=>L(n),"aria-label":`Ir para slide ${n+1}`},n))})]})}De.__docgenInfo={description:"",methods:[],displayName:"CarouselCard",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Card.Props & {
  heading?: string;
  text?: string;
  url?: string;
  linkTarget?: '_blank' | '_self';
}`,elements:[{name:"Card.Props"},{name:"signature",type:"object",raw:`{
  heading?: string;
  text?: string;
  url?: string;
  linkTarget?: '_blank' | '_self';
}`,signature:{properties:[{key:"heading",value:{name:"string",required:!1}},{key:"text",value:{name:"string",required:!1}},{key:"url",value:{name:"string",required:!1}},{key:"linkTarget",value:{name:"union",raw:"'_blank' | '_self'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"}],required:!1}}]}}]}],raw:"CarouselCardItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},cardVariant:{required:!1,tsType:{name:"Card.Variant"},description:""},cardsPerView:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},cardsPerViewTablet:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},cardsPerViewMobile:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoplaySpeed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},circular:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},enableSwipe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},noArrowsMobile:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showIndicators:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};function ee({variant:t,variante:r,...l}){return(t??r??"default").toString().toLowerCase()==="card"?e.jsx(De,{...l}):e.jsx(Pe,{...l})}ee.__docgenInfo={description:"",methods:[],displayName:"Carousel"};const ua={title:"Conteúdo/Carousel",component:ee,parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}},Ee=[{title:"Banner 1",description:"Descrição curta do primeiro banner.",image:"https://picsum.photos/1200/500?random=1",href:"https://www.rs.gov.br"},{title:"Banner 2",description:"Outro destaque com texto resumido.",image:"https://picsum.photos/1200/500?random=2",href:"https://www.rs.gov.br"},{title:"Banner 3",description:"Exemplo de slide com vídeo (YouTube).",videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}],J=[{title:"Post 1",description:"Conteúdo de post ou lista.",image:"https://picsum.photos/400/240?random=12",variant:"post",href:"#",acao:{label:"Ler mais",url:"#"}},{title:"Post 2",description:"Para testar quebra em mais slides.",image:"https://picsum.photos/400/240?random=15",variant:"post"},{title:"Post 3",description:"Outro exemplo de post.",image:"https://picsum.photos/400/240?random=25",variant:"post"},{title:"Post 4",description:"Conteúdo extra para teste.",image:"https://picsum.photos/400/240?random=32",variant:"post"},{title:"Post 5",description:"Conteúdo extra para teste.",image:"https://picsum.photos/400/240?random=33",variant:"post"},{title:"Post 6",description:"Conteúdo extra para teste.",image:"https://picsum.photos/400/240?random=34",variant:"post"},{title:"Post 7",description:"Conteúdo extra para teste.",image:"https://picsum.photos/400/240?random=35",variant:"post"}],Ye=[{title:"Lista 1",description:"Com itens adicionais.",image:"https://picsum.photos/400/240?random=14",variant:"list",itens:[{value:"Primeiro"},{value:"Segundo"},{value:"Terceiro"},{value:"Quarto"},{value:"Quinto"},{value:"Sexto"},{value:"Sétimo"}]},{title:"Lista 2",description:"Outra lista de itens.",image:"https://picsum.photos/400/240?random=34",variant:"list",itens:[{value:"Item A"},{value:"Item B"},{value:"Item C"},{value:"Item D"},{value:"Item E"},{value:"Item F"},{value:"Item G"}]},{title:"Lista 3",description:"Mais itens para teste.",image:"https://picsum.photos/400/240?random=35",variant:"list",itens:[{value:"Um"},{value:"Dois"},{value:"Três"},{value:"Quatro"},{value:"Cinco"},{value:"Seis"},{value:"Sete"}]},{title:"Lista 4",description:"Lista adicional para completar 7 itens.",image:"https://picsum.photos/400/240?random=36",variant:"list",itens:[{value:"A"},{value:"B"},{value:"C"},{value:"D"},{value:"E"},{value:"F"},{value:"G"}]},{title:"Lista 5",description:"Lista adicional para completar 7 itens.",image:"https://picsum.photos/400/240?random=37",variant:"list",itens:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"}]},{title:"Lista 6",description:"Lista adicional para completar 7 itens.",image:"https://picsum.photos/400/240?random=38",variant:"list",itens:[{value:"I"},{value:"II"},{value:"III"},{value:"IV"},{value:"V"},{value:"VI"},{value:"VII"}]},{title:"Lista 7",description:"Lista adicional para completar 7 itens.",image:"https://picsum.photos/400/240?random=39",variant:"list",itens:[{value:"Alpha"},{value:"Beta"},{value:"Gamma"},{value:"Delta"},{value:"Epsilon"},{value:"Zeta"},{value:"Eta"}]}],Me=[{title:"Notícia 1",description:"Resumo rápido da matéria.",image:"https://picsum.photos/400/240?random=11",variant:"news",href:"#"},{title:"Notícia 2",description:"Chamada de destaque.",image:"https://picsum.photos/400/240?random=21",variant:"news",href:"#"},{title:"Notícia 3",description:"Mais um exemplo de notícia.",image:"https://picsum.photos/400/240?random=22",variant:"news",href:"#"},{title:"Notícia 4",description:"Notícia extra para teste.",image:"https://picsum.photos/400/240?random=23",variant:"news",href:"#"},{title:"Notícia 5",description:"Notícia extra para teste.",image:"https://picsum.photos/400/240?random=24",variant:"news",href:"#"},{title:"Notícia 6",description:"Notícia extra para teste.",image:"https://picsum.photos/400/240?random=25",variant:"news",href:"#"},{title:"Notícia 7",description:"Notícia extra para teste.",image:"https://picsum.photos/400/240?random=26",variant:"news",href:"#"}],Xe=[{title:"Ícone 1",description:"Cartão focado em ícone.",image:"https://picsum.photos/160/160?random=13",variant:"icon",href:"#"},{title:"Ícone 2",description:"Outro cartão de ícone.",image:"https://picsum.photos/160/160?random=23",variant:"icon",href:"#"},{title:"Ícone 3",description:"Mais um cartão de ícone.",image:"https://picsum.photos/160/160?random=24",variant:"icon",href:"#"},{title:"Ícone 4",description:"Ícone extra.",image:"https://picsum.photos/160/160?random=25",variant:"icon",href:"#"},{title:"Ícone 5",description:"Ícone extra.",image:"https://picsum.photos/160/160?random=26",variant:"icon",href:"#"},{title:"Ícone 6",description:"Ícone extra.",image:"https://picsum.photos/160/160?random=27",variant:"icon",href:"#"},{title:"Ícone 7",description:"Ícone extra.",image:"https://picsum.photos/160/160?random=28",variant:"icon",href:"#"}],He={post:J,list:Ye,news:Me,icon:Xe},Le={...v.previewStage,padding:16},ze={width:"100%",maxWidth:1200,margin:"0 auto"},We=`<Carousel
  variant="default"
  data={defaultItems}
  autoplay
  autoplaySpeed={4000}
  circular
  width="default"
  indicators="inside"
  enableSwipe
  noArrowsMobile
/>`,Ke=`data={[
  {
    title: 'Banner',
    description: 'Texto opcional',
    image: 'https://...',
    href: '/pagina-destino'
  },
  {
    title: 'Video',
    videoUrl: 'https://www.youtube.com/watch?v=...'
  }
]}`,Ze=`<Carousel
  variant="card"
  cardVariant="news"
  items={cardItemsNews}
  cardsPerView={3}
  cardsPerViewTablet={2}
  cardsPerViewMobile={1}
  gap={16}
  enableSwipe
  noArrowsMobile
  showIndicators
  showArrows
/>`,Je=`items={[
  {
    title: 'Notícia',
    description: 'Resumo',
    image: 'https://...',
    variant: 'news',
    href: '#'
  },
  {
    title: 'Lista',
    description: 'Com itens',
    image: 'https://...',
    variant: 'list',
    itens: [{ value: 'Item 1' }, { value: 'Item 2' }]
  }
]}`,ea=`<Carousel
  variant="card"
  cardVariant="post"
  items={cardItemsPost}
  cardsPerView={3}
  cardsPerViewTablet={2}
  cardsPerViewMobile={1}
  gap={16}
  autoplay={false}
  circular
  enableSwipe
  noArrowsMobile
  showIndicators
  showArrows
/>`;function aa(t){return t&&He[t]||J}function de(t){return e.jsx("div",{style:Le,children:e.jsx("div",{style:ze,children:e.jsx(ee,{...t,variant:"default"})})})}function K(t){const{cardVariant:r="post"}=t,l=aa(r);return e.jsx("div",{style:Le,children:e.jsx("div",{style:ze,children:e.jsx(ee,{...t,variant:"card",items:l,cardVariant:r})})})}const Y={name:"Default - Documentação",args:{variant:"default",data:Ee,autoplay:!0,autoplaySpeed:4e3,circular:!0,width:"default",indicators:"inside",enableSwipe:!0,noArrowsMobile:!0},parameters:{controls:{disable:!0}},render:t=>{const r=t;return e.jsxs(Ie,{children:[e.jsx(Te,{eyebrow:"Variante default",title:e.jsx("h3",{style:v.heroTitle,children:"Carousel default"}),description:e.jsxs(e.Fragment,{children:["A variante default trabalha com um item por vez e é a opção certa para destaque visual, banners e slides com imagem ou vídeo. Ela aceita dados em ",e.jsx("code",{children:"data"})," ou ",e.jsx("code",{children:"items"}),", desde que o valor final seja um array simples de itens."]}),stats:[{title:"Foco principal",text:"Um slide por vez com destaque visual amplo e navegação simples."},{title:"Mídias aceitas",text:"Imagens, vídeos do YouTube, Vimeo e fontes diretas em videoUrl."},{title:"Configuração mais comum",text:"Autoplay ativo, indicadores inside e width default para destaque editorial."}]}),e.jsxs(x,{title:"Quando usar",description:"Escolha a variante default quando o conteúdo pede leitura de um item por vez e a prioridade é destacar mídia e mensagem principal, não uma grade de cards.",children:[e.jsxs("ul",{style:v.list,children:[e.jsx("li",{children:"Use para banners de home, destaques de campanha e chamadas com imagem ampla."}),e.jsx("li",{children:"O componente combina indicadores, setas e swipe, mas em mobile retrato a configuração recomendada é ocultar as setas e priorizar o arraste."}),e.jsxs("li",{children:["Com ",e.jsxs("code",{children:["circular=",!1]}),", a navegação bloqueia nas extremidades."]})]}),e.jsx(_,{title:"Exemplo recomendado",description:"Configuração comum para um carousel de destaque com autoplay e indicadores internos.",code:We,notes:["Os itens podem conter image, title e description, ou apenas videoUrl para mídia embarcada.","Com noArrowsMobile ativo, o mobile retrato passa a depender de swipe e indicadores para navegação.","Se o array vier vazio, o componente mostra o empty state interno do carousel default."],children:de(r)})]}),e.jsxs(x,{title:"Estrutura de dados e mídias",description:"O contrato da variante default foi simplificado para arrays diretos. O formato legado data.items nao faz mais parte da API do design system.",children:[e.jsxs("ul",{style:v.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"data"})," e ",e.jsx("code",{children:"items"})," aceitam arrays de objetos com ",e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"description"}),", ",e.jsx("code",{children:"image"})," e ",e.jsx("code",{children:"videoUrl"}),"."]}),e.jsxs("li",{children:["Quando ",e.jsx("code",{children:"videoUrl"})," aponta para YouTube ou Vimeo, o componente aplica o tratamento específico para embed."]}),e.jsxs("li",{children:[e.jsx("code",{children:"imageAlt"})," pode ser usado para complementar acessibilidade quando a imagem exigir descrição específica."]})]}),e.jsx(_,{title:"Shape mínimo dos itens",description:"Exemplo direto do formato esperado na camada pública da variante default.",code:Ke,notes:["A story usa uma combinação de slides com imagem e vídeo para exercitar os dois caminhos principais do componente."],children:de({...r,autoplay:!1,indicators:"numbers"})})]}),e.jsx(x,{title:"Configurações principais",description:"As props top-level controlam navegação, ritmo do autoplay, largura visual e interação touch sem exigir adaptadores externos.",children:e.jsxs("ul",{style:v.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"autoplay"})," e ",e.jsx("code",{children:"autoplaySpeed"})," controlam avanço automático entre slides."]}),e.jsxs("li",{children:[e.jsx("code",{children:"width"})," alterna entre conteúdo com largura padrão e a leitura full do slide."]}),e.jsxs("li",{children:[e.jsx("code",{children:"indicators"})," aceita ",e.jsx("code",{children:"default"}),", ",e.jsx("code",{children:"inside"})," e ",e.jsx("code",{children:"numbers"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"enableSwipe"})," e ",e.jsx("code",{children:"noArrowsMobile"})," ajustam a experiência em telas menores; no mobile retrato, o comportamento recomendado é swipe com setas ocultas."]}),e.jsxs("li",{children:[e.jsx("code",{children:"href"})," ou ",e.jsx("code",{children:"url"})," em cada item tornam o painel inteiro clicável; slides com ",e.jsx("code",{children:"videoUrl"})," mantêm o clique para reprodução do vídeo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"linkTarget"})," aceita ",e.jsx("code",{children:"_self"})," ou ",e.jsx("code",{children:"_blank"})," para abrir em nova aba."]})]})}),e.jsx(x,{title:"Limitações e observações",description:"A variante default continua intencionalmente focada em destaque de um item por vez e não substitui galerias multi-coluna nem listas de cards.",children:e.jsxs("ul",{style:v.list,children:[e.jsxs("li",{children:["O formato antigo ",e.jsx("code",{children:"data.items"})," não deve ser reutilizado nas integrações novas."]}),e.jsx("li",{children:"Autoplay não avança quando existe apenas um item válido."}),e.jsxs("li",{children:["Ao desativar ",e.jsx("code",{children:"circular"}),", as setas ficam bloqueadas no primeiro e no último slide."]})]})})]})}},X={name:"Default - Interativo",args:{variant:"default",data:Ee,autoplay:!1,autoplaySpeed:4e3,circular:!0,width:"default",indicators:"default",enableSwipe:!0,noArrowsMobile:!0},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:!1,table:{disable:!0}},data:{control:!1,table:{disable:!0}},items:{control:!1,table:{disable:!0}},autoplay:{control:"boolean",description:"Liga ou desliga o avanço automático entre slides.",table:{category:"Comportamento"}},autoplaySpeed:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Intervalo do autoplay em milissegundos.",table:{category:"Comportamento"}},circular:{control:"boolean",description:"Permite loop infinito entre primeiro e último slide.",table:{category:"Comportamento"}},width:{control:{type:"inline-radio"},options:["default","full"],description:"Ajusta a largura visual do conteúdo.",table:{category:"Layout"}},indicators:{control:{type:"select"},options:["default","inside","numbers"],description:"Posicionamento ou formato dos indicadores.",table:{category:"Layout"}},enableSwipe:{control:"boolean",description:"Ativa navegação por swipe em dispositivos touch.",table:{category:"Interação"}},noArrowsMobile:{control:"boolean",description:"No mobile retrato, esconde as setas e prioriza a navegação por swipe.",table:{category:"Interação"}}},render:t=>de(t)},H={name:"Card - Documentação",args:{variant:"card",cardVariant:"news",items:Me,cardsPerView:3,cardsPerViewTablet:2,cardsPerViewMobile:1,gap:16,autoplay:!1,circular:!0,enableSwipe:!0,noArrowsMobile:!0,showIndicators:!0,showArrows:!0},parameters:{controls:{disable:!0}},render:t=>{const r=t;return e.jsxs(Ie,{children:[e.jsx(Te,{eyebrow:"Variante card",title:e.jsx("h3",{style:v.heroTitle,children:"Carousel card"}),description:e.jsxs(e.Fragment,{children:["A variante card agrupa itens em slides responsivos e reaproveita o contrato visual do componente ",e.jsx("code",{children:"Card"}),". Ela foi pensada para listar notícias, posts, listas e cartões com ícone dentro de um fluxo de navegação horizontal."]}),stats:[{title:"Foco principal",text:"Listar múltiplos cards por slide sem perder controle sobre responsividade e navegação."},{title:"Override útil",text:"cardVariant pode forçar todos os itens a renderizarem com a mesma variante de Card."},{title:"Configuração mais comum",text:"cardsPerView=3 no desktop, 2 no tablet, 1 no mobile, indicadores ativos e arraste no mobile retrato."}]}),e.jsxs(x,{title:"Quando usar",description:"A variante card é adequada para coleções editoriais e vitrines de conteúdo em que o usuário precisa comparar vários itens por slide.",children:[e.jsxs("ul",{style:v.list,children:[e.jsx("li",{children:"Use para notícias, posts, listas de serviços ou cards com ícone."}),e.jsx("li",{children:"O componente define grupos de cards por slide de acordo com o breakpoint ativo."}),e.jsx("li",{children:"No mobile retrato, a configuração recomendada é navegar por arraste e esconder as setas laterais."}),e.jsx("li",{children:"Quando houver apenas um slide, indicadores e setas deixam de ser necessários visualmente."})]}),e.jsx(_,{title:"Exemplo recomendado",description:"Configuração comum com variante news e distribuição responsiva de cards por slide.",code:Ze,notes:["A história interativa troca automaticamente o dataset conforme o valor de cardVariant.","Com noArrowsMobile ativo, o mobile retrato usa swipe como mecanismo principal de navegação.","Com poucos itens, o número real de slides pode diminuir e os controles visuais se ajustam a isso."],children:K(r)})]}),e.jsxs(x,{title:"Estrutura dos items",description:"Cada item aceita as mesmas props centrais de Card, com alias adicionais heading, text e url para facilitar tradução de contratos anteriores.",children:[e.jsxs("ul",{style:v.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"items"})," recebe objetos compatíveis com ",e.jsx("code",{children:"Card"}),", incluindo ",e.jsx("code",{children:"variant"}),", ",e.jsx("code",{children:"image"}),", ",e.jsx("code",{children:"href"}),", ",e.jsx("code",{children:"itens"})," e ações."]}),e.jsxs("li",{children:["Com ",e.jsx("code",{children:"href"})," ou ",e.jsx("code",{children:"url"}),", o card inteiro fica clicável; botões internos (curtir, compartilhar, ação) continuam interativos."]}),e.jsxs("li",{children:["Quando ",e.jsx("code",{children:"cardVariant"})," está presente, ele sobrescreve o ",e.jsx("code",{children:"variant"})," individual de cada item."]}),e.jsxs("li",{children:["O dataset pode variar entre ",e.jsx("code",{children:"post"}),", ",e.jsx("code",{children:"list"}),", ",e.jsx("code",{children:"news"})," e ",e.jsx("code",{children:"icon"})," sem mudar o wrapper ",e.jsx("code",{children:"Carousel"}),"."]})]}),e.jsx(_,{title:"Shape de items compatíveis com Card",description:"Exemplo de como montar o array da variante card mantendo o contrato independente de aplicação consumidora.",code:Je,notes:["A combinação entre items e cardVariant permite tanto dados heterogêneos quanto uma grade visual uniforme."],children:K({...r,cardVariant:"list"})})]}),e.jsxs(x,{title:"Responsividade e navegação",description:"A variante card recalcula quantos itens entram em cada slide com base na largura da viewport e depois divide o array em grupos correspondentes.",children:[e.jsxs("ul",{style:v.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"cardsPerView"})," controla o desktop; ",e.jsx("code",{children:"cardsPerViewTablet"})," e ",e.jsx("code",{children:"cardsPerViewMobile"})," ajustam tablet e mobile."]}),e.jsx("li",{children:"Os breakpoints atuais seguem a referencia do gov.br: mobile retrato ate 575px, faixa intermediaria de 576px a 1279px e desktop a partir de 1280px."}),e.jsxs("li",{children:[e.jsx("code",{children:"gap"})," é normalizado para a escala suportada internamente pelo componente."]}),e.jsxs("li",{children:[e.jsx("code",{children:"enableSwipe"}),", ",e.jsx("code",{children:"showIndicators"})," e ",e.jsx("code",{children:"showArrows"})," controlam a navegação; em mobile retrato, a recomendação é manter o arraste e ocultar as setas com ",e.jsx("code",{children:"noArrowsMobile"}),"."]})]}),e.jsx(_,{title:"Configuração responsiva",description:"Base mínima para controlar quantidade por slide e ritmo de navegação da variante card.",code:ea,children:K({...r,cardVariant:"post",cardsPerView:3,cardsPerViewTablet:2,cardsPerViewMobile:1,gap:16})})]}),e.jsx(x,{title:"Limitações e observações",description:"A variante card organiza listas de cards, mas continua dependendo do contrato do componente Card e de datasets locais coerentes para uma experiência consistente.",children:e.jsxs("ul",{style:v.list,children:[e.jsxs("li",{children:["Se ",e.jsx("code",{children:"items"})," vier vazio, o componente mostra o empty state interno do carousel card."]}),e.jsxs("li",{children:["Com ",e.jsx("code",{children:"showArrows"})," ou ",e.jsx("code",{children:"showIndicators"})," ativos, o componente ainda pode ocultar esses controles quando existe apenas um slide."]}),e.jsx("li",{children:"Gap fora da escala suportada é aproximado para o valor mais próximo previsto pela implementação."})]})})]})}},W={name:"Card - Interativo",args:{variant:"card",cardVariant:"post",items:J,cardsPerView:2,cardsPerViewTablet:2,cardsPerViewMobile:1,gap:12,autoplay:!1,autoplaySpeed:5e3,circular:!0,enableSwipe:!0,noArrowsMobile:!0,showIndicators:!0,showArrows:!0},argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},variant:{control:!1,table:{disable:!0}},items:{control:!1,table:{disable:!0}},cardVariant:{control:{type:"select"},options:["post","list","news","icon"],description:"Força todos os cards a usarem a mesma variante visual.",table:{category:"Conteudo"}},cardsPerView:{control:{type:"number",min:1,max:6,step:1},description:"Número de cards por slide em desktop.",table:{category:"Layout responsivo"}},cardsPerViewTablet:{control:{type:"number",min:1,max:4,step:1},description:"Número de cards por slide em tablet.",table:{category:"Layout responsivo"}},cardsPerViewMobile:{control:{type:"number",min:1,max:2,step:1},description:"Número de cards por slide em mobile.",table:{category:"Layout responsivo"}},gap:{control:{type:"number",min:0,max:64,step:2},description:"Espaço entre cards em pixels antes da normalização interna.",table:{category:"Layout responsivo"}},autoplay:{control:"boolean",description:"Liga ou desliga o autoplay entre grupos de cards.",table:{category:"Comportamento"}},autoplaySpeed:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Intervalo do autoplay em milissegundos.",table:{category:"Comportamento"}},circular:{control:"boolean",description:"Permite loop infinito entre os grupos de cards.",table:{category:"Comportamento"}},enableSwipe:{control:"boolean",description:"Ativa navegação por swipe e arraste em dispositivos touch.",table:{category:"Comportamento"}},noArrowsMobile:{control:"boolean",description:"No mobile retrato, esconde as setas e deixa a navegação por arraste.",table:{category:"Navegacao"}},showIndicators:{control:"boolean",description:"Exibe ou oculta indicadores de slide.",table:{category:"Navegacao"}},showArrows:{control:"boolean",description:"Exibe ou oculta setas laterais.",table:{category:"Navegacao"}}},render:t=>K(t)};var he,ge,be;Y.parameters={...Y.parameters,docs:{...(he=Y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Default - Documentação',
  args: {
    variant: 'default',
    data: defaultItems,
    autoplay: true,
    autoplaySpeed: 4000,
    circular: true,
    width: 'default',
    indicators: 'inside',
    enableSwipe: true,
    noArrowsMobile: true
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const defaultArgs = args as DefaultStoryArgs;
    return <DocsStoryLayout>
        <DocsHero eyebrow="Variante default" title={<h3 style={storyDocsStyles.heroTitle}>Carousel default</h3>} description={<>
              A variante default trabalha com um item por vez e é a opção certa
              para destaque visual, banners e slides com imagem ou vídeo. Ela
              aceita dados em <code>data</code> ou <code>items</code>, desde que
              o valor final seja um array simples de itens.
            </>} stats={[{
        title: 'Foco principal',
        text: 'Um slide por vez com destaque visual amplo e navegação simples.'
      }, {
        title: 'Mídias aceitas',
        text: 'Imagens, vídeos do YouTube, Vimeo e fontes diretas em videoUrl.'
      }, {
        title: 'Configuração mais comum',
        text: 'Autoplay ativo, indicadores inside e width default para destaque editorial.'
      }]} />

        <SectionCard title="Quando usar" description="Escolha a variante default quando o conteúdo pede leitura de um item por vez e a prioridade é destacar mídia e mensagem principal, não uma grade de cards.">
          <ul style={storyDocsStyles.list}>
            <li>Use para banners de home, destaques de campanha e chamadas com imagem ampla.</li>
            <li>O componente combina indicadores, setas e swipe, mas em mobile retrato a configuração recomendada é ocultar as setas e priorizar o arraste.</li>
            <li>Com <code>circular={false}</code>, a navegação bloqueia nas extremidades.</li>
          </ul>

          <SandboxExample title="Exemplo recomendado" description="Configuração comum para um carousel de destaque com autoplay e indicadores internos." code={defaultUsageCode} notes={['Os itens podem conter image, title e description, ou apenas videoUrl para mídia embarcada.', 'Com noArrowsMobile ativo, o mobile retrato passa a depender de swipe e indicadores para navegação.', 'Se o array vier vazio, o componente mostra o empty state interno do carousel default.']}>
            {renderDefaultCarousel(defaultArgs)}
          </SandboxExample>
        </SectionCard>

        <SectionCard title="Estrutura de dados e mídias" description="O contrato da variante default foi simplificado para arrays diretos. O formato legado data.items nao faz mais parte da API do design system.">
          <ul style={storyDocsStyles.list}>
            <li><code>data</code> e <code>items</code> aceitam arrays de objetos com <code>title</code>, <code>description</code>, <code>image</code> e <code>videoUrl</code>.</li>
            <li>Quando <code>videoUrl</code> aponta para YouTube ou Vimeo, o componente aplica o tratamento específico para embed.</li>
            <li><code>imageAlt</code> pode ser usado para complementar acessibilidade quando a imagem exigir descrição específica.</li>
          </ul>

          <SandboxExample title="Shape mínimo dos itens" description="Exemplo direto do formato esperado na camada pública da variante default." code={defaultDataCode} notes={['A story usa uma combinação de slides com imagem e vídeo para exercitar os dois caminhos principais do componente.']}>
            {renderDefaultCarousel({
            ...defaultArgs,
            autoplay: false,
            indicators: 'numbers'
          })}
          </SandboxExample>
        </SectionCard>

        <SectionCard title="Configurações principais" description="As props top-level controlam navegação, ritmo do autoplay, largura visual e interação touch sem exigir adaptadores externos.">
          <ul style={storyDocsStyles.list}>
            <li><code>autoplay</code> e <code>autoplaySpeed</code> controlam avanço automático entre slides.</li>
            <li><code>width</code> alterna entre conteúdo com largura padrão e a leitura full do slide.</li>
            <li><code>indicators</code> aceita <code>default</code>, <code>inside</code> e <code>numbers</code>.</li>
            <li><code>enableSwipe</code> e <code>noArrowsMobile</code> ajustam a experiência em telas menores; no mobile retrato, o comportamento recomendado é swipe com setas ocultas.</li>
            <li><code>href</code> ou <code>url</code> em cada item tornam o painel inteiro clicável; slides com <code>videoUrl</code> mantêm o clique para reprodução do vídeo.</li>
            <li><code>linkTarget</code> aceita <code>_self</code> ou <code>_blank</code> para abrir em nova aba.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Limitações e observações" description="A variante default continua intencionalmente focada em destaque de um item por vez e não substitui galerias multi-coluna nem listas de cards.">
          <ul style={storyDocsStyles.list}>
            <li>O formato antigo <code>data.items</code> não deve ser reutilizado nas integrações novas.</li>
            <li>Autoplay não avança quando existe apenas um item válido.</li>
            <li>Ao desativar <code>circular</code>, as setas ficam bloqueadas no primeiro e no último slide.</li>
          </ul>
        </SectionCard>
      </DocsStoryLayout>;
  }
}`,...(be=(ge=Y.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ye,xe;X.parameters={...X.parameters,docs:{...(fe=X.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Default - Interativo',
  args: {
    variant: 'default',
    data: defaultItems,
    autoplay: false,
    autoplaySpeed: 4000,
    circular: true,
    width: 'default',
    indicators: 'default',
    enableSwipe: true,
    noArrowsMobile: true
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    variant: {
      control: false,
      table: {
        disable: true
      }
    },
    data: {
      control: false,
      table: {
        disable: true
      }
    },
    items: {
      control: false,
      table: {
        disable: true
      }
    },
    autoplay: {
      control: 'boolean',
      description: 'Liga ou desliga o avanço automático entre slides.',
      table: {
        category: 'Comportamento'
      }
    },
    autoplaySpeed: {
      control: {
        type: 'number',
        min: 1000,
        max: 10000,
        step: 500
      },
      description: 'Intervalo do autoplay em milissegundos.',
      table: {
        category: 'Comportamento'
      }
    },
    circular: {
      control: 'boolean',
      description: 'Permite loop infinito entre primeiro e último slide.',
      table: {
        category: 'Comportamento'
      }
    },
    width: {
      control: {
        type: 'inline-radio'
      },
      options: ['default', 'full'],
      description: 'Ajusta a largura visual do conteúdo.',
      table: {
        category: 'Layout'
      }
    },
    indicators: {
      control: {
        type: 'select'
      },
      options: ['default', 'inside', 'numbers'],
      description: 'Posicionamento ou formato dos indicadores.',
      table: {
        category: 'Layout'
      }
    },
    enableSwipe: {
      control: 'boolean',
      description: 'Ativa navegação por swipe em dispositivos touch.',
      table: {
        category: 'Interação'
      }
    },
    noArrowsMobile: {
      control: 'boolean',
      description: 'No mobile retrato, esconde as setas e prioriza a navegação por swipe.',
      table: {
        category: 'Interação'
      }
    }
  },
  render: args => renderDefaultCarousel(args as DefaultStoryArgs)
}`,...(xe=(ye=X.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var we,je,Ce;H.parameters={...H.parameters,docs:{...(we=H.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Card - Documentação',
  args: {
    variant: 'card',
    cardVariant: 'news',
    items: cardItemsNews,
    cardsPerView: 3,
    cardsPerViewTablet: 2,
    cardsPerViewMobile: 1,
    gap: 16,
    autoplay: false,
    circular: true,
    enableSwipe: true,
    noArrowsMobile: true,
    showIndicators: true,
    showArrows: true
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const cardArgs = args as CardStoryArgs;
    return <DocsStoryLayout>
        <DocsHero eyebrow="Variante card" title={<h3 style={storyDocsStyles.heroTitle}>Carousel card</h3>} description={<>
              A variante card agrupa itens em slides responsivos e reaproveita o
              contrato visual do componente <code>Card</code>. Ela foi pensada
              para listar notícias, posts, listas e cartões com ícone dentro de
              um fluxo de navegação horizontal.
            </>} stats={[{
        title: 'Foco principal',
        text: 'Listar múltiplos cards por slide sem perder controle sobre responsividade e navegação.'
      }, {
        title: 'Override útil',
        text: 'cardVariant pode forçar todos os itens a renderizarem com a mesma variante de Card.'
      }, {
        title: 'Configuração mais comum',
        text: 'cardsPerView=3 no desktop, 2 no tablet, 1 no mobile, indicadores ativos e arraste no mobile retrato.'
      }]} />

        <SectionCard title="Quando usar" description="A variante card é adequada para coleções editoriais e vitrines de conteúdo em que o usuário precisa comparar vários itens por slide.">
          <ul style={storyDocsStyles.list}>
            <li>Use para notícias, posts, listas de serviços ou cards com ícone.</li>
            <li>O componente define grupos de cards por slide de acordo com o breakpoint ativo.</li>
            <li>No mobile retrato, a configuração recomendada é navegar por arraste e esconder as setas laterais.</li>
            <li>Quando houver apenas um slide, indicadores e setas deixam de ser necessários visualmente.</li>
          </ul>

          <SandboxExample title="Exemplo recomendado" description="Configuração comum com variante news e distribuição responsiva de cards por slide." code={cardUsageCode} notes={['A história interativa troca automaticamente o dataset conforme o valor de cardVariant.', 'Com noArrowsMobile ativo, o mobile retrato usa swipe como mecanismo principal de navegação.', 'Com poucos itens, o número real de slides pode diminuir e os controles visuais se ajustam a isso.']}>
            {renderCardCarousel(cardArgs)}
          </SandboxExample>
        </SectionCard>

        <SectionCard title="Estrutura dos items" description="Cada item aceita as mesmas props centrais de Card, com alias adicionais heading, text e url para facilitar tradução de contratos anteriores.">
          <ul style={storyDocsStyles.list}>
            <li><code>items</code> recebe objetos compatíveis com <code>Card</code>, incluindo <code>variant</code>, <code>image</code>, <code>href</code>, <code>itens</code> e ações.</li>
            <li>Com <code>href</code> ou <code>url</code>, o card inteiro fica clicável; botões internos (curtir, compartilhar, ação) continuam interativos.</li>
            <li>Quando <code>cardVariant</code> está presente, ele sobrescreve o <code>variant</code> individual de cada item.</li>
            <li>O dataset pode variar entre <code>post</code>, <code>list</code>, <code>news</code> e <code>icon</code> sem mudar o wrapper <code>Carousel</code>.</li>
          </ul>

          <SandboxExample title="Shape de items compatíveis com Card" description="Exemplo de como montar o array da variante card mantendo o contrato independente de aplicação consumidora." code={cardDataCode} notes={['A combinação entre items e cardVariant permite tanto dados heterogêneos quanto uma grade visual uniforme.']}>
            {renderCardCarousel({
            ...cardArgs,
            cardVariant: 'list'
          })}
          </SandboxExample>
        </SectionCard>

        <SectionCard title="Responsividade e navegação" description="A variante card recalcula quantos itens entram em cada slide com base na largura da viewport e depois divide o array em grupos correspondentes.">
          <ul style={storyDocsStyles.list}>
            <li><code>cardsPerView</code> controla o desktop; <code>cardsPerViewTablet</code> e <code>cardsPerViewMobile</code> ajustam tablet e mobile.</li>
            <li>Os breakpoints atuais seguem a referencia do gov.br: mobile retrato ate 575px, faixa intermediaria de 576px a 1279px e desktop a partir de 1280px.</li>
            <li><code>gap</code> é normalizado para a escala suportada internamente pelo componente.</li>
            <li><code>enableSwipe</code>, <code>showIndicators</code> e <code>showArrows</code> controlam a navegação; em mobile retrato, a recomendação é manter o arraste e ocultar as setas com <code>noArrowsMobile</code>.</li>
          </ul>

          <SandboxExample title="Configuração responsiva" description="Base mínima para controlar quantidade por slide e ritmo de navegação da variante card." code={cardResponsiveCode}>
            {renderCardCarousel({
            ...cardArgs,
            cardVariant: 'post',
            cardsPerView: 3,
            cardsPerViewTablet: 2,
            cardsPerViewMobile: 1,
            gap: 16
          })}
          </SandboxExample>
        </SectionCard>

        <SectionCard title="Limitações e observações" description="A variante card organiza listas de cards, mas continua dependendo do contrato do componente Card e de datasets locais coerentes para uma experiência consistente.">
          <ul style={storyDocsStyles.list}>
            <li>Se <code>items</code> vier vazio, o componente mostra o empty state interno do carousel card.</li>
            <li>Com <code>showArrows</code> ou <code>showIndicators</code> ativos, o componente ainda pode ocultar esses controles quando existe apenas um slide.</li>
            <li>Gap fora da escala suportada é aproximado para o valor mais próximo previsto pela implementação.</li>
          </ul>
        </SectionCard>
      </DocsStoryLayout>;
  }
}`,...(Ce=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Se,Ve,Ae;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Card - Interativo',
  args: {
    variant: 'card',
    cardVariant: 'post',
    items: cardItemsPost,
    cardsPerView: 2,
    cardsPerViewTablet: 2,
    cardsPerViewMobile: 1,
    gap: 12,
    autoplay: false,
    autoplaySpeed: 5000,
    circular: true,
    enableSwipe: true,
    noArrowsMobile: true,
    showIndicators: true,
    showArrows: true
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    variant: {
      control: false,
      table: {
        disable: true
      }
    },
    items: {
      control: false,
      table: {
        disable: true
      }
    },
    cardVariant: {
      control: {
        type: 'select'
      },
      options: ['post', 'list', 'news', 'icon'],
      description: 'Força todos os cards a usarem a mesma variante visual.',
      table: {
        category: 'Conteudo'
      }
    },
    cardsPerView: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1
      },
      description: 'Número de cards por slide em desktop.',
      table: {
        category: 'Layout responsivo'
      }
    },
    cardsPerViewTablet: {
      control: {
        type: 'number',
        min: 1,
        max: 4,
        step: 1
      },
      description: 'Número de cards por slide em tablet.',
      table: {
        category: 'Layout responsivo'
      }
    },
    cardsPerViewMobile: {
      control: {
        type: 'number',
        min: 1,
        max: 2,
        step: 1
      },
      description: 'Número de cards por slide em mobile.',
      table: {
        category: 'Layout responsivo'
      }
    },
    gap: {
      control: {
        type: 'number',
        min: 0,
        max: 64,
        step: 2
      },
      description: 'Espaço entre cards em pixels antes da normalização interna.',
      table: {
        category: 'Layout responsivo'
      }
    },
    autoplay: {
      control: 'boolean',
      description: 'Liga ou desliga o autoplay entre grupos de cards.',
      table: {
        category: 'Comportamento'
      }
    },
    autoplaySpeed: {
      control: {
        type: 'number',
        min: 1000,
        max: 10000,
        step: 500
      },
      description: 'Intervalo do autoplay em milissegundos.',
      table: {
        category: 'Comportamento'
      }
    },
    circular: {
      control: 'boolean',
      description: 'Permite loop infinito entre os grupos de cards.',
      table: {
        category: 'Comportamento'
      }
    },
    enableSwipe: {
      control: 'boolean',
      description: 'Ativa navegação por swipe e arraste em dispositivos touch.',
      table: {
        category: 'Comportamento'
      }
    },
    noArrowsMobile: {
      control: 'boolean',
      description: 'No mobile retrato, esconde as setas e deixa a navegação por arraste.',
      table: {
        category: 'Navegacao'
      }
    },
    showIndicators: {
      control: 'boolean',
      description: 'Exibe ou oculta indicadores de slide.',
      table: {
        category: 'Navegacao'
      }
    },
    showArrows: {
      control: 'boolean',
      description: 'Exibe ou oculta setas laterais.',
      table: {
        category: 'Navegacao'
      }
    }
  },
  render: args => renderCardCarousel(args as CardStoryArgs)
}`,...(Ae=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};const pa=["DefaultDocs","DefaultInterativo","CardDocs","CardInterativo"];export{H as CardDocs,W as CardInterativo,Y as DefaultDocs,X as DefaultInterativo,pa as __namedExportsOrder,ua as default};
