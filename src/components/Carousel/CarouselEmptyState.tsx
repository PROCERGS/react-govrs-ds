import type { ReactNode } from 'react'

type CarouselEmptyStateProps = {
  className?: string
  message?: ReactNode
}

export function CarouselEmptyState({
  className,
  message = 'Nenhum item disponivel para este carrossel.',
}: CarouselEmptyStateProps) {
  return (
    <div className={className} role="status" aria-live="polite">
      {message}
    </div>
  )
}

export namespace CarouselEmptyState {
  export type Props = CarouselEmptyStateProps
}