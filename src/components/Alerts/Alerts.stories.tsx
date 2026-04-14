import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Alerts } from './Alerts'
import './Alerts.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['success', 'warning', 'info', 'error']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa confirmar uma ação, apontar um problema, avisar sobre atenção necessária ou expor uma informação contextual.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar variant, dismissible e message. O story 'Exemplos Combinados' concentra cenários prontos com as quatro variantes.",
  },
  {
    title: 'Comportamento',
    text: 'O fechamento é local ao componente. Quando dismissible estiver ativo, o alerta some após o clique e pode disparar onClose.',
  },
]

const variantsExampleCode = `<Alerts variant="success" message="Sucesso. Operação concluída com êxito." />
<Alerts variant="warning" message="Atenção. Verifique os dados inseridos." />
<Alerts variant="info" message="Informação: este é um alerta informativo." />
<Alerts variant="error" message="Erro ao processar. Tente novamente." />`

const dismissibleExampleCode = `const [alertKey, setAlertKey] = useState(0)
const [closedCount, setClosedCount] = useState(0)

<div style={{ display: 'grid', gap: 12 }}>
  <Alerts
    key={alertKey}
    variant="warning"
    dismissible
    onClose={() => setClosedCount((current) => current + 1)}
  >
    Este alerta pode ser fechado e dispara onClose após a interação.
  </Alerts>

  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button
      variant="secondary"
      size="small"
      onClick={() => setAlertKey((current) => current + 1)}
    >
      Restaurar alerta
    </Button>

    <span style={{ color: '#475569', fontSize: 14 }}>
      <strong>Fechamentos capturados:</strong> {closedCount}
    </span>
  </div>
</div>`

const contentExampleCode = `// Conteudo simples por prop
<Alerts variant="info" message="Mensagem passada via prop message" />

// Conteudo rico via children
<Alerts variant="warning" dismissible>
  <strong>Atenção:</strong> verifique os dados preenchidos.
</Alerts>`

const combinedExampleCode = `<Alerts variant="success" message="Sucesso com ação visível" dismissible />
<Alerts variant="warning">Aviso exibido via children</Alerts>
<Alerts
  variant="error"
  dismissible
  message={
    <span>
      <strong>Erro:</strong> detalhe do erro aqui.
    </span>
  }
/>
<Alerts variant="info" message="Informação importante exibida aqui." dismissible />`

const meta = {
  title: 'Feedback/Alerts',
  component: Alerts,
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Alerts>

export default meta

type Story = StoryObj<typeof meta>

function AlertsVariantsPreview() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Alerts variant="success" message="Sucesso. Operação concluída com êxito." />
      <Alerts variant="warning" message="Atenção. Verifique os dados inseridos." />
      <Alerts variant="info" message="Informação: este é um alerta informativo." />
      <Alerts variant="error">Erro ao processar. Tente novamente.</Alerts>
    </div>
  )
}

function AlertsDismissiblePreview() {
  const [alertKey, setAlertKey] = useState(0)
  const [closedCount, setClosedCount] = useState(0)

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Alerts
        key={alertKey}
        variant="warning"
        dismissible
        onClose={() => setClosedCount((current) => current + 1)}
      >
        Este alerta pode ser fechado e dispara onClose após a interação.
      </Alerts>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="secondary" size="small" onClick={() => setAlertKey((current) => current + 1)}>
          Restaurar alerta
        </Button>

        <span style={{ color: '#475569', fontSize: 14 }}>
          <strong>Fechamentos capturados:</strong> {closedCount}
        </span>
      </div>
    </div>
  )
}

function AlertsContentPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <div style={storyDocsStyles.previewItem}>
        <p style={storyDocsStyles.previewLabel}>Via message</p>
        <Alerts variant="info" message="Mensagem passada via prop message" />
      </div>

      <div style={storyDocsStyles.previewItem}>
        <p style={storyDocsStyles.previewLabel}>Via children</p>
        <Alerts variant="warning" dismissible>
          <strong>Atenção:</strong> verifique os dados preenchidos.
        </Alerts>
      </div>
    </div>
  )
}

function AlertsCombinedPreview() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Alerts variant="success" message="Sucesso com ação visível" dismissible />
      <Alerts variant="warning">Aviso exibido via children</Alerts>
      <Alerts
        variant="error"
        dismissible
        message={
          <span>
            <strong>Erro:</strong> detalhe do erro aqui.
          </span>
        }
      />
      <Alerts variant="info" message="Informação importante exibida aqui." dismissible />
    </div>
  )
}

