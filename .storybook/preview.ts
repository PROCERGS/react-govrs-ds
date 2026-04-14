import '../src/foundations/styles/index.scss'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Apresentação',
          'Ações',
          ['Button'],
          'Formulários',
          ['Input', 'Select', 'Checkbox', 'Radio', 'Switch', 'Upload', '*'],
          'Busca',
          ['Search'],
          'Feedback',
          ['Alerts', 'Badges', 'Loader', '*'],
          'Conteúdo',
          ['Card', 'Carousel', '*'],
          'Sobreposições',
          ['Modal', '*'],
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