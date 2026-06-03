import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import '../styles/index.scss';



const meta = {
  title: 'Consumo',
  id: 'consumo',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {
  name: 'Consumo',
  parameters: {
    docsOnly: true,
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Consumo do design system"
        title={<h3 style={storyDocsStyles.heroTitle}>Consumo</h3>}
        description="Página base para documentar a instalação da biblioteca, o uso do foundation e o consumo dos componentes públicos em aplicações consumidoras."
      />

      <SectionCard
        title="Configuração inicial"
        description="Para pode usar o comando 'npm install @procergs/react-govrs-ds', precisa primeiro configurar acesso ao npm registry privado da PROCERGS.">
        <div>Para poder ter acesso ao npm registry privado da PROCERGS, é necessário configurar o arquivo '<code>.npmrc</code>' com as credenciais apropriadas e com o token de autenticação.</div>
        <div>Essa parte é feita no diretório raíz do usuário da distribuição linux ou do subsistema linux(WSL).</div>
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              {`cat > ~/.npmrc <<'EOF'
registry=https://registry.npmjs.org/
always-auth=false

@procergs:registry=https://pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/
//pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/:_authToken={TOKEN_DE_AUTENTICAÇÃO}
//pkgs.dev.azure.com/Procergs/_packaging/procergs/npm/registry/:always-auth=true
EOF`}
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
      <SectionCard
        title="Importação do Foundation"
        description="O Foundation é o bloco responsável por fornecer os estilos base globais do design system, como reset de CSS, tipografia, cores e variáveis globais. Ele deve ser importado no projeto consumidor para garantir a consistência visual e o funcionamento correto dos componentes públicos."
      >
        <div>Para importar o Foundation, basta adicionar a seguinte linha no arquivo de entrada do projeto consumidor (ex: <code>index.tsx</code> ou <code>App.tsx</code>):</div>
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              import '@procergs/react-govrs-ds/foundation';
            </code>
          </pre>
        </div>
      </SectionCard>
      <SectionCard
        title="Consumo dos componentes públicos"
        description="Após a instalação do pacote e a importação do Foundation, os componentes públicos do design system podem ser consumidos diretamente a partir do pacote principal. Por exemplo, para usar o componente Button, basta importar e usar normalmente em uma aplicação React:">
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              {`import { Button, Switch } from '@procergs/react-govrs-ds';`}
            </code>
          </pre>
        </div>
        <div>Em seguida, o componente pode ser usado normalmente em uma aplicação React:</div>
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>
              {`<Button variant="primary">Salvar</Button>
<Switch
label="Receber notificações"
description="Liga ou desliga notificações da conta."
checked={receberNotificacoes}
onChange={(event) => setReceberNotificacoes(event.target.checked)}
/>`}
            </code>
          </pre>
        </div>
      </SectionCard>
    </DocsStoryLayout>
  ),
};