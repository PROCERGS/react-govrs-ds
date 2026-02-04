import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import './Card.scss'
import '../../foundations/styles/index.scss'

const meta: Meta<typeof Card> = {
  title: 'Widgets/Card',
  component: Card,
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj<typeof Card>

export const CardDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1200 }}>
      <h3 style={{ margin: 0 }}>Card</h3>
      <p style={{ color: '#444', margin: 0 }}>
        O componente <code>Card</code> possui quatro variantes (<code>post</code>, <code>list</code>,
        <code>news</code> e <code>icon</code>) para diferentes usos. Ajuste <code>size</code> quando disponível,
        combine <code>title</code>, <code>description</code> e <code>children</code> para o conteúdo, e use
        imagens via <code>image</code> ou <code>bodyImg</code>. Em <code>post</code>, ações podem ser declaradas
        em <code>acao</code> e callbacks <code>onLike</code>/<code>onShare</code>.
      </p>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Post</h4>
        <p style={{ color: '#444', margin: '0 0 8px' }}>
          Variante com título, descrição, conteúdo rico via <code>children</code>, ação no rodapé (<code>acao</code>)
          e callbacks sociais (<code>onLike</code>/<code>onShare</code>). Opcionalmente exibe <code>bodyImg</code> no corpo.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            margin: 0,
          }}
        >
          <code>{`<Card
  variant="post"
  image="https://.../imagem.jpg"
  title="Card de Post"
  description="Card com ações sociais"
  acao={{ label: 'Ver mais', url: '#' }}
  onLike={handler}
  onShare={handler}
>
  Conteúdo principal
</Card>`}</code>
        </pre>
        <Card
          variant="post"
          image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
          title="Card de Post"
          description="Card com ações sociais"
          acao={{ label: 'Ver mais', url: '#' }}
          href="#"
          onLike={() => {}}
          onShare={() => {}}
        >
          Área de conteúdo principal do card.
        </Card>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>List</h4>
        <p style={{ color: '#444', margin: '0 0 8px' }}>
          Variante com lista expansível controlada internamente. Passe <code>itens</code> para renderizar a lista
          e use <code>image</code> para avatar/capa. <code>children</code> pode complementar o texto.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            margin: 0,
          }}
        >
          <code>{`<Card
  variant="list"
  image="https://.../imagem.jpg"
  title="Card de Lista"
  description="Lista expansível"
  itens={[{ value: 'Item 1' }, { value: 'Item 2' }]}
/>`}</code>
        </pre>
        <Card
          variant="list"
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
          title="Card de Lista"
          description="Lista expansível"
          itens={[{ value: 'Item 1' }, { value: 'Item 2' }, { value: 'Item 3' }]}
          href="#"
        />
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>News</h4>
        <p style={{ color: '#444', margin: '0 0 8px' }}>
          Variante para artigos/notícias. Usa <code>image</code> como destaque (topo ou corpo conforme presença de
          <code>children</code>). Aceita <code>title</code>, <code>description</code>, <code>children</code> e <code>href</code>.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            margin: 0,
          }}
        >
          <code>{`<Card
  variant="news"
  image="https://.../imagem.jpg"
  title="Card de Notícia"
  description="Exemplo de notícia"
  href="#"
/>`}</code>
        </pre>
        <Card
          variant="news"
          image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
          title="Card de Notícia"
          description="Exemplo de notícia"
          href="#"
        />
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>Icon</h4>
        <p style={{ color: '#444', margin: '0 0 8px' }}>
          Variante simples com imagem/ícone e textos curtos. Use <code>image</code> para o ícone, mais
          <code>title</code>, <code>description</code> e <code>href</code> para navegação.
        </p>
        <pre
          style={{
            background: '#f7f7f7',
            padding: 12,
            borderRadius: 4,
            overflowX: 'auto',
            margin: 0,
          }}
        >
          <code>{`<Card
  variant="icon"
  image="https://.../icone.svg"
  title="Card de Ícone"
  description="Ícone e texto"
  href="#"
/>`}</code>
        </pre>
        <Card
          variant="icon"
          image="https://api.iconify.design/mdi/lightbulb-on.svg?color=%231A7235&width=200&height=200"
          title="Card de Ícone"
          description="Ícone e texto"
          href="#"
        />
      </section>
    </div>
  ),
}

export const CardInterativo: Story = {
  name: 'Interativo',
  parameters: {
    controls: {
      exclude: ['children', 'acao', 'itens'],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['post', 'list', 'news', 'icon'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'large', undefined],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
    bodyImg: { control: 'text' },
  },
  args: {
    variant: 'post',
    size: undefined,
    title: 'Título do Card',
    description: 'Descrição do card',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    href: '#',
    disabled: false,
    bodyImg: undefined,
  },
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 1200 }}>
      <Card
        {...args}
        itens={
          args.variant === 'list'
            ? args.itens ?? [
                { value: 'Item 1' },
                { value: 'Item 2' },
                { value: 'Item 3' },
              ]
            : args.itens
        }
      >
        Conteúdo opcional via children. Configure props no painel de controles.
      </Card>
    </div>
  ),
}
