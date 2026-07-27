import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  StoryDocsHero,
  StoryDocsSection,
  StoryPreviewCard,
  StorySandboxExample,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Checkbox } from './Checkbox'
import './Checkbox.scss'
import '../../foundations/styles/index.scss'

const basicUsageCode = `// Não controlado
<Checkbox label="Receber novidades" defaultChecked />

// Controlado
<Checkbox
  label="Aceito os termos"
  checked={accepted}
  onChange={(event) => setAccepted(event.target.checked)}
/>`

const propsExampleCode = `<Checkbox
  name="terms"
  value="accepted"
  label="Aceito os termos de uso"
  description="Necessário para concluir o envio."
  variant="danger"
/>`

const statesExampleCode = `<Checkbox label="Normal" />
<Checkbox label="Marcado" defaultChecked />
<Checkbox label="Disabled" disabled />
<Checkbox label="Danger" variant="danger" />
<Checkbox label="Success" variant="success" defaultChecked />
<Checkbox label="Intermediario" group indeterminate />`

const descriptionExampleCode = `<Checkbox
  label="Receber notificações"
  description="Escolha esta opção para permitir o envio de notificações por e-mail."
/>`

const groupExampleCode = `const [checkedItems, setCheckedItems] = useState<string[]>([])

<Checkbox
  label="Selecionar todos"
  checked={checkedItems.length === items.length}
  indeterminate={checkedItems.length > 0 && checkedItems.length < items.length}
  group
  onChange={toggleAll}
/>

{items.map((item) => (
  <Checkbox
    key={item}
    label={item}
    checked={checkedItems.includes(item)}
    onChange={() => toggleItem(item)}
  />
))}`

const formExampleCode = `const [receiveEmail, setReceiveEmail] = useState(true)
const [submittedValue, setSubmittedValue] = useState('Nenhum envio ainda')

<div style={{ ...storyDocsStyles.previewStage, maxWidth: 520 }}>
  <form
    onSubmit={(event) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      setSubmittedValue(formData.get('notifications')?.toString() ?? 'Nenhum valor enviado')
    }}
    style={{ display: 'grid', gap: 12 }}
  >
    <div style={{ display: 'grid', gap: 8 }}>
      <strong style={{ color: '#0f172a' }}>Preferências de contato</strong>
      <p style={storyDocsStyles.text}>
        Este bloco mostra como o componente continua aceitando <code>name</code>,
        <code> value</code> e outras props nativas de formulário.
      </p>
    </div>

    <Checkbox
      name="notifications"
      value="email"
      label="Receber avisos por e-mail"
      description="Você poderá alterar essa preferência depois."
      checked={receiveEmail}
      onChange={(event) => setReceiveEmail(event.target.checked)}
    />

    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button type="submit" variant="primary">
        Enviar preferências
      </Button>
      <span style={storyDocsStyles.statText}>
        <strong>Payload:</strong> {submittedValue}
      </span>
    </div>
  </form>
</div>`

const meta = {
  title: 'Formulários/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

type CheckboxInteractiveArgs = Checkbox.Props & {
  modoContraste?: boolean
}

function CheckboxInteractivePreview({ modoContraste = false, ...args }: CheckboxInteractiveArgs) {
  const [checked, setChecked] = useState(Boolean(args.checked))

  useEffect(() => {
    setChecked(Boolean(args.checked))
  }, [args.checked])

  return (
    <div
      style={{
        padding: 12,
        backgroundColor: modoContraste ? 'var(--govrs-color-contrast-background)' : undefined,
        color: modoContraste ? 'var(--govrs-color-contrast-foreground)' : undefined,
      }}
    >
      <Checkbox
        {...args}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked)
          args.onChange?.(event)
        }}
      />
    </div>
  )
}

