import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Table } from './Table'
import './Table.scss'
import '../../foundations/styles/index.scss'

type TableStoryArgs = {
  variant?: 'default' | 'irregular'
  title?: string
  showCheckbox?: boolean
  searchable?: boolean
  searchColumn?: '' | 'name' | 'amount' | 'date'
}

type TableStoryItem = {
  id: string
  name: string
  amount: number
  date: string
  actionLabel?: string
}

type FormularioTableItem = {
  id: string
  nome: string
  status: string
  criadoEm: string
}

const defaultLocalVariantTags = ['default', 'local', 'seleção']

const defaultLocalHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a aplicação já possui todos os dados em memória e precisa que busca, ordenação e paginação sejam feitas localmente após entregar a lista completa de items.',
  },
  {
    title: 'Melhor exploração',
    text: "Use esta documentação para entender a variante default no modo local e o story 'Interativo' para validar a anatomia base da tabela.",
  },
  {
    title: 'Comportamento',
    text: 'A própria tabela filtra, ordena e pagina os items recebidos, iniciando sempre com os defaults internos de página, tamanho de página, busca e ordenação.',
  },
] satisfies Array<{ title: string; text: string }>

const externalVariantTags = ['default', 'external', 'controlado']

const externalHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a lista de items depende de backend para paginação ou ordenação, mas a UI da tabela deve continuar padronizada dentro do design system.',
  },
  {
    title: 'Melhor exploração',
    text: 'Leia este story como contrato de integração: a Table emite a próxima query e o consumidor controla a busca, os items e o total.',
  },
  {
    title: 'Comportamento',
    text: 'No modo external, a Table renderiza os items recebidos e chama onQueryChange a cada interação.',
  },
] satisfies Array<{ title: string; text: string }>

const irregularVariantTags = ['irregular', 'semântica', 'html']

const irregularHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a estrutura da tabela não é regular e precisa de rowSpan, colSpan, agrupamentos visuais ou cabeçalhos com múltiplos níveis.',
  },
  {
    title: 'Melhor exploração',
    text: 'Use este story para entender a marcação recomendada e as classes utilitárias que preservam o visual do componente.',
  },
  {
    title: 'Comportamento',
    text: 'A variante irregular não aplica busca, ordenação ou paginação automática. Ela só fornece o wrapper visual e delega a semântica da tabela ao consumidor.',
  },
] satisfies Array<{ title: string; text: string }>

const columns: Table.Column<TableStoryItem>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  { key: 'date', label: 'Data' },
]

const formularioColumns: Table.Column<FormularioTableItem>[] = [
  { key: 'nome', label: 'Nome' },
  { key: 'status', label: 'Status' },
  { key: 'criadoEm', label: 'Criado em' },
]

const customCellColumns: Table.Column<TableStoryItem>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  {
    key: 'actionLabel',
    label: 'Ação',
    render: ({ value, item }) => (
      <Button
        size="small"
        variant="secondary"
        aria-label={`Abrir detalhes de ${String(item.name ?? 'item')}`}
      >
        {value ?? 'Detalhes'}
      </Button>
    ),
  },
]

const defaultExampleCode = `type PaymentRow = {
  id: string
  name: string
  amount: number
  date: string
}

const columns: Table.Column<PaymentRow>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  { key: 'date', label: 'Data' },
]

<Table
  title="Lista de pagamentos"
  columns={columns}
  items={items}
  searchable
/>
`

const selectionExampleCode = `type PaymentRow = {
  id: string
  name: string
  amount: number
  date: string
}

const [selectedItems, setSelectedItems] = useState<PaymentRow[]>([])

<Table
  title="Com seleção"
  columns={columns}
  items={items}
  searchable
  showCheckbox
  onSelectionChange={setSelectedItems}
/>
`

