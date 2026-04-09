import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import type { CarouselCardItem, CarouselCardProps } from './CarouselCard';
import type { CarouselDefaultItem } from './CarouselDefault';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    variante: {
      control: { type: 'radio' },
      options: ['default', 'card'],
      description: 'Escolhe qual variante renderizar.',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultItems: CarouselDefaultItem[] = [
  {
    title: 'Banner 1',
    description: 'Descricao curta do primeiro banner.',
    image: 'https://picsum.photos/1200/500?random=1',
  },
  {
    title: 'Banner 2',
    description: 'Outro destaque com texto resumido.',
    image: 'https://picsum.photos/1200/500?random=2',
  },
  {
    title: 'Banner 3',
    description: 'Exemplo de slide com video (YouTube).',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

const cardItemsPost: CarouselCardItem[] = [
  {
    title: 'Post 1',
    description: 'Conteudo de post ou lista.',
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
    description: 'Conteudo extra para teste.',
    image: 'https://picsum.photos/400/240?random=32',
    variant: 'post',
  },
  {
    title: 'Post 5',
    description: 'Conteudo extra para teste.',
    image: 'https://picsum.photos/400/240?random=33',
    variant: 'post',
  },
  {
    title: 'Post 6',
    description: 'Conteudo extra para teste.',
    image: 'https://picsum.photos/400/240?random=34',
    variant: 'post',
  },
  {
    title: 'Post 7',
    description: 'Conteudo extra para teste.',
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
      { value: 'Setimo' },
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
      { value: 'Tres' },
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
    title: 'Noticia 1',
    description: 'Resumo rapido da materia.',
    image: 'https://picsum.photos/400/240?random=11',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Noticia 2',
    description: 'Chamada de destaque.',
    image: 'https://picsum.photos/400/240?random=21',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Noticia 3',
    description: 'Mais um exemplo de noticia.',
    image: 'https://picsum.photos/400/240?random=22',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Noticia 4',
    description: 'Noticia extra para teste.',
    image: 'https://picsum.photos/400/240?random=23',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Noticia 5',
    description: 'Noticia extra para teste.',
    image: 'https://picsum.photos/400/240?random=24',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Noticia 6',
    description: 'Noticia extra para teste.',
    image: 'https://picsum.photos/400/240?random=25',
    variant: 'news',
    href: '#',
  },
  {
    title: 'Noticia 7',
    description: 'Noticia extra para teste.',
    image: 'https://picsum.photos/400/240?random=26',
    variant: 'news',
    href: '#',
  },
];

const cardItemsIcon: CarouselCardItem[] = [
  {
    title: 'Icone 1',
    description: 'Cartao focado em icone.',
    image: 'https://picsum.photos/160/160?random=13',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Icone 2',
    description: 'Outro cartao de icone.',
    image: 'https://picsum.photos/160/160?random=23',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Icone 3',
    description: 'Mais um cartao de icone.',
    image: 'https://picsum.photos/160/160?random=24',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Icone 4',
    description: 'Icone extra.',
    image: 'https://picsum.photos/160/160?random=25',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Icone 5',
    description: 'Icone extra.',
    image: 'https://picsum.photos/160/160?random=26',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Icone 6',
    description: 'Icone extra.',
    image: 'https://picsum.photos/160/160?random=27',
    variant: 'icon',
    href: '#',
  },
  {
    title: 'Icone 7',
    description: 'Icone extra.',
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

export const DefaultDocs: Story = {
  name: 'Default Docs',
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
  render: (args) => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 0' }}>
      <h1>Carousel — Variante Default</h1>

      <div style={{ marginTop: 12 }}>
        <Carousel {...args} />
      </div>

      <p style={{ margin: '12px 0' }}>
        Use a prop <code>variante</code> para alternar entre a versao padrao
        (default) e a versao de cards. Os <code>items</code> continuam na mesma
        estrutura do bloco original, agora diretamente em <code>data</code>{' '}
        (array). A prop <code>items</code>
        tambem aceita um array, mas o formato antigo <code>data.items</code> foi
        removido.
      </p>
      <section style={{ margin: '12px 0' }}>
        <h3>Props de controle (top-level)</h3>
        <ul>
          <li>
            <code>autoplay</code> e <code>autoplaySpeed</code>: liga e ajusta o
            intervalo do play automatico.
          </li>
          <li>
            <code>circular</code>: permite loop infinito; se false, bloqueia nas
            extremidades.
          </li>
          <li>
            <code>width</code>: ajusta largura do conteudo (<code>default</code>{' '}
            ou <code>full</code>).
          </li>
          <li>
            <code>indicators</code>: posiciona indicadores (<code>default</code>
            , <code>inside</code> ou <code>numbers</code>).
          </li>
          <li>
            <code>enableSwipe</code>: ativa swipe em mobile.
          </li>
          <li>
            <code>noArrowsMobile</code>: esconde setas em telas pequenas.
          </li>
        </ul>
      </section>

      <section style={{ margin: '12px 0' }}>
        <h3>Estrutura de items</h3>
        <p>
          <code>data</code> (ou <code>items</code>) deve ser um array de itens.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`data=[
  { title: 'Banner', description: 'Texto opcional', image: 'https://...' },
  { title: 'Video', videoUrl: 'https://www.youtube.com/watch?v=...' },
]`}</code>
        </pre>
      </section>

      <section style={{ margin: '12px 0' }}>
        <h3>Exemplo rapido</h3>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Carousel
  variante="default"
  data={defaultItems}
  autoplay
  autoplaySpeed={4000}
  circular
  width="default"
  indicators="inside"
  enableSwipe
  noArrowsMobile={false}
/>`}</code>
        </pre>
      </section>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const DefaultInterativo: Story = {
  name: 'Default interativo',
  args: {
    variante: 'default',
    data: defaultItems,
    indicators: 'default',
    enableSwipe: true,
    autoplay: false,
    circular: true,
  },
  argTypes: {
    indicators: {
      control: { type: 'select' },
      options: ['default', 'inside', 'numbers'],
      description: 'Posicionamento dos indicadores',
    },
    variante: {
      control: false,
    },
  },
};

export const CardDocs: Story = {
  name: 'Card Docs',
  args: {
    variante: 'card',
    cardVariant: 'news',
    items: cardItemsNews,
    cardsPerView: 3,
    cardsPerViewTablet: 2,
    cardsPerViewMobile: 1,
    gap: 16,
    showIndicators: true,
    showArrows: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 0' }}>
      <h1>Carousel — Variante Card</h1>

      <div style={{ marginTop: 12 }}>
        <Carousel {...args} />
      </div>

      <p style={{ margin: '12px 0' }}>
        Controle quantos cards aparecem em cada slide com{' '}
        <code>cardsPerView</code>. O array <code>items</code> aceita as props do
        Card (variant, description, image, href, itens etc.).
      </p>

      <section style={{ margin: '12px 0' }}>
        <h3>Props de controle (top-level)</h3>
        <ul>
          <li>
            <code>cardVariant</code>: força todas as cartas a usarem uma
            variante especifica (<code>post</code>, <code>list</code>,
            <code>news</code> ou <code>icon</code>).
          </li>
          <li>
            <code>cardsPerView</code>, <code>cardsPerViewTablet</code>,
            <code>cardsPerViewMobile</code>: quantidade de cards por slide em
            cada breakpoint.
          </li>
          <li>
            <code>gap</code>: espaco em pixels entre os cards.
          </li>
          <li>
            <code>showIndicators</code> e <code>showArrows</code>: exibe ou
            oculta indicadores e setas de navegacao.
          </li>
        </ul>
      </section>

      <section style={{ margin: '12px 0' }}>
        <h3>Estrutura de items (Card)</h3>
        <p>
          <code>items</code> deve ser um array de objetos aceitos pelo
          componente <code>Card</code>. Exemplos:
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`items=[
  { title: 'Noticia', description: 'Resumo', image: 'https://...', variant: 'news', href: '#' },
  { title: 'Lista', description: 'Com itens', image: 'https://...', variant: 'list', itens: [{ value: 'Item 1' }, { value: 'Item 2' }] },
]`}</code>
        </pre>
        <p>
          Quando <code>cardVariant</code> é fornecido, ele sobrescreve o
          <code> variant</code> interno de cada item.
        </p>
      </section>

      <section style={{ margin: '12px 0' }}>
        <h3>Exemplo rapido</h3>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
          }}
        >
          <code>{`<Carousel
  variante="card"
  cardVariant="news"
  items={cardItemsNews}
  cardsPerView={3}
  cardsPerViewTablet={2}
  cardsPerViewMobile={1}
  gap={16}
  showIndicators
  showArrows
/>`}</code>
        </pre>
      </section>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const CardInterativo: Story = {
  name: 'Card interativo',
  args: {
    variante: 'card',
    cardVariant: 'post',
    items: cardItemsPost,
    cardsPerView: 2,
    cardsPerViewTablet: 2,
    cardsPerViewMobile: 1,
    gap: 12,
    autoplay: false,
    circular: true,
    showIndicators: true,
    showArrows: true,
  },
  argTypes: {
    cardVariant: {
      control: { type: 'select' },
      options: ['post', 'list', 'news', 'icon'],
      description: 'Força todas as cartas a usarem a mesma variante de Card',
    },
    variante: {
      control: false,
    },
    cardsPerView: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Numero de cards por slide (desktop)',
    },
    cardsPerViewTablet: {
      control: { type: 'number', min: 1, max: 4, step: 1 },
      description: 'Numero de cards por slide (tablet)',
    },
    cardsPerViewMobile: {
      control: { type: 'number', min: 1, max: 2, step: 1 },
      description: 'Numero de cards por slide (mobile)',
    },
    gap: {
      control: { type: 'number', min: 0, max: 64, step: 2 },
      description: 'Espaco entre cards (px)',
    },
  },
  render: (args) => {
    const { cardVariant = 'post' } = args as CarouselCardProps;
    const dataset = cardItemsByVariant[cardVariant] || cardItemsPost;

    return <Carousel {...args} variante="card" items={dataset} cardVariant={cardVariant} />;
  },
};
