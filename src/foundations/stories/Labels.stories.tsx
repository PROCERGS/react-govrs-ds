import '../styles/_labels.scss';

export default {
  title: 'Typography/Labels',
  parameters: { layout: 'padded' },
};

export const LabelsFull = () => (
  <div>
    <div style={{ padding: 0, maxWidth: 960 }}>
      <h3 style={{ marginTop: 0 }}>Label</h3>
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
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              marginTop: 12,
            }}
          >
            <code>{`<label class="label-base">Label</label>`}</code>
          </pre>
          <div style={{ marginTop: 12 }}>
            <label className="label-base">Label</label>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 280 }}>
          <h4>Aplicar no wrapper (pai)</h4>
          <pre
            style={{
              background: '#f7f7f7',
              padding: 12,
              borderRadius: 4,
              marginTop: 12,
            }}
          >
            <code>{`<div class="label-base">
  <label>Label</label>
</div>`}</code>
          </pre>
          <div
            style={{ marginTop: 12, border: '1px dashed #ddd', padding: 12 }}
          >
            <div className="label-base">
              <label>Label</label>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ margin: '24px 0' }} />

      <h3>Label Tab</h3>
      <div style={{ marginTop: 12 }}>
        {/* Visual-only example: layout labels to look like tabs. */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <label className="label-tab">Geral</label>
          <label className="label-tab">Conteúdo</label>
          <label className="label-tab">Permissões</label>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <p style={{ color: '#444' }}>
          A classe <code>label-tab</code> fornece apenas a estilização visual do
          rótulo de uma aba. Aplique-a diretamente no elemento{' '}
          <code>&lt;label&gt;</code>
          ou no contêiner que envolve o rótulo.
        </p>
        <p style={{ color: '#444' }}>
          Exemplo abaixo: esta composição mostra como labels com a classe
          <code>label-tab</code> podem ser colocadas lado a lado para formar a
          barra de abas.
        </p>
        <div style={{ marginTop: 12 }}>
          <h4>Exemplo (marcação)</h4>
          <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}>
            <code>{`<label class="label-tab">Geral</label>
<label class="label-tab">Conteúdo</label>
<label class="label-tab">Permissões</label>`}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);

LabelsFull.storyName = 'Labels';
