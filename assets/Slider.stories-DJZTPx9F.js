import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-DyTKwKRb.js";import{D as ze,S as Re,s as g,a as z,b as F,c as D}from"./storyDocs-CoQtGjOG.js";import{B as Pe}from"./Button-DnfRrOli.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";function se(a){return Array.isArray(a)}function R(a,o,r){return Math.min(r,Math.max(o,a))}function Y(a){return Number(a.toFixed(10))}function qe(a,o){if(o<=0)return Math.round(a);const r=10**o;return Math.round(a*r)/r}function _e(a,o,r,t){if(t<=0)return R(a,o,r);if(Math.abs(r-a)<=t/2)return r;const l=o+Math.round((a-o)/t)*t;return R(Y(l),o,r)}function X(a,o,r,t,l,d){const u=R(a,o,r);return t?_e(u,o,r,l):R(Y(qe(u,d)),o,r)}function M(a,o,r){return r<=o?0:(a-o)/(r-o)*100}function Fe(a,o,r){return r<=o?o:o+a/100*(r-o)}function Te(a,o,r){const t=[];for(let l=a;l<=o+Number.EPSILON;l+=r)t.push(Y(l));return t.at(-1)!==o&&t.push(o),t.map((l,d)=>({value:l,label:String(l.toFixed(0)),percent:M(l,a,o),isEdge:d===0||d===t.length-1}))}function ve(a,o){return a<=o?[a,o]:[o,a]}function Ie(a,o,r,t,l,d){const u=(a==null?void 0:a[0])??o,j=(a==null?void 0:a[1])??r;return ve(X(u,o,r,t,l,d),X(j,o,r,t,l,d))}function S(a){const o=a.range===!0,r=a,t=a,{label:l,vertical:d=!1,markGap:u,snapping:j=!1,precision:k=0,min:p=0,max:x=100,className:ge,id:xe,disabled:m=!1,name:N}=a,he=v.useId().replace(/:/g,""),be=xe??`govrs-slider-${he}`,J=v.useRef(null),[P,O]=v.useState(null),Z=(x-p)/5,A=u&&u>0?u:Z>0?Z:1,fe=k>0?1/10**k:1,h=j?A:fe,ee=Te(p,x,A),y=a.value!==void 0,q=typeof r.value=="number"?r.value:void 0,E=se(t.value)?t.value:void 0,Se=typeof r.defaultValue=="number"?r.defaultValue:void 0,je=se(t.defaultValue)?t.defaultValue:void 0,ae=o?t.nameStart??(N?`${N}Start`:void 0):void 0,oe=o?t.nameEnd??(N?`${N}End`:void 0):void 0,w=n=>X(n??p,p,x,j,h,k),G=n=>Ie(n,p,x,j,h,k),[ye,L]=v.useState(()=>w(y?q:Se)),[Ve,H]=v.useState(()=>G(y?E:je));v.useEffect(()=>{if(!o){if(y){L(w(q));return}L(n=>w(n))}},[q,y,o,p,x,j,h,k]),v.useEffect(()=>{if(o){if(y){H(G(E));return}H(n=>G(n))}},[E==null?void 0:E[0],E==null?void 0:E[1],y,o,p,x,j,h,k]);const $=y?G(E):Ve,Ee=y?w(q):ye,Ce=["govrs-slider",d?"govrs-slider--vertical":"govrs-slider--horizontal",o?"govrs-slider--range":"govrs-slider--single",j?void 0:"govrs-slider--free",m?"govrs-slider--disabled":void 0,ge].filter(Boolean).join(" "),b=o?$[0]:Ee,V=o?$[1]:void 0,ne=o?M(b,p,x):0,Q=M(o?V:b,p,x),ke={"--govrs-slider-start":`${ne}%`,"--govrs-slider-end":`${Q}%`},U=n=>({"--govrs-slider-position":`${n}%`}),re=n=>{var i;const s=w(n);y||L(s),o||(i=r.onChange)==null||i.call(r,s)},B=n=>{var i;const s=G(n);y||H(s),o&&((i=t.onChange)==null||i.call(t,s))},W=(n,s)=>{if(!o){re(s);return}const[i,f]=$,c=w(s);if(n==="start"){B([Math.min(c,f),f]);return}B([i,Math.max(c,i)])},ie=(n,s)=>{var c;const i=(c=J.current)==null?void 0:c.getBoundingClientRect();if(!i)return null;const f=d?(s-i.top)/i.height*100:(n-i.left)/i.width*100;return Fe(R(f,0,100),p,x)},Ne=n=>{if(!o)return"single";const s=V??b;return Math.abs(n-b)<=Math.abs(n-s)?"start":"end"},te=(n,s,i)=>{if(m)return;const f=ie(s,i);f!=null&&W(n,f)},_=(n,s)=>{if(m)return;const i=Number(n);if(!Number.isNaN(i)){if(o){B(ve(s===0?i:b,s===1?i:V));return}re(i)}},we=n=>{if(m||n.button!==0)return;n.preventDefault();const s=ie(n.clientX,n.clientY);if(s==null)return;const i=Ne(s);O(i),W(i,s)},De=(n,s)=>{m||n.button!==0||(n.preventDefault(),n.stopPropagation(),n.currentTarget.focus(),O(s))},Ge=(n,s)=>{if(m)return;const i=s==="start"?b:s==="end"?V:b,f=j?A*2:h*10;let c=null;switch(n.key){case"ArrowLeft":c=i-h;break;case"ArrowRight":c=i+h;break;case"ArrowUp":c=d?i-h:i+h;break;case"ArrowDown":c=d?i+h:i-h;break;case"PageUp":c=i+f;break;case"PageDown":c=i-f;break;case"Home":c=p;break;case"End":c=x;break;default:c=null}c!=null&&(n.preventDefault(),W(s,c))};v.useEffect(()=>{if(!P||m)return;const n=i=>{i.preventDefault(),te(P,i.clientX,i.clientY)},s=()=>{O(null)};return window.addEventListener("pointermove",n),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s),()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s)}},[m,P,te]);const K=(n,s,i,f)=>e.jsx("span",{role:"slider",tabIndex:m?-1:0,className:"govrs-slider__thumb","data-active":P===n?"true":void 0,"aria-label":f,"aria-disabled":m||void 0,"aria-valuemin":p,"aria-valuemax":x,"aria-valuenow":s,"aria-orientation":d?"vertical":"horizontal",onPointerDown:c=>De(c,n),onKeyDown:c=>Ge(c,n),style:U(i)},n);return e.jsxs("div",{id:be,className:Ce,children:[l?e.jsx("span",{className:"govrs-slider__label",children:l}):null,d&&o?e.jsx("input",{type:"number",className:"govrs-slider__input",value:b,disabled:m,onChange:n=>_(n.target.value,0),min:p,max:x,step:h,"aria-label":"Valor inicial do intervalo"}):null,e.jsxs("div",{className:"govrs-slider__container",children:[!d&&o?e.jsx("input",{type:"number",className:"govrs-slider__input",value:b,disabled:m,onChange:n=>_(n.target.value,0),min:p,max:x,step:h,"aria-label":"Valor inicial do intervalo"}):null,e.jsx("div",{className:"govrs-slider__track-container",children:e.jsxs("div",{ref:J,className:"govrs-slider__track",onPointerDown:we,"aria-disabled":m||void 0,children:[e.jsx("span",{className:"govrs-slider__rail","aria-hidden":"true"}),e.jsx("span",{className:"govrs-slider__range-bar",style:ke,"aria-hidden":"true"}),j?e.jsx("span",{className:"govrs-slider__steps","aria-hidden":"true",children:ee.map(n=>n.isEdge?null:e.jsx("span",{className:"govrs-slider__step",style:U(n.percent)},`step-${n.value}`))}):null,e.jsx("span",{className:"govrs-slider__marks","aria-hidden":"true",children:ee.map(n=>e.jsx("span",{className:"govrs-slider__mark",style:U(n.percent),children:n.label},`mark-${n.value}`))}),e.jsx("span",{className:"govrs-slider__thumbs","aria-hidden":"true",children:o?[K("start",b,ne,"Valor inicial do intervalo"),K("end",V,Q,"Valor final do intervalo")]:K("single",b,Q,"Valor atual")})]})}),d?null:e.jsx("input",{type:"number",className:"govrs-slider__input",value:V!==void 0?V:b,disabled:m,onChange:n=>_(n.target.value,o?1:void 0),min:p,max:x,step:h,"aria-label":o?"Valor final do intervalo":"Valor atual"})]}),d?e.jsx("input",{type:"number",className:"govrs-slider__input",value:V!==void 0?V:b,disabled:m,onChange:n=>_(n.target.value,o?1:void 0),min:p,max:x,step:h,"aria-label":o?"Valor final do intervalo":"Valor atual"}):null,!o&&N?e.jsx("input",{type:"hidden",name:N,value:String(b),disabled:m}):null,o&&ae?e.jsx("input",{type:"hidden",name:ae,value:String(b),disabled:m}):null,o&&oe?e.jsx("input",{type:"hidden",name:oe,value:String(V),disabled:m}):null]})}S.__docgenInfo={description:"",methods:[],displayName:"Slider"};const Me=["single","range","horizontal","vertical"],Oe=[{title:"Quando usar",text:"Quando a interface precisa selecionar um valor único ou um intervalo com leitura direta, marcas visíveis e possibilidade de layout horizontal ou vertical."},{title:"Melhor exploração",text:"Use o story 'Interativo' para alternar range, vertical, snapping, precision e limites. O story 'Documentação' resume os formatos e o contrato do componente."},{title:"Comportamento",text:"markGap define as marcas visíveis e também o step quando snapping estiver ativo. Quando snapping estiver desligado, precision equivale à quantidade de dígitos após a vírgula permitida no valor."}],Ae=`<Slider
  label="Valor único"
  value={40}
  onChange={setValue}
  min={0}
  max={100}
  markGap={20}
