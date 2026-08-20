import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Step } from './Step'
import './Step.scss'
import '../../foundations/styles/index.scss'

type StepPreset = 'numeric' | 'icons' | 'states' | 'links'

type StepInteractiveArgs = Omit<Step.Props, 'steps' | 'onStepClick' | 'className'> & {
  preset: StepPreset
  orientation: NonNullable<Step.Props['orientation']>
  variant: NonNullable<Step.Props['variant']>
  labelPosition: NonNullable<Step.Props['labelPosition']>
}

const docsVariantTags = ['horizontal', 'vertical', 'dotted', 'plain', 'activeIndex']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa representar um fluxo em etapas, com leitura visual do progresso, rótulos contextuais e suporte a orientação horizontal ou vertical.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar orientação, variante, posição das labels, activeIndex e diferentes conjuntos de etapas.",
  },
  {
    title: 'Comportamento',
    text: 'O componente atualiza o passo ativo ao clique no círculo de cada etapa, e activeIndex permite inicializar ou ressincronizar externamente qual etapa deve ficar ativa.',
  },
] satisfies Array<{ title: string; text: string }>

const SEARCH_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const SETTINGS_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 3.11 17.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.27-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.7 3.11l.06.06c.5.5 1.1.7 1.82.33.6-.3 1.3-.3 1.82 0 .7.4 1 1 1 1.51V6a2 2 0 1 1 4 0v.09c.1.7.6 1.27 1.3 1.51.7.3 1.27.3 1.82 0 .7-.4 1-1 1-1.51V3a2 2 0 1 1 4 0v.09c0 .7.4 1.27 1 1.51.6.3 1.3.3 1.82 0 .7-.4 1-1 1.51V6a2 2 0 1 1 0 4h-.09c-.7 0-1.27.4-1.51 1a1.65 1.65 0 0 0 .33 1.82l.06.06A2 2 0 0 1 19.4 15z"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
)

const HELP_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9.09 9a3 3 0 1 1 5.82 0c0 2-3 2.5-3 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const basicSteps: Step.Item[] = [
  { label: 'Identificação' },
  { label: 'Dados complementares' },
  { label: 'Revisão' },
  { label: 'Conclusão' },
]

const iconSteps: Step.Item[] = [
  { label: 'Buscar', icon: SEARCH_ICON },
  { label: 'Configurar', icon: SETTINGS_ICON },
  { label: 'Ajuda', icon: HELP_ICON },
]

const stateSteps: Step.Item[] = [
  { label: 'Concluído', state: 'success' },
  { label: 'Atenção', state: 'warning' },
  { label: 'Erro', state: 'error' },
  { label: 'Informação', state: 'info' },
]

const linkSteps: Step.Item[] = [
  { label: 'Triagem', href: '#triagem' },
  { label: 'Validação', href: '#validacao' },
  { label: 'Revisão', href: '#revisao', state: 'warning' },
  { label: 'Envio', href: '#envio' },
]

const positionSteps: Step.Item[] = [
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
]

const basicExampleCode = `<Step
  activeIndex={0}
  steps={[
    { label: 'Identificação' },
    { label: 'Dados complementares' },
    { label: 'Revisão' },
    { label: 'Conclusão' },
  ]}
/>`

const orientationExampleCode = `<Step orientation="horizontal" activeIndex={0} steps={steps} />

<Step orientation="vertical" activeIndex={0} steps={steps} />`

const variantsExampleCode = `<Step activeIndex={1} steps={steps} />

<Step variant="dotted" activeIndex={1} steps={steps} />

<Step variant="plain" activeIndex={1} steps={steps} />`

const controlledExampleCode = `const [activeIndex, setActiveIndex] = useState(1)

<Step
  steps={steps}
  activeIndex={activeIndex}
  onStepClick={(event, step, index) => {
    event.preventDefault()
    setActiveIndex(index)
  }}
/>`

