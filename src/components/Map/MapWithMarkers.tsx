import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useMapContext } from './MapProvider'
import { ensureStylesheet } from '../../runtime/ensureStylesheet'
import stylesheetUrl from './Map.scss?url'

ensureStylesheet(stylesheetUrl)

export type MarkerItem = {
  id: string
  lat: number
  lng: number
  title?: string
}

export type MapWithMarkersProps = {
  center?: { lat: number; lng: number }
  zoom?: number
  markers?: MarkerItem[]
  editable?: boolean
  onMarkersChange?: (markers: MarkerItem[]) => void
  mapOptions?: any
  showMarkerList?: boolean
  markerListLabel?: string
  selectedMarkerId?: string | null
  onMarkerSelect?: (id: string) => void
}

const containerStyle = { width: '100%', height: '400px' }

const buildSvgPin = (n: number) => {
  const label = String(n)
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="40" height="56" viewBox="0 0 40 56" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-10%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#0f4b7a" flood-opacity="0.35"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <path d="M20 1C10.059 1 2 9.059 2 19c0 11.5 13.341 28.503 17.24 33.218a1 1 0 0 0 1.52 0C24.659 47.503 38 30.5 38 19 38 9.059 29.941 1 20 1Z" fill="#1c7ed6" stroke="#0f4b7a" stroke-width="2"/>
  </g>
  <text x="20" y="24" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="700">${label}</text>
</svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export default function MapWithMarkers({
  center = { lat: -23.55, lng: -46.64 },
  zoom = 12,
  markers = [],
  editable = true,
  onMarkersChange = () => {},
  mapOptions = {},
  showMarkerList = false,
  markerListLabel = 'Todos os lugares',
  selectedMarkerId,
  onMarkerSelect,
}: MapWithMarkersProps) {
  const { isLoaded, apiKey, devMode, loadError } = useMapContext()
  const mapRef = useRef<any>(null)
  const [localSelectedId, setLocalSelectedId] = useState<string | null>(selectedMarkerId ?? null)
  const isControlled = selectedMarkerId !== undefined && selectedMarkerId !== null
  const effectiveSelectedId = isControlled ? selectedMarkerId : localSelectedId

  useEffect(() => {
    if (isControlled) return
    if (!localSelectedId && markers.length) {
      setLocalSelectedId(markers[0].id)
    }
  }, [isControlled, localSelectedId, markers])

  useEffect(() => {
    if (!mapRef.current) return
    if (!effectiveSelectedId) return
    const target = markers.find((m) => m.id === effectiveSelectedId)
    if (!target) return
    mapRef.current.panTo({ lat: target.lat, lng: target.lng })
  }, [effectiveSelectedId, markers])

  const handleMapClick = useCallback(
    (e: any) => {
      if (!editable) return
      const newMarker: MarkerItem = {
        id: Date.now().toString(),
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      }
      onMarkersChange([...markers, newMarker])
    },
    [editable, markers, onMarkersChange],
  )

  const handleDragEnd = useCallback(
    (e: any, id: string) => {
      const updated = markers.map((m) => (m.id === id ? { ...m, lat: e.latLng.lat(), lng: e.latLng.lng() } : m))
      onMarkersChange(updated)
    },
    [markers, onMarkersChange],
  )

  const handleMarkerSelect = useCallback(
    (id?: string) => {
      if (!id) return
      if (!isControlled) setLocalSelectedId(id)
      onMarkerSelect?.(id)
    },
    [isControlled, onMarkerSelect],
  )

  const decoratedMarkers = useMemo(
    () =>
      markers.map((m, idx) => ({
        ...m,
        icon: {
          url: buildSvgPin(idx + 1),
          scaledSize: { width: 36, height: 52 },
          anchor: { x: 18, y: 52 },
        },
        listLabel: `${idx + 1}. ${m.title || 'Local'}`,
      })),
    [markers],
  )

  const markerOptions = useMemo(() => decoratedMarkers.map((m) => ({ value: m.id, label: m.listLabel })), [decoratedMarkers])
  const showMap = Boolean(apiKey && isLoaded && !loadError && !devMode)

  return (
    <div className="govrs-map">
      <div className="govrs-map__container">
        {showMap ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onClick={handleMapClick}
            options={mapOptions}
            onLoad={(map: any) => {
              mapRef.current = map
            }}
          >
            {decoratedMarkers.map((m) => (
              <Marker
                key={m.id}
                position={{ lat: m.lat, lng: m.lng }}
                draggable={editable}
                onDragEnd={(e: any) => handleDragEnd(e, m.id)}
                title={m.title}
                icon={m.icon}
              />
            ))}
          </GoogleMap>
        ) : (
          <div
            className="govrs-map__placeholder"
            style={{ height: containerStyle.height, background: 'var(--govrs-color-surface-alt, #f3f3f3)' }}
          />
        )}
      </div>

      {showMarkerList && markerOptions.length > 0 && (
        <div className="govrs-map__marker-list">
          <div className="govrs-map__marker-list__header">{markerListLabel}</div>
          <select
            value={effectiveSelectedId || ''}
            onChange={(e) => handleMarkerSelect(e.target.value)}
          >
            {markerOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export namespace MapWithMarkers {
  export type Props = MapWithMarkersProps
  export type Marker = MarkerItem
}
