export const motion = {
  duration: {
    fast: '0.2s',
    base: '0.3s',
    slow: '0.45s',
    slower: '0.5s',
  },
  easing: {
    standard: 'ease',
    emphasized: 'ease-in-out',
  },
  scale: {
    hover: 1.1,
    subtle: 1.02,
  },
  offset: {
    lift: '-2px',
    slide: '-10px',
  },
} as const