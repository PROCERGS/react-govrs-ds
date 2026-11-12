import { resolveFamily } from './helpers';
import { dimension } from './helpers';
export const sizesDefinitions = {
    "control": {
        "xs": dimension('1.75rem', "sizes: control / xs. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "sm": dimension('2rem', "sizes: control / sm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "md": dimension('2.25rem', "sizes: control / md. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "lg": dimension('2.5rem', "sizes: control / lg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "xl": dimension('2.625rem', "sizes: control / xl. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "hero": dimension('5rem', "sizes: control / hero. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heroMd": dimension('4.375rem', "sizes: control / heroMd. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heroSm": dimension('3.75rem', "sizes: control / heroSm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "heroXs": dimension('3.125rem', "sizes: control / heroXs. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "icon": {
        "xs": dimension('1rem', "sizes: icon / xs. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "sm": dimension('1.75rem', "sizes: icon / sm. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "md": dimension('2rem', "sizes: icon / md. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "lg": dimension('2.5rem', "sizes: icon / lg. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "xl": dimension('3rem', "sizes: icon / xl. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "media": {
        "card": dimension('12.5rem', "sizes: media / card. Valor preservado da implementação anterior.", { "role": "component" }),
        "cardSm": dimension('9.375rem', "sizes: media / cardSm. Valor preservado da implementação anterior.", { "role": "component" }),
        "cardLg": dimension('15.625rem', "sizes: media / cardLg. Valor preservado da implementação anterior.", { "role": "component" }),
        "carousel": dimension('31.25rem', "sizes: media / carousel. Valor preservado da implementação anterior.", { "role": "component" }),
    },
    "container": {
        "foundation": dimension('45rem', "sizes: container / foundation. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "story": dimension('65.3125rem', "sizes: container / story. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "content": dimension('75rem', "sizes: container / content. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "card": {
        "minWidth": dimension('15.625rem', "sizes: card / minWidth. Valor preservado da implementação anterior.", { "role": "component" }),
        "maxWidth": dimension('25rem', "sizes: card / maxWidth. Valor preservado da implementação anterior.", { "role": "component" }),
        "minHeight": dimension('12.5rem', "sizes: card / minHeight. Valor preservado da implementação anterior.", { "role": "component" }),
        "smallMaxWidth": dimension('18.75rem', "sizes: card / smallMaxWidth. Valor preservado da implementação anterior.", { "role": "component" }),
        "largeMaxWidth": dimension('31.25rem', "sizes: card / largeMaxWidth. Valor preservado da implementação anterior.", { "role": "component" }),
        "iconWidth": dimension('10.9375rem', "sizes: card / iconWidth. Valor preservado da implementação anterior.", { "role": "component" }),
        "iconHeight": dimension('9.6875rem', "sizes: card / iconHeight. Valor preservado da implementação anterior.", { "role": "component" })
    },
    "alert": {
        "height": dimension('4.375rem', "sizes: alert / height. Valor preservado da implementação anterior.", { "role": "component" })
    },
    "$description": "Dimensões reutilizáveis de controles, ícones, mídia e componentes."
};

export const sizes = resolveFamily('sizes', sizesDefinitions);
