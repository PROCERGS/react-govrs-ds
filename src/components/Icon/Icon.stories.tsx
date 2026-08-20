import type { Meta, StoryObj } from '@storybook/react'
import {
  faHome,
  faUser,
  faSearch,
  faCog,
  faHeart,
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faTimesCircle,
  faArrowRight,
  faDownload,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import {
  faGithub as faGithubBrand,
  faTwitter as faTwitterBrand,
  faLinkedinIn as faLinkedinBrand,
} from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Icon } from './Icon'
import './Icon.scss'
import '../../foundations/styles/index.scss'

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Ícones reforçam visualmente a intenção de uma ação, status ou conceito. Use ícones para complementar texto, não como substituto único sem contexto.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar tamanhos, estilos e propriedades de acessibilidade.",
  },
  {
    title: 'Comportamento',
    text: 'O componente suporta Font Awesome (Solid e Brand), tamanhos de xs até 5x, pode funcionar como link e respeita regras de acessibilidade com aria-label e aria-hidden.',
  },
]

const brandExampleCode = `import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

<Icon icon={faGithub} size="lg" href="https://github.com" label="GitHub" />
<Icon icon={faTwitter} size="lg" href="https://twitter.com" label="Twitter" />
<Icon icon={faLinkedin} size="lg" href="https://linkedin.com" label="LinkedIn" />`

const solidExampleCode = `import { faHome, faUser, faSearch, faCog } from '@fortawesome/free-solid-svg-icons'

<Icon icon={faHome} label="Página inicial" />
<Icon icon={faUser} label="Perfil" />
<Icon icon={faSearch} label="Buscar" />
<Icon icon={faCog} label="Configurações" />`

const sizeExampleCode = `import { faHome } from '@fortawesome/free-solid-svg-icons'

{/* padrão: 16px (sem prop size) */}
<Icon icon={faHome} label="Padrão" />

<Icon icon={faHome} size="xs" label="Extra pequeno" />
<Icon icon={faHome} size="sm" label="Pequeno" />
<Icon icon={faHome} size="lg" label="Grande" />
<Icon icon={faHome} size="2x" label="2x" />
<Icon icon={faHome} size="3x" label="3x" />
<Icon icon={faHome} size="4x" label="4x" />
<Icon icon={faHome} size="5x" label="5x" />`

const iconPropertyExampleCode = `import {
  faHome,
  faUser,
  faSearch,
  faDownload,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

/* label define apenas aria-label (acessibilidade), sem texto visível */
<Icon icon={faHome} label="Início" />
<Icon icon={faUser} label="Conta" />
<Icon icon={faSearch} label="Pesquisar" />
<Icon icon={faDownload} label="Baixar arquivo" />
<Icon icon={faInfoCircle} label="Mais informações" />`

const accessibilityExampleCode = `import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'

{/* Ícone informativo sem texto adjacente: use label */}
<Icon icon={faArrowRight} href="/proxima-pagina" label="Ir para próxima página" />

{/* Ícone decorativo junto de texto: use decorative */}
<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
  <Icon icon={faCheckCircle} decorative />
  <span>Operação concluída com sucesso</span>
</div>`

const linkAccessibilityExampleCode = `import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

<Icon icon={faArrowRight} href="/proxima-pagina" label="Ir para próxima página" />`

const ICON_REGISTRY: Record<string, { icon: IconDefinition; source: 'solid' | 'brands' }> = {
  faHome: { icon: faHome, source: 'solid' },
  faUser: { icon: faUser, source: 'solid' },
  faSearch: { icon: faSearch, source: 'solid' },
  faCog: { icon: faCog, source: 'solid' },
  faHeart: { icon: faHeart, source: 'solid' },
  faCheckCircle: { icon: faCheckCircle, source: 'solid' },
  faExclamationCircle: { icon: faExclamationCircle, source: 'solid' },
  faInfoCircle: { icon: faInfoCircle, source: 'solid' },
  faTimesCircle: { icon: faTimesCircle, source: 'solid' },
  faArrowRight: { icon: faArrowRight, source: 'solid' },
  faDownload: { icon: faDownload, source: 'solid' },
  faUpload: { icon: faUpload, source: 'solid' },
  faGithub: { icon: faGithub, source: 'brands' },
  faTwitter: { icon: faTwitter, source: 'brands' },
  faLinkedinIn: { icon: faLinkedinIn, source: 'brands' },
}

