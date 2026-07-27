import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Slider } from './Slider'
import './Slider.scss'
import '../../foundations/styles/index.scss'

type SliderStoryArgs = {
  label?: string
  range?: boolean
  vertical?: boolean
  markGap?: number
  snapping?: boolean
  precision?: number
  min?: number
  max?: number
  disabled?: boolean
  name?: string
  nameStart?: string
  nameEnd?: string
}

const docsVariantTags = ['single', 'range', 'horizontal', 'vertical']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa selecionar um valor único ou um intervalo com leitura direta, marcas visíveis e possibilidade de layout horizontal ou vertical.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar range, vertical, snapping, precision e limites. O story 'Documentação' resume os formatos e o contrato do componente.",
  },
  {
    title: 'Comportamento',
    text: 'markGap define as marcas visíveis e também o step quando snapping estiver ativo. Quando snapping estiver desligado, precision equivale à quantidade de dígitos após a vírgula permitida no valor.',
  },
] satisfies Array<{ title: string; text: string }>

const overviewExampleCode = `<Slider
  label="Valor único"
  value={40}
  onChange={setValue}
  min={0}
  max={100}
  markGap={20}
/>

<Slider
  label="Faixa selecionada"
  range
  value={[20, 80]}
  onChange={setRangeValue}
  min={0}
  max={100}
  markGap={20}
/>

<Slider
  label="Escala vertical"
  vertical
  value={60}
  onChange={setVerticalValue}
/>`

const precisionExampleCode = `<Slider
  label="Com snapping"
  value={30}
  onChange={setSteppedValue}
  markGap={10}
  snapping
/>

<Slider
  label="Movimento livre"
  range
  value={[2.5, 7.8]}
  onChange={setPreciseRange}
  min={0}
  max={10}
  markGap={2}
  precision={1}
/>
`

const controlledExampleCode = `const [selectedRange, setSelectedRange] = useState<[number, number]>([15, 65])

<Slider
  label="Faixa controlada"
  range
  value={selectedRange}
  onChange={setSelectedRange}
  min={0}
  max={100}
  markGap={10}
  snapping
/>
`

const nativeSubmitExampleCode = `<form onSubmit={handleSubmit}>
  <Slider
    label="Volume"
    name="volume"
    defaultValue={40}
    min={0}
    max={100}
    markGap={20}
  />

  <Slider
    label="Faixa de preço"
    range
    name="price"
    defaultValue={[20, 80]}
    min={0}
    max={100}
    markGap={20}
  />

  <Button type="submit">Enviar</Button>
</form>`

function formatSliderValue(value: Slider.Value, precision = 0) {
  if (Array.isArray(value)) {
    return `[${value[0].toFixed(precision)}, ${value[1].toFixed(precision)}]`
  }

  return value.toFixed(precision)
}

function createInitialSliderValue(args: SliderStoryArgs): Slider.Value {
  const min = args.min ?? 0
  const max = args.max ?? 100

  if (args.range) {
    return [min, max]
  }

  return min
}

function getInteractiveStoryKey(args: SliderStoryArgs) {
  return [
    args.range ? 'range' : 'single',
    args.vertical ? 'vertical' : 'horizontal',
    String(args.min ?? 0),
    String(args.max ?? 100),
    String(args.markGap ?? 'auto'),
    args.snapping ? 'snapping' : 'free',
    String(args.precision ?? 0),
  ].join('|')
}

