import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faCalendarDays,
  faMagnifyingGlass,
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
import { Badges } from '../Badges/Badges'
import { Input } from './Input'
import './Input.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['danger', 'success', 'warning', 'info']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando o formulário precisa coletar texto curto com orientação visível, feedback contextual e estados de validação ou atenção.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar label, helperText, type, state e ícones. O story 'Exemplos Combinados' resume os casos mais recorrentes do componente.",
  },
  {
    title: 'Comportamento',
    text: 'O input é controlado externamente, o toggle de senha só atua em type=password e o feedback pode ser anunciado como status ou alert conforme o state.',
  },
] satisfies Array<{ title: string; text: string }>

const anatomyExampleCode = `<Input
  label="E-mail"
  helperText="Use o endereço institucional."
  feedback={<Badges variant="info" message="Não compartilhamos esse dado." />}
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>`

const basicExamplesCode = `<Input
  label="Usuario"
  value={value}
  onChange={(event) => setValue(event.target.value)}
  leftIcon={faUser}
  placeholder="Digite seu nome"
/>

<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
/>`

const feedbackExamplesCode = `<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  feedback={<Badges variant="error" message="O campo não pode ser vazio." />}
  state="danger"
/>`

const controlledPasswordCode = `const [email, setEmail] = useState('maria@exemplo.rs.gov.br')
const [password, setPassword] = useState('segredo123')

<Input
  label="E-mail"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  leftIcon={faUser}
/>

<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  helperText="Use ao menos 8 caracteres."
/>`

const combinedExampleCode = `<Input
  label="Busca"
  value=""
  onChange={() => {}}
  leftIcon={faMagnifyingGlass}
  placeholder="Pesquisar"
/>

<Input
  label="Senha"
  value="segredo123"
  onChange={() => {}}
  type="password"
/>

<Input
  label="Campo com erro"
  value=""
  onChange={() => {}}
  state="danger"
  feedback={<Badges variant="error" message="Preencha este campo." />}
/>`

function renderFeedbackBadge(state?: Input.State) {
  switch (state) {
    case 'danger':
      return <Badges variant="error" message="O campo não pode ficar vazio." />
    case 'success':
      return <Badges variant="success" message="Valor validado com sucesso." />
    case 'warning':
      return <Badges variant="warning" message="Revise este valor antes de continuar." />
    case 'info':
      return <Badges variant="info" message="Informação adicional sobre o preenchimento." />
    default:
      return undefined
  }
}

const meta = {
  title: 'Formulários/Input',
  component: Input,
  args: {
    label: 'Campo base',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

function InputInteractivePreview(args: Input.Props) {
  const [value, setValue] = useState(typeof args.value === 'string' ? args.value : '')

  useEffect(() => {
    setValue(typeof args.value === 'string' ? args.value : '')
  }, [args.value])

  const feedback = renderFeedbackBadge(args.state)

  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16, maxWidth: 720 }}>
      <Input
        {...args}
        value={value}
        feedback={feedback}
        onChange={(event) => {
          setValue(event.target.value)
          args.onChange?.(event)
        }}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Valor atual:</strong> {value || 'Nenhum valor digitado'}
      </p>
    </div>
  )
}

function InputAnatomyPreview() {
  return (
    <div style={{ maxWidth: 480 }}>
      <Input
        label="E-mail"
        value="maria@exemplo.rs.gov.br"
        onChange={() => {}}
        helperText="Use o endereço institucional."
        feedback={<Badges variant="info" message="Não compartilhamos esse dado." />}
        leftIcon={faUser}
        placeholder="nome@dominio.rs.gov.br"
      />
    </div>
  )
}

function InputBasicsPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Texto simples">
        <Input
          label="Default sem ícone"
          value=""
          onChange={() => {}}
          placeholder="Placeholder"
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Com ícone">
        <Input
          label="Default com ícone"
          value=""
          onChange={() => {}}
          leftIcon={faMagnifyingGlass}
          placeholder="Pesquisar"
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Senha">
        <Input
          label="Senha"
          value="segredo123"
          onChange={() => {}}
          type="password"
          placeholder="Sua senha"
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Campo com calendário">
        <Input
          label="Data"
          value="10/04/2026"
          onChange={() => {}}
          leftIcon={faCalendarDays}
          placeholder="dd/mm/aaaa"
        />
      </StoryPreviewCard>
    </div>
  )
}