const queryExampleCode = `type FormularioRow = {
  id: string
  nome: string
  status: string
  criadoEm: string
}

const columns: Table.Column<FormularioRow>[] = [
  { key: 'nome', label: 'Nome' },
  { key: 'status', label: 'Status' },
  { key: 'criadoEm', label: 'Criado em' },
]

const initialQuery: Table.Query<FormularioRow> = {
  search: '',
  searchColumn: 'nome',
  sort: null,
  page: 1,
  pageSize: 20,
}

function FormulariosTable() {
  const [query, setQuery] = useState<Table.Query<FormularioRow>>(initialQuery)
  const [items, setItems] = useState<FormularioRow[]>([])
  const [totalItems, setTotalItems] = useState(0)

  async function loadFormularios(nextQuery: Table.Query<FormularioRow>) {
    setQuery(nextQuery)

    const { items: nextItems, totalItems: nextTotalItems } = await formulariosService.list(nextQuery)

    setItems(nextItems)
    setTotalItems(nextTotalItems)
  }

  useEffect(() => {
    void loadFormularios(initialQuery)
  }, [])

  return (
    <Table
      title="Formulários"
      columns={columns}
      items={items}
      searchable
      queryMode="external"
      query={query}
      totalItems={totalItems}
      onQueryChange={({ query: nextQuery }) => {
        void loadFormularios(nextQuery)
      }}
    />
  )
}`

const customCellExampleCode = `type PaymentRow = {
  id: string
  name: string
  amount: number
  date: string
  actionLabel?: string
}

const columns: Table.Column<PaymentRow>[] = [
  { key: 'name', label: 'Nome' },
  { key: 'amount', label: 'Valor' },
  {
    key: 'actionLabel',
    label: 'Ação',
    render: ({ value, item }) => (
      <Button
        size="small"
        variant="secondary"
        aria-label={\`Abrir detalhes de \${item.name}\`}
      >
        {value}
      </Button>
    ),
  },
]

<Table
  title="Lista com ações"
  columns={columns}
  items={items}
/>
`

const irregularExampleCode = `<Table variant="irregular" title="Tabela irregular">
  <table>
    <thead>
      <tr>
        <th className="govrs-table__border-bottom" scope="col">Poster</th>
        <th className="govrs-table__border-bottom govrs-table__border-left" scope="col">Cor</th>
        <th
          className="govrs-table__border-bottom govrs-table__border-left"
          colSpan={3}
          scope="colgroup"
        >
          Tamanhos disponíveis
        </th>
      </tr>
      <tr>
        <th className="govrs-table__border-bottom" scope="col">&nbsp;</th>
        <th className="govrs-table__border-bottom govrs-table__border-left" scope="col">&nbsp;</th>
        <th className="govrs-table__border-bottom" scope="col">A2</th>
        <th className="govrs-table__border-bottom" scope="col">A3</th>
        <th className="govrs-table__border-bottom" scope="col">A4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className="govrs-table__border-right" rowSpan={3} scope="rowgroup">Zodiac</th>
        <td>Full color</td>
        <td>A2</td>
        <td>A3</td>
        <td>A4</td>
      </tr>
    </tbody>
  </table>
</Table>
`

function makeItems(count = 200): TableStoryItem[] {
  const baseDate = new Date('2026-05-20T12:00:00.000Z')

  return Array.from({ length: count }, (_, index) => {
    const name = `Item ${String(index + 1).padStart(4, '0')}`
    const amount = Number((((index * 97) % 10000) + index / 1000).toFixed(2))
    const date = new Date(baseDate.getTime() - index * 24 * 60 * 60 * 1000)

    return {
      id: `row-${index + 1}`,
      name,
      amount,
      date: date.toISOString().slice(0, 10),
    }
  })
}

function makeActionItems(count = 6): TableStoryItem[] {
  return makeItems(count).map((item, index) => ({
    ...item,
    actionLabel: index % 2 === 0 ? 'Detalhes' : 'Editar',
  }))
}

