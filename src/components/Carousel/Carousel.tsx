import { CarouselDefault, type CarouselDefaultProps } from './CarouselDefault';
import { CarouselCard, type CarouselCardProps } from './CarouselCard';

export type CarouselVariant = 'default' | 'card';

export type CarouselProps =
  | ({ variante?: 'default' | undefined } & CarouselDefaultProps)
  | ({ variante: 'card' } & CarouselCardProps);

export function Carousel({ variante = 'default', ...props }: CarouselProps) {
  const normalizedVariant = (variante || 'default').toString().toLowerCase() as CarouselVariant;
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
