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
import { Search } from './Search'
import './Search.scss'
import '../../foundations/styles/index.scss'

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa coletar um termo de busca e delegar ao consumidor o que fazer com esse valor, sem embutir rota, querystring ou integração de produto.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar placeholder, disabled, fullWidth, collapsible e comando por voz. O story 'Controlado' mostra a integração recomendada com callback de busca.",
  },
  {
    title: 'Comportamento',
    text: 'O componente renderiza um form com input search, dispara onSearch apenas quando há texto, pode abrir e fechar quando collapsible estiver ativo e pode exibir uma ação adicional de voz ao lado do botão de busca.',
  },
] satisfies Array<{ title: string; text: string }>

const anatomyExampleCode = `const [query, setQuery] = useState('')

<Search
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  onSearch={(term) => console.log(term)}
  inputAriaLabel="Campo de busca"
  placeholder="O que você procura?"
/>`

const statesExampleCode = `<Search placeholder="Pesquisar publicações" />
<Search placeholder="Pesquisar em toda a página" fullWidth />
<Search placeholder="Campo indisponível" disabled />`

const collapsibleExampleCode = `const [isOpen, setIsOpen] = useState(false)

<Search
  collapsible
  active={isOpen}
  onActiveChange={setIsOpen}
  placeholder="Pesquisar..."
/>`

const voiceExampleCode = `<Search
  voiceCommand
  onVoice={() => console.log('abrir captura de audio')}
  placeholder="Pesquisar com apoio de voz"
/>`

const controlledExampleCode = `const [query, setQuery] = useState('')
const [lastSearch, setLastSearch] = useState<string | null>(null)

<Search
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  onSearch={(term) => setLastSearch(term)}
  placeholder="Pesquisar publicações"
/>`

const meta = {
  title: 'Busca/Search',
  component: Search,
  args: {
    placeholder: 'O que você procura?',
    collapsible: false,
    active: true,
    voiceCommand: false,
    fullWidth: false,
    disabled: false,
    inputAriaLabel: 'Campo de busca',
    closeButtonLabel: 'Fechar busca',
    voiceButtonLabel: 'Comando por voz',
    value: '',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Search>

export default meta

type Story = StoryObj<typeof meta>

function SearchAnatomyPreview() {
  const [query, setQuery] = useState('')
  const [lastSearch, setLastSearch] = useState<string | null>(null)

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
      <Search
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSearch={(term) => setLastSearch(term)}
        placeholder="O que você procura?"
      />

      <p style={storyDocsStyles.statText}>
        <strong>Última busca:</strong> {lastSearch ?? 'Nenhum envio ainda'}
      </p>
    </div>
  )
}

function SearchStatesPreview() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <StoryPreviewCard label="Base">
        <Search placeholder="Pesquisar publicações" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Largura total">
        <div style={{ width: '100%', maxWidth: 720 }}>
          <Search placeholder="Pesquisar em toda a página" fullWidth />
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Disabled">
        <Search placeholder="Campo indisponível" disabled />
      </StoryPreviewCard>
    </div>
  )
}

function SearchVoicePreview() {
  const [voiceClicks, setVoiceClicks] = useState(0)

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
      <Search
        voiceCommand
        onVoice={() => setVoiceClicks((currentCount) => currentCount + 1)}
        placeholder="Pesquisar com apoio de voz"
      />

      <p style={storyDocsStyles.statText}>
        <strong>Acionamentos de voz:</strong> {voiceClicks}
      </p>
    </div>
  )
}

function SearchCollapsiblePreview() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [lastSearch, setLastSearch] = useState<string | null>(null)

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
      <Search
        collapsible
        active={active}
        onActiveChange={setActive}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSearch={(term) => setLastSearch(term)}
        placeholder="Pesquisar..."
      />

      <p style={storyDocsStyles.statText}>
        <strong>Estado aberto:</strong> {active ? 'Sim' : 'Não'}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Última busca:</strong> {lastSearch ?? 'Nenhum envio ainda'}
      </p>
    </div>
  )
}

