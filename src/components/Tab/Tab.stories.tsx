import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faBell,
  faFolder,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Tab, type TabIconPosition, type TabId } from './Tab'
import './Tab.scss'
import '../../foundations/styles/index.scss'

type TabMode = 'text' | 'iconAndText' | 'iconOnly'

type InteractiveArgs = {
  tabMode: TabMode
  iconPosition: TabIconPosition
  modoContraste?: boolean
}

const interactiveTabs: Array<{
  id: string
  label: string
  icon: IconDefinition
}> = [
  { id: 'notifications', label: 'Notificações', icon: faBell },
  { id: 'favorites', label: 'Favoritos', icon: faStar },
  { id: 'files', label: 'Arquivos', icon: faFolder },
]

function InteractivePreview({ tabMode, iconPosition }: InteractiveArgs) {
  const [selectedId, setSelectedId] = useState<TabId>(interactiveTabs[0].id)
  const activeId = interactiveTabs.some((tab) => tab.id === selectedId)
    ? selectedId
    : interactiveTabs[0].id

  return (
    <Tab
      activeId={activeId}
      onActiveChange={setSelectedId}
      ariaLabel="Demonstração de abas"
      iconPosition={tabMode === 'iconAndText' ? iconPosition : undefined}
    >
      {interactiveTabs.map((tab) => {
        const content = (
          <TabContent title={tab.label}>
            <p>Conteúdo da aba &quot;{tab.label}&quot;.</p>
          </TabContent>
        )

        if (tabMode === 'iconOnly') {
          return (
            <Tab.Item key={tab.id} id={tab.id} icon={tab.icon} ariaLabel={tab.label}>
              {content}
            </Tab.Item>
          )
        }

        if (tabMode === 'iconAndText') {
          return (
            <Tab.Item
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
            >
              {content}
            </Tab.Item>
          )
        }

        return (
          <Tab.Item key={tab.id} id={tab.id} label={tab.label}>
            {content}
          </Tab.Item>
        )
      })}
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
    <Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens" iconPosition="top">
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

<Tab defaultActiveId="notifications" ariaLabel="Categorias de mensagens" iconPosition="top">
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
        description="Passe label e icon em cada Tab.Item. Defina iconPosition no Tab para padronizar a posição do ícone em todas as abas (left, right, top ou bottom)."
      >
        <SandboxExample
          title="Categorias de mensagens"
          description="iconPosition=&quot;top&quot; no Tab aplica o ícone acima do texto em todos os itens."
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
    tabMode: 'text',
    iconPosition: 'left',
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
      ],
    },
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    tabMode: {
      control: 'select',
      options: ['text', 'iconAndText', 'iconOnly'],
      description: 'Tipo de aba: somente texto, ícone e texto, ou somente ícone.',
      table: {
        category: 'Aparência',
        type: { summary: "'text' | 'iconAndText' | 'iconOnly'" },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Posição do ícone no Tab. Só tem efeito quando as abas têm label e icon.',
      if: { arg: 'tabMode', eq: 'iconAndText' },
      table: {
        category: 'Aparência',
        type: { summary: "'left' | 'right' | 'top' | 'bottom'" },
      },
    },
  },
}