function resolveIconName(iconName: string | undefined, icon: IconDefinition) {
  const normalized = iconName?.trim()

  if (normalized && ICON_REGISTRY[normalized]) {
    return normalized
  }

  const fallbackByIcon = Object.entries(ICON_REGISTRY).find(([, value]) => value.icon === icon)

  return fallbackByIcon?.[0] ?? 'faHome'
}

function buildInteractiveCode(args: {
  icon: IconDefinition
  iconName?: string
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x'
  label?: string
  decorative?: boolean
  href?: string
}) {
  const iconName = resolveIconName(args.iconName, args.icon)
  const iconConfig = ICON_REGISTRY[iconName] ?? ICON_REGISTRY.faHome
  const importSource =
    iconConfig.source === 'brands'
      ? '@fortawesome/free-brands-svg-icons'
      : '@fortawesome/free-solid-svg-icons'

  const props: string[] = [`icon={${iconName}}`]

  if (args.size) {
    props.push(`size="${args.size}"`)
  }

  if (args.label) {
    props.push(`label="${args.label}"`)
  }

  if (args.decorative) {
    props.push('decorative')
  }

  if (args.href) {
    props.push(`href="${args.href}"`)
  }

  return `import { ${iconName} } from '${importSource}'\n\n<Icon ${props.join(' ')} />`
}

const meta = {
  title: 'Símbolos/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

type InteractivePreviewProps = {
  icon?: IconDefinition
  iconName?: string
  size?: Icon.Size
  label?: string
  decorative?: boolean
  href?: string
  className?: string
}

function SizePreview() {
  const sizes: Array<'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x'> = ['xs', 'sm', 'lg', '2x', '3x', '4x', '5x']

  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="default (16px)">
        <Icon icon={faHome} label="Tamanho padrão" />
      </StoryPreviewCard>
      {sizes.map((size) => (
        <StoryPreviewCard key={size} label={`${size} (${getSizePixels(size)}px)`}>
          <Icon icon={faHome} size={size} />
        </StoryPreviewCard>
      ))}
    </div>
  )
}

function SolidStylePreview() {
  const icons = [
    { icon: faHome, ariaLabel: 'Ícone Home' },
    { icon: faUser, ariaLabel: 'Ícone Usuário' },
    { icon: faSearch, ariaLabel: 'Ícone Busca' },
    { icon: faCog, ariaLabel: 'Ícone Configurações' },
    { icon: faHeart, ariaLabel: 'Ícone Favorito' },
    { icon: faCheckCircle, ariaLabel: 'Ícone Sucesso' },
    { icon: faExclamationCircle, ariaLabel: 'Ícone Atenção' },
    { icon: faInfoCircle, ariaLabel: 'Ícone Informação' },
  ]

  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      {icons.map((item) => (
        <div key={item.ariaLabel} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Icon icon={item.icon} size="2x" label={item.ariaLabel} />
        </div>
      ))}
    </div>
  )
}

function BrandStylePreview() {
  const icons = [
    { icon: faGithubBrand, ariaLabel: 'GitHub' },
    { icon: faTwitterBrand, ariaLabel: 'Twitter' },
    { icon: faLinkedinBrand, ariaLabel: 'LinkedIn' },
  ]

  return (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
      {icons.map((item) => (
        <div key={item.ariaLabel} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Icon icon={item.icon} size="2x" label={item.ariaLabel} />
        </div>
      ))}
    </div>
  )
}

function AccessibilityExamplesPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Com aria-label (acessível)">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Icon icon={faCheckCircle} size="lg" label="Operação bem-sucedida" />
          <span>Salvo com sucesso</span>
        </div>
      </StoryPreviewCard>

      <StoryPreviewCard label="Decorativo (aria-hidden)">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Icon icon={faCheckCircle} size="lg" decorative />
          <span>Salvo com sucesso</span>
        </div>
      </StoryPreviewCard>
    </div>
  )
}

