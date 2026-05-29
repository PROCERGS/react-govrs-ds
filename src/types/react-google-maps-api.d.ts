declare module '@react-google-maps/api' {
  import type { ComponentType } from 'react'

  export function useLoadScript(options?: any): { isLoaded: boolean; loadError: any }

  export const GoogleMap: ComponentType<any>
  export const Marker: ComponentType<any>

  const _default: any
  export default _default
}
