import { resolveFamily } from './helpers';
import { color, ref } from './helpers';
export const colorsDefinitions = {
    "brand": {
        "primary": color('#1a7235', "colors: brand / primary. Valor preservado da implementação anterior.", { "role": "base" }),
        "primaryStrong": color('#04290f', "colors: brand / primaryStrong. Valor preservado da implementação anterior.", { "role": "base" }),
        "primaryHover": color('#135428', "colors: brand / primaryHover. Valor preservado da implementação anterior.", { "role": "base" }),
        "primarySoft": color('#ddf9e3', "colors: brand / primarySoft. Valor preservado da implementação anterior.", { "role": "base" }),
        "primarySoftAlt": color('#e6f2ea', "colors: brand / primarySoftAlt. Valor preservado da implementação anterior.", { "role": "base" }),
        "primaryAlpha08": color({ "colorSpace": "srgb", "components": [0.10196078431372549, 0.4470588235294118, 0.20784313725490197], "alpha": 0.08 }, "colors: brand / primaryAlpha08. Valor preservado da implementação anterior.", { "role": "base" }),
        "primaryAlpha10": color({ "colorSpace": "srgb", "components": [0.10196078431372549, 0.4470588235294118, 0.20784313725490197], "alpha": 0.1 }, "colors: brand / primaryAlpha10. Valor preservado da implementação anterior.", { "role": "base" }),
        "primaryAlpha20": color({ "colorSpace": "srgb", "components": [0.10196078431372549, 0.4470588235294118, 0.20784313725490197], "alpha": 0.2 }, "colors: brand / primaryAlpha20. Valor preservado da implementação anterior.", { "role": "base" }),
        "primaryAlpha40": color({ "colorSpace": "srgb", "components": [0.10196078431372549, 0.4470588235294118, 0.20784313725490197], "alpha": 0.4 }, "colors: brand / primaryAlpha40. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "focus": color(ref("colors.palette.yellow"), "colors: focus. Valor preservado da implementação anterior.", { "role": "semantic" }),
    "neutral": {
        "textSubtle": color('#757575', "colors: neutral / textSubtle. Valor preservado da implementação anterior.", { "role": "base" }),
        "white": color('#ffffff', "colors: neutral / white. Valor preservado da implementação anterior.", { "role": "base" }),
        "black": color('#000000', "colors: neutral / black. Valor preservado da implementação anterior.", { "role": "base" }),
        "textStrong": color('#333333', "colors: neutral / textStrong. Valor preservado da implementação anterior.", { "role": "base" }),
        "text": color('#555555', "colors: neutral / text. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "textMuted": color('#999999', "colors: neutral / textMuted. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "avatar": {
        "tones": {
            "0": color('#ff6b6b', "colors: avatar / tones / 0. Valor preservado da implementação anterior.", { "role": "base" }),
            "1": color('#4ecdc4', "colors: avatar / tones / 1. Valor preservado da implementação anterior.", { "role": "base" }),
            "2": color('#45b7d1', "colors: avatar / tones / 2. Valor preservado da implementação anterior.", { "role": "base" }),
            "3": color('#ffa07a', "colors: avatar / tones / 3. Valor preservado da implementação anterior.", { "role": "base" }),
            "4": color('#98d8c8', "colors: avatar / tones / 4. Valor preservado da implementação anterior.", { "role": "base" }),
            "5": color('#f7dc6f', "colors: avatar / tones / 5. Valor preservado da implementação anterior.", { "role": "base" }),
            "6": color('#bb8fce', "colors: avatar / tones / 6. Valor preservado da implementação anterior.", { "role": "base" }),
            "7": color('#85c1e2', "colors: avatar / tones / 7. Valor preservado da implementação anterior.", { "role": "base" }),
            "8": color('#f8b500', "colors: avatar / tones / 8. Valor preservado da implementação anterior.", { "role": "base" }),
            "9": color('#52b788', "colors: avatar / tones / 9. Valor preservado da implementação anterior.", { "role": "base" }),
            "10": color('#e07a5f', "colors: avatar / tones / 10. Valor preservado da implementação anterior.", { "role": "base" }),
            "11": color('#81b29a', "colors: avatar / tones / 11. Valor preservado da implementação anterior.", { "role": "base" }),
            "12": color('#f4a261', "colors: avatar / tones / 12. Valor preservado da implementação anterior.", { "role": "base" }),
            "13": color('#e76f51', "colors: avatar / tones / 13. Valor preservado da implementação anterior.", { "role": "base" }),
            "14": color('#2a9d8f', "colors: avatar / tones / 14. Valor preservado da implementação anterior.", { "role": "base" })
        }
    },
    "media": {
        "backdrop": color(ref("colors.neutral.black"), "colors: media / backdrop. Valor preservado da implementação anterior.", { "role": "base" }),
        "surface": color('#1a1a1a', "colors: media / surface. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "surfaceAlt": color('#2d2d2d', "colors: media / surfaceAlt. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "overlay": {
        "backdrop": color({ "colorSpace": "srgb", "components": [0, 0, 0], "alpha": 0.48 }, "colors: overlay / backdrop. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "interactive": {
        "link": color('#1351b4', "colors: interactive / link. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "linkSubtle": color('#c5d4eb', "colors: interactive / linkSubtle. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "warning": {
        "tint": color('#fff5c2', "colors: warning / tint. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "status": {
        "success": {
            "default": color(ref("colors.palette.green"), "colors: status / success / default. Valor preservado da implementação anterior.", { "role": "semantic" }),
            "surface": color('#e6f7ed', "colors: status / success / surface. Valor preservado da implementação anterior.", { "role": "semantic" })
        },
        "warning": {
            "default": color(ref("colors.palette.yellow"), "colors: status / warning / default. Valor preservado da implementação anterior.", { "role": "semantic" }),
            "surface": color('#fff8e6', "colors: status / warning / surface. Valor preservado da implementação anterior.", { "role": "semantic" })
        },
        "error": {
            "default": color(ref("colors.palette.red"), "colors: status / error / default. Valor preservado da implementação anterior.", { "role": "semantic" }),
            "surface": color('#fdecea', "colors: status / error / surface. Valor preservado da implementação anterior.", { "role": "semantic" })
        },
        "info": {
            "default": color('#2b86d8', "colors: status / info / default. Valor preservado da implementação anterior.", { "role": "semantic" }),
            "surface": color('#e9f5ff', "colors: status / info / surface. Valor preservado da implementação anterior.", { "role": "semantic" })
        }
    },
    "text": {
        "primary": color(ref("colors.brand.primaryStrong"), "colors: text / primary. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "secondary": color(ref("colors.brand.primaryHover"), "colors: text / secondary. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "muted": color('#2f5c40', "colors: text / muted. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "subtle": color('#4a7560', "colors: text / subtle. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "placeholder": color('#6b8f7a', "colors: text / placeholder. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "inverse": color(ref("colors.neutral.white"), "colors: text / inverse. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "surface": {
        "base": color(ref("colors.neutral.white"), "colors: surface / base. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "muted": color('#f8f8f8', "colors: surface / muted. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "soft": color('#f6f6f6', "colors: surface / soft. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "raised": color('#f5f5f5', "colors: surface / raised. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "canvas": color('#fafafa', "colors: surface / canvas. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "alt": color('#f3f3f3', "colors: surface / alt. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "altStrong": color('#e9e9e9', "colors: surface / altStrong. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "overlay": color({ "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 0.85 }, "colors: surface / overlay. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "overlayStrong": color({ "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 0.9 }, "colors: surface / overlayStrong. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "border": {
        "subtle": color('#e6e6e6', "colors: border / subtle. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "default": color('#e5e5e5', "colors: border / default. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "muted": color('#dcdcdc', "colors: border / muted. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "strong": color('#d8d8d8', "colors: border / strong. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "emphasis": color('#cccccc', "colors: border / emphasis. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "contrast": {
        "background": color(ref("colors.neutral.black"), "colors: contrast / background. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "foreground": color(ref("colors.neutral.white"), "colors: contrast / foreground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "muted": color(ref("colors.neutral.white"), "colors: contrast / muted. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "accent": color(ref("colors.focus"), "colors: contrast / accent. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "surface": color(ref("colors.neutral.black"), "colors: contrast / surface. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "surfaceAlt": color(ref("colors.neutral.black"), "colors: contrast / surfaceAlt. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "border": color(ref("colors.neutral.white"), "colors: contrast / border. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "icon": color(ref("colors.neutral.white"), "colors: contrast / icon. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "mark": color(ref("colors.neutral.white"), "colors: contrast / mark. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "controlBackground": color(ref("colors.neutral.black"), "colors: contrast / controlBackground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "controlForeground": color(ref("colors.neutral.white"), "colors: contrast / controlForeground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "controlBorder": color(ref("colors.neutral.white"), "colors: contrast / controlBorder. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "fieldBackground": color(ref("colors.neutral.white"), "colors: contrast / fieldBackground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "fieldForeground": color(ref("colors.neutral.black"), "colors: contrast / fieldForeground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "fieldBorder": color(ref("colors.neutral.black"), "colors: contrast / fieldBorder. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "popoverBackground": color(ref("colors.neutral.white"), "colors: contrast / popoverBackground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "popoverForeground": color(ref("colors.neutral.black"), "colors: contrast / popoverForeground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "popoverBorder": color(ref("colors.neutral.black"), "colors: contrast / popoverBorder. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "searchBackground": color(ref("colors.contrast.fieldBackground"), "colors: contrast / searchBackground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "searchForeground": color(ref("colors.contrast.fieldForeground"), "colors: contrast / searchForeground. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "statusOnline": color(ref("colors.palette.green"), "colors: contrast / statusOnline. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "statusOffline": color(ref("colors.palette.red"), "colors: contrast / statusOffline. Valor preservado da implementação anterior.", { "role": "semantic" }),
        "statusAway": color(ref("colors.palette.yellow"), "colors: contrast / statusAway. Valor preservado da implementação anterior.", { "role": "semantic" })
    },
    "palette": {
        "yellow": color('#ffcd07', "colors: palette / yellow. Valor preservado da implementação anterior.", { "role": "base" }),
        "green": color('#168821', "colors: palette / green. Valor preservado da implementação anterior.", { "role": "base" }),
        "red": color('#e52207', "colors: palette / red. Valor preservado da implementação anterior.", { "role": "base" })
    },
    "$description": "Cores de marca, conteúdo, superfícies, estados e contraste."
};

export const colors = resolveFamily('colors', colorsDefinitions);
