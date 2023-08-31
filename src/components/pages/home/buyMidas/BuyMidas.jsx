import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import classNames from 'classnames/bind';
import styles from './BuyMidas.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const cx = classNames.bind(styles);

const ByMidas = () => {
  const parallaxFirst = Parallax({
    speed: 55,
  });
  const parallaxSecond = Parallax({
    speed: 55,
  });
  const parallaxThird = Parallax({
    speed: 55,
  });
  return (
    <section className={cx('buy-midas')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>How to buy Midas token</h2>
        <div className={cx('content')}>
          <div className={cx('content-wrapper')}>
            <div className={cx('wrapper-text')}>
              <span className={cx('step')}>Step I</span>
              <h3 className={cx('title-item')}>Make a deposit</h3>
              <p className={cx('text')}>For clarity, we will show examples with FTM</p>
              <p className={cx('description')}>
                Make a deposit in supported crypto assets (20+) on Midas platform
              </p>
            </div>
            <div className={cx('content-image')}>
              {' '}
              <div ref={parallaxFirst.ref}>
                <StaticImage src="./images/deposit.jpg" alt="" className={cx('image')} />
              </div>{' '}
            </div>
          </div>
          <div className={cx('content-wrapper')}>
            <div className={cx('wrapper-text')}>
              <span className={cx('step')}>Step II</span>
              <h3 className={cx('title-item')}>Open Midas token share</h3>
              <p className={cx('description')}>Open MIDAS token share and click on “Swap” button</p>
            </div>
            <div className={cx('content-image')}>
              <div ref={parallaxSecond.ref}>
                {' '}
                <StaticImage src="./images/token.jpg" alt="" className={cx('image')} />
              </div>
            </div>
          </div>
          <div className={cx('content-wrapper')}>
            <div className={cx('wrapper-text')}>
              <span className={cx('step')}>Step III</span>
              <h3 className={cx('title-item')}>Make a swap</h3>

              <p className={cx('description')}>
                Swap your crypto to MIDAS token and start earning 30% APY{' '}
              </p>
              <a href="" className={cx('link', 'desktop-link')}>
                Go to platform &rarr;
              </a>
            </div>
            <div className={cx('content-image')}>
              <div ref={parallaxThird.ref}>
                {' '}
                <StaticImage src="./images/swap.jpg" alt="" className={cx('image')} />
              </div>
            </div>
            <a href="" className={cx('link', 'mobile-link')}>
              Go to platform &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ByMidas;
