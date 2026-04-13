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

const baseLabelCode = `<label class="label-base">Label</label>`;

const wrapperLabelCode = `<div class="label-base">
  <label>Label</label>
</div>`;

const tabLabelCode = `<label class="label-tab">Geral</label>
<label class="label-tab">Conteúdo</label>
<label class="label-tab">Permissões</label>`;

function LabelsGalleryPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Label base">
        <label className="label-base">Label</label>
      </StoryPreviewCard>

      <StoryPreviewCard label="Label tab">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <label className="label-tab">Geral</label>
          <label className="label-tab">Conteúdo</label>
          <label className="label-tab">Permissões</label>
        </div>
      </StoryPreviewCard>
    </div>
  );
}

function LabelsUsagePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Aplicar na tag">
        <label className="label-base">Label</label>
      </StoryPreviewCard>

      <StoryPreviewCard label="Aplicar no wrapper">
        <div style={{ border: '1px dashed #cbd5e1', padding: 12, borderRadius: 12 }}>
          <div className="label-base">
            <label>Label</label>
          </div>
        </div>
      </StoryPreviewCard>
    </div>
  );
}

const meta = {
  title: 'Typography/Labels',
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
        eyebrow="Rótulos visuais"
        title={<h3 style={storyDocsStyles.heroTitle}>Labels</h3>}
        description="A fundação de labels cobre duas necessidades visuais distintas: o rótulo base e a aparência de aba. O comportamento continua sob responsabilidade do componente que consome essas classes."
      />

      <SectionCard
        title="Label base"
        description="Use o label base quando o objetivo for manter um rótulo simples, consistente e alinhado a formulários ou pequenas composições informativas."
      >
        <SandboxExample
          title="Aplicação no elemento ou no wrapper"
          description="As duas formas abaixo mostram a mesma aparência visual e deixam a composição mais flexível para outros componentes do sistema."
          code={`${baseLabelCode}

${wrapperLabelCode}`}
          notes={[
            'A semântica continua sendo do elemento label original.',
            'A escolha entre aplicar na tag ou no wrapper depende da estrutura do componente consumidor.',
          ]}
        >
          <LabelsUsagePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Label tab"
        description="A classe label-tab existe para reproduzir a aparência visual de uma barra de abas, sem assumir papéis ARIA ou navegação por teclado."
      >
        <SandboxExample
          title="Composição visual de abas"
          description="Exemplo de rótulos lado a lado para compor uma faixa visual semelhante a tabs."
          code={tabLabelCode}
          notes={[
            'Quando houver um componente real de tabs, a semântica e a navegação devem ser implementadas por ele, não por esta fundação.',
          ]}
        >
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <label className="label-tab">Geral</label>
            <label className="label-tab">Conteúdo</label>
            <label className="label-tab">Permissões</label>
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Boas práticas"
        description="Labels são fundações visuais. Elas não devem esconder comportamento interativo que não esteja explicitamente implementado em um componente acima delas."
      >
        <ul style={storyDocsStyles.list}>
          <li>Prefira <code>label-base</code> para rótulos de formulário e identificação simples.</li>
          <li>Use <code>label-tab</code> apenas quando a interface já tiver um contrato claro de navegação por abas.</li>
          <li>Evite usar labels como substituto de botões ou links quando a intenção for ação, não rotulagem.</li>
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
  render: () => <LabelsGalleryPreview />,
};
