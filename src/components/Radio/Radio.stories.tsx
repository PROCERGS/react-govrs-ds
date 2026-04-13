import { useEffect, useState } from 'react'
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
import { Radio } from './Radio'
import './Radio.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['default', 'danger', 'success']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando o usuário precisa escolher apenas uma opção entre alternativas mutuamente exclusivas, ou quando um único radio isolado faz parte de um fluxo específico.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar label, description, variant e o comportamento isolado. O story 'Grupo Interativo' demonstra o caso mais comum de seleção exclusiva por name.",
  },
  {
    title: 'Comportamento',
    text: 'O agrupamento depende de name, checked continua sendo controlado externamente e defaultChecked só faz sentido quando a radio participa de um grupo válido.',
  },
] satisfies Array<{ title: string; text: string }>

const groupExampleCode = `<Radio name="cores" value="vermelho" label="Vermelho" />
<Radio name="cores" value="verde" label="Verde" />
<Radio name="cores" value="azul" label="Azul" />`

const isolatedExampleCode = `<Radio
  label="Confirmo esta opcao"
  description="Exemplo de radio usada sozinha, sem compartilhar grupo com outras opções."
/>`

const propsExampleCode = `<Radio
  name="planos"
  value="premium"
  label="Plano premium"
  description="Inclui recursos adicionais e atendimento prioritário."
  variant="success"
/>`

const statesExampleCode = `<Radio label="Normal" name="estado-demo-a" />
<Radio label="Marcado" name="estado-demo-b" defaultChecked />
<Radio label="Desabilitado" name="estado-demo-c" disabled />
<Radio label="Danger" name="estado-demo-d" variant="danger" />
<Radio label="Success" name="estado-demo-e" variant="success" defaultChecked />`

const descriptionExampleCode = `<Radio
  name="envio"
  value="email"
  label="Receber por e-mail"
  description="Enviaremos comunicações apenas para o endereço principal da conta."
/>`

const meta = {
  title: 'Widgets/Radio',
  component: Radio,
  args: {
    label: 'Opção A',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

function RadioInteractivePreview(args: Radio.Props) {
  const [checked, setChecked] = useState(Boolean(args.checked))

  useEffect(() => {
    setChecked(Boolean(args.checked))
  }, [args.checked])

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16 }}>
      <Radio
        {...args}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked)
          args.onChange?.(event)
        }}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Selecionado:</strong> {checked ? 'Sim' : 'Nao'}
      </p>
    </div>
  )
}

function RadioIsolatedPreview() {
  return (
    <div style={{ maxWidth: 460 }}>
      <Radio
        label="Confirmo esta opção"
        description="Exemplo de radio usada sozinha, sem compartilhar grupo com outras opções."
      />
    </div>
  )
}

function RadioStatesPreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="Normal">
        <Radio label="Normal" name="estado-demo-a" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Marcado">
        <Radio label="Marcado" name="estado-demo-b" defaultChecked />
      </StoryPreviewCard>

      <StoryPreviewCard label="Desabilitado">
        <Radio label="Desabilitado" name="estado-demo-c" disabled />
      </StoryPreviewCard>

      <StoryPreviewCard label="Danger">
        <Radio label="Danger" name="estado-demo-d" variant="danger" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Success">
        <Radio label="Success" name="estado-demo-e" variant="success" defaultChecked />
      </StoryPreviewCard>
    </div>
  )
}

function RadioDescriptionPreview() {
  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
      <Radio
        name="envio"
        value="email"
        label="Receber por e-mail"
        description="Enviaremos comunicações apenas para o endereço principal da conta."
      />

      <Radio
        name="envio"
        value="sms"
        label="Receber por SMS"
        description="Use esta opção quando o número de telefone estiver validado."
      />
    </div>
  )
}

function RadioGroupPreview() {
  const [selectedValue, setSelectedValue] = useState('verde')
  const [submittedValue, setSubmittedValue] = useState<string | null>(null)

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmittedValue(selectedValue)
        }}
      >
        <div style={{ ...storyDocsStyles.previewStage, padding: 16 }}>
          <Radio
            name="cores"
            value="vermelho"
            label="Vermelho"
            checked={selectedValue === 'vermelho'}
            onChange={() => setSelectedValue('vermelho')}
          />
          <Radio
            name="cores"
            value="verde"
            label="Verde"
            checked={selectedValue === 'verde'}
            onChange={() => setSelectedValue('verde')}
          />
          <Radio
            name="cores"
            value="azul"
            label="Azul"
            checked={selectedValue === 'azul'}
            onChange={() => setSelectedValue('azul')}
          />

          <div>
            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </div>
        </div>
      </form>

      <p style={storyDocsStyles.statText}>
        <strong>Valor submetido:</strong>{' '}
        {submittedValue == null ? 'Nenhum envio ainda' : submittedValue}
      </p>
    </div>
  )
}

