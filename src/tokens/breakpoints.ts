import { resolveFamily } from './helpers';
import { dimension } from './helpers';
export const breakpointsDefinitions = {
    "xl": dimension('62rem', "breakpoints: xl. Valor preservado da implementação anterior.", { "role": "base" }),
    "tabletSm": dimension('36rem', "breakpoints: tabletSm. Valor preservado da implementação anterior.", { "role": "base" }),
    "desktopSm": dimension('80rem', "breakpoints: desktopSm. Valor preservado da implementação anterior.", { "role": "base" }),
    "tvSm": dimension('100rem', "breakpoints: tvSm. Valor preservado da implementação anterior.", { "role": "base" }),
    "smartphoneSm": dimension('25rem', "breakpoints: smartphoneSm. Valor preservado da implementação anterior.", { "role": "base" }),
    "smartphoneMd": dimension('26.25rem', "breakpoints: smartphoneMd. Valor preservado da implementação anterior.", { "role": "base" }),
    "tabletMd": dimension('40rem', "breakpoints: tabletMd. Valor preservado da implementação anterior.", { "role": "base" }),
    "tabletLg": dimension('48rem', "breakpoints: tabletLg. Valor preservado da implementação anterior.", { "role": "base" }),
    "tabletXxl": dimension('64rem', "breakpoints: tabletXxl. Valor preservado da implementação anterior.", { "role": "base" }),
    "tabletXxxl": dimension('75rem', "breakpoints: tabletXxxl. Valor preservado da implementação anterior.", { "role": "base" }),
    "$description": "Tamanhos base de viewport; ajustes pertencem aos consumidores."
};

export const breakpoints = resolveFamily('breakpoints', breakpointsDefinitions);
