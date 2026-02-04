import type { Meta, StoryObj } from '@storybook/react'
import { Badges } from './Badges'
import './Badges.scss'
import '../../foundations/styles/index.scss'

const meta: Meta<typeof Badges> = {
  title: 'Widgets/Badges',
  component: Badges,
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj<typeof Badges>

export const BadgesDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, maxWidth: 720 }}>
      <h3 style={{ marginTop: 0 }}>Badges</h3>

      <section style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Badges variant="success" message="Campo correto" />
          <Badges variant="error" message="Campo inválido" />
          <Badges variant="warning" message="Atenção" />
          <Badges variant="info" message="Informação" />
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <p style={{ color: '#444' }}>
          O componente <code>Badges</code> exibe rótulos compactos que
          sinalizam estados. Use a <code>variant</code> para escolher o tom
          (success, error, warning, info). As badges aceitam a prop
          <code>message</code> ou conteúdo via <code>children</code>.
        </p>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Atributos</h4>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>Variant</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Define o estilo/tonalidade da badge. As cores seguem os tokens
            usados nos Alerts.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <Badges variant="success" message="Success" />
            <Badges variant="error" message="Error" />
            <Badges variant="warning" message="Warning" />
            <Badges variant="info" message="Info" />
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
              marginTop: 8,
            }}
          >
            <code>{`<Badges variant="success" message="Success" />`}</code>
          </pre>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>Message / Children</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Passe a mensagem via prop <code>message</code> ou diretamente como
            children para suportar marcação rica.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <Badges variant="info" message="Mensagem via prop" />
            <Badges variant="info">
              <strong>Via children</strong>
            </Badges>
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
              marginTop: 8,
            }}
          >
            <code>{`// via prop
<Badges variant="info" message="Mensagem via prop" />

// via children
<Badges variant="info"><strong>Via children</strong></Badges>`}</code>
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Comportamentos importantes</h4>
        <p style={{ color: '#444' }}>
          - Badges são estáticas e não são dismissible. Use Alerts quando
          precisar de mensagens que o usuário possa fechar.
        </p>
      </section>
    </div>
  ),
}

export const BadgesInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'warning', 'error', 'info'],
    },
    message: { control: 'text' },
  },
  parameters: {
    controls: { exclude: ['children', 'outline'] },
  },
  args: {
    variant: 'info',
    message: 'Exemplo de badge',
  },
  render: ({ variant, message }) => (
    <div style={{ padding: 16 }}>
      <Badges variant={variant} message={message} />
    </div>
  ),
}

export const BadgesCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
      <Badges variant="success" message="Campo correto" />
      <Badges variant="error" message="Campo inválido" />
      <Badges variant="warning" message="Atenção" />
      <Badges variant="info" message="Informação" />
    </div>
  ),
}
