import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import SplitColumns from './animationСomponents/splitColumns';
import ButtonAnimation from './animationСomponents/buttonAnimation';
import Diagram from './animationСomponents/diagram/Diagram';

const cx = classNames.bind(styles);

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <h1 className={cx('title')} ref={ref}>
          Unlock the full potential of Midas ecosystem
          <span className={cx('title-span')}>Buy midas token</span>
        </h1>
        <div className={cx('content-wrapper')}>
          <div className={cx('content')}>
            <SplitColumns inView={inView} />
            <div className={cx('text-wrapper')}>
              <p className={cx('text')}>Stake MIDAS token and earn 30% APY</p>
              <a href="#" className={cx('link')}>
                Read more
              </a>
            </div>
          </div>
          <div className={cx('content')}>
            <ButtonAnimation inView={inView} />
            <div className={cx('text-wrapper')}>
              <p className={cx('text')}>Get increased APY by getting rewards in MIDAS</p>
              <a href="#" className={cx('link')}>
                How it work?
              </a>
            </div>
          </div>
          <div className={cx('content')}>
            <Diagram inView={inView} />
            <div className={cx('text-wrapper')}>
              <p className={cx('text')}>Buybacks & burns supporting MIDAS growth</p>
              <a href="#" className={cx('link')}>
                How it work?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