function makeFormularioItems(count = 40): FormularioTableItem[] {
  const baseDate = new Date('2026-05-20T12:00:00.000Z')
  const statuses = ['Rascunho', 'Publicado', 'Arquivado'] as const

  return Array.from({ length: count }, (_, index) => {
    const date = new Date(baseDate.getTime() - index * 24 * 60 * 60 * 1000)

    return {
      id: `form-${index + 1}`,
      nome: `Formulario ${String(index + 1).padStart(3, '0')}`,
      status: statuses[index % statuses.length],
      criadoEm: date.toISOString().slice(0, 10),
    }
  })
}

function sortItems<TItem extends Table.ItemBase>(items: TItem[], sort: Table.SortState<TItem> | null) {
  if (!sort) {
    return items
  }

  const nextItems = [...items]
  const direction = sort.direction === 'desc' ? -1 : 1

  nextItems.sort((left, right) => {
    const leftValue = left[sort.key]
    const rightValue = right[sort.key]

    if (typeof leftValue === 'number' || typeof rightValue === 'number') {
      return (Number(leftValue) - Number(rightValue)) * direction
    }

    if (
      typeof leftValue === 'string'
      && typeof rightValue === 'string'
      && /^\d{4}-\d{2}-\d{2}(T|$)/.test(leftValue)
      && /^\d{4}-\d{2}-\d{2}(T|$)/.test(rightValue)
    ) {
      return (Date.parse(leftValue) - Date.parse(rightValue)) * direction
    }

    return String(leftValue ?? '').localeCompare(String(rightValue ?? '')) * direction
  })

  return nextItems
}

function applyExternalQuery<TItem extends Table.ItemBase>(items: TItem[], query: Table.Query<TItem>) {
  const normalizedSearch = query.search.trim().toLowerCase()
  const filteredItems = normalizedSearch
    ? items.filter((item) => String(item[query.searchColumn ?? 'name'] ?? '').toLowerCase().includes(normalizedSearch))
    : items
  const sortedItems = sortItems(filteredItems, query.sort)
  const startIndex = (query.page - 1) * query.pageSize

  return {
    items: sortedItems.slice(startIndex, startIndex + query.pageSize),
    totalItems: sortedItems.length,
  }
}

function TableIrregularMarkup() {
  return (
    <table>
      <thead>
        <tr>
          <th className="govrs-table__border-bottom" scope="col">
            Poster
          </th>
          <th className="govrs-table__border-bottom govrs-table__border-left" scope="col">
            Cor
          </th>
          <th
            className="govrs-table__border-bottom govrs-table__border-left"
            colSpan={3}
            scope="colgroup"
          >
            Tamanhos disponíveis
          </th>
        </tr>
        <tr>
          <th className="govrs-table__border-bottom" scope="col">
            &nbsp;
          </th>
          <th className="govrs-table__border-bottom govrs-table__border-left" scope="col">
            &nbsp;
          </th>
          <th className="govrs-table__border-bottom" scope="col">
            A2
          </th>
          <th className="govrs-table__border-bottom" scope="col">
            A3
          </th>
          <th className="govrs-table__border-bottom" scope="col">
            A4
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="govrs-table__border-right" rowSpan={3} scope="rowgroup">
            Zodiac
          </th>
          <td>Full color</td>
          <td>A2</td>
          <td>A3</td>
          <td>A4</td>
        </tr>
        <tr>
          <td>Black and white</td>
          <td>A1</td>
          <td>A2</td>
          <td>A3</td>
        </tr>
        <tr>
          <td>Sepia</td>
          <td>A3</td>
          <td>A4</td>
          <td>A5</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th className="govrs-table__border-right" rowSpan={2} scope="rowgroup">
            Angels
          </th>
          <td>Black and white</td>
          <td>A1</td>
          <td>A3</td>
          <td>A4</td>
        </tr>
        <tr>
          <td>Sepia</td>
          <td>A2</td>
          <td>A3</td>
          <td>A5</td>
        </tr>
      </tbody>
    </table>
  )
}

