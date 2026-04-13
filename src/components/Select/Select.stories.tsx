import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Badges } from '../Badges/Badges'
import { Button } from '../Button/Button'
import { Select } from './Select'
import './Select.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['danger', 'success', 'warning', 'info']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa resumir uma lista de escolhas em um controle compacto, mantendo navegação por teclado, feedback contextual e opção de múltipla seleção.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar entre os modos simples e múltiplo. O story 'Exemplos Combinados' resume os cenários recorrentes em uma leitura única.",
  },
  {
    title: 'Comportamento',
    text: 'No modo simples o menu fecha após a escolha; em múltiplo, a lista permanece aberta, a seleção é alternada por item e o resumo do valor mostra o primeiro rótulo seguido de + (N).',
  },
] satisfies Array<{ title: string; text: string }>

const singleOptions: Select.Option[] = [
  { value: 'rascunho', label: 'Rascunho' },
  { value: 'revisao', label: 'Em revisão' },
  { value: 'publicado', label: 'Publicado' },
  { value: 'arquivado', label: 'Arquivado', disabled: true },
]

const multipleOptions: Select.Option[] = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'a11y', label: 'Acessibilidade' },
  { value: 'storybook', label: 'Storybook' },
  { value: 'tokens', label: 'Design tokens' },
]

const usageExampleCode = `const [status, setStatus] = useState('publicado')

<Select
  label="Status"
  options={[
    { value: 'rascunho', label: 'Rascunho' },
    { value: 'publicado', label: 'Publicado' },
  ]}
  value={status}
  onChange={(nextValue) => setStatus(nextValue)}
/>`

const multipleExampleCode = `// Simples
<Select options={singleOptions} value={status} onChange={setStatus} />

// Multiplo
<Select multiple options={multipleOptions} value={topics} onChange={setTopics} />`

const feedbackExampleCode = `<Select
  label="Status"
  options={singleOptions}
  value={status}
  onChange={setStatus}
  renderFeedback={({ value }) => {
    if (!value) return null
    return value === 'publicado'
      ? <Badges variant="success" message="Selecao valida" />
      : <Badges variant="warning" message="Ainda em edicao" />
  }}
/>`

const formExampleCode = `<form onSubmit={handleSubmit}>
  <Select
    name="status"
    label="Status da publicacao"
    options={singleOptions}
    value={status}
    onChange={setStatus}
  />

  <Select
    name="topics"
    label="Temas relacionados"
    options={multipleOptions}
    value={topics}
    multiple
    onChange={setTopics}
  />

  <Button type="submit">Enviar</Button>
</form>`

const combinedExampleCode = `<Select
  label="Busca"
  value=""
  onChange={() => {}}
  options={singleOptions}
  placeholder="Pesquisar"
/>

<Select
  label="Temas relacionados"
  value={['react', 'storybook']}
  onChange={() => {}}
  options={multipleOptions}
  multiple
/>

<Select
  label="Campo com feedback"
  value="publicado"
  onChange={() => {}}
  options={singleOptions}
  feedback={<Badges variant="info" message="Exemplo com feedback estático." />}
/>`

function formatValue(value: Select.Value) {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : 'Nenhum valor selecionado'
  }

  return value || 'Nenhum valor selecionado'
}

const meta = {
  title: 'Widgets/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

function SelectInteractivePreview(args: Select.Props) {
  const [value, setValue] = useState<Select.Value>(args.multiple ? [] : null)

  useEffect(() => {
    setValue(args.multiple ? [] : null)
  }, [args.multiple])

  const options = args.multiple ? multipleOptions : singleOptions

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16, maxWidth: 720 }}>
      <Select
        {...args}
        options={options}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue)
          args.onChange?.(nextValue, option)
        }}
        renderFeedback={({ value: selectedValue, isDisabled }) => {
          if (isDisabled) {
            return <Badges variant="warning" message="Campo desabilitado" />
          }

          if (!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
            return null
          }

          const isValidSelection = Array.isArray(selectedValue)
            ? selectedValue.includes('storybook') || selectedValue.includes('tokens')
            : selectedValue === 'publicado'

          return isValidSelection
            ? <Badges variant="success" message="Seleção válida" />
            : <Badges variant="error" message="Seleção ainda incompleta" />
        }}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Valor atual:</strong> {formatValue(value)}
      </p>
    </div>
  )
}

