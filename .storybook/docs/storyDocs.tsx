import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export const storyDocsStyles = {
  docsContainer: {
    display: 'grid',
    gap: 24,
    padding: '12px 0 24px',
  },
  text: {
    margin: 0,
    color: '#475569',
    lineHeight: 1.7,
    fontSize: 15,
  },
  heroCard: {
    display: 'grid',
    gap: 16,
    padding: '28px 28px 30px',
    borderRadius: 28,
    background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
    border: '1px solid #dbe5f0',
    boxShadow: '0 20px 48px rgba(15, 23, 42, 0.06)',
  },
  heroEyebrow: {
    margin: 0,
    color: '#0f766e',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: 12,
    fontWeight: 700,
  },
  heroTitle: {
    margin: 0,
    fontSize: 34,
    lineHeight: 1.1,
    color: '#0f172a',
  },
  heroText: {
    margin: 0,
    color: '#334155',
    lineHeight: 1.7,
    fontSize: 16,
    maxWidth: 760,
  },
  variantTagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  variantTag: {
    padding: '8px 12px',
    borderRadius: 999,
    background: '#e0f2fe',
    color: '#0f172a',
    fontSize: 13,
    fontWeight: 600,
    border: '1px solid #bae6fd',
  },
  statGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 14,
  },
  statCard: {
    display: 'grid',
    gap: 6,
    padding: '16px 18px',
    borderRadius: 20,
    background: 'rgba(255, 255, 255, 0.88)',
    border: '1px solid #dbe5f0',
  },
  statTitle: {
    margin: 0,
    fontSize: 14,
    fontWeight: 700,
    color: '#0f172a',
  },
  statText: {
    margin: 0,
    color: '#475569',
    lineHeight: 1.55,
    fontSize: 14,
  },
  sectionCard: {
    display: 'grid',
    gap: 18,
    padding: '22px 24px',
    borderRadius: 24,
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    boxShadow: '0 18px 40px rgba(15, 23, 42, 0.05)',
  },
  sectionHeadingWrap: {
    display: 'grid',
    gap: 8,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 24,
    color: '#0f172a',
  },
  list: {
    margin: 0,
    paddingLeft: 20,
    color: '#334155',
    lineHeight: 1.7,
  },
  sandbox: {
    display: 'grid',
    gap: 0,
    borderRadius: 24,
    border: '1px solid #dbe5f0',
    overflow: 'hidden',
    background: '#ffffff',
  },
  sandboxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 18,
    padding: '18px 20px',
    background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
    borderBottom: '1px solid #e2e8f0',
  },
  sandboxBody: {
    padding: 20,
    background: '#ffffff',
  },
  sandboxNoteList: {
    margin: 0,
    padding: '0 20px 20px 36px',
    color: '#475569',
    lineHeight: 1.65,
  },
  sandboxTabList: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: 4,
    borderRadius: 999,
    background: '#e2e8f0',
    flexShrink: 0,
  },
  previewStage: {
    display: 'grid',
    gap: 16,
    padding: 18,
    borderRadius: 20,
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    border: '1px solid #e2e8f0',
  },
  codeBlock: {
    margin: 0,
    padding: '18px 20px',
    borderRadius: 20,
    background: '#0f172a',
    color: '#e2e8f0',
    overflowX: 'auto',
    fontSize: 13,
    lineHeight: 1.7,
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  },
  cardGrid: {
    display: 'grid',
    gap: 20,
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
  previewGrid: {
    display: 'grid',
    gap: 12,
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  },
  previewItem: {
    display: 'grid',
    gap: 10,
    padding: '14px 16px',
    borderRadius: 18,
    border: '1px solid #e2e8f0',
    background: '#ffffff',
  },
  previewLabel: {
    margin: 0,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: '#64748b',
  },
} satisfies Record<string, CSSProperties>

type StoryDocsStat = {
  title: string
  text: string
}

type StoryDocsHeroProps = {
  eyebrow: ReactNode
  title: ReactNode
  description: ReactNode
  variantTags?: string[]
  stats?: StoryDocsStat[]
}

type VariantTagsProps = {
  items?: string[]
}

