import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Pagination, type PaginationPagesVariant } from './Pagination'
import './Pagination.scss'
import '../../foundations/styles/index.scss'

type InteractiveArgs = {
  pagesVariant: PaginationPagesVariant
  totalItems: number
  modoContraste?: boolean
}

const meta = {
  title: 'Navegação/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

const docsHeroStats = [
  {
    title: 'Ideia central',
    text: 'O pai decide página, tamanho e total. A Pagination só exibe controles e avisa mudanças — não busca dados e não se liga a List/Table por id.',
  },
  {
    title: 'Três camadas',
    text: 'Compose em camadas: root (dados), Group (posição) e átomos (UI).',
  },
  {
    title: 'Duas navegações',
    text: 'Pages variant="numbers" (círculos) ou variant="jump" (select + setas). Use só uma por barra.',
  },
] satisfies Array<{ title: string; text: string }>

function NumbersPreview() {
  return (
    <Pagination defaultPage={5} defaultPageSize={20} totalItems={800}>
      <Pagination.Group align="center">
        <Pagination.Pages variant="numbers" />
      </Pagination.Group>
    </Pagination>
  )
}

const numbersExampleCode = `<Pagination defaultPage={5} defaultPageSize={20} totalItems={800}>
  <Pagination.Group align="center">
    <Pagination.Pages variant="numbers" />
  </Pagination.Group>
</Pagination>`

function JumpPreview() {
  return (
    <Pagination defaultPage={12} defaultPageSize={20} totalItems={200}>
      <Pagination.Group align="start">
        <Pagination.PageSize />
        <Pagination.Range />
      </Pagination.Group>
      <Pagination.Group align="end">
        <Pagination.Pages variant="jump" />
      </Pagination.Group>
    </Pagination>
  )
}

const jumpExampleCode = `<Pagination defaultPage={12} defaultPageSize={20} totalItems={200}>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>
  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>`

function MixedPreview() {
  return (
    <Pagination defaultPage={1} defaultPageSize={20} totalItems={200}>
      <Pagination.Group align="start">
        <Pagination.PageSize />
        <Pagination.Range />
      </Pagination.Group>
      <Pagination.Group align="center">
        <Pagination.Pages variant="numbers" />
      </Pagination.Group>
    </Pagination>
  )
}

const mixedExampleCode = `<Pagination defaultPage={1} defaultPageSize={20} totalItems={200}>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>
  <Pagination.Group align="center">
    <Pagination.Pages variant="numbers" />
  </Pagination.Group>
</Pagination>`

function FixedPageSizePreview() {
  return (
    <Pagination defaultPage={1} pageSize={50} totalItems={800}>
      <Pagination.Group align="start">
        <Pagination.PageSize />
        <Pagination.Range />
      </Pagination.Group>
      <Pagination.Group align="end">
        <Pagination.Pages variant="jump" />
      </Pagination.Group>
    </Pagination>
  )
}

const fixedPageSizeExampleCode = `<Pagination page={page} pageSize={50} totalItems={800} onPageChange={setPage}>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>
  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>`

function ListCompositionPreview() {
  const items = Array.from({ length: 47 }, (_, index) => `Item ${index + 1}`)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const pageItems = items.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
        {pageItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={items.length}
        pageSizeOptions={[10, 20, 40]}
        onPageChange={setPage}
        onPageSizeChange={(nextPageSize) => {
          setPageSize(nextPageSize)
          setPage(1)
        }}
      >
        <Pagination.Group align="start">
          <Pagination.PageSize />
          <Pagination.Range />
        </Pagination.Group>
        <Pagination.Group align="end">
          <Pagination.Pages variant="jump" />
        </Pagination.Group>
      </Pagination>
    </div>
  )
}

const listCompositionExampleCode = `const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)
const pageItems = items.slice((page - 1) * pageSize, page * pageSize)

<>
  <ul>{pageItems.map((item) => <li key={item}>{item}</li>)}</ul>

  <Pagination
    page={page}
    pageSize={pageSize}
    totalItems={items.length}
    pageSizeOptions={[10, 20, 40]}
    onPageChange={setPage}
    onPageSizeChange={(size) => {
      setPageSize(size)
      setPage(1)
    }}
  >
    <Pagination.Group align="start">
      <Pagination.PageSize />
      <Pagination.Range />
    </Pagination.Group>
    <Pagination.Group align="end">
      <Pagination.Pages variant="jump" />
    </Pagination.Group>
  </Pagination>
</>`

function InteractivePreview({ pagesVariant, totalItems }: InteractiveArgs) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <p style={{ margin: 0, fontSize: '0.875rem' }}>
        Página {page} · {pageSize} itens por página · {totalItems} no total
      </p>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={setPage}
        onPageSizeChange={(nextPageSize) => {
          setPageSize(nextPageSize)
          setPage(1)
        }}
      >
        {pagesVariant === 'jump' ? (
          <>
            <Pagination.Group align="start">
              <Pagination.PageSize />
              <Pagination.Range />
            </Pagination.Group>
            <Pagination.Group align="end">
              <Pagination.Pages variant="jump" />
            </Pagination.Group>
          </>
        ) : (
          <Pagination.Group align="center">
            <Pagination.Pages variant="numbers" />
          </Pagination.Group>
        )}
      </Pagination>
    </div>
  )
}

