import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from './Button'
import './Button.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['primary', 'secondary', 'tertiary']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa expor uma ação clicável com hierarquia visual clara.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar variant, size e estados. O story 'Exemplos Combinados' resume os cenários mais recorrentes em uma visão única.",
  },
  {
    title: 'Comportamento',
    text: 'O componente repassa props nativas do button HTML. type padrão é button, loading desabilita clique e submit, e darkMode troca apenas os tokens do próprio botão.',
  },
] satisfies Array<{ title: string; text: string }>

const variantsExampleCode = `<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="tertiary">Terciário</Button>`

const statesExampleCode = `<Button variant="primary" size="small">Pequeno</Button>
<Button variant="primary">Médio</Button>
<Button variant="primary" size="large">Grande</Button>
<Button variant="primary" loading>Carregando</Button>
<Button variant="primary" disabled>Desabilitado</Button>
<Button variant="primary" active>Ativo</Button>`

const layoutExampleCode = `
          <Button variant="primary" circle aria-label="Adicionar item">+</Button>
          <Button variant="secondary" circle aria-label="Fechar">x</Button>
          <Button variant="tertiary" circle aria-label="Remover">-</Button>

          <Button variant="primary" fullWidth>Ação em bloco</Button>
          <Button variant="secondary" fullWidth>Ação secundária em bloco</Button>`

const nativeBehaviorExampleCode = `function MeuFormulario() {
  return (
    <form onSubmit={handleSubmit}>
      <Button onClick={handleClick}>Ação comum</Button>

      <Button type="submit" name="acao" value="salvar">
        Salvar formulário
      </Button>
    </form>
  )
}`

const darkModeExampleCode = `<div style={{ background: '#04290f', padding: 16 }}>
  <Button variant="primary" darkMode>Primário escuro</Button>
  <Button variant="secondary" darkMode>Secundário escuro</Button>
  <Button variant="tertiary" darkMode>Terciário escuro</Button>
</div>`

const combinedExampleCode = `<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="tertiary">Terciário</Button>

<Button variant="primary" loading>Carregando</Button>
<Button variant="primary" disabled>Desabilitado</Button>
<Button variant="primary" active>Ativo</Button>

<Button variant="secondary" circle aria-label="Adicionar item">+</Button>
<Button variant="primary" darkMode>Primário escuro</Button>`

const darkPanelStyle: CSSProperties = {
  display: 'flex',
  gap: 12,
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 18,
  borderRadius: 20,
  background: 'linear-gradient(135deg, #04290f 0%, #0b431a 100%)',
}

const meta = {
  title: 'Ações/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

function ButtonVariantsPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="primary">Primário</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="tertiary">Terciário</Button>
    </div>
  )
}

function ButtonStatesPreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="Small">
        <Button variant="primary" size="small">Pequeno</Button>
      </StoryPreviewCard>

      <StoryPreviewCard label="Medium">
        <Button variant="primary">Médio</Button>
      </StoryPreviewCard>

      <StoryPreviewCard label="Large">
        <Button variant="primary" size="large">Grande</Button>
      </StoryPreviewCard>

      <StoryPreviewCard label="Loading">
        <Button variant="primary" loading>Carregando</Button>
      </StoryPreviewCard>

      <StoryPreviewCard label="Disabled">
        <Button variant="primary" disabled>Desabilitado</Button>
      </StoryPreviewCard>

      <StoryPreviewCard label="Active">
        <Button variant="primary" active>Ativo</Button>
      </StoryPreviewCard>
    </div>
  )
}

function ButtonLayoutPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Circular">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" circle aria-label="Adicionar item">+</Button>
          <Button variant="secondary" circle aria-label="Fechar">x</Button>
          <Button variant="tertiary" circle aria-label="Remover">-</Button>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Full width">
        <div style={{ display: 'grid', gap: 12, width: '100%', maxWidth: 340 }}>
          <Button variant="primary" fullWidth>Ação em bloco</Button>
          <Button variant="secondary" fullWidth>Ação secundária em bloco</Button>
        </div>
      </StoryPreviewCard>
    </div>
  )
}

function ButtonDarkModePreview() {
  return (
    <div style={darkPanelStyle}>
      <Button variant="primary" darkMode>Primário escuro</Button>
      <Button variant="secondary" darkMode>Secundário escuro</Button>
      <Button variant="tertiary" darkMode>Terciário escuro</Button>
    </div>
  )
}

function ButtonNativeBehaviorPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Evento nativo">
        <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
          <Button variant="primary" onClick={() => undefined}>onClick padrão</Button>
          <p style={storyDocsStyles.statText}>
            Props como <code>onClick</code>, <code>name</code>, <code>value</code>,{' '}
            <code>form</code>, <code>aria-*</code> e <code>data-*</code> seguem o
            contrato nativo do elemento <code>button</code>.
          </p>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Submit de formulário">
        <div style={{ display: 'grid', gap: 12, width: '100%', maxWidth: 320 }}>
          <form
            onSubmit={(event) => {
              event.preventDefault()
            }}
            style={{ display: 'grid', gap: 12 }}
          >
            <Button variant="secondary">type padrão = button</Button>
            <Button type="submit">type submit</Button>
          </form>

          <p style={storyDocsStyles.statText}>
            O componente não submete formulário sozinho por padrão: para isso, use{' '}
            <code>type=&quot;submit&quot;</code> no botão e <code>onSubmit</code> no{' '}
            <code>form</code>.
          </p>
        </div>
      </StoryPreviewCard>
    </div>
  )
}

function ButtonCombinedPreview() {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 760 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="primary">Primário</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="tertiary">Terciário</Button>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size="small">Pequeno</Button>
        <Button variant="primary">Médio</Button>
        <Button variant="primary" size="large">Grande</Button>
        <Button variant="primary" loading>Carregando</Button>
        <Button variant="primary" disabled>Desabilitado</Button>
        <Button variant="primary" active>Ativo</Button>
        <Button variant="secondary" circle aria-label="Adicionar item">+</Button>
      </div>

      <ButtonDarkModePreview />
    </div>
  )
}

function ButtonInteractivePreview(args: Button.Props) {
  const wrapperStyle: CSSProperties = args.darkMode
    ? {
        ...darkPanelStyle,
        width: args.fullWidth ? '100%' : undefined,
        maxWidth: args.fullWidth ? 420 : undefined,
      }
    : {
        ...storyDocsStyles.previewStage,
        padding: 16,
        width: args.fullWidth ? '100%' : undefined,
        maxWidth: args.fullWidth ? 420 : undefined,
      }

  return (
    <div style={wrapperStyle}>
      <Button {...args} />
    </div>
  )
}

