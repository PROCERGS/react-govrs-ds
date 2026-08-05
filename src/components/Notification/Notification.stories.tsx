import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faBell,
  faStar,
  faRefresh,
  faEnvelope,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Notification } from './Notification'
import './Notification.scss'
import '../../foundations/styles/index.scss'

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Use para informar eventos e atualizações do sistema sem tirar o usuário do fluxo principal.',
  },
  {
    title: 'Melhor exploração',
    text: "Use a página 'Interativo' para testar combinações de botão, usuário, abas e estado vazio.",
  },
  {
    title: 'Comportamento',
    text: 'Abre como painel ancorado ao botão, fecha com clique fora, tecla Esc e botão de fechar.',
  },
]

const tabsSingleCode = `const tabs = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      {
        id: 'n1',
        title: 'Seu documento foi aprovado',
        description: 'Seu processo avançou para a próxima etapa.',
        time: 'Há 5 min',
      },
    ],
  },
]

<Notification tabs={tabs} />`

const tabsMultipleCode = `const tabs = [
  {
    id: 'important',
    label: 'Importantes',
    items: [{ id: 'n1', title: 'Prazo vencendo', description: 'Faltam 3 dias', time: 'Agora' }],
  },
  {
    id: 'updates',
    label: 'Atualizações',
    items: [{ id: 'n2', title: 'Sistema atualizado', description: 'Nova funcionalidade liberada', time: 'Há 1h' }],
  },
  {
    id: 'messages',
    label: 'Mensagens',
    items: [{ id: 'n3', title: 'Nova mensagem', description: 'Você recebeu uma nova mensagem', time: 'Há 2h' }],
  },
]

<Notification tabs={tabs} showUserArea user={{ name: 'Nome do Usuário', email: 'nome@dominio.com' }} />`
const tabsWithIconAndTextCode = `import { faBell, faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const tabs = [
  {
    id: 'all',
    label: 'Todas',
    icon: faBell,
    items: [...],
  },
  {
    id: 'important',
    label: 'Importantes',
    icon: faStar,
    items: [...],
  },
  {
    id: 'messages',
    label: 'Mensagens',
    icon: faEnvelope,
    items: [...],
  },
]

<Notification tabs={tabs} iconPosition="top" />`

const tabsIconOnlyCode = `import { faBell, faTriangleExclamation, faRefresh } from '@fortawesome/free-solid-svg-icons'

const tabs = [
  {
    id: 'all',
    icon: faBell,
    items: [...],
  },
  {
    id: 'important',
    icon: faTriangleExclamation,
    items: [...],
  },
  {
    id: 'updates',
    icon: faRefresh,
    items: [...],
  },
]

<Notification tabs={tabs} />`
const basicExampleCode = `<Notification
  buttonLabel="Notificações"
  useBellIcon
  buttonVariant="secondary"
  tabs={tabsSingle}
/>`

const userAreaExampleCode = `<Notification
  buttonLabel="Notificações"
  tabs={tabsSingle}
  showUserArea
  user={{
    name: 'Nome do Usuário',
    email: 'nome.sobrenome@dominio.com',
  }}
/>`

const tabsExampleCode = `<Notification
  buttonLabel="Notificações"
  tabs={tabsMultiple}
  showUserArea
  user={{
    name: 'Nome do Usuário',
    email: 'nome.sobrenome@dominio.com',
  }}
/>`

const iconOnlyExampleCode = `<Notification
  buttonLabel=""
  useBellIcon
  buttonVariant="secondary"
  tabs={tabsSingle}
/>`

const emptyStateExampleCode = `<Notification
  buttonLabel="Notificações"
  tabs={[
    { id: 'all', label: 'Todas', items: [] },
  ]}
  showUserArea
  user={{
    name: 'Nome do Usuário',
    email: 'nome.sobrenome@dominio.com',
  }}
/>`

