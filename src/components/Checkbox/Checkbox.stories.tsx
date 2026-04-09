import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/Button'
import { Checkbox } from './Checkbox'
import './Checkbox.scss'
import '../../foundations/styles/index.scss'

const meta: Meta<typeof Checkbox> = {
  title: 'Widgets/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj<typeof Checkbox>

const codeBlockStyle = {
  background: '#f7f7f7',
  padding: 12,
  borderRadius: 4,
  overflowX: 'auto' as const,
  margin: 0,
}

const sectionTextStyle = {
  color: '#444',
  margin: '0 0 8px',
}

function CheckboxInteractivePreview(args: Checkbox.Props) {
  const [checked, setChecked] = useState(Boolean(args.checked))

  useEffect(() => {
    setChecked(Boolean(args.checked))
  }, [args.checked])

  return (
    <div style={{ padding: 12 }}>
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
    <div style={{ padding: 12, maxWidth: 720 }}>
      <div style={{ display: 'grid', gap: 12 }}>
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

        <div style={{ marginTop: 8 }}>
          <Button variant="primary" onClick={() => setSubmitted(Array.from(checkedSet))}>
            Enviar
          </Button>
        </div>

        <div style={{ color: '#444' }}>
          <strong>Valor submetido:</strong>{' '}
          {submitted == null
            ? 'Nenhum envio ainda'
            : submitted.length === 0
              ? 'Nenhum item selecionado'
              : submitted.join(', ')}
        </div>
      </div>
    </div>
  )
}

function CheckboxControlledVsUncontrolledPreview() {
  const [accepted, setAccepted] = useState(false)

  return (
    <div
      style={{
        padding: 12,
        border: '1px solid #eee',
        borderRadius: 6,
        display: 'grid',
        gap: 12,
        maxWidth: 420,
      }}
    >
      <Checkbox
        label="Aceito os termos"
        description="Controlado"
        checked={accepted}
        onChange={(event) => setAccepted(event.target.checked)}
      />

      <Checkbox
        label="Receber novidades"
        description="Não controlado"
        defaultChecked
      />
    </div>
  )
}

export const CheckboxDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 960 }}>
      <h3 style={{ margin: 0 }}>Checkbox</h3>
      <p style={{ color: '#444', margin: 0 }}>
        O componente <code>Checkbox</code> permite selecionar uma ou mais opções de forma
        independente. Ele cobre o estado base, os estados visuais <code>danger</code> e
        <code>success</code>, suporte a <code>indeterminate</code> para checkboxes mestres em
        grupos e descrição opcional junto ao rótulo para complementar o contexto. Como o
        componente encapsula um <code>input type="checkbox"</code> nativo, ele se integra bem
        com formulários HTML e mantém o comportamento esperado de teclado, foco e submissão.
      </p>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Como usar</h4>
        <p style={sectionTextStyle}>
          Use o checkbox quando cada opção puder ser marcada ou desmarcada sem excluir as
          demais. Para estados iniciais com checkbox marcado, <code>defaultChecked</code> resolve bem; <br />
          Quando o valor precisa refletir dados de formulário, validação ou store externa, prefira o modo
          controlado com <code>checked</code> e <code>onChange</code>.
        </p>
        <ul style={{ color: '#444', margin: 0, paddingLeft: 20 }}>
          <li><code>defaultChecked</code> define apenas o estado inicial marcado e deixa o navegador controlar a interação depois disso.</li>
          <li><code>checked</code> e <code>onChange</code> permitem sincronizar o valor com estado React, validação ou regras do formulário.</li>
          <li><code>group</code> e <code>indeterminate</code> são úteis para um checkbox mestre que representa seleção parcial de um conjunto de checkboxes.</li>
        </ul>
        <pre style={codeBlockStyle}>
          <code>{`// Não controlado
<Checkbox label="Receber novidades" defaultChecked />

// Controlado
<Checkbox
  label="Aceito os termos"
  checked={accepted}
  onChange={(event) => setAccepted(event.target.checked)}
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Props principais</h4>
        <ul style={{ color: '#444', margin: 0, paddingLeft: 20 }}>
          <li><code>label</code> define o texto principal clicável associado ao campo.</li>
          <li><code>description</code> adiciona contexto complementar e é ligado ao input por <code>aria-describedby</code>.</li>
          <li><code>variant</code> ajusta o tom visual para <code>default</code>, <code>danger</code> ou <code>success</code>.</li>
          <li><code>checked</code> e <code>onChange</code> são o par recomendado para controlar quando o valor muda caso precise de uma ação reativa; </li>
          <li><code>defaultChecked</code> cobre casos simples onde o checkbox começa marcado por padrão.</li>
          <li><code>group</code> e <code>indeterminate</code> ajudam a representar seleção parcial em checkboxes mestres.</li>
          <li>Props nativas como <code>name</code>, <code>value</code>, <code>required</code> e <code>aria-label</code> continuam disponíveis.</li>
        </ul>
        <pre style={codeBlockStyle}>
          <code>{`<Checkbox
  name="terms"
  value="accepted"
  label="Aceito os termos de uso"
  description="Necessário para concluir o envio."
  variant="danger"
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Estados básicos</h4>
        <p style={sectionTextStyle}>
          O checkbox usa o controle nativo do navegador, então foco, tecla de espaço e mudança de
          estado continuam previsíveis. As variantes visuais ajudam a contextualizar o campo,
          enquanto <code>disabled</code> bloqueia a interação e <code>indeterminate</code> representa
          um estado parcial sem marcar o valor como selecionado integralmente.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Checkbox label="Normal" />
          <Checkbox label="Marcado" defaultChecked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Danger" variant="danger" />
          <Checkbox label="Success" variant="success" defaultChecked />
          <Checkbox label="Intermediário" group indeterminate />
        </div>
        <pre style={codeBlockStyle}>
          <code>{`
          <Checkbox label="Normal" />
          <Checkbox label="Marcado" defaultChecked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Danger" variant="danger" />
          <Checkbox label="Success" variant="success" defaultChecked />
          <Checkbox label="Intermediário" group indeterminate />`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Com descrição</h4>
        <p style={sectionTextStyle}>
          Use <code>description</code> para complementar o rótulo com uma orientação curta ou uma
          consequência da escolha. O texto continua separado do nome principal do campo, mas é
          associado ao input por <code>aria-describedby</code>, o que ajuda tecnologias assistivas a
          anunciar o contexto completo.
        </p>
        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
          <Checkbox
            label="Receber notificações"
            description="Escolha esta opção para permitir o envio de notificações por e-mail."
          />
          <Checkbox
            label="Termos e condições"
            description="A aceitação dos termos é obrigatória para concluir o cadastro."
            variant="danger"
          />
        </div>
        <pre style={codeBlockStyle}>
          <code>{`<Checkbox
  label="Receber notificações"
  description="Escolha esta opção para permitir o envio de notificações por e-mail."
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Grupo com estado intermediário</h4>
        <p style={sectionTextStyle}>
          Quando um checkbox mestre representa um conjunto de checkboxes, <code>indeterminate</code>
          comunica que apenas parte do grupo está selecionada. O componente não gerencia os filhos
          sozinho: a lógica para marcar todos, limpar todos ou calcular a seleção parcial continua
          sendo responsabilidade de quem consome.
        </p>
        <CheckboxGroupPreview />
        <pre style={codeBlockStyle}>
          <code>{`const [checkedItems, setCheckedItems] = useState<string[]>([])

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
))}`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Integração com formulário</h4>
        <p style={sectionTextStyle}>
          Como o componente expõe as props nativas do input, você pode usar atributos como
          <code> name</code>, <code>value</code>, <code>required</code> e <code>aria-label </code>
          normalmente. O rótulo envolve todo o controle, então a área clicável inclui texto e
          descrição, o que melhora a usabilidade em listas e formulários maiores.
        </p>
        <pre style={codeBlockStyle}>
          <code>{`<Checkbox
  name="notifications"
  value="email"
  label="Receber avisos por e-mail"
  description="Você poderá alterar essa preferência depois."
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Limitações e dependências</h4>
        <ul style={{ color: '#444', margin: 0, paddingLeft: 20 }}>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code>. Para exemplos simples sem estado externo, prefira <code>defaultChecked</code>.</li>
          <li><code>indeterminate</code> é apenas visual e faz mais sentido quando combinado com <code>group</code> em um checkbox mestre.</li>
          <li><code>group</code> muda a aparência do checkbox, mas não sincroniza filhos automaticamente. A lógica do grupo continua sendo responsabilidade do consumidor.</li>
          <li><code>description</code> não substitui o nome acessível. Quando não houver <code>label</code> visível, forneça pelo menos <code>aria-label</code>.</li>
          <li><code>variant</code> altera apenas o tom visual do controle; ele não valida os dados nem mostra mensagem de erro sozinho.</li>
        </ul>
        <pre style={codeBlockStyle}>
          <code>{`// Controlado
<Checkbox
  label="Aceito os termos"
  description="Controlado"
  checked={accepted}
  onChange={(event) => setAccepted(event.target.checked)}
/>

// Não controlado
<Checkbox label="Receber novidades" description="Não controlado" defaultChecked />`}</code>
        </pre>
        <CheckboxControlledVsUncontrolledPreview />
      </section>
    </div>
  ),
}