function SliderOverviewPreview() {
  const [singleValue, setSingleValue] = useState(40)
  const [rangeValue, setRangeValue] = useState<Slider.RangeValue>([20, 80])
  const [verticalValue, setVerticalValue] = useState(60)
  const [verticalRangeValue, setVerticalRangeValue] = useState<Slider.RangeValue>([25, 75])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <StoryPreviewCard label="Horizontal simples">
        <Slider
          label="Valor único"
          value={singleValue}
          onChange={setSingleValue}
          min={0}
          max={100}
          markGap={20}
        />

        <p style={storyDocsStyles.statText}>
          <strong>Valor atual:</strong> {formatSliderValue(singleValue)}
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Horizontal range">
        <Slider
          label="Faixa selecionada"
          range
          value={rangeValue}
          onChange={setRangeValue}
          min={0}
          max={100}
          markGap={20}
        />

        <p style={storyDocsStyles.statText}>
          <strong>Faixa atual:</strong> {formatSliderValue(rangeValue)}
        </p>
      </StoryPreviewCard>

      <div style={storyDocsStyles.cardGrid}>
        <StoryPreviewCard label="Vertical simples">
          <div
            style={{
              minHeight: 420,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', maxWidth: 220 }}>
              <Slider
                label="Escala vertical"
                vertical
                value={verticalValue}
                onChange={setVerticalValue}
                min={0}
                max={100}
                markGap={20}
              />
            </div>
          </div>

          <p style={storyDocsStyles.statText}>
            <strong>Valor atual:</strong> {formatSliderValue(verticalValue)}
          </p>
        </StoryPreviewCard>

        <StoryPreviewCard label="Vertical range">
          <div
            style={{
              minHeight: 420,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '100%', maxWidth: 220 }}>
              <Slider
                label="Faixa vertical"
                range
                vertical
                value={verticalRangeValue}
                onChange={setVerticalRangeValue}
                min={0}
                max={100}
                markGap={20}
              />
            </div>
          </div>

          <p style={storyDocsStyles.statText}>
            <strong>Faixa atual:</strong> {formatSliderValue(verticalRangeValue)}
          </p>
        </StoryPreviewCard>
      </div>
    </div>
  )
}

function SliderPrecisionPreview() {
  const [steppedValue, setSteppedValue] = useState(30)
  const [preciseRange, setPreciseRange] = useState<Slider.RangeValue>([2.5, 7.8])

  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Snapping ativo">
        <Slider
          label="Com snapping"
          value={steppedValue}
          onChange={setSteppedValue}
          min={0}
          max={100}
          markGap={10}
          snapping
        />

        <p style={storyDocsStyles.statText}>
          <strong>Valor atual:</strong> {formatSliderValue(steppedValue)}
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Movimento livre com precisão">
        <Slider
          label="Intervalo com casas decimais"
          range
          value={preciseRange}
          onChange={setPreciseRange}
          min={0}
          max={10}
          markGap={2}
          precision={1}
        />

        <p style={storyDocsStyles.statText}>
          <strong>Faixa atual:</strong> {formatSliderValue(preciseRange, 1)}
        </p>
      </StoryPreviewCard>
    </div>
  )
}

function SliderControlledPreview() {
  const [selectedRange, setSelectedRange] = useState<Slider.RangeValue>([15, 65])

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <Slider
        label="Faixa controlada"
        range
        value={selectedRange}
        onChange={setSelectedRange}
        min={0}
        max={100}
        markGap={10}
        snapping
      />

      <p style={storyDocsStyles.statText}>
        <strong>Valor controlado:</strong> {formatSliderValue(selectedRange)}
      </p>
    </div>
  )
}

function SliderNativeSubmitPreview() {
  const [submittedValue, setSubmittedValue] = useState('Nenhum envio ainda')

  return (
    <form
      style={{ display: 'grid', gap: 16, maxWidth: 720 }}
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const serializedValue = Array.from(formData.entries())
          .map(([key, value]) => `${key}=${String(value)}`)
          .join(' | ')

        setSubmittedValue(serializedValue || 'Nenhum campo enviado')
      }}
    >
      <Slider
        label="Volume"
        name="volume"
        defaultValue={40}
        min={0}
        max={100}
        markGap={20}
      />

      <Slider
        label="Faixa de preço"
        range
        name="price"
        defaultValue={[20, 80]}
        min={0}
        max={100}
        markGap={20}
      />

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button type="submit">Enviar</Button>
      </div>

      <p style={storyDocsStyles.statText}>
        <strong>Último submit:</strong> {submittedValue}
      </p>
    </form>
  )
}

