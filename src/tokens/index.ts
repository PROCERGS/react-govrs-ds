export { breakpoints } from './breakpoints'
export { colors } from './colors'
export { motion } from './motion'
export { radius } from './radius'
export { shadows } from './shadows'
export { size } from './size'
export { spacing } from './spacing'
export { typography, fontFamilyBase, fontFamilyDisplay } from './typography'
export { zIndex } from './zIndex'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { motion } from './motion'
import { radius } from './radius'
import { shadows } from './shadows'
import { size } from './size'
import { spacing } from './spacing'
import { typography } from './typography'
import { zIndex } from './zIndex'

export const designTokens = {
  breakpoints,
  colors,
  motion,
  radius,
  shadows,
  size,
  spacing,
  typography,
  zIndex,
} as const