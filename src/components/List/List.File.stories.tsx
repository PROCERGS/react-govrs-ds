import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { List } from './List'
import examplePdfUrl from './assets/documento-exemplo.pdf?url'
import examplePdfContent from './assets/documento-exemplo.pdf?raw'
import './List.scss'
import '../../foundations/styles/index.scss'

function createTextFile(
  filename: string,
  title: string,
  content: string,
  mimeType: string,
): List.FileItem {
  return {
    id: filename,
    title,
    filename,
    href: 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(content),
    size: new TextEncoder().encode(content).length,
  }
}

const csvContent = [
  'inscricao,nome,situacao',
  ...Array.from({ length: 70 }, (_, index) =>
    [index + 1, 'Candidato de demonstração ' + (index + 1), 'Inscrição recebida'].join(','),
  ),
].join('\n')

const fileItems: List.FileItem[] = [
  {
    id: 'edital',
    title: 'documento-exemplo.pdf',
    displayTitle: 'EXTRATO DO EDITAL DE ABERTURA DE CONCURSOS Nº 17/2025',
    href: examplePdfUrl,
    filename: 'documento-exemplo.pdf',
    extension: 'pdf',
    size: new TextEncoder().encode(examplePdfContent).length,
  },
  createTextFile(
    'inscricoes.csv',
    'Relação de inscrições recebidas',
    csvContent,
    'text/csv',
  ),
  createTextFile(
    'orientacoes.txt',
    'Orientações para os candidatos',
    'Arquivo de demonstração do React GovRS DS.\nConsulte o edital para conhecer os requisitos.\n',
    'text/plain',
  ),
  createTextFile(
    'identidade-visual.svg',
    'Identidade visual do concurso',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80"><rect width="160" height="80" fill="#1351b4"/><text x="80" y="46" text-anchor="middle" fill="white" font-family="sans-serif" font-size="20">GovRS DS</text></svg>',
    'image/svg+xml',
  ),
]

const fileExampleCode = [
  'const items: List.FileItem[] = [',
  '  {',
  "    id: 'edital',",
  "    title: 'edital.pdf',",
  "    displayTitle: 'Edital de abertura do concurso',",
  "    href: '/arquivos/edital.pdf',",
  "    filename: 'edital.pdf',",
  "    extension: 'pdf',",
  '    size: 140390,',
  '  },',
  ']',
  '',
  '<h2>Concurso Público 2025</h2>',
  '<List variant="file" items={items} />',
].join('\n')

const inferredExtensionCode = [
  '<List',
  '  variant="file"',
  '  items={[',
  '    {',
  "      id: 'inscricoes',",
  "      title: 'Relação de inscrições',",
  "      href: '/arquivos/inscricoes.csv',",
  "      filename: 'inscricoes.csv',",
  '      size: 2048,',
  '    },',
  '  ]}',
  '/>',
].join('\n')

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Para oferecer uma coleção de documentos, imagens ou outros arquivos para download, com nome, formato e tamanho visíveis.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alterar os itens nos controles e baixar os arquivos de demonstração.",
  },
  {
    title: 'Comportamento',
    text: 'O clipe, o nome e os detalhes pertencem ao mesmo link. O tamanho é formatado em português e os nomes longos quebram linha sem truncamento.',
  },
]

type ListFileInteractiveArgs = {
  modoContraste?: boolean
  items: List.FileItem[]
}

function ListFileInteractivePreview({ items }: ListFileInteractiveArgs) {
  return (
    <div style={{ ...storyDocsStyles.previewStage, justifyItems: 'stretch' }}>
      <h2 style={{ margin: 0 }}>Concurso Público 2025</h2>
      <List variant="file" items={items} />
    </div>
  )
}

