import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import './Table.scss'


const DEFAULT_PAGE_SIZES = [20, 50, 100] as const

type TableCellValue = string | number | boolean | null | undefined

type TableItemBase = {
  id?: string | number
} & Record<string, TableCellValue>

type TableColumnKey<TItem extends TableItemBase> = Extract<keyof TItem, string>

type TableCellRenderContext<
  TItem extends TableItemBase,
  TKey extends TableColumnKey<TItem> = TableColumnKey<TItem>,
> = {
  value: TItem[TKey]
  item: TItem
  rowIndex: number
}

type TableColumn<
  TItem extends TableItemBase,
  TKey extends TableColumnKey<TItem> = TableColumnKey<TItem>,
> = {
  key: TKey
  label: ReactNode
  render?: (context: TableCellRenderContext<TItem, TKey>) => ReactNode
}

type TableBaseProps = {
  title?: ReactNode
  className?: string
  id?: string
}

type TableDefaultSharedProps<TItem extends TableItemBase> = TableBaseProps & {
  variant?: 'default'
  columns: TableColumn<TItem>[]
  showCheckbox?: boolean
  searchable?: boolean
  searchColumn?: TableColumnKey<TItem> | null
  onSelectionChange?: (items: TItem[]) => void
}

type TableDefaultLocalProps<TItem extends TableItemBase> = TableDefaultSharedProps<TItem> & {
  items: TItem[]
  queryMode?: 'local'
}

type TableDefaultExternalProps<TItem extends TableItemBase> = TableDefaultSharedProps<TItem> & {
  items: TItem[]
  queryMode: 'external'
  query: TableQuery<TItem>
  totalItems: number
  onQueryChange: TableQueryChangeHandler<TItem>
}

type TableDefaultProps<TItem extends TableItemBase> =
  | TableDefaultLocalProps<TItem>
  | TableDefaultExternalProps<TItem>

type TableIrregularProps = TableBaseProps & {
  variant: 'irregular'
  children: ReactNode
}

type TableProps<TItem extends TableItemBase = TableItemBase> = TableDefaultProps<TItem> | TableIrregularProps

type TableSortState<TItem extends TableItemBase> = {
  key: TableColumnKey<TItem>
  direction: 'asc' | 'desc'
}

type TableQueryMode = 'local' | 'external'

type TableQueryChangeReason = 'search' | 'searchColumn' | 'sort' | 'page' | 'pageSize'

type TableQuery<TItem extends TableItemBase> = {
  search: string
  searchColumn: TableColumnKey<TItem> | null
  sort: TableSortState<TItem> | null
  page: number
  pageSize: number
}

type TableQueryInput<TItem extends TableItemBase> = Partial<TableQuery<TItem>>

type TableQueryChangeContext<TItem extends TableItemBase> = {
  query: TableQuery<TItem>
  previousQuery: TableQuery<TItem>
  reason: TableQueryChangeReason
}

type TableQueryChangeHandler<TItem extends TableItemBase> = (context: TableQueryChangeContext<TItem>) => void

type TableDefaultViewProps<TItem extends TableItemBase> = TableDefaultProps<TItem> & {
  tableId: string
}

type TableActiveSearchColumn<TItem extends TableItemBase> = TableColumnKey<TItem> | ''

function isColumnSortable<TItem extends TableItemBase>(column: TableColumn<TItem>) {
  return column.render == null
}

function normalizePositiveInteger(value: number | undefined, fallback: number) {
  if (!Number.isFinite(value) || value == null) {
    return fallback
  }

  return Math.max(1, Math.floor(value))
}

function normalizeNonNegativeInteger(value: number | undefined, fallback: number) {
  if (!Number.isFinite(value) || value == null) {
    return fallback
  }

  return Math.max(0, Math.floor(value))
}

function normalizeSort<TItem extends TableItemBase>(
  sort: TableSortState<TItem> | null | undefined,
  columns: TableColumn<TItem>[],
) {
  if (!sort) {
    return null
  }

  const activeColumn = columns.find((column) => column.key === sort.key)

  if (!activeColumn || !isColumnSortable(activeColumn)) {
    return null
  }

  return sort
}

