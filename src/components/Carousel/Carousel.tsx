import { CarouselDefault, type CarouselDefaultProps } from './CarouselDefault';
import { CarouselCard, type CarouselCardProps } from './CarouselCard';

export type CarouselVariant = 'default' | 'card';

type CarouselDefaultVariantProps = CarouselDefaultProps & {
  variant?: 'default';
  /** @deprecated Use variant instead. */
  variante?: 'default';
};

type CarouselCardVariantProps = CarouselCardProps & {
  variant?: 'card';
  /** @deprecated Use variant instead. */
  variante?: 'card';
};

export type CarouselProps = CarouselDefaultVariantProps | CarouselCardVariantProps;

export function Carousel({ variant, variante, ...props }: CarouselProps) {
  const normalizedVariant = (variant ?? variante ?? 'default')
    .toString()
    .toLowerCase() as CarouselVariant;
  const isCardVariant = normalizedVariant === 'card';

  if (isCardVariant) {
    return <CarouselCard {...(props as CarouselCardProps)} />;
  }

  return <CarouselDefault {...(props as CarouselDefaultProps)} />;
}

export default Carousel;

export namespace Carousel {
  export type Props = CarouselProps;
  export type Variant = CarouselVariant;
}