const meta = {
  title: 'Conteúdo/List/File',
  component: ListFileInteractivePreview,
  args: {
    modoContraste: false,
    items: fileItems,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof ListFileInteractivePreview>

export default meta

type Story = StoryObj<typeof meta>

export const Documentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>List File</h3>}
        description={
          <>
            A variante <code>file</code> apresenta uma lista vertical de arquivos.
            Cada link reúne um ícone de clipe, o nome do arquivo e, entre
            parênteses, sua extensão e seu tamanho.
          </>
        }
        variantTags={['file', 'title', 'displayTitle', 'href', 'filename', 'extension', 'size']}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Lista de arquivos para download"
        description="A composição mantém os detalhes junto ao nome, incluindo quando o conteúdo precisa quebrar linha."
      >
        <SandboxExample
          title="Concurso público"
          description="Os links abaixo baixam arquivos de demonstração em PDF, CSV, TXT e SVG."
          code={fileExampleCode}
          notes={[
            'O título da seção é uma composição do consumidor, fora de List.',
            'Informe em href o endereço direto do arquivo. O componente acrescenta o atributo download ao link.',
            'Os arquivos desta demonstração são exemplos sem conteúdo oficial.',
          ]}
        >
          <ListFileInteractivePreview items={fileItems} />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Props e formato dos itens"
        description="A variante recebe items, itemKey e className. Cada item usa a estrutura List.FileItem."
      >
        <div style={storyDocsStyles.cardGrid}>
          <StoryPreviewCard label="Nome e endereço">
            <ul style={storyDocsStyles.list}>
              <li><code>title</code>: título original do arquivo, obrigatório.</li>
              <li><code>displayTitle</code>: nome alternativo exibido no link, opcional. Quando ausente, vazio ou composto apenas por espaços, usa <code>title</code>.</li>
              <li><code>href</code>: endereço direto para download, obrigatório.</li>
              <li><code>filename</code>: nome sugerido para o arquivo baixado, opcional.</li>
              <li><code>id</code> ou <code>key</code>: identificação estável do item. Também é possível informar <code>itemKey</code>.</li>
            </ul>
          </StoryPreviewCard>

          <StoryPreviewCard label="Extensão e tamanho">
            <ul style={storyDocsStyles.list}>
              <li><code>extension</code>: formato do arquivo, como <code>pdf</code> ou <code>.pdf</code>. É exibido em minúsculas, com um ponto.</li>
              <li>Sem <code>extension</code>, o formato é obtido de <code>filename</code>, quando disponível.</li>
              <li><code>size</code>: tamanho numérico em bytes. A apresentação usa Bytes, KBytes, MBytes ou GBytes, com conversão a cada 1024 bytes.</li>
              <li>Tamanhos ausentes, negativos ou não finitos são omitidos. O tamanho zero aparece como <code>0 Bytes</code>.</li>
              <li>Quando só um detalhe está disponível, ele aparece sozinho entre parênteses. Sem detalhes, aparece apenas o nome com o clipe.</li>
            </ul>
          </StoryPreviewCard>
        </div>

        <SandboxExample
          title="Extensão a partir do nome do arquivo"
          description="filename pode definir tanto a extensão exibida quanto o nome sugerido no download."
          code={inferredExtensionCode}
        >
          <List variant="file" items={[fileItems[1]]} />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Nome alternativo por item"
        description="displayTitle permite apresentar um nome mais claro para o usuário e preservar o título original nos dados."
      >
        <SandboxExample
          title="Título original e nome alternativo"
          description="Os dois links abaixo apontam para o mesmo arquivo e sugerem o mesmo nome no download."
          code={[
            '<List',
            '  variant="file"',
            '  items={[',
            '    {',
            "      title: 'documento-exemplo.pdf',",
            "      displayTitle: 'Edital de abertura do concurso',",
            "      href: '/arquivos/documento-exemplo.pdf',",
            "      filename: 'documento-exemplo.pdf',",
            '      size: 617,',
            '    },',
            '  ]}',
            '/>',
          ].join('\n')}
          notes={[
            'Sem displayTitle, a lista exibe title.',
            'displayTitle muda somente o nome mostrado no link; filename continua definindo o nome sugerido para download.',
          ]}
        >
          <div style={storyDocsStyles.cardGrid}>
            <StoryPreviewCard label="Título original">
              <List variant="file" items={[{ ...fileItems[0], displayTitle: undefined }]} />
            </StoryPreviewCard>
            <StoryPreviewCard label="Nome alternativo">
              <List variant="file" items={[{
                ...fileItems[0],
                displayTitle: 'Edital de abertura do concurso',
              }]} />
            </StoryPreviewCard>
          </div>
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Acessibilidade e integração"
        description="A coleção usa uma lista semântica e links nativos, com suporte à navegação por teclado."
      >
        <ul style={storyDocsStyles.list}>
          <li>O ícone de clipe é decorativo. O nome, a extensão e o tamanho formam o conteúdo acessível do link.</li>
          <li>O foco por teclado tem contorno visível. As cores usam os tokens do DS e acompanham o modo de alto contraste.</li>
          <li>Use URLs da mesma origem, URLs de dados ou blobs para que o navegador respeite <code>download</code>. Para arquivos de outro domínio, configure também <code>Content-Disposition: attachment</code> no servidor.</li>
          <li>A aplicação fornece os arquivos e seus metadados; a variante apresenta os itens recebidos.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const Interativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    items: {
      control: 'object',
      description: 'Arquivos com title original, displayTitle opcional, href, filename, extension e size em bytes.',
      table: { category: 'Conteúdo' },
    },
  },
  parameters: {
    controls: {
      exclude: ['className', 'itemKey', 'variant'],
    },
  },
  render: (args) => <ListFileInteractivePreview {...args} />,
}
