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

    const { lib: _lib, rollupOptions: _rollupOptions, ...build } = viteConfig.build ?? {}
    viteConfig.build = build

    viteConfig.plugins = (viteConfig.plugins ?? []).filter(
      (plugin) =>
        plugin &&
        typeof plugin === 'object' &&
        'name' in plugin &&
        plugin.name !== 'inject-library-css-imports',
    )

    return viteConfig
  },
}

export default config