export const RadioDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Radio</h3>}
        description={
          <>
            O componente <code>Radio</code> normalmente representa uma escolha única
            dentro de um grupo, mas também pode ser usado sozinho quando o formulário
            precisa de um único controle desse tipo. 
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como usar"
        description="Use radio quando a pessoa usuária precisar escolher apenas uma opção entre várias alternativas mutuamente exclusivas. Quando houver grupo, o agrupamento é feito por name, então todas as radios do mesmo conjunto precisam compartilhar o mesmo valor desse atributo."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> é o ponto de agrupamento entre radios exclusivas.</li>
          <li><code>label</code> define o texto visível associado a cada opção.</li>
          <li><code>checked</code> e <code>onChange</code> controlam explicitamente a seleção em React.</li>
        </ul>

        <SandboxExample
          title="Grupo básico"
          description="Exemplo mínimo de radios agrupadas por name para reforçar o contrato básico de seleção exclusiva."
          code={groupExampleCode}
          notes={[
            'Se cada radio tiver um name diferente, elas deixam de formar um grupo exclusivo.',
            'A semântica nativa continua sendo do input radio do navegador.',
          ]}
        >
          <RadioGroupPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Uso isolado"
        description="Embora o uso mais comum seja em grupo, a radio também pode aparecer sozinha. Nesse caso, basta omitir name e tratar o estado como um valor isolado da interface ou do formulário."
      >
        <SandboxExample
          title="Radio fora de grupo"
          description="Exemplo de uma única radio renderizada sem agrupamento, preservando a semântica nativa do componente."
          code={isolatedExampleCode}
          notes={[
            'Sem name, a radio funciona isoladamente e o componente ignora defaultChecked.',
            'Isso evita um estado inicial marcado que a pessoa usuária não conseguiria desfazer com um novo clique.',
          ]}
        >
          <RadioIsolatedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props principais"
        description="A API do componente continua pequena e previsível. O foco é deixar claro o que controla agrupamento, o que muda apenas o tom visual e o que continua vindo do input nativo."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> é opcional. Quando informado, agrupa radios e define que apenas uma delas pode permanecer marcada.</li>
          <li><code>description</code> adiciona contexto complementar abaixo do rótulo principal.</li>
          <li><code>defaultChecked</code> só faz sentido quando a radio participa de um grupo; em uso isolado, o componente ignora esse valor.</li>
          <li><code>variant</code> ajusta o tom visual da borda e do preenchimento interno.</li>
        </ul>

        <SandboxExample
          title="Assinatura comum"
          description="Um recorte mínimo da forma mais comum de uso em grupos com contexto adicional e variação visual."
          code={propsExampleCode}
        >
          <div style={{ maxWidth: 460 }}>
            <Radio
              name="planos"
              value="premium"
              label="Plano premium"
              description="Inclui recursos adicionais e atendimento prioritário."
              variant="success"
            />
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Estados básicos"
        description="A radio pode aparecer desmarcada, marcada, desabilitada ou com variações visuais de sucesso e erro. As variantes alteram o tom do controle, sem mudar a lógica de agrupamento."
      >
        <SandboxExample
          title="Galeria de estados"
          description="Snapshot visual rápido dos estados mais recorrentes para comparação lado a lado."
          code={statesExampleCode}
        >
          <RadioStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Com descrição"
        description="A descrição ajuda a diferenciar opções parecidas ou a explicar consequências da escolha. Isso é especialmente útil quando o grupo exige uma decisão mais contextualizada."
      >
        <SandboxExample
          title="Contexto adicional"
          description="Duas radios do mesmo grupo com descrições complementares para demonstrar leitura e comparação entre opções."
          code={descriptionExampleCode}
        >
          <RadioDescriptionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="O componente cobre bem o contrato visual e a semântica nativa de radio, mas continua dependendo do consumidor para controle de estado, agrupamento correto e modelagem do formulário."
      >
        <ul style={storyDocsStyles.list}>
          <li>O agrupamento depende de <code>name</code>; se cada radio tiver um nome diferente, elas não formarão um grupo exclusivo.</li>
          <li>Sem <code>name</code>, a radio funciona sozinha. Ainda assim, ela preserva a semântica nativa de radio, então um novo clique não a desmarca automaticamente depois de marcada.</li>
          <li>Por esse motivo, <code>defaultChecked</code> é ignorado em uso isolado e a radio sempre começa desmarcada quando não pertence a um grupo.</li>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code> ou outra lógica externa para atualizar a seleção.</li>
          <li><code>variant</code> altera apenas o tom visual do componente e não faz validação sozinho.</li>
          <li>Para múltiplas seleções independentes, use <code>Checkbox</code> em vez de radio.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const RadioInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    name: {
      control: 'text',
      description: 'Opcional. Quando informado, agrupa radios com o mesmo nome; vazio ou ausente mantém a radio isolada.',
      table: { category: 'Agrupamento' },
    },
    value: {
      control: 'text',
      description: 'Valor submetido pelo radio quando ele participa de um formulário.',
      table: { category: 'Agrupamento' },
    },
    label: {
      control: 'text',
      description: 'Texto principal associado à opção.',
      table: { category: 'Conteudo' },
    },
    description: {
      control: 'text',
      description: 'Texto complementar exibido abaixo do rótulo.',
      table: { category: 'Conteudo' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'danger', 'success'],
      description: 'Altera o tom visual da radio.',
      table: { category: 'Estado visual' },
    },
    checked: {
      control: 'boolean',
      description: 'Estado da opção quando o componente é controlado.',
      table: { category: 'Estado visual' },
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: { category: 'Estado visual' },
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo quando a opção é selecionada.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    name: '',
    value: 'opcao-a',
    label: 'Opção A',
    description: 'Altere pelos Controls',
    variant: 'default',
    checked: false,
    disabled: false,
  },
  render: (args) => <RadioInteractivePreview {...args} />,
}

export const RadioGrupo: Story = {
  name: 'Grupo Interativo',
  parameters: {
    controls: { disable: true },
  },
  render: () => <RadioGroupPreview />,
}