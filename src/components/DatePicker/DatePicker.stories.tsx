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
import { DatePicker } from './DatePicker'
import './DatePicker.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['date', 'time', 'datetime', 'range', 'showClearButton']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando o formulário precisa usar os tipos nativos de data, horário ou data com horário, mas com a mesma moldura visual, limpeza rápida e documentação consistente do design system.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar a variante, o selectionMode, os limites e o passo do input. A documentação resume como o componente se comporta como frente para os três tipos nativos.",
  },
  {
    title: 'Comportamento',
    text: 'As variantes date, time e datetime abrem painéis próprios do design system. Em date, o selectionMode também pode reutilizar o calendário para escolher início e fim de um intervalo.',
  },
] satisfies Array<{ title: string; text: string }>

const basicUsageCode = `const [data, setData] = useState<string | null>(null)

<DatePicker
  variant="date"
  value={data}
  onChange={setData}
  max="2026-05-18"
/>`

const variantsExampleCode = `<DatePicker variant="date" value={data} onChange={setData} />
<DatePicker variant="time" value={hora} onChange={setHora} />
<DatePicker variant="datetime" value={agenda} onChange={setAgenda} />`

const restrictionExampleCode = `<DatePicker
  variant="date"
  value={data}
  onChange={setData}
  min="2026-04-18"
  max="2026-05-18"
/>

<DatePicker
  variant="time"
  value={hora}
  onChange={setHora}
  min="08:00"
  max="18:00"
  step={900}
/>`

const rangeExampleCode = `const [periodo, setPeriodo] = useState({
  start: null,
  end: null,
})

<DatePicker
  variant="date"
  selectionMode="range"
  name="periodo"
  rangeValue={periodo}
  onRangeChange={setPeriodo}
/>`