function SelectUsagePreview() {
  const [status, setStatus] = useState<Select.Value>('publicado')

  return (
    <div style={{ maxWidth: 480 }}>
      <Select
        label="Status da publicação"
        helperText="Escolha o estado atual do conteúdo."
        options={singleOptions}
        value={status}
        onChange={(nextValue) => setStatus(nextValue)}
      />
    </div>
  )
}

function SelectExamplesPreview() {
  const [status, setStatus] = useState<Select.Value>('publicado')
  const [topics, setTopics] = useState<Select.Value>(['react', 'storybook'])

  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 720 }}>
      <Select
        label="Status da publicação"
        helperText="Escolha o estado atual do conteúdo."
        options={singleOptions}
        value={status}
        onChange={(nextValue) => setStatus(nextValue)}
        feedback={<Badges variant="info" message="Exemplo com feedback estático." />}
      />

      <Select
        label="Temas relacionados"
        helperText="Selecione um ou mais temas para classificar o conteúdo."
        options={multipleOptions}
        value={topics}
        multiple
        onChange={(nextValue) => setTopics(nextValue)}
        renderFeedback={({ value: selectedValue }) => {
          if (!Array.isArray(selectedValue) || selectedValue.length === 0) {
            return null
          }

          return selectedValue.length >= 2
            ? <Badges variant="success" message="Seleção suficiente para classificação." />
            : <Badges variant="warning" message="Selecione mais um tema." />
        }}
      />
    </div>
  )
}

function SelectFormPreview() {
  const [status, setStatus] = useState<Select.Value>('publicado')
  const [topics, setTopics] = useState<Select.Value>(['react', 'storybook'])
  const [submittedValue, setSubmittedValue] = useState('Nenhum envio ainda')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const selectedStatus = formData.get('status')
        const selectedTopics = formData.getAll('topics')

        setSubmittedValue(
          `status=${String(selectedStatus ?? '') || 'vazio'} | topics=${selectedTopics.length > 0 ? selectedTopics.join(', ') : 'vazio'}`,
        )
      }}
      style={{ display: 'grid', gap: 16, maxWidth: 720 }}
    >
      <Select
        name="status"
        label="Status da publicação"
        helperText="Este valor será enviado pelo input oculto interno."
        options={singleOptions}
        value={status}
        onChange={(nextValue) => setStatus(nextValue)}
      />

      <Select
        name="topics"
        label="Temas relacionados"
        helperText="No modo múltiplo, o componente gera um input oculto por item selecionado."
        options={multipleOptions}
        value={topics}
        multiple
        onChange={(nextValue) => setTopics(nextValue)}
      />

      <div>
        <Button type="submit" variant="primary">
          Simular envio
        </Button>
      </div>

      <p style={storyDocsStyles.statText}>
        <strong>Payload:</strong> {submittedValue}
      </p>
    </form>
  )
}

