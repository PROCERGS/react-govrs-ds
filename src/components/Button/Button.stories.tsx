import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import './Button.scss'
import '../../foundations/styles/index.scss'

const meta: Meta<typeof Button> = {
  title: 'Widgets/Button',
  component: Button,
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj<typeof Button>

const darkPanelStyle = {
  padding: 16,
  background: '#04290f',
  borderRadius: 8,
}

const codeBlockStyle = {
  background: '#f7f7f7',
  padding: 12,
  borderRadius: 4,
  overflowX: 'auto' as const,
  margin: 0,
}

export const ButtonDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 960 }}>
      <h3 style={{ margin: 0 }}>Button</h3>
      <p style={{ color: '#444', margin: 0 }}>
        O componente <code>Button</code> representa ações acionáveis na interface. Use
        <code>variant</code> para definir a hierarquia visual, <code>size</code> para ajustar a
        altura e <code>loading</code>, <code>active</code>, <code>disabled</code>,
        <code>circle</code>, <code>fullWidth</code> e <code>darkMode</code> para controlar
        estados e variações de layout conforme o contexto de uso.
      </p>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Variantes</h4>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="tertiary">Terciário</Button>
        </div>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            margin: 0,
          }}
        >
          <code>{`<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="tertiary">Terciário</Button>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Tamanhos e estados</h4>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" size="small">Pequeno</Button>
          <Button variant="primary">Médio</Button>
          <Button variant="primary" size="large">Grande</Button>
          <Button variant="primary" loading>Carregando</Button>
          <Button variant="primary" disabled>Desabilitado</Button>
          <Button variant="primary" active>Ativo</Button>
        </div>
        <pre style={codeBlockStyle}>
          <code>{`<Button variant="primary" size="small">Pequeno</Button>
<Button variant="primary" loading>Carregando</Button>
<Button variant="primary" disabled>Desabilitado</Button>
<Button variant="primary" active>Ativo</Button>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Variações de layout</h4>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" circle aria-label="Adicionar">+</Button>
          <Button variant="secondary" circle aria-label="Fechar">×</Button>
          <Button variant="tertiary" circle aria-label="Remover">−</Button>
        </div>
        <div style={{ display: 'grid', gap: 12, maxWidth: 420 }}>
          <Button variant="primary" fullWidth>Botão em bloco</Button>
          <Button variant="secondary" fullWidth>Botão secundário em bloco</Button>
        </div>
        <pre style={codeBlockStyle}>
          <code>{`<Button variant="primary" circle aria-label="Adicionar">+</Button>

<Button variant="primary" fullWidth>
  Botão em bloco
</Button>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Dark mode</h4>
        <div style={{ ...darkPanelStyle, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" darkMode>Primário escuro</Button>
          <Button variant="secondary" darkMode>Secundário escuro</Button>
          <Button variant="tertiary" darkMode>Terciário escuro</Button>
        </div>
        <pre style={codeBlockStyle}>
          <code>{`<div style={{ background: '#04290f', padding: 16 }}>
  <Button variant="primary" darkMode>
    Primário escuro
  </Button>
</div>`}</code>
        </pre>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Limitações e dependências</h4>
        <ul style={{ color: '#444', margin: 0, paddingLeft: 20 }}>
          <li><code>circle</code> faz mais sentido com conteúdo curto; quando o botão for apenas ícone ou símbolo, forneça <code>aria-label</code>.</li>
          <li><code>darkMode</code> só troca os tokens do botão. O fundo escuro do container continua sendo responsabilidade de quem consome o componente.</li>
          <li><code>loading</code> desabilita a interação e oculta visualmente o texto para exibir o spinner; não use <code>loading</code> esperando clique simultâneo.</li>
          <li><code>active</code> é apenas um estado visual controlado externamente; o componente não alterna esse estado sozinho.</li>
          <li><code>fullWidth</code> depende da largura do container pai. Em um wrapper estreito, o botão ocupará apenas a largura disponível naquele contexto.</li>
        </ul>
        <pre style={codeBlockStyle}>
          <code>{`// Botão circular deve receber um nome acessível
<Button circle aria-label="Adicionar item">+</Button>

// Estado visual controlado externamente
<Button active={isCurrentStep}>Etapa atual</Button>`}</code>
        </pre>
      </section>
    </div>
  ),
}

export const ButtonInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: { control: 'text' },
    circle: { control: 'boolean', description: 'Deixa o botão circular; em uso icon-only, combine com aria-label.' },
    fullWidth: { control: 'boolean', description: 'Ocupa 100% da largura disponível no container pai.' },
    loading: { control: 'boolean', description: 'Mostra spinner e desabilita a interação do botão.' },
    active: { control: 'boolean', description: 'Aplica apenas o estado visual ativo; o controle desse estado é externo.' },
    darkMode: { control: 'boolean', description: 'Usa tokens de contraste para ser renderizado sobre fundo escuro.' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button de exemplo',
    circle: false,
    fullWidth: false,
    loading: false,
    active: false,
    darkMode: false,
    disabled: false,
  },
  render: ({ darkMode, fullWidth, ...args }) => (
    <div
      style={
        darkMode
          ? { ...darkPanelStyle, maxWidth: fullWidth ? 420 : undefined }
          : { padding: 16, maxWidth: fullWidth ? 420 : undefined }
      }
    >
      <Button {...args} darkMode={darkMode} fullWidth={fullWidth} />
    </div>
  ),
}

export const ButtonCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, display: 'grid', gap: 16, maxWidth: 720 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="primary">Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="tertiary">Terciário</Button>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="primary" size="small">Small</Button>
        <Button variant="primary">Medium</Button>
        <Button variant="primary" size="large">Large</Button>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" active>Active</Button>
        <Button variant="secondary" circle aria-label="Adicionar">+</Button>
      </div>

      <div style={{ ...darkPanelStyle, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="primary" darkMode>Primário</Button>
        <Button variant="secondary" darkMode>Secundário</Button>
        <Button variant="tertiary" darkMode>Terciário</Button>
      </div>
    </div>
  ),
}