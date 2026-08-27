import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{D as n,S as c,s as e,a as r}from"./storyDocs-CoQtGjOG.js";/* empty css              */import"./index-DyTKwKRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={title:"Consumo",id:"consumo",parameters:{layout:"padded"}},a={name:"Consumo",parameters:{docsOnly:!0},render:()=>o.jsxs(n,{children:[o.jsx(c,{eyebrow:"Consumo do design system",title:o.jsx("h3",{style:e.heroTitle,children:"Consumo"}),description:"Página base para documentar a instalação da biblioteca, o uso do foundation e o consumo dos componentes públicos em aplicações consumidoras."}),o.jsxs(r,{title:"Configuração inicial",description:"Para pode usar o comando 'npm install @procergs/react-govrs-ds', precisa primeiro configurar acesso ao npm registry privado da PROCERGS.",children:[o.jsxs("div",{children:["Para poder ter acesso ao npm registry privado da PROCERGS, é necessário configurar o arquivo '",o.jsx("code",{children:".npmrc"}),"' com as credenciais apropriadas e com o token de autenticação."]}),o.jsx("div",{children:"Essa parte é feita no diretório raíz do usuário da distribuição linux ou do subsistema linux(WSL)."}),o.jsx("div",{style:e.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:`cat > ~/.npmrc <<'EOF'
registry=https://registry.npmjs.org/
always-auth=false

