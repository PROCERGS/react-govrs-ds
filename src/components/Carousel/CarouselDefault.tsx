import { useEffect, useState, type TouchEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Stack, Text } from '../../primitives';
import { breakpoints } from '../../tokens';
import { CarouselEmptyState } from './CarouselEmptyState';
import './CarouselDefault.scss'


export type CarouselDefaultItem = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
};

export type CarouselDefaultProps = {
  data?: CarouselDefaultItem[];
  items?: CarouselDefaultItem[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  circular?: boolean;
  width?: 'default' | 'full';
  indicators?: 'default' | 'inside' | 'numbers';
  enableSwipe?: boolean;
  noArrowsMobile?: boolean;
};

const getYouTubeId = (url?: string) => {
  const match = url?.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)(["&?/\s]?)([^"&?/\s]{11})/,
  );
  if (match && match[2]) return match[2];
  const legacyMatch = url?.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,
  );
  return legacyMatch ? legacyMatch[1] : null;
};

const getVimeoId = (url?: string) => {
  const match = url?.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

export function CarouselDefault({
  data,
  items: itemsProp,
  autoplay = true,
  autoplaySpeed = 3000,
  circular = true,
  width = 'default',
  indicators = 'default',
  enableSwipe = true,
  noArrowsMobile = true,
}: CarouselDefaultProps) {
  const items = Array.isArray(data)
    ? data
    : Array.isArray(itemsProp)
      ? itemsProp
      : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSmartphonePortrait, setIsSmartphonePortrait] = useState(false);

  useEffect(() => {
    const updateViewportState = () => {
      setIsSmartphonePortrait(
        window.matchMedia(`(max-width: ${breakpoints.smartphonePortraitMax})`).matches,
      );
    };

    updateViewportState();
    window.addEventListener('resize', updateViewportState);
    return () => window.removeEventListener('resize', updateViewportState);
  }, []);

  useEffect(() => {
    if (!autoplay || items.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % items.length;
        if (!circular && nextIndex === 0) {
          window.clearInterval(interval);
          return prev;
        }
        return nextIndex;
      });
    }, autoplaySpeed);

    return () => window.clearInterval(interval);
  }, [autoplay, autoplaySpeed, items.length, circular]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning || index < 0 || index >= items.length) return;
    setPrevIndex(currentIndex);
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setCurrentIndex(index);
    window.setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    if (!circular && currentIndex === 0) return;
    setPrevIndex(currentIndex);
    setSlideDirection('left');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    window.setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    if (!circular && currentIndex === items.length - 1) return;
    setPrevIndex(currentIndex);
    setSlideDirection('right');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    window.setTimeout(() => setIsTransitioning(false), 500);
  };

  const minSwipeDistance = 50;
  const swipeEnabled = enableSwipe && items.length > 1;

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!swipeEnabled) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!swipeEnabled) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!swipeEnabled) return;
    if (touchStart == null || touchEnd == null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!items || items.length === 0) {
    return (
      <CarouselEmptyState
        className="carousel-placeholder"
        message="Nenhum item foi configurado para este carrossel."
      />
    );
  }

  const isPrevDisabled = !circular && currentIndex === 0;
  const isNextDisabled = !circular && currentIndex === items.length - 1;
  const shouldShowArrows = items.length > 1 && !(noArrowsMobile && isSmartphonePortrait);

  return (
    <div className="carousel-container carousel-default" aria-roledescription="carousel" aria-label="Carrossel padrão">
      <div className="carousel-wrapper">
        {shouldShowArrows ? (
          <button
            className={`carousel-button carousel-button-prev icon-${width}`}
            type="button"
            onClick={goToPrevious}
            disabled={isPrevDisabled}
            aria-label="Slide anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        ) : null}

        <div
          className={`carousel-content carousel-width-${width}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            const isPrevious = index === prevIndex && isTransitioning;
            const shouldShow = isActive || isPrevious;
            const slideOutDirection =
              slideDirection === 'right' ? 'left' : 'right';

            let slideClass = 'carousel-slide';
            if (isActive) {
              slideClass = `carousel-slide active slide-in-${slideDirection}`;
            } else if (isPrevious) {
              slideClass = `carousel-slide previous slide-out-${slideOutDirection}`;
            }

            return (
              <div
                key={index}
                className={slideClass}
                aria-hidden={!shouldShow}
              >
                {item.videoUrl ? (
                  (() => {
                    const youtubeId = getYouTubeId(item.videoUrl);
                    const vimeoId = getVimeoId(item.videoUrl);

                    if (youtubeId) {
                      return loadedVideos[index] ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                          title={item.title || `YouTube video ${index + 1}`}
                          className="carousel-video carousel-iframe"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="carousel-video-thumbnail"
                          onClick={() =>
                            setLoadedVideos((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          role="button"
                          tabIndex={0}
                          aria-label={item.title ? `Reproduzir vídeo ${item.title}` : 'Reproduzir vídeo'}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setLoadedVideos((prev) => ({
                                ...prev,
                                [index]: true,
                              }));
                            }
                          }}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                            alt={item.title || `Video thumbnail ${index + 1}`}
                            className="carousel-thumbnail-image"
                          />
                          <span className="carousel-play-overlay" aria-hidden>
                            <span className="play-icon"></span>
                          </span>
                        </div>
                      );
                    } else if (vimeoId) {
                      return loadedVideos[index] ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
                          title={item.title || `Vimeo video ${index + 1}`}
                          className="carousel-video carousel-iframe"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="carousel-video-thumbnail"
                          onClick={() =>
                            setLoadedVideos((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          role="button"
                          tabIndex={0}
                          aria-label={item.title ? `Reproduzir vídeo ${item.title}` : 'Reproduzir vídeo'}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setLoadedVideos((prev) => ({
                                ...prev,
                                [index]: true,
                              }));
                            }
                          }}
                        >
                          <div className="carousel-thumbnail-placeholder">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            <span>Vimeo Video</span>
                          </div>
                          <span className="carousel-play-overlay" aria-hidden>
                            <span className="play-icon"></span>
                          </span>
                        </div>
                      );
                    }

                    return (
                      <video
                        src={item.videoUrl}
                        controls
                        className="carousel-video"
                        aria-label={item.title || `Video ${index + 1}`}
                      >
                        <track kind="captions" />
                        Your browser does not support the video tag.
                      </video>
                    );
                  })()
                ) : item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title || `Slide ${index + 1}`}
                    className="carousel-image"
                  />
                ) : (
                  <div className="carousel-image-placeholder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>Sem imagem ou vídeo</span>
                  </div>
                )}
                {(item.title || item.description) && (
                  <Stack className="carousel-text" gap={1}>
                    {item.title ? <h3 className="carousel-title">{item.title}</h3> : null}
                    {item.description ? <Text className="carousel-description">{item.description}</Text> : null}
                  </Stack>
                )}
              </div>
            );
          })}
        </div>

        {shouldShowArrows ? (
          <button
            className={`carousel-button carousel-button-next icon-${width}`}
            type="button"
            onClick={goToNext}
            disabled={isNextDisabled}
            aria-label="Próximo slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        ) : null}
      </div>

      <div className={`carousel-indicators carousel-indicators-${indicators}`}>
        {indicators === 'numbers' ? (
          <div className="carousel-indicator-numbers">
            {currentIndex + 1} / {items.length}
          </div>
        ) : (
          items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CarouselDefault;

export namespace CarouselDefault {
  export type Props = CarouselDefaultProps;
  export type Item = CarouselDefaultItem;
}
