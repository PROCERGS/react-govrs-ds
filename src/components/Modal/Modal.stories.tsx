import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  faBuilding,
  faEnvelope,
  faIdCard,
  faLock,
  faMapMarkerAlt,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  StoryPreviewCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Button } from '../Button/Button'
import { Modal } from './Modal'
import './Modal.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['custom', 'items', 'form']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando a interface precisa interromper o fluxo principal para confirmar uma ação, detalhar opções expansíveis ou coletar um pequeno conjunto de campos.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para alternar entre os três tipos de modal. O story 'Exemplos de uso' resume os cenários mais recorrentes em uma visão comparativa.",
  },
  {
    title: 'Comportamento',
    text: 'O Modal prende o foco enquanto está aberto, separa o fechamento por clique no overlay do fechamento por Escape e reaproveita Button e Input do próprio design system.',
  },
] satisfies Array<{ title: string; text: string }>

const ITEM_IMAGE_SERVICE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='40' fill='%23DDF9E3'/%3E%3Cpath d='M24 48h32V54H24zM28 28h24v16H28z' fill='%231A7235'/%3E%3C/svg%3E"

const ITEM_IMAGE_LOCATION =
  "data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='40' fill='%23E9F5FF'/%3E%3Cpath d='M40 18c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16Zm0 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z' fill='%232B86D8'/%3E%3C/svg%3E"

