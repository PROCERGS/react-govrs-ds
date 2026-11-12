import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DocsHero, DocsStoryLayout, SectionCard, storyDocsStyles } from '../../../.storybook/docs/storyDocs';
import { Button } from '../../components/Button/Button';
import '../styles/runtime-tokens.scss';
import '../styles/index.scss';

function CodeBlock({ code }: { code: string }) {
  return <div style={storyDocsStyles.codeBlock}><pre><code>{code}</code></pre></div>;
}

const installation = `// Entrada do projeto consumidor (React, Volto/Plone etc.)
import '@procergs/react-govrs-ds/tokens';
import './tema.css'; // depois dos estilos do Design System

// Os componentes também carregam os tokens necessários.
// Use /foundation somente se desejar os estilos globais adicionais.`;

const globalTheme = `/* tema.css — valores do projeto externo */
:root {
  --govrs-color-brand-primary: #6d28d9;
  --govrs-color-brand-primary-hover: #5b21b6;
  --govrs-color-brand-primary-strong: #4c1d95;
  --govrs-color-text-primary: #241333;
  --govrs-color-text-inverse: #ffffff;

  /* Base da escala rem: escala 4 = base × 4; escala 6 = base × 6 */
  --govrs-space-scale-1: 0.3125rem;
  /* Base independente da escala em pixels */
  --govrs-space-pixels-base: 10px;

  --govrs-font-family-base: 'Noto Sans', sans-serif;
  --govrs-font-size-body-md: 1.0625rem;
  --govrs-size-control-lg: 2.75rem;
  --govrs-radius-md: 0.75rem;
  --govrs-layout-container-header: 85rem;
  --govrs-motion-duration-fast: 0.15s;
}`;

const scopedTheme = `/* Uma seção: não altera o restante do site */
.tema-editorial {
  --govrs-color-brand-primary: #6d28d9;
  --govrs-color-brand-primary-hover: #5b21b6;
  --govrs-color-brand-primary-strong: #4c1d95;
  --govrs-color-text-inverse: #ffffff;
  --govrs-radius-pill: 0.5rem;
}

/* React */
<div className="tema-editorial">
  <Button>Publicar conteúdo</Button>
</div>`;

const scopedDerived = `.bloco-compacto {
  --govrs-space-scale-1: 0.2rem;
  /* Redeclare as derivações usadas neste escopo. */
  --govrs-space-scale-4: calc(var(--govrs-space-scale-1) * 4);
  --govrs-space-scale-6: calc(var(--govrs-space-scale-1) * 6);

  /* O mesmo vale para um token semântico que referencia outra cor. */
  --govrs-color-palette-yellow: #ffd166;
  --govrs-color-focus: var(--govrs-color-palette-yellow);
}`;

const componentTheme = `/* Variáveis locais: aplique no próprio elemento do componente. */
.tema-editorial .govrs-button {
  --govrs-button-height: 3rem;
  --govrs-button-padding-inline: calc(var(--govrs-space-scale-4) + 0.25rem);
}

/* Ajuste específico de layout, usando bases já existentes. */
.tema-editorial .acoes {
  gap: var(--govrs-space-scale-4);
  padding-inline: calc(var(--govrs-space-scale-6) - 0.25rem);
}`;

const contrastTheme = `/* Coloque depois dos estilos do DS e preserve os pares de contraste. */
:root:is(.high-contrast, [data-govrs-contrast='high']) {
  --govrs-color-contrast-background: #101010;
  --govrs-color-contrast-foreground: #ffffff;
  --govrs-color-contrast-border: #ffffff;
  --govrs-color-contrast-control-background: #101010;
  --govrs-color-contrast-control-foreground: #ffffff;
  --govrs-color-contrast-control-border: #ffffff;
}`;

const sassExample = `/* Sass do projeto consumidor: valores disponíveis na compilação. */
@use '@procergs/react-govrs-ds/tokens.scss' as tokens;

@media (max-width: #{tokens.$govrs-breakpoint-tablet-sm - 0.0625rem}) {
  .acoes {
    padding-inline: var(--govrs-space-scale-4);
  }
}`;

const families = `Cores:       --govrs-color-*
Espaçamento: --govrs-space-scale-*, --govrs-space-pixels-*
Tipografia:  --govrs-font-family-*, --govrs-font-size-*,
             --govrs-font-weight-*, --govrs-line-height-*
Dimensões:   --govrs-size-*
Layout:      --govrs-layout-*
Bordas:      --govrs-border-*
Raios:       --govrs-radius-*
Sombras:     --govrs-shadow-*
Movimento:   --govrs-motion-*
Camadas:     --govrs-layer-*
Interação:   --govrs-interaction-*
Breakpoints: --govrs-breakpoint-* (media queries usam Sass ou JavaScript)`;

