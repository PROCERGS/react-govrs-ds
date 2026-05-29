import MapWithMarkers, { type MapWithMarkersProps, type MarkerItem } from './MapWithMarkers'
import { MapProvider } from './MapProvider'

export type MapProps = MapWithMarkersProps & {
  apiKey?: string | null
}

export function Map({ apiKey, ...props }: MapProps) {
  return (
    <MapProvider apiKey={apiKey}>
      <MapWithMarkers {...(props as MapWithMarkersProps)} />
    </MapProvider>
  )
}

export default Map

export { MapProvider }

export namespace Map {
  export type Props = MapProps
  export type Marker = MarkerItem
}