function normalizeQuery<TItem extends TableItemBase>({
  columns,
  lockedSearchColumn,
  query,
}: {
  columns: TableColumn<TItem>[]
  lockedSearchColumn: TableColumnKey<TItem> | null
  query?: TableQueryInput<TItem> | null
}): TableQuery<TItem> {
  const fallbackSearchColumn = lockedSearchColumn ?? columns[0]?.key ?? null
  const querySearchColumn = query?.searchColumn
  const hasValidQuerySearchColumn = querySearchColumn != null
    && columns.some((column) => column.key === querySearchColumn)

  return {
    search: typeof query?.search === 'string' ? query.search : '',
    searchColumn: lockedSearchColumn ?? (hasValidQuerySearchColumn ? querySearchColumn : fallbackSearchColumn),
    sort: normalizeSort(query?.sort, columns),
    page: normalizePositiveInteger(query?.page, 1),
    pageSize: normalizePositiveInteger(query?.pageSize, DEFAULT_PAGE_SIZES[0]),
  }
}

function isIrregularVariant<TItem extends TableItemBase>(props: TableProps<TItem>): props is TableIrregularProps {
  return props.variant === 'irregular'
}

function isIsoDateString(value: unknown): value is string {
  if (typeof value !== 'string') {
    return false
  }

  return /^\d{4}-\d{2}-\d{2}(T|$)/.test(value) && !Number.isNaN(Date.parse(value))
}

function resolveItemKey<TItem extends TableItemBase>(item: TItem, allItems: TItem[]) {
  if (item.id !== undefined && item.id !== null) {
    return String(item.id)
  }

  return `__idx_${allItems.indexOf(item)}`
}

function ArrowLeftIcon() {
  return (
    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M0.281269 4.53125L4.53127 0.28125C4.84377 0 5.31252 0 5.59377 0.28125L6.31252 1C6.59377 1.28125 6.59377 1.78125 6.31252 2.0625L3.28127 5.0625L6.31252 8.09375C6.59377 8.375 6.59377 8.84375 6.31252 9.15625L5.59377 9.84375C5.31252 10.1562 4.84377 10.1562 4.53127 9.84375L0.281269 5.59375C1.90735e-05 5.3125 1.90735e-05 4.84375 0.281269 4.53125Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M21.6943 21.8438C21.9755 22.1562 21.9755 22.625 21.663 22.9062L20.788 23.7812C20.5068 24.0938 20.038 24.0938 19.7255 23.7812L16.6318 20.6875C16.4755 20.5312 16.413 20.3438 16.413 20.1562V19.625C15.288 20.5 13.913 21 12.413 21C8.81929 21 5.91304 18.0938 5.91304 14.5C5.91304 10.9375 8.81929 8 12.413 8C15.9755 8 18.913 10.9375 18.913 14.5C18.913 16.0312 18.3818 17.4062 17.538 18.5H18.038C18.2255 18.5 18.413 18.5938 18.5693 18.7188L21.6943 21.8438ZM12.413 18.5C14.6005 18.5 16.413 16.7188 16.413 14.5C16.413 12.3125 14.6005 10.5 12.413 10.5C10.1943 10.5 8.41304 12.3125 8.41304 14.5C8.41304 16.7188 10.1943 18.5 12.413 18.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M11 1L1 11M1 1l10 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SortIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10.1943 17H17.6318C18.288 17 18.6318 17.8125 18.163 18.2812L14.4443 22C14.1318 22.3125 13.663 22.3125 13.3818 22L9.66304 18.2812C9.16304 17.8125 9.50679 17 10.1943 17ZM18.163 13.7188C18.6318 14.2188 18.288 15 17.6318 15H10.1943C9.50679 15 9.16304 14.2188 9.66304 13.7188L13.3818 10C13.663 9.71875 14.1318 9.71875 14.4443 10L18.163 13.7188Z"
        fill="currentColor"
      />
    </svg>
  )
}