function TableDefaultPreview() {
  return (
    <Table
      title="Lista de exemplo"
      columns={columns}
      items={makeItems(6)}
      searchable
    />
  )
}

function TableSelectionPreview() {
  const [selectedItems, setSelectedItems] = useState<TableStoryItem[]>([])

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Table
        title="Com seleção"
        columns={columns}
        items={makeItems(12)}
        searchable
        showCheckbox
        onSelectionChange={setSelectedItems}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Selecionados:</strong> {selectedItems.length > 0 ? selectedItems.map((item) => item.name).join(', ') : 'Nenhum item selecionado'}
      </p>
    </div>
  )
}

function TableQueryPreview() {
  const [sourceItems] = useState<FormularioTableItem[]>(() => makeFormularioItems(40))
  const formularioQuery: Table.Query<FormularioTableItem> = {
    search: '',
    searchColumn: 'nome',
    sort: null,
    page: 1,
    pageSize: 20,
  }
  const [query, setQuery] = useState<Table.Query<FormularioTableItem>>(formularioQuery)
  const [tableResult, setTableResult] = useState(() => applyExternalQuery(sourceItems, formularioQuery))
  const [lastQueryChange, setLastQueryChange] = useState<Table.QueryChangeContext<FormularioTableItem> | null>(null)

  const handleQueryChange: Table.QueryChangeHandler<FormularioTableItem> = (context) => {
    setLastQueryChange(context)
    setQuery(context.query)
    setTableResult(applyExternalQuery(sourceItems, context.query))
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Table
        title="Formulários remotos"
        columns={formularioColumns}
        items={tableResult.items}
        searchable
        queryMode="external"
        query={query}
        totalItems={tableResult.totalItems}
        onQueryChange={handleQueryChange}
      />

      <p style={storyDocsStyles.statText}>
        <strong>Última query:</strong> {JSON.stringify(lastQueryChange)}
      </p>
    </div>
  )
}

function TableDefaultLocalDocs() {
  return (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Table Default</h3>}
        description={
          <>
            Esta documentação cobre a variante <code>default</code> no modo local. Aqui a própria <code>Table</code> faz busca, ordenação e paginação sobre os <code>items</code> recebidos, mantendo o contrato simples para o consumidor do design system.
          </>
        }
        variantTags={defaultLocalVariantTags}
        stats={defaultLocalHeroStats}
      />

      <SectionCard
        title="Contrato da variante default"
        description="A variante default recebe colunas tipadas e uma lista de itens. No uso local, basta passar items: a Table aplica internamente os defaults de busca, ordenação e paginação."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Props principais">
            <ul style={storyDocsStyles.list}>
              <li><code>columns</code> define a ordem, a chave de leitura e o rótulo de cada coluna.</li>
              <li><code>items</code> fornece as linhas e pode incluir <code>id</code> para estabilizar seleção e paginação.</li>
              <li><code>searchable</code> ativa a busca no cabeçalho.</li>
              <li><code>searchColumn</code> fixa a busca em uma coluna específica e remove o seletor de coluna.</li>
              <li>O modo local sempre inicia na página 1, com 20 itens por página, sem busca e sem ordenação ativa.</li>
              <li><code>render</code> permite enriquecer células específicas sem abrir mão da estrutura padrão da tabela.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="O que já vem pronto">
            <ul style={storyDocsStyles.list}>
              <li>O clique no cabeçalho alterna entre ascendente, descendente e sem ordenação.</li>
              <li>Números e datas ISO são detectados automaticamente para ordenação local.</li>
              <li>O seletor de quantidade por página e a navegação entre páginas já funcionam sem callbacks adicionais.</li>
              <li>Não existe <code>onPageChange</code> público no modo local porque a própria Table já controla essa interação.</li>
            </ul>
          </StoryPreviewCard>
        </div>

        <SandboxExample
          title="Paginação e ordenação local"
          description="Exemplo base da variante default em modo local, com ordenação e paginação já habilitadas pela própria Table."
          code={defaultExampleCode}
          notes={[
            'No modo local, a Table usa defaults internos fixos e não expõe query inicial por prop.',
            'Sem queryMode="external", a própria Table filtra, ordena e pagina os items recebidos.',
            'Esse é o fluxo mais simples para aplicações que já carregaram toda a lista na memória.',
          ]}
        >
          <TableDefaultPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Recursos complementares"
        description="A mesma variante default também cobre seleção de linhas e células customizadas, mantendo a mesma experiência base da tabela."
      >
        <SandboxExample
          title="Seleção de linhas"
          description="Quando showCheckbox está ativo, a Table adiciona uma coluna de seleção no início e devolve os itens marcados via onSelectionChange."
          code={selectionExampleCode}
          notes={[
            'O checkbox do cabeçalho seleciona ou limpa apenas as linhas visíveis na página atual.',
            'O callback recebe os itens completos; não é necessário mapear ids manualmente antes do retorno.',
          ]}
        >
          <TableSelectionPreview />
        </SandboxExample>

        <SandboxExample
          title="Células customizadas"
          description="Use render quando uma coluna precisa exibir ações, status ou conteúdo composto sem migrar para a variante irregular."
          code={customCellExampleCode}
          notes={[
            'A busca continua usando o valor bruto do item, não o JSX retornado por render.',
            'Colunas com render deixam de ser ordenáveis para evitar ordenação por conteúdo visual composto.',
            'Esse formato mantém a tabela intuitiva e reaproveitável dentro do design system.',
          ]}
        >
          <TableCustomCellPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  )
}