@procergs:registry=https://pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/
//pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/:_authToken={TOKEN_DE_AUTENTICAÇÃO}
//pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/:always-auth=true
EOF`})})}),o.jsxs("div",{children:["Referência: ",o.jsx("a",{href:"https://desenvolvimento.blog.intra.rs.gov.br/2025/12/07/novo-npmrc-para-autenticar-ado-azure-devops-na-nuvem/",target:"_blank",rel:"noopener noreferrer",children:"Novo .npmrc para autenticar ADO Azure DevOps na nuvem"})]}),o.jsxs("div",{children:["Com o acesso ao registry privado configurado, é possível instalar o pacote usando o comando:",o.jsx("div",{style:e.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:"npm install @procergs/react-govrs-ds"})})})]}),o.jsx("div",{children:' ATENÇÂO: Caso não esteja configurado o acesso ao registry privado, a instalação do pacote retornará um erro de "E401: Unauthorized".'}),o.jsx("div",{children:"Token de autenticação disponível no site de referência."})]}),o.jsxs(r,{title:"Importação do Foundation",description:"O Foundation fornece estilos globais opcionais do design system, como body, tipografia e utilitários das Foundations. Os componentes públicos já carregam tokens, incluindo o mapa de alto contraste, automaticamente. Para consultar cores base e como sobrescrever tokens no CSS do tema, veja a página Customização.",children:[o.jsxs("div",{children:["Para importar o Foundation, basta adicionar a seguinte linha no arquivo de entrada do projeto consumidor (ex: ",o.jsx("code",{children:"index.tsx"})," ou ",o.jsx("code",{children:"App.tsx"}),"):"]}),o.jsx("div",{style:e.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:"import '@procergs/react-govrs-ds/foundation';"})})})]}),o.jsx(r,{title:"Tokens sem estilos globais",description:"Para disponibilizar explicitamente somente os tokens CSS e o modo de alto contraste, sem os estilos globais do Foundation, importe a entrada tokens:",children:o.jsx("div",{style:e.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:"import '@procergs/react-govrs-ds/tokens';"})})})}),o.jsxs(r,{title:"Consumo dos componentes públicos",description:"Após a instalação do pacote, os componentes públicos podem ser consumidos diretamente a partir do pacote principal. Cada componente disponibiliza os tokens necessários, inclusive para alto contraste. Por exemplo, para usar o componente Button, basta importar e usar normalmente em uma aplicação React:",children:[o.jsx("div",{style:e.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:"import { Button, Switch } from '@procergs/react-govrs-ds';"})})}),o.jsx("div",{children:"Em seguida, o componente pode ser usado normalmente em uma aplicação React:"}),o.jsx("div",{style:e.codeBlock,children:o.jsx("pre",{children:o.jsx("code",{children:`<Button variant="primary">Salvar</Button>
<Switch
label="Receber notificações"
description="Liga ou desliga notificações da conta."
checked={receberNotificacoes}
onChange={(event) => setReceberNotificacoes(event.target.checked)}
/>`})})})]})]})};var s,i,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Consumo',
  parameters: {
    docsOnly: true
  },
  render: () => <DocsStoryLayout>
      <DocsHero eyebrow="Consumo do design system" title={<h3 style={storyDocsStyles.heroTitle}>Consumo</h3>} description="Página base para documentar a instalação da biblioteca, o uso do foundation e o consumo dos componentes públicos em aplicações consumidoras." />

      <SectionCard title="Configuração inicial" description="Para pode usar o comando 'npm install @procergs/react-govrs-ds', precisa primeiro configurar acesso ao npm registry privado da PROCERGS.">
        <div>Para poder ter acesso ao npm registry privado da PROCERGS, é necessário configurar o arquivo '<code>.npmrc</code>' com as credenciais apropriadas e com o token de autenticação.</div>
        <div>Essa parte é feita no diretório raíz do usuário da distribuição linux ou do subsistema linux(WSL).</div>
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              {\`cat > ~/.npmrc <<'EOF'
registry=https://registry.npmjs.org/
always-auth=false

@procergs:registry=https://pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/
//pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/:_authToken={TOKEN_DE_AUTENTICAÇÃO}
//pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/:always-auth=true
EOF\`}
            </code>
          </pre>
        </div>
        <div>Referência: <a href="https://desenvolvimento.blog.intra.rs.gov.br/2025/12/07/novo-npmrc-para-autenticar-ado-azure-devops-na-nuvem/" target="_blank" rel="noopener noreferrer">Novo .npmrc para autenticar ADO Azure DevOps na nuvem</a></div>
        <div>
          Com o acesso ao registry privado configurado, é possível instalar o pacote usando o comando:
          <div style={storyDocsStyles.codeBlock}>
            <pre>
              <code>
                npm install @procergs/react-govrs-ds
              </code>
            </pre>
          </div>
        </div>
        <div> ATENÇÂO: Caso não esteja configurado o acesso ao registry privado, a instalação do pacote retornará um erro de "E401: Unauthorized".</div>
        <div>Token de autenticação disponível no site de referência.</div>
      </SectionCard>
      <SectionCard title="Importação do Foundation" description="O Foundation fornece estilos globais opcionais do design system, como body, tipografia e utilitários das Foundations. Os componentes públicos já carregam tokens, incluindo o mapa de alto contraste, automaticamente. Para consultar cores base e como sobrescrever tokens no CSS do tema, veja a página Customização.">
        <div>Para importar o Foundation, basta adicionar a seguinte linha no arquivo de entrada do projeto consumidor (ex: <code>index.tsx</code> ou <code>App.tsx</code>):</div>
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              import '@procergs/react-govrs-ds/foundation';
            </code>
          </pre>
        </div>
      </SectionCard>
      <SectionCard title="Tokens sem estilos globais" description="Para disponibilizar explicitamente somente os tokens CSS e o modo de alto contraste, sem os estilos globais do Foundation, importe a entrada tokens:">
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              import '@procergs/react-govrs-ds/tokens';
            </code>
          </pre>
        </div>
      </SectionCard>
      <SectionCard title="Consumo dos componentes públicos" description="Após a instalação do pacote, os componentes públicos podem ser consumidos diretamente a partir do pacote principal. Cada componente disponibiliza os tokens necessários, inclusive para alto contraste. Por exemplo, para usar o componente Button, basta importar e usar normalmente em uma aplicação React:">
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              {\`import { Button, Switch } from '@procergs/react-govrs-ds';\`}
            </code>
          </pre>
        </div>
        <div>Em seguida, o componente pode ser usado normalmente em uma aplicação React:</div>
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              {\`<Button variant="primary">Salvar</Button>
<Switch
label="Receber notificações"
description="Liga ou desliga notificações da conta."
checked={receberNotificacoes}
onChange={(event) => setReceberNotificacoes(event.target.checked)}
/>\`}
            </code>
          </pre>
        </div>
      </SectionCard>
    </DocsStoryLayout>
}`,...(t=(i=a.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const v=["Page"];export{a as Page,v as __namedExportsOrder,g as default};
