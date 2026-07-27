import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Avatar } from './Avatar'
import './Avatar.scss'
import '../../foundations/styles/index.scss'

const displayModesCode = `<Avatar name="João Silva" />
<Avatar name="Maria Santos" imageUrl="https://i.pravatar.cc/150?img=1" />
<Avatar name="Alice Oliveira" letter />
<Avatar name="Usuário Genérico" iconic />`

const sizeExampleCode = `<Avatar name="João Silva" size="small" />
<Avatar name="João Silva" size="medium" />
<Avatar name="João Silva" size="large" />`

const dropdownExampleCode = `const menuItems = [
  { label: 'Perfil', onClick: () => {} },
  { label: 'Configurações', onClick: () => {} },
  { label: 'Sair', onClick: () => {} },
]

<Avatar name="Sarah Connor" dropdown menuItems={menuItems} />`

const paletteExampleCode = `<Avatar name="Alice Andrade" />
<Avatar name="Bruno Barbosa" />
<Avatar name="Carla Cardoso" />`

const docsVariantTags = ['small', 'medium', 'large', 'image', 'letter', 'iconic', 'dropdown']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa representar uma pessoa por imagem, inicial ou ícone, incluindo cabeçalhos de conta e pontos de acesso a menus de perfil.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar tamanhos, modos de exibição, dropdown e menu. A documentação destaca as regras de prioridade entre imagem, letra e ícone.",
  },
  {
    title: 'Comportamento',
    text: 'O componente gera uma cor consistente a partir do nome, pode exibir imagem, inicial ou ícone e, quando dropdown estiver ativo, abre um menu local a partir do próprio avatar.',
  },
] satisfies Array<{ title: string; text: string }>

type AvatarInteractiveArgs = {
  name: string
  size: Avatar.Size
  imageUrl: string
  letter: boolean
  iconic: boolean
  dropdown: boolean
  menuPreset: 'none' | 'account' | 'session'
}

const menuPresetItems: Record<'account' | 'session', string[]> = {
  account: ['Perfil', 'Configurações', 'Sair'],
  session: ['Minha conta', 'Privacidade', 'Ajuda', 'Desconectar'],
}

const meta = {
  title: 'Identidade/Avatar',
  component: AvatarInteractivePreview,
  args: {
    name: 'João Silva',
    size: 'medium',
    imageUrl: '',
    letter: false,
    iconic: false,
    dropdown: false,
    menuPreset: 'account',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof AvatarInteractivePreview>

export default meta

type Story = StoryObj<typeof meta>

function DisplayModesPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Inicial">
        <Avatar name="João Silva" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Imagem">
        <Avatar name="Maria Santos" imageUrl="https://i.pravatar.cc/150?img=1" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Letra forçada">
        <Avatar name="Alice Oliveira" letter imageUrl="https://i.pravatar.cc/150?img=3" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Icônico">
        <Avatar name="Usuário Genérico" iconic />
      </StoryPreviewCard>
    </div>
  )
}

function AvatarSizePreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Small">
        <Avatar name="João Silva" size="small" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Medium">
        <Avatar name="João Silva" size="medium" />
      </StoryPreviewCard>

      <StoryPreviewCard label="Large">
        <Avatar name="João Silva" size="large" />
      </StoryPreviewCard>
    </div>
  )
}

function AvatarDropdownPreview() {
  const [lastAction, setLastAction] = useState<string | null>(null)

  const primaryMenuItems: Avatar.MenuItem[] = [
    { label: 'Perfil', onClick: () => setLastAction('Perfil') },
    { label: 'Configurações', onClick: () => setLastAction('Configurações') },
    { label: 'Sair', onClick: () => setLastAction('Sair') },
  ]

  const secondaryMenuItems: Avatar.MenuItem[] = [
    { label: 'Minha conta', onClick: () => setLastAction('Minha conta') },
    { label: 'Privacidade', onClick: () => setLastAction('Privacidade') },
    { label: 'Ajuda', onClick: () => setLastAction('Ajuda') },
    { label: 'Desconectar', onClick: () => setLastAction('Desconectar') },
  ]

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={storyDocsStyles.cardGrid}>
        <StoryPreviewCard label="Com inicial">
          <Avatar name="Sarah Connor" dropdown menuItems={primaryMenuItems} />
        </StoryPreviewCard>

        <StoryPreviewCard label="Com imagem">
          <Avatar
            name="John Connor"
            dropdown
            imageUrl="https://i.pravatar.cc/150?img=5"
            menuItems={secondaryMenuItems}
          />
        </StoryPreviewCard>
      </div>

      <p style={storyDocsStyles.statText}>
        <strong>Ultima acao:</strong> {lastAction ?? 'Nenhuma ainda'}
      </p>
    </div>
  )
}