function TableExternalDocs() {
  return (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Table External</h3>}
        description={
          <>
            Esta documentação cobre a variante <code>default</code> no modo <code>external</code>. Aqui a <code>Table</code> mantém a UI padronizada e emite a próxima query em <code>onQueryChange</code>, enquanto a aplicação consumidora controla a busca remota, os <code>items</code> e o <code>totalItems</code>.
          </>
        }
        variantTags={externalVariantTags}
        stats={externalHeroStats}
      />

      <SectionCard
        title="Contrato de integração externa"
        description="O objetivo do design system aqui é separar responsabilidades: a Table calcula o próximo estado de interação, mas quem executa a consulta e devolve a lista atualizada é sempre a aplicação consumidora."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="O que a Table já faz">
            <ul style={storyDocsStyles.list}>
              <li>Abre e fecha a busca, troca a coluna ativa, alterna a ordenação e reseta a página quando necessário.</li>
              <li>Controla internamente os cliques de paginação e o seletor de quantidade por página.</li>
              <li>Chama <code>onQueryChange</code> a cada mudança envolvendo paginação, ordenação e busca.</li>
              <li>Renderiza a página atual usando somente os <code>items</code> e o <code>totalItems</code> recebidos por props.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="O que o consumidor implementa">
            <ul style={storyDocsStyles.list}>
              <li>No contrato do componente, use <code>queryMode=&quot;external&quot;</code>, <code>query</code>, <code>totalItems</code> e <code>onQueryChange</code>.</li>
              <li>Mantenha o endpoint, o client HTTP, autenticação, debounce e deduplicação de requests fora da Table.</li>
              <li>Atualize <code>query</code>, <code>items</code> e <code>totalItems</code> no estado da aplicação quando uma nova consulta terminar.</li>
            </ul>
          </StoryPreviewCard>
        </div>

        <ul style={storyDocsStyles.list}>
          <li><code>query</code> é a fonte controlada de busca, coluna ativa, ordenação, página e tamanho da página.</li>
          <li><code>onQueryChange</code> recebe <code>{'{'} query, previousQuery, reason {'}'}</code> quando a UI pede uma nova consulta.</li>
          <li><code>items</code> deve conter a página atual já filtrada, ordenada e paginada pela aplicação consumidora.</li>
          <li><code>totalItems</code> deve refletir o total retornado pela consulta remota para a paginação da Table continuar correta.</li>
          <li><code>reason</code> informa se a mudança veio de busca, troca de coluna, ordenação, página ou tamanho da página.</li>
        </ul>
      </SectionCard>

      <SectionCard
        title="Passo a passo de implementação"
        description="O fluxo externo recomendado é sempre o mesmo. O exemplo abaixo mantém o endpoint dentro de um serviço da aplicação e mostra apenas como a Table recebe query, items, totalItems e onQueryChange."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Passo 1">
            <ul style={storyDocsStyles.list}>
              <li>Crie um estado inicial de <code>query</code> com busca, coluna ativa, ordenação, página e tamanho de página.</li>
              <li>Mantenha endpoint, headers, autenticação e mapeamento de resposta dentro de um serviço da aplicação.</li>
              <li>Faça esse serviço receber a <code>query</code> emitida pela Table.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Passo 2">
            <ul style={storyDocsStyles.list}>
              <li>No <code>onQueryChange</code>, salve a nova <code>query</code> e dispare a consulta remota.</li>
              <li>Depois da resposta, use os <code>items</code> já normalizados pelo serviço.</li>
              <li>Atualize <code>items</code> e <code>totalItems</code>; a Table renderiza a nova página a partir dessas props.</li>
            </ul>
          </StoryPreviewCard>
        </div>

        <SandboxExample
          title="Query externa controlada"
          description="Exemplo prático do fluxo external. No preview do Storybook, a consulta remota é simulada localmente; na aplicação real, o serviço chamaria o endpoint e devolveria items e totalItems já normalizados."
          code={queryExampleCode}
          notes={[
            'A Table não faz fetch e não guarda resultado remoto no modo external.',
            'Endpoint, headers, autenticação e mapeamento de resposta ficam encapsulados no serviço da aplicação.',
            'Quem atualiza a lista visual da tabela é o estado externo de items e totalItems.',
          ]}
        >
          <TableQueryPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  )
}

