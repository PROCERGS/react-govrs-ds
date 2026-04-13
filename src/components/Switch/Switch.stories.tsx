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
import { Switch } from './Switch'
import './Switch.scss'
import '../../foundations/styles/index.scss'

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa ligar ou desligar uma configuração imediatamente, como preferencias de interface, permissões simples ou recursos ativáveis no próprio contexto.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar label, description, disabled e o estado controlado. O story 'Em Formulário' mostra a participação do switch no submit tradicional.",
  },
  {
    title: 'Comportamento',
    text: 'O componente usa checkbox nativo com role switch, mantém foco por teclado e acionamento por espaço, e checked depende de onChange quando o uso for controlado.',
  },
] satisfies Array<{ title: string; text: string }>

const usageExampleCode = `// Não controlado
<Switch label="Receber notificações" defaultChecked />

// Controlado
<Switch
  label="Ativar modo escuro"
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`

const propsExampleCode = `<Switch
  name="darkMode"
  value="enabled"
  label="Ativar modo escuro"
  description="Aplica a interface escura em toda a aplicação."
/>`

const statesExampleCode = `<Switch label="Desligado" />
<Switch label="Ligado" defaultChecked />
<Switch label="Desabilitado" disabled />
<Switch label="Ligado e desabilitado" defaultChecked disabled />`

const descriptionExampleCode = `<Switch
  label="Receber novidades"
  description="Ative para permitir o envio de novidades por e-mail."
/>`

const formExampleCode = `const [enabled, setEnabled] = useState(false)

<Switch
  name="darkMode"
  label="Ativar modo escuro"
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`

const meta = {
  title: 'Widgets/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

function SwitchInteractivePreview(args: Switch.Props) {
  const [checked, setChecked] = useState(Boolean(args.checked))

  useEffect(() => {
    setChecked(Boolean(args.checked))
  }, [args.checked])

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16 }}>
      <Switch
        {...args}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked)
          args.onChange?.(event)
        }}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Estado atual:</strong> {checked ? 'Ativado' : 'Desativado'}
      </p>
    </div>
  )
}

function SwitchStatesPreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="Desligado">
        <Switch label="Desligado" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Ligado">
        <Switch label="Ligado" defaultChecked />
      </StoryPreviewCard>

      <StoryPreviewCard label="Desabilitado">
        <Switch label="Desabilitado" disabled />
      </StoryPreviewCard>

      <StoryPreviewCard label="Ligado e desabilitado">
        <Switch label="Ligado e desabilitado" defaultChecked disabled />
      </StoryPreviewCard>
    </div>
  )
}

function SwitchDescriptionPreview() {
  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
      <Switch
        label="Receber novidades"
        description="Ative para permitir o envio de novidades por e-mail."
      />
      <Switch
        label="Compartilhar localização"
        description="Usa sua localização apenas para sugerir conteúdo da sua região."
        defaultChecked
      />
    </div>
  )
}

function SwitchFormPreview() {
  const [enabled, setEnabled] = useState(false)
  const [submittedValue, setSubmittedValue] = useState<boolean | null>(null)

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmittedValue(enabled)
        }}
      >
        <div style={{ ...storyDocsStyles.previewStage, padding: 16 }}>
          <Switch
            name="darkMode"
            value="enabled"
            label="Ativar modo escuro"
            description="Altere este controle para escurecer a interface."
            checked={enabled}
            onChange={(event) => setEnabled(event.target.checked)}
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
        {submittedValue == null ? 'Nenhum envio ainda' : submittedValue ? 'Ativado' : 'Desativado'}
      </p>
    </div>
  )
}