const noCloseButtonExampleCode = `<Notification
  buttonLabel="Notificações"
  useBellIcon
  tabs={tabsSingle}
  showUserArea={false}
  showCloseButton={false}
/>`

const triggerStylesExampleCode = `<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <Notification
    buttonLabel="Primário grande"
    buttonVariant="primary"
    buttonSize="large"
    tabs={tabsSingle}
    showUserArea={false}
  />

  <Notification
    buttonLabel="Secundário médio"
    buttonVariant="secondary"
    buttonSize="medium"
    tabs={tabsSingle}
    showUserArea={false}
  />

  <Notification
    buttonLabel="Terciário pequeno"
    buttonVariant="tertiary"
    buttonSize="small"
    tabs={tabsSingle}
    showUserArea={false}
  />
</div>`

const tabsSingle: Notification.Tab[] = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      {
        id: 'notif-1',
        title: 'Seu documento foi aprovado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis nisl eget mauris dignissim.',
        time: 'Há 00 min',
        isNew: true,
      },
      {
        id: 'notif-2',
        title: 'Nova solicitação disponível',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis nisl eget mauris dignissim.',
        time: 'Há 1 hora',
      },
      {
        id: 'notif-3',
        title: 'Atualização do sistema',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis nisl eget mauris dignissim.',
        time: 'Há 2 horas',
      },
    ],
  },
]

const tabsMultiple: Notification.Tab[] = [
  {
    id: 'important',
    label: 'Importantes',
    items: [
      {
        id: 'notif-1',
        title: 'Seu documento foi aprovado',
        description: 'Ação importante: seu documento foi revisado e aprovado. Clique para mais detalhes.',
        time: 'Há 00 min',
      },
      {
        id: 'notif-2',
        title: 'Aviso: Prazo vencendo',
        description: 'Seu prazo para enviar documentação vence em 3 dias. Não perca!',
        time: 'Há 1 hora',
      },
    ],
  },
  {
    id: 'updates',
    label: 'Atualizações',
    items: [
      {
        id: 'notif-3',
        title: 'Atualização do sistema',
        description: 'O sistema foi atualizado com novas funcionalidades.',
        time: 'Há 2 horas',
      },
      {
        id: 'notif-4',
        title: 'Nova versão disponível',
        description: 'Uma nova versão da plataforma está disponível.',
        time: 'Há 5 horas',
      },
    ],
  },
  {
    id: 'messages',
    label: 'Mensagens',
    items: [
      {
        id: 'notif-5',
        title: 'Você tem uma nova mensagem',
        description: 'João Silva enviou uma mensagem para você. Verifique seu inbox.',
        time: 'Há 30 min',
      },
    ],
  },
]

const tabsWithIconAndText: Notification.Tab[] = [
  { id: 'all', label: 'Todas', icon: faBell, items: tabsSingle[0].items },
  { id: 'important', label: 'Importantes', icon: faStar, items: tabsMultiple[0].items },
  { id: 'messages', label: 'Mensagens', icon: faEnvelope, items: tabsMultiple[2].items },
]

const tabsIconOnly: Notification.Tab[] = [
  { id: 'all', icon: faBell, items: tabsSingle[0].items },
  { id: 'important', icon: faTriangleExclamation, items: tabsMultiple[0].items },
  { id: 'updates', icon: faRefresh, items: tabsMultiple[1].items },
]

const presetDefault: Notification.Tab[] = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      { id: 'p1', title: 'Documento aprovado', description: 'Seu processo avançou para a próxima etapa.', time: 'Há 5 min', isNew: true },
      { id: 'p2', title: 'Nova solicitação disponível', description: 'Uma solicitação foi atribuída a você.', time: 'Há 1 hora', isNew: true },
      { id: 'p3', title: 'Atualização do sistema', description: 'O sistema foi atualizado com melhorias de desempenho.', time: 'Há 3 horas' },
    ],
  },
]