function SliderInteractivePreview(args: SliderStoryArgs) {
  const [value, setValue] = useState<Slider.Value>(() => createInitialSliderValue(args))
  const precision = args.precision ?? 0
  const min = args.min ?? 0
  const max = args.max ?? 100

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16 }}>
      <div
        style={{
          width: '100%',
          maxWidth: args.vertical ? 240 : 760,
          minHeight: args.vertical ? 420 : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {args.range ? (
          <Slider
            label={args.label}
            range
            value={Array.isArray(value) ? value : [min, max]}
            onChange={(nextValue) => setValue(nextValue)}
            min={min}
            max={max}
            markGap={args.markGap}
            snapping={args.snapping}
            precision={precision}
            vertical={args.vertical}
            disabled={args.disabled}
            name={args.name}
            nameStart={args.nameStart}
            nameEnd={args.nameEnd}
          />
        ) : (
          <Slider
            label={args.label}
            value={typeof value === 'number' ? value : min}
            onChange={(nextValue) => setValue(nextValue)}
            min={min}
            max={max}
            markGap={args.markGap}
            snapping={args.snapping}
            precision={precision}
            vertical={args.vertical}
            disabled={args.disabled}
            name={args.name}
          />
        )}
      </div>

      <p style={storyDocsStyles.statText}>
        <strong>Valor atual:</strong> {formatSliderValue(value, precision)}
      </p>
    </div>
  )
}

