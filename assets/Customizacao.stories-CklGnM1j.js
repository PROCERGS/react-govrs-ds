import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{D as l,S as m,s,a}from"./storyDocs-CoQtGjOG.js";import{B as p}from"./Button-DnfRrOli.js";import{c as e}from"./colors-LWidNtQl.js";/* empty css                       *//* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r({code:i}){return o.jsx("div",{style:s.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:i})})})}const u=`/* Cores base — valores padrão dos tokens CSS (:root) */

/* Brand */
--govrs-color-brand-primary: ${e.brand.primary.toLowerCase()};
--govrs-color-brand-primary-strong: ${e.brand.primaryStrong.toLowerCase()};
--govrs-color-brand-primary-hover: ${e.brand.primaryHover.toLowerCase()};
--govrs-color-brand-primary-soft: ${e.brand.primarySoft.toLowerCase()};

/* Texto */
--govrs-color-text-primary: ${e.text.primary.toLowerCase()};
--govrs-color-text-secondary: ${e.text.secondary.toLowerCase()};
--govrs-color-text-muted: ${e.text.muted.toLowerCase()};
--govrs-color-text-subtle: ${e.text.subtle.toLowerCase()};
--govrs-color-text-placeholder: ${e.text.placeholder.toLowerCase()};
--govrs-color-text-inverse: ${e.text.inverse.toLowerCase()};

/* Superfície e borda */
--govrs-color-surface-base: ${e.neutral.surfaceBase.toLowerCase()};
--govrs-color-surface-muted: ${e.neutral.surfaceMuted.toLowerCase()};
--govrs-color-border-default: ${e.neutral.borderDefault.toLowerCase()};

/* Interação */
--govrs-color-interactive-link: ${e.interactive.link.toLowerCase()};
--govrs-color-focus: ${e.interactive.focus.toLowerCase()};`,g=`/* O componente já carrega os tokens e o mapa de contraste.
   Este é um override opcional do tema consumidor. */
:root:is(.high-contrast, [data-govrs-contrast='high']) {
  /* Superfície principal, texto, ícones e bordas */
  --govrs-color-contrast-background: #101010;
  --govrs-color-contrast-foreground: #ffffff;
  --govrs-color-contrast-muted: #ffffff;
  --govrs-color-contrast-icon: #ffffff;
  --govrs-color-contrast-border: #ffffff;

  /* Botões e controles no fundo escuro */
  --govrs-color-contrast-control-background: #101010;
  --govrs-color-contrast-control-foreground: #ffffff;
  --govrs-color-contrast-control-border: #ffffff;

  /* Campos e popovers invertidos */
  --govrs-color-contrast-field-background: #ffffff;
  --govrs-color-contrast-field-foreground: #000000;
  --govrs-color-contrast-field-border: #000000;
  --govrs-color-contrast-popover-background: #ffffff;
  --govrs-color-contrast-popover-foreground: #000000;
  --govrs-color-contrast-popover-border: #000000;
}`,v=`/* A BarraAcessibilidade faz isso automaticamente.
   Para uma ativação controlada em React, use o hook do DS. */
import { useHighContrast } from '@procergs/react-govrs-ds';

function Exemplo() {
  const { setEnabled } = useHighContrast();

  return <button onClick={() => setEnabled(true)}>Ativar contraste</button>;
}`,f=`/* tema-global.css — carregue este CSS depois do bundle do DS */

:root {
  /* Cores: afeta body, headers-*, paragraph-*, componentes */
  --govrs-color-text-primary: #2a123d;
  --govrs-color-text-muted: #5b3c70;
  --govrs-color-brand-primary: #6d28d9;

  /* Espaçamento: afeta margin/padding/gap que usam --govrs-space-* */
  --govrs-space-3: 0.75rem;
  --govrs-space-4: 1.25rem;
  --govrs-space-6: 1.75rem;

  /* Tipografia */
  --govrs-font-size-body-md: 1.0625rem;
  --govrs-line-height-body-sm: 1.625rem;

  /* Raio e borda */
  --govrs-radius-sm: 0.5rem;
  --govrs-border-width-sm: 1px;
}`,b=`/* tema-editorial.css — customização limitada a este bloco */
.exemplo-botao-editorial {
  --govrs-color-brand-primary: #6d28d9;
  --govrs-color-brand-primary-hover: #5b21b6;
  --govrs-color-text-inverse: #ffffff;
  --govrs-radius-sm: 999px;
}

