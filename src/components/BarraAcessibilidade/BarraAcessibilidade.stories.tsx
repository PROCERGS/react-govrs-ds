import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { BarraAcessibilidade } from './BarraAcessibilidade'
import { Header } from '../Header/Header'
import coatOfArms from '../Header/brasao-RS.svg?url'

const meta = {
  title: 'Components/BarraAcessibilidade',
  component: BarraAcessibilidade,
  parameters: { layout: 'fullscreen' },
  args: {
    hrefContact: '/contato',
    hrefSitemap: '/mapa-do-site',
    shortcuts: [{ title: 'Conteúdo', href: '#conteudo' }],
  },
} satisfies Meta<typeof BarraAcessibilidade>

export default meta
type Story = StoryObj<typeof meta>

export const SecretariaVinculada: Story = {
  args: {
    secretariatName: 'Secretaria de Planejamento, Governança e Gestão',
    secretariatImageSrc: coatOfArms,
    secretariatImageAlt: '',
  },
  render: (args) => (
    <>
      <BarraAcessibilidade {...args} />
      <Header
        siteTitle="Departamento de Economia e Estatística"
        menuItems={[
          { title: 'Institucional', href: '#institucional' },
          {
            title: 'Serviços',
            href: '#servicos',
            items: [{ title: 'Atendimento', href: '#atendimento' }],
          },
        ]}
        mobileAccessibility={{
          hrefContact: args.hrefContact,
          hrefSitemap: args.hrefSitemap,
          disableHighContrastToggle: args.disableHighContrastToggle,
        }}
      />
    </>
  ),
}

export const Mobile: Story = {
  ...SecretariaVinculada,
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Secretaria de Planejamento, Governança e Gestão')).toBeVisible()
    await expect(canvas.getByText('Conteúdo [1]')).not.toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu' }))
    const footer = canvasElement.querySelector('.govrs-menu-hamburger__accessibility')
    if (!(footer instanceof HTMLElement)) throw new Error('Rodapé de acessibilidade ausente')
    const controls = within(footer)
    await expect(controls.getByRole('link', { name: 'Mapa do site' })).toHaveAttribute('href', '/mapa-do-site')
    await expect(controls.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '/contato')
    const contrast = controls.getByRole('button', { name: /alto contraste/ })
    const initial = contrast.getAttribute('aria-pressed') === 'true'
    await userEvent.click(contrast)
    await expect(contrast).toHaveAttribute('aria-pressed', String(!initial))
    await userEvent.click(contrast)
    await expect(contrast).toHaveAttribute('aria-pressed', String(initial))
  },
}

export const ApenasNome: Story = {
  args: { secretariatName: 'Secretaria de Planejamento, Governança e Gestão' },
}

export const ApenasImagem: Story = {
  args: { secretariatImageSrc: coatOfArms, secretariatImageAlt: 'Secretaria de Planejamento' },
}

export const SemSecretaria: Story = {}

export const SemContato: Story = {
  ...SecretariaVinculada,
  args: { ...SecretariaVinculada.args, hrefContact: '' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('link', { name: 'Contato' })).not.toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu' }))
    await expect(canvas.queryByRole('link', { name: 'Contato' })).not.toBeInTheDocument()
    await expect(canvas.queryByText('Fale conosco')).not.toBeInTheDocument()
  },
}