function SearchInteractivePreview(args: Search.Props) {
  const [value, setValue] = useState(args.value ?? '')
  const [active, setActive] = useState(args.active ?? true)
  const [lastSearch, setLastSearch] = useState<string | null>(null)
  const [voiceClicks, setVoiceClicks] = useState(0)

  useEffect(() => {
    setValue(args.value ?? '')
  }, [args.value])

  useEffect(() => {
    setActive(args.active ?? true)
  }, [args.active])

  return (
    <div style={{ ...storyDocsStyles.previewStage, gap: 12, padding: 16 }}>
      <div style={{ width: '100%', maxWidth: args.fullWidth ? 720 : 360 }}>
        <Search
          {...args}
          value={value}
          active={active}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          onActiveChange={(nextActive) => {
            setActive(nextActive)
          }}
          onVoice={() => {
            setVoiceClicks((currentCount) => currentCount + 1)
          }}
          onSearch={(term) => {
            setLastSearch(term)
          }}
        />
      </div>

      <p style={storyDocsStyles.statText}>
        <strong>Valor atual:</strong> {value || 'Vazio'}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Última busca:</strong> {lastSearch ?? 'Nenhum envio ainda'}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Estado aberto:</strong> {args.collapsible ? (active ? 'Sim' : 'Não') : 'Sempre aberto'}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Acionamentos de voz:</strong> {voiceClicks}
      </p>
    </div>
  )
}

function SearchControlledPreview() {
  const [query, setQuery] = useState('licitacoes')
  const [lastSearch, setLastSearch] = useState<string | null>(null)

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <Search
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSearch={(term) => setLastSearch(term)}
        placeholder="Pesquisar publicações"
        fullWidth
      />

      <p style={storyDocsStyles.statText}>
        <strong>Valor controlado:</strong> {query}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Última busca enviada:</strong> {lastSearch ?? 'Nenhum envio ainda'}
      </p>
    </div>
  )
}

