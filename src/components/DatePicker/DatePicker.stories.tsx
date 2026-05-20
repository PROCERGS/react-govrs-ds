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

const docsVariantTags = ['date', 'time', 'datetime', 'selectionMode', 'showClearButton']

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
    text: 'As variantes date, time e datetime abrem painéis próprios do design system. No caso de datetime, o painel combina calendário e seletor de horário na mesma superfície.',
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
  step={15}
/>`

const rangeExampleCode = `const [periodo, setPeriodo] = useState({
  start: null,
  end: null,
})

<DatePicker
  variant="date"
  selectionMode="range"
  name="periodo"
  value={periodo}
  onChange={setPeriodo}
/>`

const selectionModeExampleCode = `const [data, setData] = useState<string | null>(null)
const [periodo, setPeriodo] = useState({
  start: null,
  end: null,
})

<DatePicker
  variant="date"
  selectionMode="single"
  value={data}
  onChange={setData}
/>

<DatePicker
  variant="date"
  selectionMode="range"
  name="periodo"
  value={periodo}
  onChange={setPeriodo}
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
      <DatePicker {...props} value={value} onChange={setValue} />
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
  variant: DatePicker.Variant
  selectionMode: 'single' | 'range'
  placeholder: string
  min: string
  max: string
  step: DatePicker.StepMinutes
  name: string
  nameMode: DatePicker.RangeNameMode
  startName: string
  endName: string
  ariaLabel: string
  disabled: boolean
  showClearButton: boolean
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
    step: 15,
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
  return args.variant === 'date' && args.selectionMode === 'range'
}

function buildInteractiveSingleProps(args: DatePickerInteractiveArgs): DatePicker.SingleProps {
  const baseProps = {
    placeholder: args.placeholder || undefined,
    ariaLabel: args.ariaLabel || undefined,
    name: args.name || undefined,
    disabled: args.disabled,
    showClearButton: args.showClearButton,
  }

  if (args.variant === 'time' || args.variant === 'datetime') {
    return {
      variant: args.variant,
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
    nameMode: args.nameMode,
    startName: args.startName || undefined,
    endName: args.endName || undefined,
    disabled: args.disabled,
    showClearButton: args.showClearButton,
    min: args.min || undefined,
    max: args.max || undefined,
  }
}

function getInteractiveRangeInputNames(args: DatePickerInteractiveArgs) {
  const name = args.name || undefined
  const startName = args.startName || undefined
  const endName = args.endName || undefined

  let derivedStartName: string | undefined
  let derivedEndName: string | undefined

  if (name) {
    if (args.nameMode === 'suffix') {
      derivedStartName = `${name}Start`
      derivedEndName = `${name}End`
    } else if (args.nameMode === 'indexed') {
      derivedStartName = `${name}[0]`
      derivedEndName = `${name}[1]`
    } else {
      derivedStartName = `${name}[start]`
      derivedEndName = `${name}[end]`
    }
  }

  return {
    startName: startName ?? derivedStartName ?? null,
    endName: endName ?? derivedEndName ?? null,
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
  const rangeInputNames = useMemo(() => getInteractiveRangeInputNames(args), [args])

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16, maxWidth: 720 }}>
      <div style={{ width: 420, maxWidth: '100%' }}>
        {isRangeMode ? (
          <DatePicker {...rangeProps} value={rangeValue} onChange={setRangeValue} />
        ) : (
          <DatePicker {...singleProps} value={singleValue} onChange={setSingleValue} />
        )}
      </div>

      {isRangeMode ? (
        <div style={{ display: 'grid', gap: 8 }}>
          <DatePickerRangeValueSummary value={rangeValue} />

          <p style={storyDocsStyles.statText}>
            <strong>Input inicial oculto:</strong>{' '}
            {rangeInputNames.startName ?? 'Sem name configurado'}
          </p>

          <p style={storyDocsStyles.statText}>
            <strong>Input final oculto:</strong>{' '}
            {rangeInputNames.endName ?? 'Sem name configurado'}
          </p>
        </div>
      ) : (
        <DatePickerValueSummary value={singleValue} variant={args.variant} />
      )}
    </div>
  )
}

function DatePickerInteractivePreview(args: DatePickerInteractiveArgs) {
  const previewKey = [
    args.variant,
    isInteractiveRangeMode(args) ? 'range' : 'single',
    args.min,
    args.max,
    args.step,
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

function DatePickerRangePreview() {
  return (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <DatePickerRangeDemo
        variant="date"
        selectionMode="range"
        name="periodo"
        placeholder="Selecione o intervalo"
        helperText="No modo range, o componente mantém dois inputs nativos ocultos, um para a data inicial e outro para a final, derivados do mesmo name base." 
      />
    </div>
  )
}

function DatePickerVariantsPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <StoryPreviewCard label="Date">
        <div style={{ width: 420, maxWidth: '100%' }}>
          <DatePickerDemo variant="date" placeholder="Selecione a data" />
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Time">
        <div style={{ width: 420, maxWidth: '100%' }}>
          <DatePickerDemo variant="time" placeholder="Selecione o horário" />
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Datetime">
        <div style={{ width: 420, maxWidth: '100%' }}>
          <DatePickerDemo variant="datetime" placeholder="Selecione data e horário" />
        </div>
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
          <li><code>step</code> é informado em minutos e aceita apenas <code>5</code>, <code>10</code>, <code>15</code>, <code>20</code> ou <code>30</code>.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="Formato datetime">
        <ul style={storyDocsStyles.list}>
          <li>Abre um painel próprio que combina o calendário com o seletor segmentado de hora.</li>
          <li>O valor retornado segue o formato <code>aaaa-mm-ddThh:mm</code>.</li>
          <li><code>min</code>, <code>max</code> e <code>step</code> seguem o contrato do tipo datetime; no caso de <code>step</code>, o valor continua sendo informado em minutos.</li>
        </ul>
      </StoryPreviewCard>
    </div>
  )
}

function DatePickerSelectionModeGuidePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="selectionMode='single'">
        <ul style={storyDocsStyles.list}>
          <li>É o comportamento padrão de <code>variant="date"</code>, então a prop pode ser omitida na maior parte dos casos.</li>
          <li><code>value</code> e <code>onChange</code> trabalham com <code>string | null</code>.</li>
          <li>O calendário escolhe uma única data e o campo continua serializando um único valor nativo.</li>
        </ul>
      </StoryPreviewCard>

      <StoryPreviewCard label="selectionMode='range'">
        <ul style={storyDocsStyles.list}>
          <li>Disponível apenas quando <code>variant="date"</code>.</li>
          <li><code>value</code> e <code>onChange</code> passam a usar um objeto com <code>start</code> e <code>end</code>.</li>
          <li>O primeiro clique define o início do período e o segundo fecha a data final no mesmo calendário.</li>
          <li>Quando <code>name</code> é informado, os nomes dos inputs ocultos podem ser refinados com <code>nameMode</code>, <code>startName</code> e <code>endName</code>.</li>
        </ul>
      </StoryPreviewCard>
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
          step={15}
          placeholder="Horário comercial"
          helperText="step={15} limita a escolha a intervalos de 15 minutos."
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
        title="selectionMode"
        description="Na variante date, a prop selectionMode define se o componente trabalha com uma única data ou com um intervalo. O padrão é single; ao mudar para range, mudam também o formato de value, o contrato de onChange e a serialização usada para integração com formulários."
      >
        <SandboxExample
          title="Comparando single e range"
          description="A casca visual permanece a mesma, mas a forma de selecionar e o formato dos dados retornados mudam conforme o selectionMode." 
          code={selectionModeExampleCode}
          notes={[
            'Em single, selectionMode pode ser omitido; esse é o comportamento padrão da variante date.',
            'Em range, value deixa de ser string | null e passa a ser um objeto com start e end.',
            'Se o campo participar de um formulário, o modo range serializa dois inputs nativos ocultos em vez de um único valor.',
          ]}
        >
          <DatePickerSelectionModeGuidePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Intervalo de datas"
        description="Quando selectionMode recebe range, a superfície visual continua sendo única, mas o componente passa a controlar data inicial e final separadamente e serializa esse par em dois inputs nativos ocultos para integração com formulários."
      >
        <SandboxExample
          title="Seleção de intervalo"
          description="Exemplo com início e fim do período escolhidos diretamente no calendário, mantendo um único campo visual na interface."
          code={rangeExampleCode}
          notes={[
            'O primeiro clique define a data inicial e o segundo fecha a data final.',
            'Quando o name é informado, o componente gera dois inputs nativos ocultos: um para o início e outro para o fim.',
            'Cada instância isola seus próprios inputs ocultos, então múltiplos DatePickers no mesmo formulário não se sobrepõem.',
          ]}
        >
          <DatePickerRangePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Restrições nativas"
        description="min e max são repassados ao input subjacente, e step é informado em minutos na API do componente. Internamente, o DatePicker converte esse valor para o formato nativo do browser sem expor segundos para quem consome a prop."
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
          <li><code>step</code> só faz sentido nas variantes <code>time</code> e <code>datetime</code>; ele deve ser informado em minutos e aceita apenas <code>5</code>, <code>10</code>, <code>15</code>, <code>20</code> ou <code>30</code>.</li>
          <li>O modo <code>range</code> está disponível apenas para <code>variant="date"</code>; <code>time</code> e <code>datetime</code> seguem com seleção única.</li>
          <li>Em formulários, o modo <code>range</code> cria dois inputs nativos ocultos derivados do mesmo <code>name</code>, um para início e outro para fim.</li>
          <li>Se a interface exigir uma experiência ainda mais complexa de calendário ou agenda, o caminho passa por evoluir esse painel controlado ou por um motor dedicado.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const DatePickerInterativo: Story = {
  name: 'Interativo',
  argTypes: {
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
      control: { type: 'select' },
      options: [5, 10, 15, 20, 30],
      description: 'Passo em minutos. Aceita apenas 5, 10, 15, 20 ou 30 e só tem efeito em time e datetime.',
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
      exclude: ['className', 'id', 'onChange', 'value', 'defaultValue', 'clearButtonLabel'],
    },
  },
  render: (args) => <DatePickerInteractivePreview {...args} />,
}