export const SwitchDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Switch</h3>}
        description={
          <>
            O componente <code>Switch</code> representa uma alternância binária entre
            ligado e desligado. Ele usa <code>checkbox</code> com <code>role="switch"</code>
            para manter a semântica acessível e pode receber rótulo e descrição opcionais.
          </>
        }
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como usar"
        description="Use o switch quando a ação representar ligar ou desligar uma configuração imediatamente, como preferências de interface, permissões simples ou recursos que podem ser ativados no próprio contexto. Para um valor inicial, defaultChecked é suficiente; quando o valor depende do estado da aplicação, prefira checked e onChange."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>checked</code> e <code>onChange</code> controlam explicitamente o estado ligado ou desligado.</li>
          <li><code>defaultChecked</code> define apenas o estado inicial no modo não controlado.</li>
          <li>O componente participa normalmente de formulários por ser baseado em input nativo.</li>
        </ul>

        <SandboxExample
          title="Controlado e não controlado"
          description="Comparativo mínimo entre o uso com estado inicial local do navegador e o uso controlado por estado React."
          code={usageExampleCode}
          notes={[
            'No modo controlado, o valor visual depende da atualização feita por quem consome o componente.',
            'No modo não controlado, defaultChecked só define o ponto de partida do estado.',
          ]}
        >
          <SwitchInteractivePreview
            label="Ativar modo escuro"
            description="Exemplo controlado no Storybook."
            checked={false}
            disabled={false}
          />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props principais"
        description="A API permanece pequena e previsível. O foco é deixar claro o que altera comportamento, o que adiciona contexto e o que continua vindo do input checkbox nativo."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> define o texto principal associado ao controle.</li>
          <li><code>description</code> complementa o contexto e é ligada ao campo por <code>aria-describedby</code>.</li>
          <li>Props nativas como <code>name</code>, <code>value</code>, <code>disabled</code> e <code>required</code> continuam disponíveis.</li>
        </ul>

        <SandboxExample
          title="Assinatura comum"
          description="Exemplo de uma configuração típica de switch em preferência de interface ou recurso ativável."
          code={propsExampleCode}
        >
          <div style={{ maxWidth: 420 }}>
            <Switch
              name="darkMode"
              value="enabled"
              label="Ativar modo escuro"
              description="Aplica a interface escura em toda a aplicação."
            />
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Estados básicos"
        description="O switch mantém foco por teclado, navegação por tab e acionamento por espaço como qualquer checkbox nativo. O estado desabilitado reduz contraste visual e impede interação."
      >
        <SandboxExample
          title="Galeria de estados"
          description="Snapshot visual rápido dos estados mais recorrentes para comparação lado a lado."
          code={statesExampleCode}
        >
          <SwitchStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Com descrição"
        description="A descrição ajuda a deixar claro o efeito da alternância sem sobrecarregar o texto principal. Ela é útil quando o rótulo sozinho não explica o impacto de ligar ou desligar a opção."
      >
        <SandboxExample
          title="Contexto adicional"
          description="Dois exemplos com descrição para demonstrar como o componente pode explicar melhor o efeito da alternância."
          code={descriptionExampleCode}
        >
          <SwitchDescriptionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Integração com formulário"
        description="Por ser baseado em um input nativo, o switch participa normalmente de formulários, inclusive com name, value e submissão tradicional. O exemplo abaixo demonstra o uso controlado com envio do estado atual."
      >
        <SandboxExample
          title="Submit tradicional"
          description="Formulário demonstrando o uso controlado do switch e a leitura do estado submetido."
          code={formExampleCode}
        >
          <SwitchFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="O componente cobre bem a alternância binária imediata, mas continua dependendo do consumidor para sincronizar estado controlado e definir quando a ação realmente deve ser persistida ou refletida no restante da interface."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>checked</code> no modo controlado depende de <code>onChange</code>; sem isso, o switch fica visualmente travado.</li>
          <li><code>defaultChecked</code> define apenas o estado inicial e não sincroniza com estado externo depois do primeiro render.</li>
          <li><code>description</code> complementa o contexto, mas não substitui o nome acessível do controle.</li>
          <li>Como o componente representa uma alternância binária imediata, ele não substitui grupos de opções mutuamente exclusivas.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const SwitchInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto principal associado ao controle.',
      table: { category: 'Conteúdo' },
    },
    description: {
      control: 'text',
      description: 'Texto complementar anunciado junto ao switch por aria-describedby.',
      table: { category: 'Conteúdo' },
    },
    checked: {
      control: 'boolean',
      description: 'Estado atual do switch quando o componente é controlado.',
      table: { category: 'Estado visual' },
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: { category: 'Estado visual' },
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo quando o valor do switch muda.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    label: 'Ativar recurso',
    description: 'Exemplo de switch controlado no Storybook.',
    checked: false,
    disabled: false,
  },
  render: (args) => <SwitchInteractivePreview {...args} />,
}

export const SwitchEmFormulario: Story = {
  name: 'Em Formulário',
  parameters: {
    controls: { disable: true },
  },
  render: () => <SwitchFormPreview />,
}