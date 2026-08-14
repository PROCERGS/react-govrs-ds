import '../src/foundations/styles/runtime-tokens.scss'
import '../src/foundations/styles/index.scss'
import { createElement } from 'react'
import type { Decorator, Preview } from '@storybook/react'

const withContrastMode: Decorator = (Story, context) => {
  const enabled = Boolean(context.args?.modoContraste)

  return createElement(
    'div',
    {
      className: enabled ? 'high-contrast' : undefined,
      'data-govrs-contrast': enabled ? 'high' : undefined,
      style: enabled
        ? {
            minHeight: '100vh',
            width: '100%',
            backgroundColor: 'var(--govrs-color-contrast-background)',
            color: 'var(--govrs-color-contrast-foreground)',
          }
        : undefined,
    },
    createElement(Story),
  )
}

const preview: Preview = {
  decorators: [withContrastMode],
  parameters: {
    options: {
      storySort: {
        order: [
          'Apresentação',
          'Consumo',
          'Customização',
          'Ações',
          ['Button'],
          'Formulários',
          ['Input', 'DatePicker', 'Select', 'Checkbox', 'Radio', 'Switch', 'Upload', '*'],
          'Busca',
          ['Search'],
          'Navegação',
          ['Header', 'MenuHamburger', 'BreadCrumbs', 'Step', '*'],
          'Feedback',
          ['Alerts', 'Badges', 'Loader', '*'],
          'Conteúdo',
          ['Accordion', 'Card', 'Carousel', 'List', ['Default', 'Link', 'Check', 'Card', '*'], '*'],
          'Sobreposições',
          ['Modal', 'Tooltip', '*'],
          'Tipografia',
          ['Headers', 'Paragraphs', 'Labels', 'Lists', 'Placeholders', '*'],
          '*',
        ],
      },
    },
    controls: {
      disableSaveFromUI: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;