import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import '../styles/index.scss';

const listCode = `<ul class="listas-base">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`;

function Measurement({ size, lineHeight, weight }: { size: string; lineHeight: string; weight: string }) {
  return (
    <p style={{ ...storyDocsStyles.statText, fontSize: 13 }}>
      {size} / {lineHeight} / {weight}
    </p>
  );
}

function ListsPreview() {
  return (
    <div className="listas-container" style={{ maxWidth: 960 }}>
      <div className="listas-base">
        <div className="listas-demo">
          <ul>
            <li>Lista 1</li>
            <li>Lista 2</li>
            <li>Lista 3</li>
          </ul>
          <Measurement size="20px" lineHeight="32px" weight="400" />
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: 'Tipografia/Lists',
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
        eyebrow="Listas tipográficas"
        title={<h3 style={storyDocsStyles.heroTitle}>Lists</h3>}
        description="A fundação Lists centraliza a apresentação tipográfica de listas simples e ajuda a evitar repetição de regras de texto em componentes e páginas consumidoras."
      />

      <SectionCard
        title="Uso recomendado"
        description="Use a classe listas-base para listas simples que precisam herdar a escala tipográfica do sistema sem virar um componente composto."
      >
        <SandboxExample
          title="Markup mínimo"
          description="Estrutura básica para listas que seguem a fundação tipográfica documentada."
          code={listCode}
          notes={[
            'Essa fundação cobre listas textuais simples; listas com comportamento adicional devem subir para um componente ou pattern.',
          ]}
        >
          <ListsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Quando não usar"
        description="A fundação de listas não substitui componentes que precisam de semântica extra, ícones, estados interativos ou composições mais ricas."
      >
        <ul style={storyDocsStyles.list}>
          <li>Se a lista exigir interação por item, considere um componente dedicado em vez da fundação tipográfica.</li>
          <li>Se houver necessidade recorrente de variações de espaçamento ou hierarquia, avalie evoluir a base compartilhada antes de criar overrides locais.</li>
          <li>Mantenha a semântica nativa de <code>ul</code> e <code>li</code> sempre que possível.</li>
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
  render: () => <ListsPreview />,
};
