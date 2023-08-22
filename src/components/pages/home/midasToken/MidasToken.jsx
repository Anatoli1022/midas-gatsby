import React from 'react';
import MapsDots from 'hooks/mapsDots';
import SplitColumns from 'hooks/splitColumns';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import styles from './MidasToken.module.scss';
import ellipse from './images/ellipse.svg';
import lightning from './images/lightning.svg';

const cx = classNames.bind(styles);

const MidasToken = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={cx('midas-token')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Midas token utility</h2>
        <div className={cx('content')}>
          <div className={cx('block-text')}>
            <h3 className={cx('content-title')}>Payout Split</h3>
            <p className={cx('text')}>
              10% of rewards earned by Midas platform community is used to{' '}
              <span className={cx('text-span')}> buyback MIDAS token</span> from the open market
            </p>
          </div>
          <div className={cx('block-animation')}>
            <SplitColumns />
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('block-text')}>
            <h3 className={cx('content-title')}>Farming</h3>
            <p className={cx('text')}>
              Midas team will regularly launch farming activities on third party decentralized
              exchanges for community
              <span className={cx('text-span')}> to earn high APR rewards for staking </span>of
              MIDAS token in liquidity pools
            </p>
          </div>
          <div className={cx('block-animation', 'block-animation-maps')}>
            <MapsDots />
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('block-text')}>
            <h3 className={cx('content-title')}>APY Boost</h3>
            <p className={cx('text')}>
              10% of rewards earned by Midas platform community is used
              <span className={cx('text-span')}>to buyback MIDAS token </span> from the open market
            </p>
          </div>
          <div className={cx('block-animation')}>
            <img
              src={lightning}
              loading="lazy"
              aria-hidden="true"
              className={cx(inView ? 'lightning' : null)}
            />
            <div className={cx('ellipses-wrapper')} ref={ref}>
              <img
                src={ellipse}
                loading="lazy"
                aria-hidden="true"
                className={cx(inView ? 'ellipse' : null)}
              />
              <img
                src={ellipse}
                loading="lazy"
                aria-hidden="true"
                className={cx(inView ? 'ellipse' : null)}
              />
              <img
                src={ellipse}
                loading="lazy"
                aria-hidden="true"
                className={cx(inView ? 'ellipse' : null)}
              />
              <img
                src={ellipse}
                loading="lazy"
                aria-hidden="true"
                className={cx(inView ? 'ellipse' : null)}
              />
            </div>
          </div>
        </div>
        <a href="#" className={cx('link')}>
          Learn more &#8594;
        </a>
      </div>
    </section>
  );
};

export default MidasToken;
