import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import '../styles/index.scss';

const placeholderCode = `<input class="input-placeholder" placeholder="Exemplo" />`;

function PlaceholderPreview() {
  return (
    <div style={{ maxWidth: 420 }}>
      <input
        className="input-placeholder"
        placeholder="Exemplo"
        style={{ padding: 8, width: '100%' }}
      />
    </div>
  );
}

const meta = {
  title: 'Typography/Placeholders',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Placeholder"
        title={<h3 style={storyDocsStyles.heroTitle}>Placeholders</h3>}
        description="A fundação de placeholders padroniza o texto de sugestão dentro de campos. Ela atua apenas no próprio input, sem modificar a anatomia externa do componente consumidor."
      />

      <SectionCard
        title="Aplicação correta"
        description="O estilo de placeholder só entra em vigor quando a classe é aplicada diretamente no elemento input. Esse detalhe é a principal restrição de uso desta fundação."
      >
        <SandboxExample
          title="Markup mínimo"
          description="Exemplo direto da aplicação correta da classe input-placeholder."
          code={placeholderCode}
          notes={[
            'Wrappers pais não propagam o estilo do placeholder.',
            'Quando o campo exigir estrutura mais rica, o componente Input continua sendo a camada apropriada.',
          ]}
        >
          <PlaceholderPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Boas práticas"
        description="A fundação de placeholder existe para consistência visual, não para substituir componentes completos de formulário."
      >
        <ul style={storyDocsStyles.list}>
          <li>Prefira combinar esta fundação com componentes ou estruturas que já resolvam label, feedback e estados.</li>
          <li>Evite usar placeholder como único meio de descrever o campo quando o formulário exigir contexto persistente.</li>
          <li>Mantenha o texto curto e orientado a exemplo, não como substituto da instrução principal do campo.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
};

export const Galeria: Story = {
  name: 'Galeria',
  parameters: {
    controls: { disable: true },
  },
  render: () => <PlaceholderPreview />,
};
