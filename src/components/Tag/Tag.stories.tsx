import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  faMagnifyingGlass,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Tag } from './Tag'
import './Tag.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['default', 'persistent', 'persistentGroup', 'status', 'count']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa rotular, indicar estado, oferecer remoção rápida ou permitir seleção compacta sem expandir a área ocupada por filtros e categorias.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar variant, ícone, fechamento, seleção persistente, status e contagem em uma única superfície de teste. A seção 'Guia de props' resume o que cada conjunto de props controla.",
  },
  {
    title: 'Comportamento',
    text: 'A variante default pode ser dispensada localmente, persistent mantém seleção de forma local ou controlada, persistentGroup funciona como grupo livre ou seleção única, status ignora props de ícone e count permanece apenas visual.',
  },
]

const interactionExampleCode = `<Tag label="Label 1" />
<Tag label="Busca" showIcon Icon={faMagnifyingGlass} />
<Tag label="Label" disabled />
<Tag label="Somente texto" showClose={false} />`

const persistentExampleCode = `<Tag variant="persistent" label="Tag 1" />
<Tag variant="persistent" label="Perfil" showIcon Icon={faUser} />
<Tag variant="persistent" label="Tag já ativa" defaultChecked disabled />`

const groupExampleCode = `const items = [
  { id: 'tag1', label: 'Tag 1' },
  { id: 'tag2', label: 'Tag 2' },
  { id: 'tag3', label: 'Tag 3', showIcon: true, Icon: faTag },
]

<Tag
  variant="persistentGroup"
  radio
  defaultSelected="tag2"
  items={items}
/>`

const statusExampleCode = `<Tag variant="status" status="online" label="Online" />
<Tag variant="status" status="offline" label="Offline" />
<Tag variant="status" status="away" label="Ausente" />
<Tag variant="status" status="online" showLabel={false} />
<Tag variant="status" status="online" showIcon Icon={faMagnifyingGlass} />`

const countExampleCode = `<Tag variant="count" count={9} />
<Tag variant="count" count={90} />
<Tag variant="count" count={190} />
<Tag variant="count" count={999} />
<Tag variant="count" count={2000} />`

const persistentGroupItems: Tag.GroupItem[] = [
  { id: 'tag1', label: 'Tag 1' },
  { id: 'tag2', label: 'Tag 2' },
  { id: 'tag3', label: 'Tag 3', showIcon: true, Icon: faTag },
]

const interactiveIconOptions = [undefined, 'faMagnifyingGlass', 'faUser', 'faTag'] as const

const interactiveIconMapping = {
  faMagnifyingGlass,
  faUser,
  faTag,
  undefined,
}

const interactiveIconLabels = {
  faMagnifyingGlass: 'Pesquisa',
  faUser: 'Usuario',
  faTag: 'Tag',
}

const interactiveDefaultSelectedMapping = {
  none: null,
  tag1: 'tag1',
  tag2: 'tag2',
  tag3: 'tag3',
} as const

type TagInteractiveArgs = {
  variant: Tag.Variant
  label: string
  disabled: boolean
  showIcon: boolean
  Icon?: Tag.LeadingIcon
  showClose: boolean
  checkIcon: boolean
  defaultChecked: boolean
  radio: boolean
  allowUnselect: boolean
  defaultSelected: keyof typeof interactiveDefaultSelectedMapping
  status: Tag.Status
  showLabel: boolean
  count: string
}

const meta = {
  title: 'Feedback/Tag',
  component: Tag,
  args: {
    variant: 'default',
    label: 'Label de exemplo',
    disabled: false,
    showIcon: false,
    Icon: undefined,
    showClose: true,
    checkIcon: true,
    defaultChecked: false,
    radio: true,
    allowUnselect: true,
    defaultSelected: 'tag2',
    status: 'online',
    showLabel: true,
    count: '190',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<TagInteractiveArgs>

export default meta

type Story = StoryObj<typeof meta>

function InteractionPreview() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Tag label="Label 1" />
      <Tag label="Busca" showIcon Icon={faMagnifyingGlass} />
      <Tag label="Label" disabled />
      <Tag label="Somente texto" showClose={false} />
    </div>
  )
}

