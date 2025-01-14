import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './embla.module.css';

// PropType 정의
interface PropType {
  slides?: number[];
}

const EmblaCarousel: React.FC<PropType> = ({ slides = [1, 2, 3, 4, 5] }) => {
  // 기본 옵션 정의
  const options = {
    loop: true,
    speed: 300,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={styles['embla']}>
      <div className={styles['embla__viewport']} ref={emblaRef}>
        <div className={styles['embla__container']}>
          {slides.map((index) => (
            <div className={styles['embla__slide']} key={index}>
              <div className={styles['embla__slide__number']}>{index}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['embla__dots']}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${styles['embla__dot']} ${
              index === selectedIndex ? styles['embla__dot--selected'] : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
