import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faBell,
  faFolder,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Tab, type TabId } from './Tab'
import './Tab.scss'
import '../../foundations/styles/index.scss'

type InteractiveTabItem = {
  id: string
  label: string
}

type InteractiveArgs = {
  tabs: InteractiveTabItem[]
  modoContraste?: boolean
}

function InteractivePreview({ tabs }: InteractiveArgs) {
  const resolvedTabs =
    tabs.length > 0
      ? tabs
      : [{ id: 'overview', label: 'Visão geral' }]
  const [selectedId, setSelectedId] = useState<TabId>(resolvedTabs[0].id)
  const activeId = resolvedTabs.some((tab) => tab.id === selectedId)
    ? selectedId
    : resolvedTabs[0].id

  return (
    <Tab activeId={activeId} onActiveChange={setSelectedId} ariaLabel="Demonstração de abas">
      {resolvedTabs.map((tab) => (
        <Tab.Item key={tab.id} id={tab.id} label={tab.label}>
          <TabContent title={tab.label}>
            <p>Conteúdo da aba &quot;{tab.label}&quot;.</p>
          </TabContent>
        </Tab.Item>
      ))}
    </Tab>
  )
}

const meta = {
  title: 'Navegação/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Tab>

export default meta

type Story = StoryObj<typeof meta>

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Use para alternar entre painéis relacionados, mantendo visível apenas o conteúdo da aba selecionada.',
  },
  {
    title: 'Composição',
    text: 'Cada painel é declarado como children de Tab.Item; label e icon definem automaticamente a apresentação do trigger.',
  },
  {
    title: 'Acessibilidade',
    text: 'Abas podem ser navegadas por setas, Home e End. Abas somente com ícone precisam de ariaLabel.',
  },
]

function TabContent({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: 'var(--govrs-space-4)' }}>
      <h4 style={{ marginTop: 0 }}>{title}</h4>
      {children}
    </section>
  )
}

function TextTabsPreview() {
  return (
    <Tab defaultActiveId="overview" ariaLabel="Seções do perfil">
      <Tab.Item id="overview" label="Visão geral">
        <TabContent title="Visão geral">
          <p>Resumo das informações do perfil.</p>
        </TabContent>
      </Tab.Item>
      <Tab.Item id="documents" label="Documentos">
        <TabContent title="Documentos">
          <p>Arquivos e documentos vinculados ao perfil.</p>
        </TabContent>
      </Tab.Item>
      <Tab.Item id="history" label="Histórico">
        <TabContent title="Histórico">
          <p>Registro das últimas alterações.</p>
        </TabContent>
      </Tab.Item>
    </Tab>
  )
}

const textTabsExampleCode = `<Tab defaultActiveId="overview" ariaLabel="Seções do perfil">
  <Tab.Item id="overview" label="Visão geral">
    <section>
      <h4>Visão geral</h4>
      <p>Resumo das informações do perfil.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="documents" label="Documentos">
    <section>
      <h4>Documentos</h4>
      <p>Arquivos e documentos vinculados ao perfil.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="history" label="Histórico">
    <section>
      <h4>Histórico</h4>
      <p>Registro das últimas alterações.</p>
    </section>
  </Tab.Item>
</Tab>`

function IconTextTabsPreview() {
  return (
    <Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens">
      <Tab.Item id="notifications" label="Notificações" icon={faBell}>
        <TabContent title="Notificações">
          <p>Você tem três notificações pendentes.</p>
        </TabContent>
      </Tab.Item>
      <Tab.Item id="favorites" label="Favoritos" icon={faStar}>
        <TabContent title="Favoritos">
          <p>Itens salvos para consulta posterior.</p>
        </TabContent>
      </Tab.Item>
      <Tab.Item id="files" label="Arquivos" icon={faFolder}>
        <TabContent title="Arquivos">
          <p>Documentos compartilhados com você.</p>
        </TabContent>
      </Tab.Item>
    </Tab>
  )
}