export const CheckboxInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    label: { control: 'text', description: 'Texto principal associado ao checkbox e usado como nome acessível quando visível.' },
    description: { control: 'text', description: 'Texto complementar anunciado junto ao campo por aria-describedby.' },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'danger', 'success'],
      description: 'Altera apenas o tom visual do checkbox.',
    },
    checked: { control: 'boolean', description: 'Use junto com onChange quando o componente for controlado.' },
    disabled: { control: 'boolean', description: 'Bloqueia a interação e aplica o estado visual desabilitado.' },
    indeterminate: { control: 'boolean', description: 'Estado visual parcial; normalmente usado com group em um checkbox mestre.' },
    group: { control: 'boolean', description: 'Aplica a aparência de checkbox de grupo, mas não controla os filhos automaticamente.' },
    onChange: { action: 'changed', description: 'Recebe o evento nativo quando o usuário altera o valor do controle.' },
  },
  args: {
    label: 'Checkbox interativo',
    description: '',
    variant: 'default',
    checked: false,
    disabled: false,
    indeterminate: false,
    group: false,
  },
  render: (args) => <CheckboxInteractivePreview {...args} />,
}

export const CheckboxGrupo: Story = {
  name: 'Grupo Interativo',
  parameters: {
    controls: { disable: true },
  },
  render: () => <CheckboxGroupPreview />,
}