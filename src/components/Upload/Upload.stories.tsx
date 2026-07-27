import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Badges } from '../Badges/Badges'
import { Button } from '../Button/Button'
import { Upload } from './Upload'
import './Upload.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['single', 'multiple', 'custom feedback']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa permitir seleção local de arquivos com limites de quantidade, tamanho e tipo, sem acoplar o design system à infraestrutura de upload do produto.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar limites, multiple, accept e disabled. O story 'Em formulários (controlado)' mostra o uso recomendado hoje, baseado em onChange e estado React.",
  },
  {
    title: 'Comportamento',
    text: 'O componente mantém uma lista interna dos arquivos aceitos, pode executar onUpload assíncrono e expõe feedback customizável por callback. Atualmente, essa lista não é serializada automaticamente por FormData nativo.',
  },
] satisfies Array<{ title: string; text: string }>

const basicExampleCode = `<Upload
  maxFiles={3}
  maxFileSize={2}
  multiple
  onChange={() => {}}
/>`

const feedbackExampleCode = `<Upload
  maxFiles={3}
  maxFileSize={2}
  onChange={() => {}}
  renderFeedback={({ invalid, error, valid, disabled }) => {
    if (invalid) {
      return <Badges variant="error" message={error || 'Arquivo inválido'} />
    }

    if (valid) {
      return <Badges variant="success" message="Campo correto" />
    }

    if (disabled) {
      return <Badges variant="warning" message="Campo desabilitado" />
    }

    return null
  }}
/>`

const formExampleCode = `const [files, setFiles] = useState<File[]>([])
const [submittedValue, setSubmittedValue] = useState('Nenhum arquivo enviado')

// Observação: hoje o Upload não participa automaticamente de FormData nativo.
// O fluxo recomendado usa a lista recebida em onChange.

<div style={{ ...storyDocsStyles.previewStage, maxWidth: 520 }}>
  <form
    onSubmit={(event) => {
      event.preventDefault()
      setSubmittedValue(files.length > 0 ? files.map((file) => file.name).join(', ') : 'Nenhum arquivo enviado')
    }}
    style={{ display: 'grid', gap: 12 }}
  >
    <Upload
      name="attachments"
      maxFiles={2}
      maxFileSize={2}
      multiple
      onChange={setFiles}
    />

    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button type="submit">Enviar arquivos</Button>
      <span style={storyDocsStyles.statText}>
        <strong>Payload:</strong> {submittedValue}
      </span>
    </div>
  </form>
</div>`

const meta = {
  title: 'Formulários/Upload',
  component: Upload,
  args: {
    maxFiles: 3,
    maxFileSize: 2,
    multiple: true,
    disabled: false,
    accept: '',
    buttonLabel: 'Selecione o(s) arquivo(s)',
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Upload>

export default meta

type Story = StoryObj<typeof meta>

function UploadBasicPreview() {
  return (
    <div style={{ maxWidth: 550 }}>
      <Upload maxFiles={3} maxFileSize={2} multiple onChange={() => {}} />
    </div>
  )
}

function UploadFeedbackPreview() {
  return (
    <div style={{ maxWidth: 550 }}>
      <Upload
        maxFiles={3}
        maxFileSize={2}
        onChange={() => {}}
        renderFeedback={({ invalid, error, valid, disabled }) => {
          if (invalid) {
            return <Badges variant="error" message={error || 'Arquivo inválido'} />
          }

          if (valid) {
            return <Badges variant="success" message="Campo correto" />
          }

          if (disabled) {
            return <Badges variant="warning" message="Campo desabilitado" />
          }

          return null
        }}
      />
    </div>
  )
}

function UploadInteractivePreview(args: Upload.Props) {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div style={{ ...storyDocsStyles.previewStage, gap: 12, padding: 16, maxWidth: 720 }}>
      <Upload
        {...args}
        onChange={(nextFiles) => {
          setFiles(nextFiles)
        }}
      />

      <p style={{ ...storyDocsStyles.statText, color: 'inherit' }}>
        <strong>Selecionado:</strong> {files.length > 0 ? files.map((file) => file.name).join(', ') : '—'}
      </p>
    </div>
  )
}

function UploadFormPreview() {
  const [files, setFiles] = useState<File[]>([])
  const [submittedValue, setSubmittedValue] = useState('Nenhum arquivo enviado')

  return (
    <div style={{ ...storyDocsStyles.previewStage, maxWidth: 520 }}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setSubmittedValue(files.length > 0 ? files.map((file) => file.name).join(', ') : 'Nenhum arquivo enviado')
        }}
        style={{ display: 'grid', gap: 12 }}
      >
        <Upload
          name="attachments"
          maxFiles={2}
          maxFileSize={2}
          multiple
          onChange={setFiles}
        />

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button type="submit">Enviar arquivos</Button>
          <span style={storyDocsStyles.statText}>
            <strong>Payload:</strong> {submittedValue}
          </span>
        </div>
      </form>
    </div>
  )
}