const iconTextTabsExampleCode = `import { faBell, faStar, faFolder } from '@fortawesome/free-solid-svg-icons'

<Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens">
  <Tab.Item id="notifications" label="Notificações" icon={faBell}>
    <section>
      <h4>Notificações</h4>
      <p>Você tem três notificações pendentes.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="favorites" label="Favoritos" icon={faStar}>
    <section>
      <h4>Favoritos</h4>
      <p>Itens salvos para consulta posterior.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="files" label="Arquivos" icon={faFolder}>
    <section>
      <h4>Arquivos</h4>
      <p>Documentos compartilhados com você.</p>
    </section>
  </Tab.Item>
</Tab>`

function IconOnlyTabsPreview() {
  return (
    <Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens">
      <Tab.Item id="notifications" icon={faBell} ariaLabel="Notificações">
        <TabContent title="Notificações">
          <p>Você tem três notificações pendentes.</p>
        </TabContent>
      </Tab.Item>
      <Tab.Item id="favorites" icon={faStar} ariaLabel="Favoritos">
        <TabContent title="Favoritos">
          <p>Itens salvos para consulta posterior.</p>
        </TabContent>
      </Tab.Item>
      <Tab.Item id="files" icon={faFolder} ariaLabel="Arquivos">
        <TabContent title="Arquivos">
          <p>Documentos compartilhados com você.</p>
        </TabContent>
      </Tab.Item>
    </Tab>
  )
}

const iconOnlyTabsExampleCode = `import { faBell, faStar, faFolder } from '@fortawesome/free-solid-svg-icons'

<Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens">
  <Tab.Item id="notifications" icon={faBell} ariaLabel="Notificações">
    <section>
      <h4>Notificações</h4>
      <p>Você tem três notificações pendentes.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="favorites" icon={faStar} ariaLabel="Favoritos">
    <section>
      <h4>Favoritos</h4>
      <p>Itens salvos para consulta posterior.</p>
    </section>
  </Tab.Item>
  <Tab.Item id="files" icon={faFolder} ariaLabel="Arquivos">
    <section>
      <h4>Arquivos</h4>
      <p>Documentos compartilhados com você.</p>
    </section>
  </Tab.Item>
</Tab>`

export const Documentation: Story = {
  name: 'Documentação',
  args: {
    children: null,
  },
  parameters: {
    docsOnly: true,
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Tab</h3>}
        description="Componente composto para organizar conteúdo relacionado em painéis alternáveis."
        stats={docsHeroStats}
      />

      <SectionCard
        title="Apenas texto"
        description="Forneça somente label em cada Tab.Item para exibir abas textuais."
      >
        <SandboxExample
          title="Seções de perfil"
          description="A seleção revela o painel declarado como children de cada item."
          code={textTabsExampleCode}
        >
          <TextTabsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Texto e ícone"
        description="Passe label e icon para exibir os dois elementos no trigger."
      >
        <SandboxExample
          title="Categorias de mensagens"
          description="O ícone complementa a label visível do trigger."
          code={iconTextTabsExampleCode}
        >
          <IconTextTabsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Somente ícone"
        description="Abas sem label precisam de ariaLabel para manter o nome acessível."
      >
        <SandboxExample
          title="Categorias compactas"
          description="ariaLabel fornece o nome acessível quando não há texto visível."
          code={iconOnlyTabsExampleCode}
        >
          <IconOnlyTabsPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interactive: StoryObj<InteractiveArgs> = {
  name: 'Interativo',
  render: (args) => <InteractivePreview {...args} />,
  args: {
    tabs: [
      { id: 'overview', label: 'Visão geral' },
      { id: 'favorites', label: 'Favoritos' },
      { id: 'notifications', label: 'Notificações' },
    ],
    modoContraste: false,
  },
  parameters: {
    controls: {
      exclude: [
        'children',
        'activeId',
        'defaultActiveId',
        'onActiveChange',
        'ariaLabel',
        'hideTabList',
        'className',
        'preset',
      ],
    },
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    tabs: {
      control: 'object',
      description: 'Lista de abas no formato [{ id, label }]. Altere os nomes ou a quantidade de itens.',
      table: {
        category: 'Conteúdo',
        type: { summary: 'Array<{ id: string; label: string }>' },
      },
    },
  },
}