function CheckboxGroupPreview() {
  const items = ['A', 'B', 'C']
  const [checkedSet, setCheckedSet] = useState<Set<string>>(new Set())
  const [submitted, setSubmitted] = useState<string[] | null>(null)
  const masterChecked = checkedSet.size === items.length
  const masterIndeterminate = checkedSet.size > 0 && checkedSet.size < items.length

  const toggleAll = () => {
    setCheckedSet((current) => {
      if (current.size === items.length) {
        return new Set()
      }

      return new Set(items)
    })
  }

  const toggleOne = (item: string) => {
    setCheckedSet((current) => {
      const next = new Set(current)
      if (next.has(item)) {
        next.delete(item)
      } else {
        next.add(item)
      }
      return next
    })
  }

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <div style={{ ...storyDocsStyles.previewStage, padding: 16 }}>
        <Checkbox
          label="Selecionar todos"
          checked={masterChecked}
          indeterminate={masterIndeterminate}
          group
          onChange={toggleAll}
        />

        <div style={{ display: 'grid', gap: 10, paddingLeft: 32 }}>
          {items.map((item) => (
            <Checkbox
              key={item}
              label={`Item ${item}`}
              checked={checkedSet.has(item)}
              onChange={() => toggleOne(item)}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => setSubmitted(Array.from(checkedSet))}>
            Enviar
          </Button>
          <span style={storyDocsStyles.statText}>
            <strong>Valor submetido:</strong>{' '}
            {submitted == null
              ? 'Nenhum envio ainda'
              : submitted.length === 0
                ? 'Nenhum item selecionado'
                : submitted.join(', ')}
          </span>
        </div>
      </div>
    </div>
  )
}

function CheckboxControlledVsUncontrolledPreview() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Controlado">
        <Checkbox
          label="Aceito os termos"
          description="O estado é controlado pelo React."
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Não controlado">
        <Checkbox
          label="Receber novidades"
          description="Usa o estado inicial e delega a interação ao navegador."
          defaultChecked
        />
      </StoryPreviewCard>
    </div>
  )
}

function CheckboxStatesPreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="Base">
        <Checkbox label="Normal" />
      </StoryPreviewCard>
      <StoryPreviewCard label="Marcado">
        <Checkbox label="Marcado" defaultChecked />
      </StoryPreviewCard>
      <StoryPreviewCard label="Disabled">
        <Checkbox label="Disabled" disabled />
      </StoryPreviewCard>
      <StoryPreviewCard label="Danger">
        <Checkbox label="Danger" variant="danger" />
      </StoryPreviewCard>
      <StoryPreviewCard label="Success">
        <Checkbox label="Success" variant="success" defaultChecked />
      </StoryPreviewCard>
      <StoryPreviewCard label="Intermediario">
        <Checkbox label="Intermediario" group indeterminate />
      </StoryPreviewCard>
    </div>
  )
}

function CheckboxDescriptionPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Informativo">
        <Checkbox
          label="Receber notificações"
          description="Escolha esta opção para permitir o envio de notificações por e-mail."
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Requer atenção">
        <Checkbox
          label="Termos e condições"
          description="A aceitação dos termos é obrigatória para concluir o cadastro."
          variant="danger"
        />
      </StoryPreviewCard>
    </div>
  )
}

function CheckboxFormPreview() {
  const [receiveEmail, setReceiveEmail] = useState(true)
  const [submittedValue, setSubmittedValue] = useState('Nenhum envio ainda')

  return (
    <div style={{ ...storyDocsStyles.previewStage, maxWidth: 520 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          setSubmittedValue(formData.get('notifications')?.toString() ?? 'Nenhum valor enviado')
        }}
        style={{ display: 'grid', gap: 12 }}
      >
        <div style={{ display: 'grid', gap: 8 }}>
          <strong style={{ color: '#0f172a' }}>Preferências de contato</strong>
          <p style={storyDocsStyles.text}>
            Este bloco mostra como o componente continua aceitando <code>name</code>,
            <code> value</code> e outras props nativas de formulário.
          </p>
        </div>

        <Checkbox
          name="notifications"
          value="email"
          label="Receber avisos por e-mail"
          description="Você poderá alterar essa preferência depois."
          checked={receiveEmail}
          onChange={(event) => setReceiveEmail(event.target.checked)}
        />

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button type="submit" variant="primary">
            Enviar preferências
          </Button>
          <span style={storyDocsStyles.statText}>
            <strong>Payload:</strong> {submittedValue}
          </span>
        </div>
      </form>
    </div>
  )
}

