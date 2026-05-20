import type { ReactNode } from 'react';
export declare const storyDocsStyles: {
    docsContainer: {
        display: "grid";
        gap: number;
        padding: string;
    };
    text: {
        margin: number;
        color: "#475569";
        lineHeight: number;
        fontSize: number;
    };
    heroCard: {
        display: "grid";
        gap: number;
        padding: string;
        borderRadius: number;
        background: string;
        border: string;
        boxShadow: "0 20px 48px rgba(15, 23, 42, 0.06)";
    };
    heroEyebrow: {
        margin: number;
        color: "#0f766e";
        textTransform: "uppercase";
        letterSpacing: string;
        fontSize: number;
        fontWeight: number;
    };
    heroTitle: {
        margin: number;
        fontSize: number;
        lineHeight: number;
        color: "#0f172a";
    };
    heroText: {
        margin: number;
        color: "#334155";
        lineHeight: number;
        fontSize: number;
        maxWidth: number;
    };
    variantTagsRow: {
        display: "flex";
        flexWrap: "wrap";
        gap: number;
    };
    variantTag: {
        padding: string;
        borderRadius: number;
        background: string;
        color: "#0f172a";
        fontSize: number;
        fontWeight: number;
        border: string;
    };
    statGrid: {
        display: "grid";
        gridTemplateColumns: string;
        gap: number;
    };
    statCard: {
        display: "grid";
        gap: number;
        padding: string;
        borderRadius: number;
        background: string;
        border: string;
    };
    statTitle: {
        margin: number;
        fontSize: number;
        fontWeight: number;
        color: "#0f172a";
    };
    statText: {
        margin: number;
        color: "#475569";
        lineHeight: number;
        fontSize: number;
    };
    sectionCard: {
        display: "grid";
        gap: number;
        padding: string;
        borderRadius: number;
        background: string;
        border: string;
        boxShadow: "0 18px 40px rgba(15, 23, 42, 0.05)";
    };
    sectionHeadingWrap: {
        display: "grid";
        gap: number;
    };
    sectionTitle: {
        margin: number;
        fontSize: number;
        color: "#0f172a";
    };
    list: {
        margin: number;
        paddingLeft: number;
        color: "#334155";
        lineHeight: number;
    };
    sandbox: {
        display: "grid";
        gap: number;
        borderRadius: number;
        border: string;
        overflow: "hidden";
        background: string;
    };
    sandboxHeader: {
        display: "flex";
        justifyContent: "space-between";
        alignItems: "flex-start";
        gap: number;
        padding: string;
        background: string;
        borderBottom: string;
    };
    sandboxBody: {
        padding: number;
        background: string;
    };
    sandboxNoteList: {
        margin: number;
        padding: string;
        color: "#475569";
        lineHeight: number;
    };
    sandboxTabList: {
        display: "inline-flex";
        alignItems: "center";
        gap: number;
        padding: number;
        borderRadius: number;
        background: string;
        flexShrink: number;
    };
    previewStage: {
        display: "grid";
        gap: number;
        padding: number;
        borderRadius: number;
        background: string;
        border: string;
    };
    codeBlock: {
        margin: number;
        padding: string;
        borderRadius: number;
        background: string;
        color: "#e2e8f0";
        overflowX: "auto";
        fontSize: number;
        lineHeight: number;
        fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
    };
    cardGrid: {
        display: "grid";
        gap: number;
        gridTemplateColumns: string;
    };
    previewGrid: {
        display: "grid";
        gap: number;
        gridTemplateColumns: string;
    };
    previewItem: {
        display: "grid";
        gap: number;
        padding: string;
        borderRadius: number;
        border: string;
        background: string;
    };
    previewLabel: {
        margin: number;
        fontSize: number;
        fontWeight: number;
        letterSpacing: string;
        textTransform: "uppercase";
        color: "#64748b";
    };
};
type StoryDocsStat = {
    title: string;
    text: string;
};
type StoryDocsHeroProps = {
    eyebrow: ReactNode;
    title: ReactNode;
    description: ReactNode;
    variantTags?: string[];
    stats?: StoryDocsStat[];
};
type VariantTagsProps = {
    items?: string[];
};
type StoryDocsSectionProps = {
    title: string;
    description: ReactNode;
    children: ReactNode;
};
type StorySandboxExampleProps = {
    title: string;
    description: ReactNode;
    code: string;
    notes?: string[];
    children: ReactNode;
};
type StoryPreviewCardProps = {
    label: string;
    children: ReactNode;
};
export declare function VariantTags({ items }: VariantTagsProps): import("react/jsx-runtime").JSX.Element | null;
export declare function StoryDocsHero({ eyebrow, title, description, variantTags, stats, }: StoryDocsHeroProps): import("react/jsx-runtime").JSX.Element;
export declare function DocsStoryLayout({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function StoryDocsSection({ title, description, children }: StoryDocsSectionProps): import("react/jsx-runtime").JSX.Element;
export declare function StorySandboxExample({ title, description, code, notes, children, }: StorySandboxExampleProps): import("react/jsx-runtime").JSX.Element;
export declare function StoryPreviewCard({ label, children }: StoryPreviewCardProps): import("react/jsx-runtime").JSX.Element;
export { StoryDocsHero as DocsHero, StoryDocsSection as SectionCard, StorySandboxExample as SandboxExample, };
