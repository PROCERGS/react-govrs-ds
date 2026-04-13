import '../src/foundations/styles/index.scss'
import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
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