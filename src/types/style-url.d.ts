declare module '*.scss'

declare module '*.css'

declare module '*.svg?url' {
  const url: string
  export default url
}

declare module '*.png?url' {
  const url: string
  export default url
}