/>

<Slider
  label="Faixa selecionada"
  range
  value={[20, 80]}
  onChange={setRangeValue}
  min={0}
  max={100}
  markGap={20}
/>

<Slider
  label="Escala vertical"
  vertical
  value={60}
  onChange={setVerticalValue}
/>`,Le=`<Slider
  label="Com snapping"
  value={30}
  onChange={setSteppedValue}
  markGap={10}
  snapping
/>

<Slider
  label="Movimento livre"
  range
  value={[2.5, 7.8]}
  onChange={setPreciseRange}
  min={0}
  max={10}
  markGap={2}
  precision={1}
/>
`,He=`const [selectedRange, setSelectedRange] = useState<[number, number]>([15, 65])

<Slider
  label="Faixa controlada"
  range
  value={selectedRange}
  onChange={setSelectedRange}
  min={0}
  max={100}
  markGap={10}
  snapping
/>
`,$e=`<form onSubmit={handleSubmit}>
  <Slider
    label="Volume"
    name="volume"
    defaultValue={40}
    min={0}
    max={100}
    markGap={20}
  />

  <Slider
    label="Faixa de preço"
    range
    name="price"
    defaultValue={[20, 80]}
    min={0}
    max={100}
    markGap={20}
  />

  <Button type="submit">Enviar</Button>
