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

    if (viteConfig.build?.lib) {
      const { lib, rollupOptions, ...build } = viteConfig.build
      viteConfig.build = build
    }

    return viteConfig
  },
}

export default config