const meta = {
  title: 'Formulários/Slider',
  component: Slider,
  args: {
    label: 'Controle de valores',
    min: 0,
    max: 100,
    markGap: 20,
    snapping: false,
    precision: 0,
    range: false,
    vertical: false,
    disabled: false,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const SliderDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Slider</h3>}
        description={
          <>
            O componente <code>Slider</code> permite selecionar um valor único ou
            um intervalo com marcas visíveis, inputs numéricos sincronizados e
            suporte às orientações horizontal e vertical.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura e formatos"
        description="O mesmo contrato cobre valor único, faixa de valores e mudança de orientação. Os inputs numéricos acompanham o trilho para facilitar leitura direta e ajuste preciso."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>range</code> alterna entre um handle único e dois handles para intervalo.</li>
          <li><code>vertical</code> reorganiza os inputs e usa a altura do container para apresentar o trilho.</li>
          <li><code>min</code> e <code>max</code> definem os limites aceitos pelo trilho e pelos inputs.</li>
          <li><code>markGap</code> distribui as marcas visíveis ao longo da escala.</li>
        </ul>

        <SandboxExample
          title="Visão geral dos formatos"
          description="Comparativo dos quatro arranjos principais: simples e range, horizontais e verticais."
          code={overviewExampleCode}
          notes={[
            'No modo vertical, a altura útil é controlada pelo container pai.',
            'No modo range, os inputs são mantidos em ordem crescente mesmo quando o valor inicial ultrapassa o final.',
          ]}
        >
          <SliderOverviewPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Marks, snapping e precisão"
        description="As marcas sempre seguem a escala configurada. Quando snapping estiver ativo, o handle passa a respeitar exatamente o intervalo definido em markGap; quando estiver desativado, precision controla o passo mínimo do movimento livre e equivale à quantidade de dígitos após a vírgula aceita pelo valor final."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>precision=0</code> limita o slider a valores inteiros.</li>
          <li><code>precision=1</code> permite um dígito após a vírgula, como <code>2,5</code>.</li>
          <li><code>precision=2</code> permite dois dígitos após a vírgula, como <code>2,57</code>.</li>
          <li>Se <code>snapping</code> estiver ativo, quem passa a mandar no avanço é <code>markGap</code>, não <code>precision</code>.</li>
        </ul>

        <SandboxExample
          title="Passos visíveis e movimento livre"
          description="Exemplo lado a lado para validar a diferença entre arraste em degraus fixos e movimento livre com controle explícito da quantidade de dígitos após a vírgula."
          code={precisionExampleCode}
          notes={[
            'Com snapping ativo, o valor só avança nos degraus calculados a partir de markGap.',
            'Com movimento livre, precision define o menor incremento aceito pelo slider e a quantidade de dígitos após a vírgula no valor retornado.',
            'Exemplo: precision=1 permite valores como 2,5; precision=2 permite valores como 2,57.',
          ]}
        >
          <SliderPrecisionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Uso controlado"
        description="O Slider segue o padrão controlado do React: value representa o estado atual e onChange devolve o próximo valor numérico ou o próximo intervalo."
      >
        <SandboxExample
          title="Sincronização com estado externo"
          description="Esse é o formato recomendado quando o valor selecionado precisa alimentar filtros, formulários ou indicadores em tempo real."
          code={controlledExampleCode}
          notes={[
            'Para range, onChange retorna uma tupla no formato [início, fim].',
            'Para valor único, onChange retorna apenas um número.',
          ]}
        >
          <SliderControlledPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Submit nativo"
        description="Quando o slider precisa participar diretamente do submit HTML, use name no modo simples e name, nameStart ou nameEnd no modo range. O componente serializa os valores atuais em hidden inputs para que o FormData enxergue esses campos sem depender de estado externo."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> envia o valor no modo simples.</li>
          <li>No modo range, <code>nameStart</code> e <code>nameEnd</code> podem nomear os extremos explicitamente.</li>
          <li>Se o range receber apenas <code>name</code>, o componente deriva <code>{'<name>Start'}</code> e <code>{'<name>End'}</code>.</li>
          <li><code>defaultValue</code> permite usar o slider em formulários com submit nativo sem precisar controlar o valor por React.</li>
        </ul>

        <SandboxExample
          title="FormData sem estado externo"
          description="Este exemplo mostra o slider participando de um submit nativo de formulário. Os valores são serializados como campos reais do FormData usando hidden inputs sincronizados pelo próprio componente."
          code={nativeSubmitExampleCode}
          notes={[
            'No exemplo de range, name="price" gera os campos priceStart e priceEnd automaticamente.',
            'Se preferir nomes diferentes para cada extremo, use nameStart e nameEnd explicitamente.',
          ]}
        >
          <SliderNativeSubmitPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Dimensionamento"
        description="O componente ocupa toda a largura disponível no modo horizontal. No modo vertical, a leitura fica mais confortável quando o container pai reserva altura suficiente para acomodar trilho, marcas e inputs."
      >
        <ul style={storyDocsStyles.list}>
          <li>Use containers largos para escalas horizontais com muitas marcas.</li>
          <li>Reserve altura adicional quando <code>vertical</code> estiver ativo para evitar sobreposição visual.</li>
          <li>Quando <code>markGap</code> não for informado, o componente distribui a escala em cinco intervalos.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const SliderInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    label: {
      control: 'text',
      description: 'Rótulo exibido acima do controle.',
      table: { category: 'Conteúdo' },
    },
    min: {
      control: 'number',
      description: 'Valor mínimo aceito pelo slider.',
      table: { category: 'Escala' },
    },
    max: {
      control: 'number',
      description: 'Valor máximo aceito pelo slider.',
      table: { category: 'Escala' },
    },
    markGap: {
      control: 'number',
      description: 'Espaçamento entre as marcas visíveis; também vira o step quando snapping estiver ativo.',
      table: { category: 'Escala' },
    },
    snapping: {
      control: 'boolean',
      description: 'Restringe o movimento do handle aos degraus calculados por markGap.',
      table: { category: 'Comportamento' },
    },
    precision: {
      control: 'number',
      description: 'Equivale à quantidade de dígitos após a vírgula aceita no modo de movimento livre. Ex.: 0 = inteiro, 1 = 0,1, 2 = 0,01.',
      table: { category: 'Comportamento' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita os inputs visíveis, o arraste, a navegação por teclado e a serialização do campo no submit nativo.',
      table: { category: 'Estado' },
    },
    name: {
      control: 'text',
      description: 'Nome usado no submit nativo; no range, serve como base para os campos derivados Start e End quando nameStart e nameEnd não forem informados.',
      table: { category: 'Formulário' },
    },
    nameStart: {
      control: 'text',
      description: 'Nome explícito do valor inicial no submit nativo para sliders em range.',
      table: { category: 'Formulário' },
    },
    nameEnd: {
      control: 'text',
      description: 'Nome explícito do valor final no submit nativo para sliders em range.',
      table: { category: 'Formulário' },
    },
    range: {
      control: 'boolean',
      description: 'Ativa dois handles para seleção de intervalo.',
      table: { category: 'Variação' },
    },
    vertical: {
      control: 'boolean',
      description: 'Muda a orientação do trilho para vertical.',
      table: { category: 'Layout' },
    },
    value: {
      table: { disable: true },
    },
    defaultValue: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
  render: (args) => (
    <SliderInteractivePreview
      key={getInteractiveStoryKey(args)}
      label={typeof args.label === 'string' ? args.label : 'Controle de valores'}
      min={args.min}
      max={args.max}
      markGap={args.markGap}
      snapping={args.snapping}
      precision={args.precision}
      range={args.range}
      vertical={args.vertical}
    />
  ),
}