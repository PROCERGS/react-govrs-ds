import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Tooltip } from './Tooltip'
import './Tooltip.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['top', 'right', 'bottom', 'left', 'states']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa complementar um botão, rótulo ou opção com informação curta e contextual sem expandir o layout principal.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar conteúdo, título, posição, estado e uso com ícone. A documentação resume os padrões de trigger, estados e posições.",
  },
  {
    title: 'Comportamento',
    text: 'O Tooltip abre em hover e foco, fecha com Escape e mantém o contrato legado em que children pode ser trigger ou corpo do balão dependendo da presença de content.',
  },
] satisfies Array<{ title: string; text: string }>

const IconSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#E52207" />
    <path
      d="M16.0625 14L19.1875 17.1562C19.5938 17.5312 19.5938 18.1562 19.1875 18.5312L18.5 19.2188C18.125 19.625 17.5 19.625 17.125 19.2188L14 16.0938L10.8438 19.2188C10.4688 19.625 9.84377 19.625 9.46877 19.2188L8.78127 18.5312C8.37502 18.1562 8.37502 17.5312 8.78127 17.1562L11.9063 14L8.78127 10.875C8.37502 10.5 8.37502 9.875 8.78127 9.5L9.46877 8.8125C9.84377 8.40625 10.4688 8.40625 10.8438 8.8125L14 11.9375L17.125 8.8125C17.5 8.40625 18.125 8.40625 18.5 8.8125L19.1875 9.5C19.5938 9.875 19.5938 10.5 19.1875 10.875L16.0625 14Z"
      fill="white"
    />
  </svg>
)

const recommendedUsageCode = `<Tooltip content="Rótulo do passo" position="top">
  <Button>Trigger</Button>
</Tooltip>`

const compatibilityUsageCode = `<Tooltip position="top">
  <div>Conteúdo do tooltip (children = body)</div>
</Tooltip>`

const positionsCode = `<Tooltip content="Topo" position="top"><Button>Top</Button></Tooltip>
<Tooltip content="Direita" position="right"><Button>Right</Button></Tooltip>
<Tooltip content="Baixo" position="bottom"><Button>Bottom</Button></Tooltip>
<Tooltip content="Esquerda" position="left"><Button>Left</Button></Tooltip>`

const statesCode = `<Tooltip content="Sucesso" state="success"><Button>S</Button></Tooltip>
<Tooltip content="Atenção" state="warning"><Button>W</Button></Tooltip>
<Tooltip content="Erro" state="error"><Button>E</Button></Tooltip>
<Tooltip content="Info" state="info"><Button>I</Button></Tooltip>`

const meta = {
  title: 'Sobreposições/Tooltip',
  component: Tooltip,
  args: {
    content: 'Texto do tooltip de exemplo',
    title: undefined,
    position: 'top',
    state: undefined,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

function TooltipPatternsPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Children como trigger">
        <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
          <p style={storyDocsStyles.statText}>
            Passe o conteúdo do balão em <code>content</code> e use o children como
            elemento visível que ativa o tooltip.
          </p>
          <Tooltip content="Rótulo do passo" position="top">
            <Button>Trigger</Button>
          </Tooltip>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Children como corpo">
        <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
          <p style={storyDocsStyles.statText}>
            Sem <code>content</code>, o componente mantém o comportamento legado e
            renderiza um trigger padrão com o children dentro do balão.
          </p>
          <Tooltip position="top">
            <div>Conteúdo do tooltip renderizado via children.</div>
          </Tooltip>
        </div>
      </StoryPreviewCard>
    </div>
  )
}

function TooltipPositionsPreview() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 40,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 220,
        flexWrap: 'wrap',
      }}
    >
      <Tooltip content="Topo" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Direita" position="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Baixo" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Esquerda" position="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  )
}

function TooltipStatesPreview() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Sucesso" state="success">
        <Button>S</Button>
      </Tooltip>
      <Tooltip content="Atenção" state="warning">
        <Button>W</Button>
      </Tooltip>
      <Tooltip content="Erro" state="error">
        <Button>E</Button>
      </Tooltip>
      <Tooltip content="Info" state="info">
        <Button>I</Button>
      </Tooltip>
    </div>
  )
}

function TooltipCompositionPreview() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Tooltip content="Opção A: descrição" position="right">
        <label style={{ cursor: 'pointer', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
          <input type="radio" name="tooltip-radio" />
          <span>Opção A</span>
        </label>
      </Tooltip>

      <Tooltip content={<span>Este é um aviso importante</span>} title="Atenção" icon={IconSvg} position="right">
        <Button variant="secondary">Com ícone e título</Button>
      </Tooltip>
    </div>
  )
}

function TooltipInteractivePreview(args: Tooltip.Props & { withIcon?: boolean }) {
  const { withIcon = false, state, ...tooltipProps } = args

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <Tooltip {...tooltipProps} state={state} icon={withIcon ? IconSvg : null}>
        <Button>Trigger</Button>
      </Tooltip>
    </div>
  )
}

