import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Accordion } from './Accordion'
import './Accordion.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['default', 'dark', 'filtering', 'exclusive']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando o conteúdo precisa ser organizado em painéis colapsáveis, com opção de abertura exclusiva, tema escuro e filtragem local por título ou conteúdo.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar tema, posição das setas, abertura exclusiva e filtragem. A documentação concentra a comparação visual entre temas, enquanto o story 'Filtragem' isola a busca local.",
  },
  {
    title: 'Comportamento',
    text: 'O componente abre o primeiro painel quando não inicia colapsado, pode manter múltiplos painéis abertos e filtra localmente usando o texto visível de cada item.',
  },
] satisfies Array<{ title: string; text: string }>

const faqItems: Accordion.Item[] = [
  {
    id: 'volto',
    title: 'O que foi migrado do Accordion do Volto?',
    content: (
      <p>
        A migração preserva a ideia de painéis colapsáveis com tema, filtragem e
        abertura exclusiva ou múltipla, mas traduz o contrato para React puro com
        <code> items </code> tipados em vez de blocos CMS.
      </p>
    ),
  },
  {
    id: 'itens',
    title: 'Como estruturar os itens?',
    content: (
      <>
        <p>Cada item recebe um título e um conteúdo React.</p>
        <p>
          Isso permite usar texto simples, listas, links ou composições mais ricas
          sem depender de <code>RenderBlocks</code>.
        </p>
      </>
    ),
  },
  {
    id: 'filtro',
    title: 'A filtragem procura só no título?',
    content: (
      <p>
        Não. Quando <code>filtering</code> está ativo, o componente procura no
        título e também no texto renderizado dentro do conteúdo de cada painel.
      </p>
    ),
  },
  {
    id: 'tema',
    title: 'Quando usar o tema dark?',
    content: (
      <p>
        O tema dark funciona bem em seções de destaque ou superfícies onde o
        contraste alto ajuda a separar o bloco do restante da página.
      </p>
    ),
  },
]

const basicExampleCode = `<Accordion
  headline="Perguntas frequentes"
  items={[
    {
      id: 'volto',
      title: 'O que foi migrado do Accordion do Volto?',
      content: <p>Contrato traduzido para React puro.</p>,
    },
    {
      id: 'itens',
      title: 'Como estruturar os itens?',
      content: <p>Cada item recebe título e conteúdo React.</p>,
    },
  ]}
  titleSize="h5"
  collapsed={false}
/>`

const themesExampleCode = `<Accordion
  items={items}
  theme="default"
/>

<Accordion
  items={items}
  theme="dark"
/>
`

const behaviorExampleCode = `<Accordion
  items={items}
  nonExclusive={true}
  collapsed={false}
/>

<Accordion
  items={items}
  nonExclusive={false}
  collapsed={false}
/>
`

const filteringExampleCode = `<Accordion
  items={items}
  filtering
  filterPlaceholder="Busque por Volto, tema ou filtros"
/>`

const meta = {
  title: 'Conteúdo/Accordion',
  component: Accordion,
  args: {
    items: faqItems,
    headline: 'Perguntas frequentes',
    titleSize: 'h5',
    theme: 'default',
    rightArrows: true,
    collapsed: true,
    nonExclusive: true,
    filtering: false,
    filterPlaceholder: 'Digite para filtrar...',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

function AccordionPreview(props: Partial<Accordion.Props> = {}) {
  return (
    <div style={{ width: '100%', maxWidth: 760 }}>
      <Accordion items={faqItems} titleSize="h5" {...props} />
    </div>
  )
}

function AccordionThemesPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Default">
        <AccordionPreview headline="Tema default" theme="default" collapsed={false} />
      </StoryPreviewCard>

      <StoryPreviewCard label="Dark">
        <AccordionPreview headline="Tema dark" theme="dark" collapsed={false} />
      </StoryPreviewCard>
    </div>
  )
}

function AccordionBehaviorPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Múltiplos painéis">
        <AccordionPreview
          headline="Abertura não exclusiva"
          collapsed={false}
          nonExclusive
        />
      </StoryPreviewCard>

      <StoryPreviewCard label="Um painel por vez">
        <AccordionPreview
          headline="Abertura exclusiva"
          collapsed={false}
          nonExclusive={false}
        />
      </StoryPreviewCard>
    </div>
  )
}

function AccordionFilteringPreview() {
  return (
    <AccordionPreview
      headline="Buscar perguntas"
      collapsed={false}
      filtering
      filterPlaceholder="Busque por Volto, tema ou filtros"
    />
  )
}

function AccordionInteractivePreview(args: Accordion.Props) {
  return (
    <div style={{ width: '100%', maxWidth: 760 }}>
      <Accordion {...args} items={faqItems} />
    </div>
  )
}