function AvatarPalettePreview() {
  const names = [
    'Alice Andrade',
    'Bruno Barbosa',
    'Carla Cardoso',
    'Daniel Dias',
    'Elisa Esteves',
    'Felipe Fernandes',
  ]

  return (
    <div style={storyDocsStyles.previewGrid}>
      {names.map((name) => (
        <div key={name} style={storyDocsStyles.previewItem}>
          <Avatar name={name} size="small" />
          <p style={storyDocsStyles.previewLabel}>{name}</p>
        </div>
      ))}
    </div>
  )
}

function buildAvatarCodeSnippet(args: AvatarInteractiveArgs) {
  const lines = [`<Avatar name="${args.name}"`]

  if (args.size !== 'medium') {
    lines.push(`  size="${args.size}"`)
  }

  if (args.imageUrl.trim().length > 0) {
    lines.push(`  imageUrl="${args.imageUrl}"`)
  }

  if (args.letter) {
    lines.push('  letter')
  }

  if (args.iconic) {
    lines.push('  iconic')
  }

  if (args.dropdown) {
    lines.push('  dropdown')
  }

  if (args.dropdown && args.menuPreset !== 'none') {
    const labels = menuPresetItems[args.menuPreset].map((label) => `    { label: '${label}', onClick: () => {} }`)
    lines.push('  menuItems={[')
    lines.push(...labels)
    lines.push('  ]}')
  }

  lines.push('/>')

  return lines.join('\n')
}

function getAvatarInteractivePreviewKey(args: AvatarInteractiveArgs) {
  return [args.name, args.size, args.imageUrl, args.letter, args.iconic, args.dropdown, args.menuPreset].join('::')
}

function AvatarInteractivePreview(args: AvatarInteractiveArgs) {
  const [lastAction, setLastAction] = useState<string | null>(null)

  const resolvedMenuItems: Avatar.MenuItem[] =
    args.dropdown && args.menuPreset !== 'none'
      ? menuPresetItems[args.menuPreset].map((label) => ({
          label,
          onClick: () => setLastAction(label),
        }))
      : []

  const resolvedImageUrl = args.imageUrl.trim().length > 0 ? args.imageUrl : undefined

  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'start' }}>
      <Avatar
        name={args.name}
        size={args.size}
        imageUrl={resolvedImageUrl}
        letter={args.letter}
        iconic={args.iconic}
        dropdown={args.dropdown}
        menuItems={resolvedMenuItems}
      />

      {args.dropdown && resolvedMenuItems.length > 0 ? (
        <p style={storyDocsStyles.statText}>
          <strong>Ultima acao:</strong> {lastAction ?? 'Clique em um item do menu'}
        </p>
      ) : null}

      <pre style={storyDocsStyles.codeBlock}>
        <code>{buildAvatarCodeSnippet(args)}</code>
      </pre>
    </div>
  )
}

