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

const paragraphs12Code = `<p class="paragraph-12-short">Parágrafo curto - exemplo de texto.</p>
<p class="paragraph-12-small">Parágrafo pequeno - exemplo de texto.</p>
<p class="paragraph-12-long">Parágrafo longo - exemplo de texto.</p>`;

const paragraphs4Code = `<p class="paragraph-4-short">Parágrafo curto - exemplo de texto.</p>
<p class="paragraph-4-long">Parágrafo longo - exemplo de texto.</p>`;

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

function ParagraphsScalePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="12 col (base)">
        <div className="paragraphs-container" style={{ minWidth: 280 }}>
          <div className="paragraphs-12">
            <div className="paragraphs-demo">
              <p className="paragraph-12-short">Parágrafo curto - exemplo de texto.</p>
              <Measurement size="20px" lineHeight="32px" weight="400" />
            </div>

            <div className="paragraphs-demo">
              <p className="paragraph-12-small">Parágrafo pequeno - exemplo de texto.</p>
              <Measurement size="16px" lineHeight="24px" weight="400" />
            </div>

            <div className="paragraphs-demo">
              <p className="paragraph-12-long">
                Parágrafo longo - exemplo de texto. Este parágrafo é declarado
                separadamente mesmo que compartilhe valores com o curto.
              </p>
              <Measurement size="20px" lineHeight="32px" weight="400" />
            </div>
          </div>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="4 col (base)">
        <div className="paragraphs-container" style={{ minWidth: 280 }}>
          <div className="paragraphs-4">
            <div className="paragraphs-demo">
              <p className="paragraph-4-short">Parágrafo curto - exemplo de texto.</p>
              <Measurement size="16px" lineHeight="24px" weight="400" />
            </div>

            <div className="paragraphs-demo">
              <p className="paragraph-4-long">Parágrafo longo - exemplo de texto.</p>
              <Measurement size="16px" lineHeight="28px" weight="400" />
            </div>
          </div>
        </div>
      </StoryPreviewCard>
    </div>
  );
}

const meta = {
  title: 'Tipografia/Paragraphs',
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
        eyebrow="Escalas de parágrafo"
        title={<h3 style={storyDocsStyles.heroTitle}>Paragraphs</h3>}
        description="A fundação de paragraphs define classes nomeadas por grade e variante para padronizar texto corrido no design system sem exigir combinações ad hoc de tamanho e line-height."
      />

      <SectionCard
        title="Variações por grade"
        description="A grade 12 col oferece variantes curta, pequena e longa. A grade 4 col simplifica a família e aproxima a escala curta da pequena."
      >
        <SandboxExample
          title="Comparativo das classes"
          description="Visualização lado a lado das variações disponíveis nas duas grades base."
          code={`${paragraphs12Code}

${paragraphs4Code}`}
          notes={[
            'A variação longa em 12 col compartilha a mesma escala do parágrafo curto, mas permanece nomeada separadamente por clareza de uso.',
            'No sistema 4 col, a variação curta cobre o caso que historicamente se aproximava do parágrafo pequeno.',
          ]}
        >
          <ParagraphsScalePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Naming e aplicação"
        description="As classes seguem o formato paragraph-<cols>-<variant> para deixar a escolha mais explícita e evitar empilhamento de várias classes no mesmo elemento."
      >
        <ul style={storyDocsStyles.list}>
          <li>Exemplos: <code>paragraph-12-short</code>, <code>paragraph-12-small</code>, <code>paragraph-4-long</code>.</li>
          <li>Prefira usar a classe final desejada diretamente no elemento de texto.</li>
          <li>Se um caso recorrente não estiver coberto, evolua a fundação antes de criar estilos locais repetidos.</li>
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
  render: () => <ParagraphsScalePreview />,
};
