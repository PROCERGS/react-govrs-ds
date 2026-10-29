import { resolveFamily } from './helpers';
import { dimension, strokeStyle } from './helpers';
export const bordersDefinitions = {
    "width": {
        "sm": dimension('1px', "borders: width / sm. Valor preservado da implementação anterior.", { "role": "base" }),
        "md": dimension('2px', "borders: width / md. Valor preservado da implementação anterior.", { "role": "base" }),
        "lg": dimension('4px', "borders: width / lg. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "focus": {
        "width": dimension('2px', "borders: focus / width. Valor preservado da implementação anterior.", { "role": "base" }),
        "style": strokeStyle("solid", "borders: focus / style. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "$description": "Espessuras e estilos das bordas e indicadores de foco."
};

export const borders = resolveFamily('borders', bordersDefinitions);
