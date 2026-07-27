import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'

import { Footer } from './Footer'
import './Footer.scss'
import '../../foundations/styles/index.scss'

import brasaoAsset from './assets/brasao-RS.svg?url'

const sampleItems = [
  {
    title: 'Institucional',
    items: [
      { title: 'Sobre o órgão', url: '#sobre' },
      { title: 'Estrutura', url: '#estrutura' },
      { title: 'Departamentos', url: '#departamentos' },
    ],
  },
  {
    title: 'Serviços',
    items: [
      { title: 'Solicitar atendimento', url: '#solicitar' },
      { title: 'Consultar protocolo', url: '#protocolo' },
      { title: 'Guias e orientações', url: '#guias' },
    ],
  },
  {
    title: 'Canais',
    items: [
      { title: 'Fale conosco', url: '#fale' },
      { title: 'Ouvidoria', url: '#ouvidoria' },
    ],
  },
  {
    title: 'Transparência',
    items: [
      { title: 'Portal da transparência', url: '#transparencia' },
      { title: 'Contratos', url: '#contratos' },
    ],
  },
] as Footer.Section[]

const meta = {
  title: 'Navegação/Footer',
  component: Footer,
  args: {
    items: sampleItems,
    images: [brasaoAsset],
    children: `<div>
  <h4>Informações</h4>
  <p>Horário de atendimento: 9h–17h</p>
</div>`,
    navigationLabel: 'Rodapé principal',
    asidePosition: 'after',
    socialLinks: {
      facebook: 'https://facebook.com/gov',
      instagram: 'https://instagram.com/gov',
      youtube: 'https://youtube.com/gov',
      x: 'https://x.com/gov',
    },
    license: 'https://example.com/licenca',
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const FooterDocumentacao: Story = {
  name: 'Documentação',
  parameters: { controls: { disable: true } },
  render: () => (
    <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Footer</h3>}
        description={<>Componente de rodapé que organiza links em colunas no desktop e listas expansíveis no mobile.</>}
        variantTags={['colunas desktop', 'accordion mobile', 'imagens e ícones sociais']}
        stats={[
          { title: 'Quando usar', text: 'Para agrupar links institucionais, serviços e canais no rodapé do site.' },
          { title: 'Comportamento', text: 'No desktop os itens aparecem em colunas; em telas pequenas, cada coluna vira um acordeão expansível.' },
        ]}
      />

      <SectionCard title="Estrutura" description="Propriedades (props) do componente Footer e exemplos de uso.">
        <ul style={storyDocsStyles.list}>
          <li><code>items</code>: Array de seções com <code>title</code> e <code>items</code>.</li>
          <li><code>images</code>: Array&lt;string&gt; opcional de URLs para logotipos exibidos abaixo das colunas.</li>
          <li><code>navigationLabel</code>: <em>string</em> — label acessível para a navegação do rodapé.</li>
          
          <li><code>children</code>: o conteúdo adicional renderizado como aside é passado como <code>ReactNode</code> em <code>children</code>.</li>
          <li><code>asidePosition</code>: <em>'before' | 'after'</em> — define se o aside aparece antes ou depois do sitemap.</li>
          <li><code>socialLinks</code>: objeto com campos opcionais <code>facebook</code>, <code>instagram</code>, <code>youtube</code>, <code>x</code>; os ícones são renderizados apenas quando o link correspondente é informado.</li>
          <li><code>license</code>: <em>string</em> — URL para a página da <strong>licença de uso</strong> exibida abaixo do rodapé.</li>
        </ul>

        <SandboxExample
          title="Exemplo completo"
          description="Demonstra todas as props sendo usadas."
          code={`<Footer
  items={sampleItems}
  images={["/assets/logotype.svg"]}
  className="custom-footer"
  navigationLabel="Rodapé principal"
  asidePosition="before"
  socialLinks={{ facebook: 'https://facebook.com', instagram: 'https://instagram.com' }}
  license="https://example.com/licenca"
>
  <div>
    <h4>Assuntos</h4>
    <p>Links úteis e contatos</p>
  </div>
</Footer>`}
        >
          <div style={{ width: '100%' }}>
            <Footer
              items={sampleItems}
              images={[brasaoAsset]}
              className="custom-footer"
              navigationLabel="Rodapé principal"
              asidePosition="before"
              socialLinks={{ facebook: 'https://facebook.com', instagram: 'https://instagram.com' }}
              license="https://example.com/licenca"
            >
              <div>
                <h4>Assuntos</h4>
                <p>Links úteis e contatos</p>
              </div>
            </Footer>
          </div>
        </SandboxExample>
      </SectionCard>

      

      <SectionCard title="Aside adicional" description="Demonstra como passar conteúdo adicional ao Footer via children e controlar a posição (antes/depois).">
        <SandboxExample title="Aside (padrão - after)" description="Conteúdo adicional que aparece após o sitemap." code={`<Footer items={sampleItems}>
  <div>
    <h4>Informações</h4>
    <p>Horário de atendimento: 9h–17h</p>
  </div>
</Footer>`}>
          <div style={{ width: '100%' }}>
            <Footer items={sampleItems}>
              <div>
                <h4>Informações</h4>
                <p>Horário de atendimento: 9h–17h</p>
              </div>
            </Footer>
          </div>
        </SandboxExample>

        <SandboxExample title="Aside (before)" description="Conteúdo adicional posicionado antes do sitemap." code={`<Footer items={sampleItems} asidePosition="before">
  <div>
    <h4>Assuntos</h4>
    <p>Links úteis e contatos</p>
  </div>
</Footer>`}>
          <div style={{ width: '100%' }}>
            <Footer items={sampleItems} asidePosition="before">
              <div>
                <h4>Assuntos</h4>
                <p>Links úteis e contatos</p>
              </div>
            </Footer>
          </div>
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  ),
}

export const FooterInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    items: { control: 'object', table: { category: 'Conteúdo' } },
    images: { control: 'object', table: { category: 'Conteúdo' } },
    navigationLabel: { control: 'text', table: { category: 'Acessibilidade' } },
    asidePosition: {
      control: { type: 'radio' },
      options: ['before', 'after'],
      table: { category: 'Layout' },
    },
    socialLinks: { control: 'object', table: { category: 'Conteúdo' } },
    license: { control: 'text', table: { category: 'Conteúdo' } },
    children: {
      control: 'text',
      description: 'HTML ou texto renderizado dentro do aside adicional. Forneça um snippet HTML (ex: <div>...</div>) para controlar a estrutura completa.',
      table: { category: 'Conteúdo' },
    },
    className: { table: { disable: true } },
  },
  parameters: {
    controls: {
      exclude: ['id', 'onClick', 'onOpenChange'],
    },
  },
  render: (args) => {
    const { children: childrenArg, ...rest } = args as any

    let finalChildren: any = undefined

    if (typeof childrenArg === 'string') {
      const trimmed = childrenArg.trim()
      if (trimmed !== '') {
        finalChildren = <div dangerouslySetInnerHTML={{ __html: childrenArg }} />
      } else {
        finalChildren = undefined
      }
    } else {
      finalChildren = childrenArg ?? undefined
    }

    return (
      <div style={{ width: '100%' }}>
        <Footer {...rest} children={finalChildren} />
      </div>
    )
  },
}