export const SelectDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Select</h3>}
        description={
          <>
            O componente <code>Select</code> permite escolher uma opção única ou várias
            opções em uma lista customizada, mantendo navegação por teclado, feedback visual
            e participação em formulários por meio de inputs ocultos.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como usar"
        description="Passe as opções em options, escolha o modo simples ou múltiplo com multiple e defina value com onChange quando quiser controlar o valor externamente. O componente também aceita defaultValue para um estado inicial sem controle explícito."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>options</code> recebe um array com <code>value</code>, <code>label</code> e opcionalmente <code>disabled</code>.</li>
          <li><code>value</code> e <code>onChange</code> controlam o valor atual do select.</li>
          <li>No modo múltiplo, o valor passa a ser um array de strings.</li>
        </ul>

        <SandboxExample
          title="Assinatura controlada"
          description="Exemplo mínimo de uso controlado em seleção simples para reforçar o contrato principal do componente."
          code={usageExampleCode}
          notes={[
            'O placeholder nunca é tratado como valor válido; valores desconhecidos são sanitizados com base em options.',
            'Quando name não é informado, o componente gera um nome único por instância para os inputs ocultos do formulário.',
          ]}
        >
          <SelectUsagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Seleção simples e múltipla"
        description="No modo simples, o select fecha ao escolher uma opção. Em múltiplo, a seleção alterna a opção atual, mantém a lista aberta e resume o valor selecionado exibindo o primeiro rótulo seguido de + (N) quando houver mais itens selecionados."
      >
        <SandboxExample
          title="Dois modos de seleção"
          description="Comparativo entre seleção simples e múltipla, preservando o mesmo contrato de label, helperText e feedback."
          code={multipleExampleCode}
          notes={[
            'No modo múltiplo, value e defaultValue precisam ser arrays; no modo simples, o valor esperado é string ou null.',
            'Opções com disabled não podem ser selecionadas nem destacadas pela navegação de teclado.',
          ]}
        >
          <SelectExamplesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Feedback, estados e acessibilidade"
        description="O feedback pode ser passado como no React estático em feedback ou calculado por renderFeedback usando o valor selecionado. O componente mantém navegação por teclado com ArrowUp, ArrowDown, Home, End, Enter, Space, Escape e Tab."
      >
        <SandboxExample
          title="Feedback dinâmico"
          description="Exemplo de feedback calculado a partir da seleção atual, sem perder a estrutura de helperText e o controle visual por state."
          code={feedbackExampleCode}
          notes={[
            'renderFeedback tem precedência sobre feedback quando ambos são fornecidos.',
            'state altera apenas o tom visual do controle; a semântica de sucesso ou erro continua sendo responsabilidade do consumidor.',
          ]}
        >
          <SelectInteractivePreview
            label="Status do conteúdo"
            placeholder="Selecione uma opção"
            helperText="Exemplo de feedback calculado pela seleção atual."
            multiple={false}
            disabled={false}
            state={undefined}
          />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Formulários e inputs ocultos"
        description="Como se trata de um select customizado, a participação em formulários acontece pelos inputs ocultos gerados internamente. Com name definido, o componente monta o payload para submit tanto no modo simples quanto no múltiplo."
      >
        <SandboxExample
          title="Simulação de envio"
          description="Formulário demonstrando como o componente participa do submit por inputs ocultos, inclusive quando múltiplo gera vários valores com o mesmo name."
          code={formExampleCode}
        >
          <SelectFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="O componente cobre bem o contrato visual, a acessibilidade básica e a participação em formulários, mas continua dependendo do consumidor para modelagem do valor, consistência do feedback e regras de negócio."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>onChange</code> retorna o novo valor e a opção alterada, não o evento nativo do DOM.</li>
          <li><code>state</code> altera apenas o tom visual do controle; a semântica de sucesso ou erro continua sendo responsabilidade do consumidor.</li>
          <li>Como se trata de um select customizado, a participação em formulários acontece pelos inputs ocultos gerados internamente.</li>
          <li>Em seleção múltipla, o componente resume visualmente os itens escolhidos; se o produto precisar listar todos de forma expandida, isso deve ser tratado fora do controle base.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const SelectInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo principal exibido acima do controle.',
      table: { category: 'Conteudo' },
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando nada está selecionado.',
      table: { category: 'Conteudo' },
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar associado ao controle por aria-describedby.',
      table: { category: 'Conteudo' },
    },
    multiple: {
      control: 'boolean',
      description: 'Ativa a seleção múltipla.',
      table: { category: 'Comportamento' },
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e impede a abertura da lista.',
      table: { category: 'Estado visual' },
    },
    state: {
      control: { type: 'radio' },
      options: [undefined, 'danger', 'success', 'warning', 'info'],
      description: 'Define apenas o estado visual da borda do controle.',
      table: { category: 'Estado visual' },
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o novo valor selecionado e a opção alterada.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    label: 'Status do conteúdo',
    placeholder: 'Selecione uma opção',
    helperText: 'Use os Controls para alternar entre os modos simples e múltiplo.',
    multiple: false,
    disabled: false,
    state: undefined,
  },
  render: (args) => <SelectInteractivePreview {...args} />,
}

export const SelectCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => <SelectExamplesPreview />,
}