function InputStatesPreview() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Input
        label="Danger"
        value="Valor invalido"
        onChange={() => {}}
        state="danger"
        helperText="Texto auxiliar para prevenir erros."
        feedback={<Badges variant="error" message="O campo não pode ser vazio." />}
      />

      <Input
        label="Success"
        value="Valor válido"
        onChange={() => {}}
        state="success"
        helperText="Texto auxiliar para confirmar o preenchimento."
        feedback={<Badges variant="success" message="Valor validado com sucesso." />}
      />

      <Input
        label="Info"
        value="Detalhe informativo"
        onChange={() => {}}
        state="info"
        feedback={<Badges variant="info" message="Esta é uma mensagem de informação." />}
      />

      <Input
        label="Warning"
        value="Atenção"
        onChange={() => {}}
        state="warning"
        feedback={<Badges variant="warning" message="Esta é uma mensagem de aviso." />}
      />

      <Input
        label="Disabled"
        value="Campo desabilitado"
        onChange={() => {}}
        disabled
        leftIcon={faUser}
        helperText="Texto auxiliar para campo indisponível."
      />
    </div>
  )
}

function InputControlledPasswordPreview() {
  const [email, setEmail] = useState('maria@exemplo.rs.gov.br')
  const [password, setPassword] = useState('segredo123')

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={storyDocsStyles.cardGrid}>
        <StoryPreviewCard label="Controlado">
          <Input
            label="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            leftIcon={faUser}
            helperText="Exemplo de valor controlado pelo React."
          />
        </StoryPreviewCard>

        <StoryPreviewCard label="Senha com toggle">
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            helperText="Use ao menos 8 caracteres."
          />
        </StoryPreviewCard>
      </div>

      <p style={storyDocsStyles.statText}>
        <strong>Valores atuais:</strong> email={email} | senha={password}
      </p>
    </div>
  )
}

function InputCombinedPreview() {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 900 }}>
      <div style={storyDocsStyles.cardGrid}>
        <Input
          label="Busca"
          value=""
          onChange={() => {}}
          leftIcon={faMagnifyingGlass}
          placeholder="Pesquisar"
        />

        <Input
          label="Usuario"
          value="Maria da Silva"
          onChange={() => {}}
          leftIcon={faUser}
          helperText="Exemplo de texto auxiliar."
        />
      </div>

      <div style={storyDocsStyles.cardGrid}>
        <Input
          label="Senha"
          value="segredo123"
          onChange={() => {}}
          type="password"
        />

        <Input
          label="Campo com erro"
          value=""
          onChange={() => {}}
          state="danger"
          feedback={<Badges variant="error" message="Preencha este campo." />}
        />
      </div>
    </div>
  )
}