function formatDateInputValue(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getValueFormatLabel(variant: DatePicker.Variant) {
  if (variant === 'time') {
    return 'hh:mm'
  }

  if (variant === 'datetime') {
    return 'aaaa-mm-ddThh:mm'
  }

  return 'aaaa-mm-dd'
}

function DatePickerValueSummary({
  value,
  variant,
}: {
  value: DatePicker.Value
  variant: DatePicker.Variant
}) {
  if (!value) {
    return (
      <p style={storyDocsStyles.statText}>
        <strong>Valor atual:</strong> Nenhum valor selecionado
      </p>
    )
  }

  return (
    <div style={{ display: 'grid', gap: 4 }}>
      <p style={storyDocsStyles.statText}>
        <strong>Valor atual:</strong> {value}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Formato esperado:</strong> {getValueFormatLabel(variant)}
      </p>
    </div>
  )
}

function DatePickerRangeValueSummary({ value }: { value: DatePicker.RangeValue }) {
  if (!value.start && !value.end) {
    return (
      <p style={storyDocsStyles.statText}>
        <strong>Intervalo atual:</strong> Nenhuma data selecionada
      </p>
    )
  }

  return (
    <div style={{ display: 'grid', gap: 4 }}>
      <p style={storyDocsStyles.statText}>
        <strong>Data inicial:</strong> {value.start ?? 'Não definida'}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Data final:</strong> {value.end ?? 'Não definida'}
      </p>
    </div>
  )
}

function DatePickerDemo({
  helperText,
  ...props
}: DatePicker.SingleProps & { helperText?: string }) {
  const [value, setValue] = useState<DatePicker.Value>(null)

  return (
    <div style={{ display: 'grid', gap: 12, width: '100%' }}>
      <DatePicker {...props} value={value} onChange={setValue} />
      <DatePickerValueSummary value={value} variant={props.variant ?? 'date'} />
      {helperText ? <p style={storyDocsStyles.statText}>{helperText}</p> : null}
    </div>
  )
}

function DatePickerRangeDemo({
  helperText,
  ...props
}: DatePicker.DateRangeProps & { helperText?: string }) {
  const [value, setValue] = useState<DatePicker.RangeValue>({
    start: null,
    end: null,
  })

  return (
    <div style={{ display: 'grid', gap: 12, width: '100%' }}>
      <DatePicker {...props} rangeValue={value} onRangeChange={setValue} />
      <DatePickerRangeValueSummary value={value} />
      {helperText ? <p style={storyDocsStyles.statText}>{helperText}</p> : null}
    </div>
  )
}

const today = new Date()
const thirtyDaysAgo = new Date(today)
thirtyDaysAgo.setDate(today.getDate() - 30)

const todayDate = formatDateInputValue(today)
const thirtyDaysAgoDate = formatDateInputValue(thirtyDaysAgo)

type DatePickerInteractiveArgs = {
  variant?: DatePicker.Variant
  selectionMode?: 'single' | 'range'
  placeholder?: string
  min?: string
  max?: string
  step?: number
  name?: string
  nameMode?: DatePicker.RangeNameMode
  startName?: string
  endName?: string
  ariaLabel?: string
  disabled?: boolean
  showClearButton?: boolean
}

const meta = {
  title: 'Formulários/DatePicker',
  component: DatePicker,
  args: {
    variant: 'date',
    selectionMode: 'single',
    placeholder: 'Selecione a data',
    min: '',
    max: todayDate,
    step: 900,
    name: 'periodo',
    nameMode: 'object',
    startName: '',
    endName: '',
    ariaLabel: '',
    disabled: false,
    showClearButton: true,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<DatePickerInteractiveArgs>

export default meta

type Story = StoryObj<typeof meta>

function isInteractiveRangeMode(args: DatePickerInteractiveArgs) {
  return (args.variant ?? 'date') === 'date' && (args.selectionMode ?? 'single') === 'range'
}

function buildInteractiveSingleProps(args: DatePickerInteractiveArgs): DatePicker.SingleProps {
  const variant = args.variant ?? 'date'
  const baseProps = {
    placeholder: args.placeholder || undefined,
    ariaLabel: args.ariaLabel || undefined,
    name: args.name || undefined,
    disabled: args.disabled ?? false,
    showClearButton: args.showClearButton ?? true,
  }

  if (variant === 'time' || variant === 'datetime') {
    return {
      variant,
      min: args.min || undefined,
      max: args.max || undefined,
      step: args.step || undefined,
      ...baseProps,
    }
  }

  return {
    variant: 'date',
    selectionMode: 'single',
    min: args.min || undefined,
    max: args.max || undefined,
    ...baseProps,
  }
}

function buildInteractiveRangeProps(args: DatePickerInteractiveArgs): DatePicker.DateRangeProps {
  return {
    variant: 'date',
    selectionMode: 'range',
    placeholder: args.placeholder || undefined,
    ariaLabel: args.ariaLabel || undefined,
    name: args.name || undefined,
    nameMode: args.nameMode ?? 'object',
    startName: args.startName || undefined,
    endName: args.endName || undefined,
    disabled: args.disabled ?? false,
    showClearButton: args.showClearButton ?? true,
    min: args.min || undefined,
    max: args.max || undefined,
  }
}

function DatePickerInteractiveCanvas({ args }: { args: DatePickerInteractiveArgs }) {
  const isRangeMode = isInteractiveRangeMode(args)
  const [singleValue, setSingleValue] = useState<DatePicker.Value>(null)
  const [rangeValue, setRangeValue] = useState<DatePicker.RangeValue>({
    start: null,
    end: null,
  })

  const singleProps = useMemo(() => buildInteractiveSingleProps(args), [args])
  const rangeProps = useMemo(() => buildInteractiveRangeProps(args), [args])

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16, maxWidth: 720 }}>
      <div style={{ width: 420, maxWidth: '100%' }}>
        {isRangeMode ? (
          <DatePicker {...rangeProps} rangeValue={rangeValue} onRangeChange={setRangeValue} />
        ) : (
          <DatePicker {...singleProps} value={singleValue} onChange={setSingleValue} />
        )}
      </div>

      {isRangeMode ? (
        <div style={{ display: 'grid', gap: 8 }}>
          <DatePickerRangeValueSummary value={rangeValue} />
        </div>
      ) : (
        <DatePickerValueSummary value={singleValue} variant={args.variant ?? 'date'} />
      )}
    </div>
  )
}

function DatePickerInteractivePreview(args: DatePickerInteractiveArgs) {
  const previewKey = [
    args.variant ?? 'date',
    isInteractiveRangeMode(args) ? 'range' : 'single',
    args.min ?? '',
    args.max ?? '',
    args.step ?? '',
    args.name ?? '',
    args.nameMode ?? 'object',
    args.startName ?? '',
    args.endName ?? '',
  ].join('|')

  return (
    <DatePickerInteractiveCanvas key={previewKey} args={args} />
  )
}

function DatePickerMainPreview() {
  return (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <DatePickerDemo
        variant="date"
        max={todayDate}
        placeholder="Selecione a data"
        helperText="A frente do componente mantém o botão de abrir e o botão de limpeza, mas o valor retornado segue o formato do input date."
      />
    </div>
  )
}

function DatePickerVariantsPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Date">
        <DatePickerDemo variant="date" placeholder="Selecione a data" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Time">
        <DatePickerDemo variant="time" placeholder="Selecione o horário" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Datetime">
        <DatePickerDemo variant="datetime" placeholder="Selecione data e horário" />
      </StoryPreviewCard>
    </div>
  )
}

function DatePickerFormatGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Formato date">
        <ul style={storyDocsStyles.list}>
          <li>Abre um calendário próprio do componente, com navegação de mês e ano.</li>
          <li>O valor retornado segue o formato <code>aaaa-mm-dd</code>.</li>
          <li><code>min</code> e <code>max</code> continuam seguindo esse mesmo formato.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Formato time">
        <ul style={storyDocsStyles.list}>
          <li>Abre um painel próprio com horas e minutos segmentados.</li>
          <li>O valor retornado segue o formato <code>hh:mm</code>.</li>
          <li><code>step</code> é interpretado como intervalo de minutos no painel.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Formato datetime">
        <ul style={storyDocsStyles.list}>
          <li>Abre um painel próprio que combina o calendário com o seletor segmentado de hora.</li>
          <li>O valor retornado segue o formato <code>aaaa-mm-ddThh:mm</code>.</li>
          <li><code>min</code>, <code>max</code> e <code>step</code> seguem o contrato do tipo datetime e são respeitados pelo painel composto.</li>
        </ul>
      </StoryPreviewCard>
    </div>
  )
}

function DatePickerRangePreview() {
  return (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <DatePickerRangeDemo
        variant="date"
        selectionMode="range"
        name="periodo"
        placeholder="Selecione o intervalo"
        helperText="Quando name é informado, o modo range serializa dois inputs nativos ocultos. Por padrão, eles usam o formato name[start] e name[end]."
      />
    </div>
  )
}

function DatePickerRestrictionPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Faixa de datas">
        <DatePickerDemo
          variant="date"
          min={thirtyDaysAgoDate}
          max={todayDate}
          placeholder="Últimos 30 dias"
          helperText="A seleção fica restrita ao período entre hoje e os 30 dias anteriores."
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Janela de horário">
        <DatePickerDemo
          variant="time"
          min="08:00"
          max="18:00"
          step={900}
          placeholder="Horário comercial"
          helperText="step=900 limita a escolha a intervalos de 15 minutos."
        />
      </StoryPreviewCard>
    </div>
  )
}

