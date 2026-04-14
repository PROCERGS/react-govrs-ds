import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Loader } from './Loader'
import './Loader.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['default', 'percentage']

const percentagePreviewColors = {
  blue: '#2563EB',
  orange: '#EA580C',
  magenta: '#C026D3',
}

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Use default para espera indeterminada e percentage quando a interface realmente conhece o progresso atual da operação.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar variant, label, labelPosition, value e color. O story 'Combinados' resume os cenários mais comuns em uma leitura rápida.",
  },
  {
    title: 'Comportamento',
    text: 'A variante default expõe role status com anúncio polido. A variante percentage usa role progressbar e limita value ao intervalo entre 0 e 100.',
  },
] satisfies Array<{ title: string; text: string }>

const defaultExampleCode = `
        <Loader label="Carregando" labelPosition="top" />
        <Loader label="Carregando" labelPosition="bottom" />
        <Loader label="Carregando" labelPosition="left" />
        <Loader label="Carregando" labelPosition="right" />`

const percentageExampleCode = `<Loader variant="percentage" value={25} color="#2563EB" />
<Loader variant="percentage" value={65} color="#EA580C" />
<Loader variant="percentage" value={100} color="#C026D3" />`

const combinedExampleCode = `<Loader label="Carregando..." />
<Loader label="Buscando dados" labelPosition="right" />
<Loader variant="percentage" value={65} color="#EA580C" />
<Loader variant="percentage" value={100} color="#C026D3" />`

const meta = {
  title: 'Feedback/Loader',
  component: Loader,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

function CenteredPreview({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: 120 }}>
      {children}
    </div>
  )
}

function LoaderDefaultPreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="Topo">
        <CenteredPreview>
          <Loader label="Carregando" labelPosition="top" />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="Base">
        <CenteredPreview>
          <Loader label="Carregando" labelPosition="bottom" />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="Esquerda">
        <CenteredPreview>
          <Loader label="Carregando" labelPosition="left" />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="Direita">
        <CenteredPreview>
          <Loader label="Carregando" labelPosition="right" />
        </CenteredPreview>
      </StoryPreviewCard>
    </div>
  )
}

function LoaderPercentagePreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="25%">
        <CenteredPreview>
          <Loader variant="percentage" value={25} color={percentagePreviewColors.blue} />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="65%">
        <CenteredPreview>
          <Loader variant="percentage" value={65} color={percentagePreviewColors.orange} />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="100%">
        <CenteredPreview>
          <Loader variant="percentage" value={100} color={percentagePreviewColors.magenta} />
        </CenteredPreview>
      </StoryPreviewCard>
    </div>
  )
}

function LoaderCombinedPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Espera indeterminada">
        <CenteredPreview>
          <Loader label="Carregando..." />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="Acompanhando tarefa">
        <CenteredPreview>
          <Loader label="Buscando dados" labelPosition="right" />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="Progresso em andamento">
        <CenteredPreview>
          <Loader variant="percentage" value={65} color={percentagePreviewColors.orange} />
        </CenteredPreview>
      </StoryPreviewCard>

      <StoryPreviewCard label="Concluido">
        <CenteredPreview>
          <Loader variant="percentage" value={100} color={percentagePreviewColors.magenta} />
        </CenteredPreview>
      </StoryPreviewCard>
    </div>
  )
}

function LoaderInteractivePreview(args: Loader.Props) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, padding: 16, justifyItems: 'center' }}>
      <Loader {...args} />
    </div>
  )
}

export const LoaderDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Loader</h3>}
        description={
          <>
            O componente <code>Loader</code> comunica espera e progresso sem depender
            de integração com produto específico. A variante <code>default</code> cobre 
            carregamentos indeterminados e a variante <code>percentage</code> mostra progresso já conhecido.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Variante default"
        description="Use a versão com spinner quando a interface ainda não conhece o percentual da operação. label é opcional e labelPosition ajuda a encaixar o texto no contexto sem criar estruturas extras ao redor do componente."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>label</code> adiciona contexto textual ao estado de carregamento.</li>
          <li><code>labelPosition</code> aceita top, bottom, left e right.</li>
          <li>Sem rótulo visível, o componente continua anunciando <code>Carregando</code> para tecnologias assistivas.</li>
        </ul>

        <SandboxExample
          title="Posições de rótulo"
          description="Panorama rápido das quatro posições suportadas para o texto auxiliar da variante default."
          code={defaultExampleCode}
          notes={[
            'Prefira top ou bottom quando o loader estiver sozinho em uma área dedicada.',
            'Left e right costumam funcionar melhor quando o feedback divide linha com outros elementos.',
          ]}
        >
          <LoaderDefaultPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variante percentage"
        description="Use a versão circular com número central apenas quando o percentual for real e atualizado pela aplicação. O valor é limitado automaticamente ao intervalo entre 0 e 100 para evitar estados inválidos no progresso."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>value</code> aceita número ou string numérica e é normalizado para o intervalo de 0 a 100.</li>
          <li><code>color</code> permite customizar a cor do anel e do texto central.</li>
          <li>A variante usa <code>role=&quot;progressbar&quot;</code> com <code>aria-valuenow</code>, <code>aria-valuemin</code> e <code>aria-valuemax</code>.</li>
        </ul>

        <SandboxExample
          title="Escala de progresso"
          description="Exemplos rápidos para comparar leitura do número central, preenchimento do anel e uso de cor customizada."
          code={percentageExampleCode}
          notes={[
            'Os exemplos abaixo usam cores propositalmente bem diferentes para evidenciar a possibilidade de customização.',
            'Para progresso desconhecido, volte para a variante default em vez de inventar percentuais artificiais.',
          ]}
        >
          <LoaderPercentagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites e decisões de uso"
        description="Loader deve comunicar espera, não substituir mensagens de resultado. Quando a tarefa falhar, concluir ou exigir ação da pessoa usuária, o feedback precisa migrar para outro componente mais explícito."
      >
        <ul style={storyDocsStyles.list}>
          <li>A variante default é indeterminada por definição: não combine com texto prometendo percentual exato.</li>
          <li>A variante percentage é melhor para uploads, sincronizações e etapas de processamento monitoradas pela aplicação.</li>
          <li>O componente não inclui ações, cancelamento ou mensagem de erro. Esses comportamentos devem vir do contexto ao redor.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const LoaderInterativo: Story = {
  name: 'Interativo',
  args: {
    variant: 'default',
    label: 'Carregando...',
    labelPosition: 'bottom',
    value: 65,
    color: '#1A7235',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'percentage'],
      description: 'Escolhe entre o spinner indeterminado e o anel com progresso explícito.',
      table: { category: 'Variação' },
    },
    label: {
      control: 'text',
      description: 'Texto opcional usado apenas na variante default.',
      table: { category: 'Conteúdo' },
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do rótulo na variante default.',
      table: { category: 'Conteúdo' },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Percentual usado na variante percentage.',
      table: { category: 'Progressão' },
    },
    color: {
      control: 'text',
      description: 'Cor customizada do anel e do texto central na variante percentage.',
      table: { category: 'Progressão' },
    },
  },
  render: (args) => <LoaderInteractivePreview {...args} />,
}

export const LoaderCombinados: Story = {
  name: 'Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <SandboxExample
      title="Inventário rápido"
      description="Leitura compacta dos cenários mais recorrentes para validar se a escolha entre spinner e progresso explícito continua coerente com o contexto."
      code={combinedExampleCode}
    >
      <LoaderCombinedPreview />
    </SandboxExample>
  ),
}