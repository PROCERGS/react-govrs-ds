import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import { Carousel } from './Carousel';
import type { CarouselCardItem, CarouselCardProps } from './CarouselCard';
import type { CarouselDefaultItem, CarouselDefaultProps } from './CarouselDefault';
import './CarouselCard.scss';
import './CarouselDefault.scss';
import '../../foundations/styles/index.scss';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultItems: CarouselDefaultItem[] = [
  {
    title: 'Banner 1',
    description: 'Descrição curta do primeiro banner.',
    image: 'https://picsum.photos/1200/500?random=1',
  },
  {
    title: 'Banner 2',
    description: 'Outro destaque com texto resumido.',
    image: 'https://picsum.photos/1200/500?random=2',
  },
  {
    title: 'Banner 3',
    description: 'Exemplo de slide com vídeo (YouTube).',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

const cardItemsPost: CarouselCardItem[] = [
  {
    title: 'Post 1',
    description: 'Conteúdo de post ou lista.',
    image: 'https://picsum.photos/400/240?random=12',
    variant: 'post',
    href: '#',
    acao: { label: 'Ler mais', url: '#' },
  },
  {
    title: 'Post 2',
    description: 'Para testar quebra em mais slides.',
    image: 'https://picsum.photos/400/240?random=15',
    variant: 'post',
  },
  {
    title: 'Post 3',
    description: 'Outro exemplo de post.',
    image: 'https://picsum.photos/400/240?random=25',
    variant: 'post',
  },
  {
    title: 'Post 4',
    description: 'Conteúdo extra para teste.',
    image: 'https://picsum.photos/400/240?random=32',
    variant: 'post',
  },
  {
    title: 'Post 5',
    description: 'Conteúdo extra para teste.',
    image: 'https://picsum.photos/400/240?random=33',
    variant: 'post',
  },
  {
    title: 'Post 6',
    description: 'Conteúdo extra para teste.',
    image: 'https://picsum.photos/400/240?random=34',
    variant: 'post',
  },
  {
    title: 'Post 7',
    description: 'Conteúdo extra para teste.',
    image: 'https://picsum.photos/400/240?random=35',
    variant: 'post',
  },
];

const cardItemsList: CarouselCardItem[] = [
  {
    title: 'Lista 1',
    description: 'Com itens adicionais.',
    image: 'https://picsum.photos/400/240?random=14',
    variant: 'list',
    itens: [
      { value: 'Primeiro' },
      { value: 'Segundo' },
      { value: 'Terceiro' },
      { value: 'Quarto' },
      { value: 'Quinto' },
      { value: 'Sexto' },
      { value: 'Sétimo' },
    ],
  },
  {
    title: 'Lista 2',
    description: 'Outra lista de itens.',
    image: 'https://picsum.photos/400/240?random=34',
    variant: 'list',
    itens: [
      { value: 'Item A' },
      { value: 'Item B' },
      { value: 'Item C' },
      { value: 'Item D' },
      { value: 'Item E' },
      { value: 'Item F' },
      { value: 'Item G' },
    ],
  },
  {
    title: 'Lista 3',
    description: 'Mais itens para teste.',
    image: 'https://picsum.photos/400/240?random=35',
    variant: 'list',
    itens: [
      { value: 'Um' },
      { value: 'Dois' },
      { value: 'Três' },
      { value: 'Quatro' },
      { value: 'Cinco' },
      { value: 'Seis' },
      { value: 'Sete' },
    ],
  },
  {
    title: 'Lista 4',
    description: 'Lista adicional para completar 7 itens.',
    image: 'https://picsum.photos/400/240?random=36',
    variant: 'list',
    itens: [
      { value: 'A' },
      { value: 'B' },
      { value: 'C' },
      { value: 'D' },
      { value: 'E' },
      { value: 'F' },
      { value: 'G' },
    ],
  },
  {
    title: 'Lista 5',
    description: 'Lista adicional para completar 7 itens.',
    image: 'https://picsum.photos/400/240?random=37',
    variant: 'list',
    itens: [
      { value: '1' },
      { value: '2' },
      { value: '3' },
      { value: '4' },
      { value: '5' },
      { value: '6' },
      { value: '7' },
    ],
  },
  {
    title: 'Lista 6',
    description: 'Lista adicional para completar 7 itens.',
    image: 'https://picsum.photos/400/240?random=38',
    variant: 'list',
    itens: [
      { value: 'I' },
      { value: 'II' },
      { value: 'III' },
      { value: 'IV' },
      { value: 'V' },
      { value: 'VI' },
      { value: 'VII' },
    ],
  },
  {
    title: 'Lista 7',
    description: 'Lista adicional para completar 7 itens.',
    image: 'https://picsum.photos/400/240?random=39',
    variant: 'list',
    itens: [
      { value: 'Alpha' },
      { value: 'Beta' },
      { value: 'Gamma' },
      { value: 'Delta' },
      { value: 'Epsilon' },
      { value: 'Zeta' },
      { value: 'Eta' },
    ],
  },
];

const cardItemsNews: CarouselCardItem[] = [
  {
    title: 'Notícia 1',
    description: 'Resumo rápido da matéria.',
    image: 'https://picsum.photos/400/240?random=11',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Notícia 2',
    description: 'Chamada de destaque.',
    image: 'https://picsum.photos/400/240?random=21',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Notícia 3',
    description: 'Mais um exemplo de notícia.',
    image: 'https://picsum.photos/400/240?random=22',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Notícia 4',
    description: 'Notícia extra para teste.',
    image: 'https://picsum.photos/400/240?random=23',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Notícia 5',
    description: 'Notícia extra para teste.',
    image: 'https://picsum.photos/400/240?random=24',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Notícia 6',
    description: 'Notícia extra para teste.',
    image: 'https://picsum.photos/400/240?random=25',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Notícia 7',
    description: 'Notícia extra para teste.',
    image: 'https://picsum.photos/400/240?random=26',
    variant: 'news',
    href: '#',
  },
];

const cardItemsIcon: CarouselCardItem[] = [
  {
    title: 'Ícone 1',
    description: 'Cartão focado em ícone.',
    image: 'https://picsum.photos/160/160?random=13',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Ícone 2',
    description: 'Outro cartão de ícone.',
    image: 'https://picsum.photos/160/160?random=23',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Ícone 3',
    description: 'Mais um cartão de ícone.',
    image: 'https://picsum.photos/160/160?random=24',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Ícone 4',
    description: 'Ícone extra.',
    image: 'https://picsum.photos/160/160?random=25',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Ícone 5',
    description: 'Ícone extra.',
    image: 'https://picsum.photos/160/160?random=26',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Ícone 6',
    description: 'Ícone extra.',
    image: 'https://picsum.photos/160/160?random=27',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Ícone 7',
    description: 'Ícone extra.',
    image: 'https://picsum.photos/160/160?random=28',
    variant: 'icon',
    href: '#',
  },
];

const cardItemsByVariant: Record<NonNullable<CarouselCardProps['cardVariant']>, CarouselCardItem[]> = {
  post: cardItemsPost,
  list: cardItemsList,
  news: cardItemsNews,
  icon: cardItemsIcon,
};

type DefaultStoryArgs = CarouselDefaultProps & { variante?: 'default' };
type CardStoryArgs = CarouselCardProps & { variante: 'card' };

const carouselPreviewSurfaceStyle = {
  ...storyDocsStyles.previewStage,
  padding: 16,
};

const carouselPreviewInnerStyle = {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
};

const defaultUsageCode = `<Carousel
  variante="default"
  data={defaultItems}
  autoplay
  autoplaySpeed={4000}
  circular
  width="default"
  indicators="inside"
  enableSwipe
  noArrowsMobile={false}
/>`;

const defaultDataCode = `data={[
  {
    title: 'Banner',
    description: 'Texto opcional',
    image: 'https://...'
  },
  {
    title: 'Video',
    videoUrl: 'https://www.youtube.com/watch?v=...'
  }
]}`;

const cardUsageCode = `<Carousel
  variante="card"
  cardVariant="news"
  items={cardItemsNews}
  cardsPerView={3}
  cardsPerViewTablet={2}
  cardsPerViewMobile={1}
  gap={16}
  showIndicators
  showArrows
/>`;

const cardDataCode = `items={[
  {
    title: 'Notícia',
    description: 'Resumo',
    image: 'https://...',
    variant: 'news',
    href: '#'
  },
  {
    title: 'Lista',
    description: 'Com itens',
    image: 'https://...',
    variant: 'list',
    itens: [{ value: 'Item 1' }, { value: 'Item 2' }]
  }
]}`;

const cardResponsiveCode = `<Carousel
  variante="card"
  cardVariant="post"
  items={cardItemsPost}
  cardsPerView={3}
  cardsPerViewTablet={2}
  cardsPerViewMobile={1}
  gap={16}
  autoplay={false}
  circular
  showIndicators
  showArrows
/>`;

function getCardDataset(cardVariant?: CarouselCardProps['cardVariant']) {
  if (!cardVariant) {
    return cardItemsPost;
  }

  return cardItemsByVariant[cardVariant] || cardItemsPost;
}

function renderDefaultCarousel(args: DefaultStoryArgs) {
  return (
    <div style={carouselPreviewSurfaceStyle}>
      <div style={carouselPreviewInnerStyle}>
        <Carousel {...args} variante="default" />
      </div>
    </div>
  );
}

function renderCardCarousel(args: CardStoryArgs) {
  const { cardVariant = 'post' } = args;
  const dataset = getCardDataset(cardVariant);

  return (
    <div style={carouselPreviewSurfaceStyle}>
      <div style={carouselPreviewInnerStyle}>
        <Carousel {...args} variante="card" items={dataset} cardVariant={cardVariant} />
      </div>
    </div>
  );
}

export const DefaultDocs: Story = {
  name: 'Default - Documentação',
  args: {
    variante: 'default',
    data: defaultItems,
    autoplay: true,
    autoplaySpeed: 4000,
    circular: true,
    width: 'default',
    indicators: 'inside',
    enableSwipe: true,
    noArrowsMobile: false,
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => {
    const defaultArgs = args as DefaultStoryArgs;

    return (
      <DocsStoryLayout>
        <DocsHero
          eyebrow="Variante default"
          title={<h3 style={storyDocsStyles.heroTitle}>Carousel default</h3>}
          description={
            <>
              A variante default trabalha com um item por vez e é a opção certa
              para destaque visual, banners e slides com imagem ou vídeo. Ela
              aceita dados em <code>data</code> ou <code>items</code>, desde que
              o valor final seja um array simples de itens.
            </>
          }
          stats={[
            {
              title: 'Foco principal',
              text: 'Um slide por vez com destaque visual amplo e navegação simples.',
            },
            {
              title: 'Mídias aceitas',
              text: 'Imagens, vídeos do YouTube, Vimeo e fontes diretas em videoUrl.',
            },
            {
              title: 'Configuração mais comum',
              text: 'Autoplay ativo, indicadores inside e width default para destaque editorial.',
            },
          ]}
        />

        <SectionCard
          title="Quando usar"
          description="Escolha a variante default quando o conteúdo pede leitura de um item por vez e a prioridade é destacar mídia e mensagem principal, não uma grade de cards."
        >
          <ul style={storyDocsStyles.list}>
            <li>Use para banners de home, destaques de campanha e chamadas com imagem ampla.</li>
            <li>O componente mantém setas, indicadores e swipe como controles independentes.</li>
            <li>Com <code>circular={false}</code>, a navegação bloqueia nas extremidades.</li>
          </ul>

          <SandboxExample
            title="Exemplo recomendado"
            description="Configuração comum para um carousel de destaque com autoplay e indicadores internos."
            code={defaultUsageCode}
            notes={[
              'Os itens podem conter image, title e description, ou apenas videoUrl para mídia embarcada.',
              'Se o array vier vazio, o componente mostra o empty state interno do carousel default.',
            ]}
          >
            {renderDefaultCarousel(defaultArgs)}
          </SandboxExample>
        </SectionCard>

        <SectionCard
          title="Estrutura de dados e mídias"
          description="O contrato da variante default foi simplificado para arrays diretos. O formato legado data.items nao faz mais parte da API do design system."
        >
          <ul style={storyDocsStyles.list}>
            <li><code>data</code> e <code>items</code> aceitam arrays de objetos com <code>title</code>, <code>description</code>, <code>image</code> e <code>videoUrl</code>.</li>
            <li>Quando <code>videoUrl</code> aponta para YouTube ou Vimeo, o componente aplica o tratamento específico para embed.</li>
            <li><code>imageAlt</code> pode ser usado para complementar acessibilidade quando a imagem exigir descrição específica.</li>
          </ul>

          <SandboxExample
            title="Shape mínimo dos itens"
            description="Exemplo direto do formato esperado na camada pública da variante default."
            code={defaultDataCode}
            notes={[
              'A story usa uma combinação de slides com imagem e vídeo para exercitar os dois caminhos principais do componente.',
            ]}
          >
            {renderDefaultCarousel({
              ...defaultArgs,
              autoplay: false,
              indicators: 'numbers',
            })}
          </SandboxExample>
        </SectionCard>

        <SectionCard
          title="Configurações principais"
          description="As props top-level controlam navegação, ritmo do autoplay, largura visual e interação touch sem exigir adaptadores externos."
        >
          <ul style={storyDocsStyles.list}>
            <li><code>autoplay</code> e <code>autoplaySpeed</code> controlam avanço automático entre slides.</li>
            <li><code>width</code> alterna entre conteúdo com largura padrão e a leitura full do slide.</li>
            <li><code>indicators</code> aceita <code>default</code>, <code>inside</code> e <code>numbers</code>.</li>
            <li><code>enableSwipe</code> e <code>noArrowsMobile</code> permitem ajustar a experiência em telas menores.</li>
          </ul>
        </SectionCard>

        <SectionCard
          title="Limitações e observações"
          description="A variante default continua intencionalmente focada em destaque de um item por vez e não substitui galerias multi-coluna nem listas de cards."
        >
          <ul style={storyDocsStyles.list}>
            <li>O formato antigo <code>data.items</code> não deve ser reutilizado nas integrações novas.</li>
            <li>Autoplay não avança quando existe apenas um item válido.</li>
            <li>Ao desativar <code>circular</code>, as setas ficam bloqueadas no primeiro e no último slide.</li>
          </ul>
        </SectionCard>
      </DocsStoryLayout>
    );
  },
};

export const DefaultInterativo: Story = {
  name: 'Default - Interativo',
  args: {
    variante: 'default',
    data: defaultItems,
    autoplay: false,
    autoplaySpeed: 4000,
    circular: true,
    width: 'default',
    indicators: 'default',
    enableSwipe: true,
    noArrowsMobile: false,
  },
  argTypes: {
    variante: {
      control: false,
      table: { disable: true },
    },
    data: {
      control: false,
      table: { disable: true },
    },
    items: {
      control: false,
      table: { disable: true },
    },
    autoplay: {
      control: 'boolean',
      description: 'Liga ou desliga o avanço automático entre slides.',
      table: { category: 'Comportamento' },
    },
    autoplaySpeed: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Intervalo do autoplay em milissegundos.',
      table: { category: 'Comportamento' },
    },
    circular: {
      control: 'boolean',
      description: 'Permite loop infinito entre primeiro e último slide.',
      table: { category: 'Comportamento' },
    },
    width: {
      control: { type: 'inline-radio' },
      options: ['default', 'full'],
      description: 'Ajusta a largura visual do conteúdo.',
      table: { category: 'Layout' },
    },
    indicators: {
      control: { type: 'select' },
      options: ['default', 'inside', 'numbers'],
      description: 'Posicionamento ou formato dos indicadores.',
      table: { category: 'Layout' },
    },
    enableSwipe: {
      control: 'boolean',
      description: 'Ativa navegação por swipe em dispositivos touch.',
      table: { category: 'Interação' },
    },
    noArrowsMobile: {
      control: 'boolean',
      description: 'Esconde as setas em telas pequenas.',
      table: { category: 'Interação' },
    },
  },
  render: (args) => renderDefaultCarousel(args as DefaultStoryArgs),
};

export const CardDocs: Story = {
  name: 'Card - Documentação',
  args: {
    variante: 'card',
    cardVariant: 'news',
    items: cardItemsNews,
    cardsPerView: 3,
    cardsPerViewTablet: 2,
    cardsPerViewMobile: 1,
    gap: 16,
    autoplay: false,
    circular: true,
    showIndicators: true,
    showArrows: true,
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => {
    const cardArgs = args as CardStoryArgs;

    return (
      <DocsStoryLayout>
        <DocsHero
          eyebrow="Variante card"
          title={<h3 style={storyDocsStyles.heroTitle}>Carousel card</h3>}
          description={
            <>
              A variante card agrupa itens em slides responsivos e reaproveita o
              contrato visual do componente <code>Card</code>. Ela foi pensada
              para listar notícias, posts, listas e cartões com ícone dentro de
              um fluxo de navegação horizontal.
            </>
          }
          stats={[
            {
              title: 'Foco principal',
              text: 'Listar múltiplos cards por slide sem perder controle sobre responsividade e navegação.',
            },
            {
              title: 'Override útil',
              text: 'cardVariant pode forçar todos os itens a renderizarem com a mesma variante de Card.',
            },
            {
              title: 'Configuração mais comum',
              text: 'cardsPerView=3 no desktop, 2 no tablet, 1 no mobile e indicadores ativos.',
            },
          ]}
        />

        <SectionCard
          title="Quando usar"
          description="A variante card é adequada para coleções editoriais e vitrines de conteúdo em que o usuário precisa comparar vários itens por slide."
        >
          <ul style={storyDocsStyles.list}>
            <li>Use para notícias, posts, listas de serviços ou cards com ícone.</li>
            <li>O componente define grupos de cards por slide de acordo com o breakpoint ativo.</li>
            <li>Quando houver apenas um slide, indicadores e setas deixam de ser necessários visualmente.</li>
          </ul>

          <SandboxExample
            title="Exemplo recomendado"
            description="Configuração comum com variante news e distribuição responsiva de cards por slide."
            code={cardUsageCode}
            notes={[
              'A história interativa troca automaticamente o dataset conforme o valor de cardVariant.',
              'Com poucos itens, o número real de slides pode diminuir e os controles visuais se ajustam a isso.',
            ]}
          >
            {renderCardCarousel(cardArgs)}
          </SandboxExample>
        </SectionCard>

        <SectionCard
          title="Estrutura dos items"
          description="Cada item aceita as mesmas props centrais de Card, com alias adicionais heading, text e url para facilitar tradução de contratos anteriores."
        >
          <ul style={storyDocsStyles.list}>
            <li><code>items</code> recebe objetos compatíveis com <code>Card</code>, incluindo <code>variant</code>, <code>image</code>, <code>href</code>, <code>itens</code> e ações.</li>
            <li>Quando <code>cardVariant</code> está presente, ele sobrescreve o <code>variant</code> individual de cada item.</li>
            <li>O dataset pode variar entre <code>post</code>, <code>list</code>, <code>news</code> e <code>icon</code> sem mudar o wrapper <code>Carousel</code>.</li>
          </ul>

          <SandboxExample
            title="Shape de items compatíveis com Card"
            description="Exemplo de como montar o array da variante card mantendo o contrato independente de aplicação consumidora."
            code={cardDataCode}
            notes={[
              'A combinação entre items e cardVariant permite tanto dados heterogêneos quanto uma grade visual uniforme.',
            ]}
          >
            {renderCardCarousel({
              ...cardArgs,
              cardVariant: 'list',
            })}
          </SandboxExample>
        </SectionCard>

        <SectionCard
          title="Responsividade e navegação"
          description="A variante card recalcula quantos itens entram em cada slide com base na largura da viewport e depois divide o array em grupos correspondentes."
        >
          <ul style={storyDocsStyles.list}>
            <li><code>cardsPerView</code> controla o desktop; <code>cardsPerViewTablet</code> e <code>cardsPerViewMobile</code> ajustam tablet e mobile.</li>
            <li>Os breakpoints atuais consideram mobile abaixo de 640px e tablet abaixo de 1024px.</li>
            <li><code>gap</code> é normalizado para a escala suportada internamente pelo componente.</li>
            <li><code>showIndicators</code> e <code>showArrows</code> controlam a exposição dos mecanismos de navegação.</li>
          </ul>

          <SandboxExample
            title="Configuração responsiva"
            description="Base mínima para controlar quantidade por slide e ritmo de navegação da variante card."
            code={cardResponsiveCode}
          >
            {renderCardCarousel({
              ...cardArgs,
              cardVariant: 'post',
              cardsPerView: 3,
              cardsPerViewTablet: 2,
              cardsPerViewMobile: 1,
              gap: 16,
            })}
          </SandboxExample>
        </SectionCard>

        <SectionCard
          title="Limitações e observações"
          description="A variante card organiza listas de cards, mas continua dependendo do contrato do componente Card e de datasets locais coerentes para uma experiência consistente."
        >
          <ul style={storyDocsStyles.list}>
            <li>Se <code>items</code> vier vazio, o componente mostra o empty state interno do carousel card.</li>
            <li>Com <code>showArrows</code> ou <code>showIndicators</code> ativos, o componente ainda pode ocultar esses controles quando existe apenas um slide.</li>
            <li>Gap fora da escala suportada é aproximado para o valor mais próximo previsto pela implementação.</li>
          </ul>
        </SectionCard>
      </DocsStoryLayout>
    );
  },
};

export const CardInterativo: Story = {
  name: 'Card - Interativo',
  args: {
    variante: 'card',
    cardVariant: 'post',
    items: cardItemsPost,
    cardsPerView: 2,
    cardsPerViewTablet: 2,
    cardsPerViewMobile: 1,
    gap: 12,
    autoplay: false,
    autoplaySpeed: 5000,
    circular: true,
    showIndicators: true,
    showArrows: true,
  },
  argTypes: {
    variante: {
      control: false,
      table: { disable: true },
    },
    items: {
      control: false,
      table: { disable: true },
    },
    cardVariant: {
      control: { type: 'select' },
      options: ['post', 'list', 'news', 'icon'],
      description: 'Força todos os cards a usarem a mesma variante visual.',
      table: { category: 'Conteudo' },
    },
    cardsPerView: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Número de cards por slide em desktop.',
      table: { category: 'Layout responsivo' },
    },
    cardsPerViewTablet: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
      description: 'Número de cards por slide em tablet.',
      table: { category: 'Layout responsivo' },
    },
    cardsPerViewMobile: {
      control: { type: 'number', min: 1, max: 2, step: 1 },
      description: 'Número de cards por slide em mobile.',
      table: { category: 'Layout responsivo' },
    },
    gap: {
      control: { type: 'number', min: 0, max: 64, step: 2 },
      description: 'Espaço entre cards em pixels antes da normalização interna.',
      table: { category: 'Layout responsivo' },
    },
    autoplay: {
      control: 'boolean',
      description: 'Liga ou desliga o autoplay entre grupos de cards.',
      table: { category: 'Comportamento' },
    },
    autoplaySpeed: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Intervalo do autoplay em milissegundos.',
      table: { category: 'Comportamento' },
    },
    circular: {
      control: 'boolean',
      description: 'Permite loop infinito entre os grupos de cards.',
      table: { category: 'Comportamento' },
    },
    showIndicators: {
      control: 'boolean',
      description: 'Exibe ou oculta indicadores de slide.',
      table: { category: 'Navegacao' },
    },
    showArrows: {
      control: 'boolean',
      description: 'Exibe ou oculta setas laterais.',
      table: { category: 'Navegacao' },
    },
  },
  render: (args) => renderCardCarousel(args as CardStoryArgs),
};