function PersistentPreview() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Tag variant="persistent" label="Tag 1" />
      <Tag variant="persistent" label="Perfil" showIcon Icon={faUser} />
      <Tag variant="persistent" label="Tag ativa" defaultChecked />
      <Tag variant="persistent" label="Tag desabilitada" defaultChecked disabled />
    </div>
  )
}

function PersistentGroupPreview() {
  const [selected, setSelected] = useState<Tag.GroupItem['id'] | null>('tag2')

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Tag
        variant="persistentGroup"
        radio
        selected={selected}
        onChange={setSelected}
        items={persistentGroupItems}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Selecionada:</strong> {selected ?? 'Nenhuma'}
      </p>
    </div>
  )
}

function StatusPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Com rótulo">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Tag variant="status" status="online" label="Online" />
          <Tag variant="status" status="offline" label="Offline" />
          <Tag variant="status" status="away" label="Ausente" />
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Somente indicador">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Tag variant="status" status="online" showLabel={false} />
          <Tag variant="status" status="offline" showLabel={false} />
          <Tag variant="status" status="away" showLabel={false} />
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Props de ícone ignoradas">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <Tag variant="status" status="online" label="Online" showIcon Icon={faMagnifyingGlass} />
          <Tag variant="status" status="offline" label="Offline" showIcon Icon={faUser} />
        </div>
      </StoryPreviewCard>
    </div>
  )
}

function CountPreview() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Tag variant="count" count={9} />
      <Tag variant="count" count={90} />
      <Tag variant="count" count={190} />
      <Tag variant="count" count={999} />
      <Tag variant="count" count={2000} />
    </div>
  )
}

function buildInteractiveGroupItems(args: TagInteractiveArgs): Tag.GroupItem[] {
  return [
    {
      id: 'tag1',
      label: args.label || 'Tag 1',
      disabled: args.disabled,
      showIcon: args.showIcon,
      Icon: args.Icon,
      checkIcon: args.checkIcon,
    },
    {
      id: 'tag2',
      label: 'Tag 2',
      disabled: args.disabled,
      showIcon: args.showIcon,
      Icon: args.Icon,
      checkIcon: args.checkIcon,
    },
    {
      id: 'tag3',
      label: 'Tag 3',
      disabled: args.disabled,
      showIcon: args.showIcon,
      Icon: args.Icon,
      checkIcon: args.checkIcon,
    },
  ]
}

function TagInteractiveCanvas(args: TagInteractiveArgs) {
  const [instanceKey, setInstanceKey] = useState(0)
  const resolvedDefaultSelected = interactiveDefaultSelectedMapping[args.defaultSelected]
  const [selected, setSelected] = useState<Tag.GroupItem['id'] | null>(resolvedDefaultSelected)

  useEffect(() => {
    setInstanceKey((currentKey) => currentKey + 1)
  }, [
    args.variant,
    args.label,
    args.disabled,
    args.showIcon,
    args.Icon,
    args.showClose,
    args.checkIcon,
    args.defaultChecked,
    args.status,
    args.showLabel,
    args.count,
  ])

  useEffect(() => {
    setSelected(resolvedDefaultSelected)
  }, [args.variant, args.radio, resolvedDefaultSelected])

  const showRestoreButton = args.variant === 'default' && args.showClose
  const showSelectedValue = args.variant === 'persistentGroup' && args.radio
  const showStatusIconNotice = args.variant === 'status' && (args.showIcon || args.Icon)

  let content = null

  switch (args.variant) {
    case 'persistent':
      content = (
        <Tag
          key={instanceKey}
          variant="persistent"
          label={args.label}
          disabled={args.disabled}
          showIcon={args.showIcon}
          Icon={args.Icon}
          checkIcon={args.checkIcon}
          defaultChecked={args.defaultChecked}
        />
      )
      break
    case 'persistentGroup':
      content = (
        <Tag
          key={instanceKey}
          variant="persistentGroup"
          items={buildInteractiveGroupItems(args)}
          radio={args.radio}
          allowUnselect={args.allowUnselect}
          defaultSelected={resolvedDefaultSelected}
          selected={args.radio ? selected : undefined}
          onChange={args.radio ? setSelected : undefined}
          ariaLabel="Grupo interativo de tags"
        />
      )
      break
    case 'status':
      content = (
        <Tag
          key={instanceKey}
          variant="status"
          status={args.status}
          label={args.label}
          showLabel={args.showLabel}
          showIcon={args.showIcon}
          Icon={args.Icon}
        />
      )
      break
    case 'count':
      content = <Tag key={instanceKey} variant="count" count={args.count} />
      break
    case 'default':
    default:
      content = (
        <Tag
          key={instanceKey}
          label={args.label}
          disabled={args.disabled}
          showIcon={args.showIcon}
          Icon={args.Icon}
          showClose={args.showClose}
        />
      )
      break
  }

  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      {content}

      {showRestoreButton ? (
        <Button variant="secondary" size="small" onClick={() => setInstanceKey((currentKey) => currentKey + 1)}>
          Restaurar tag
        </Button>
      ) : null}

      {showSelectedValue ? (
        <p style={storyDocsStyles.statText}>
          <strong>Selecionada:</strong> {selected ?? 'Nenhuma'}
        </p>
      ) : null}

      {showStatusIconNotice ? (
        <p style={storyDocsStyles.statText}>
          <strong>Observação:</strong> a variante status ignora <code>showIcon</code> e <code>Icon</code>.
        </p>
      ) : null}
    </div>
  )
}

