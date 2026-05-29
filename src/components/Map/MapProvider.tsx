import { createContext, useContext, type ReactNode } from 'react'
import { useLoadScript } from '@react-google-maps/api'

type MapContextValue = {
  isLoaded: boolean
  loadError: Error | null
  apiKey: string | null
  devMode: boolean
  provider: 'google'
}

const MapContext = createContext<MapContextValue>({
  isLoaded: false,
  loadError: null,
  apiKey: null,
  devMode: false,
  provider: 'google',
})

export const useMapContext = () => useContext(MapContext)

type MapProviderProps = {
  apiKey?: string | null
  libraries?: string[]
  children?: ReactNode
  devMode?: boolean
} & Record<string, any>

export function MapProvider({
  apiKey,
  libraries = ['places'],
  children,
  devMode: devModeProp = false,
  ...loadOptions
}: MapProviderProps) {
  const provider: 'google' = 'google'

  if (!apiKey || apiKey.toString().trim() === '') {
    return (
      <MapContext.Provider
        value={{
          isLoaded: false,
          loadError: new Error('Google Maps API key is missing'),
          apiKey: apiKey ?? null,
          devMode: devModeProp,
          provider,
        }}
      >
        {children}
      </MapContext.Provider>
    )
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
    ...loadOptions,
  })

  return (
    <MapContext.Provider
      value={{
        isLoaded,
        loadError: loadError as Error | null,
        apiKey: apiKey ?? null,
        devMode: devModeProp,
        provider,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export default MapProvider