function cloneStepItems(steps: Step.Item[]) {
  return steps.map((step) => ({ ...step }))
}

function buildPresetSteps(preset: StepPreset) {
  switch (preset) {
    case 'icons':
      return cloneStepItems(iconSteps)
    case 'states':
      return cloneStepItems(stateSteps)
    case 'links':
      return cloneStepItems(linkSteps)
    case 'numeric':
    default:
      return cloneStepItems(basicSteps)
  }
}

function StepPreviewFrame({
  orientation,
  children,
}: {
  orientation: Step.Orientation
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: orientation === 'vertical' ? 360 : 760,
        height: orientation === 'vertical' ? 360 : undefined,
        minHeight: orientation === 'vertical' ? 360 : undefined,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

function StepBasicPreview() {
  return (
    <StepPreviewFrame orientation="horizontal">
      <Step steps={basicSteps} activeIndex={0} />
    </StepPreviewFrame>
  )
}

function StepOrientationPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Horizontal">
        <StepPreviewFrame orientation="horizontal">
          <Step steps={basicSteps} activeIndex={0} />
        </StepPreviewFrame>
      </StoryPreviewCard>

      <StoryPreviewCard label="Vertical">
        <StepPreviewFrame orientation="vertical">
          <Step orientation="vertical" labelPosition="right" steps={basicSteps} activeIndex={0} />
        </StepPreviewFrame>
      </StoryPreviewCard>
    </div>
  )
}

function StepVariantsPreview() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <StoryPreviewCard label="Default">
        <StepPreviewFrame orientation="horizontal">
          <Step steps={stateSteps} activeIndex={1} />
        </StepPreviewFrame>
      </StoryPreviewCard>

      <StoryPreviewCard label="Dotted">
        <StepPreviewFrame orientation="horizontal">
          <Step variant="dotted" steps={stateSteps} activeIndex={1} />
        </StepPreviewFrame>
      </StoryPreviewCard>

      <StoryPreviewCard label="Plain">
        <StepPreviewFrame orientation="horizontal">
          <Step variant="plain" steps={stateSteps} activeIndex={1} />
        </StepPreviewFrame>
      </StoryPreviewCard>
    </div>
  )
}

function StepLabelPositionsPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Acima">
        <StepPreviewFrame orientation="horizontal">
          <Step steps={positionSteps} labelPosition="above" activeIndex={0} />
        </StepPreviewFrame>
      </StoryPreviewCard>

      <StoryPreviewCard label="Abaixo">
        <StepPreviewFrame orientation="horizontal">
          <Step steps={positionSteps} labelPosition="below" activeIndex={0} />
        </StepPreviewFrame>
      </StoryPreviewCard>

      <StoryPreviewCard label="Esquerda">
        <StepPreviewFrame orientation="vertical">
          <Step orientation="vertical" steps={positionSteps} labelPosition="left" activeIndex={0} />
        </StepPreviewFrame>
      </StoryPreviewCard>

      <StoryPreviewCard label="Direita">
        <StepPreviewFrame orientation="vertical">
          <Step orientation="vertical" steps={positionSteps} labelPosition="right" activeIndex={0} />
        </StepPreviewFrame>
      </StoryPreviewCard>
    </div>
  )
}

function StepControlledPreview() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [lastClicked, setLastClicked] = useState<string>('Nenhum passo acionado ainda.')

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <StepPreviewFrame orientation="horizontal">
        <Step
          steps={linkSteps}
          activeIndex={activeIndex}
          onStepClick={(event, step, index) => {
            event.preventDefault()
            setActiveIndex(index)
            setLastClicked(typeof step.label === 'string' ? step.label : `Passo ${index + 1}`)
          }}
        />
      </StepPreviewFrame>

      <p style={storyDocsStyles.statText}>
        <strong>Índice ativo:</strong> {activeIndex}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Último clique:</strong> {lastClicked}
      </p>
    </div>
  )
}