function LinkIconPreview() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Icon icon={faArrowRight} size="lg" href="#" label="Ir para próxima página" />
    </div>
  )
}

function IconPropertyPreview() {
  const examples = [
    { icon: faHome, ariaLabel: 'Home' },
    { icon: faUser, ariaLabel: 'User' },
    { icon: faSearch, ariaLabel: 'Search' },
    { icon: faDownload, ariaLabel: 'Download' },
    { icon: faInfoCircle, ariaLabel: 'InfoCircle' },
  ]

  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
      {examples.map((item) => (
        <div key={item.ariaLabel} style={{ display: 'grid', gap: 8, justifyItems: 'center' }}>
          <Icon icon={item.icon} label={item.ariaLabel} />
        </div>
      ))}
    </div>
  )
}

function getSizePixels(size: string): number {
  const sizeMap: Record<string, number> = {
    xs: 8,
    sm: 12,
    lg: 21,
    '2x': 32,
    '3x': 49,
    '4x': 65,
    '5x': 100,
  }
  return sizeMap[size] || 16
}

export const Docs: Story = {
  name: 'Documentação',
  args: {
    icon: faHome,
  },
  parameters: {
    docsOnly: true,
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação Guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Icon</h3>}
        description="Componente visual para ícones, utilizando a biblioteca Font Awesome."
        stats={docsHeroStats}
      />

      <SectionCard
        title="Sobre Font Awesome"
        description="O componente Icon utiliza a biblioteca Font Awesome como fonte de ícones. Atualmente no Design System são utilizados 2 estilos disponíveis: Solid e Brand."
      >
        <p style={storyDocsStyles.statText}>
          Para usar o componente, importe os ícones desejados de <code>@fortawesome/free-solid-svg-icons</code> ou{' '}
          <code>@fortawesome/free-brands-svg-icons</code>.
        </p>

        <p style={storyDocsStyles.statText}>
          Para mais ícones, visite <a href="https://fontawesome.com/icons" target="_blank" rel="noopener noreferrer">Font Awesome Icons</a>.
        </p>

        <SandboxExample
          title="Solid"
          description="Ícones sólidos e preenchidos. Ideal para ações, estados e conceitos gerais."
          code={solidExampleCode}
        >
          <SolidStylePreview />
        </SandboxExample>

        <SandboxExample
          title="Brand"
          description="Logos de marcas e redes sociais. Ideal para links de integração e redes externas."
          code={brandExampleCode}
        >
          <BrandStylePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props principais"
        description="Estas são as props universais do componente. Elas definem o tamanho, href para links, questões de acessibilidade e classes."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="icon (obrigatório)">
            <p style={storyDocsStyles.statText}>
              Definição do ícone do Font Awesome. Importar a função correspondente do Font Awesome.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="size">
            <p style={storyDocsStyles.statText}>
              Tamanho do ícone: <code>xs</code>, <code>sm</code>, <code>lg</code>, <code>2x</code>, <code>3x</code>,{' '}
              <code>4x</code> ou <code>5x</code>. Sem informar <code>size</code>, o tamanho padrão é <code>16px</code>.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="href (opcional)">
            <p style={storyDocsStyles.statText}>
              Se fornecido, transforma o ícone em um link <code>&lt;a&gt;</code> navegável.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="label (opcional)">
            <p style={storyDocsStyles.statText}>
              Texto alternativo para acessibilidade. Usado como <code>aria-label</code> quando o ícone não é decorativo.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="decorative">
            <p style={storyDocsStyles.statText}>
              Quando <code>true</code>, adiciona <code>aria-hidden="true"</code>. Use quando o ícone é apenas visual e
              redundante com texto adjacente. Padrão: <code>false</code>.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="className (opcional)">
            <p style={storyDocsStyles.statText}>
              Classes CSS customizadas adicionais para estilização específica.
            </p>
          </StoryPreviewCard>
        </div>
      </SectionCard>

      <SectionCard
        title="Propriedade icon"
        description="A prop icon define qual símbolo será renderizado. Ela recebe um IconDefinition importado do Font Awesome."
      >
        <SandboxExample
          title="Exemplos com ícones diferentes"
          description="Mesmo componente, mudando apenas a propriedade icon para representar intenções diferentes."
          code={iconPropertyExampleCode}
        >
          <IconPropertyPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Tamanhos disponíveis"
        description="Sem informar size, o ícone usa o tamanho padrão de 16px."
      >
        <SandboxExample
          title="Escala de tamanhos"
          description="Comparativo entre o tamanho padrão (16px) e os tamanhos nomeados do componente."
          code={sizeExampleCode}
        >
          <SizePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Acessibilidade"
        description="Melhores práticas para usar ícones de forma inclusiva."
      >
        <div style={{ ...storyDocsStyles.cardGrid}}>
          <StoryPreviewCard label="Quando usar aria-label">
            <p style={storyDocsStyles.statText}>
              Use <code>label</code> quando o ícone <strong>não possui texto adjacente</strong> ou quando precisa de
              contexto adicional. O que for escrito em label aparecerá para leitores de tela. Exemplo: botão com ícone, link com ícone isolado.
            </p>
          </StoryPreviewCard>

          <StoryPreviewCard label="Quando usar aria-hidden">
            <p style={storyDocsStyles.statText}>
              Use <code>decorative</code> quando o ícone é <strong>redundante com texto</strong> ou apenas
              visual. Neste caso leitores de tela irão ignorar o ícone. Exemplo: ícone antes de "Sucesso" ou "Atenção".
            </p>
          </StoryPreviewCard>
        </div>
        <SandboxExample
          title="Exemplos de acessibilidade"
          description="Use label para ícones informativos sem texto adjacente e decorative para ícones puramente visuais."
          code={accessibilityExampleCode}
        >
          <AccessibilityExamplesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Ícone com link"
        description="Para usar o ícone como ação de navegação, informe href e mantenha label para acessibilidade."
      >
        <SandboxExample
          title="Exemplo de ícone com link"
          description="O ícone vira um elemento clicável e o texto de label é lido por tecnologias assistivas."
          code={linkAccessibilityExampleCode}
        >
          <LinkIconPreview />
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

function InteractivePreview(args: InteractivePreviewProps) {
  const trimmedIconName = args.iconName?.trim() ?? ''
  const resolvedIcon = ICON_REGISTRY[trimmedIconName]?.icon
  const hasValidIcon = Boolean(resolvedIcon)
  const code = buildInteractiveCode({
    icon: resolvedIcon || faHome,
    iconName: trimmedIconName,
    size: args.size,
    label: args.label,
    decorative: args.decorative,
    href: args.href,
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        {hasValidIcon ? (
          <Icon {...args} icon={resolvedIcon} />
        ) : (
          <p style={{ ...storyDocsStyles.statText, color: '#d32f2f' }}>
            ⚠️ Ícone <code>{trimmedIconName}</code> não encontrado no catálogo. Digite um nome válido (ex.: faHome, faUser).
          </p>
        )}
      </div>

      <div>
        <p style={{ ...storyDocsStyles.statText, marginBottom: 8 }}>
          <strong>Código para copiar e colar:</strong>
        </p>
        <pre style={storyDocsStyles.codeBlock}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

export const Interactive: StoryObj<typeof InteractivePreview> = {
  name: 'Interativo',
  render: (args) => <InteractivePreview {...args} />,
  args: {
    icon: faHome,
    iconName: 'faHome',
    size: 'lg',
    label: 'Ícone de exemplo',
    decorative: false,
    href: '',
  },
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    iconName: {
      control: 'text',
      description: 'Nome do ícone a testar (ex.: faHome, faUser, faSearch, faArrowRight). Digite o nome exato do ícone disponível no Font Awesome.',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'lg', '2x', '3x', '4x', '5x'],
      table: { defaultValue: { summary: 'lg' } },
    },
    label: {
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    decorative: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    href: {
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    icon: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
}