export const TagDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Tag</h3>}
        description={
          <>
            O componente <code>Tag</code> reúne elementos compactos para interação rápida,
            seleção persistente, status, suporte opcional a ícones e contagem curta.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Interação compacta"
        description="A variação default cobre tags dispensáveis e também a leitura estática quando o botão de fechamento é ocultado. Ela mantém a ideia visual da origem, mas agora encaixada no contrato tipado do design system atual."
      >
        <SandboxExample
          title="Dispensável e texto simples"
          description="As tags abaixo cobrem os cenários de remoção rápida, ocultação do ícone e versão puramente textual."
          code={interactionExampleCode}
          notes={[
            'showClose remove apenas a instância renderizada localmente.',
            'showIcon decide se quer se mostrar um ícone na tag, vem false por padrão.',
            'O ícone só aparece quando showIcon=true e a prop Icon recebe um ícone válido.',
          ]}
        >
          <InteractionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Guia de props"
        description="As props do Tag mudam de peso conforme a variante ativa. O resumo abaixo separa o que é compartilhado pelas tags interativas e o que é específico de cada família para reduzir combinações confusas no consumo."
      >
        <div style={{ ...storyDocsStyles.cardGrid, alignItems: 'start' }}>
          <StoryPreviewCard label="Base interativa">
            <ul style={storyDocsStyles.list}>
              <li><code>label</code> define o conteúdo textual principal exibido pela tag.</li>
              <li><code>children</code> pode substituir <code>label</code> quando o conteúdo precisar de marcação React adicional.</li>
              <li><code>disabled</code> bloqueia clique, fechamento e alternância nas variantes interativas.</li>
              <li><code>showIcon</code> habilita a área de ícone, mas não renderiza nada sozinho.</li>
              <li><code>Icon</code> informa qual ícone do Font Awesome deve aparecer quando <code>showIcon</code> estiver ativo.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Default">
            <ul style={storyDocsStyles.list}>
              <li><code>showClose</code> adiciona o botão de remoção local e torna a tag dispensável.</li>
              <li><code>closeButtonLabel</code> ajusta o rótulo acessível do botão de fechar.</li>
              <li><code>onClose</code> permite reagir ao fechamento local com analytics, estado externo ou telemetria.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Persistent">
            <ul style={storyDocsStyles.list}>
              <li><code>checkIcon</code> controla a presença do marcador visual de seleção.</li>
              <li><code>defaultChecked</code> define o estado inicial em uso não controlado.</li>
              <li><code>checked</code> e <code>onChange</code> permitem transformar a tag em um componente controlado.</li>
              <li>Essa variante funciona como toggle compacto e preserva a mesma base visual da tag interativa comum.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="PersistentGroup">
            <ul style={storyDocsStyles.list}>
              <li><code>items</code> recebe a lista de tags do grupo. Cada item aceita <code>id</code>, <code>label</code>, <code>children</code>, <code>disabled</code>, <code>showIcon</code>, <code>Icon</code>, <code>checkIcon</code>, <code>checked</code>, <code>defaultChecked</code>, <code>onChange</code> e <code>className</code>.</li>
              <li><code>radio</code> troca entre seleção única e renderização livre do grupo.</li>
              <li><code>defaultSelected</code> define qual item começa ativo em modo radio.</li>
              <li><code>selected</code> e <code>onChange</code> permitem controle externo da seleção do grupo.</li>
              <li>Sem <code>radio</code>, cada item pode continuar controlado individualmente pelo próprio conjunto <code>checked</code> e <code>onChange</code>.</li>
              <li><code>allowUnselect</code> decide se o item ativo pode ser desmarcado ao receber um novo clique.</li>
              <li><code>ariaLabel</code> ajusta a descrição acessível do agrupamento.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Status">
            <ul style={storyDocsStyles.list}>
              <li><code>status</code> escolhe o indicador visual entre <code>online</code>, <code>offline</code> e <code>away</code>.</li>
              <li><code>label</code> controla o texto ao lado do indicador.</li>
              <li><code>showLabel</code> permite mostrar apenas o ponto de status quando necessário.</li>
              <li><code>showIcon</code> e <code>Icon</code> são ignorados nessa variante para manter a anatomia de status estável.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Count">
            <ul style={storyDocsStyles.list}>
              <li><code>count</code> aceita número ou string para a contagem exibida.</li>
              <li>Valores numéricos acima de <code>999</code> são truncados visualmente para <code>999+</code>.</li>
              <li>Essa variante é puramente visual e não expõe comportamento de clique ou alternância.</li>
            </ul>
          </StoryPreviewCard>
        </div>
      </SectionCard>

      <SectionCard
        title="Persistência e grupo"
        description="As variantes persistent e persistentGroup cobrem seleção individual, agrupamento livre e seleção única, mantendo a semântica do componente de origem sem depender de subcomponentes externos ao arquivo principal."
      >
        <SandboxExample
          title="Tag persistente"
          description={
            <>
              A tag persistente se comporta como um toggle compacto, com suporte a estado interno,
              controle externo e ícone de confirmação. O conjunto <code>checked</code>, <code>defaultChecked</code>,{' '}
              <code>checkIcon</code> e <code>onChange</code> concentra o contrato principal dessa variação.
            </>
          }
          code={persistentExampleCode}
        >
          <PersistentPreview />
        </SandboxExample>

        <SandboxExample
          title="Grupo persistente"
          description={
            <>
              A API recebe uma lista de itens tipados em vez de children soltos, o que aproxima a implementação
              do padrão do projeto atual. Em modo livre, cada item pode usar <code>checked</code>,{' '}
              <code>defaultChecked</code>, <code>onChange</code> e <code>className</code>; com <code>radio</code>, props como{' '}
              <code>defaultSelected</code>, <code>selected</code> e <code>allowUnselect</code> controlam a seleção única.
            </>
          }
          code={groupExampleCode}
        >
          <PersistentGroupPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Status e contagem"
        description="As variantes não interativas preservam os cenários do catálogo original para indicador de presença e contagem compacta. O ícone continua sendo um refinamento das tags interativas e não cria uma variante separada no componente."
      >
        <SandboxExample
          title="Status"
          description={
            <>
              Indicadores de status aceitam rótulo textual ou apenas a superfície circular. A combinação entre{' '}
              <code>status</code>, <code>label</code> e <code>showLabel</code> cobre toda a variação visual; mesmo com{' '}
              <code>showIcon</code> e <code>Icon</code> informados, a renderização de status não muda.
            </>
          }
          code={statusExampleCode}
        >
          <StatusPreview />
        </SandboxExample>

        <SandboxExample
          title="Contagem"
          description={
            <>
              A variante count limita valores numéricos acima de 999 para manter a largura estável. Na prática,
              a prop <code>count</code> é o único ponto de configuração relevante dessa anatomia.
            </>
          }
          code={countExampleCode}
        >
          <CountPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites de uso"
        description="Tag funciona melhor com textos curtos e seleção compacta. Para mensagens longas ou feedback estruturado, Alerts e Badges continuam sendo escolhas mais apropriadas no catálogo atual."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>default</code> e <code>persistent</code> compartilham base visual, mas só <code>persistent</code> representa estado selecionável.</li>
          <li><code>persistentGroup</code> usa <code>items</code> para manter a API explícita e mais alinhada aos outros componentes do projeto.</li>
          <li><code>showIcon</code> e <code>Icon</code> refinam apenas as tags interativas; em <code>status</code> essas props são ignoradas.</li>
          <li><code>status</code> e <code>count</code> são variantes visuais e não oferecem clique.</li>
          <li>Se a interface precisar apenas de um rótulo sem interação e com semântica de feedback, <code>Badges</code> tende a comunicar melhor a intenção.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const TagInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'persistent', 'persistentGroup', 'status', 'count'],
      description: 'Seleciona a anatomia principal do componente.',
      table: { category: 'Variante' },
    },
    label: {
      control: 'text',
      description: 'Texto principal da tag. Em persistentGroup, alimenta o primeiro item do conjunto.',
      table: { category: 'Conteúdo' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação nas variantes clicáveis e nos itens do grupo persistente.',
      table: { category: 'Estado' },
    },
    showIcon: {
      control: 'boolean',
      description: 'Ativa a área de ícone nas variantes interativas, mas só renderiza algo quando a prop Icon também for informada.',
      table: { category: 'Estrutura' },
    },
    Icon: {
      control: { type: 'select' },
      options: interactiveIconOptions,
      mapping: interactiveIconMapping,
      labels: interactiveIconLabels,
      description: 'Escolhe o ícone exibido. Sem showIcon=true, esta prop não gera renderização visual.',
      table: { category: 'Estrutura' },
    },
    showClose: {
      control: 'boolean',
      description: 'Exibe o botão de remoção local. Só tem efeito na variante default.',
      table: { category: 'Estrutura' },
    },
    checkIcon: {
      control: 'boolean',
      description: 'Exibe o ícone de confirmação nas variantes persistent e persistentGroup.',
      table: { category: 'Estrutura' },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Define o estado inicial da seleção na variante persistent.',
      table: { category: 'Estado' },
    },
    radio: {
      control: 'boolean',
      description: 'Ativa o comportamento de seleção única na variante persistentGroup.',
      table: { category: 'Comportamento' },
    },
    allowUnselect: {
      control: 'boolean',
      description: 'Permite limpar a seleção ao clicar novamente no item ativo no grupo persistente.',
      table: { category: 'Comportamento' },
    },
    defaultSelected: {
      control: { type: 'select' },
      options: Object.keys(interactiveDefaultSelectedMapping),
      labels: {
        none: 'Nenhuma',
        tag1: 'Tag 1',
        tag2: 'Tag 2',
        tag3: 'Tag 3',
      },
      description: 'Seleciona o item inicial quando a variante persistentGroup estiver em modo radio.',
      table: { category: 'Estado' },
    },
    status: {
      control: { type: 'radio' },
      options: ['online', 'offline', 'away'],
      description: 'Escolhe o estado visual quando a variante status estiver ativa.',
      table: { category: 'Estado' },
    },
    showLabel: {
      control: 'boolean',
      description: 'Mostra ou oculta o rótulo textual na variante status.',
      table: { category: 'Estrutura' },
    },
    count: {
      control: 'text',
      description: 'Valor exibido na variante count. Valores acima de 999 viram 999+.',
      table: { category: 'Conteúdo' },
    },
  },
  render: (args) => <TagInteractiveCanvas {...(args as TagInteractiveArgs)} />,
}