export const SearchDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Search</h3>}
        description={
          <>
            O design system entrega o campo, os botões e o callback; a navegação e a
            execução da busca continuam responsabilidade do desenvolvedor.
          </>
        }
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura base"
        description="O componente é um campo de busca reutilizável: o valor pode ser controlado ou não controlado, onSearch dispara apenas quando existe texto e o componente permanece neutro em relação ao destino dessa busca."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>value</code> e <code>onChange</code> permitem o uso controlado tradicional.</li>
          <li><code>onSearch</code> recebe o termo atual quando a submissão acontece com texto válido.</li>
          <li><code>inputAriaLabel</code> separa o nome acessível do campo do rótulo usado nos botões internos.</li>
          <li><code>collapsible</code>, <code>active</code> e <code>onActiveChange</code> permitem abrir e recolher a busca em áreas compactas.</li>
          <li><code>voiceCommand</code> e <code>onVoice</code> habilitam um gatilho visual para integração de captura por voz.</li>
          <li><code>placeholder</code>, <code>name</code> e props nativas do input seguem disponíveis.</li>
        </ul>

        <SandboxExample
          title="Busca básica"
          description="Exemplo mínimo do contrato recomendado, com valor controlado e callback explícito para o termo submetido."
          code={anatomyExampleCode}
          notes={[
            'O componente não faz navegação nem monta querystring automaticamente.',
            'A decisão sobre debouncing, chamada de API ou redirecionamento pertence ao consumidor.',
          ]}
        >
          <SearchAnatomyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Estados visuais"
        description="A migração preserva o visual compacto do campo de busca e adiciona controles esperados no design system atual, como largura total e tratamento consistente para disabled."
      >
        <SandboxExample
          title="Base, full width e disabled"
          description="Comparativo rápido dos estados mais úteis para validar encaixe do componente em cabeçalhos, barras e áreas de conteúdo."
          code={statesExampleCode}
        >
          <SearchStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Fluxo collapsible"
        description="Quando collapsible estiver ativo, o Search pode começar recolhido e abrir pelo botão de busca. Depois de aberto, o input recebe foco e o componente pode ser fechado por clique externo, Escape ou botão de fechar."
      >
        <SandboxExample
          title="Abrir, buscar e recolher"
          description="Esse é o fluxo pensado para headers, toolbars e faixas compactas em que a busca não precisa ficar sempre expandida."
          code={collapsibleExampleCode}
          notes={[
            'Fechado, o componente mostra apenas a ação principal de busca e ocupa o espaço de um botão.',
            'Aberto, o campo recebe foco automaticamente para acelerar a digitação.',
            'Se voiceCommand também estiver ativo, o botão de voz aparece apenas no estado aberto para preservar o comportamento compacto.',
          ]}
        >
          <SearchCollapsiblePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Comando por voz"
        description="Quando voiceCommand estiver ativo, o Search exibe um botão adicional ao lado do botão de busca para que o produto consumidor conecte fluxos como captura, transcrição ou abertura de modal de áudio."
      >
        <SandboxExample
          title="Ação auxiliar por voz"
          description="O design system não implementa a recepção de áudio; ele apenas rende o ícone e expõe o callback onVoice quando voiceCommand estiver habilitado."
          code={voiceExampleCode}
          notes={[
            'Quando voiceCommand for false, o ícone não é renderizado e o callback onVoice não participa da interação.',
            'Quando voiceCommand for usado com collapsible, o ícone de voz só aparece depois que a busca é expandida.',
            'A captura de microfone, permissões do navegador e transcrição continuam responsabilidade do consumidor.',
          ]}
        >
          <SearchVoicePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites e responsabilidades"
        description="A migração separa claramente o que pertence ao design system e o que pertence ao produto consumidor. Isso evita repetir o acoplamento do widget antigo com rotas e filtros de página."
      >
        <ul style={storyDocsStyles.list}>
          <li>O componente não conhece <code>pathname</code>, <code>history.push</code> nem parâmetros de busca do produto.</li>
          <li>Internacionalização específica da aplicação deve ser resolvida pelo consumidor via props como <code>placeholder</code> e rótulos dos botões.</li>
          <li>Se a aplicação precisar de analytics, debounce, abertura controlada, captura de áudio ou integração remota, esses fluxos devem ser adicionados ao redor de <code>onSearch</code>, <code>onActiveChange</code> e <code>onVoice</code>.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const SearchInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando o campo está vazio.',
      table: { category: 'Conteúdo' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita input e botões internos.',
      table: { category: 'Estado' },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Faz o componente ocupar toda a largura disponível.',
      table: { category: 'Layout' },
    },
    inputAriaLabel: {
      control: 'text',
      description: 'Nome acessível específico do campo de busca.',
      table: { category: 'Acessibilidade' },
    },
    collapsible: {
      control: 'boolean',
      description: 'Ativa o fluxo aberto/fechado para uso em áreas compactas.',
      table: { category: 'Comportamento' },
    },
    active: {
      control: 'boolean',
      description: 'Controla externamente o estado aberto quando collapsible estiver ativo.',
      table: { category: 'Comportamento' },
    },
    voiceCommand: {
      control: 'boolean',
      description: 'Exibe o botão de comando por voz ao lado do botão de busca.',
      table: { category: 'Comportamento' },
    },
    closeButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão de fechar no modo collapsible.',
      table: { category: 'Conteúdo' },
    },
    voiceButtonLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão de comando por voz.',
      table: { category: 'Conteúdo' },
    },
    value: {
      control: 'text',
      description: 'Valor atual do campo no preview interativo.',
      table: { category: 'Conteúdo' },
    },
  },
  render: (args) => <SearchInteractivePreview {...args} />,
}

export const SearchControlado: Story = {
  name: 'Controlado',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <SandboxExample
      title="Integração controlada"
      description="Exemplo direto de integração com estado React e callback de busca, sem qualquer dependência de infraestrutura externa."
      code={controlledExampleCode}
    >
      <SearchControlledPreview />
    </SandboxExample>
  ),
}