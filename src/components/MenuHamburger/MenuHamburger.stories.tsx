import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { MenuHamburger } from './MenuHamburger'
import './MenuHamburger.scss'
import '../../foundations/styles/index.scss'

const navigationItems = [
  {
    title: 'Institucional',
    url: '#institucional',
    items: [
      { title: 'Sobre o órgão', url: '#sobre' },
      { title: 'Estrutura', url: '#estrutura' },
      {
        title: 'Departamentos',
        url: '#departamentos',
        items: [
          { title: 'Planejamento', url: '#planejamento' },
          { title: 'Atendimento ao cidadão', url: '#atendimento' },
        ],
      },
    ],
  },
  {
    title: 'Serviços',
    url: '#servicos',
    items: [
      { title: 'Solicitar atendimento', url: '#solicitar' },
      { title: 'Consultar protocolo', url: '#protocolo' },
      {
        title: 'Guias e orientações',
        url: '#guias',
        items: [
          { title: 'Documentos necessários', url: '#documentos' },
          { title: 'Prazos de atendimento', url: '#prazos' },
          { title: 'Canais digitais', url: '#canais' },
        ],
      },
    ],
  },
  { title: 'Notícias', url: '#noticias' },
  { title: 'Contato', url: '#contato' },
] satisfies MenuHamburger.Item[]

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a navegação principal precisa abrir uma árvore de links a partir de um acionador compacto no cabeçalho ou em barras de navegação.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar abertura inicial, limite de níveis desktop e breakpoint usado para alternar entre colunas e submenus expansíveis.",
  },
  {
    title: 'Comportamento',
    text: 'No desktop, níveis adicionais aparecem por hover ou foco. Em telas compactas, cada item com filhos expande e recolhe seu submenu no próprio fluxo vertical.',
  },
] satisfies Array<{ title: string; text: string }>

const basicExampleCode = `<MenuHamburger
  items={[
    {
      title: 'Institucional',
      url: '#institucional',
      items: [
        { title: 'Sobre o órgão', url: '#sobre' },
        { title: 'Estrutura', url: '#estrutura' },
      ],
    },
    { title: 'Contato', url: '#contato' },
  ]}
/>`

const controlledExampleCode = `const [open, setOpen] = useState(false)

<MenuHamburger
  items={navigationItems}
  open={open}
  onOpenChange={setOpen}
/>`

const mobileExampleCode = `<MenuHamburger
  items={navigationItems}
  defaultOpen
/>`

const menuStageStyle: CSSProperties = {
  display: 'grid',
  alignContent: 'start',
  minHeight: 360,
  border: '1px solid #dbe5f0',
  borderRadius: 12,
  overflow: 'hidden',
  background: '#f8fafc',
}

const menuBarStyle: CSSProperties = {
  position: 'relative',
  display: 'flex',
  minHeight: 58,
  alignItems: 'center',
  gap: 12,
  padding: '0 18px',
  borderBottom: '1px solid #dbe5f0',
  background: '#ffffff',
}

const menuBarLabelStyle: CSSProperties = {
  margin: 0,
  color: '#475569',
  fontSize: 14,
}

const meta = {
  title: 'Navegação/MenuHamburger',
  component: MenuHamburger,
  args: {
    items: navigationItems,
    defaultOpen: true,
    navigationLabel: 'Navegação principal',
    openButtonLabel: 'Abrir menu',
    closeButtonLabel: 'Fechar menu',
    expandButtonLabel: 'Expandir submenu',
    collapseButtonLabel: 'Recolher submenu',
    maxDesktopLevels: 4,
    
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof MenuHamburger>

export default meta

type Story = StoryObj<typeof meta>

function MenuFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div style={menuStageStyle}>
      <div style={menuBarStyle}>
        {children}
        <p style={menuBarLabelStyle}>{label}</p>
      </div>
    </div>
  )
}

function MenuDesktopPreview() {
  return (
    <MenuFrame label="Menu desktop aberto">
      <MenuHamburger items={navigationItems} defaultOpen />
    </MenuFrame>
  )
}

function MenuMobilePreview() {
  return (
    <MenuFrame label="Menu mobile aberto">
      <MenuHamburger items={navigationItems} defaultOpen />
    </MenuFrame>
  )
}

function MenuControlledPreview() {
  return (
    <MenuFrame label="Estado aberto por props">
      <MenuHamburger items={navigationItems} open />
    </MenuFrame>
  )
}

function MenuInteractivePreview(args: MenuHamburger.Props) {
  return (
    <MenuFrame label="Use o botão para abrir e fechar; no desktop, passe o mouse nos itens com filhos.">
      <MenuHamburger
        key={`${args.defaultOpen}-${args.maxDesktopLevels}`}
        {...args}
      />
    </MenuFrame>
  )
}