const meta = {
  title: 'Navegação/Step',
  component: Step,
  args: {
    preset: 'numeric',
    orientation: 'horizontal',
    variant: 'default',
    labelPosition: 'below',
    activeIndex: 0,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<StepInteractiveArgs>

export default meta

type Story = StoryObj<StepInteractiveArgs>

export const StepDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Step</h3>}
        description={
          <>
            O componente <code>Step</code> organiza fluxos sequenciais com marcadores visuais,
            labels configuráveis, variações de apresentação e suporte a controle externo do passo ativo.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura principal"
        description="A API central gira em torno de um array de steps. Cada item descreve o rótulo, o estado visual, o ícone opcional, o link e o comportamento de clique individual."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>steps</code> recebe a lista de passos que compõem o fluxo.</li>
          <li><code>orientation</code> alterna entre apresentação horizontal e vertical.</li>
          <li><code>variant</code> controla se o marcador será padrão, dotted ou plain.</li>
          <li><code>activeIndex</code> define qual passo começa ativo e também pode ressincronizar o estado ativo a partir do componente pai.</li>
        </ul>

        <SandboxExample
          title="Fluxo numerado"
          description="Exemplo base com quatro etapas e o primeiro passo ativo." 
          code={basicExampleCode}
          notes={[
            'Quando nenhum item vem com number, o componente usa o índice + 1 no marcador.',
            'Ao clicar no círculo de outro step, o componente atualiza visualmente a etapa ativa.',
            'Se o componente pai também precisar acompanhar esse estado, basta reagir ao onStepClick e atualizar activeIndex.',
          ]}
        >
          <StepBasicPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Orientação"
        description="O mesmo contrato pode ser exibido em linha ou em coluna. A orientação vertical é útil para fluxos mais longos ou áreas estreitas, enquanto a horizontal funciona bem em cabeçalhos de etapas e formulários."
      >
        <SandboxExample
          title="Horizontal e vertical"
          description="Comparação direta entre as duas orientações suportadas pelo componente."
          code={orientationExampleCode}
          notes={[
            'Na orientação vertical, o preview costuma precisar de mais altura para que os conectores respirem bem.',
            'A posição das labels pode mudar conforme a orientação sem alterar o contrato do array steps.',
          ]}
        >
          <StepOrientationPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variantes"
        description="A variante default mostra números ou ícones e pode exibir marcadores de estado. As variantes dotted e plain condensam a informação visual e usam o tooltip para reforçar o contexto do passo."
      >
        <SandboxExample
          title="Default, dotted e plain"
          description="Panorama com as três formas principais de apresentação do Step."
          code={variantsExampleCode}
          notes={[
            'Ícones só entram na variante default; nas outras variantes o foco fica no marcador simplificado e no tooltip.',
            'Em dotted, um step com state substitui o ponto por um marcador maior.',
            'Em plain, o estado permanece perceptível pelo tooltip e pelo contexto do fluxo, sem adicionar um marcador extra visível.',
          ]}
        >
          <StepVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Posição das labels"
        description="labelPosition define a relação entre o texto e o marcador. Em combinações mais compactas, o componente também reaproveita essa informação para posicionar o tooltip de forma coerente."
      >
        <StepLabelPositionsPreview />
      </SectionCard>

      <SectionCard
        title="Interação e controle"
        description="O Step reage ao clique no círculo atualizando o passo ativo internamente, e o callback onStepClick continua recebendo o evento do DOM, o objeto do passo e o índice acionado para sincronizar esse estado com lógica externa quando necessário."
      >
        <SandboxExample
          title="Uso controlado"
          description="Exemplo com atualização explícita do passo ativo a partir do clique do usuário."
          code={controlledExampleCode}
          notes={[
            'onStepClick recebe event, step e index sempre que o círculo de uma etapa é acionado, preservando acesso ao item original da lista.',
            'Se um step tiver href, o story intercepta o evento apenas para evitar navegação real durante a demonstração.',
          ]}
        >
          <StepControlledPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites e boas práticas"
        description="O Step é um componente de fluxo visual. Ele funciona melhor quando cada passo resume um estágio claro e o conjunto não disputa atenção com muita informação adicional."
      >
        <ul style={storyDocsStyles.list}>
          <li>Use <code>icon</code> apenas quando o marcador precisar reforçar rapidamente o significado do passo na variante default.</li>
          <li>Use <code>state</code> para sinalizar conclusão, alerta, erro ou informação contextual por etapa.</li>
          <li>Se o passo tiver lógica própria, use <code>step.onClick</code>; se a orquestração estiver no componente pai, use <code>onStepClick</code>.</li>
          <li>Quando houver <code>href</code>, o marcador vira um link real e continua aceitando callbacks de clique.</li>
          <li>Se a experiência exigir descrição longa por etapa, considere combinar o Step com outro componente de conteúdo em vez de sobrecarregar o rótulo.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

function StepInteractiveCanvas({ args }: { args: StepInteractiveArgs }) {
  const steps = useMemo(() => buildPresetSteps(args.preset), [args.preset])
  const maxIndex = Math.max(0, steps.length - 1)
  const initialIndex = Math.min(args.activeIndex, maxIndex)
  const [currentActiveIndex, setCurrentActiveIndex] = useState(initialIndex)
  const [observedActiveIndex, setObservedActiveIndex] = useState(initialIndex)
  const [lastClickedLabel, setLastClickedLabel] = useState<string>('Nenhum passo acionado ainda.')

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16, maxWidth: 840 }}>
      <StepPreviewFrame orientation={args.orientation}>
        <Step
          orientation={args.orientation}
          variant={args.variant}
          labelPosition={args.labelPosition}
          steps={steps}
          activeIndex={currentActiveIndex}
          onStepClick={(event, step, index) => {
            event.preventDefault()
            setObservedActiveIndex(index)
            setLastClickedLabel(
              typeof step.label === 'string' || typeof step.label === 'number'
                ? String(step.label)
                : `Passo ${index + 1}`,
            )
            setCurrentActiveIndex(index)
          }}
        />
      </StepPreviewFrame>

      <div style={{ display: 'grid', gap: 8 }}>
        <p style={storyDocsStyles.statText}>
          <strong>Preset:</strong> {args.preset}
        </p>

        <p style={storyDocsStyles.statText}>
          <strong>Índice ativo observado:</strong> {observedActiveIndex}
        </p>

        <p style={storyDocsStyles.statText}>
          <strong>Último clique:</strong> {lastClickedLabel}
        </p>
      </div>
    </div>
  )
}

