import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faCalendarDays,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { Badges } from '../Badges/Badges'
import { Input } from './Input'
import './Input.scss'
import '../../foundations/styles/index.scss'

const meta: Meta<typeof Input> = {
  title: 'Widgets/Input',
  component: Input,
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj<typeof Input>

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

function InputInteractivePreview(args: Input.Props) {
  const [value, setValue] = useState(typeof args.value === 'string' ? args.value : '')

  useEffect(() => {
    setValue(typeof args.value === 'string' ? args.value : '')
  }, [args.value])

  return (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <Input
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
          args.onChange?.(event)
        }}
      />
      <div style={{ marginTop: 8, fontSize: 13, color: '#444' }}>
        Valor atual: <strong>{value || '—'}</strong>
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
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 960 }}>
      <h3 style={{ margin: 0 }}>Input</h3>
      <p style={{ color: '#444', margin: 0 }}>
        O <code>Input</code> coleta texto em formulários com rótulo, texto auxiliar e
        estados visuais para orientar o preenchimento. Ele suporta ícone à esquerda, campo de senha
        com alternância de visibilidade e feedback customizado.
      </p>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Anatomia e acessibilidade</h4>
        <p style={sectionTextStyle}>
          O <code>label</code> é sempre associado ao campo por <code>htmlFor</code>, enquanto
          <code> helperText</code> e <code>feedback</code> entram no <code>aria-describedby </code>
          quando presentes. No estado <code>danger</code>, o input também recebe 
          <code>aria-invalid</code> e o feedback passa a ser anunciado como alerta; nos demais
          estados, o feedback continua sendo comunicado como atualização de status.
        </p>
        <pre style={codeBlockStyle}>
          <code>{`<Input
  label="E-mail"
  helperText="Use o endereço institucional."
  feedback={<Badges variant="info" message="Nós não compartilhamos esse dado." />}
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Props principais</h4>
        <ul style={{ color: '#444', margin: 0, paddingLeft: 20 }}>
          <li><code>label</code> identifica o campo e deve descrever claramente o dado esperado.</li>
          <li><code>helperText</code> mostra orientação persistente abaixo do input, útil para formato, regra ou contexto.</li>
          <li><code>leftIcon</code> adiciona um ícone à esquerda.</li>
          <li><code>type="password"</code> habilita o fluxo de senha; o toggle pode ser desligado com <code>showPasswordToggle={false}</code>.</li>
          <li><code>state</code> altera apenas a aparência da borda e o estado de acessibilidade quando for <code>danger</code>.</li>
          <li><code>feedback</code> aceita qualquer nó React para mensagens de erro, sucesso, aviso ou informação, sendo padrão e preferencialmente as badges do design system.</li>
          <li><code>disabled</code> bloqueia edição e também remove a alternância de visibilidade da senha.</li>
        </ul>
        <pre style={codeBlockStyle}>
          <code>{`<Input
  label="CPF"
  helperText="Digite apenas números."
  value={document}
  onChange={(event) => setDocument(event.target.value)}
  state="warning"
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Exemplos básicos</h4>
        <p style={sectionTextStyle}>
          A base do componente é a mesma para entradas simples, campos com ícone e campos de senha.
          O ícone à esquerda é decorativo e não altera o nome acessível do campo, enquanto o toggle
          de senha aparece automaticamente quando <code>type="password"</code> e
          <code> showPasswordToggle</code> não for desativado.
        </p>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <Input
            label="Default sem ícone"
            id="doc-input-default"
            value=""
            onChange={() => {}}
            placeholder="Placeholder"
          />
          <Input
            label="Default com ícone"
            id="doc-input-icon"
            value=""
            onChange={() => {}}
            leftIcon={faUser}
            placeholder="Placeholder"
          />
          <Input
            label="Password"
            id="doc-input-password"
            value="senha123"
            onChange={() => {}}
            type="password"
            placeholder="Sua senha"
          />
          <Input
            label="Password com ícone"
            id="doc-input-password-icon"
            value="senha123"
            onChange={() => {}}
            type="password"
            leftIcon={faCalendarDays}
            placeholder="Sua senha"
          />
        </div>
        <pre style={codeBlockStyle}>
          <code>{`const [value, setValue] = useState('')

<Input
  label="Usuário"
  value={value}
  onChange={(event) => setValue(event.target.value)}
  leftIcon={faUser}
  placeholder="Digite seu nome"
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Estados e feedback</h4>
        <p style={sectionTextStyle}>
          Use <code>state</code> para indicar o tom visual do campo e combine com
          <code> feedback</code> quando for necessário exibir orientação, confirmação ou erro.<br />
          <code> helperText</code> funciona melhor para instruções persistentes, enquanto
          <code> feedback</code> costuma representar o retorno do preenchimento atual.
        </p>
        <div style={{ display: 'grid', gap: 12 }}>
          <Input
            label="Danger"
            id="doc-input-danger"
            value="Valor inválido"
            onChange={() => {}}
            state="danger"
            helperText="Texto auxiliar. Função de prevenir erros."
            feedback={<Badges variant="error" message="O campo não pode ser vazio." />}
          />
          <Input
            label="Success"
            id="doc-input-success"
            value="Valor válido"
            onChange={() => {}}
            state="success"
            helperText="Texto auxiliar. Função de prevenir erros."
            feedback={<Badges variant="success" message="Valor validado com sucesso." />}
          />
          <Input
            label="Info"
            id="doc-input-info"
            value="Detalhe informativo"
            onChange={() => {}}
            state="info"
            feedback={<Badges variant="info" message="Esta é uma mensagem de informação." />}
          />
          <Input
            label="Warning"
            id="doc-input-warning"
            value="Atenção"
            onChange={() => {}}
            state="warning"
            feedback={<Badges variant="warning" message="Esta é uma mensagem de aviso." />}
          />
          <Input
            label="Disabled"
            id="doc-input-disabled"
            value="Campo desabilitado"
            onChange={() => {}}
            disabled
            leftIcon={faUser}
            helperText="Texto auxiliar. Função de prevenir erros."
          />
        </div>
        <pre style={codeBlockStyle}>
          <code>{`<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  feedback={<Badges variant="error" message="O campo não pode ser vazio." />}
  state="danger"
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Controle do valor e senha</h4>
        <p style={sectionTextStyle}>
          O componente foi pensado para uso controlado, então o valor exibido deve vir do estado da
          aplicação e ser atualizado por <code>onChange</code>. Em campos de senha, o botão de
          alternância troca apenas a visualização do conteúdo; ele não modifica o valor nem executa
          validação por conta própria.
        </p>
        <pre style={codeBlockStyle}>
          <code>{`const [password, setPassword] = useState('')

<Input
  label="Senha"
  type="password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
  helperText="Use ao menos 8 caracteres."
/>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Limitações e dependências</h4>
        <ul style={{ color: '#444', margin: 0, paddingLeft: 20 }}>
          <li><code>value</code> faz mais sentido no modo controlado junto com <code>onChange</code>. Se o valor não puder mudar, use <code>readOnly</code> ou <code>disabled</code>.</li>
          <li><code>showPasswordToggle</code> só tem efeito quando <code>type="password"</code> e serve para mostrar ou ocultar a senha. Em outros tipos, a prop é ignorada.</li>
          <li><code>state</code> controla apenas o estado visual da borda. Para mensagem de orientação ou erro, combine com <code>feedback</code>.</li>
          <li><code>feedback</code> aceita qualquer nó React(preferencialmente badges do design system) e não cria relação automática com <code>state</code>; essa consistência deve ser definida por quem consome.</li>
          <li><code>leftIcon</code> é um ícone decorativo a esquerda e não substitui o rótulo. Sempre use <code>label</code> ou outro nome acessível equivalente.</li>
        </ul>
        <pre style={codeBlockStyle}>
          <code>{`// Toggle só funciona em type="password"
<Input
  label="Senha"
  type="password"
  showPasswordToggle
  value={password}
  onChange={(event) => setPassword(event.target.value)}
/>

// state e feedback são independentes
<Input
  label="E-mail"
  state="danger"
  feedback={<Badges variant="error" message="Formato inválido." />}
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>`}</code>
        </pre>
      </section>
    </div>
  ),
}

export const InputInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    label: { control: 'text', description: 'Rótulo visível associado ao campo; é o principal nome acessível do input.' },
    placeholder: { control: 'text', description: 'Texto de sugestão exibido dentro do campo antes do preenchimento.' },
    helperText: { control: 'text', description: 'Texto auxiliar persistente associado ao input por aria-describedby.' },
    state: {
      control: { type: 'radio' },
      options: [undefined, 'danger', 'success', 'warning', 'info'],
      description: 'Define apenas o estado visual da borda; combine com feedback quando quiser mensagem auxiliar ou de erro.',
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
      description: 'Define o tipo do campo. Em password, o toggle de visibilidade pode ser exibido automaticamente.',
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
        faCalendarDays: 'Calendário',
        faUser: 'Usuário',
      },
      description: 'Ícone decorativo exibido à esquerda do campo para reforçar o contexto visual.',
    },
    disabled: { control: 'boolean', description: 'Impede edição, desabilita o toggle de senha e aplica o estado visual correspondente.' },
    showPasswordToggle: {
      control: 'boolean',
      description: 'Só tem efeito quando type="password".',
    },
    value: { control: 'text', description: 'Valor atual do campo quando ele está sendo controlado externamente.' },
    feedback: { control: false, description: 'Aceita um nó React para mensagens de erro, sucesso, aviso ou informação.' },
    onChange: { action: 'changed', description: 'Recebe o evento nativo sempre que o usuário altera o conteúdo do campo.' },
  },
  args: {
    label: 'Campo interativo',
    placeholder: 'Digite para testar',
    helperText: 'Use os controles para configurar o input.',
    leftIcon: faMagnifyingGlass,
    state: undefined,
    type: 'text',
    showPasswordToggle: false,
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
  render: () => (
    <div style={{ padding: 16, display: 'grid', gap: 16, maxWidth: 900 }}>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <Input
          label="Busca"
          id="example-input-search"
          value=""
          onChange={() => {}}
          leftIcon={faMagnifyingGlass}
          placeholder="Pesquisar"
        />
        <Input
          label="Usuário"
          id="example-input-user"
          value="Maria da Silva"
          onChange={() => {}}
          leftIcon={faUser}
          helperText="Exemplo de texto auxiliar."
        />
      </div>

      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <Input
          label="Senha"
          id="example-input-password"
          value="segredo123"
          onChange={() => {}}
          type="password"
        />
        <Input
          label="Campo com erro"
          id="example-input-error"
          value=""
          onChange={() => {}}
          state="danger"
          feedback={<Badges variant="error" message="Preencha este campo." />}
        />
      </div>
    </div>
  ),
}