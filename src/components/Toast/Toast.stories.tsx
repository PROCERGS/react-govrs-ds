import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button/Button'
import { Toast } from './Toast'
import './Toast.scss'
import '../../foundations/styles/index.scss'

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

function ToastPreview(args: Toast.Props) {
  const [toastKey, setToastKey] = useState(0)
  const [closedCount, setClosedCount] = useState(0)

  return (
    <div style={{ minHeight: '70vh', padding: 24 }}>
      <p>
        O toast aparece fixo na posição definida. Duração zero mantém o toast
        aberto até o fechamento manual. Use o botão para reexibir.
      </p>
      <Button
        variant="secondary"
        size="small"
        onClick={() => setToastKey((current) => current + 1)}
      >
        Exibir novamente ({closedCount} fechamentos)
      </Button>
      <Toast
        key={toastKey}
        {...args}
        onClose={() => {
          args.onClose?.()
          setClosedCount((current) => current + 1)
        }}
      />
    </div>
  )
}

function CustomIconPreview() {
  const [key, setKey] = useState(0)

  return (
    <div style={{ minHeight: '70vh', padding: 24 }}>
      <Button
        variant="secondary"
        size="small"
        onClick={() => setKey((current) => current + 1)}
      >
        Exibir toast com ícone customizado
      </Button>
      <Toast
        key={key}
        variant="info"
        message="Notificação especial!"
        duration={0}
        dismissible
        position="bottom-center"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="10" fill="#f59e0b" />
            <text x="12" y="16" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
              !
            </text>
          </svg>
        }
      />
    </div>
  )
}

export const Interativo: Story = {
  argTypes: {
    variant: {
      control: 'radio',
      options: ['success', 'warning', 'info', 'error'],
      description: 'Define o tom visual e o contexto semântico do toast.',
      table: { category: 'Estado visual' },
    },
    position: {
      control: 'radio',
      options: [
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'top-center',
        'top-left',
        'top-right',
      ],
      description: 'Posição do toast na tela.',
      table: { category: 'Estado visual' },
    },
    message: {
      control: 'text',
      description: 'Mensagem exibida dentro do alerta.',
      table: { category: 'Conteúdo' },
    },
    duration: {
      control: { type: 'number', min: 0, step: 1000 },
      description: 'Tempo em milissegundos até fechar; zero desativa o fechamento automático.',
      table: { category: 'Comportamento' },
    },
    dismissible: {
      control: 'boolean',
      description: 'Exibe um botão para fechar o toast manualmente.',
      table: { category: 'Comportamento' },
    },
    icon: {
      control: 'boolean',
      description: 'Exibe o ícone do variant. Passe `false` para ocultar.',
      table: { category: 'Estado visual' },
    },
    ariaRole: {
      control: 'radio',
      options: ['status', 'alert'],
      description: 'Role ARIA explícito para o container do toast.',
      table: { category: 'Acessibilidade' },
    },
    onClose: {
      action: 'closed',
      description: 'Disparado quando o toast é fechado manualmente ou pelo tempo limite.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    variant: 'info',
    message: 'Sua sessão foi encerrada.',
    duration: 5000,
    dismissible: true,
    position: 'bottom-center',
    icon: true,
    ariaRole: undefined,
  },
  render: (args) => <ToastPreview {...args} />,
}

export const Posicoes: Story = {
  render: () => (
    <div style={{ minHeight: '70vh', padding: 24 }}>
      <p>Exemplo com toasts em todas as 6 posições disponíveis.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
        {(
          [
            'bottom-center',
            'bottom-left',
            'bottom-right',
            'top-center',
            'top-left',
            'top-right',
          ] as Toast.Position[]
        ).map((pos) => (
          <div key={pos} style={{ minWidth: 140 }}>
            <strong style={{ display: 'block', marginBottom: 8, fontSize: 13 }}>{pos}</strong>
            <Toast
              variant="info"
              message={`Toast em ${pos}`}
              duration={0}
              dismissible
              position={pos}
            />
          </div>
        ))}
      </div>
    </div>
  ),
}

export const SemIcone: Story = {
  args: {
    variant: 'success',
    message: 'Alterações salvas com sucesso.',
    duration: 5000,
    dismissible: true,
    position: 'bottom-right',
    icon: false,
  },
  render: (args) => <ToastPreview {...args} />,
}

export const ComIconeCustomizado: Story = {
  render: () => <CustomIconPreview />,
}

export const SemFechamentoAutomatico: Story = {
  args: {
    variant: 'warning',
    message: 'Atenção: sua sessão expira em 5 minutos. Salve seu trabalho.',
    duration: 0,
    dismissible: true,
    position: 'top-right',
    icon: true,
  },
  render: (args) => <ToastPreview {...args} />,
}