export const CheckboxDocumentacao: Story = {
  name: 'Documentacao',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={storyDocsStyles.docsContainer}>
      <StoryDocsHero
        eyebrow="Documentação guiada"
        title="Checkbox"
        description={
          <>
            O componente <code>Checkbox</code> permite selecionar uma ou mais opções de
            forma independente.
          </>
        }
        variantTags={['default', 'danger', 'success']}
        stats={[
          {
            title: 'Quando usar',
            text: 'Quando cada opção pode ser marcada ou desmarcada sem interferir nas demais.',
          },
          {
            title: 'Melhor exploração',
            text: "Use o story 'Interativo' para visualizar o funcionamento de diferentes formas e o story 'Grupo Interativo' para explorar cenários com múltiplos checkboxes.",
          },
          {
            title: 'Comportamento',
            text: 'Mantém input nativo, foco previsível, espaço no teclado e integração com formulários HTML.',
          },
        ]}
      />

      <StoryDocsSection
        title="Como usar"
        description={
          <>
            Use o checkbox quando cada escolha for independente. Quando se quer que o checkbox venha marcado por default, defaultChecked resolve bem. Quando o valor precisa refletir dados,
            validação ou store externa, prefira o modo controlado com checked e
            onChange.
          </>
        }
      >
        <ul style={storyDocsStyles.list}>
          <li><code>defaultChecked</code> define apenas o estado inicial marcado.</li>
          <li><code>checked</code> e <code>onChange</code> sincronizam o valor com estado React.</li>
          <li><code>group</code> e <code>indeterminate</code> fazem mais sentido em um checkbox mestre.</li>
        </ul>

        <StorySandboxExample
          title="Controle básico"
          description="Um comparativo direto entre uso controlado e não controlado, com troca entre preview e código no mesmo bloco."
          code={basicUsageCode}
          notes={[
            'No modo controlado, o valor precisa ser atualizado por quem consome o componente.',
            'No modo não controlado, o browser assume a interação após o estado inicial.',
          ]}
        >
          <CheckboxControlledVsUncontrolledPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection
        title="Props principais"
        description={
          <>
            A ideia aqui é deixar visível o que muda
            o comportamento, o que muda apenas o tom visual e o que continua vindo do
            input nativo.
          </>
        }
      >
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> define o texto principal clicável associado ao campo.</li>
          <li><code>description</code> adiciona contexto complementar por <code>aria-describedby</code>.</li>
          <li><code>variant</code> ajusta o tom visual para <code>default</code>, <code>danger</code> ou <code>success</code>.</li>
          <li><code>checked</code> e <code>onChange</code> formam o par recomendado no modo controlado.</li>
          <li><code>defaultChecked</code> cobre casos simples com estado inicial marcado.</li>
          <li><code>group</code> e <code>indeterminate</code> representam seleção parcial em checkboxes mestres.</li>
          <li>Props nativas como <code>name</code>, <code>value</code>, <code>required</code> e <code>aria-label</code> continuam disponiveis.</li>
        </ul>

        <StorySandboxExample
          title="Exemplo de composição"
          description="Um recorte mínimo da assinatura mais comum para formulários com validação ou submissão tradicional."
          code={propsExampleCode}
        >
          <div style={{ maxWidth: 420 }}>
            <Checkbox
              name="terms"
              value="accepted"
              label="Aceito os termos de uso"
              description="Necessário para concluir o envio."
              variant="danger"
            />
          </div>
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection
        title="Estados básicos"
        description={
          <>
            Foco, tecla de espaço e mudança de estado continuam previsíveis porque o
            componente usa o controle nativo. As variações visuais ajudam a contextualizar
            o campo sem alterar o comportamento do dado.
          </>
        }
      >
        <StorySandboxExample
          title="Galeria de estados"
          description="Um snapshot visual rápido dos estados mais recorrentes para comparação lado a lado."
          code={statesExampleCode}
        >
          <CheckboxStatesPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection
        title="Com descrição"
        description={
          <>
            Use description para complementar o rótulo com uma orientação curta ou uma
            consequência da escolha. O texto continua separado do nome principal, mas é
            anunciado junto ao campo.
          </>
        }
      >
        <StorySandboxExample
          title="Contexto adicional"
          description="Exemplos em que a descrição ajuda a reduzir ambiguidade sem sobrecarregar o label principal."
          code={descriptionExampleCode}
        >
          <CheckboxDescriptionPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection
        title="Grupo com estado intermediário"
        description={
          <>
            Quando um checkbox mestre representa um conjunto, indeterminate comunica que
            apenas parte do grupo está selecionada. A lógica para marcar todos, limpar
            todos ou calcular a seleção parcial continua sendo responsabilidade de quem
            consome.
          </>
        }
      >
        <StorySandboxExample
          title="Seleção parcial"
          description="Este sandbox simula uma lista real, com um checkbox mestre e o retorno do valor submetido."
          code={groupExampleCode}
          notes={[
            'O estado intermediário é apenas visual; ele não representa um valor enviado por si só.',
            'A história Grupo Interativo mantém esse cenário disponível como uma história dedicada para exploração rápida.',
          ]}
        >
          <CheckboxGroupPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection
        title="Integração com formulário"
        description={
          <>
            Como o componente expõe as props nativas do input, você pode usar name,
            value, required e aria-label normalmente. O rótulo envolve o controle inteiro,
            o que amplia a área clicável e melhora a usabilidade.
          </>
        }
      >
        <StorySandboxExample
          title="Props nativas em ação"
          description="O preview abaixo simula um envio simples para deixar explícito o payload gerado a partir de name e value."
          code={formExampleCode}
        >
          <CheckboxFormPreview />
        </StorySandboxExample>
      </StoryDocsSection>

      <StoryDocsSection
        title="Limitações e dependências"
        description={
          <>
            O componente cobre bem o contrato visual e a integração nativa com formulários,
            mas não substitui a lógica de negócio do formulário nem gerencia grupos
            automaticamente.
          </>
        }
      >
        <ul style={storyDocsStyles.list}>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code>.</li>
          <li><code>indeterminate</code> é apenas visual e faz mais sentido em um checkbox mestre.</li>
          <li><code>group</code> muda a aparência do checkbox, mas não sincroniza filhos automaticamente.</li>
          <li><code>description</code> não substitui o nome acessível; sem label visível, forneça pelo menos <code>aria-label</code>.</li>
          <li><code>variant</code> altera apenas o tom visual do controle; ele não valida dados sozinho.</li>
        </ul>

        <StorySandboxExample
          title="Controlado x não controlado"
          description="Este bloco reforça a principal diferença de responsabilidade entre o componente e o consumidor."
          code={basicUsageCode}
        >
          <CheckboxControlledVsUncontrolledPreview />
        </StorySandboxExample>
      </StoryDocsSection>
    </div>
  ),
}