const previewStyle = {
  display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem',
  border: '1px solid var(--govrs-color-border-default)',
  borderRadius: 'var(--govrs-radius-md)',
  '--govrs-color-brand-primary': '#6d28d9',
  '--govrs-color-brand-primary-hover': '#5b21b6',
  '--govrs-color-brand-primary-strong': '#4c1d95',
  '--govrs-color-text-inverse': '#ffffff',
  '--govrs-radius-pill': '0.5rem',
} as CSSProperties;

const meta = { title: 'Customização', id: 'customizacao', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  name: 'Customização',
  parameters: { docsOnly: true },
  render: () => (
    <DocsStoryLayout>
      <DocsHero eyebrow="Tokens e tema" title={<h3 style={storyDocsStyles.heroTitle}>Customização</h3>}
        description="Personalize o Design System no CSS do projeto consumidor. As definições TypeScript pertencem à biblioteca; o tema externo sobrescreve as custom properties publicadas, sem editar o pacote ou executar o gerador." />
      <SectionCard title="1. Carregue o tema externo" description="Importe os estilos do tema depois dos estilos do DS. Esse é o padrão para aplicações React e temas como o procergs-tema.">
        <CodeBlock code={installation} />
      </SectionCard>
      <SectionCard title="2. Sobrescreva os tokens globais" description="Em :root, altere as bases compartilhadas e as decisões semânticas necessárias. Hover, texto e superfícies são decisões próprias: alterar uma cor não cria automaticamente uma nova paleta.">
        <CodeBlock code={globalTheme} />
        <p style={storyDocsStyles.statText}>As escalas rem e px são independentes. Alterar a base rem atualiza suas derivações em :root; sobrescrever somente --govrs-space-scale-4 altera apenas esse passo. A fonte tipográfica escolhida deve ser carregada pelo projeto.</p>
      </SectionCard>
      <SectionCard title="3. Limite a customização a uma seção" description="Tokens herdados podem ser sobrescritos em um wrapper. Neste exemplo, somente os botões da seção recebem a paleta roxa e o raio de 0.5rem.">
        <CodeBlock code={scopedTheme} />
        <div className="tema-editorial" style={previewStyle}><Button>Publicar conteúdo</Button></div>
        <p style={storyDocsStyles.statText}>Referências var() são resolvidas onde a variável é declarada. Uma derivação declarada em :root e herdada pelo wrapper não é recalculada apenas porque sua base mudou no wrapper. Redeclare as derivações necessárias no mesmo escopo:</p>
        <CodeBlock code={scopedDerived} />
      </SectionCard>
      <SectionCard title="4. Ajuste um componente" description="Variáveis locais declaradas pelo componente devem ser sobrescritas no próprio elemento, com uma regra do tema mais específica. Uma variável global afeta todos os consumidores; uma variável local afeta somente o componente selecionado.">
        <CodeBlock code={componentTheme} />
      </SectionCard>
      <SectionCard title="5. Preserve o alto contraste" description="A BarraAcessibilidade e o hook useHighContrast ativam o mapa do DS. Personalize os tokens de contraste nesse contexto, mantendo legibilidade entre texto, controles e fundos.">
        <CodeBlock code={contrastTheme} />
        <p style={storyDocsStyles.statText}>Evite !important e cores fixadas diretamente em estados de contraste. O mapa do DS precisa continuar remapeando os tokens dos componentes.</p>
      </SectionCard>
      <SectionCard title="6. Use os breakpoints na compilação" description="Custom properties CSS não podem substituir valores em condições @media. Para regras do projeto externo, importe os breakpoints Sass e derive o limite necessário.">
        <CodeBlock code={sassExample} />
        <p style={storyDocsStyles.statText}>Sobrescrever --govrs-breakpoint-* no CSS não altera as media queries já compiladas da biblioteca. Os objetos TypeScript também representam valores padrão: não acompanham sobrescritas feitas no CSS do tema.</p>
      </SectionCard>
      <SectionCard title="Famílias atuais" description="Use os nomes publicados pelo pacote para sobrescrever os tokens no CSS do tema. As entradas TypeScript e Sass oferecem os valores padrão para uso no código e na compilação.">
        <CodeBlock code={families} />
      </SectionCard>
    </DocsStoryLayout>
  ),
};