type StoryDocsSectionProps = {
  title: string
  description: ReactNode
  children: ReactNode
}

type StorySandboxExampleProps = {
  title: string
  description: ReactNode
  code: string
  notes?: string[]
  children: ReactNode
}

type StoryPreviewCardProps = {
  label: string
  children: ReactNode
}

function getSandboxTabButtonStyle(isActive: boolean): CSSProperties {
  return {
    border: 'none',
    background: isActive ? '#ffffff' : 'transparent',
    color: isActive ? '#0f172a' : '#475569',
    padding: '8px 14px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: isActive ? '0 1px 2px rgba(15, 23, 42, 0.12)' : 'none',
  }
}

function StoryStatCard({ title, text }: StoryDocsStat) {
  return (
    <div style={storyDocsStyles.statCard}>
      <p style={storyDocsStyles.statTitle}>{title}</p>
      <p style={storyDocsStyles.statText}>{text}</p>
    </div>
  )
}

export function VariantTags({ items = [] }: VariantTagsProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <div style={storyDocsStyles.variantTagsRow}>
      {items.map((item) => (
        <span key={item} style={storyDocsStyles.variantTag}>
          {item}
        </span>
      ))}
    </div>
  )
}

export function StoryDocsHero({
  eyebrow,
  title,
  description,
  variantTags = [],
  stats = [],
}: StoryDocsHeroProps) {
  return (
    <div style={storyDocsStyles.heroCard}>
      <p style={storyDocsStyles.heroEyebrow}>{eyebrow}</p>
      {typeof title === 'string' ? <h3 style={storyDocsStyles.heroTitle}>{title}</h3> : title}
      <div style={storyDocsStyles.heroText}>{description}</div>

      <VariantTags items={variantTags} />

      {stats.length > 0 ? (
        <div style={storyDocsStyles.statGrid}>
          {stats.map((item) => (
            <StoryStatCard key={item.title} {...item} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function DocsStoryLayout({ children }: { children: ReactNode }) {
  return <div style={storyDocsStyles.docsContainer}>{children}</div>
}

export function StoryDocsSection({ title, description, children }: StoryDocsSectionProps) {
  return (
    <section style={storyDocsStyles.sectionCard}>
      <div style={storyDocsStyles.sectionHeadingWrap}>
        <h4 style={storyDocsStyles.sectionTitle}>{title}</h4>
        <div style={storyDocsStyles.text}>{description}</div>
      </div>
      {children}
    </section>
  )
}

export function StorySandboxExample({
  title,
  description,
  code,
  notes,
  children,
}: StorySandboxExampleProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  return (
    <div style={storyDocsStyles.sandbox}>
      <div style={storyDocsStyles.sandboxHeader}>
        <div style={{ display: 'grid', gap: 6 }}>
          <strong style={{ color: '#0f172a', fontSize: 16 }}>{title}</strong>
          <div style={storyDocsStyles.text}>{description}</div>
        </div>

        <div style={storyDocsStyles.sandboxTabList} role="tablist" aria-label={`${title} visualizacao`}>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'preview'}
            onClick={() => setActiveTab('preview')}
            style={getSandboxTabButtonStyle(activeTab === 'preview')}
          >
            Preview
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'code'}
            onClick={() => setActiveTab('code')}
            style={getSandboxTabButtonStyle(activeTab === 'code')}
          >
            Codigo
          </button>
        </div>
      </div>

      <div style={storyDocsStyles.sandboxBody}>
        {activeTab === 'preview' ? (
          <div style={storyDocsStyles.previewStage}>{children}</div>
        ) : (
          <pre style={storyDocsStyles.codeBlock}>
            <code>{code}</code>
          </pre>
        )}
      </div>

      {notes && notes.length > 0 ? (
        <ul style={storyDocsStyles.sandboxNoteList}>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export function StoryPreviewCard({ label, children }: StoryPreviewCardProps) {
  return (
    <div style={storyDocsStyles.previewItem}>
      <p style={storyDocsStyles.previewLabel}>{label}</p>
      {children}
    </div>
  )
}

export {
  StoryDocsHero as DocsHero,
  StoryDocsSection as SectionCard,
  StorySandboxExample as SandboxExample,
}