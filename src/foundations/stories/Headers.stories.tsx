import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import '../styles/index.scss';

const directCode = `<h1 class="headers-12">Título principal</h1>
<h2 class="headers-12">Subtítulo</h2>
<h3 class="headers-12">Seção</h3>
<h4 class="headers-12">Legenda</h4>`;

const wrapperCode = `<div class="headers-12">
  <h1>Título principal</h1>
  <h2>Subtítulo</h2>
  <h3>Seção</h3>
  <h4>Legenda</h4>
</div>`;

function Measurement({
  size,
  lineHeight,
  weight,
}: {
  size: string;
  lineHeight: string;
  weight: string;
}) {
  return (
    <p style={{ ...storyDocsStyles.statText, fontSize: 13 }}>
      {size} / {lineHeight} / {weight}
    </p>
  );
}

function HeadersScalePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="12 col (base)">
        <div className="headers-container">
          <div className="headers-12">
            <div className="headers-demo">
              <h1>Header 1</h1>
              <Measurement size="41px" lineHeight="58px" weight="400" />
            </div>
            <div className="headers-demo">
              <h2>Header 2</h2>
              <Measurement size="36px" lineHeight="52px" weight="400" />
            </div>
            <div className="headers-demo">
              <h3>Header 3</h3>
              <Measurement size="30px" lineHeight="42px" weight="400" />
            </div>
            <div className="headers-demo">
              <h4>Header 4</h4>
              <Measurement size="24px" lineHeight="36px" weight="400" />
            </div>
          </div>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="4 col (base)">
        <div className="headers-container">
          <div className="headers-4">
            <div className="headers-demo">
              <h1>Header 1</h1>
              <Measurement size="30px" lineHeight="42px" weight="400" />
            </div>
            <div className="headers-demo">
              <h2>Header 2</h2>
              <Measurement size="24px" lineHeight="36px" weight="400" />
            </div>
            <div className="headers-demo">
              <h3>Header 3</h3>
              <Measurement size="20px" lineHeight="32px" weight="400" />
            </div>
            <div className="headers-demo">
              <h4>Header 4</h4>
              <Measurement size="18px" lineHeight="28px" weight="400" />
            </div>
          </div>
        </div>
      </StoryPreviewCard>
    </div>
  );
}

function HeadersUsagePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Aplicar na tag">
        <div>
          <h1 className="headers-12">Título principal</h1>
          <h2 className="headers-12">Subtítulo</h2>
          <h3 className="headers-12">Seção</h3>
          <h4 className="headers-12">Legenda</h4>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Aplicar no wrapper">
        <div style={{ border: '1px dashed #cbd5e1', padding: 12, borderRadius: 12 }}>
          <div className="headers-12">
            <h1>Título principal</h1>
            <h2>Subtítulo</h2>
            <h3>Seção</h3>
            <h4>Legenda</h4>
          </div>
        </div>
      </StoryPreviewCard>
    </div>
  );
}

const meta = {
  title: 'Tipografia/Headers',
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
        eyebrow="Escalas de títulos"
        title={<h3 style={storyDocsStyles.heroTitle}>Headers</h3>}
        description="A fundação de headers define o comportamento visual dos títulos de h1 a h4 em duas grades base. O objetivo é manter consistência tipográfica sem acoplar a escala a componentes específicos."
      />

      <SectionCard
        title="Escalas disponíveis"
        description="Cada grade ajusta tamanho e line-height para os níveis de título. A grade 12 col favorece leitura ampla; a grade 4 col compacta o conjunto para contextos menores."
      >
        <SandboxExample
          title="Comparativo das escalas"
          description="Visualização lado a lado das classes base para as duas grades do sistema."
          code={`<div class="headers-12">...</div>
<div class="headers-4">...</div>`}
          notes={[
            'A semântica continua sendo definida pelas tags h1 a h4.',
            'A classe controla apenas a escala visual associada ao contexto.',
          ]}
        >
          <HeadersScalePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Formas de aplicação"
        description="Você pode aplicar a classe diretamente no título ou no wrapper pai. O comportamento visual é o mesmo, então a decisão pode seguir a organização do componente consumidor."
      >
        <SandboxExample
          title="Tag ou wrapper"
          description="As duas abordagens abaixo produzem o mesmo resultado e deixam a escolha na mão de quem compõe a interface."
          code={`${directCode}

${wrapperCode}`}
        >
          <HeadersUsagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Boas práticas"
        description="A fundação de headers existe para padronizar escala tipográfica, não para substituir a hierarquia estrutural do HTML."
      >
        <ul style={storyDocsStyles.list}>
          <li>Escolha a tag correta pela hierarquia de conteúdo e não apenas pelo tamanho visual desejado.</li>
          <li>Prefira manter a mesma grade visual ao longo de uma seção para evitar quebras bruscas de ritmo.</li>
          <li>Quando um componente precisar de uma escala diferente, ajuste a composição do design system antes de criar overrides locais recorrentes.</li>
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
  render: () => <HeadersScalePreview />,
};
