import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import '../styles/index.scss';

const docsHeroStats = [
  {
    title: 'O que é',
    text: 'O Storybook do Matriz 3 é o catálogo vivo do design system: ele centraliza foundations, componentes, estados, exemplos e convenções de uso.',
  },
  {
    title: 'Para que serve',
    text: 'Ele serve para documentar, validar visualmente e explorar o comportamento do design system sem depender de uma aplicação consumidora.',
  },
  {
    title: 'Como usar melhor',
    text: 'Comece por esta página, navegue pelos grupos no menu lateral e use stories de documentação e interação para entender o contrato de cada item.',
  },
] satisfies Array<{ title: string; text: string }>;

const meta = {
  title: 'Apresentação',
  id: 'apresentacao',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function StorybookStructurePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Ações">
        <p style={storyDocsStyles.statText}>
          Reúne gatilhos e controles de ação, como botões e variações orientadas a interação direta.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Formulários">
        <p style={storyDocsStyles.statText}>
          Agrupa entradas de dados, seleção e envio, incluindo componentes como Input, Select, Checkbox e Upload.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Busca e Feedback">
        <p style={storyDocsStyles.statText}>
          Busca cobre exploração de conteúdo; Feedback concentra alertas, badges, loaders e respostas de estado da interface.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Conteúdo e Sobreposições">
        <p style={storyDocsStyles.statText}>
          Conteúdo mostra blocos de exibição como Card e Carousel. Sobreposições cobre diálogos e interrupções de fluxo, como Modal.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Tipografia">
        <p style={storyDocsStyles.statText}>
          Mantém as foundations tipográficas separadas para consulta de escala, hierarquia e aplicação visual fora de componentes específicos.
        </p>
      </StoryPreviewCard>
    </div>
  );
}

function StoryTypesPreview() {
  return (
    <div style={storyDocsStyles.previewGrid}>
      <StoryPreviewCard label="Documentação">
        <p style={storyDocsStyles.statText}>
          Explica quando usar, principais props, limites do contrato e exemplos recomendados.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Interativo">
        <p style={storyDocsStyles.statText}>
          Permite testar args e estados diretamente pelo painel de controls, sem sair do componente.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Exemplos e combinados">
        <p style={storyDocsStyles.statText}>
          Mostram cenários compostos, comparações entre variantes e usos mais próximos do contexto real.
        </p>
      </StoryPreviewCard>
    </div>
  );
}

function StorybookToolsPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Controls em stories interativos">
        <p style={storyDocsStyles.statText}>
          Nos stories marcados como interativos, o painel de <strong>Controls</strong> logo abaixo do story permite editar props em tempo real. Isso é útil para validar variantes, estados, labels, limites e combinações da API sem alterar código.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Vision Simulator">
        <p style={storyDocsStyles.statText}>
          No menu superior, o atalho de acessibilidade permite acessar o <strong>Vision Simulator</strong>. Ele ajuda a inspecionar como contraste, hierarquia e legibilidade se comportam sob simulacoes visuais, apoiando revisoes de acessibilidade.
        </p>
      </StoryPreviewCard>

      <StoryPreviewCard label="Tamanho de tela e mobile">
        <p style={storyDocsStyles.statText}>
          O toolbar superior tambem permite trocar o <strong>viewport</strong> para tamanhos menores. Use essa opcao para revisar rapidamente o comportamento responsivo e verificar versoes mobile dos componentes e composicoes.
        </p>
      </StoryPreviewCard>
    </div>
  );
}

export const Page: Story = {
  name: 'Apresentação',
  parameters: {
    docsOnly: true,
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Apresentação do catálogo"
        title={<h3 style={storyDocsStyles.heroTitle}>Design System Matriz 3</h3>}
        description="Este Storybook é a camada de demonstração e documentação do Matriz 3 Design System. Ele organiza os componentes e padrões por intenção de uso, mostra exemplos reais de cada componente juntamente com seu código, e serve como referência central para consumo e evolução do sistema."
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como o catálogo está estruturado"
        description="A navegação lateral foi organizada para refletir intenção de uso, e não apenas tipo técnico de artefato. Isso facilita encontrar o componente certo a partir do problema que a interface precisa resolver."
      >
        <StorybookStructurePreview />
      </SectionCard>

      <SectionCard
        title="Como ler as histórias"
        description="A maior parte do catálogo combina mais de um tipo de story. Essa divisão ajuda a separar consulta de contrato, exploração interativa e exemplos prontos de uso."
      >
        <StoryTypesPreview />
      </SectionCard>

      <SectionCard
        title="Ferramentas de exploração"
        description="Além da navegação lateral, o Storybook do Matriz 3 usa a interface padrão do Storybook para apoiar inspeção de API, acessibilidade e comportamento responsivo durante a validação manual."
      >
        <StorybookToolsPreview />

        <ul style={storyDocsStyles.list}>
          <li>Abra uma story interativa e use o painel de Controls para alterar props sem editar o componente.</li>
          <li>Use o Vision Simulator no menu superior para observar impacto visual e legibilidade em cenários de acessibilidade.</li>
          <li>Troque o viewport no toolbar para tamanhos menores e valide encaixe, densidade e adaptação mobile.</li>
        </ul>
      </SectionCard>

      <SectionCard
        title="Fluxo recomendado de exploração"
        description="O melhor uso do Storybook é progressivo: entenda a estrutura geral, entre no grupo que resolve sua necessidade e só depois aprofunde props, estados e composição."
      >
        <ul style={storyDocsStyles.list}>
          <li>Use esta página como porta de entrada para entender o desenho geral do catálogo.</li>
          <li>Consulte Consumo para instalação, import do foundation e uso dos componentes; consulte Customização para cores base e sobrescrita de tokens no CSS do tema.</li>
          <li>Navegue pelo menu lateral a partir da intenção de uso: ações, formulários, busca, feedback, conteúdo, sobreposições e tipografia.</li>
          <li>Abra primeiro a story de documentação para entender o contrato público antes de testar controls ou composições.</li>
          <li>Use stories interativas para validar estados e variações sem depender de aplicações consumidoras, ajustando props pelo painel de Controls.</li>
          <li>Considere o Storybook como referência oficial de demonstração do design system durante evolução, review e validação manual.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
};