function getColumnTypes<TItem extends TableItemBase>(columns: TableColumn<TItem>[], items: TItem[]) {
  const sample = items.slice(0, 20)

  return columns.reduce<Record<string, 'date' | 'number' | 'string'>>((accumulator, column) => {
    const votes = { date: 0, number: 0, string: 0 }

    sample.forEach((item) => {
      const value = item[column.key]
      const trimmedValue = typeof value === 'string' ? value.trim() : null

      if (isIsoDateString(value)) {
        votes.date += 1
        return
      }

      if (
        value != null
        && (
          typeof value === 'number'
          || (trimmedValue != null && /^-?\d+(\.\d+)?$/.test(trimmedValue))
        )
      ) {
        votes.number += 1
        return
      }

      votes.string += 1
    })

    accumulator[column.key] = votes.date > votes.number && votes.date > votes.string
      ? 'date'
      : votes.number > votes.string
        ? 'number'
        : 'string'

    return accumulator
  }, {})
}

function renderIrregularTable(props: TableIrregularProps, tableId: string, className?: string) {
  const classes = ['govrs-table', 'govrs-table--irregular', className].filter(Boolean).join(' ')

  return (
    <div id={tableId} className={classes}>
      {props.title ? (
        <div className="govrs-table__header">
          <div className="govrs-table__title">{props.title}</div>
        </div>
      ) : null}

      <div className="govrs-table__wrapper">{props.children}</div>
    </div>
  )
}

export function Table<TItem extends TableItemBase = TableItemBase>(props: TableProps<TItem>) {
  const generatedId = useId().replace(/:/g, '')
  const tableId = props.id ?? `govrs-table-${generatedId}`

  if (isIrregularVariant(props)) {
    return renderIrregularTable(props, tableId, props.className)
  }

  return <TableDefaultView<TItem> {...props} tableId={tableId} />
}

