import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';
import ellipseBlue from './images/ellipse-blue.svg';
import ellipseViolet from './images/ellipse-violet.svg';
import classNames from 'classnames/bind';
import styles from './Support.module.scss';
const cx = classNames.bind(styles);

const Support = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [back, setBack] = useState(0);
  const [ellipseHeight, setEllipseHeight] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  if (
    (inView && currentNumber < 4824884) ||
    (inView && back < 63884) ||
    (inView && ellipseHeight <= 512)
  ) {
    setTimeout(() => {
      setCurrentNumber(currentNumber + 86158);
      setBack(back + 2279);
      setEllipseHeight(ellipseHeight + 8);
    }, 60);
  }

  return (
    <section className={cx('support')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>How we support Midas token</h2>
        <div className={cx('wrapper')} ref={ref}>
          <div className={cx('content-number')}>
            <span className={cx('numbers')}>$ {currentNumber}</span>
            <p className={cx('text')}>Liquidity on DEX</p>
            <div
              className={cx('ellipse-wrapper', 'ellipse-left')}
              style={{ height: `${ellipseHeight}px` }}
            >
              <img
                src={ellipseViolet}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('ellipse', 'ellipse-violet')}
              />
            </div>
          </div>
          <div className={cx('content-number')}>
            <span className={cx('numbers')}>{back}</span>
            <p className={cx('text')}>Bought back MIDAS tokens</p>
            <div
              className={cx('ellipse-wrapper', 'ellipse-right')}
              style={{ height: `${ellipseHeight}px` }}
            >
              <img
                src={ellipseBlue}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('ellipse', 'ellipse-blue')}
              />
            </div>
          </div>
          <div className={cx('background')}></div>
        </div>
      </div>
    </section>
  );
};

export default Support;