function TableIrregularDocs() {
  return (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Table Irregular</h3>}
        description={
          <>
            Esta documentação cobre a variante <code>irregular</code>. Ela existe para cenários em que a tabela precisa de uma estrutura HTML mais livre, com agrupamentos, subcolunas ou células mescladas, mas ainda deve herdar o visual do design system.
          </>
        }
        variantTags={irregularVariantTags}
        stats={irregularHeroStats}
      />

      <SectionCard
        title="Quando escolher a variante irregular"
        description="Use a variante irregular quando a estrutura semântica da tabela deixar de ser uma grade simples de colunas e linhas. Nesses casos, a liberdade estrutural vale mais do que os comportamentos automáticos da variante default."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Use quando">
            <ul style={storyDocsStyles.list}>
              <li>Houver necessidade de <code>rowSpan</code>, <code>colSpan</code> ou cabeçalhos com múltiplos níveis.</li>
              <li>As linhas representarem grupos diferentes de conteúdo.</li>
              <li>A tabela precisar de anatomia customizada além do contrato padrão de <code>columns</code> e <code>items</code>.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="O que muda">
            <ul style={storyDocsStyles.list}>
              <li>A Table deixa de gerar células automaticamente.</li>
              <li>Busca, ordenação e paginação passam a não existir por padrão nessa variante.</li>
              <li>O consumidor escreve a marcação HTML diretamente dentro do componente.</li>
            </ul>
          </StoryPreviewCard>
        </div>

        <ul style={storyDocsStyles.list}>
          <li>Monte a estrutura com <code>table</code>, <code>thead</code>, <code>tbody</code>, <code>th</code> e <code>td</code>.</li>
          <li>Use <code>govrs-table__border-left</code>, <code>govrs-table__border-right</code> e <code>govrs-table__border-bottom</code> para complementar a divisão visual quando a grade não for regular.</li>
          <li>Pense nessa variante como um wrapper visual e semântico, não como uma grade de dados com recursos automáticos.</li>
        </ul>

        <SandboxExample
          title="Anatomia irregular"
          description="Exemplo de tabela com grupos de linhas e subcolunas, mantendo a semântica HTML dentro do wrapper do componente."
          code={irregularExampleCode}
          notes={[
            'A tabela interna continua sendo HTML puro, com suporte a rowSpan e colSpan.',
            'Essa variante é ideal quando a liberdade estrutural é mais importante do que busca, ordenação e paginação internas.',
          ]}
        >
          <TableIrregularPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  )
}

