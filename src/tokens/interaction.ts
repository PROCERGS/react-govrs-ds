import { resolveFamily } from './helpers';
import { numeric } from './helpers';
export const interactionDefinitions = {
    "opacity": {
        "hover": numeric(0.08, "interaction: opacity / hover. Valor preservado da implementação anterior.", { "role": "base" }),
        "hoverDark": numeric(0.16, "interaction: opacity / hoverDark. Valor preservado da implementação anterior.", { "role": "base" }),
        "hoverLight": numeric(0.04, "interaction: opacity / hoverLight. Valor preservado da implementação anterior.", { "role": "base" }),
        "pressed": numeric(0.24, "interaction: opacity / pressed. Valor preservado da implementação anterior.", { "role": "base" }),
        "pressedDark": numeric(0.32, "interaction: opacity / pressedDark. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "$description": "Intensidade dos estados de interação."
};

export const interaction = resolveFamily('interaction', interactionDefinitions);
