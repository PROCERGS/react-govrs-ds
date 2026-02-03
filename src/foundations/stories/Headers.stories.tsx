import '../styles/_headers.scss'

export default {
  title: 'Typography/Headers',
  parameters: {
    layout: 'padded',
    docs: { disable: true },
  },
}

const Measurements = ({
  size,
  lh,
  weight,
}: {
  size: string
  lh: string
  weight: string
}) => (
  <div
    style={{ fontSize: 13, color: '#444' }}
  >{`${size} / ${lh} / ${weight}`}</div>
);

export const HeadersFull = () => (
  <div>
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <div className="headers-container">
        <h3 style={{ marginTop: 0 }}>Headers — 12 col (base)</h3>
        <div className="headers-12">
          <div className="headers-demo">
            <h1>Header 1</h1>
            <Measurements size="41px" lh="58px" weight="400" />
          </div>
          <div className="headers-demo">
            <h2>Header 2</h2>
            <Measurements size="36px" lh="52px" weight="400" />
          </div>
          <div className="headers-demo">
            <h3>Header 3</h3>
            <Measurements size="30px" lh="42px" weight="400" />
          </div>
          <div className="headers-demo">
            <h4>Header 4</h4>
            <Measurements size="24px" lh="36px" weight="400" />
          </div>
        </div>
      </div>

      <div className="headers-container">
        <h3 style={{ marginTop: 0 }}>Headers — 4 col (base)</h3>
        <div className="headers-4">
          <div className="headers-demo">
            <h1>Header 1</h1>
            <Measurements size="30px" lh="42px" weight="400" />
          </div>
          <div className="headers-demo">
            <h2>Header 2</h2>
            <Measurements size="24px" lh="36px" weight="400" />
          </div>
          <div className="headers-demo">
            <h3>Header 3</h3>
            <Measurements size="20px" lh="32px" weight="400" />
          </div>
          <div className="headers-demo">
            <h4>Header 4</h4>
            <Measurements size="18px" lh="28px" weight="400" />
          </div>
        </div>
      </div>
    </div>

    <div style={{ padding: 16, maxWidth: 960, marginTop: 18 }}>
      <h3>Uso</h3>
      <p style={{ color: '#444' }}>
        Você pode aplicar a classe de escala tanto diretamente no elemento de
        título (conforme mostrado no exemplo abaixo) quanto no contêiner pai
        (wrapper). Ambos os métodos produzem o mesmo resultado tipográfico —
        escolha o que for mais conveniente para o seu componente ou seção de
        página.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <h4>Aplicar na tag</h4>
          <div style={{ marginTop: 18 }}>
            <pre
              style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}
            >
              <code>{`<h1 class="headers-12">Título principal</h1>
<h2 class="headers-12">Subtítulo</h2>
<h3 class="headers-12">Seção</h3>
<h4 class="headers-12">Legenda</h4>`}</code>
            </pre>
            <div style={{ marginTop: 12 }}>
              <h1 className="headers-12">Título principal</h1>
              <h2 className="headers-12">Subtítulo</h2>
              <h3 className="headers-12">Seção</h3>
              <h4 className="headers-12">Legenda</h4>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 280 }}>
          <h4>Aplicar no wrapper (pai)</h4>
          <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}>
            <code>{`<div class="headers-12">
  <h1>Título principal</h1>
  <h2>Subtítulo</h2>
  <h3>Seção</h3>
  <h4>Legenda</h4>
</div>`}</code>
          </pre>
          <div
            style={{ marginTop: 12, border: '1px dashed #ddd', padding: 12 }}
          >
            <div className="headers-12">
              <h1>Título principal</h1>
              <h2>Subtítulo</h2>
              <h3>Seção</h3>
              <h4>Legenda</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeadersFull.storyName = 'Headers';