function TableCustomCellPreview() {
  return (
    <Table
      title="Lista com ações"
      columns={customCellColumns}
      items={makeActionItems(6)}
    />
  )
}

function TableIrregularPreview() {
  return (
    <Table variant="irregular" title="Tabela irregular — exemplo">
      <TableIrregularMarkup />
    </Table>
  )
}

function TableInteractivePreview(args: TableStoryArgs) {
  if (args.variant === 'irregular') {
    return (
      <div style={{ padding: 16 }}>
        <Table variant="irregular" title={args.title || 'Tabela irregular'}>
          <TableIrregularMarkup />
        </Table>
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <Table
        title={args.title || 'Tabela interativa'}
        columns={columns}
        items={makeItems(200)}
        showCheckbox={args.showCheckbox}
        searchable={args.searchable}
        searchColumn={args.searchColumn || null}
      />
    </div>
  )
}

const meta = {
  title: 'Conteúdo/Table',
  component: Table,
  args: {
    variant: 'default',
    title: 'Tabela interativa',
    showCheckbox: false,
    searchable: true,
    searchColumn: '',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<TableStoryArgs>

export default meta

type Story = StoryObj<TableStoryArgs>

export const TableDocumentacaoDefaultLocal: Story = {
  name: 'Documentação - Default local',
  parameters: {
    controls: { disable: true },
  },
  render: () => <TableDefaultLocalDocs />,
}

export const TableDocumentacaoExterna: Story = {
  name: 'Documentação - Externa',
  parameters: {
    controls: { disable: true },
  },
  render: () => <TableExternalDocs />,
}

export const TableDocumentacaoIrregular: Story = {
  name: 'Documentação - Irregular',
  parameters: {
    controls: { disable: true },
  },
  render: () => <TableIrregularDocs />,
}

export const TableInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'irregular'],
      description: 'Alterna entre a variante padrão com dados tipados e a anatomia irregular baseada em marcação HTML.',
      table: { category: 'Variação' },
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho da tabela.',
      table: { category: 'Conteúdo' },
    },
    showCheckbox: {
      control: 'boolean',
      description: 'Adiciona coluna de seleção por linha na variante padrão.',
      if: { arg: 'variant', eq: 'default' },
      table: { category: 'Comportamento' },
    },
    searchable: {
      control: 'boolean',
      description: 'Define se a busca local fica disponível no cabeçalho da variante padrão.',
      if: { arg: 'variant', eq: 'default' },
      table: { category: 'Comportamento' },
    },
    searchColumn: {
      control: 'select',
      options: ['', 'name', 'amount', 'date'],
      description: 'Restringe a busca a uma coluna específica na variante padrão; vazio mantém a escolha aberta no cabeçalho.',
      if: { arg: 'variant', eq: 'default' },
      table: { category: 'Comportamento' },
    },
  },
  render: (args: TableStoryArgs) => (
    <TableInteractivePreview
      variant={args.variant === 'irregular' ? 'irregular' : 'default'}
      title={typeof args.title === 'string' ? args.title : 'Tabela interativa'}
      showCheckbox={Boolean(args.showCheckbox)}
      searchable={typeof args.searchable === 'boolean' ? args.searchable : true}
      searchColumn={typeof args.searchColumn === 'string' ? args.searchColumn as TableStoryArgs['searchColumn'] : ''}
    />
  ),
}