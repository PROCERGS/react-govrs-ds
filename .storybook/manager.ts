import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

import { colors } from '../src/tokens/colors'
import { radius } from '../src/tokens/radius'
import { fontFamilyBase } from '../src/tokens/typography'

function remToPx(value: string) {
  return Math.round(Number.parseFloat(value) * 16)
}

const managerTheme = create({
  base: 'light',
  brandTitle: 'Matriz 3',
  brandImage: '/matriz3-brand.svg',
  brandTarget: '_self',
  fontBase: fontFamilyBase,
  colorPrimary: colors.brand.primary,
  colorSecondary: colors.brand.primaryStrong,
  appBg: colors.brand.primarySoftAlt,
  appContentBg: colors.brand.primarySoftAlt,
  appPreviewBg: colors.neutral.surfaceCanvas,
  appBorderColor: colors.neutral.borderDefault,
  appBorderRadius: remToPx(radius.xl),
  textColor: colors.neutral.textStrong,
  textInverseColor: colors.neutral.white,
  barTextColor: colors.neutral.textSubtle,
  barSelectedColor: colors.brand.primary,
  barHoverColor: colors.brand.primaryHover,
  barBg: colors.brand.primarySoftAlt,
  inputBg: colors.brand.primarySoft,
  inputBorder: colors.neutral.borderEmphasis,
  inputTextColor: colors.neutral.textStrong,
  inputBorderRadius: remToPx(radius.sm),
})

addons.setConfig({
  theme: managerTheme,
  navSize: 320,
  sidebar: {
    showRoots: true,
  },
})