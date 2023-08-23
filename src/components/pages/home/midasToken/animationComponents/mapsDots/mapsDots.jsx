import React, { useState } from 'react';

import styles from './mapsDots.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MapsDots = ({ inView }) => {
  const [animationClass, setAnimationClass] = useState(false);

  const AnimationEnd = () => {
    setAnimationClass(true);
  };

  return (
    <div className={cx('maps')}>
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