function TableDefaultView<TItem extends TableItemBase>(props: TableDefaultViewProps<TItem>) {
  const {
    tableId,
    title,
    columns,
    items: providedItems = [],
    showCheckbox = false,
    searchable = true,
    searchColumn = null,
    onSelectionChange,
    className,
  } = props
  const searchInputRef = useRef<HTMLInputElement>(null)
  const isSearchEnabled = searchable && Boolean(title)
  const queryMode = props.queryMode ?? 'local'
  const externalQuery = props.queryMode === 'external' ? props.query : null
  const externalTotalItems = props.queryMode === 'external' ? props.totalItems : undefined
  const externalOnQueryChange = props.queryMode === 'external' ? props.onQueryChange : null
  const [internalQuery, setInternalQuery] = useState<TableQuery<TItem>>(() => normalizeQuery({
    columns,
    lockedSearchColumn: searchColumn,
  }))
  const effectiveQuery = useMemo(() => normalizeQuery({
    columns,
    lockedSearchColumn: searchColumn,
    query: externalQuery ?? internalQuery,
  }), [columns, searchColumn, externalQuery, internalQuery])
  const activeSearchColumn: TableActiveSearchColumn<TItem> = searchColumn ?? effectiveQuery.searchColumn ?? columns[0]?.key ?? ''
  const [debouncedSearch, setDebouncedSearch] = useState(() => effectiveQuery.search.trim())
  const [searchOpen, setSearchOpen] = useState(() => Boolean(externalQuery?.search ?? ''))
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set())
  const resolvedItems = providedItems

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus()
    }
  }, [searchOpen])

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedSearch(effectiveQuery.search.trim()), 250)

    return () => window.clearTimeout(timeoutId)
  }, [effectiveQuery.search])

  const columnTypes = useMemo(() => getColumnTypes(columns, resolvedItems), [columns, resolvedItems])

  const commitQuery = (nextQueryInput: TableQueryInput<TItem>, reason: TableQueryChangeReason) => {
    const nextQuery = normalizeQuery({
      columns,
      lockedSearchColumn: searchColumn,
      query: {
        ...effectiveQuery,
        ...nextQueryInput,
      },
    })

    if (externalOnQueryChange) {
      externalOnQueryChange({
        query: nextQuery,
        previousQuery: effectiveQuery,
        reason,
      })
      return
    }

    setInternalQuery(nextQuery)
  }

  const pageResult = useMemo(() => {
    if (queryMode === 'external') {
      const resolvedTotalItems = normalizeNonNegativeInteger(externalTotalItems, resolvedItems.length)
      const totalPages = Math.max(1, Math.ceil(resolvedTotalItems / effectiveQuery.pageSize))
      const currentPage = Math.min(effectiveQuery.page, totalPages)
      const startIndex = resolvedTotalItems > 0 ? (currentPage - 1) * effectiveQuery.pageSize : 0
      const endIndex = resolvedTotalItems > 0
        ? Math.min(resolvedTotalItems, startIndex + resolvedItems.length)
        : 0

      return {
        items: resolvedItems,
        totalFiltered: resolvedTotalItems,
        totalPages,
        startIndex,
        endIndex,
        currentPage,
      }
    }

    const query = isSearchEnabled && debouncedSearch ? debouncedSearch.toLowerCase() : ''
    const activeQuerySearchColumn = searchColumn ?? effectiveQuery.searchColumn

    const filteredItems = query
      ? resolvedItems.filter((item) => {
          if (activeQuerySearchColumn) {
            return String(item[activeQuerySearchColumn] ?? '').toLowerCase().includes(query)
          }

          return columns.some((column) => String(item[column.key] ?? '').toLowerCase().includes(query))
        })
      : resolvedItems

    const totalFiltered = filteredItems.length

    const activeSortColumn = effectiveQuery.sort
      ? columns.find((column) => column.key === effectiveQuery.sort?.key && isColumnSortable(column))
      : null
    const activeSort = effectiveQuery.sort && activeSortColumn ? effectiveQuery.sort : null

    const sortedItems = activeSort
      ? [...filteredItems].sort((left, right) => {
          const direction = activeSort.direction === 'desc' ? -1 : 1
          const type = columnTypes[activeSort.key] ?? 'string'
          const leftValue = left[activeSort.key]
          const rightValue = right[activeSort.key]

          if (type === 'number') {
            return (Number(leftValue) - Number(rightValue)) * direction
          }

          if (type === 'date') {
            return (Date.parse(String(leftValue)) - Date.parse(String(rightValue))) * direction
          }

          return String(leftValue ?? '').localeCompare(String(rightValue ?? '')) * direction
        })
      : filteredItems

    const totalPages = Math.max(1, Math.ceil(totalFiltered / effectiveQuery.pageSize))
    const currentPage = Math.min(effectiveQuery.page, totalPages)
    const startIndex = (currentPage - 1) * effectiveQuery.pageSize
    const pagedItems = sortedItems.slice(startIndex, startIndex + effectiveQuery.pageSize)
    const endIndex = totalFiltered > 0 ? Math.min(totalFiltered, startIndex + pagedItems.length) : 0

    return {
      items: pagedItems,
      totalFiltered,
      totalPages,
      startIndex,
      endIndex,
      currentPage,
    }
  }, [resolvedItems, debouncedSearch, isSearchEnabled, searchColumn, effectiveQuery, columns, columnTypes, queryMode, externalTotalItems])

  const visibleItems = pageResult.items
  const hasVisibleSelection = visibleItems.length > 0 && visibleItems.every((item) => selectedKeys.has(resolveItemKey(item, resolvedItems)))
  const displayStart = pageResult.totalFiltered > 0 ? pageResult.startIndex + 1 : 0
  const currentPage = pageResult.currentPage

  const classes = ['govrs-table', 'govrs-table--default', className].filter(Boolean).join(' ')

  const handlePageChange = (nextPage: number) => {
    commitQuery({ page: nextPage }, 'page')
  }

  const handlePageSizeChange = (nextPageSize: number) => {
    commitQuery({ page: 1, pageSize: nextPageSize }, 'pageSize')
  }

  const updateSelectedKeys = (nextKeys: Set<string>) => {
    if (selectedKeys.size === nextKeys.size) {
      let isEqual = true

      nextKeys.forEach((key) => {
        if (!selectedKeys.has(key)) {
          isEqual = false
        }
      })

      if (isEqual) {
        return
      }
    }

    const normalizedKeys = new Set(nextKeys)
    setSelectedKeys(normalizedKeys)
    onSelectionChange?.(resolvedItems.filter((item) => normalizedKeys.has(resolveItemKey(item, resolvedItems))))
  }

  const toggleSelectAllVisible = () => {
    const visibleKeys = new Set(visibleItems.map((item) => resolveItemKey(item, resolvedItems)))
    const nextKeys = new Set(selectedKeys)

    if (Array.from(visibleKeys).every((key) => selectedKeys.has(key))) {
      visibleKeys.forEach((key) => nextKeys.delete(key))
    } else {
      visibleKeys.forEach((key) => nextKeys.add(key))
    }

    updateSelectedKeys(nextKeys)
  }

  const toggleRowSelection = (row: TItem) => {
    const nextKeys = new Set(selectedKeys)
    const rowKey = resolveItemKey(row, resolvedItems)

    if (nextKeys.has(rowKey)) {
      nextKeys.delete(rowKey)
    } else {
      nextKeys.add(rowKey)
    }

    updateSelectedKeys(nextKeys)
  }

  const handleSort = (column: TableColumn<TItem>) => {
    if (!isColumnSortable(column)) {
      return
    }

    const key = column.key
    const isSorted = effectiveQuery.sort?.key === key
    let nextSort: TableSortState<TItem> | null = null

    if (!isSorted) {
      const sampleValue = resolvedItems[0]?.[key]
      nextSort = { key, direction: isIsoDateString(sampleValue) ? 'desc' : 'asc' }
    } else if (effectiveQuery.sort?.direction === 'asc') {
      nextSort = { key, direction: 'desc' }
    }

    commitQuery({ sort: nextSort, page: 1 }, 'sort')
  }

  return (
    <div id={tableId} className={classes}>
      {title ? (
        <div className="govrs-table__header">
          <div className="govrs-table__title">{title}</div>

          {isSearchEnabled ? (
            <div className="govrs-table__search">
              {!searchOpen ? (
                <button
                  type="button"
                  className="govrs-table__icon-button"
                  aria-expanded={searchOpen}
                  aria-label={searchOpen ? 'Fechar pesquisa' : 'Abrir pesquisa'}
                  onClick={() => setSearchOpen((current) => !current)}
                >
                  <SearchIcon />
                </button>
              ) : null}

              <div className={[
                'govrs-table__search-controls',
                searchOpen ? 'govrs-table__search-controls--open' : undefined,
              ].filter(Boolean).join(' ')}>
                {!searchColumn ? (
                  <select
                    className="govrs-table__select"
                    value={activeSearchColumn}
                    onChange={(event) => {
                      const nextSearchColumn = event.target.value as TableColumnKey<TItem>
                      commitQuery({ searchColumn: nextSearchColumn, page: 1 }, 'searchColumn')
                    }}
                    aria-label="Coluna de pesquisa"
                  >
                    {columns.map((column) => (
                      <option key={column.key} value={column.key}>
                        {typeof column.label === 'string' ? column.label : column.key}
                      </option>
                    ))}
                  </select>
                ) : null}

                <input
                  ref={searchInputRef}
                  type="search"
                  className="govrs-table__input"
                  placeholder="Pesquisar..."
                  value={effectiveQuery.search}
                  onChange={(event) => {
                    const nextSearch = event.target.value
                    commitQuery({ search: nextSearch, page: 1 }, 'search')
                  }}
                  aria-label="Pesquisar na tabela"
                />

                <button
                  type="button"
                  className="govrs-table__icon-button govrs-table__icon-button--close"
                  aria-label="Fechar pesquisa"
                  onClick={() => setSearchOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="govrs-table__wrapper">
        <table className="govrs-table__table">
          <thead>
            <tr>
              {showCheckbox ? (
                <th className="govrs-table__checkbox-col">
                  <input
                    type="checkbox"
                    aria-label="Selecionar todas as linhas visíveis"
                    onChange={toggleSelectAllVisible}
                    checked={hasVisibleSelection}
                  />
                </th>
              ) : null}

              {columns.map((column) => {
                const isSortable = isColumnSortable(column)
                const isSorted = isSortable && effectiveQuery.sort?.key === column.key
                const ariaSort = isSorted
                  ? (effectiveQuery.sort?.direction === 'asc' ? 'ascending' : 'descending')
                  : 'none'

                return (
                  <th key={column.key} className="govrs-table__head-cell" aria-sort={isSortable ? ariaSort : undefined}>
                    {isSortable ? (
                      <button
                        type="button"
                        className={[
                          'govrs-table__head-button',
                          isSorted ? 'govrs-table__head-button--sorted' : undefined,
                        ].filter(Boolean).join(' ')}
                        onClick={() => handleSort(column)}
                      >
                        <span className="govrs-table__head-label">{column.label}</span>
                        <span
                          className={[
                            'govrs-table__sort-icon',
                            !isSorted ? 'govrs-table__sort-icon--hidden' : undefined,
                          ].filter(Boolean).join(' ')}
                          aria-hidden="true"
                        >
                          <SortIcon />
                        </span>
                      </button>
                    ) : (
                      <div className="govrs-table__head-content">
                        <span className="govrs-table__head-label">{column.label}</span>
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody>
            {visibleItems.map((row, index) => {
              const rowKey = resolveItemKey(row, resolvedItems)

              return (
                <tr key={rowKey} className="govrs-table__row">
                  {showCheckbox ? (
                    <td className="govrs-table__checkbox-col">
                      <input
                        type="checkbox"
                        aria-label={`Selecionar linha ${pageResult.startIndex + index + 1}`}
                        checked={selectedKeys.has(rowKey)}
                        onChange={() => toggleRowSelection(row)}
                      />
                    </td>
                  ) : null}

                  {columns.map((column) => {
                    const cellValue = row[column.key]

                    return (
                      <td key={column.key} className="govrs-table__cell">
                        {column.render
                          ? column.render({
                              value: cellValue,
                              item: row,
                              rowIndex: pageResult.startIndex + index,
                            })
                          : cellValue ?? ''}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="govrs-table__footer">
        <div className="govrs-table__footer-group">
          <span className="govrs-table__footer-label">Exibir</span>

          <select
            className="govrs-table__select"
            value={effectiveQuery.pageSize}
            onChange={(event) => handlePageSizeChange(Number(event.target.value))}
          >
            {DEFAULT_PAGE_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <span className="govrs-table__footer-info">
            {displayStart}-{pageResult.endIndex} de {pageResult.totalFiltered} itens
          </span>
        </div>

        <div className="govrs-table__footer-group">
          {pageResult.totalFiltered > effectiveQuery.pageSize ? (
            <>
              <span className="govrs-table__footer-label">Página</span>

              <select
                className="govrs-table__select"
                value={currentPage}
                onChange={(event) => handlePageChange(Number(event.target.value))}
              >
                {Array.from({ length: pageResult.totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <option key={pageNumber} value={pageNumber}>
                    {pageNumber}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="govrs-table__pager-button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                aria-label="Página anterior"
                disabled={currentPage === 1}
              >
                <ArrowLeftIcon />
              </button>

              <button
                type="button"
                className="govrs-table__pager-button govrs-table__pager-button--next"
                onClick={() => handlePageChange(Math.min(pageResult.totalPages, currentPage + 1))}
                aria-label="Próxima página"
                disabled={currentPage === pageResult.totalPages}
              >
                <ArrowLeftIcon />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export namespace Table {
  export type Item<TItem extends TableItemBase = TableItemBase> = TItem
  export type ItemBase = TableItemBase
  export type Props<TItem extends TableItemBase = TableItemBase> = TableProps<TItem>
  export type Column<
    TItem extends TableItemBase = TableItemBase,
    TKey extends TableColumnKey<TItem> = TableColumnKey<TItem>,
  > = TableColumn<TItem, TKey>
  export type ColumnKey<TItem extends TableItemBase = TableItemBase> = TableColumnKey<TItem>
  export type Query<TItem extends TableItemBase = TableItemBase> = TableQuery<TItem>
  export type QueryChangeContext<TItem extends TableItemBase = TableItemBase> = TableQueryChangeContext<TItem>
  export type QueryChangeHandler<TItem extends TableItemBase = TableItemBase> = TableQueryChangeHandler<TItem>
  export type QueryChangeReason = TableQueryChangeReason
  export type QueryMode = TableQueryMode
  export type SortState<TItem extends TableItemBase = TableItemBase> = TableSortState<TItem>
  export type CellRenderContext<
    TItem extends TableItemBase = TableItemBase,
    TKey extends TableColumnKey<TItem> = TableColumnKey<TItem>,
  > = TableCellRenderContext<TItem, TKey>
}

export default Table