import { resolveFamily } from './helpers';
import { dimension } from './helpers';
export const layoutDefinitions = {
    "container": {
        "barraLg": dimension('46.875rem', "layout: container / barraLg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "barraXl": dimension('60.625rem', "layout: container / barraXl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "barraXxxl": dimension('73.125rem', "layout: container / barraXxxl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "header": dimension('72rem', "layout: container / header. Alinhado a 72rem para casar header e footer.", { "role": "component" })
    },
    "$description": "Larguras e limites estruturais dos contêineres."
};

export const layout = resolveFamily('layout', layoutDefinitions);