export const AvatarDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Avatar</h3>}
        description={
          <>
            O componente <code>Avatar</code> representa pessoas por imagem, inicial ou
            ícone, com suporte a três tamanhos, cor gerada automaticamente pelo nome
            e menu dropdown opcional.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Props principais"
        description="Estas são as props universais do componente. Elas definem a identidade base do avatar e continuam valendo em qualquer modo de exibição, com ou sem dropdown."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>name</code> é obrigatória e define a inicial exibida no fallback, a cor calculada e o primeiro nome mostrado no dropdown.</li>
          <li><code>size</code> aceita <code>small</code>, <code>medium</code> e <code>large</code>, controlando a escala visual do avatar em todos os modos.</li>
        </ul>
      </SectionCard>

      <SectionCard
        title="Modos de exibição"
        description="O Avatar alterna entre quatro estados principais: inicial, imagem, letra forçada e ícone. A prioridade visual segue a implementação do componente: iconic sobrescreve imageUrl e letter; letter sobrescreve imageUrl."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>imageUrl</code> renderiza a foto quando nenhuma variante de sobreposição estiver ativa.</li>
          <li><code>letter</code> força a inicial do nome mesmo quando existe imagem disponível.</li>
          <li><code>iconic</code> ativa o modo com ícone e tem prioridade máxima sobre imagem e inicial.</li>
        </ul>

        <SandboxExample
          title="Inicial, imagem, letra e ícone"
          description="Esses exemplos mostram as combinações centrais do componente e deixam explícita a variante icônica, que preserva a mesma moldura circular com o ícone apoiado na base do avatar."
          code={displayModesCode}
          notes={[
            'Quando imageUrl não estiver presente, a inicial do nome é usada como fallback.',
            'letter força a exibição da inicial mesmo quando existe imagem.',
            'iconic tem prioridade máxima e substitui imagem e inicial.',
          ]}
        >
          <DisplayModesPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Tamanhos e cor automática"
        description="A escala do Avatar replica os três tamanhos do componente original e mantém a cor consistente por nome, usando a mesma paleta fixa de quinze tons."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>size</code> ajusta apenas a escala do avatar, sem mudar a regra de prioridade entre imagem, inicial e ícone.</li>
          <li><code>name</code> também participa da geração da cor de fundo; o mesmo nome sempre reaproveita o mesmo tom da paleta.</li>
        </ul>

        <SandboxExample
          title="Escalas disponíveis"
          description="Comparativo entre small, medium e large usando o mesmo nome para manter a cor estável e destacar apenas a mudança de dimensão."
          code={sizeExampleCode}
        >
          <AvatarSizePreview />
        </SandboxExample>

        <SandboxExample
          title="Paleta consistente por nome"
          description="A cor de fundo do avatar é calculada a partir do nome. O mesmo nome sempre cai no mesmo tom, o que ajuda a manter reconhecimento visual mesmo sem imagem."
          code={paletteExampleCode}
        >
          <AvatarPalettePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Dropdown e menu"
        description="Quando dropdown estiver ativo, o componente envolve o avatar com uma superfície clicável, exibe a saudação usando apenas o primeiro nome e abre um menu posicionado abaixo do gatilho."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>dropdown</code> ativa a anatomia expandida com saudação e gatilho de menu.</li>
          <li><code>menuItems</code> recebe itens com <code>label</code> e <code>onClick</code> para montar o menu local do avatar.</li>
          <li><code>name</code> segue sendo reutilizado para extrair o primeiro nome exibido dentro do dropdown.</li>
        </ul>

        <SandboxExample
          title="Avatar com menu local"
          description="Os exemplos abaixo mostram o mesmo comportamento de dropdown com inicial e com imagem. O menu fecha ao selecionar uma opção."
          code={dropdownExampleCode}
          notes={[
            'O menu é controlado internamente pelo próprio componente.',
            'Sem menuItems, o gatilho ainda expande visualmente, mas não renderiza lista.',
          ]}
        >
          <AvatarDropdownPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Regras de prioridade"
        description="As props visuais podem ser combinadas, mas o componente resolve conflitos sempre da mesma forma para manter previsibilidade no consumo."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>iconic</code> sobrescreve <code>letter</code> e <code>imageUrl</code>.</li>
          <li><code>letter</code> sobrescreve <code>imageUrl</code>.</li>
          <li>Sem imagem, letra forçada ou ícone, o componente usa a inicial como fallback padrão.</li>
          <li>Quando <code>dropdown</code> estiver ativo sem <code>menuItems</code>, o avatar ainda expande visualmente, mas não renderiza a lista de ações.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const AvatarInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    name: {
      control: 'text',
      description: 'Nome usado para inicial, cor e saudação do dropdown.',
      table: { category: 'Conteudo' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Escolhe a escala visual do avatar.',
      table: { category: 'Apresentacao' },
    },
    imageUrl: {
      control: 'text',
      description: 'URL opcional da imagem do avatar. É ignorada se letter ou iconic estiverem ativos.',
      table: { category: 'Apresentacao' },
    },
    letter: {
      control: 'boolean',
      description: 'Força a exibição da inicial do nome, mesmo quando existe imageUrl.',
      table: { category: 'Apresentacao' },
    },
    iconic: {
      control: 'boolean',
      description: 'Ativa o modo com ícone de usuário e sobrescreve imagem e inicial.',
      table: { category: 'Apresentacao' },
    },
    dropdown: {
      control: 'boolean',
      description: 'Ativa a anatomia com saudação e menu local.',
      table: { category: 'Comportamento' },
    },
    menuPreset: {
      control: { type: 'select' },
      options: ['none', 'account', 'session'],
      labels: {
        none: 'Sem itens',
        account: 'Conta',
        session: 'Sessão',
      },
      description: 'Preset de menu usado pelo story interativo quando dropdown estiver ativo.',
      table: { category: 'Story' },
    },
  },
  parameters: {
    controls: { exclude: ['className', 'menuItems'] },
  },
  render: (args) => (
    <AvatarInteractivePreview
      key={getAvatarInteractivePreviewKey(args)}
      {...args}
    />
  ),
}