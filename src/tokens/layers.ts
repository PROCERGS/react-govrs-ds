import { resolveFamily } from './helpers';
import { numeric } from './helpers';
export const layersDefinitions = {
    "base": numeric(0, "layers: base. Valor preservado da implementação anterior.", { "role": "base" }),
    "raised": numeric(1, "layers: raised. Valor preservado da implementação anterior.", { "role": "base" }),
    "sticky": numeric(5, "layers: sticky. Valor preservado da implementação anterior.", { "role": "base" }),
    "header": numeric(10, "layers: header. Valor preservado da implementação anterior.", { "role": "base" }),
    "navigation": numeric(50, "layers: navigation. Valor preservado da implementação anterior.", { "role": "base" }),
    "dropdown": numeric(60, "layers: dropdown. Valor preservado da implementação anterior.", { "role": "base" }),
    "overlay": numeric(100, "layers: overlay. Valor preservado da implementação anterior.", { "role": "base" }),
    "modal": numeric(110, "layers: modal. Valor preservado da implementação anterior.", { "role": "base" }),
    "toast": numeric(120, "layers: toast. Valor preservado da implementação anterior.", { "role": "base" }),
    "$description": "Ordem de empilhamento dos elementos da interface."
};

export const layers = resolveFamily('layers', layersDefinitions);
