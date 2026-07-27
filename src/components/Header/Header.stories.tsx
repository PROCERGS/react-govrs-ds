import { useState, type CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Header } from './Header'
import { BarraEstado } from '../BarraEstado/BarraEstado'
import { BarraAcessibilidade } from '../BarraAcessibilidade/BarraAcessibilidade'
import './Header.scss'
import '../MenuHamburger/MenuHamburger.scss'
import '../Search/Search.scss'
import '../../foundations/styles/index.scss'

const headerMenuItems = [
  {
    title: 'Institucional',
    url: '#institucional',
    items: [
      { title: 'Sobre o órgão', url: '#sobre' },
      { title: 'Estrutura', url: '#estrutura' },
      {
        title: 'Departamentos',
        url: '#departamentos',
        items: [
          { title: 'Planejamento', url: '#planejamento' },
          { title: 'Atendimento ao cidadão', url: '#atendimento' },
        ],
      },
    ],
  },
  {
    title: 'Serviços',
    url: '#servicos',
    items: [
      { title: 'Solicitar atendimento', url: '#solicitar' },
      { title: 'Consultar protocolo', url: '#protocolo' },
      { title: 'Guias e orientações', url: '#guias' },
    ],
  },
  { title: 'Notícias', url: '#noticias' },
  { title: 'Contato', url: '#contato' },
] satisfies Header.Props['menuItems']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a página precisa apresentar identidade institucional, acionador de navegação, título do site e busca no topo da experiência.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar título, itens do menu, busca e botão de voltar ao topo em uma composição única.",
  },
  {
    title: 'Comportamento',
    text: 'Em telas amplas, a busca permanece visível. Em telas compactas, ela abre pelo botão e oculta temporariamente a identidade para ganhar espaço.',
  },
] satisfies Array<{ title: string; text: string }>

const headerDocsVariantTags = ['identidade', 'menu integrado', 'busca responsiva', 'retorno ao topo']

const barraEstadoDocsVariantTags = ['faixa institucional', 'links fixos', 'menu compacto']

const barraEstadoDocsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa de uma faixa institucional fixa acima do restante do cabeçalho, com links rápidos do ecossistema do estado.',
  },
  {
    title: 'Melhor exploração',
    text: "Use este story para entender o contrato da barra e o story 'Interativo' de Header para validar a composição completa das três faixas.",
  },
  {
    title: 'Comportamento',
    text: 'Em larguras reduzidas, os links deixam de ficar todos em linha e passam a ser acessados por um menu compacto acionado pelo botão de reticências.',
  },
] satisfies Array<{ title: string; text: string }>

const barraAcessibilidadeDocsVariantTags = ['atalhos numerados', 'alto contraste', 'links auxiliares']

const barraAcessibilidadeDocsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a página precisa oferecer atalhos de teclado, toggle global de contraste e links institucionais de acessibilidade no topo da experiência.',
  },
  {
    title: 'Melhor exploração',
    text: "Use este story para entender o contrato de props e o story 'Interativo' de Header para validar a barra junto com Barra Estado e Header.",
  },
  {
    title: 'Comportamento',
    text: 'Os atalhos numerados começam em 1, respondem a Alt+1...Alt+9 e o contraste persiste em localStorage quando o usuário alterna o botão.',
  },
] satisfies Array<{ title: string; text: string }>

const headerBasicExampleCode = `<Header
  siteTitle="Governo do Estado do Rio Grande do Sul"
  homeHref="#inicio"
  logoHref="#governo"
  menuItems={headerMenuItems}
/>`

const headerSearchExampleCode = `<Header
  siteTitle="Governo do Estado do Rio Grande do Sul"
  homeHref="#inicio"
  logoHref="#governo"
  menuItems={headerMenuItems}
  searchPlaceholder="Pesquisar no site"
  searchInputAriaLabel="Campo de busca do site"
  onSearch={(term) => buscarConteudo(term)}
/>`

const headerScrollExampleCode = `<Header
  siteTitle="Governo do Estado do Rio Grande do Sul"
  homeHref="#inicio"
  logoHref="#governo"
  menuItems={headerMenuItems}
  showScrollTopButton
  scrollTargetId="header-story-main"
/>`

const barraEstadoExampleCode = `<BarraEstado />`

