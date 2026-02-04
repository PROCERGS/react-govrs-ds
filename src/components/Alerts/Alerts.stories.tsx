import type { Meta, StoryObj } from '@storybook/react'
import { Alerts } from './Alerts'
import './Alerts.scss'
import '../../foundations/styles/index.scss'

const meta: Meta<typeof Alerts> = {
  title: 'Widgets/Alerts',
  component: Alerts,
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj<typeof Alerts>

export const AlertsDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, maxWidth: 1045 }}>
      <h3 style={{ marginTop: 0 }}>Alerts</h3>

      <section style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Alerts variant="success" message="Sucesso. Operação concluída com êxito." />
          <Alerts variant="warning" dismissible>
            Atenção. Verifique os dados inseridos.
          </Alerts>
          <Alerts variant="info" message="Informação: este é um alerta informativo." />
          <Alerts variant="error">Erro ao processar. Tente novamente.</Alerts>
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <p style={{ color: '#444' }}>
          O componente <code>Alerts</code> apresenta mensagens de feedback em
          diferentes níveis (sucesso, aviso, informação e erro). Use a prop <code>variant</code>
          para controlar o estilo. A mensagem pode ser passada via a prop <code>message</code>
          ou diretamente como conteúdo (<code>children</code>). O botão de fechar é controlado
          pela prop <code>dismissible</code>.
        </p>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Atributos</h4>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>Variant</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Variant define o tom visual e semântico do alerta — por exemplo, <code>success</code>
            para confirmações, <code>warning</code> para avisos, <code>info</code> para informações e
            <code>error</code> para mensagens de falha. Use a variant apropriada conforme a natureza da mensagem.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
            <Alerts variant="success" message="Exemplo success" />
            <Alerts variant="warning" message="Exemplo warning" />
            <Alerts variant="info" message="Exemplo info" />
            <Alerts variant="error" message="Exemplo error" />
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`//Exemplos: variant
          <Alerts variant="success" message="Exemplo success" />
          <Alerts variant="warning" message="Exemplo warning" />
          <Alerts variant="info" message="Exemplo info" />
          <Alerts variant="error" message="Exemplo error" />`}</code>
          </pre>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>Dismissible</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Dismissible habilita um botão de fechar no canto direito do alerta. Quando presente,
            o usuário pode fechar o alerta; o componente oculta o alerta localmente e chama
            <code>onClose</code> se você fornecer um handler.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
            <Alerts variant="warning" dismissible>
              Este alerta pode ser fechado
            </Alerts>
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`// Exemplo: dismissible
<Alerts variant="warning" dismissible>
    Este alerta pode ser fechado
</Alerts>`}</code>
          </pre>
        </div>

        <div style={{ marginBottom: 10 }}>
          <h5 style={{ margin: '6px 0' }}>Message</h5>
          <p style={{ color: '#444', marginTop: 6 }}>
            Message é a prop usada para passar o texto do alerta de forma simples (string ou node).
            Alternativamente, você pode passar conteúdo mais rico via <code>children</code> (ver seção 4.1).
            Prefira <code>message</code> quando quiser apenas exibir texto simples.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
            <Alerts variant="info" message="Mensagem passada via prop message" />
          </div>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`// Exemplo: message prop
<Alerts variant="info" message="Mensagem passada via prop message" />`}</code>
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: 12 }}>
        <h4 style={{ margin: '6px 0' }}>Comportamentos importantes</h4>
        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - Quando <code>dismissible</code> for true, o botão de fechar aparece e o alerta é ocultado
            localmente ao ser fechado.
          </p>
        </div>
        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - Se, quando dismissable for true, você passar <code>onClose</code>, ele será chamado após
            o fechamento do Alert.
          </p>
        </div>
        <div style={{ marginTop: 8 }}>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`// Exemplo: onClose handler
<Alerts variant="warning" dismissible onClose={() => console.log('Alert fechado')}>
  Mensagem que pode ser fechada
</Alerts>`}</code>
          </pre>
        </div>

        <div style={{ marginTop: 8 }}>
          <p style={{ color: '#444' }}>
            - <strong>Children</strong>: A mensagem pode ser passada como <code>children</code> (conteúdo dentro da tag)
            em vez de usar a prop <code>message</code>. Use esta abordagem quando precisar inserir marcação rica
            (ex.: <code>&lt;strong&gt;</code>, links).
          </p>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              overflowX: 'auto',
            }}
          >
            <code>{`// Exemplo: children
<Alerts variant="warning" dismissible>
  <strong>Atenção:</strong> verifique os dados preenchidos.
</Alerts>`}</code>
          </pre>
        </div>
      </section>
    </div>
  ),
}

export const AlertsInterativo: Story = {
  name: 'Interativo',
  parameters: {
    controls: {
      exclude: ['children', 'onClose'],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'warning', 'error', 'info'],
    },
    dismissible: { control: 'boolean' },
    message: { control: 'text' },
  },
  args: {
    variant: 'success',
    dismissible: false,
    message: 'Mensagem de exemplo exibida via prop message',
  },
  render: ({ variant, dismissible, message }) => (
    <div style={{ padding: 16 }}>
      <Alerts variant={variant} dismissible={dismissible} message={message}>
        Conteúdo via children (apenas fallback)
      </Alerts>
    </div>
  ),
}

export const AlertsCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alerts variant="success" message="Sucesso com ação visível" dismissible />
      <Alerts variant="warning">Aviso exibido via children</Alerts>
      <Alerts
        variant="error"
        dismissible
        message={
          <span>
            <strong>Erro:</strong> detalhe do erro aqui.
          </span>
        }
      />
      <Alerts variant="info" message="Informação importante exibida aqui." dismissible />
    </div>
  ),
}