</form>`;function C(a,o=0){return Array.isArray(a)?`[${a[0].toFixed(o)}, ${a[1].toFixed(o)}]`:a.toFixed(o)}function Qe(a){const o=a.min??0,r=a.max??100;return a.range?[o,r]:o}function Ue(a){return[a.range?"range":"single",a.vertical?"vertical":"horizontal",String(a.min??0),String(a.max??100),String(a.markGap??"auto"),a.snapping?"snapping":"free",String(a.precision??0)].join("|")}function Be(){const[a,o]=v.useState(40),[r,t]=v.useState([20,80]),[l,d]=v.useState(60),[u,j]=v.useState([25,75]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs(D,{label:"Horizontal simples",children:[e.jsx(S,{label:"Valor único",value:a,onChange:o,min:0,max:100,markGap:20}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",C(a)]})]}),e.jsxs(D,{label:"Horizontal range",children:[e.jsx(S,{label:"Faixa selecionada",range:!0,value:r,onChange:t,min:0,max:100,markGap:20}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Faixa atual:"})," ",C(r)]})]}),e.jsxs("div",{style:g.cardGrid,children:[e.jsxs(D,{label:"Vertical simples",children:[e.jsx("div",{style:{minHeight:420,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"100%",maxWidth:220},children:e.jsx(S,{label:"Escala vertical",vertical:!0,value:l,onChange:d,min:0,max:100,markGap:20})})}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",C(l)]})]}),e.jsxs(D,{label:"Vertical range",children:[e.jsx("div",{style:{minHeight:420,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:"100%",maxWidth:220},children:e.jsx(S,{label:"Faixa vertical",range:!0,vertical:!0,value:u,onChange:j,min:0,max:100,markGap:20})})}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Faixa atual:"})," ",C(u)]})]})]})]})}function We(){const[a,o]=v.useState(30),[r,t]=v.useState([2.5,7.8]);return e.jsxs("div",{style:g.cardGrid,children:[e.jsxs(D,{label:"Snapping ativo",children:[e.jsx(S,{label:"Com snapping",value:a,onChange:o,min:0,max:100,markGap:10,snapping:!0}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",C(a)]})]}),e.jsxs(D,{label:"Movimento livre com precisão",children:[e.jsx(S,{label:"Intervalo com casas decimais",range:!0,value:r,onChange:t,min:0,max:10,markGap:2,precision:1}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Faixa atual:"})," ",C(r,1)]})]})]})}function Ke(){const[a,o]=v.useState([15,65]);return e.jsxs("div",{style:{display:"grid",gap:12,maxWidth:720},children:[e.jsx(S,{label:"Faixa controlada",range:!0,value:a,onChange:o,min:0,max:100,markGap:10,snapping:!0}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Valor controlado:"})," ",C(a)]})]})}function Xe(){const[a,o]=v.useState("Nenhum envio ainda");return e.jsxs("form",{style:{display:"grid",gap:16,maxWidth:720},onSubmit:r=>{r.preventDefault();const t=new FormData(r.currentTarget),l=Array.from(t.entries()).map(([d,u])=>`${d}=${String(u)}`).join(" | ");o(l||"Nenhum campo enviado")},children:[e.jsx(S,{label:"Volume",name:"volume",defaultValue:40,min:0,max:100,markGap:20}),e.jsx(S,{label:"Faixa de preço",range:!0,name:"price",defaultValue:[20,80],min:0,max:100,markGap:20}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsx(Pe,{type:"submit",children:"Enviar"})}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Último submit:"})," ",a]})]})}function Ye(a){const[o,r]=v.useState(()=>Qe(a)),t=a.precision??0,l=a.min??0,d=a.max??100;return e.jsxs("div",{style:{...g.previewStage,padding:16},children:[e.jsx("div",{style:{width:"100%",maxWidth:a.vertical?240:760,minHeight:a.vertical?420:void 0,display:"flex",alignItems:"center",justifyContent:"center"},children:a.range?e.jsx(S,{label:a.label,range:!0,value:Array.isArray(o)?o:[l,d],onChange:u=>r(u),min:l,max:d,markGap:a.markGap,snapping:a.snapping,precision:t,vertical:a.vertical,disabled:a.disabled,name:a.name,nameStart:a.nameStart,nameEnd:a.nameEnd}):e.jsx(S,{label:a.label,value:typeof o=="number"?o:l,onChange:u=>r(u),min:l,max:d,markGap:a.markGap,snapping:a.snapping,precision:t,vertical:a.vertical,disabled:a.disabled,name:a.name})}),e.jsxs("p",{style:g.statText,children:[e.jsx("strong",{children:"Valor atual:"})," ",C(o,t)]})]})}const ra={title:"Formulários/Slider",component:S,args:{label:"Controle de valores",min:0,max:100,markGap:20,snapping:!1,precision:0,range:!1,vertical:!1,disabled:!1},parameters:{layout:"padded",controls:{expanded:!0,sort:"requiredFirst"}}},T={name:"Documentação",parameters:{controls:{disable:!0}},render:()=>e.jsxs(ze,{children:[e.jsx(Re,{eyebrow:"Documentação guiada",title:e.jsx("h3",{style:g.heroTitle,children:"Slider"}),description:e.jsxs(e.Fragment,{children:["O componente ",e.jsx("code",{children:"Slider"})," permite selecionar um valor único ou um intervalo com marcas visíveis, inputs numéricos sincronizados e suporte às orientações horizontal e vertical."]}),variantTags:Me,stats:Oe}),e.jsxs(z,{title:"Estrutura e formatos",description:"O mesmo contrato cobre valor único, faixa de valores e mudança de orientação. Os inputs numéricos acompanham o trilho para facilitar leitura direta e ajuste preciso.",children:[e.jsxs("ul",{style:g.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"range"})," alterna entre um handle único e dois handles para intervalo."]}),e.jsxs("li",{children:[e.jsx("code",{children:"vertical"})," reorganiza os inputs e usa a altura do container para apresentar o trilho."]}),e.jsxs("li",{children:[e.jsx("code",{children:"min"})," e ",e.jsx("code",{children:"max"})," definem os limites aceitos pelo trilho e pelos inputs."]}),e.jsxs("li",{children:[e.jsx("code",{children:"markGap"})," distribui as marcas visíveis ao longo da escala."]})]}),e.jsx(F,{title:"Visão geral dos formatos",description:"Comparativo dos quatro arranjos principais: simples e range, horizontais e verticais.",code:Ae,notes:["No modo vertical, a altura útil é controlada pelo container pai.","No modo range, os inputs são mantidos em ordem crescente mesmo quando o valor inicial ultrapassa o final."],children:e.jsx(Be,{})})]}),e.jsxs(z,{title:"Marks, snapping e precisão",description:"As marcas sempre seguem a escala configurada. Quando snapping estiver ativo, o handle passa a respeitar exatamente o intervalo definido em markGap; quando estiver desativado, precision controla o passo mínimo do movimento livre e equivale à quantidade de dígitos após a vírgula aceita pelo valor final.",children:[e.jsxs("ul",{style:g.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"precision=0"})," limita o slider a valores inteiros."]}),e.jsxs("li",{children:[e.jsx("code",{children:"precision=1"})," permite um dígito após a vírgula, como ",e.jsx("code",{children:"2,5"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"precision=2"})," permite dois dígitos após a vírgula, como ",e.jsx("code",{children:"2,57"}),"."]}),e.jsxs("li",{children:["Se ",e.jsx("code",{children:"snapping"})," estiver ativo, quem passa a mandar no avanço é ",e.jsx("code",{children:"markGap"}),", não ",e.jsx("code",{children:"precision"}),"."]})]}),e.jsx(F,{title:"Passos visíveis e movimento livre",description:"Exemplo lado a lado para validar a diferença entre arraste em degraus fixos e movimento livre com controle explícito da quantidade de dígitos após a vírgula.",code:Le,notes:["Com snapping ativo, o valor só avança nos degraus calculados a partir de markGap.","Com movimento livre, precision define o menor incremento aceito pelo slider e a quantidade de dígitos após a vírgula no valor retornado.","Exemplo: precision=1 permite valores como 2,5; precision=2 permite valores como 2,57."],children:e.jsx(We,{})})]}),e.jsx(z,{title:"Uso controlado",description:"O Slider segue o padrão controlado do React: value representa o estado atual e onChange devolve o próximo valor numérico ou o próximo intervalo.",children:e.jsx(F,{title:"Sincronização com estado externo",description:"Esse é o formato recomendado quando o valor selecionado precisa alimentar filtros, formulários ou indicadores em tempo real.",code:He,notes:["Para range, onChange retorna uma tupla no formato [início, fim].","Para valor único, onChange retorna apenas um número."],children:e.jsx(Ke,{})})}),e.jsxs(z,{title:"Submit nativo",description:"Quando o slider precisa participar diretamente do submit HTML, use name no modo simples e name, nameStart ou nameEnd no modo range. O componente serializa os valores atuais em hidden inputs para que o FormData enxergue esses campos sem depender de estado externo.",children:[e.jsxs("ul",{style:g.list,children:[e.jsxs("li",{children:[e.jsx("code",{children:"name"})," envia o valor no modo simples."]}),e.jsxs("li",{children:["No modo range, ",e.jsx("code",{children:"nameStart"})," e ",e.jsx("code",{children:"nameEnd"})," podem nomear os extremos explicitamente."]}),e.jsxs("li",{children:["Se o range receber apenas ",e.jsx("code",{children:"name"}),", o componente deriva ",e.jsx("code",{children:"<name>Start"})," e ",e.jsx("code",{children:"<name>End"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"defaultValue"})," permite usar o slider em formulários com submit nativo sem precisar controlar o valor por React."]})]}),e.jsx(F,{title:"FormData sem estado externo",description:"Este exemplo mostra o slider participando de um submit nativo de formulário. Os valores são serializados como campos reais do FormData usando hidden inputs sincronizados pelo próprio componente.",code:$e,notes:['No exemplo de range, name="price" gera os campos priceStart e priceEnd automaticamente.',"Se preferir nomes diferentes para cada extremo, use nameStart e nameEnd explicitamente."],children:e.jsx(Xe,{})})]}),e.jsx(z,{title:"Dimensionamento",description:"O componente ocupa toda a largura disponível no modo horizontal. No modo vertical, a leitura fica mais confortável quando o container pai reserva altura suficiente para acomodar trilho, marcas e inputs.",children:e.jsxs("ul",{style:g.list,children:[e.jsx("li",{children:"Use containers largos para escalas horizontais com muitas marcas."}),e.jsxs("li",{children:["Reserve altura adicional quando ",e.jsx("code",{children:"vertical"})," estiver ativo para evitar sobreposição visual."]}),e.jsxs("li",{children:["Quando ",e.jsx("code",{children:"markGap"})," não for informado, o componente distribui a escala em cinco intervalos."]})]})})]})},I={name:"Interativo",argTypes:{modoContraste:{control:"boolean",description:"Visualiza o componente no modo de alto contraste.",table:{category:"Acessibilidade"}},label:{control:"text",description:"Rótulo exibido acima do controle.",table:{category:"Conteúdo"}},min:{control:"number",description:"Valor mínimo aceito pelo slider.",table:{category:"Escala"}},max:{control:"number",description:"Valor máximo aceito pelo slider.",table:{category:"Escala"}},markGap:{control:"number",description:"Espaçamento entre as marcas visíveis; também vira o step quando snapping estiver ativo.",table:{category:"Escala"}},snapping:{control:"boolean",description:"Restringe o movimento do handle aos degraus calculados por markGap.",table:{category:"Comportamento"}},precision:{control:"number",description:"Equivale à quantidade de dígitos após a vírgula aceita no modo de movimento livre. Ex.: 0 = inteiro, 1 = 0,1, 2 = 0,01.",table:{category:"Comportamento"}},disabled:{control:"boolean",description:"Desabilita os inputs visíveis, o arraste, a navegação por teclado e a serialização do campo no submit nativo.",table:{category:"Estado"}},name:{control:"text",description:"Nome usado no submit nativo; no range, serve como base para os campos derivados Start e End quando nameStart e nameEnd não forem informados.",table:{category:"Formulário"}},nameStart:{control:"text",description:"Nome explícito do valor inicial no submit nativo para sliders em range.",table:{category:"Formulário"}},nameEnd:{control:"text",description:"Nome explícito do valor final no submit nativo para sliders em range.",table:{category:"Formulário"}},range:{control:"boolean",description:"Ativa dois handles para seleção de intervalo.",table:{category:"Variação"}},vertical:{control:"boolean",description:"Muda a orientação do trilho para vertical.",table:{category:"Layout"}},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onChange:{table:{disable:!0}},className:{table:{disable:!0}},id:{table:{disable:!0}}},render:a=>e.jsx(Ye,{label:typeof a.label=="string"?a.label:"Controle de valores",min:a.min,max:a.max,markGap:a.markGap,snapping:a.snapping,precision:a.precision,range:a.range,vertical:a.vertical},Ue(a))};var le,de,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Documentação',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Documentação guiada" title={<h3 style={storyDocsStyles.heroTitle}>Slider</h3>} description={<>
            O componente <code>Slider</code> permite selecionar um valor único ou
            um intervalo com marcas visíveis, inputs numéricos sincronizados e
            suporte às orientações horizontal e vertical.
          </>} variantTags={docsVariantTags} stats={docsHeroStats} />

      <SectionCard title="Estrutura e formatos" description="O mesmo contrato cobre valor único, faixa de valores e mudança de orientação. Os inputs numéricos acompanham o trilho para facilitar leitura direta e ajuste preciso.">
        <ul style={storyDocsStyles.list}>
          <li><code>range</code> alterna entre um handle único e dois handles para intervalo.</li>
          <li><code>vertical</code> reorganiza os inputs e usa a altura do container para apresentar o trilho.</li>
          <li><code>min</code> e <code>max</code> definem os limites aceitos pelo trilho e pelos inputs.</li>
          <li><code>markGap</code> distribui as marcas visíveis ao longo da escala.</li>
        </ul>

        <SandboxExample title="Visão geral dos formatos" description="Comparativo dos quatro arranjos principais: simples e range, horizontais e verticais." code={overviewExampleCode} notes={['No modo vertical, a altura útil é controlada pelo container pai.', 'No modo range, os inputs são mantidos em ordem crescente mesmo quando o valor inicial ultrapassa o final.']}>
          <SliderOverviewPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Marks, snapping e precisão" description="As marcas sempre seguem a escala configurada. Quando snapping estiver ativo, o handle passa a respeitar exatamente o intervalo definido em markGap; quando estiver desativado, precision controla o passo mínimo do movimento livre e equivale à quantidade de dígitos após a vírgula aceita pelo valor final.">
        <ul style={storyDocsStyles.list}>
          <li><code>precision=0</code> limita o slider a valores inteiros.</li>
          <li><code>precision=1</code> permite um dígito após a vírgula, como <code>2,5</code>.</li>
          <li><code>precision=2</code> permite dois dígitos após a vírgula, como <code>2,57</code>.</li>
          <li>Se <code>snapping</code> estiver ativo, quem passa a mandar no avanço é <code>markGap</code>, não <code>precision</code>.</li>
        </ul>

        <SandboxExample title="Passos visíveis e movimento livre" description="Exemplo lado a lado para validar a diferença entre arraste em degraus fixos e movimento livre com controle explícito da quantidade de dígitos após a vírgula." code={precisionExampleCode} notes={['Com snapping ativo, o valor só avança nos degraus calculados a partir de markGap.', 'Com movimento livre, precision define o menor incremento aceito pelo slider e a quantidade de dígitos após a vírgula no valor retornado.', 'Exemplo: precision=1 permite valores como 2,5; precision=2 permite valores como 2,57.']}>
          <SliderPrecisionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Uso controlado" description="O Slider segue o padrão controlado do React: value representa o estado atual e onChange devolve o próximo valor numérico ou o próximo intervalo.">
        <SandboxExample title="Sincronização com estado externo" description="Esse é o formato recomendado quando o valor selecionado precisa alimentar filtros, formulários ou indicadores em tempo real." code={controlledExampleCode} notes={['Para range, onChange retorna uma tupla no formato [início, fim].', 'Para valor único, onChange retorna apenas um número.']}>
          <SliderControlledPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Submit nativo" description="Quando o slider precisa participar diretamente do submit HTML, use name no modo simples e name, nameStart ou nameEnd no modo range. O componente serializa os valores atuais em hidden inputs para que o FormData enxergue esses campos sem depender de estado externo.">
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> envia o valor no modo simples.</li>
          <li>No modo range, <code>nameStart</code> e <code>nameEnd</code> podem nomear os extremos explicitamente.</li>
          <li>Se o range receber apenas <code>name</code>, o componente deriva <code>{'<name>Start'}</code> e <code>{'<name>End'}</code>.</li>
          <li><code>defaultValue</code> permite usar o slider em formulários com submit nativo sem precisar controlar o valor por React.</li>
        </ul>

        <SandboxExample title="FormData sem estado externo" description="Este exemplo mostra o slider participando de um submit nativo de formulário. Os valores são serializados como campos reais do FormData usando hidden inputs sincronizados pelo próprio componente." code={nativeSubmitExampleCode} notes={['No exemplo de range, name="price" gera os campos priceStart e priceEnd automaticamente.', 'Se preferir nomes diferentes para cada extremo, use nameStart e nameEnd explicitamente.']}>
          <SliderNativeSubmitPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard title="Dimensionamento" description="O componente ocupa toda a largura disponível no modo horizontal. No modo vertical, a leitura fica mais confortável quando o container pai reserva altura suficiente para acomodar trilho, marcas e inputs.">
        <ul style={storyDocsStyles.list}>
          <li>Use containers largos para escalas horizontais com muitas marcas.</li>
          <li>Reserve altura adicional quando <code>vertical</code> estiver ativo para evitar sobreposição visual.</li>
          <li>Quando <code>markGap</code> não for informado, o componente distribui a escala em cinco intervalos.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ue,pe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: {
        category: 'Acessibilidade'
      }
    },
    label: {
      control: 'text',
      description: 'Rótulo exibido acima do controle.',
      table: {
        category: 'Conteúdo'
      }
    },
    min: {
      control: 'number',
      description: 'Valor mínimo aceito pelo slider.',
      table: {
        category: 'Escala'
      }
    },
    max: {
      control: 'number',
      description: 'Valor máximo aceito pelo slider.',
      table: {
        category: 'Escala'
      }
    },
    markGap: {
      control: 'number',
      description: 'Espaçamento entre as marcas visíveis; também vira o step quando snapping estiver ativo.',
      table: {
        category: 'Escala'
      }
    },
    snapping: {
      control: 'boolean',
      description: 'Restringe o movimento do handle aos degraus calculados por markGap.',
      table: {
        category: 'Comportamento'
      }
    },
    precision: {
      control: 'number',
      description: 'Equivale à quantidade de dígitos após a vírgula aceita no modo de movimento livre. Ex.: 0 = inteiro, 1 = 0,1, 2 = 0,01.',
      table: {
        category: 'Comportamento'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita os inputs visíveis, o arraste, a navegação por teclado e a serialização do campo no submit nativo.',
      table: {
        category: 'Estado'
      }
    },
    name: {
      control: 'text',
      description: 'Nome usado no submit nativo; no range, serve como base para os campos derivados Start e End quando nameStart e nameEnd não forem informados.',
      table: {
        category: 'Formulário'
      }
    },
    nameStart: {
      control: 'text',
      description: 'Nome explícito do valor inicial no submit nativo para sliders em range.',
      table: {
        category: 'Formulário'
      }
    },
    nameEnd: {
      control: 'text',
      description: 'Nome explícito do valor final no submit nativo para sliders em range.',
      table: {
        category: 'Formulário'
      }
    },
    range: {
      control: 'boolean',
      description: 'Ativa dois handles para seleção de intervalo.',
      table: {
        category: 'Variação'
      }
    },
    vertical: {
      control: 'boolean',
      description: 'Muda a orientação do trilho para vertical.',
      table: {
        category: 'Layout'
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    id: {
      table: {
        disable: true
      }
    }
  },
  render: args => <SliderInteractivePreview key={getInteractiveStoryKey(args)} label={typeof args.label === 'string' ? args.label : 'Controle de valores'} min={args.min} max={args.max} markGap={args.markGap} snapping={args.snapping} precision={args.precision} range={args.range} vertical={args.vertical} />
}`,...(pe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const ia=["SliderDocumentacao","SliderInterativo"];export{T as SliderDocumentacao,I as SliderInterativo,ia as __namedExportsOrder,ra as default};