export const InputDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Input</h3>}
        description={
          <>
            O componente <code>Input</code> coleta texto com rótulo, orientação e
            feedback visual.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Anatomia e acessibilidade"
        description="label, helperText e feedback estruturam a comunicação do campo com quem preenche o formulário e com tecnologias assistivas. Quando state for danger, o input também recebe aria-invalid e o feedback passa a ser anunciado como alerta."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> nomeia o campo e deve descrever claramente o dado esperado.</li>
          <li><code>helperText</code> e <code>feedback</code> entram em <code>aria-describedby</code> quando presentes.</li>
          <li><code>feedback</code> pode ser qualquer no React, preferencialmente badges do design system.</li>
        </ul>

        <SandboxExample
          title="Estrutura principal"
          description="Um exemplo único com label, helperText, ícone e feedback para deixar explícita a anatomia recomendada do componente."
          code={anatomyExampleCode}
          notes={[
            'No estado danger, o feedback é anunciado como alert; nos demais estados, como status.',
            'O ícone é decorativo e não substitui o nome acessível do campo.',
          ]}
        >
          <InputAnatomyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Exemplos básicos"
        description="A base do componente é a mesma para entradas simples, campos com ícone e campos de senha. O toggle de senha aparece automaticamente quando type=password e showPasswordToggle não for desativado."
      >
        <SandboxExample
          title="Combinacoes mais comuns"
          description="Galeria com texto simples, ícone, senha e um campo com ícone de calendário para explorar variações de composição sem mudar a base do componente."
          code={basicExamplesCode}
          notes={[
            'leftIcon reforça contexto visual, mas continua sendo decorativo.',
            'O mesmo campo pode ser reutilizado em diferentes fluxos sem mudar a semântica do input nativo.',
          ]}
        >
          <InputBasicsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Estados e feedback"
        description="Use state para indicar o tom visual do campo e combine com feedback quando for necessário exibir orientação, confirmação ou erro. helperText funciona melhor para instruções persistentes; feedback costuma representar o retorno do preenchimento atual."
      >
        <SandboxExample
          title="Tons de validação"
          description="Panorama com os estados visuais mais recorrentes, incluindo disabled, para comparar borda, feedback e comunicação do campo."
          code={feedbackExamplesCode}
          notes={[
            'state e feedback são relacionados por convenção de uso, não por acoplamento automático no componente.',
            'disabled bloqueia edição e também remove a alternância de visibilidade da senha.',
          ]}
        >
          <InputStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Controle do valor e senha"
        description="O componente foi pensado para uso controlado, então o valor exibido deve vir do estado da aplicação e ser atualizado por onChange. Em campos de senha, o botão de alternância troca apenas a visualização do conteúdo; ele não modifica o valor nem executa validação por conta própria."
      >
        <SandboxExample
          title="Valor controlado e toggle"
          description="Dois exemplos lado a lado para reforçar o contrato controlado do input e o comportamento específico de senha."
          code={controlledPasswordCode}
          notes={[
            'Se o valor não puder mudar, prefira readOnly ou disabled em vez de manter onChange inoperante.',
            'showPasswordToggle só tem efeito quando type=password.',
          ]}
        >
          <InputControlledPasswordPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="O componente cobre bem a entrada de texto e o feedback visual, mas continua dependendo do consumidor para controle de estado, consistência entre state e mensagem e regras de validação do formulário."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>value</code> faz mais sentido no modo controlado junto com <code>onChange</code>.</li>
          <li><code>showPasswordToggle</code> só tem efeito quando <code>type=password</code>; em outros tipos, a prop é ignorada.</li>
          <li><code>state</code> controla apenas o estado visual da borda; para mensagem de orientação ou erro, combine com <code>feedback</code>.</li>
          <li><code>feedback</code> aceita qualquer no React e não cria relação automática com <code>state</code>; essa consistência deve ser definida por quem consome.</li>
          <li><code>leftIcon</code> é decorativo e não substitui o rótulo. Sempre use <code>label</code> ou outro nome acessível equivalente.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const InputInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo visível associado ao campo; e o principal nome acessível do input.',
      table: { category: 'Conteudo' },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de sugestão exibido dentro do campo antes do preenchimento.',
      table: { category: 'Conteudo' },
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar persistente associado ao input por aria-describedby.',
      table: { category: 'Conteudo' },
    },
    value: {
      control: 'text',
      description: 'Valor atual do campo quando ele está sendo controlado externamente.',
      table: { category: 'Conteudo' },
    },
    state: {
      control: { type: 'radio' },
      options: [undefined, 'danger', 'success', 'warning', 'info'],
      description: 'Define apenas o estado visual da borda; o preview gera um feedback sintético a partir desse valor.',
      table: { category: 'Estado visual' },
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
      description: 'Define o tipo do campo. Em password, o toggle de visibilidade pode ser exibido automaticamente.',
      table: { category: 'Composicao' },
    },
    leftIcon: {
      control: { type: 'select' },
      options: [undefined, 'faMagnifyingGlass', 'faCalendarDays', 'faUser'],
      mapping: {
        faMagnifyingGlass,
        faCalendarDays,
        faUser,
        undefined,
      },
      labels: {
        faMagnifyingGlass: 'Pesquisa',
        faCalendarDays: 'Calendario',
        faUser: 'Usuario',
      },
      description: 'Ícone decorativo exibido à esquerda do campo para reforçar o contexto visual.',
      table: { category: 'Composicao' },
    },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Só tem efeito quando type=password.',
      table: { category: 'Composicao' },
    },
    disabled: {
      control: 'boolean',
      description: 'Impede edição, desabilita o toggle de senha e aplica o estado visual correspondente.',
      table: { category: 'Estado visual' },
    },
    feedback: {
      control: false,
      description: 'Aceita um nó React para mensagens de erro, sucesso, aviso ou informação.',
      table: { category: 'Conteudo' },
    },
    onChange: {
      action: 'changed',
      description: 'Recebe o evento nativo sempre que o usuário altera o conteúdo do campo.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    label: 'Campo interativo',
    placeholder: 'Digite para testar',
    helperText: 'Use os Controls para configurar o input.',
    leftIcon: faMagnifyingGlass,
    state: undefined,
    type: 'text',
    showPasswordToggle: true,
    disabled: false,
    value: '',
  },
  render: (args) => <InputInteractivePreview {...args} />,
}

export const InputCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => <InputCombinedPreview />,
}