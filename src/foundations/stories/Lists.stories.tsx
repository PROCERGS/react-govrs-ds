import '../styles/_lists.scss';

export default {
  title: 'Typography/Lists',
  parameters: { layout: 'padded' },
};

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

export const ListsFull = () => (
  <div>
    <div className="listas-container" style={{ maxWidth: 960 }}>
      <h3 style={{ marginTop: 0 }}>Listas</h3>
      <div className="listas-base">
        <div className="listas-demo">
          <ul>
            <li>Lista 1</li>
            <li>Lista 2</li>
            <li>Lista 3</li>
          </ul>
          <Measurements size="20px" lh="32px" weight="400" />
        </div>
      </div>

      <div style={{ padding: 16, marginTop: 24 }}>
        <h3>Uso</h3>
        <p style={{ color: '#444' }}>
          Use a classe <code> listas-base </code> para listas que sigam a
          tipografia do sistema.
        </p>
        <div style={{ marginTop: 12 }}>
          <h4>Exemplo</h4>
          <pre style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}>
            <code>{`<ul class="listas-base">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);

ListsFull.storyName = 'Lists';
