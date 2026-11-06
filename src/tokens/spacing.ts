import { resolveFamily } from './helpers';
import { dimension, multiply, ref } from './helpers';
export const spacingDefinitions = {
    "scale": {
        "0": dimension(multiply(ref('spacing.scale.1'), 0), "spacing: scale / 0. Valor preservado da implementação anterior.", { "role": "base" }),
        "1": dimension('0.25rem', "spacing: scale / 1. Valor preservado da implementação anterior.", { "role": "base" }),
        "2": dimension(multiply(ref('spacing.scale.1'), 2), "spacing: scale / 2. Valor preservado da implementação anterior.", { "role": "base" }),
        "3": dimension(multiply(ref('spacing.scale.1'), 3), "spacing: scale / 3. Valor preservado da implementação anterior.", { "role": "base" }),
        "4": dimension(multiply(ref('spacing.scale.1'), 4), "spacing: scale / 4. Valor preservado da implementação anterior.", { "role": "base" }),
        "5": dimension(multiply(ref('spacing.scale.1'), 5), "spacing: scale / 5. Valor preservado da implementação anterior.", { "role": "base" }),
        "6": dimension(multiply(ref('spacing.scale.1'), 6), "spacing: scale / 6. Valor preservado da implementação anterior.", { "role": "base" }),
        "7": dimension(multiply(ref('spacing.scale.1'), 8), "spacing: scale / 7. Valor preservado da implementação anterior.", { "role": "base" }),
        "8": dimension(multiply(ref('spacing.scale.1'), 12), "spacing: scale / 8. Valor preservado da implementação anterior.", { "role": "base" }),
        "1_5": dimension(multiply(ref('spacing.scale.1'), 1.5), "spacing: scale / 1_5. Valor preservado da implementação anterior.", { "role": "base" }),
        "2_5": dimension(multiply(ref('spacing.scale.1'), 2.5), "spacing: scale / 2_5. Valor preservado da implementação anterior.", { "role": "base" }),
        "3_5": dimension(multiply(ref('spacing.scale.1'), 3.5), "spacing: scale / 3_5. Valor preservado da implementação anterior.", { "role": "base" }),
        "3_75": dimension(multiply(ref('spacing.scale.1'), 3.75), "spacing: scale / 3_75. Valor preservado da implementação anterior.", { "role": "base" }),
        "4_5": dimension(multiply(ref('spacing.scale.1'), 4.5), "spacing: scale / 4_5. Valor preservado da implementação anterior.", { "role": "base" }),
        "7_5": dimension(multiply(ref('spacing.scale.1'), 10), "spacing: scale / 7_5. Valor preservado da implementação anterior.", { "role": "base" }),
        "gutter": dimension(multiply(ref('spacing.scale.1'), 21), "spacing: scale / gutter. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "section": {
        "spacious": dimension('5rem', "spacing: section / spacious. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "focus": {
        "offset": dimension('2px', "spacing: focus / offset. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "pixels": {
        "base": dimension('8px', "spacing: pixels / base. Valor preservado da implementação anterior.", { "role": "base" }),
        "half": dimension(multiply(ref('spacing.pixels.base'), 0.5), "spacing: pixels / half. Valor preservado da implementação anterior.", { "role": "base" }),
        "1x": dimension(multiply(ref('spacing.pixels.base'), 1), "spacing: pixels / 1x. Valor preservado da implementação anterior.", { "role": "base" }),
        "2x": dimension(multiply(ref('spacing.pixels.base'), 2), "spacing: pixels / 2x. Valor preservado da implementação anterior.", { "role": "base" }),
        "3x": dimension(multiply(ref('spacing.pixels.base'), 3), "spacing: pixels / 3x. Valor preservado da implementação anterior.", { "role": "base" }),
        "4x": dimension(multiply(ref('spacing.pixels.base'), 4), "spacing: pixels / 4x. Valor preservado da implementação anterior.", { "role": "base" }),
        "5x": dimension(multiply(ref('spacing.pixels.base'), 5), "spacing: pixels / 5x. Valor preservado da implementação anterior.", { "role": "base" }),
        "6x": dimension(multiply(ref('spacing.pixels.base'), 6), "spacing: pixels / 6x. Valor preservado da implementação anterior.", { "role": "base" }),
        "7x": dimension(multiply(ref('spacing.pixels.base'), 7), "spacing: pixels / 7x. Valor preservado da implementação anterior.", { "role": "base" }),
        "8x": dimension(multiply(ref('spacing.pixels.base'), 8), "spacing: pixels / 8x. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "$description": "Escalas e decisões de espaçamento; conservar as unidades para manter o layout."
};

export const spacing = resolveFamily('spacing', spacingDefinitions);
