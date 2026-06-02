const registryKey = '__govrsLoadedStylesheets__'

type GlobalWithStylesheetRegistry = typeof globalThis & {
  [registryKey]?: Set<string>
}

function getStylesheetRegistry() {
  const scope = globalThis as GlobalWithStylesheetRegistry

  if (!scope[registryKey]) {
    scope[registryKey] = new Set<string>()
  }

  return scope[registryKey]
}

export function ensureStylesheet(href: string) {
  if (!href || typeof document === 'undefined') {
    return
  }

  const registry = getStylesheetRegistry()

  if (registry.has(href)) {
    return
  }

  const resolvedHref = new URL(href, document.baseURI).href
  const existingLink = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')).find(
    (link) => link.href === resolvedHref || link.getAttribute('href') === href,
  )

  if (existingLink) {
    registry.add(href)
    return
  }

  const head = document.head ?? document.getElementsByTagName('head')[0]

  if (!head) {
    return
  }

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.setAttribute('data-govrs-stylesheet', 'true')
  head.appendChild(link)

  registry.add(href)
}