const presetAllNew: Notification.Tab[] = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      { id: 'n1', title: 'Prazo vencendo amanhã', description: 'Você tem um prazo crítico para amanhã às 18h.', time: 'Agora', isNew: true },
      { id: 'n2', title: 'Nova mensagem recebida', description: 'Maria Souza enviou uma mensagem para você.', time: 'Há 2 min', isNew: true },
      { id: 'n3', title: 'Aprovação pendente', description: 'Um documento aguarda sua aprovação.', time: 'Há 10 min', isNew: true },
      { id: 'n4', title: 'Relatório gerado', description: 'O relatório mensal está pronto para download.', time: 'Há 30 min', isNew: true },
    ],
  },
]

const presetWithDisabled: Notification.Tab[] = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      { id: 'd1', title: 'Solicitação em análise', description: 'Aguarde, sua solicitação está sendo analisada.', time: 'Há 1 hora', isNew: true },
      { id: 'd2', title: 'Acesso restrito', description: 'Você não tem permissão para esta ação.', time: 'Há 2 horas', disabled: true },
      { id: 'd3', title: 'Notificação expirada', description: 'Este aviso não está mais disponível.', time: 'Há 5 horas', disabled: true },
      { id: 'd4', title: 'Cadastro atualizado', description: 'Seus dados foram atualizados com sucesso.', time: 'Há 1 dia' },
    ],
  },
]

const presetAllRead: Notification.Tab[] = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      { id: 'r1', title: 'Sistema restaurado', description: 'A manutenção foi concluída e o sistema está normal.', time: 'Há 2 dias' },
      { id: 'r2', title: 'Relatório de agosto', description: 'O relatório de agosto está disponível no portal.', time: 'Há 3 dias' },
      { id: 'r3', title: 'Senha alterada', description: 'Sua senha foi alterada com sucesso.', time: 'Há 5 dias' },
    ],
  },
]

const presetSingle: Notification.Tab[] = [
  {
    id: 'all',
    label: 'Todas',
    items: [
      { id: 's1', title: 'Único aviso importante', description: 'Verifique as novas diretrizes publicadas nesta semana.', time: 'Agora', isNew: true },
    ],
  },
]

const dataPresets: Record<string, Notification.Tab[]> = {
  default: presetDefault,
  allNew: presetAllNew,
  withDisabled: presetWithDisabled,
  allRead: presetAllRead,
  single: presetSingle,
}

