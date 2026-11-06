import { execFileSync } from 'node:child_process'
import { resolve, sep } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  async viteFinal(viteConfig) {
    viteConfig.base = process.env.STORYBOOK_BASE || '/'

    const build = { ...viteConfig.build }
    delete build.lib
    delete build.rollupOptions
    viteConfig.build = build

    viteConfig.plugins = (viteConfig.plugins ?? []).filter(
      (plugin) =>
        plugin &&
        typeof plugin === 'object' &&
        'name' in plugin &&
        plugin.name !== 'inject-library-css-imports',
    )

    viteConfig.plugins.push({
      name: 'watch-design-tokens',
      configureServer(server) {
        const source = resolve(__dirname, '../src/tokens')
        const regenerate = (file: string) => {
          if (!resolve(file).startsWith(source + sep) || !file.endsWith('.ts')) return
          try {
            const output = execFileSync(
              process.execPath,
              [resolve(__dirname, '../scripts/generate-tokens.mjs')],
              { encoding: 'utf8' },
            )
            server.config.logger.info(output.trim())
          } catch (error) {
            server.config.logger.error(error instanceof Error ? error.message : String(error))
          }
        }
        server.watcher.add(source)
        for (const event of ['add', 'change', 'unlink'] as const) server.watcher.on(event, regenerate)
        server.httpServer?.once('close', () => { for (const event of ['add', 'change', 'unlink'] as const) server.watcher.off(event, regenerate) })
      },
    })

    return viteConfig
  },
}

export default config