export const MenuHamburgerDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>MenuHamburger</h3>}
        description={
          <>
            O componente recebe uma árvore de itens e renderiza o acionador de menu com
            navegação por níveis no desktop e submenus expansíveis em telas compactas.
          </>
        }
        variantTags={['desktop em colunas', 'mobile expansível', 'controlável por props']}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura de itens"
        description="Cada item pode ter title ou label, url ou href, e filhos em items. Links sem destino continuam renderizados como texto navegável visualmente, preservando a hierarquia sem inventar rota no design system."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>items</code> define a árvore de navegação que será exibida no painel.</li>
          <li><code>open</code> e <code>onOpenChange</code> permitem controlar o estado de abertura externamente.</li>
          <li><code>defaultOpen</code> inicializa o estado quando o componente é usado de forma não controlada.</li>
          <li>O breakpoint responsivo é controlado pelo token CSS <code>--govrs-breakpoint-smartphone-landscape-tablet-portrait-max</code>.</li>
        </ul>

        <SandboxExample
          title="Uso básico"
          description="Contrato mínimo para criar o acionador do menu e preencher a primeira árvore de navegação."
          code={basicExampleCode}
          notes={[
            'Forneça rótulos claros em cada item para que a navegação por teclado e leitores de tela fique previsível.',
            'Use urls reais no produto consumidor; os exemplos usam âncoras apenas para manter a story autocontida.',
          ]}
        >
          <MenuDesktopPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Estados e responsividade"
        description="O mesmo conjunto de dados muda de apresentação conforme o breakpoint. Em telas amplas, os subníveis aparecem em listas laterais; em telas compactas, o usuário expande cada ramo no fluxo vertical."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Desktop">
            <MenuDesktopPreview />
          </StoryPreviewCard>

          <StoryPreviewCard label="Mobile">
            <MenuMobilePreview />
          </StoryPreviewCard>
        </div>

        <SandboxExample
          title="Forçando o modo mobile"
          description="A story usa um breakpoint alto apenas para demonstrar a estrutura mobile dentro do canvas."
          code={mobileExampleCode}
        >
          <MenuMobilePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Camadas de z-index"
        description="O painel aberto usa --govrs-z-index-navigation (50). Quando integrado ao Header, o wrapper pai também recebe data-menu-open para escapar de stacking contexts baixos."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>.govrs-menu-hamburger[data-open='true']</code> eleva o componente para a camada de navegação.</li>
          <li><code>.govrs-menu-hamburger__content</code> usa o mesmo token; o toggle fica em <code>calc(var(--govrs-z-index-navigation) + 1)</code>.</li>
          <li>Em editores drag-and-drop, prefira estes tokens em vez de valores mágicos (ex.: 99, 101) para permitir override no tema consumidor.</li>
          <li>Backdrops globais devem usar <code>--govrs-z-index-overlay</code> (ou a classe <code>.govrs-overlay-backdrop</code>) acima da navegação.</li>
        </ul>

        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>{`.govrs-header-wrapper[data-menu-open='true'] {
  z-index: var(--govrs-z-index-navigation);
}

.govrs-menu-hamburger__content {
  z-index: var(--govrs-z-index-navigation);
}`}</code>
          </pre>
        </div>
      </SectionCard>

      <SectionCard
        title="Controle externo"
        description="Quando o estado precisa acompanhar outro componente, analytics ou um cabeçalho composto, use open e onOpenChange em vez de deixar o MenuHamburger gerenciar tudo sozinho."
      >
        <SandboxExample
          title="Abertura controlada"
          description="O componente expõe o estado de abertura sem exigir store, router ou qualquer infraestrutura externa."
          code={controlledExampleCode}
        >
          <MenuControlledPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const MenuHamburgerInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    items: {
      control: 'object',
      description: 'Árvore de itens exibida no menu.',
      table: { category: 'Conteúdo' },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Define se o menu inicia aberto no modo não controlado.',
      table: { category: 'Estado' },
    },
    maxDesktopLevels: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Quantidade máxima de níveis laterais renderizados no desktop.',
      table: { category: 'Comportamento' },
    },
    
    navigationLabel: {
      control: 'text',
      description: 'Nome acessível do nav interno.',
      table: { category: 'Acessibilidade' },
    },
    openButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão quando o menu está fechado.',
      table: { category: 'Acessibilidade' },
    },
    closeButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão quando o menu está aberto.',
      table: { category: 'Acessibilidade' },
    },
    expandButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível dos botões de expandir submenu.',
      table: { category: 'Acessibilidade' },
    },
    collapseButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível dos botões de recolher submenu.',
      table: { category: 'Acessibilidade' },
    },
    onOpenChange: {
      action: 'open changed',
      description: 'Callback chamado quando o menu abre ou fecha.',
      table: { category: 'Eventos' },
    },
  },
  render: (args) => <MenuInteractivePreview {...args} />,
}