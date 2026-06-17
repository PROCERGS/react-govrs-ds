import type { Meta, StoryObj } from '@storybook/react';

import {
  DocsHero,
  DocsStoryLayout,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs';
import { colors } from '../../tokens/colors';
import '../styles/index.scss';

function CodeBlock({ code }: { code: string }) {
  return (
    <div style={storyDocsStyles.codeBlock}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

const baseColorsCode = `/* Cores base — valores padrão do foundation (:root) */

/* Brand */
--govrs-color-brand-primary: ${colors.brand.primary.toLowerCase()};
--govrs-color-brand-primary-strong: ${colors.brand.primaryStrong.toLowerCase()};
--govrs-color-brand-primary-hover: ${colors.brand.primaryHover.toLowerCase()};
--govrs-color-brand-primary-soft: ${colors.brand.primarySoft.toLowerCase()};

/* Texto */
--govrs-color-text-primary: ${colors.text.primary.toLowerCase()};
--govrs-color-text-secondary: ${colors.text.secondary.toLowerCase()};
--govrs-color-text-muted: ${colors.text.muted.toLowerCase()};
--govrs-color-text-subtle: ${colors.text.subtle.toLowerCase()};
--govrs-color-text-placeholder: ${colors.text.placeholder.toLowerCase()};
--govrs-color-text-inverse: ${colors.text.inverse.toLowerCase()};

/* Superfície e borda */
--govrs-color-surface-base: ${colors.neutral.surfaceBase.toLowerCase()};
--govrs-color-surface-muted: ${colors.neutral.surfaceMuted.toLowerCase()};
--govrs-color-border-default: ${colors.neutral.borderDefault.toLowerCase()};

/* Interação */
--govrs-color-interactive-link: ${colors.interactive.link.toLowerCase()};
--govrs-color-focus: ${colors.interactive.focus.toLowerCase()};`;

const globalOverrideCode = `/* tema-global.css — importar DEPOIS do foundation no projeto consumidor */
@import '@procergs/react-govrs-ds/foundation';

:root {
  /* Cores: afeta body, headers-*, paragraph-*, componentes */
  --govrs-color-text-primary: #04290f;
  --govrs-color-text-muted: #2f5c40;
  --govrs-color-brand-primary: #1a7235;

  /* Espaçamento: afeta margin/padding/gap que usam --govrs-space-* */
  --govrs-space-3: 0.75rem;
  --govrs-space-4: 1.25rem;
  --govrs-space-6: 1.75rem;

  /* Tipografia */
  --govrs-font-size-body-md: 1.0625rem;
  --govrs-line-height-body-sm: 1.625rem;

  /* Raio e borda */
  --govrs-radius-sm: 0.5rem;
  --govrs-border-width-sm: 1px;
}`;

const classScopeCode = `/* tema-portal.css — override por classe, sem alterar o pacote */

/* Aplique a classe no html ou em um wrapper do layout */
.tema-portal {
  --govrs-color-text-primary: #0d3d1f;
  --govrs-color-text-secondary: #1a5c34;
  --govrs-space-4: 1.5rem;
  --govrs-font-size-body-md: 1rem;
}

/* Fundações e componentes dentro do escopo herdam os novos valores */
.tema-portal .headers-12 h1,
.tema-portal .paragraph-12-long,
.tema-portal .govrs-button {
  /* não é obrigatório redeclarar cor/tamanho —
     basta que o ancestral tenha redefinido as variáveis */
}`;

const htmlScopeCode = `<!-- index.html ou layout raiz do tema Volto/Plone -->
<html class="tema-portal">
  <body>
    <h1 class="headers-12">Título</h1>
    <p class="paragraph-12-long">Parágrafo</p>
  </body>
</html>`;

const colorOverrideCode = `/* Sobrescrever só cores em uma seção */
.secao-destaque {
  --govrs-color-text-primary: #135428;
  --govrs-color-text-muted: #4a7560;
  --govrs-color-surface-base: #f8f8f8;
  background: var(--govrs-color-surface-base);
}

.secao-destaque .headers-12 h2 {
  color: var(--govrs-color-text-primary);
}

.secao-destaque .paragraph-12-long {
  color: var(--govrs-color-text-muted);
}`;

const spacingOverrideCode = `/* Sobrescrever margin, padding e gap via tokens de espaço */
.bloco-editorial {
  --govrs-space-2: 0.375rem;
  --govrs-space-3: 0.875rem;
  --govrs-space-4: 1.5rem;
  padding: var(--govrs-space-4);
}

/* headers e paragraphs já usam --govrs-space-* internamente */
.bloco-editorial .headers-12 h1 {
  margin-bottom: var(--govrs-space-3);
}

.bloco-editorial .paragraph-12-long {
  margin-bottom: var(--govrs-space-4);
}`;

const typographyOverrideCode = `/* Sobrescrever escala tipográfica em um bloco */
.bloco-legislacao {
  --govrs-font-size-heading-3xl: 2.25rem;
  --govrs-line-height-heading-3xl: 3.25rem;
  --govrs-font-size-body-md: 1.125rem;
  --govrs-line-height-body-sm: 1.75rem;
}

/* classes da fundação consomem as variáveis automaticamente */
.bloco-legislacao .headers-12 h1 { }
.bloco-legislacao .paragraph-12-long { }`;

const radiusAndBorderCode = `/* Raio, borda e sombra em cards ou formulários locais */
.painel-formulario {
  --govrs-radius-sm: 0.5rem;
  --govrs-border-width-sm: 2px;
  --govrs-color-border-default: #cccccc;
  --govrs-shadow-card: 0 2px 12px rgba(4, 41, 15, 0.08);
}

.painel-formulario .govrs-input,
.painel-formulario .govrs-card {
  border-radius: var(--govrs-radius-sm);
  box-shadow: var(--govrs-shadow-card);
}`;

const tokenReferenceCode = `/* Referência rápida de famílias customizáveis */

/* Cores      */ --govrs-color-*
/* Espaço     */ --govrs-space-*     (margin, padding, gap)
/* Tipografia */ --govrs-font-size-*, --govrs-line-height-*, --govrs-font-weight-*
/* Raio       */ --govrs-radius-*
/* Borda      */ --govrs-border-width-*, --govrs-color-border-*
/* Sombra     */ --govrs-shadow-*
/* Camadas    */ --govrs-z-index-*   (header, navigation, overlay, modal, toast)
/* Motion     */ --govrs-duration-*, --govrs-easing-*`;

const meta = {
  title: 'Customização',
  id: 'customizacao',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {
  name: 'Customização',
  parameters: {
    docsOnly: true,
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Tokens e tema"
        title={<h3 style={storyDocsStyles.heroTitle}>Customização</h3>}
        description="Referência das cores base do design system e exemplos de como sobrescrever variáveis CSS no projeto consumidor — globalmente ou por classe — sem editar o pacote. Fundações (headers, paragraphs, lists) e componentes já consomem os tokens; redefina as variáveis e o visual acompanha."
      />

      <SectionCard
        title="Cores base do projeto"
        description="Valores padrão injetados pelo foundation em :root. Use como referência ao montar overrides no CSS do tema."
      >
        <CodeBlock code={baseColorsCode} />
      </SectionCard>

      <SectionCard
        title="Override no projeto inteiro"
        description="Redefina variáveis em :root após importar o foundation. Afeta todas as páginas e componentes que dependem dos tokens."
      >
        <CodeBlock code={globalOverrideCode} />
      </SectionCard>

      <SectionCard
        title="Override por classe"
        description="Para customizar só um portal, tema ou seção, declare as variáveis na classe e aplique-a no html ou em um wrapper. Filhos com classes da fundação ou componentes do DS herdam os novos valores."
      >
        <p style={storyDocsStyles.statText}>CSS da classe:</p>
        <CodeBlock code={classScopeCode} />
        <p style={storyDocsStyles.statText}>Uso no markup:</p>
        <CodeBlock code={htmlScopeCode} />
      </SectionCard>

      <SectionCard
        title="Exemplos por tipo de token"
        description="Mesmo padrão para cores, espaçamento, tipografia e demais famílias: redefina --govrs-* no escopo desejado e use var() nas regras locais quando necessário."
      >
        <p style={storyDocsStyles.statText}>Cores</p>
        <CodeBlock code={colorOverrideCode} />

        <p style={storyDocsStyles.statText}>Espaçamento (margin, padding, gap)</p>
        <CodeBlock code={spacingOverrideCode} />

        <p style={storyDocsStyles.statText}>Tipografia</p>
        <CodeBlock code={typographyOverrideCode} />

        <p style={storyDocsStyles.statText}>Raio, borda e sombra</p>
        <CodeBlock code={radiusAndBorderCode} />
      </SectionCard>

      <SectionCard
        title="Famílias de variáveis disponíveis"
        description="Qualquer token --govrs-* definido em _variables.scss pode ser sobrescrito da mesma forma."
      >
        <CodeBlock code={tokenReferenceCode} />
        <ul style={storyDocsStyles.list}>
          <li>
            Prefira sobrescrever o token (<code>--govrs-color-text-primary</code>) em vez de fixar hex
            direto em <code>body</code> ou <code>h1</code>.
          </li>
          <li>
            Aliases legados (<code>--pure-100</code>, <code>--color-dark</code>, <code>--color-text</code>)
            apontam para os tokens text; redefinir o token fonte costuma ser suficiente.
          </li>
          <li>
            Para instalação e import do foundation, consulte a página Consumo.
          </li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
};
