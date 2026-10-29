import { resolveFamily } from './helpers';
import { fontFamily, dimension, ref, numeric, fontWeight } from './helpers';
export const typographyDefinitions = {
    "fontFamily": {
        "base": fontFamily(["Noto Sans", "sans-serif"], "typography: fontFamily / base. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "lineHeight": {
        "24": dimension('1.5rem', "typography: lineHeight / 24. Valor preservado da implementação anterior.", { "role": "base" }),
        "28": dimension('1.75rem', "typography: lineHeight / 28. Valor preservado da implementação anterior.", { "role": "base" }),
        "30": dimension('1.875rem', "typography: lineHeight / 30. Valor preservado da implementação anterior.", { "role": "base" }),
        "32": dimension('2rem', "typography: lineHeight / 32. Valor preservado da implementação anterior.", { "role": "base" }),
        "36": dimension('2.25rem', "typography: lineHeight / 36. Valor preservado da implementação anterior.", { "role": "base" }),
        "42": dimension('2.625rem', "typography: lineHeight / 42. Valor preservado da implementação anterior.", { "role": "base" }),
        "52": dimension('3.25rem', "typography: lineHeight / 52. Valor preservado da implementação anterior.", { "role": "base" }),
        "58": dimension('3.625rem', "typography: lineHeight / 58. Valor preservado da implementação anterior.", { "role": "base" }),
        "bodySm": dimension(ref("typography.lineHeight.24"), "typography: lineHeight / bodySm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "bodyMd": dimension(ref("typography.lineHeight.24"), "typography: lineHeight / bodyMd. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "bodyLg": dimension(ref("typography.lineHeight.28"), "typography: lineHeight / bodyLg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "bodyXl": dimension(ref("typography.lineHeight.32"), "typography: lineHeight / bodyXl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingSm": dimension(ref("typography.lineHeight.28"), "typography: lineHeight / headingSm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingMd": dimension(ref("typography.lineHeight.32"), "typography: lineHeight / headingMd. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingLg": dimension(ref("typography.lineHeight.36"), "typography: lineHeight / headingLg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingXl": dimension(ref("typography.lineHeight.42"), "typography: lineHeight / headingXl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heading2xl": dimension(ref("typography.lineHeight.52"), "typography: lineHeight / heading2xl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heading3xl": dimension(ref("typography.lineHeight.58"), "typography: lineHeight / heading3xl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "tight": numeric(1.2, "typography: lineHeight / tight. Valor preservado da implementação anterior.", { "role": "base" }),
        "medium": numeric(1.5, "typography: lineHeight / medium. Valor preservado da implementação anterior.", { "role": "base" }),
        "loose": numeric(1.75, "typography: lineHeight / loose. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "fontWeight": {
        "regular": fontWeight(400, "typography: fontWeight / regular. Valor preservado da implementação anterior.", { "role": "base" }),
        "medium": fontWeight(500, "typography: fontWeight / medium. Valor preservado da implementação anterior.", { "role": "base" }),
        "semibold": fontWeight(600, "typography: fontWeight / semibold. Valor preservado da implementação anterior.", { "role": "base" }),
        "bold": fontWeight(700, "typography: fontWeight / bold. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "fontSize": {
        "12": dimension('0.75rem', "typography: fontSize / 12. Valor preservado da implementação anterior.", { "role": "base" }),
        "14": dimension('0.875rem', "typography: fontSize / 14. Valor preservado da implementação anterior.", { "role": "base" }),
        "16": dimension('1rem', "typography: fontSize / 16. Valor preservado da implementação anterior.", { "role": "base" }),
        "18": dimension('1.125rem', "typography: fontSize / 18. Valor preservado da implementação anterior.", { "role": "base" }),
        "20": dimension('1.25rem', "typography: fontSize / 20. Valor preservado da implementação anterior.", { "role": "base" }),
        "24": dimension('1.5rem', "typography: fontSize / 24. Valor preservado da implementação anterior.", { "role": "base" }),
        "28": dimension('1.75rem', "typography: fontSize / 28. Valor preservado da implementação anterior.", { "role": "base" }),
        "30": dimension('1.875rem', "typography: fontSize / 30. Valor preservado da implementação anterior.", { "role": "base" }),
        "32": dimension('2rem', "typography: fontSize / 32. Valor preservado da implementação anterior.", { "role": "base" }),
        "36": dimension('2.25rem', "typography: fontSize / 36. Valor preservado da implementação anterior.", { "role": "base" }),
        "40": dimension('2.5rem', "typography: fontSize / 40. Valor preservado da implementação anterior.", { "role": "base" }),
        "41": dimension('2.5625rem', "typography: fontSize / 41. Valor preservado da implementação anterior.", { "role": "base" }),
        "48": dimension('3rem', "typography: fontSize / 48. Valor preservado da implementação anterior.", { "role": "base" }),
        "bodySm": dimension(ref("typography.fontSize.14"), "typography: fontSize / bodySm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "bodyMd": dimension(ref("typography.fontSize.16"), "typography: fontSize / bodyMd. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "bodyLg": dimension(ref("typography.fontSize.18"), "typography: fontSize / bodyLg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "bodyXl": dimension(ref("typography.fontSize.20"), "typography: fontSize / bodyXl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingSm": dimension(ref("typography.fontSize.18"), "typography: fontSize / headingSm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingMd": dimension(ref("typography.fontSize.20"), "typography: fontSize / headingMd. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingLg": dimension(ref("typography.fontSize.24"), "typography: fontSize / headingLg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "headingXl": dimension(ref("typography.fontSize.30"), "typography: fontSize / headingXl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heading2xl": dimension(ref("typography.fontSize.36"), "typography: fontSize / heading2xl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heading3xl": dimension(ref("typography.fontSize.41"), "typography: fontSize / heading3xl. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "$description": "Família, tamanho, peso e altura de linha de textos e títulos."
};

export const typography = resolveFamily('typography', typographyDefinitions);
