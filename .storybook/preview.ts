import '../src/foundations/styles/index.scss'
import type { Preview } from '@storybook/react'

const preview: Preview = {
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
          ['Header', 'MenuHamburger', 'Step', '*'],
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