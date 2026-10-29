import { resolveFamily } from './helpers';
import { duration, cubicBezier, numeric, dimension, transition } from './helpers';
export const motionDefinitions = {
    "duration": {
        "fast": duration({ "value": 0.2, "unit": "s" }, "motion: duration / fast. Valor preservado da implementação anterior.", { "role": "base" }),
        "base": duration({ "value": 0.3, "unit": "s" }, "motion: duration / base. Valor preservado da implementação anterior.", { "role": "base" }),
        "slow": duration({ "value": 0.45, "unit": "s" }, "motion: duration / slow. Valor preservado da implementação anterior.", { "role": "base" }),
        "slower": duration({ "value": 0.5, "unit": "s" }, "motion: duration / slower. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "easing": {
        "standard": cubicBezier([0.25, 0.1, 0.25, 1], "motion: easing / standard. Valor preservado da implementação anterior.", { "role": "base", "webKeyword": "ease" }),
        "emphasized": cubicBezier([0.42, 0, 0.58, 1], "motion: easing / emphasized. Valor preservado da implementação anterior.", { "role": "base", "webKeyword": "ease-in-out" })
    },
    "scale": {
        "hover": numeric(1.1, "motion: scale / hover. Valor preservado da implementação anterior.", { "role": "base" }),
        "subtle": numeric(1.02, "motion: scale / subtle. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "offset": {
        "lift": dimension('-2px', "motion: offset / lift. Valor preservado da implementação anterior.", { "role": "base" }),
        "slide": dimension('-10px', "motion: offset / slide. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "transition": {
        "base": transition({ "duration": "{motion.duration.base}", "delay": { "value": 0, "unit": "s" }, "timingFunction": "{motion.easing.standard}" }, "motion: transition / base. Valor preservado da implementação anterior.", { "role": "base", "webProperty": "all" }),
        "fast": transition({ "duration": "{motion.duration.fast}", "delay": { "value": 0, "unit": "s" }, "timingFunction": "{motion.easing.standard}" }, "motion: transition / fast. Valor preservado da implementação anterior.", { "role": "base", "webProperty": "all" }),
        "slow": transition({ "duration": "{motion.duration.slower}", "delay": { "value": 0, "unit": "s" }, "timingFunction": "{motion.easing.standard}" }, "motion: transition / slow. Valor preservado da implementação anterior.", { "role": "base", "webProperty": "all" })
    },
    "$description": "Tempos, curvas, transformações e transições de interação."
};

export const motion = resolveFamily('motion', motionDefinitions);
