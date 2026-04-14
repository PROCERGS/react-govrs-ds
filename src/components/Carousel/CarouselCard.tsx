import { useEffect, useMemo, useState, type TouchEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../Card/Card';
import { Stack, Text } from '../../primitives';
import { breakpoints } from '../../tokens';
import { CarouselEmptyState } from './CarouselEmptyState';
import './CarouselCard.scss';

export type CarouselCardItem = Card.Props & {
  heading?: string;
  text?: string;
  url?: string;
};

export type CarouselCardProps = {
  title?: string;
  description?: string;
  items?: CarouselCardItem[];
  cardVariant?: Card.Variant;
  cardsPerView?: number;
  cardsPerViewTablet?: number;
  cardsPerViewMobile?: number;
  gap?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  circular?: boolean;
  enableSwipe?: boolean;
  noArrowsMobile?: boolean;
  showIndicators?: boolean;
  showArrows?: boolean;
};

const chunkItems = (items: CarouselCardItem[], size: number) => {
  if (!Array.isArray(items) || items.length === 0) return [] as CarouselCardItem[][];
  const safeSize = Math.max(1, size || 1);
  const chunks: CarouselCardItem[][] = [];
  for (let i = 0; i < items.length; i += safeSize) {
    chunks.push(items.slice(i, i + safeSize));
  }
  return chunks;
};

const supportedGapValues = [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 64] as const;

const normalizeGap = (value: number) => {
  return supportedGapValues.reduce((closest, current) => {
    return Math.abs(current - value) < Math.abs(closest - value) ? current : closest;
  }, supportedGapValues[0]);
};

const normalizePerView = (value: number) => {
  return Math.min(Math.max(Math.round(value), 1), 6);
};

export function CarouselCard({
  title,
  description,
  items = [],
  cardVariant,
  cardsPerView = 3,
  cardsPerViewTablet = 2,
  cardsPerViewMobile = 1,
  gap = 16,
  autoplay = false,
  autoplaySpeed = 5000,
  circular = true,
  enableSwipe = true,
  noArrowsMobile = true,
  showIndicators = true,
  showArrows = true,
}: CarouselCardProps) {
  const [perView, setPerView] = useState(cardsPerView);
  const [isSmartphonePortrait, setIsSmartphonePortrait] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const normalizedGap = normalizeGap(gap);
  const normalizedPerView = normalizePerView(perView);

  useEffect(() => {
    const updatePerView = () => {
      const isSmartphonePortrait = window.matchMedia(
        `(max-width: ${breakpoints.smartphonePortraitMax})`,
      ).matches;
      const isIntermediateViewport = window.matchMedia(
        `(max-width: ${breakpoints.tabletLandscapeMax})`,
      ).matches;

      setIsSmartphonePortrait(isSmartphonePortrait);

      if (isSmartphonePortrait) {
        setPerView(cardsPerViewMobile);
        return;
      }

      if (isIntermediateViewport) {
        setPerView(cardsPerViewTablet);
        return;
      }

      setPerView(cardsPerView);
    };

    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, [cardsPerView, cardsPerViewMobile, cardsPerViewTablet]);

  const slides = useMemo(() => chunkItems(items, normalizedPerView), [items, normalizedPerView]);
  const totalSlides = slides.length || 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasArrows = showArrows && totalSlides > 1 && !(noArrowsMobile && isSmartphonePortrait);
  const safeCurrentSlide = Math.min(currentSlide, Math.max(totalSlides - 1, 0));
  const activeItemsCount = Math.max(slides[safeCurrentSlide]?.length ?? normalizedPerView, 1);
  const minSwipeDistance = 50;
  const swipeEnabled = enableSwipe && totalSlides > 1;

  useEffect(() => {
    setCurrentSlide(0);
  }, [perView, items]);

  useEffect(() => {
    if (!autoplay || totalSlides <= 1) return undefined;
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next >= totalSlides) {
          return circular ? 0 : prev;
        }
        return next;
      });
    }, autoplaySpeed);

    return () => window.clearInterval(id);
  }, [autoplay, autoplaySpeed, circular, totalSlides]);

  const goTo = (idx: number) => {
    if (!circular) {
      setCurrentSlide(Math.min(Math.max(idx, 0), totalSlides - 1));
      return;
    }
    const wrapped = ((idx % totalSlides) + totalSlides) % totalSlides;
    setCurrentSlide(wrapped);
  };

  const goPrev = () => goTo(currentSlide - 1);
  const goNext = () => goTo(currentSlide + 1);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!swipeEnabled) return;
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!swipeEnabled) return;
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!swipeEnabled || touchStart == null || touchEnd == null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goNext();
    } else if (isRightSwipe) {
      goPrev();
    }
  };

  if (!items || items.length === 0) {
    return (
      <CarouselEmptyState
        className="carousel-card-placeholder"
        message="Nenhum card foi configurado para este carrossel."
      />
    );
  }

  return (
    <section
      className="carousel-card"
      data-gap={normalizedGap}
      data-per-view={normalizedPerView}
      data-active-items={activeItemsCount}
      aria-roledescription="carousel"
      aria-label={title || 'Carrossel de cards'}
    >
      {(title || description) && (
        <Stack as="header" className="carousel-card-header" gap={1}>
          {title && <h2 className="carousel-card-title">{title}</h2>}
          {description ? <Text className="carousel-card-description">{description}</Text> : null}
        </Stack>
      )}

      <div className={`carousel-card-frame ${hasArrows ? 'carousel-card-frame--with-arrows' : ''}`}>
        {hasArrows && (
          <button
            className="carousel-card-button prev"
            type="button"
            onClick={goPrev}
            aria-label="Slide anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}

        <div
          className="carousel-card-viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="carousel-card-track">
            {slides.map((slideItems, slideIdx) => (
              <div
                key={slideIdx}
                className={`carousel-card-slide ${slideIdx === currentSlide ? 'active' : ''}`}
                role="group"
                aria-label={`Slide ${slideIdx + 1} de ${totalSlides}`}
                aria-hidden={slideIdx !== currentSlide}
              >
                {slideItems.map((item, idx) => {
                  const variant = cardVariant || item?.variant || 'post';
                  return (
                    <div
                      className={`carousel-card-item ${variant === 'icon' ? 'carousel-card-item-icon' : ''}`}
                      key={`${slideIdx}-${idx}`}
                    >
                      <Card
                        title={item?.title || item?.heading || `Card ${idx + 1}`}
                        description={item?.description || item?.text}
                        image={item?.image}
                        imageAlt={item?.imageAlt}
                        href={item?.href || item?.url}
                        variant={variant}
                        size={item?.size}
                        disabled={item?.disabled}
                        itens={item?.itens}
                        bodyImg={item?.bodyImg}
                        bodyImgAlt={item?.bodyImgAlt}
                        acao={item?.acao}
                        onLike={item?.onLike}
                        onShare={item?.onShare}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {hasArrows && (
          <button
            className="carousel-card-button next"
            type="button"
            onClick={goNext}
            aria-label="Proximo slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>

      {showIndicators && totalSlides > 1 && (
        <div className="carousel-card-indicators" aria-hidden>
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-card-indicator ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default CarouselCard;

export namespace CarouselCard {
  export type Props = CarouselCardProps;
  export type Item = CarouselCardItem;
}