export const Documentation: Story = {
  name: 'Documentação',
  args: {
    totalItems: 200,
    children: null,
  },
  parameters: {
    docsOnly: true,
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Pagination</h3>}
        description="Comece pelo modelo mental, depois monte a UI em camadas. A Pagination não pagina sozinha a lista: ela reflete o estado que o pai controla."
        stats={docsHeroStats}
      />

      <SectionCard
        title="1. Anatomia em três camadas"
        description={
          <>
            Memorize esta ordem:
            <br />
            1) Root guarda o estado (dados, onPageChange e onPageSizeChange).
            <br />
            2) Group posiciona (start, center, end).
            <br />
            3) Átomos mostram a UI (PageSize, Range, Pages).
          </>
        }
      >
        <SandboxExample
          title="Peças e responsabilidades"
          description={
            <>
              Root: page, pageSize, totalItems; onPageChange (nova página) e onPageSizeChange (novo tamanho do Exibir).
              <br />
              Group align: start | center | end (em telas estreitas os grupos quebram para a linha de baixo).
              <br />
              Átomos: PageSize (Exibir), Range (1-20 de N itens), Pages (numbers ou jump).
            </>
          }
          code={`<Pagination
  page={...}
  pageSize={...}
  totalItems={...}
  onPageChange={...}
  onPageSizeChange={...}
>
  <Pagination.Group align="start">
    <Pagination.PageSize />
    <Pagination.Range />
  </Pagination.Group>

  <Pagination.Group align="end">
    <Pagination.Pages variant="jump" />
  </Pagination.Group>
</Pagination>`}
        >
          <JumpPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="2. Caso mais simples: só números"
        description="Neste caso você precisa de três peças: o root Pagination, com totalItems obrigatório (e opcionalmente defaultPage / defaultPageSize); um Group com align para posicionar o bloco (aqui, center); e Pages com variant=&quot;numbers&quot; para a navegação por círculos. Use quando basta trocar de página, sem o select Exibir na barra."
      >
        <SandboxExample
          title="Pages variant=&quot;numbers&quot;"
          description="Desktop mostra até 2 vizinhos da página atual; tablet e mobile mostram 1. Em mobile, os botões da 1ª e da última página somem e o “…” leva às extremidades."
          code={numbersExampleCode}
        >
          <NumbersPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="3. Caso Table / listagem: Exibir + range + jump"
        description="É o padrão do footer da Table: à esquerda o tamanho e o intervalo; à direita o salto de página."
      >
        <SandboxExample
          title="Pages variant=&quot;jump&quot; com PageSize e Range"
          description="Inclua Pagination.PageSize só se o usuário puder mudar o tamanho. O Range calcula sozinho o texto “X-Y de Z itens” a partir de page, pageSize e totalItems."
          code={jumpExampleCode}
        >
          <JumpPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="4. Misturando peças"
        description="Você escolhe quais átomos entram e onde cada Group fica (start, center ou end)."
      >
        <SandboxExample
          title="Exibir + range à esquerda, numbers no centro"
          description="align=&quot;start&quot; e align=&quot;center&quot; posicionam o resumo à esquerda e a navegação no meio da barra. Em telas estreitas, o Group que não cabe desce para a linha de baixo."
          code={mixedExampleCode}
        >
          <MixedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="5. O pai controla os dados"
        description={
          <>
            A Pagination não fatia a lista. Guarde page e pageSize no pai, derive os itens da página e passe totalItems.
            <br />
            onPageChange(page): o usuário mudou de página (números, setas ou jump) — atualize page e fatie/busque de novo.
            <br />
            onPageSizeChange(pageSize): o usuário mudou o Exibir — atualize pageSize e, em geral, volte para a página 1.
          </>
        }
      >
        <SandboxExample
          title="Lista + Pagination controlada"
          description="O pai fatia (ou busca) com page + pageSize e usa os dois callbacks para manter o estado sincronizado com a UI."
          code={listCompositionExampleCode}
        >
          <ListCompositionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="6. pageSize fixo (sem select Exibir)"
        description="O valor sempre vem do root (pageSize ou defaultPageSize). O select some quando o tamanho não é alterável."
      >
        <SandboxExample
          title="Quando o select desaparece"
          description="Dois caminhos: (1) pageSize controlado sem onPageSizeChange; (2) pageSizeOptions com um único valor. PageSize no JSX pode continuar — ele simplesmente não renderiza o select."
          code={fixedPageSizeExampleCode}
        >
          <FixedPageSizePreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interactive: StoryObj<InteractiveArgs> = {
  name: 'Interativo',
  render: (args) => <InteractivePreview {...args} />,
  args: {
    pagesVariant: 'numbers',
    totalItems: 800,
    modoContraste: false,
  },
  parameters: {
    controls: {
      exclude: [
        'children',
        'page',
        'defaultPage',
        'pageSize',
        'defaultPageSize',
        'pageSizeOptions',
        'siblingCount',
        'onPageChange',
        'onPageSizeChange',
        'ariaLabel',
        'className',
      ],
    },
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    pagesVariant: {
      control: 'select',
      options: ['numbers', 'jump'],
      description: 'Variante de Pagination.Pages no preview (numbers ou jump).',
      table: {
        category: 'Aparência',
        type: { summary: "'numbers' | 'jump'" },
      },
    },
    totalItems: {
      control: { type: 'number', min: 0, step: 1 },
      description: 'Total de itens do conjunto paginado.',
      table: { category: 'Dados' },
    },
  },
}