const barraAcessibilidadeExampleCode = `<BarraAcessibilidade
  shortcuts={[
    { title: 'Conteúdo', href: '#conteudo' },
    { title: 'Menu', href: '#menu' },
    { title: 'Busca', href: '#buscar' },
  ]}
  hrefAccessibility="/acessibilidade"
  hrefContact="/contato"
  hrefSitemap="/sitemap"
/>`

const barraAcessibilidadeRoutesExampleCode = `<BarraAcessibilidade
  shortcuts={[
    { title: 'Conteúdo', href: '#conteudo' },
    { title: 'Busca', href: '#buscar' },
  ]}
  hrefContact="/contato"
  hrefSitemap="/sitemap"
/>`

const headerFrameStyle: CSSProperties = {
  position: 'relative',
  display: 'grid',
  alignContent: 'start',
  minHeight: 430,
  border: '1px solid var(--govrs-color-border-default, #dbe5f0)',
  borderRadius: 12,
  overflow: 'hidden',
  background: 'var(--govrs-color-surface-base, #ffffff)',
}

const headerContentHintStyle: CSSProperties = {
  margin: 0,
  padding: '28px 24px',
  color: 'var(--govrs-color-text-muted, #64748b)',
  fontSize: 14,
}

const propCardContentStyle: CSSProperties = {
  display: 'grid',
  gap: 10,
}

const meta = {
  title: 'Navegação/Header',
  component: Header,
  args: {
    siteTitle: 'Governo do Estado do Rio Grande do Sul',
    homeHref: '#inicio',
    logoHref: '#governo',
    logoAriaLabel: 'Governo do Estado do Rio Grande do Sul',
    menuItems: headerMenuItems,
    searchPlaceholder: 'O que você procura?',
    searchInputAriaLabel: 'Campo de busca do site',
    searchButtonLabel: 'Pesquisar',
    searchCloseButtonLabel: 'Fechar busca',
    showScrollTopButton: false,
    scrollTargetId: 'header-story-main',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

function HeaderFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={headerFrameStyle}>
      {children}
      <main id="header-story-main">
        <p style={headerContentHintStyle}>Área de conteúdo usada apenas para demonstrar o encaixe do cabeçalho.</p>
      </main>
    </div>
  )
}

function PropsCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <StoryPreviewCard label={label}>
      <div style={propCardContentStyle}>{children}</div>
    </StoryPreviewCard>
  )
}

function HeaderBasePreview() {
  return (
    <HeaderFrame>
      <Header
        siteTitle="Governo do Estado do Rio Grande do Sul"
        homeHref="#inicio"
        logoHref="#governo"
        menuItems={headerMenuItems}
      />
    </HeaderFrame>
  )
}

function HeaderSearchPreview() {
  const [lastSearch, setLastSearch] = useState<string | null>(null)

  return (
    <HeaderFrame>
      <Header
        siteTitle="Governo do Estado do Rio Grande do Sul"
        homeHref="#inicio"
        logoHref="#governo"
        menuItems={headerMenuItems}
        searchPlaceholder="Pesquisar no site"
        searchInputAriaLabel="Campo de busca do site"
        onSearch={(term) => setLastSearch(term)}
      />
      <p style={{ ...storyDocsStyles.statText, padding: '0 24px 24px' }}>
        <strong>Última busca:</strong> {lastSearch ?? 'Nenhum envio ainda'}
      </p>
    </HeaderFrame>
  )
}

function HeaderMenuOpenPreview() {
  return (
    <HeaderFrame>
      <Header
        siteTitle="Governo do Estado do Rio Grande do Sul"
        homeHref="#inicio"
        logoHref="#governo"
        menuItems={headerMenuItems}
        showScrollTopButton
        scrollTargetId="header-story-main"
      />
    </HeaderFrame>
  )
}

type InteractiveArgs = Header.Props & {
  barraAcessibilidadeShortcuts?: Array<{ title: string; href: string }>
  barraAcessibilidadeHrefAccessibility?: string
  barraAcessibilidadeHrefContact?: string
  barraAcessibilidadeHrefSitemap?: string
}

