import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import styles from './TokenMetrics.module.scss';

import border from './images/border.svg';
import fox from './images/fox.svg';
import chain from './images/chain.svg';
const cx = classNames.bind(styles);

const TokenMetrics = () => {
  const [volume, setVolume] = useState(0);
  const [cap, setCap] = useState(0);
  const [supply, setSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  if (inView && (volume < 18324 || cap < 47572397 || supply < 27518 || price < 20)) {
    setTimeout(() => {
      const newVolume = volume + 1000;
      const newCap = cap + 1585741;
      const newSupply = supply + 2000;
      const newPrice = price + 1;

      if (newVolume < 183241) {
        setVolume(newVolume);
      }
      if (newCap < 47572397) {
        setCap(newCap);
      }
      if (newSupply < 275183) {
        setSupply(newSupply);
      }
      if (newPrice < 20) {
        setPrice(newPrice);
      }
    }, 120);
  }

  return (
    <section className={cx('token-metrics')}>
      <div className={cx('container')}>
        <h2 className={cx('title')} ref={ref}>
          Midas token metrics
        </h2>
        <div className={cx('content')}>
          <div>
            <div>
              <span className={cx('span-number')}>${cap.toLocaleString()}</span>
              <p className={cx('text')}>Market cap</p>
            </div>
            <div className={cx('wrapper-number')}>
              <div>
                <span className={cx('span-number')}>${volume.toLocaleString()}</span>
                <p className={cx('text')}>Volume (24 hours)</p>
              </div>
              <div>
                <span className={cx('span-number')}> {supply.toLocaleString()}</span>
                <p className={cx('text')}>Circulation supply</p>
              </div>
            </div>
          </div>
          <div className={cx('container-image')}>
            <div className={cx('wrapper-image', inView ? 'wrapper-image-animation' : null)}>
              <img src={border} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
            </div>
            <div className={cx('wrapper-text')}>
              <span className={cx('span-number')}>${price.toLocaleString()}</span>
              <p className={cx('text-image')}>Current price</p>
            </div>
          </div>
          <div className={cx('wrapper-links')}>
            <a href="" className={cx('link')}>
              <img src={fox} alt="" loading="lazy" aria-hidden="true" />{' '}
              <p className={cx('text-link')}>Add to Metamask &rarr;</p>
            </a>
            <a href="" aria-hidden="true" className={cx('link')}>
              <img src={chain} alt="" />
              <p className={cx('text-link')}>Smart contract &rarr;</p>
            </a>
          </div>
          <div className={cx('background')}></div>
        </div>
      </div>
    </section>
  );
};

export default TokenMetrics;