export const AccordionDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Accordion</h3>}
        description={
          <>
            O componente <code>Accordion</code> organiza conteúdo em painéis
            expansíveis com tema, filtro local e modo exclusivo ou múltiplo.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como usar"
        description="A versão migrada preserva a intenção do Accordion do Volto, mas troca o contrato baseado em blocos por uma API tipada com items e conteúdo React puro. Isso reduz acoplamento com CMS e mantém a composição executável no Storybook."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>items</code> define a lista de painéis com título, conteúdo e texto opcional de busca.</li>
          <li><code>headline</code> contextualiza o conjunto quando o accordion aparece como seção da página.</li>
          <li><code>theme</code> alterna entre visual default e dark sem mudar a semântica.</li>
          <li><code>nonExclusive</code> decide se vários painéis podem ficar abertos ao mesmo tempo.</li>
          <li><code>filtering</code> habilita a busca local por título e conteúdo.</li>
        </ul>

        <SandboxExample
          title="Estrutura base"
          description="Exemplo direto da composição recomendada para FAQ, ajuda contextual ou listas de instruções progressivas."
          code={basicExampleCode}
        >
          <AccordionPreview headline="Perguntas frequentes" collapsed={false} />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Temas disponíveis"
        description="O tema default mantém a aparência clara e neutra. O tema dark reaproveita a paleta de marca para blocos mais destacados."
      >
        <SandboxExample
          title="Default e dark"
          description="Comparação rápida entre os dois tratamentos visuais preservando o mesmo conteúdo e o mesmo comportamento."
          code={themesExampleCode}
        >
          <AccordionThemesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Comportamento de abertura"
        description="O componente pode funcionar como lista de painéis independentes ou como accordion exclusivo. A decisão depende mais do fluxo de leitura do que da aparência."
      >
        <SandboxExample
          title="Múltiplos versus exclusivo"
          description="Quando só um painel deve permanecer aberto por vez, use nonExclusive=false."
          code={behaviorExampleCode}
        >
          <AccordionBehaviorPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Filtragem local"
        description="A filtragem traduz o recurso da origem para uma busca local e autocontida. Isso facilita uso em FAQs extensas sem carregar dependências externas ou estado global."
      >
        <SandboxExample
          title="Busca por título e conteúdo"
          description="Digite termos como Volto, tema ou filtro para verificar quais painéis continuam visíveis."
          code={filteringExampleCode}
        >
          <AccordionFilteringPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e contrato"
        description="O componente cobre a superfície reutilizável do accordion, mas deliberadamente não transporta o acoplamento da origem com querystring, RenderBlocks, edição inline e schema de bloco."
      >
        <ul style={storyDocsStyles.list}>
          <li>A busca é local ao conjunto renderizado; ela não consulta APIs nem sincroniza resultado com rota.</li>
          <li>O conteúdo é recebido por props como ReactNode, então a montagem dos itens continua responsabilidade do consumidor.</li>
          <li>O estado de abertura é interno; se o produto precisar orquestrar isso globalmente, vale encapsular o componente em uma camada superior.</li>
          <li>O tema atual replica apenas as opções default e dark observadas na origem, sem expandir a paleta sem necessidade.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const AccordionInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    items: {
      control: false,
      description: 'A story usa um conjunto fixo de itens para manter a comparação entre estados.',
      table: { category: 'Composição' },
    },
    headline: {
      control: 'text',
      description: 'Título opcional exibido acima do conjunto.',
      table: { category: 'Conteúdo' },
    },
    titleSize: {
      control: { type: 'radio' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Define o nível semântico dos títulos dos painéis.',
      table: { category: 'Composição' },
    },
    theme: {
      control: { type: 'radio' },
      options: ['default', 'dark'],
      description: 'Seleciona o tema visual do accordion.',
      table: { category: 'Estado visual' },
    },
    rightArrows: {
      control: 'boolean',
      description: 'Posiciona as setas à direita quando true e à esquerda quando false.',
      table: { category: 'Estado visual' },
    },
    collapsed: {
      control: 'boolean',
      description: 'Quando false, o primeiro painel já inicia aberto.',
      table: { category: 'Comportamento' },
    },
    nonExclusive: {
      control: 'boolean',
      description: 'Permite múltiplos painéis abertos ao mesmo tempo.',
      table: { category: 'Comportamento' },
    },
    filtering: {
      control: 'boolean',
      description: 'Habilita filtro local por título e conteúdo.',
      table: { category: 'Comportamento' },
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Texto exibido no campo de filtro quando ele estiver ativo.',
      table: { category: 'Conteúdo' },
    },
    filterLabel: {
      control: 'text',
      description: 'Rótulo acessível do campo de filtro.',
      table: { category: 'Acessibilidade' },
    },
    clearFilterLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão de limpar filtro.',
      table: { category: 'Acessibilidade' },
    },
    noResultsMessage: {
      control: 'text',
      description: 'Mensagem exibida quando o filtro não encontra nenhum painel.',
      table: { category: 'Conteúdo' },
    },
  },
  render: (args) => <AccordionInteractivePreview {...args} />,
}

export const AccordionFiltragem: Story = {
  name: 'Filtragem',
  parameters: {
    controls: { disable: true },
  },
  render: () => <AccordionFilteringPreview />,
}