export const UploadDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Upload</h3>}
        description={
          <>
            O <code>Upload</code> migra o controle visual do design system legado para um componente React puro,
            mantendo a seleção e o feedback sob responsabilidade do componente e deixando a estratégia de envio real sob responsabilidade do produto consumidor.
            Atualmente, a lista visual de arquivos aceitos não é serializada automaticamente por <code>FormData</code> nativo.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura base"
        description="O contrato preserva os principais limites do componente legado, mas agora em TypeScript: quantidade máxima de arquivos, tamanho máximo por arquivo, múltipla seleção e filtro por accept continuam disponíveis sem acoplamento a serviços externos."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>maxFiles</code> limita quantos arquivos podem ser mantidos na seleção.</li>
          <li><code>maxFileSize</code> recebe o tamanho máximo por arquivo em MB.</li>
          <li><code>multiple</code> habilita seleção acumulada de mais de um arquivo.</li>
          <li><code>accept</code> reaproveita o mesmo formato do atributo nativo do input file.</li>
        </ul>

        <SandboxExample
          title="Seleção básica"
          description="Exemplo mínimo do controle de upload com limite de quantidade e tamanho por arquivo."
          code={basicExampleCode}
          notes={[
            'O componente continua acessível por teclado porque o input nativo permanece focável no DOM.',
            'Quando a seleção é válida, os arquivos passam a aparecer na lista abaixo do botão e podem ser removidos individualmente.',
          ]}
        >
          <UploadBasicPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Feedback customizado"
        description="Assim como na origem, o consumidor pode substituir o feedback padrão por qualquer UI própria via renderFeedback, usando o estado interno do componente como entrada."
      >
        <SandboxExample
          title="Renderização do feedback"
          description="O preview abaixo mostra a substituição explícita do badge padrão por uma função de renderização customizada."
          code={feedbackExampleCode}
          notes={[
            'O callback recebe lista de arquivos, flags de validade, loading e a mensagem de erro atual.',
            'Se renderFeedback não for informado, o componente usa Badges internamente para estados de sucesso, erro e disabled.',
          ]}
        >
          <UploadFeedbackPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Uso em formulários"
        description="O controle pode continuar dentro de formulários HTML ou React, mas atualmente o uso recomendado é controlado por onChange ou onUpload. A lista visual de arquivos aceitos não entra automaticamente no FormData nativo do formulário."
      >
        <ul style={storyDocsStyles.list}>
          <li>Hoje o componente não garante que <code>new FormData(form)</code> inclua os arquivos exibidos na lista visual.</li>
          <li>Para montar payload local, submit controlado ou upload remoto, use a lista entregue por <code>onChange</code>.</li>
          <li>Se o produto precisar de submit HTML nativo com <code>FormData</code>, o componente ainda precisa evoluir para manter o <code>FileList</code> nativo sincronizado.</li>
        </ul>

        <SandboxExample
          title="Submit controlado"
          description="Exemplo simples de integração com formulário, reaproveitando a lista atual de arquivos selecionados como payload local após o submit, sem depender de FormData nativo."
          code={formExampleCode}
          notes={[
            'Este exemplo usa a lista recebida em onChange porque o componente ainda não participa automaticamente de FormData nativo.',
            'O design system não faz upload automático nem serialização nativa de FormData por conta própria.',
            'Se a aplicação precisar enviar os arquivos para um backend, esse passo deve acontecer ao redor de onChange ou onUpload.',
          ]}
        >
          <UploadFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites e responsabilidades"
        description="A migração preserva o comportamento útil do componente original, mas elimina qualquer suposição sobre CMS, endpoint, autenticação ou backend de armazenamento."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>onUpload</code> é opcional e pode ser assíncrono, mas o design system não decide para onde o arquivo será enviado.</li>
          <li><code>onChange</code> recebe a lista atual de arquivos aceitos depois de cada interação relevante.</li>
          <li>O componente valida limites básicos no cliente, mas não substitui validação do servidor.</li>
          <li>Para fluxos grandes de upload em lote, progresso granular ou drag and drop, vale tratar isso como evolução futura separada.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const UploadInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    maxFiles: {
      control: 'number',
      description: 'Quantidade máxima de arquivos permitidos.',
      table: { category: 'Validação' },
    },
    maxFileSize: {
      control: 'number',
      description: 'Tamanho máximo por arquivo em MB.',
      table: { category: 'Validação' },
    },
    multiple: {
      control: 'boolean',
      description: 'Permite selecionar múltiplos arquivos.',
      table: { category: 'Comportamento' },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação com o controle.',
      table: { category: 'Estado' },
    },
    accept: {
      control: 'text',
      description: 'Filtro de tipos aceitos no formato do atributo accept nativo.',
      table: { category: 'Validação' },
    },
    buttonLabel: {
      control: 'text',
      description: 'Texto visível do botão de seleção.',
      table: { category: 'Conteúdo' },
    },
    loadingLabel: {
      control: 'text',
      description: 'Texto exibido durante onUpload assíncrono.',
      table: { category: 'Conteúdo' },
    },
    onChange: {
      table: { disable: true },
    },
    onUpload: {
      table: { disable: true },
    },
    renderFeedback: {
      table: { disable: true },
    },
  },
  render: (args) => <UploadInteractivePreview {...args} />,
}

export const UploadEmFormularios: Story = {
  name: 'Em formulários (controlado)',
  parameters: {
    controls: { disable: true },
  },
  render: () => <UploadFormPreview />,
}