export const CheckboxInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    label: {
      control: 'text',
      description: 'Texto principal associado ao checkbox e usado como nome acessível quando visível.',
      table: { category: 'Conteudo' },
    },
    description: {
      control: 'text',
      description: 'Texto complementar anunciado junto ao campo por aria-describedby.',
      table: { category: 'Conteudo' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'danger', 'success'],
      description: 'Altera apenas o tom visual do checkbox.',
      table: { category: 'Estado visual' },
    },
    checked: {
      control: 'boolean',
      description: 'Use junto com onChange quando o componente for controlado.',
      table: { category: 'Controle' },
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: { category: 'Estado visual' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado visual parcial; normalmente usado com group em um checkbox mestre.',
      table: { category: 'Grupo' },
    },
    group: {
      control: 'boolean',
      description: 'Aplica a aparência de checkbox de grupo, mas não controla os filhos automaticamente.',
      table: { category: 'Grupo' },
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo quando o usuário altera o valor do controle.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    label: 'Checkbox interativo',
    description: 'Altere os Controls para testar o componente em tempo real.',
    variant: 'default',
    checked: false,
    disabled: false,
    indeterminate: false,
    group: false,
  },
  render: (args) => <CheckboxInteractivePreview {...(args as CheckboxInteractiveArgs)} />,
}

export const CheckboxGrupo: Story = {
  name: 'Grupo Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
  },
  parameters: {
    controls: { disable: true },
  },
  render: () => <CheckboxGroupPreview />,
}