/* O Button dentro do bloco usa os tokens acima.
   Outros componentes e o restante do site não são alterados. */`,x={display:"flex",alignItems:"center",padding:"1.5rem",border:"1px solid var(--govrs-color-border-default)",borderRadius:"var(--govrs-radius-md)",background:"var(--govrs-color-surface-muted)","--govrs-color-brand-primary":"#6d28d9","--govrs-color-brand-primary-hover":"#5b21b6","--govrs-color-text-inverse":"#ffffff","--govrs-radius-sm":"999px"},h=`/* tema-portal.css — override por classe, sem alterar o pacote */

/* Aplique a classe no html ou em um wrapper do layout */
.tema-portal {
  --govrs-color-text-primary: #0d3d1f;
  --govrs-color-text-secondary: #1a5c34;
  --govrs-space-4: 1.5rem;
  --govrs-font-size-body-md: 1rem;
}

/* Fundações e componentes dentro do escopo herdam os novos valores */
.tema-portal .headers-12 h1,
.tema-portal .paragraph-12-long,
.tema-portal .govrs-button {
  /* não é obrigatório redeclarar cor/tamanho —
     basta que o ancestral tenha redefinido as variáveis */
}`,y=`<!-- index.html ou layout raiz do tema Volto/Plone -->
<html class="tema-portal">
  <body>
    <h1 class="headers-12">Título</h1>
    <p class="paragraph-12-long">Parágrafo</p>
  </body>
</html>`,C=`/* Sobrescrever só cores em uma seção */
.secao-destaque {
  --govrs-color-text-primary: #135428;
  --govrs-color-text-muted: #4a7560;
  --govrs-color-surface-base: #f8f8f8;
  background: var(--govrs-color-surface-base);
}

.secao-destaque .headers-12 h2 {
  color: var(--govrs-color-text-primary);
}

.secao-destaque .paragraph-12-long {
  color: var(--govrs-color-text-muted);
}`,S=`/* Sobrescrever margin, padding e gap via tokens de espaço */
.bloco-editorial {
  --govrs-space-2: 0.375rem;
  --govrs-space-3: 0.875rem;
  --govrs-space-4: 1.5rem;
  padding: var(--govrs-space-4);
}

/* headers e paragraphs já usam --govrs-space-* internamente */
.bloco-editorial .headers-12 h1 {
  margin-bottom: var(--govrs-space-3);
}

.bloco-editorial .paragraph-12-long {
  margin-bottom: var(--govrs-space-4);
}`,k=`/* Sobrescrever escala tipográfica em um bloco */
.bloco-legislacao {
  --govrs-font-size-heading-3xl: 2.25rem;
  --govrs-line-height-heading-3xl: 3.25rem;
  --govrs-font-size-body-md: 1.125rem;
  --govrs-line-height-body-sm: 1.75rem;
}

/* classes da fundação consomem as variáveis automaticamente */
.bloco-legislacao .headers-12 h1 { }
.bloco-legislacao .paragraph-12-long { }`,j=`/* Raio, borda e sombra em cards ou formulários locais */
.painel-formulario {
  --govrs-radius-sm: 0.5rem;
  --govrs-border-width-sm: 2px;
  --govrs-color-border-default: #cccccc;
  --govrs-shadow-card: 0 2px 12px rgba(4, 41, 15, 0.08);
}

.painel-formulario .govrs-input,
.painel-formulario .govrs-card {
  border-radius: var(--govrs-radius-sm);
  box-shadow: var(--govrs-shadow-card);
}`,w=`/* Referência rápida de famílias customizáveis */

