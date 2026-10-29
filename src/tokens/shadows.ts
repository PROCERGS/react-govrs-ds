import { resolveFamily } from './helpers';
import { shadow } from './helpers';
export const shadowsDefinitions = {
    "sm": shadow({ "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.05 }, "offsetX": { "value": 0, "unit": "px" }, "offsetY": { "value": 1, "unit": "px" }, "blur": { "value": 2, "unit": "px" }, "spread": { "value": 0, "unit": "px" } }, "shadows: sm. Valor preservado da implementação anterior.", { "role": "semantic", "omitZeroSpread": false }),
    "card": shadow({ "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.1 }, "offsetX": { "value": 0, "unit": "px" }, "offsetY": { "value": 2, "unit": "px" }, "blur": { "value": 8, "unit": "px" }, "spread": { "value": 0, "unit": "px" } }, "shadows: card. Valor preservado da implementação anterior.", { "role": "component", "omitZeroSpread": true }),
    "cardHover": shadow({ "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.15 }, "offsetX": { "value": 0, "unit": "px" }, "offsetY": { "value": 4, "unit": "px" }, "blur": { "value": 16, "unit": "px" }, "spread": { "value": 0, "unit": "px" } }, "shadows: cardHover. Valor preservado da implementação anterior.", { "role": "component", "omitZeroSpread": true }),
    "floating": shadow({ "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.08 }, "offsetX": { "value": 0, "unit": "px" }, "offsetY": { "value": 4, "unit": "px" }, "blur": { "value": 10, "unit": "px" }, "spread": { "value": 0, "unit": "px" } }, "shadows: floating. Valor preservado da implementação anterior.", { "role": "semantic", "omitZeroSpread": true }),
    "carouselCard": shadow({ "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.04 }, "offsetX": { "value": 0, "unit": "px" }, "offsetY": { "value": 8, "unit": "px" }, "blur": { "value": 30, "unit": "px" }, "spread": { "value": 0, "unit": "px" } }, "shadows: carouselCard. Valor preservado da implementação anterior.", { "role": "component", "omitZeroSpread": true }),
    "overlay": shadow({ "color": { "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.1 }, "offsetX": { "value": 0, "unit": "px" }, "offsetY": { "value": 2, "unit": "px" }, "blur": { "value": 10, "unit": "px" }, "spread": { "value": 0, "unit": "px" } }, "shadows: overlay. Valor preservado da implementação anterior.", { "role": "semantic", "omitZeroSpread": true }),
    "$description": "Elevação visual de superfícies e componentes."
};

export const shadows = resolveFamily('shadows', shadowsDefinitions);
