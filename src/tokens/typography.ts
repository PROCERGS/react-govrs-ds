export const fontFamilyBase = "'Noto Sans', sans-serif"

export const fontFamilyDisplay = fontFamilyBase

export const typography = {
  fontFamily: {
    base: fontFamilyBase,
    display: fontFamilyDisplay,
  },
  fontSize: {
    '12': '0.75rem',
    '14': '0.875rem',
    '16': '1rem',
    '18': '1.125rem',
    '20': '1.25rem',
    '24': '1.5rem',
    '28': '1.75rem',
    '30': '1.875rem',
    '32': '2rem',
    '36': '2.25rem',
    '40': '2.5rem',
    '41': '2.5625rem',
    '48': '3rem',
  },
  lineHeight: {
    '24': '1.5rem',
    '28': '1.75rem',
    '30': '1.875rem',
    '32': '2rem',
    '36': '2.25rem',
    '42': '2.625rem',
    '52': '3.25rem',
    '58': '3.625rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const