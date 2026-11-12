import { resolveFamily } from './helpers';
import { dimension, numeric } from './helpers';
export const radiiDefinitions = {
    "xs": dimension('0.25rem', "radii: xs. Valor preservado da implementação anterior.", { "role": "base" }),
    "sm": dimension('0.375rem', "radii: sm. Valor preservado da implementação anterior.", { "role": "base" }),
    "md": dimension('0.5rem', "radii: md. Valor preservado da implementação anterior.", { "role": "base" }),
    "lg": dimension('0.75rem', "radii: lg. Valor preservado da implementação anterior.", { "role": "base" }),
    "xl": dimension('1rem', "radii: xl. Valor preservado da implementação anterior.", { "role": "base" }),
    "pill": dimension('999px', "radii: pill. Valor preservado da implementação anterior.", { "role": "base" }),
    "circle": numeric(0.5, "radii: circle. Valor preservado da implementação anterior.", { "role": "base", "webFormat": "percentage" }),
    "$description": "Arredondamentos de contêineres e controles."
};

export const radii = resolveFamily('radii', radiiDefinitions);
