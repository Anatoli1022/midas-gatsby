import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './mapsDots.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MapsDots = () => {
  const [animationClass, setAnimationClass] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const AnimationEnd = () => {
    setAnimationClass(true);
  };

  return (
    <div className={cx('maps')} ref={ref}>
      <div className={cx('background')}></div>
      <div className={cx('dots-wrapper')}>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
      </div>
      <div className={cx('dots-wrapper')}>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        {' '}
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
      </div>
      <div className={cx('dots-wrapper')}>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots-yellow')}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        {' '}
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        {' '}
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots-yellow')}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        {' '}
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
      <div className={cx('dots-wrapper')}>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots-yellow')}></span>
        <span
          className={cx('dots', inView ? 'animation-first' : null)}
          onAnimationEnd={AnimationEnd}
        ></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
        <span className={cx('dots', animationClass ? 'animation-second' : null)}></span>
      </div>
    </div>
  );
};

export default MapsDots;