function HeaderInteractivePreview(args: InteractiveArgs) {
  const [lastSearch, setLastSearch] = useState<string | null>(null)
  const [scrollClicks, setScrollClicks] = useState(0)

  const headerKey = `${String(args.menuOpen)}-${String(args.defaultSearchActive)}`

  const shortcuts =
    args.barraAcessibilidadeShortcuts ?? [
      { title: 'Conteúdo', href: '#conteudo' },
      { title: 'Menu', href: '#menu' },
      { title: 'Busca', href: '#buscar' },
    ]

  return (
    <>
      <BarraEstado />

      <BarraAcessibilidade
        shortcuts={shortcuts}
        hrefAccessibility={args.barraAcessibilidadeHrefAccessibility ?? '/acessibilidade'}
        hrefContact={args.barraAcessibilidadeHrefContact ?? '/contato'}
        hrefSitemap={args.barraAcessibilidadeHrefSitemap ?? '/sitemap'}
        disableHighContrastToggle
      />

      <Header
        key={headerKey}
        {...args}
        onSearch={(term, event) => {
          setLastSearch(term)
          args.onSearch?.(term, event)
        }}
        onScrollTop={() => {
          setScrollClicks((currentCount) => currentCount + 1)
          args.onScrollTop?.()
        }}
      />

      <div style={{ display: 'grid', gap: 12, paddingTop: 12 }}>
        <p style={storyDocsStyles.statText}>
          <strong>Última busca:</strong> {lastSearch ?? 'Nenhum envio ainda'}
        </p>

        <p style={storyDocsStyles.statText}>
          <strong>Cliques em voltar ao topo:</strong> {scrollClicks}
        </p>
      </div>
    </>
  )
}