export const TooltipDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Tooltip</h3>}
        description={
          <>
            O componente <code>Tooltip</code> exibe conteúdo contextual em hover ou
            foco, preservando o contrato legado de trigger customizado ou trigger
            padrão com children como corpo.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Padrões de uso"
        description="A origem suporta dois modos. O recomendado é usar children como trigger e content como conteúdo do balão. Para compatibilidade, o componente também aceita children como corpo quando content não é informado."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>content</code> define o corpo do tooltip e libera o children para atuar como trigger.</li>
          <li>Sem <code>content</code>, o componente renderiza um trigger padrão e usa o children como corpo do balão.</li>
          <li><code>title</code> adiciona um cabeçalho curto acima do conteúdo.</li>
          <li><code>icon</code> reforça visualmente o conteúdo quando o contexto pede um aviso ou destaque.</li>
        </ul>

        <SandboxExample
          title="Trigger customizado e modo legado"
          description="Comparação entre o uso recomendado e o comportamento legado trazido da origem."
          code={`${recommendedUsageCode}\n\n${compatibilityUsageCode}`}
        >
          <TooltipPatternsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Posições e estados"
        description="O Tooltip mantém as quatro posições da origem e aceita estados visuais para contextualizar sucesso, atenção, erro ou informação."
      >
        <SandboxExample
          title="Posicionamento"
          description="Use top, right, bottom ou left conforme o espaço disponível ao redor do trigger."
          code={positionsCode}
        >
          <TooltipPositionsPreview />
        </SandboxExample>

        <SandboxExample
          title="Estados visuais"
          description="Os estados reutilizam as cores semânticas do design system para diferenciar o contexto do conteúdo exibido."
          code={statesCode}
        >
          <TooltipStatesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Composição com outros elementos"
        description="O componente pode envolver botões, labels e pequenos wrappers de inputs para disponibilizar ajuda contextual sem duplicar layout."
      >
        <SandboxExample
          title="Exemplos compostos"
          description="O exemplo abaixo cobre uso com opção de formulário e com conteúdo enriquecido por título e ícone."
          code={`<Tooltip content="Opção A: descrição" position="right">\n  <label>...</label>\n</Tooltip>\n\n<Tooltip content={<span>Este é um aviso importante</span>} title="Atenção" icon={<AlertIcon />} position="right">\n  <Button variant="secondary">Com ícone e título</Button>\n</Tooltip>`}
        >
          <TooltipCompositionPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e acessibilidade"
        description="Tooltips funcionam melhor com mensagens curtas e contexto complementar. Conteúdo essencial para a tarefa não deve depender apenas de hover."
      >
        <ul style={storyDocsStyles.list}>
          <li>Prefira conteúdo curto; mensagens longas começam a competir com padrões mais adequados como popover, alert ou modal.</li>
          <li>O componente abre em foco e hover, mas informações críticas ainda devem existir em outro ponto acessível da interface.</li>
          <li>Quando o trigger não for naturalmente focável, o componente adiciona foco por teclado na renderização do gatilho simples.</li>
          <li>Os estados visuais mudam apenas a apresentação; eles não substituem semântica ou validação do fluxo principal.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const TooltipInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    children: {
      control: false,
      description: 'A story usa um botão fixo como trigger para manter a comparação consistente.',
      table: { category: 'Composição' },
    },
    content: {
      control: 'text',
      description: 'Texto principal exibido dentro do balão.',
      table: { category: 'Conteúdo' },
    },
    title: {
      control: 'text',
      description: 'Cabeçalho opcional do tooltip.',
      table: { category: 'Conteúdo' },
    },
    position: {
      control: { type: 'radio' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Posiciona o balão em relação ao trigger.',
      table: { category: 'Composição' },
    },
    state: {
      control: { type: 'select' },
      options: ['none', 'success', 'warning', 'error', 'info'],
      mapping: {
        none: undefined,
        success: 'success',
        warning: 'warning',
        error: 'error',
        info: 'info',
      },
      labels: {
        none: 'Nenhum',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        info: 'Info',
      },
      description: 'Aplica o estado visual semântico do tooltip.',
      table: { category: 'Estado visual' },
    },
    icon: {
      control: false,
      description: 'A story controla o ícone pela flag withIcon para simplificar a interação.',
      table: { category: 'Conteúdo' },
    },
    withIcon: {
      control: 'boolean',
      description: 'Adiciona o ícone decorativo ao lado do título e do conteúdo.',
      table: { category: 'Conteúdo' },
    },
    defaultTriggerLabel: {
      control: 'text',
      description: 'Rótulo acessível do trigger padrão quando o componente não recebe content.',
      table: { category: 'Acessibilidade' },
    },
  },
  args: {
    content: 'Texto do tooltip de exemplo',
    title: '',
    position: 'top',
    state: undefined,
    withIcon: false,
    defaultTriggerLabel: 'Mostrar informação contextual',
  },
  render: (args) => <TooltipInteractivePreview {...args} />,
}

export const TooltipPosicoes: Story = {
  name: 'Posições',
  parameters: {
    controls: { disable: true },
  },
  render: () => <TooltipPositionsPreview />,
}

export const TooltipEstados: Story = {
  name: 'Estados',
  parameters: {
    controls: { disable: true },
  },
  render: () => <TooltipStatesPreview />,
}