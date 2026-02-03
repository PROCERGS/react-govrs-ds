import '../styles/_placeholders.scss';

export default {
  title: 'Typography/Placeholders',
  parameters: { layout: 'padded' },
};

export const PlaceholdersFull = () => (
  <div style={{ maxWidth: 960 }}>
    <h3 style={{ marginTop: 0 }}>Placeholder</h3>

    <div className="placeholder-demo">
      <div>
        <input
          className="input-placeholder"
          placeholder="Exemplo"
          style={{ padding: 8, width: '100%' }}
        />
      </div>
    </div>

    <div style={{ marginTop: 18 }}>
      <h3>Uso:</h3>
      <p style={{ color: '#444' }}>
        Use <code>input-placeholder</code> para aplicar a tipografia de
        placeholder diretamente no input.
        <br /> Observação: este estilo de placeholder só tem efeito quando a
        classe <code>input-placeholder</code> é aplicada diretamente no elemento{' '}
        <code>&lt;input&gt;</code>, não funciona via wrapper pai.
      </p>
      <div style={{ marginTop: 12 }}>
        <h4>Exemplo</h4>
        <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}>
          <code>{`<input class="input-placeholder" placeholder="Exemplo" />`}</code>
        </pre>
      </div>
    </div>
  </div>
);

PlaceholdersFull.storyName = 'Placeholders';