export const HeaderDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Header</h3>}
        description={
          <>
            O componente compõe identidade, menu principal, título do site, busca e
            retorno ao topo em uma estrutura reutilizável de cabeçalho.
          </>
        }
        variantTags={headerDocsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Mapa de props"
        description="A API do Header fica mais fácil de entender quando agrupada pelo papel de cada prop: identidade, menu, busca e comportamento de página. O componente recebe dados já resolvidos e coordena MenuHamburger e Search internamente."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <PropsCard label="Identidade e links">
            <p style={storyDocsStyles.statText}>
              Essas props definem o bloco institucional visível no topo do cabeçalho.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>siteTitle</code> define o conteúdo clicável exibido como título principal.</li>
              <li><code>homeHref</code> define o destino do link aplicado ao título.</li>
              <li><code>logo</code> substitui o símbolo padrão por qualquer <code>ReactNode</code>.</li>
              <li><code>logoHref</code> define o destino do link aplicado ao símbolo institucional.</li>
              <li><code>logoAriaLabel</code> nomeia o link do logo para tecnologias assistivas.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Menu integrado">
            <p style={storyDocsStyles.statText}>
              O Header repassa configuração e controle para o <code>MenuHamburger</code> interno.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>menuItems</code> recebe a mesma estrutura hierárquica aceita por <code>MenuHamburger</code>.</li>
              <li><code>menuOpen</code> coloca o menu em modo controlado externamente.</li>
              <li>O estado do menu pode ser controlado externamente através de <code>menuOpen</code> e <code>onMenuOpenChange</code>.</li>
              <li><code>onMenuOpenChange</code> avisa quando o usuário abre ou fecha o menu.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Busca integrada">
            <p style={storyDocsStyles.statText}>
              A busca usa o componente <code>Search</code> internamente e expõe tanto props de conteúdo quanto pares controlado/não controlado.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>searchValue</code>, <code>defaultSearchValue</code> e <code>onSearchValueChange</code> controlam ou inicializam o texto do campo.</li>
              <li><code>onSearch</code> recebe o valor submetido e o evento de envio do Search interno.</li>
              <li><code>searchActive</code>, <code>defaultSearchActive</code> e <code>onSearchActiveChange</code> controlam a abertura da busca recolhível em telas compactas.</li>
              <li><code>searchPlaceholder</code>, <code>searchInputAriaLabel</code>, <code>searchButtonLabel</code> e <code>searchCloseButtonLabel</code> ajustam os textos da experiência de busca.</li>
              <li>A Search Bar usa por padrão o placeholder "O que você procura?", mas ele pode ser redefinido com a prop <code>searchPlaceholder</code>.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Página e responsividade">
            <p style={storyDocsStyles.statText}>
              Essas props ajustam o encaixe do Header no layout e seu comportamento em página longa.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>showScrollTopButton</code> liga ou desliga o botão fixo de retorno ao topo.</li>
              <li><code>scrollTargetId</code> define qual elemento será procurado para rolagem; se ele não existir, a janela volta ao topo.</li>
              <li><code>scrollTopButtonLabel</code> define o nome acessível do botão fixo.</li>
              <li><code>onScrollTop</code> permite sincronizar analytics ou efeitos externos depois do clique.</li>
            </ul>
          </PropsCard>
        </div>

        <SandboxExample
          title="Cabeçalho base"
          description="Exemplo de uso recomendado com identidade padrão, links principais e menu integrado sem estados controlados externamente."
          code={headerBasicExampleCode}
          notes={[
            'Use menuItems com a mesma estrutura aceita pelo MenuHamburger.',
            'O logo padrão pode ser substituído por qualquer ReactNode via prop logo.',
            'Se menuItems estiver vazio, o acionador do menu não é renderizado.',
          ]}
        >
          <HeaderBasePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Menu e busca"
        description="Menu e busca são as partes mais sensíveis do contrato porque combinam props visuais com pares controlado/não controlado. Em desktop a busca permanece aberta; abaixo do breakpoint responsivo ela passa a ser recolhível para preservar espaço horizontal."
      >
        <ul style={storyDocsStyles.list}>
              <li><code>menuOpen</code> com <code>onMenuOpenChange</code> coloca o menu em modo controlado.</li>
          <li><code>searchValue</code> com <code>onSearchValueChange</code> controla o conteúdo digitado; <code>defaultSearchValue</code> apenas define o valor inicial.</li>
          <li><code>searchActive</code> com <code>onSearchActiveChange</code> controla a abertura da busca móvel; em desktop essa prop não fecha a busca, porque o Header a mantém visível.</li>
          <li>O mesmo token CSS é usado pelo Search e pelo MenuHamburger para manter a troca de layout coerente.</li>
        </ul>

        <div style={{ ...storyDocsStyles.cardGrid, display: 'flex', flexDirection: 'column' }}>
          <StoryPreviewCard label="Menu aberto">
            <HeaderMenuOpenPreview />
          </StoryPreviewCard>

          <StoryPreviewCard label="Busca com callback">
            <HeaderSearchPreview />
          </StoryPreviewCard>
        </div>

        <SandboxExample
          title="Busca no cabeçalho"
          description="O Header repassa rótulos, valor e callback para o Search interno, mas mantém a decisão do que fazer com a busca fora do componente."
          code={headerSearchExampleCode}
          notes={[
            'onSearch recebe o termo digitado e o evento de submissão do Search interno.',
            'searchInputAriaLabel, searchButtonLabel e searchCloseButtonLabel ajudam a fechar o contrato de acessibilidade sem depender de texto fixo.',
          ]}
        >
          <HeaderSearchPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Retorno ao topo"
        description="O botão fixo é opcional e resolve um comportamento de página, não de navegação. Quando ativo, ele tenta localizar o elemento de scrollTargetId; se não encontrar, aplica scroll no topo da janela e ainda chama onScrollTop."
      >
        <div style={storyDocsStyles.sandbox}>
          <div style={storyDocsStyles.sandboxHeader}>
            <div style={{ display: 'grid', gap: 6 }}>
              <strong style={{ color: '#0f172a', fontSize: 16 }}>Botão fixo opcional</strong>
              <div style={storyDocsStyles.text}>
                Ative <code>showScrollTopButton</code> quando o cabeçalho fizer parte de páginas
                longas que precisam de retorno rápido ao início.
              </div>
            </div>
          </div>

          <div style={storyDocsStyles.sandboxBody}>
            <pre style={storyDocsStyles.codeBlock}>
              <code>{headerScrollExampleCode}</code>
            </pre>
          </div>

          <ul style={storyDocsStyles.sandboxNoteList}>
            <li>O alvo padrão é o elemento com id main.</li>
            <li>onScrollTop pode ser usado para sincronizar analytics ou estado visual externo.</li>
            <li>A visualização desse recurso está disponível no story Interativo, pois pelo comportamento absoluto do botão, ele precisa ser renderizado em um contexto real de página para funcionar corretamente.</li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard
        title="Camadas de z-index"
        description="Header e Menu Hamburger usam tokens CSS para ficar acima do conteúdo da página e de controles de edição com z-index baixo (~10), sem bloquear overlays globais configuráveis."
      >
        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>{`conteúdo da página < controles de edição (~10)
< header (10) < navegação aberta (50) < dropdown (60)
< overlay/fade (100+, configurável) < modal (110) < toast (120)`}</code>
          </pre>
        </div>

        <ul style={storyDocsStyles.list}>
          <li><code>--govrs-z-index-header</code> (10): barra do header em scroll normal.</li>
          <li><code>--govrs-z-index-navigation</code> (50): painel do menu aberto; o wrapper recebe <code>data-menu-open=&quot;true&quot;</code> e sobe para esta camada.</li>
          <li><code>--govrs-z-index-dropdown</code> (60): popovers e dropdowns do header (ex.: Select, Tooltip).</li>
          <li><code>--govrs-z-index-overlay</code> (100): fade/backdrop de tela inteira — sobrescrevível no consumidor.</li>
          <li><code>--govrs-z-index-modal</code> (110) e <code>--govrs-z-index-toast</code> (120): modais e notificações acima do overlay.</li>
        </ul>

        <div style={storyDocsStyles.codeBlock}>
          <pre>
            <code>{`:root {
  --govrs-z-index-overlay: 1000;
  --govrs-z-index-modal: 1010;
  --govrs-z-index-toast: 1020;
}

.govrs-overlay-backdrop {
}`}</code>
          </pre>
        </div>

        <ul style={storyDocsStyles.list}>
          <li>Integração com editores de blocos: com o menu aberto, links do painel ficam acima de handles de arrastar que usam z-index ~10.</li>
          <li>O botão de voltar ao topo usa <code>--govrs-z-index-toast</code> para permanecer acessível em páginas longas.</li>
        </ul>
      </SectionCard>

      <SectionCard
        title="Limites do contrato"
        description="O Header resolve a composição visual do topo, mas ainda depende de quem o consome para decidir links, logo customizado e a integração final com o layout da página."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>logo</code> troca só o conteúdo visual do link do símbolo; o destino e o nome acessível continuam sendo definidos por <code>logoHref</code> e <code>logoAriaLabel</code>.</li>
          <li>Se você precisar de mais customização estrutural do menu ou da busca, o ponto de extensão tende a estar nos componentes <code>MenuHamburger</code> e <code>Search</code>, não em variações ad hoc do Header.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const BarraEstadoDoc: Story = {
  name: 'Barra Estado',
  parameters: { controls: { disable: true } },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Barra Estado</h3>}
        description={
          <>
            A Barra Estado é a faixa institucional superior com links rápidos e
            identidade reduzida do governo. O contrato atual é propositalmente enxuto.
          </>
        }
        variantTags={barraEstadoDocsVariantTags}
        stats={barraEstadoDocsHeroStats}
      />

      <SectionCard
        title="Mapa de props"
        description="Hoje a Barra Estado expõe uma API pequena. Isso facilita o uso, mas também significa que boa parte do conteúdo visual permanece fixa para preservar fidelidade ao componente original migrado."
      >
        <div style={storyDocsStyles.cardGrid}>
          

          <PropsCard label="Conteúdo fixo">
            <p style={storyDocsStyles.statText}>
              Os links e rótulos da barra são fixos nesta migração para preservar o contrato institucional do componente original.
            </p>

            <ul style={storyDocsStyles.list}>
              <li>Não há props para trocar títulos, URLs ou itens do menu.</li>
              <li>Use a Barra Estado como faixa institucional pronta, e não como um menu configurável genérico.</li>
            </ul>
          </PropsCard>
        </div>

        <SandboxExample
          title="Uso básico"
          description="A forma recomendada de consumo é renderizar a barra no topo da página ou acima do Header principal, sem precisar configurar outros dados."
          code={barraEstadoExampleCode}
          notes={[
            'Os links institucionais fazem parte do contrato visual desta barra e não são montados por props.',
          ]}
        >
          <BarraEstado />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Comportamento responsivo e limites"
        description="A Barra Estado resolve uma necessidade bem específica: oferecer navegação institucional rápida sem competir com o Header principal. Ela deve ser tratada como uma faixa pronta, não como uma navegação totalmente customizável."
      >
        <ul style={storyDocsStyles.list}>
          <li>Em desktop, os links aparecem distribuídos em linha na própria faixa.</li>
          <li>Em larguras menores, os itens deixam de ficar todos visíveis ao mesmo tempo e passam a ser acessados pelo menu compacto acionado por <strong>•••</strong>.</li>
          <li>Como o conteúdo é fixo, customizações de negócio devem acontecer na camada de composição da página, não por extensão desta barra.</li>
          <li>O uso mais comum é compor Barra Estado acima de Barra Acessibilidade e Header, como no story Interativo.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const BarraAcessibilidadeDoc: Story = {
  name: 'Barra Acessibilidade',
  parameters: { controls: { disable: true } },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Barra Acessibilidade</h3>}
        description={
          <>
            A Barra Acessibilidade combina atalhos numerados, botão de alto contraste
            e links auxiliares em uma faixa superior pronta para compor o topo da página.
          </>
        }
        variantTags={barraAcessibilidadeDocsVariantTags}
        stats={barraAcessibilidadeDocsHeroStats}
      />

      <SectionCard
        title="Mapa de props"
        description="As props da Barra Acessibilidade se dividem em três grupos: atalhos numerados, estado inicial do alto contraste e rotas auxiliares opcionais."
      >
        <div style={storyDocsStyles.cardGrid}>
          <PropsCard label="shortcuts">
            <p style={storyDocsStyles.statText}>
              Define todos os atalhos numerados exibidos no lado direito da barra.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>shortcuts</code> recebe um array de objetos <code>{'{ title: string; href: string }'}</code>.</li>
              <li>Links com hash rolam para um elemento da página; outras URLs navegam normalmente.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Links auxiliares">
            <p style={storyDocsStyles.statText}>
              Os links institucionais extras são independentes entre si e só aparecem quando a prop correspondente é declarada.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>hrefAccessibility</code> renderiza o item de acessibilidade com ícone universal.</li>
              <li><code>hrefContact</code> renderiza o ícone de envelope para contato.</li>
              <li><code>hrefSitemap</code> renderiza o ícone de sitemap.</li>
              <li>Se uma dessas props não for informada, o item correspondente não aparece.</li>
            </ul>
          </PropsCard>

          <PropsCard label="Alto contraste">
            <p style={storyDocsStyles.statText}>
              Na aplicação consumidora, o botão alterna o estado global e preserva a preferência. No Storybook, o contraste é controlado pela story.
            </p>

            <ul style={storyDocsStyles.list}>
              <li><code>defaultHighContrast</code> define o estado inicial quando não há preferência persistida.</li>
              <li><code>disableHighContrastToggle</code> desabilita o botão e impede leitura, gravação e alteração do estado global.</li>
            </ul>
          </PropsCard>
        </div>

        <SandboxExample
          title="Configuração completa"
          description="Exemplo recomendado quando a página precisa expor atalhos numerados, contraste e todas as rotas auxiliares da barra."
          code={barraAcessibilidadeExampleCode}
          notes={[
            'Se o terceiro atalho usar hash, o comportamento preservado tenta focar o elemento antes de rolar até ele.',
            'Na aplicação consumidora, o botão de contraste mantém a preferência do usuário em localStorage para reutilização entre visitas.',
            'Nesta documentação, o botão permanece isolado; use modoContraste na story Interativo para visualizar o tema.',
          ]}
        >
          <BarraAcessibilidade
            disableHighContrastToggle
            shortcuts={[
              { title: 'Conteúdo', href: '#conteudo' },
              { title: 'Menu', href: '#menu' },
              { title: 'Busca', href: '#buscar' },
            ]}
            hrefAccessibility="/acessibilidade"
            hrefContact="/contato"
            hrefSitemap="/sitemap"
          />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Configuração parcial e limites"
        description="A barra aceita combinações parciais. Isso significa que você pode esconder links auxiliares ou atalhos simplesmente omitindo props, sem precisar passar valores vazios ou flags extras."
      >
        <SandboxExample
          title="Rotas personalizadas"
          description="Exemplo mostrando uma configuração reduzida, com atalhos parciais e apenas parte dos links auxiliares declarada."
          code={barraAcessibilidadeRoutesExampleCode}
          notes={[
            'Sem shortcuts, a barra deixa de renderizar os atalhos numerados.',
            'Sem hrefAccessibility, hrefContact ou hrefSitemap, o item correspondente não aparece.',
            'Na aplicação consumidora, a barra resolve a interação de alto contraste globalmente; o efeito visual final depende da folha global que estiliza a classe high-contrast.',
            'Para visualizar o contraste no Storybook, abra uma story Interativo e ative o switch modoContraste no painel de Controls. A prévia fica isolada, sem ler ou persistir a preferência no localStorage.',
          ]}
        >
          <BarraAcessibilidade
            disableHighContrastToggle
            shortcuts={[
              { title: 'Conteúdo', href: '#conteudo' },
              { title: 'Busca', href: '#buscar' },
            ]}
            hrefContact="/contato"
            hrefSitemap="/sitemap"
          />
        </SandboxExample>

        <ul style={storyDocsStyles.list}>
          <li>Use hashes em <code>shortcuts</code> quando quiser rolar até partes da mesma página; use URLs absolutas ou relativas quando a navegação precisar sair do contexto atual.</li>
          <li>A barra não recebe props para customizar ícones ou o texto do botão de contraste; esse contrato permanece fixo para manter consistência institucional.</li>
          <li>Na aplicação consumidora, o contraste é aplicado globalmente via classe e atributo em <code>document.documentElement</code>; o restante da aplicação precisa conhecer e estilizar esse estado para o efeito visual acontecer.</li>
          <li>No Storybook, use o switch <code>modoContraste</code> das stories Interativo para conferir fundos pretos, bordas brancas, textos e ícones funcionais brancos, mantendo imagens, vídeos e mapas sem alterações. Esse control atua somente na prévia; a Barra de Acessibilidade fica em modo passivo, sem alterar documento, evento ou localStorage.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const HeaderInterativo: Story = {
  name: 'Interativo',
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'none',
      include: [
        'modoContraste',
        'barraAcessibilidadeShortcuts',
        'barraAcessibilidadeHrefAccessibility',
        'barraAcessibilidadeHrefContact',
        'barraAcessibilidadeHrefSitemap',
        'siteTitle',
        'homeHref',
        'logoHref',
        'logoAriaLabel',
        'showScrollTopButton',
        'scrollTargetId',
        'scrollTopButtonLabel',
        
        'menuItems',
        'menuOpen',

        'onMenuOpenChange',
        'searchValue',
        'defaultSearchValue',
        'defaultSearchActive',
        'searchPlaceholder',
        'searchInputAriaLabel',
        'searchButtonLabel',
        'searchCloseButtonLabel',
        'onSearch',
        'onSearchValueChange',
        'onSearchActiveChange',
        'onScrollTop',
      ],
    },
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    // BarraEstado props

    // BarraAcessibilidade props
    barraAcessibilidadeShortcuts: { control: 'object', table: { category: 'BarraAcessibilidade' } },
    barraAcessibilidadeHrefAccessibility: { control: 'text', table: { category: 'BarraAcessibilidade' } },
    barraAcessibilidadeHrefContact: { control: 'text', table: { category: 'BarraAcessibilidade' } },
    barraAcessibilidadeHrefSitemap: { control: 'text', table: { category: 'BarraAcessibilidade' } },

    // Header props
    siteTitle: { control: 'text', table: { category: 'Header' } },
    homeHref: { control: 'text', table: { category: 'Header' } },
    logoHref: { control: 'text', table: { category: 'Header' } },
    logoAriaLabel: { control: 'text', table: { category: 'Header' } },
    showScrollTopButton: { control: 'boolean', table: { category: 'Header' } },
    scrollTargetId: { control: 'text', table: { category: 'Header' } },
    scrollTopButtonLabel: { control: 'text', table: { category: 'Header' } },
    
    onScrollTop: { action: 'scroll top', table: { category: 'Header' } },

    // MenuHamburger props
    menuItems: { control: 'object', table: { category: 'MenuHamburger' } },
    menuOpen: { control: 'boolean', table: { category: 'MenuHamburger' } },
    
    onMenuOpenChange: { action: 'menu open change', table: { category: 'MenuHamburger' } },

    // Search props
    searchValue: { control: 'text', table: { category: 'Search' } },
    defaultSearchValue: { control: 'text', table: { category: 'Search' } },
    defaultSearchActive: { control: 'boolean', table: { category: 'Search' } },
    searchPlaceholder: { control: 'text', table: { category: 'Search' } },
    searchInputAriaLabel: { control: 'text', table: { category: 'Search' } },
    searchButtonLabel: { control: 'text', table: { category: 'Search' } },
    searchCloseButtonLabel: { control: 'text', table: { category: 'Search' } },
    onSearch: { action: 'searched', table: { category: 'Search' } },
    onSearchValueChange: { action: 'search value change', table: { category: 'Search' } },
    onSearchActiveChange: { action: 'search active change', table: { category: 'Search' } },
  } as any,
  render: (args) => <HeaderInteractivePreview {...args} />,
}