const meta = {
  title: 'Feedback/Notifications',
  component: Notification,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Notification>

export default meta

type Story = StoryObj<typeof meta>

type InteractivePreviewProps = {
  tabMode?: 'text' | 'iconAndText' | 'iconOnly' | 'single'
  iconPosition?: 'left' | 'right' | 'top' | 'bottom'
  showUserArea?: boolean
  emptyState?: boolean
  dataPreset?: 'default' | 'allNew' | 'withDisabled' | 'allRead' | 'single'
  modoContraste?: boolean
}

function BasicPreview() {
  return (
    <div style={{ minHeight: 720, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        buttonVariant="secondary"
        tabs={tabsSingle}
        showUserArea={false}
      />
    </div>
  )
}

function UserAreaPreview() {
  return (
    <div style={{ minHeight: 760, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        tabs={tabsSingle}
        showUserArea
        user={{
          name: 'Nome do Usuário',
          email: 'nome.sobrenome@dominio.com',
        }}
      />
    </div>
  )
}

function TabsPreview() {
  return (
    <div style={{ minHeight: 760, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        tabs={tabsMultiple}
        showUserArea
        user={{
          name: 'Nome do Usuário',
          email: 'nome.sobrenome@dominio.com',
        }}
      />
    </div>
  )
}

function TabsIconAndTextPreview() {
  return (
    <div style={{ minHeight: 760, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        tabs={tabsWithIconAndText}
        iconPosition="top"
        showUserArea={false}
      />
    </div>
  )
}

function TabsIconOnlyPreview() {
  return (
    <div style={{ minHeight: 760, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        tabs={tabsIconOnly}
        showUserArea={false}
      />
    </div>
  )
}

function IconOnlyPreview() {
  return (
    <div style={{ minHeight: 720, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel=""
        useBellIcon
        buttonVariant="secondary"
        tabs={tabsSingle}
        showUserArea={false}
      />
    </div>
  )
}

function EmptyStatePreview() {
  return (
    <div style={{ minHeight: 620, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        tabs={[{ id: 'all', label: 'Todas', items: [] }]}
        showUserArea
        user={{
          name: 'Nome do Usuário',
          email: 'nome.sobrenome@dominio.com',
        }}
      />
    </div>
  )
}

function NoCloseButtonPreview() {
  return (
    <div style={{ minHeight: 720, display: 'flex', alignItems: 'flex-start' }}>
      <Notification
        className="govrs-notification--docs-inline"
        buttonLabel="Notificações"
        useBellIcon
        tabs={tabsSingle}
        showUserArea={false}
        showCloseButton={false}
      />
    </div>
  )
}

function TriggerStylesPreview() {
  return (
    <div style={{ minHeight: 760, display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Notification
          className="govrs-notification--docs-inline"
          buttonLabel="Primário grande"
          useBellIcon
          buttonVariant="primary"
          buttonSize="large"
          tabs={tabsSingle}
          showUserArea={false}
        />
        <Notification
          className="govrs-notification--docs-inline"
          buttonLabel="Secundário médio"
          useBellIcon
          buttonVariant="secondary"
          buttonSize="medium"
          tabs={tabsSingle}
          showUserArea={false}
        />
        <Notification
          className="govrs-notification--docs-inline"
          buttonLabel="Terciário pequeno"
          useBellIcon
          buttonVariant="tertiary"
          buttonSize="small"
          tabs={tabsSingle}
          showUserArea={false}
        />
      </div>
    </div>
  )
}

export const Documentation: Story = {
  name: 'Documentação',
  args: {
    tabs: tabsSingle,
  },
  parameters: {
    docsOnly: true,
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação Guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Notificações</h3>}
        description="Componente para exibir notificações em painel ancorado ao botão, com suporte a usuário, abas e estado vazio."
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura do objeto tabs"
        description="A prop tabs é obrigatória e define as seções e itens exibidos no painel."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Tipos">
            <pre style={storyDocsStyles.codeBlock}>
              <code>{`type NotificationItem = {
  id: string | number
  title: ReactNode
  description: ReactNode
  time?: ReactNode
}

type NotificationTab = {
  id: string | number
  label?: ReactNode
  icon?: IconDefinition
  items: NotificationItem[]
}`}</code>
            </pre>
          </StoryPreviewCard>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <StoryPreviewCard label="Sem abas visuais (1 grupo)">
            <p style={storyDocsStyles.statText}>
              Para não exibir navegação de abas, envie apenas 1 item no array de tabs.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="Com abas visuais (2+ grupos)">
            <p style={storyDocsStyles.statText}>
              Para exibir o seletor de abas, envie 2 ou mais grupos no array de tabs.
            </p>
          </StoryPreviewCard>
        </div>
        </div>

        <SandboxExample
          title="Exemplo sem abas visuais"
          description="Apenas um grupo em tabs. O painel mostra direto a lista de notificações."
          code={tabsSingleCode}
          allowOverflow
        >
          <BasicPreview />
        </SandboxExample>

        <SandboxExample
          title="Exemplo com abas visuais — só texto"
          description="Dois ou mais grupos em tabs. O painel passa a renderizar a barra de abas."
          code={tabsMultipleCode}
          allowOverflow
        >
          <TabsPreview />
        </SandboxExample>

        <SandboxExample
          title="Exemplo com abas visuais — ícone e texto"
          description="Informe icon e label na tab. A posição do ícone é definida por iconPosition no Notification (left, right, top ou bottom)."
          code={tabsWithIconAndTextCode}
          allowOverflow
        >
          <TabsIconAndTextPreview />
        </SandboxExample>

        <SandboxExample
          title="Exemplo com abas visuais — só ícone"
          description="Omita label e informe apenas icon. A aba exibe somente o ícone."
          code={tabsIconOnlyCode}
          allowOverflow
        >
          <TabsIconOnlyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props principais"
        description="Resumo das props mais relevantes para controlar conteúdo, estilo e comportamento do componente."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="tabs (obrigatório)">
            <p style={storyDocsStyles.statText}>
              Array de grupos de notificações. Controla conteúdo e, com 2+ grupos, exibe navegação por abas.
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="buttonLabel">
            <p style={storyDocsStyles.statText}>
              Texto do botão disparador. Se vazio, o botão mostra apenas o ícone (modo circular).
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="showUserArea + user">
            <p style={storyDocsStyles.statText}>
              Exibe a área do usuário no topo do painel. user aceita name e email (ambos opcionais).
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="buttonVariant e buttonSize">
            <p style={storyDocsStyles.statText}>
              Permite combinar estilo e tamanho do botão disparador com o restante da interface.
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="onNotificationClick">
            <p style={storyDocsStyles.statText}>
              Callback chamado ao clicar em um item da lista, recebendo o id da notificação.
            </p>
          </StoryPreviewCard>
          <StoryPreviewCard label="onClose">
            <p style={storyDocsStyles.statText}>
              Callback chamado quando o painel é fechado por botão fechar, clique fora ou tecla Esc.
            </p>
          </StoryPreviewCard>
        </div>
      </SectionCard>

      <SectionCard
        title="Exemplos de uso"
        description="Cenários comuns de implementação com trecho de código para copiar e testar."
      >
        <SandboxExample
          title="Variações do botão disparador"
          description="Exemplo com combinações de buttonVariant e buttonSize para ajustar estilo e hierarquia visual."
          code={triggerStylesExampleCode}
          allowOverflow
        >
          <TriggerStylesPreview />
        </SandboxExample>

        <SandboxExample
          title="Básico"
          description="Botão com rótulo e lista de notificações sem área do usuário."
          code={basicExampleCode}
          allowOverflow
        >
          <BasicPreview />
        </SandboxExample>

        <SandboxExample
          title="Com área do usuário"
          description="Exibe nome e e-mail no topo do painel."
          code={userAreaExampleCode}
          allowOverflow
        >
          <UserAreaPreview />
        </SandboxExample>

        <SandboxExample
          title="Com tabs"
          description="Notificações agrupadas em múltiplas abas."
          code={tabsExampleCode}
          allowOverflow
        >
          <TabsPreview />
        </SandboxExample>

        <SandboxExample
          title="Botão somente com sino"
          description="Quando buttonLabel é vazio, o gatilho vira botão circular com ícone."
          code={iconOnlyExampleCode}
          allowOverflow
        >
          <IconOnlyPreview />
        </SandboxExample>

        <SandboxExample
          title="Estado vazio"
          description="Quando items estiver vazio, o componente mostra a mensagem de vazio."
          code={emptyStateExampleCode}
          allowOverflow
        >
          <EmptyStatePreview />
        </SandboxExample>

        <SandboxExample
          title="Sem botão de fechar (X)"
          description="Use showCloseButton={false} quando o painel não deve exibir o botão X no cabeçalho."
          code={noCloseButtonExampleCode}
          allowOverflow
        >
          <NoCloseButtonPreview />
        </SandboxExample>
      </SectionCard>

    </DocsStoryLayout>
  ),
}

function InteractivePreview(args: InteractivePreviewProps) {
  const [selectedNotification, setSelectedNotification] = useState<string | number | null>(null)

  const presetItems =
    (dataPresets[args.dataPreset ?? 'default'] ?? presetDefault)[0]?.items ?? []

  const resolvedTabs: Notification.Tab[] = args.emptyState
    ? [{ id: 'all', label: 'Todas', items: [] }]
    : args.tabMode === 'iconAndText'
      ? [
          { id: 'all', label: 'Todas', icon: faBell, items: presetItems },
          { id: 'important', label: 'Importantes', icon: faStar, items: [] },
          { id: 'messages', label: 'Mensagens', icon: faEnvelope, items: [] },
        ]
      : args.tabMode === 'iconOnly'
        ? [
            { id: 'all', icon: faBell, items: presetItems },
            { id: 'important', icon: faTriangleExclamation, items: [] },
            { id: 'updates', icon: faRefresh, items: [] },
          ]
        : args.tabMode === 'text'
          ? [
              { id: 'important', label: 'Importantes', items: presetItems },
              { id: 'updates', label: 'Atualizações', items: [] },
              { id: 'messages', label: 'Mensagens', items: [] },
            ]
          : [{ id: 'all', label: 'Todas', items: presetItems }]

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <Notification
        buttonLabel="Notificações (3)"
        useBellIcon
        buttonVariant="secondary"
        buttonSize="medium"
        tabs={resolvedTabs}
        iconPosition={args.tabMode === 'iconAndText' ? args.iconPosition : undefined}
        showUserArea={args.showUserArea}
        user={
          args.showUserArea
            ? {
                name: 'Nome do Usuário',
                email: 'nome.sobrenome@dominio.com',
              }
            : undefined
        }
        onNotificationClick={(id) => setSelectedNotification(id)}
      />

      {selectedNotification ? (
        <p style={{ ...storyDocsStyles.statText, margin: 0 }}>
          Última notificação clicada: <strong>{selectedNotification}</strong>
        </p>
      ) : null}
    </div>
  )
}

export const Interactive: StoryObj<InteractivePreviewProps> = {
  name: 'Interativo',
  render: (args) => <InteractivePreview {...args} />,
  args: {
    tabMode: 'text',
    iconPosition: 'left',
    showUserArea: true,
    emptyState: false,
    dataPreset: 'default',
    modoContraste: false,
  },
  parameters: {
    controls: {
      include: [
        'tabMode',
        'iconPosition',
        'showUserArea',
        'emptyState',
        'dataPreset',
        'modoContraste',
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
      options: ['single', 'text', 'iconAndText', 'iconOnly'],
      description:
        'Modo das abas: uma única lista (single), só texto (text), ícone + texto (iconAndText) ou só ícone (iconOnly).',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'text' },
      },
    },
    iconPosition: {
      name: 'iconPosition',
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Posição do ícone nas abas. Disponível quando tabMode é iconAndText.',
      if: { arg: 'tabMode', eq: 'iconAndText' },
      table: {
        category: 'Aparência',
        type: { summary: "'left' | 'right' | 'top' | 'bottom'" },
        defaultValue: { summary: 'left' },
      },
    },
    showUserArea: {
      control: 'boolean',
      table: { category: 'Conteúdo' },
    },
    emptyState: {
      control: 'boolean',
      description: 'Mostra estado vazio de notificações.',
      table: { category: 'Conteúdo' },
    },
    dataPreset: {
      control: 'select',
      options: ['default', 'allNew', 'withDisabled', 'allRead', 'single'],
      description: 'Conjunto de dados das notificações exibidas na primeira aba.',
      table: {
        category: 'Conteúdo',
        defaultValue: { summary: 'default' },
        type: {
          summary: 'string',
          detail: 'default — mix de novas e lidas\nallNew — todas novas\nwithDisabled — com itens desabilitados\nallRead — todas lidas\nsingle — apenas uma notificação',
        },
      },
    },
  },
}