const exampleItems = [
  {
    label: 'Atendimento presencial',
    img: ITEM_IMAGE_SERVICE,
    content: (
      <div>
        <p>Atende de segunda a sexta, das 8h30 às 17h30.</p>
        <ul>
          <li>Retirada de documentos.</li>
          <li>Protocolo de solicitações.</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'Unidades regionais',
    img: ITEM_IMAGE_LOCATION,
    content: (
      <div>
        <p>Consulte a unidade mais próxima antes de agendar sua visita.</p>
        <ul>
          <li>Porto Alegre.</li>
          <li>Santa Maria.</li>
          <li>Pelotas.</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'Informações complementares',
    content: <p>Item sem imagem para demonstrar o placeholder interno do componente.</p>,
  },
] satisfies Modal.Item[]

const previewItems = [
  {
    label: 'Atendimento presencial',
    img: ITEM_IMAGE_SERVICE,
    content: <p>Atende de segunda a sexta, das 8h30 às 17h30.</p>,
  },
  {
    label: 'Informações complementares',
    content: <p>Item sem imagem para demonstrar o placeholder interno do componente.</p>,
  },
] satisfies Modal.Item[]

const exampleInputs = [
  {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    auxiliaryText: 'Campo obrigatório',
    leftIcon: faUser,
    name: 'fullName',
  },
  {
    label: 'E-mail institucional',
    placeholder: 'nome@orgao.rs.gov.br',
    leftIcon: faEnvelope,
    name: 'email',
    type: 'email',
  },
  {
    label: 'Telefone',
    placeholder: '(51) 99999-9999',
    leftIcon: faPhone,
    name: 'phone',
  },
  {
    label: 'Órgão',
    placeholder: 'Informe o órgão responsável',
    leftIcon: faBuilding,
    name: 'department',
  },
  {
    label: 'Matrícula funcional',
    placeholder: 'Digite sua matrícula',
    leftIcon: faIdCard,
    name: 'registration',
  },
  {
    label: 'Município',
    placeholder: 'Cidade de atuação',
    leftIcon: faMapMarkerAlt,
    name: 'city',
  },
  {
    label: 'Senha de confirmação',
    placeholder: 'Digite a senha',
    leftIcon: faLock,
    name: 'password',
    type: 'password',
  },
] satisfies Modal.InputConfig[]

const previewInputs = [
  {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    auxiliaryText: 'Campo obrigatório',
    leftIcon: faUser,
    name: 'fullName',
  },
  {
    label: 'E-mail institucional',
    placeholder: 'nome@orgao.rs.gov.br',
    leftIcon: faEnvelope,
    name: 'email',
    type: 'email',
  },
] satisfies Modal.InputConfig[]

const basicExampleCode = `const [isOpen, setIsOpen] = useState(false)

<div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
  <Button onClick={() => setIsOpen(true)}>Abrir modal de confirmação</Button>

  {isOpen ? (
    <Modal
      title="Confirmar publicação"
      type="custom"
      onClose={() => setIsOpen(false)}
      buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
      buttonRight={{ label: 'Publicar', onClick: () => setIsOpen(false) }}
    >
      <div>
        <p>Você está prestes a publicar este conteúdo no portal institucional.</p>
        <p>Revise o material e confirme se ele já passou por validação editorial.</p>
      </div>
    </Modal>
  ) : null}
</div>`

const itemsExampleCode = `const previewItems = [
  {
    label: 'Atendimento presencial',
    img: ITEM_IMAGE_SERVICE,
    content: <p>Atende de segunda a sexta, das 8h30 às 17h30.</p>,
  },
  {
    label: 'Informações complementares',
    content: <p>Item sem imagem para demonstrar o placeholder interno do componente.</p>,
  },
]

const [isOpen, setIsOpen] = useState(false)

<div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
  <Button variant="secondary" onClick={() => setIsOpen(true)}>
    Abrir modal com itens
  </Button>

  {isOpen ? (
    <Modal
      title="Serviços disponíveis"
      type="items"
      items={previewItems}
      onClose={() => setIsOpen(false)}
      buttonRight={{ label: 'Entendi', onClick: () => setIsOpen(false) }}
    >
      <p>Escolha um item para expandir o conteúdo e consultar mais detalhes.</p>
    </Modal>
  ) : null}
</div>`

const formExampleCode = `const previewInputs = [
  {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    auxiliaryText: 'Campo obrigatório',
    leftIcon: faUser,
    name: 'fullName',
  },
  {
    label: 'E-mail institucional',
    placeholder: 'nome@orgao.rs.gov.br',
    leftIcon: faEnvelope,
    name: 'email',
    type: 'email',
  },
]

const [isOpen, setIsOpen] = useState(false)

<div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
  <Button onClick={() => setIsOpen(true)}>Abrir modal com formulário</Button>

  {isOpen ? (
    <Modal
      title="Atualizar cadastro"
      type="form"
      inputs={previewInputs}
      onClose={() => setIsOpen(false)}
      buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
      buttonRight={{ label: 'Salvar', onClick: () => setIsOpen(false) }}
    >
      <div>
        <p>Preencha os campos abaixo para atualizar os dados de identificação.</p>
      </div>
    </Modal>
  ) : null}
</div>`

const meta = {
  title: 'Sobreposições/Modal',
  component: Modal,
  args: {
    title: 'Confirmar ação',
    type: 'custom',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

function ModalCustomPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <Button onClick={() => setIsOpen(true)}>Abrir modal de confirmação</Button>

      {isOpen ? (
        <Modal
          title="Confirmar publicação"
          type="custom"
          onClose={() => setIsOpen(false)}
          buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'Publicar', onClick: () => setIsOpen(false) }}
        >
          <div>
            <p>Você está prestes a publicar este conteúdo no portal institucional.</p>
            <p>Revise o material e confirme se ele já passou por validação editorial.</p>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

function ModalItemsPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>Abrir modal com itens</Button>

      {isOpen ? (
        <Modal
          title="Serviços disponíveis"
          type="items"
          items={previewItems}
          onClose={() => setIsOpen(false)}
          buttonRight={{ label: 'Entendi', onClick: () => setIsOpen(false) }}
        >
          <p>Escolha um item para expandir o conteúdo e consultar mais detalhes.</p>
        </Modal>
      ) : null}
    </div>
  )
}

function ModalFormPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
      <Button onClick={() => setIsOpen(true)}>Abrir modal com formulário</Button>

      {isOpen ? (
        <Modal
          title="Atualizar cadastro"
          type="form"
          inputs={previewInputs}
          onClose={() => setIsOpen(false)}
          buttonLeft={{ label: 'Cancelar', onClick: () => setIsOpen(false) }}
          buttonRight={{ label: 'Salvar', onClick: () => setIsOpen(false) }}
        >
          <div>
            <p>Preencha os campos abaixo para atualizar os dados de identificação.</p>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

function ModalExamplesPreview() {
  return (
    <div style={storyDocsStyles.cardGrid}>
      <StoryPreviewCard label="Custom">
        <ModalCustomPreview />
      </StoryPreviewCard>

      <StoryPreviewCard label="Items">
        <ModalItemsPreview />
      </StoryPreviewCard>

      <StoryPreviewCard label="Form">
        <ModalFormPreview />
      </StoryPreviewCard>
    </div>
  )
}

function ModalInteractivePreview(args: Modal.Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    args.onClose?.()
  }

  const buttonLeft: Modal.Action = {
    label: 'Cancelar',
    onClick: () => setIsOpen(false),
  }

  const buttonRight: Modal.Action = {
    label: args.type === 'form' ? 'Salvar' : 'Confirmar',
    onClick: () => setIsOpen(false),
  }

  return (
    <div style={{ ...storyDocsStyles.previewStage, gap: 12, padding: 16, justifyItems: 'start' }}>
      <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>

      <p style={storyDocsStyles.statText}>
        <strong>Tipo atual:</strong> {args.type}
      </p>

      <p style={storyDocsStyles.statText}>
        <strong>Fechamento por overlay:</strong> {args.closeOnOverlayClick ? 'Ativo' : 'Desligado'}
      </p>

      {isOpen ? (
        args.type === 'items' ? (
          <Modal
            title={args.title}
            type="items"
            closeOnOverlayClick={args.closeOnOverlayClick}
            className={args.className}
            onClose={handleClose}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
            items={exampleItems}
          >
            <p>Abra os itens para revisar as informações complementares.</p>
          </Modal>
        ) : args.type === 'form' ? (
          <Modal
            title={args.title}
            type="form"
            closeOnOverlayClick={args.closeOnOverlayClick}
            className={args.className}
            onClose={handleClose}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
            inputs={exampleInputs}
          >
            <p>Este exemplo usa Input do próprio design system para montar o formulário.</p>
          </Modal>
        ) : (
          <Modal
            title={args.title}
            type="custom"
            closeOnOverlayClick={args.closeOnOverlayClick}
            className={args.className}
            onClose={handleClose}
            buttonLeft={buttonLeft}
            buttonRight={buttonRight}
          >
            <div>
              <p>Use o tipo custom quando o conteúdo do modal for montado livremente por composição.</p>
                <p>O fechamento por ESC pode ser controlado separadamente via closeOnEscape.</p>
            </div>
          </Modal>
        )
      ) : null}
    </div>
  )
}

export const ModalDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Modal</h3>}
        description={
          <>
            O <code>Modal</code> é um componente usado para exibir conteúdo em uma janela sobreposta, interrompendo o fluxo principal da interface e garantindo foco controlado e interação acessível.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard
        title="Estrutura base"
        description="O contrato base continua simples: o consumidor controla abertura e fechamento, enquanto o componente cuida do overlay, do foco, da navegação por teclado e do rodapé opcional com ações."
      >
        <ul style={storyDocsStyles.list}>
          <li><code>title</code> define o título do diálogo e alimenta a rotulagem acessível.</li>
          <li><code>onClose</code> controla fechamento pelo botão X, pelo overlay e por Escape quando esses comportamentos estiverem habilitados.</li>
          <li><code>closeOnOverlayClick</code> afeta apenas clique fora do diálogo.</li>
          <li><code>closeOnEscape</code> controla o fechamento pelo teclado sem acoplar isso ao overlay.</li>
          <li><code>buttonLeft</code> e <code>buttonRight</code> configuram as ações de rodapé reutilizando o componente Button do design system.</li>
          <li><code>type</code> troca entre conteúdo customizado, lista expansível de itens ou formulário contextual.</li>
        </ul>

        <SandboxExample
          title="Confirmação customizada"
          description="Exemplo mínimo para confirmar uma ação antes de seguir no fluxo da interface."
          code={basicExampleCode}
          notes={[
            'O componente não controla por conta própria se está aberto; essa responsabilidade permanece do lado consumidor.',
            'Focus trap e restauração do foco anterior são tratados internamente enquanto o modal está montado.',
          ]}
        >
          <ModalCustomPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variante items"
        description="A variante items preserva o comportamento da origem: uma lista de entradas expansíveis com imagem opcional e conteúdo detalhado local."
      >
        <SandboxExample
          title="Lista expansível"
          description="Cada item vira um cabeçalho acionável, com placeholder automático quando a imagem falha ou não é fornecida."
          code={itemsExampleCode}
          notes={[
            'A estrutura continua neutra em relação a dados externos; basta passar um array de itens com label e content.',
            'Esse formato é útil para comparativos, opções de serviço e resumos com detalhamento sob demanda.',
          ]}
        >
          <ModalItemsPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Variante form"
        description="A variante form reaproveita o componente Input do próprio design system e mantém a ideia do modal original para pequenos formulários contextuais."
      >
        <SandboxExample
          title="Formulário contextual"
          description="Os campos são descritos por uma lista de configurações tipadas e podem usar helperText, feedback, ícones e os tipos nativos do Input atual."
          code={formExampleCode}
          notes={[
            'Quando nenhum value controlado é passado, o Modal guarda localmente o estado dos campos apenas para demonstrar o preenchimento.',
            'Se o consumidor precisar controlar os campos, basta fornecer value e onChange em cada configuração de input.',
          ]}
        >
          <ModalFormPreview />
        </SandboxExample>
      </SectionCard>

      <SectionCard
        title="Limites e acessibilidade"
        description="A migração removeu o acoplamento com wiring do Volto, mas preservou a intenção principal do componente: interromper o fluxo com foco controlado e interação acessível."
      >
        <ul style={storyDocsStyles.list}>
          <li>O foco permanece dentro do diálogo enquanto ele está aberto.</li>
          <li>Quando <code>closeOnOverlayClick</code> está ativo, clique no overlay aciona <code>onClose</code>.</li>
          <li>Quando <code>closeOnEscape</code> está ativo, a tecla Escape também aciona <code>onClose</code>.</li>
          <li>O componente não implementa submit, validação remota nem envio de dados; essas responsabilidades continuam do lado consumidor.</li>
          <li>Prefira a variante form apenas para poucos campos. Formulários extensos continuam pertencendo a páginas ou fluxos dedicados.</li>
        </ul>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const ModalInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal do diálogo.',
      table: { category: 'Conteúdo' },
    },
    type: {
      control: { type: 'select' },
      options: ['custom', 'items', 'form'],
      description: 'Define a anatomia do corpo do modal.',
      table: { category: 'Variação' },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Quando ativo, clique no overlay dispara onClose.',
      table: { category: 'Comportamento' },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Quando ativo, a tecla Escape dispara onClose.',
      table: { category: 'Comportamento' },
    },
    buttonLeft: {
      table: { disable: true },
    },
    buttonRight: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    inputs: {
      table: { disable: true },
    },
    items: {
      table: { disable: true },
    },
    onClose: {
      table: { disable: true },
    },
  },
  render: (args) => <ModalInteractivePreview {...args} />,
}

export const ModalExemplosDeUso: Story = {
  name: 'Exemplos de uso',
  parameters: {
    controls: { disable: true },
  },
  render: () => <ModalExamplesPreview />,
}