export const DatePickerDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>DatePicker</h3>}
        description={
          <>
            O componente <code>DatePicker</code> funciona como frente visual para os
            tipos nativos <code>date</code>, <code>time</code> e <code>datetime-local</code>,
            mantendo abertura previsível, limpeza rápida, placeholder visual e API alinhada ao design system.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura principal"
        description="A variante date cobre o cenário mais recorrente de formulário. O valor retornado é a string nativa do input, enquanto a frente do componente cuida da moldura, do texto guia e das ações auxiliares na lateral direita."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>variant</code> escolhe entre <code>date</code>, <code>time</code> e <code>datetime</code>.</li>
          <li><code>value</code> recebe <code>string | null</code>, respeitando o formato do input nativo ativo.</li>
          <li><code>onChange</code> dispara com a string do campo ou <code>null</code> quando a limpeza manual remove o valor.</li>
        </ul>

        <SandboxExample
          title="Frente para date"
          description="Exemplo base com bloqueio de datas futuras e limpeza rápida pelo botão lateral."
          code={basicUsageCode}
          notes={[
            'O botão de limpar aparece apenas depois da primeira seleção.',
            'A string retornada continua sendo a do input date, independentemente da forma como o navegador exibe o valor visualmente.',
          ]}
        >
          <DatePickerMainPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variantes"
        description="As três variantes usam painéis próprios do design system para manter uma abertura previsível e aderente ao catálogo visual. Em datetime, a composição reúne data e horário na mesma abertura."
      >
        <SandboxExample
          title="Comparativo de variantes"
          description="Panorama com date, time e datetime usando a mesma casca visual do componente."
          code={variantsExampleCode}
          notes={[
            'Date usa calendário próprio com cabeçalho de mês e ano.',
            'Time usa o painel controlado do componente, com setas para hora e minuto.',
            'Datetime usa um painel composto com calendário e seletor de hora na mesma superfície.',
            'O valor retornado continua estável e previsível, seguindo o formato do tipo ativo.',
          ]}
        >
          <DatePickerVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Formato do valor"
        description="Mesmo com painéis próprios nas três variantes, o valor controlado continua acompanhando o formato bruto esperado por cada tipo. Isso reduz ambiguidade e facilita integração com formulários e validação."
      >
        <DatePickerFormatGuidePreview />
      </SectionCard>

      <SectionCard
        title="Intervalo de datas"
        description="Na variante date, o selectionMode também pode operar em modo range. Nesse caso, o componente mantém uma única superfície visual, mas passa a controlar data inicial e final separadamente e serializa esse par em dois inputs nativos ocultos para formulários."
      >
        <SandboxExample
          title="Seleção de intervalo"
          description="Exemplo com início e fim do período escolhidos diretamente no calendário, mantendo um único campo visual na interface."
          code={rangeExampleCode}
          notes={[
            'O primeiro clique define a data inicial e o segundo fecha a data final.',
            'No modo range, o contrato controlado usa rangeValue e onRangeChange com um objeto contendo start e end.',
            'Quando name é informado, o componente gera dois inputs nativos ocultos; nameMode, startName e endName permitem ajustar essa serialização.',
          ]}
        >
          <DatePickerRangePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Restrições nativas"
        description="min, max e step são repassados ao input subjacente, então a validação de faixa e de granularidade segue o comportamento nativo do browser."
      >
        <SandboxExample
          title="Faixa e granularidade"
          description="Exemplos com limite de datas e janela de horário com intervalos fixos."
          code={restrictionExampleCode}
        >
          <DatePickerRestrictionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites e boas práticas"
        description="A frente do DatePicker padroniza moldura, limpeza e documentação. Date, time e datetime agora usam painéis próprios do design system, com o mesmo contrato de valor controlado."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>ariaLabel</code> é recomendado quando não houver um rótulo externo associado ao campo.</li>
          <li><code>min</code> e <code>max</code> precisam seguir o formato do tipo ativo; valores inválidos são ignorados pelo componente.</li>
          <li><code>step</code> só faz sentido nas variantes <code>time</code> e <code>datetime</code>; nos dois painéis ele é interpretado como intervalo de minutos.</li>
          <li><code>selectionMode="range"</code> está disponível apenas para <code>variant="date"</code> e usa <code>rangeValue</code>/<code>onRangeChange</code> com um objeto contendo <code>start</code> e <code>end</code>.</li>
          <li>Em formulários, o modo range cria dois inputs nativos ocultos derivados do mesmo <code>name</code>; por padrão, usa <code>name[start]</code> e <code>name[end]</code>.</li>
          <li>Se a interface exigir uma experiência ainda mais complexa de calendário ou agenda, o caminho passa por evoluir esse painel controlado ou por um motor dedicado.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const DatePickerInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['date', 'time', 'datetime'],
      description: 'Define qual tipo de input nativo será usado pela frente do componente.',
      table: { category: 'Comportamento' },
    },
    selectionMode: {
      control: { type: 'radio' },
      options: ['single', 'range'],
      description: 'Na variante date, define se a seleção será única ou por intervalo.',
      table: { category: 'Comportamento' },
      if: { arg: 'variant', eq: 'date' },
    },
    placeholder: {
      control: 'text',
      description: 'Texto visual exibido enquanto o campo está vazio.',
      table: { category: 'Conteúdo' },
    },
    min: {
      control: 'text',
      description: 'Valor mínimo aceito pelo input nativo ativo.',
      table: { category: 'Restrições' },
    },
    max: {
      control: 'text',
      description: 'Valor máximo aceito pelo input nativo ativo.',
      table: { category: 'Restrições' },
    },
    step: {
      control: { type: 'number', min: 1 },
      description: 'Passo do input em segundos. Só tem efeito em time e datetime.',
      table: { category: 'Restrições' },
      if: { arg: 'variant', neq: 'date' },
    },
    name: {
      control: 'text',
      description: 'Nome base do input nativo. Em range, pode originar os dois names ocultos.',
      table: { category: 'Formulário' },
    },
    nameMode: {
      control: { type: 'select' },
      options: ['object', 'suffix', 'indexed'],
      description: 'Define como os names derivados do intervalo serão gerados a partir de name.',
      table: { category: 'Formulário' },
      if: { arg: 'selectionMode', eq: 'range' },
    },
    startName: {
      control: 'text',
      description: 'Sobrescreve o name do input oculto inicial quando o modo range está ativo.',
      table: { category: 'Formulário' },
      if: { arg: 'selectionMode', eq: 'range' },
    },
    endName: {
      control: 'text',
      description: 'Sobrescreve o name do input oculto final quando o modo range está ativo.',
      table: { category: 'Formulário' },
      if: { arg: 'selectionMode', eq: 'range' },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Exibe ou oculta o botão de limpeza do valor atual.',
      table: { category: 'Estrutura' },
    },
    ariaLabel: {
      control: 'text',
      description: 'Nome acessível do campo quando não houver rótulo externo associado a ele.',
      table: { category: 'Acessibilidade' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita tanto a edição quanto os botões auxiliares da frente do componente.',
      table: { category: 'Estado visual' },
    },
  },
  parameters: {
    controls: {
      exclude: ['className', 'id', 'onChange', 'value', 'rangeValue', 'defaultValue', 'defaultRangeValue', 'onRangeChange', 'clearButtonLabel'],
    },
  },
  render: (args) => <DatePickerInteractivePreview {...args} />,
}