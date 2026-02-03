import '../styles/_paragraphs.scss';

export default {
  title: 'Typography/Paragraphs',
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

export const ParagraphsFull = () => (
  <div>
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <div className="paragraphs-container" style={{ flex: 1, minWidth: 280 }}>
        <h3 style={{ marginTop: 0 }}>Paragraphs — 12 col (base)</h3>
        <div className="paragraphs-12">
          <div className="paragraphs-demo">
            <p className="paragraph-12-short">
              Parágrafo curto — exemplo de texto.
            </p>
            <Measurements size="20px" lh="32px" weight="400" />
          </div>

          <div className="paragraphs-demo">
            <p className="paragraph-12-small">
              Parágrafo pequeno — exemplo de texto.
            </p>
            <Measurements size="16px" lh="24px" weight="400" />
          </div>

          <div className="paragraphs-demo">
            <p className="paragraph-12-long">
              Parágrafo longo — exemplo de texto. Este parágrafo é declarado
              separadamente mesmo que compartilhe valores com o curto.
            </p>
            <Measurements size="20px" lh="32px" weight="400" />
          </div>
        </div>
      </div>

      <div className="paragraphs-container" style={{ flex: 1, minWidth: 280 }}>
        <h3 style={{ marginTop: 0 }}>Paragraphs — 4 col (base)</h3>
        <div className="paragraphs-4">
          <div className="paragraphs-demo">
            <div>
              <p className="paragraph-4-short">
                Parágrafo curto — exemplo de texto.
              </p>
            </div>
            <Measurements size="16px" lh="24px" weight="400" />
          </div>

          <div className="paragraphs-demo">
            <p className="paragraph-4-long">
              Parágrafo longo — exemplo de texto.
            </p>
            <Measurements size="16px" lh="28px" weight="400" />
          </div>
        </div>
      </div>
    </div>

    <div style={{ padding: 16, maxWidth: 960, marginTop: 18 }}>
      <h3>Exemplos de Uso</h3>
      <div style={{ display: 'block' }}>
        <div style={{ marginBottom: 12 }}>
          <h4>12 col</h4>
          <div style={{ marginTop: 12 }}>
            <pre
              style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}
            >
              <code>{`<p class="paragraph-12-short">Parágrafo curto — exemplo de texto.</p>
<p class="paragraph-12-small">Parágrafo pequeno — exemplo de texto.</p>
<p class="paragraph-12-long">Parágrafo longo — exemplo de texto.</p>`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h4>4 col</h4>
          <div style={{ marginTop: 12 }}>
            <pre
              style={{ background: '#f7f7f7', padding: 12, borderRadius: 4 }}
            >
              <code>{`<p class="paragraph-4-short">Parágrafo curto — exemplo de texto.</p>
<p class="paragraph-4-long">Parágrafo longo — exemplo de texto.</p>`}</code>
            </pre>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Detalhes de Uso</h3>
      <ul style={{ color: '#444' }}>
        <li>
          Unificação em 4 colunas: no sistema 4-col, <em>Parágrafo Curto</em> e{' '}
          <em>Parágrafo Pequeno</em> compartilham os mesmos valores (16px /
          24px) e por isso são representados pela mesma classe de estilo
          separada apenas por conveniência.
        </li>
        <li>
          Use classes no formato{' '}
          <code> paragraph-&lt;cols&gt;-&lt;variant&gt;</code> (ex.:{' '}
          <code>paragraph-12-short</code>, <code>paragraph-4-long</code>). Essa
          abordagem evita a necessidade de combinar uma classe de escala + uma
          classe de variante no mesmo elemento.
        </li>
      </ul>
    </div>
  </div>
);

ParagraphsFull.storyName = 'Paragraphs';