/* Cores      */ --govrs-color-*
/* Espaço     */ --govrs-space-*     (margin, padding, gap)
/* Tipografia */ --govrs-font-size-*, --govrs-line-height-*, --govrs-font-weight-*
/* Raio       */ --govrs-radius-*
/* Borda      */ --govrs-border-width-*, --govrs-color-border-*
/* Sombra     */ --govrs-shadow-*
/* Layout     */ --govrs-layout-container-header-max-width (Header e Footer)
/* Camadas    */ --govrs-z-index-*   (header, navigation, overlay, modal, toast)
/* Motion     */ --govrs-duration-*, --govrs-easing-*`,P={title:"Customização",id:"customizacao",parameters:{layout:"padded"}},t={name:"Customização",parameters:{docsOnly:!0},render:()=>o.jsxs(l,{children:[o.jsx(m,{eyebrow:"Tokens e tema",title:o.jsx("h3",{style:s.heroTitle,children:"Customização"}),description:"Referência dos tokens CSS do design system e exemplos de como sobrescrevê-los no projeto consumidor — globalmente ou por classe — sem editar o pacote. Componentes carregam automaticamente os tokens necessários; Foundation é opcional e acrescenta estilos globais."}),o.jsx(a,{title:"Cores base do projeto",description:"Valores padrão disponibilizados pelos componentes e pela entrada tokens em :root. Use como referência ao montar overrides no CSS do tema.",children:o.jsx(r,{code:u})}),o.jsxs(a,{title:"Tokens do modo de alto contraste",description:"Quando a Barra de Acessibilidade ativa o contraste, ela marca o html e os componentes passam automaticamente a consumir os tokens de contraste. Personalize os tokens fonte --govrs-color-contrast-*; o DS remapeia os tokens semânticos e locais dos componentes.",children:[o.jsx(r,{code:g}),o.jsx("p",{style:s.statText,children:"Ativação programática, quando necessária:"}),o.jsx(r,{code:v}),o.jsxs("ul",{style:s.list,children:[o.jsxs("li",{children:["Use ",o.jsx("code",{children:":root:is(.high-contrast, [data-govrs-contrast='high'])"})," no override. Ele tem a mesma prioridade do mapa interno do DS e mantém a customização estável mesmo quando componentes carregam depois."]}),o.jsx("li",{children:"Preserve os pares de background, foreground e border para cada superfície. O DS não calcula essas combinações automaticamente; a responsabilidade de manter contraste suficiente é do tema consumidor."}),o.jsx("li",{children:"Imagens, vídeos, mapas e demais mídias não são recoloridos. Ícones funcionais seguem o token de ícone, exceto o ícone preto em campos de busca com superfície branca."})]})]}),o.jsx(a,{title:"Override no projeto inteiro",description:"Redefina variáveis em :root no CSS do tema. Isso afeta componentes e Foundations que dependem desses tokens; carregue o CSS do tema depois do bundle do DS.",children:o.jsx(r,{code:f})}),o.jsxs(a,{title:"Customização pontual de componente",description:"Aplique tokens em um wrapper para alterar somente os componentes dentro dele. A demonstração abaixo personaliza apenas este Button, sem afetar os demais Buttons ou o tema global.",children:[o.jsx(r,{code:b}),o.jsx("p",{style:s.statText,children:"Resultado:"}),o.jsx("div",{className:"exemplo-botao-editorial",style:x,children:o.jsx(p,{children:"Publicar conteúdo"})})]}),o.jsxs(a,{title:"Override por classe",description:"Para customizar só um portal, tema ou seção, declare as variáveis na classe e aplique-a no html ou em um wrapper. Filhos com classes da fundação ou componentes do DS herdam os novos valores.",children:[o.jsx("p",{style:s.statText,children:"CSS da classe:"}),o.jsx(r,{code:h}),o.jsx("p",{style:s.statText,children:"Uso no markup:"}),o.jsx(r,{code:y})]}),o.jsxs(a,{title:"Exemplos por tipo de token",description:"Mesmo padrão para cores, espaçamento, tipografia e demais famílias: redefina --govrs-* no escopo desejado e use var() nas regras locais quando necessário.",children:[o.jsx("p",{style:s.statText,children:"Cores"}),o.jsx(r,{code:C}),o.jsx("p",{style:s.statText,children:"Espaçamento (margin, padding, gap)"}),o.jsx(r,{code:S}),o.jsx("p",{style:s.statText,children:"Tipografia"}),o.jsx(r,{code:k}),o.jsx("p",{style:s.statText,children:"Raio, borda e sombra"}),o.jsx(r,{code:j})]}),o.jsxs(a,{title:"Famílias de variáveis disponíveis",description:"Qualquer token --govrs-* exposto pelo runtime tokens pode ser sobrescrito da mesma forma.",children:[o.jsx(r,{code:w}),o.jsxs("ul",{style:s.list,children:[o.jsxs("li",{children:["Prefira sobrescrever o token (",o.jsx("code",{children:"--govrs-color-text-primary"}),") em vez de fixar hex direto em ",o.jsx("code",{children:"body"})," ou ",o.jsx("code",{children:"h1"}),"."]}),o.jsxs("li",{children:["Aliases legados (",o.jsx("code",{children:"--pure-100"}),", ",o.jsx("code",{children:"--color-dark"}),", ",o.jsx("code",{children:"--color-text"}),") apontam para os tokens text; redefinir o token fonte costuma ser suficiente."]}),o.jsx("li",{children:"Consulte a página Consumo para decidir entre componentes, tokens e foundation."})]})]})]})};var d,c,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Customização',
  parameters: {
    docsOnly: true
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Tokens e tema" title={<h3 style={storyDocsStyles.heroTitle}>Customização</h3>} description="Referência dos tokens CSS do design system e exemplos de como sobrescrevê-los no projeto consumidor — globalmente ou por classe — sem editar o pacote. Componentes carregam automaticamente os tokens necessários; Foundation é opcional e acrescenta estilos globais." />

      <SectionCard title="Cores base do projeto" description="Valores padrão disponibilizados pelos componentes e pela entrada tokens em :root. Use como referência ao montar overrides no CSS do tema.">
        <CodeBlock code={baseColorsCode} />
      </SectionCard>

      <SectionCard title="Tokens do modo de alto contraste" description="Quando a Barra de Acessibilidade ativa o contraste, ela marca o html e os componentes passam automaticamente a consumir os tokens de contraste. Personalize os tokens fonte --govrs-color-contrast-*; o DS remapeia os tokens semânticos e locais dos componentes.">
        <CodeBlock code={highContrastTokensCode} />
        <p style={storyDocsStyles.statText}>Ativação programática, quando necessária:</p>
        <CodeBlock code={contrastActivationCode} />
        <ul style={storyDocsStyles.list}>
          <li>
            Use <code>:root:is(.high-contrast, [data-govrs-contrast='high'])</code> no override. Ele tem a mesma prioridade do mapa interno do DS e mantém a customização estável mesmo quando componentes carregam depois.
          </li>
          <li>
            Preserve os pares de background, foreground e border para cada superfície. O DS não calcula essas combinações automaticamente; a responsabilidade de manter contraste suficiente é do tema consumidor.
          </li>
          <li>
            Imagens, vídeos, mapas e demais mídias não são recoloridos. Ícones funcionais seguem o token de ícone, exceto o ícone preto em campos de busca com superfície branca.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Override no projeto inteiro" description="Redefina variáveis em :root no CSS do tema. Isso afeta componentes e Foundations que dependem desses tokens; carregue o CSS do tema depois do bundle do DS.">
        <CodeBlock code={globalOverrideCode} />
      </SectionCard>

      <SectionCard title="Customização pontual de componente" description="Aplique tokens em um wrapper para alterar somente os componentes dentro dele. A demonstração abaixo personaliza apenas este Button, sem afetar os demais Buttons ou o tema global.">
        <CodeBlock code={componentOverrideCode} />
        <p style={storyDocsStyles.statText}>Resultado:</p>
        <div className="exemplo-botao-editorial" style={componentPreviewStyle}>
          <Button>Publicar conteúdo</Button>
        </div>
      </SectionCard>

      <SectionCard title="Override por classe" description="Para customizar só um portal, tema ou seção, declare as variáveis na classe e aplique-a no html ou em um wrapper. Filhos com classes da fundação ou componentes do DS herdam os novos valores.">
        <p style={storyDocsStyles.statText}>CSS da classe:</p>
        <CodeBlock code={classScopeCode} />
        <p style={storyDocsStyles.statText}>Uso no markup:</p>
        <CodeBlock code={htmlScopeCode} />
      </SectionCard>

      <SectionCard title="Exemplos por tipo de token" description="Mesmo padrão para cores, espaçamento, tipografia e demais famílias: redefina --govrs-* no escopo desejado e use var() nas regras locais quando necessário.">
        <p style={storyDocsStyles.statText}>Cores</p>
        <CodeBlock code={colorOverrideCode} />

        <p style={storyDocsStyles.statText}>Espaçamento (margin, padding, gap)</p>
        <CodeBlock code={spacingOverrideCode} />

        <p style={storyDocsStyles.statText}>Tipografia</p>
        <CodeBlock code={typographyOverrideCode} />

        <p style={storyDocsStyles.statText}>Raio, borda e sombra</p>
        <CodeBlock code={radiusAndBorderCode} />
      </SectionCard>

      <SectionCard title="Famílias de variáveis disponíveis" description="Qualquer token --govrs-* exposto pelo runtime tokens pode ser sobrescrito da mesma forma.">
        <CodeBlock code={tokenReferenceCode} />
        <ul style={storyDocsStyles.list}>
          <li>
            Prefira sobrescrever o token (<code>--govrs-color-text-primary</code>) em vez de fixar hex
            direto em <code>body</code> ou <code>h1</code>.
          </li>
          <li>
            Aliases legados (<code>--pure-100</code>, <code>--color-dark</code>, <code>--color-text</code>)
            apontam para os tokens text; redefinir o token fonte costuma ser suficiente.
          </li>
          <li>
            Consulte a página Consumo para decidir entre componentes, tokens e foundation.
          </li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const R=["Page"];export{t as Page,R as __namedExportsOrder,P as default};
