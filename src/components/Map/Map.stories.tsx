import type { Meta, StoryObj } from '@storybook/react'

import {
  DocsHero,
  DocsStoryLayout,
  SandboxExample,
  SectionCard,
  storyDocsStyles,
} from '../../../.storybook/docs/storyDocs'
import { Map } from './Map'
import './Map.scss'
import '../../foundations/styles/index.scss'

const docsVariantTags = ['map', 'markers', 'google-maps']

const docsHeroStats = [
  {
    title: 'Quando usar',
    text: 'Quando for necessário exibir pontos geográficos e permitir edição simples de marcadores via Google Maps.',
  },
  {
    title: 'Melhor exploração',
    text: "Use o story 'Interativo' para testar marcadores, edição e lista de marcadores.",
  },
  {
    title: 'Orientações',
    text: 'A story Documentação disponibiliza um control `apiKey`: cole sua Google Maps API Key ali para que os exemplos interativos carreguem. Sem a chave declarada, o mapa não funcionará.',
  },
]

  const basicUsageCode = `const markers = [
  { id: 'm1', lat: -30.0335, lng: -51.2304, title: 'Procergs' },
]

<Map apiKey={'YOUR_API_KEY_HERE'} markers={markers} showMarkerList markerListLabel="Todos os lugares" />`

  const mapOptionsCode = `const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
    clickableIcons: false,
    gestureHandling: 'cooperative',
  }

  <Map apiKey={'YOUR_API_KEY_HERE'} mapOptions={mapOptions} markers={markers} />`

const meta = {
  title: 'Mapas/Map',
  component: Map,
  argTypes: {
    apiKey: {
      control: 'text',
      description: 'API key for Google Maps JS API.',
      table: { category: 'Configuração' },
    },
  },
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
      sort: 'requiredFirst',
    },
  },
} satisfies Meta<typeof Map>

export default meta

type Story = StoryObj<typeof meta>

export const MapDocumentacao: Story = {
  name: 'Documentação',
  parameters: {
    controls: { include: ['apiKey'] },
  },
  render: (args) => {
    const apiKey = (args as any).apiKey ?? undefined

    return (
      <DocsStoryLayout>
      <DocsHero
        eyebrow="Documentação guiada"
        title={<h3 style={storyDocsStyles.heroTitle}>Map</h3>}
        description={
          <>
            Componente para renderizar um mapa do Google com marcadores numerados e
            opção de edição simples.
          </>
        }
        variantTags={docsVariantTags}
        stats={docsHeroStats}
      />

      <SectionCard title="Visão geral" description="O MapWithMarkers exibe marcadores numerados e permite arrastar/adicionar quando editável.">
        <SandboxExample title="Exemplo básico" description="Uso mínimo com provider e lista de marcadores" code={basicUsageCode}>
          <div style={{ padding: 8, maxWidth: 920 }}>
            <Map
              apiKey={apiKey}
              markers={[{ id: 'm1', lat: -30.0335, lng: -51.2304, title: 'Procergs' }]}
              showMarkerList
              markerListLabel="Todos os lugares"
            />
          </div>
        </SandboxExample>
      </SectionCard>

        <SectionCard
          title="Props"
          description="Resumo rápido das props públicas do `Map` e quando usá-las."
        >
          <ul style={storyDocsStyles.list}>
            <li>
              <code>apiKey</code> — Chave da Google Maps JS API. Configure pelo control desta story para ativar exemplos interativos.
            </li>
            <li>
              <code>markers</code> — Array de marcadores a serem exibidos. Cada item: <code>{`{ id, lat, lng, title? }`}</code>.
            </li>
            <li>
              <code>editable</code> — Habilita edição: adicionar marcadores ao clicar e arrastar marcadores existentes.
            </li>
            <li>
              <code>onMarkersChange</code> — Callback chamado quando a lista de marcadores muda (adição ou drag). Use para sincronizar estado externo.
            </li>
            <li>
              <code>mapOptions</code> — Opções passadas diretamente para a API do Google Maps (google.maps.MapOptions). Memoize para evitar re-renders.
            </li>
            <li>
              <code>showMarkerList</code> — Exibe a lista de marcadores ao lado do mapa.
            </li>
            <li>
              <code>markerListLabel</code> — Texto do cabeçalho da lista de marcadores.
            </li>
            <li>
              <code>selectedMarkerId</code> — ID do marcador selecionado (controle externo). Se omitido, o componente gerencia seleção internamente.
            </li>
            <li>
              <code>onMarkerSelect</code> — Callback quando um marcador é selecionado na lista; útil para navegar ou mostrar detalhes.
            </li>
          </ul>
        </SectionCard>

      <SectionCard title="Opções do mapa (mapOptions)" description="O `mapOptions` é repassado diretamente para a API do Google Maps (google.maps.MapOptions). Use para controlar controles, gestos, estilos e restrições do mapa; recomenda-se memoizar o objeto para evitar remounts desnecessários.">
        <SandboxExample title="Exemplo de mapOptions" description="Controle de UI, gestos e outros" code={mapOptionsCode}>
          <div style={{ padding: 8, maxWidth: 920 }}>
            <Map
              apiKey={apiKey}
              mapOptions={{
                disableDefaultUI: true,
                zoomControl: true,
                streetViewControl: false,
                clickableIcons: false,
                gestureHandling: 'cooperative',
              }}
              markers={[{ id: 'm1', lat: -30.0335, lng: -51.2304, title: 'Procergs' }]}
            />
          </div>
        </SandboxExample>
      </SectionCard>
    </DocsStoryLayout>
  )
  },
}

export const MapInterativo: Story = {
  name: 'Interativo',
  argTypes: {
    modoContraste: {
      control: 'boolean',
      description: 'Visualiza o componente no modo de alto contraste.',
      table: { category: 'Acessibilidade' },
    },
    editable: {
      control: 'boolean',
      description: 'Permite adicionar e arrastar marcadores',
      table: { category: 'Comportamento' },
    },
    showMarkerList: {
      control: 'boolean',
      description: 'Exibe uma lista com os marcadores',
      table: { category: 'Apresentação' },
    },
    markerListLabel: {
      control: 'text',
      description: 'Rótulo exibido no cabeçalho da lista de marcadores',
      table: { category: 'Apresentação' },
    },
    zoom: {
      control: { type: 'number', min: 0, max: 21 },
      description: 'Nível de zoom inicial',
      table: { category: 'Configuração' },
    },
  },
  parameters: {
    controls: {
      exclude: ['className', 'id', 'onMarkersChange', 'onMarkerSelect', 'selectedMarkerId'],
    },
  },
  render: (args) => {
    return (
      <div style={{ position: 'relative' }}>
        <Map apiKey={(args as any).apiKey ?? undefined} {...(args as any)} />
      </div>
    )
  },
}

MapInterativo.args = {
  center: { lat: -30.0335, lng: -51.2204 },
  zoom: 13,
  editable: false,
  showMarkerList: true,
  markerListLabel: 'Todos os lugares',
  markers: [
    { id: 'm1', lat: -30.0335, lng: -51.2304, title: 'Procergs' },
    { id: 'm2', lat: -30.037, lng: -51.215, title: 'Procergs 2' },
    { id: 'm3', lat: -30.047, lng: -51.22, title: 'Procergs 3' },
  ],
}