export const ButtonDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Button</h3>}
        description={
          <>
            O componente <code>Button</code> representa ações acionáveis com níveis
            diferentes de destaque visual.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Hierarquia visual"
        description="Escolha a variante pelo papel da ação na tela: primary para principal, secondary para ações de apoio ainda relevantes e tertiary para ações mais discretas."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>variant</code> define a prioridade visual entre primary, secondary e tertiary.</li>
          <li><code>children</code> permite a criação de estruturas mais complexas dentro do botão.</li>
          <li>O mesmo contrato pode ser combinado com size, fullWidth, circle e darkMode sem trocar o papel semântico do botão.</li>
        </ul>

        <SandboxExample
          title="Variantes básicas"
          description="Comparativo direto entre os três níveis de destaque para ajudar a escolher a hierarquia correta antes de ajustar o restante das props."
          code={variantsExampleCode}
          notes={[
            'A variant deve refletir a prioridade da ação no fluxo, não apenas preferência estética.',
            'Se várias ações estiverem disputando destaque, o problema tende a estar na hierarquia da tela, não no botão.',
          ]}
        >
          <ButtonVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Tamanhos e estados"
        description="size ajusta a densidade visual, enquanto loading, disabled e active alteram o comportamento percebido. loading desabilita a interação e active continua sendo um estado visual controlado externamente. Quando loading estiver ativo, o texto tende a deixar de aparecer visualmente e o indicador de carregamento assume esse espaço."
      >
        <SandboxExample
          title="Escala e feedback"
          description="Snapshot com tamanhos e estados mais recorrentes para verificar densidade, contraste e feedback visual lado a lado."
          code={statesExampleCode}
          notes={[
            'loading substitui a disponibilidade de clique; não use esperando interação simultânea.',
            'Quando loading está ativo, o conteúdo textual tende a ficar oculto visualmente e o ícone de carregamento vira o feedback principal do botão.',
            'active não alterna sozinho: o consumidor define quando esse destaque faz sentido.',
          ]}
        >
          <ButtonStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Layout e composição"
        description="circle e fullWidth mudam a forma de encaixe do botão na interface. circle funciona melhor com conteúdo curto ou icon-only, enquanto fullWidth depende diretamente da largura disponível no container pai."
      >
        <SandboxExample
          title="Forma e ocupação"
          description="Exemplos lado a lado para decidir quando usar um botão circular e quando faz mais sentido ocupar toda a largura disponível."
          code={layoutExampleCode}
          notes={[
            'Se o botão circular não tiver texto explícito, forneça um nome acessível por aria-label.',
            'fullWidth ocupa apenas a largura que o container disponibiliza; ele não ignora limites do layout pai.',
          ]}
        >
          <ButtonLayoutPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Eventos nativos e formulário"
        description="O componente herda o contrato nativo de um button HTML, então aceita eventos e atributos como onClick, name, value, form, aria-* e data-*. A diferença principal é que o type padrão aqui é button, não submit."
      >
        <SandboxExample
          title="Clique comum e submit explícito"
          description="Exemplo resumido para deixar claro quando o botão se comporta como ação comum e quando ele realmente participa da submissão de um formulário."
          code={nativeBehaviorExampleCode}
          notes={[
            'onClick funciona como em um button HTML comum, porque as props nativas são repassadas ao elemento real.',
            'Para submissão de formulário, use type="submit" no Button e onSubmit no form.',
            'Se loading ou disabled estiverem ativos, o botão fica desabilitado e deixa de clicar ou submeter.',
          ]}
        >
          <ButtonNativeBehaviorPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Dark mode"
        description="darkMode troca os tokens do próprio componente para uso sobre superfícies escuras, mas o fundo do container continua sendo responsabilidade de quem consome o design system."
      >
        <SandboxExample
          title="Contraste sobre fundo escuro"
          description="Exemplo direto do mesmo conjunto de variantes renderizado em uma superfície escura controlada pela própria story."
          code={darkModeExampleCode}
          notes={[
            'darkMode não aplica tema global; ele apenas escolhe a variação de contraste do botão.',
            'Vale validar o contraste do container real da interface quando o botão for usado em produto.',
          ]}
        >
          <ButtonDarkModePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e dependências"
        description="O componente cobre bem a apresentação da ação, mas continua dependendo do contexto de uso para acessibilidade final, largura disponível e controle de estado."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>circle</code> faz mais sentido com conteúdo curto; em uso icon-only, forneça <code>aria-label</code>.</li>
          <li><code>darkMode</code> não desenha a superfície escura ao redor; o container continua sob responsabilidade de quem consome.</li>
          <li><code>loading</code> torna o botão indisponível enquanto o feedback visual de carregamento estiver ativo.</li>
          <li>O tipo padrão é <code>button</code>; para submissão de formulário, defina <code>type=&quot;submit&quot;</code> explicitamente.</li>
          <li><code>active</code> é apenas visual e deve refletir estado externo do fluxo, aba ou seleção atual.</li>
          <li><code>fullWidth</code> depende do container pai; em um wrapper estreito, o botão continuará respeitando esse limite.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const ButtonInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Define a hierarquia visual da ação.',
      table: { category: 'Estado visual' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Ajusta a altura e a densidade visual do botão.',
      table: { category: 'Estado visual' },
    },
    children: {
      control: 'text',
      description: 'Rótulo visível exibido dentro do botão.',
      table: { category: 'Conteúdo' },
    },
    circle: {
      control: 'boolean',
      description: 'Aplica o formato circular; em uso icon-only, combine com aria-label.',
      table: { category: 'Layout' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ocupa 100% da largura disponível no container pai.',
      table: { category: 'Layout' },
    },
    loading: {
      control: 'boolean',
      description: 'Mostra o estado de carregamento e desabilita a interação.',
      table: { category: 'Estado' },
    },
    active: {
      control: 'boolean',
      description: 'Aplica apenas o estado visual ativo; o controle desse estado é externo.',
      table: { category: 'Estado' },
    },
    darkMode: {
      control: 'boolean',
      description: 'Usa os tokens de contraste do componente para superfícies escuras.',
      table: { category: 'Contexto' },
    },
    disabled: {
      control: 'boolean',
      description: 'Bloqueia a interação e aplica o estado visual desabilitado.',
      table: { category: 'Estado' },
    },
    onClick: {
      action: 'clicked',
      description: 'Recebe o clique do botão quando ele estiver habilitado.',
      table: { category: 'Eventos' },
    },
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
  render: (args) => <ButtonInteractivePreview {...args} />,
}

export const ButtonCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => <ButtonCombinedPreview />,
}