function StepInteractivePreview(args: StepInteractiveArgs) {
  const previewKey = [
    args.preset,
    args.orientation,
    args.variant,
    args.labelPosition,
    args.activeIndex,
  ].join('|')

  return <StepInteractiveCanvas key={previewKey} args={args} />
}

export const StepInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    preset: {
      control: { type: 'select' },
      options: ['numeric', 'icons', 'states', 'links'],
      description:
        'Seleciona apenas um preset de steps para visualização no Storybook. Esse control não faz parte do componente Step.',
      table: { category: 'Exemplos' },
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'Define se o fluxo será renderizado em linha ou em coluna.',
      table: { category: 'Estrutura' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'dotted', 'plain'],
      description: 'Controla a aparência do marcador principal de cada passo.',
      table: { category: 'Estrutura' },
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['above', 'below', 'left', 'right'],
      description: 'Posiciona a label em relação ao marcador ou ao tooltip, conforme a variante ativa.',
      table: { category: 'Estrutura' },
    },
    activeIndex: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Índice usado para inicializar ou ressincronizar o passo ativo no preview.',
      table: { category: 'Comportamento' },
    },
  },
  parameters: {
    controls: {
      exclude: ['steps', 'onStepClick', 'className'],
    },
  },
  render: (args) => <StepInteractivePreview {...args} />,
}