export const AlertsDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Alerts</h3>}
        description={
          <>
            O componente <code>Alerts</code> concentra feedback semântico para estados de
            sucesso, aviso, informação e erro.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Como usar"
        description="Use alertas quando a mensagem precisar ganhar destaque sem interromper o fluxo inteiro da tela. A variant define o tom visual e semântico, enquanto message e children cobrem desde textos simples até conteúdo mais rico."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>variant</code> define o contexto do alerta: success, warning, info ou error.</li>
          <li><code>message</code> define o texto a ser exibido no alert.</li>
          <li><code>children</code> permite inserir estrutura mais complexa dentro do alert quando necessário.</li>
          <li><code>dismissible</code> adiciona um botão de fechar e oculta o alerta localmente.</li>
        </ul>

        <SandboxExample
          title="Galeria de variantes"
          description="Comparativo rápido dos quatro tons visuais para manter a escolha da variant objetiva."
          code={variantsExampleCode}
          notes={[
            'A variant altera estilo e semântica do feedback exibido.',
            'No componente atual, apenas error usa role alert; os demais comunicam status.',
          ]}
        >
          <AlertsVariantsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Dismissible e callback"
        description="Quando dismissible estiver ativo, o próprio componente cuida do fechamento local. Se você também fornecer onClose, ele funciona como ponto de integração para analytics, logs ou sincronização externa."
      >
        <SandboxExample
          title="Fechamento local"
          description="Este sandbox mostra o desaparecimento do alerta após o clique e registra quantas vezes o callback foi disparado."
          code={dismissibleExampleCode}
          notes={[
            'O fechamento é interno ao componente; para reexibir o alerta, o consumidor precisa remontar ou renderizar novamente.',
            'A restauração abaixo existe apenas para facilitar a demonstração no Storybook.',
          ]}
        >
          <AlertsDismissiblePreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Message e children"
        description="As duas formas de conteúdo continuam válidas. Prefira message quando o texto for simples; use children quando a mensagem precisar de destaque interno com elementos adicionais."
      >
        <SandboxExample
          title="Conteúdo simples e rico"
          description="Exemplos lado a lado para deixar explícito quando cada abordagem costuma ser suficiente."
          code={contentExampleCode}
        >
          <AlertsContentPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Exemplos combinados"
        description="A história combinada continua útil para uma leitura rápida do catálogo disponível, sem depender dos Controls."
      >
        <SandboxExample
          title="Coleção pronta"
          description="Mesmo conjunto de exemplos já usado antes, agora dentro do layout narrativo compartilhado."
          code={combinedExampleCode}
        >
          <AlertsCombinedPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limitações e comportamento"
        description="O componente cobre bem feedback visual e fechamento local, mas não substitui lógica de orquestração de mensagens nem gerenciamento global de fila."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>dismissible</code> fecha apenas a instância atual; ele não remove mensagens de um store global por conta própria.</li>
          <li><code>onClose</code> é opcional e só dispara quando o alerta realmente possui botão de fechar.</li>
          <li><code>message</code> e <code>children</code> não devem ser usados ao mesmo tempo sem uma regra clara; message tem precedência no componente.</li>
          <li>Para conteúdo muito longo ou fluxos bloqueantes, uma superfície mais estruturada pode ser mais adequada do que um alerta inline.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const AlertsInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['success', 'warning', 'error', 'info'],
      description: 'Define o tom visual e o contexto semântico do alerta.',
      table: { category: 'Estado visual' },
    },
    dismissible: {
      control: 'boolean',
      description: 'Exibe o botão de fechar e permite ocultar o alerta localmente.',
      table: { category: 'Comportamento' },
    },
    message: {
      control: 'text',
      description: 'Texto simples exibido no corpo do alerta. Quando ausente, children pode assumir como fallback.',
      table: { category: 'Conteúdo' },
    },
    onClose: {
      action: 'closed',
      description: 'Disparado após o fechamento do alerta dismissible.',
      table: { category: 'Eventos' },
    },
  },
  args: {
    variant: 'success',
    dismissible: false,
    message: 'Mensagem de exemplo exibida via prop message',
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  render: (args) => (
    <div style={{ padding: 12 }}>
      <Alerts key={`${args.variant}-${args.dismissible}-${String(args.message)}`} {...args}>
        Conteúdo via children (fallback quando message não for informado)
      </Alerts>
    </div>
  ),
}

export const AlertsCombinados: Story = {
  name: 'Exemplos Combinados',
  parameters: {
    controls: { disable: true },
  },
  render: () => <AlertsCombinedPreview />,
}
