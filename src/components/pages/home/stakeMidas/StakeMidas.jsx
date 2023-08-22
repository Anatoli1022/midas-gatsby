import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import styles from './StakeMidas.module.scss';

import wallet from '../../../../images/wallet.svg';
import users from '../../../../images/users.svg';
import layers from '../../../../images/layers.svg';
const cx = classNames.bind(styles);

const StakeMidas = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [usersNum, setUsersNum] = useState(0);
  const [midas, setMidas] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  if (inView && currentNumber < 30) {
    setTimeout(() => {
      setCurrentNumber(currentNumber + 1);
    }, 100);
  }

  if (inView && usersNum < 2600) {
    setTimeout(() => {
      setUsersNum(usersNum + 100);
    }, 100);
  }
  if (inView && midas < 1800000) {
    setTimeout(() => {
      setMidas(midas + 75000);
    }, 100);
  }

  return (
    <section className={cx('stake-midas')}>
      <div className={cx('container', 'container-medium')}>
        <h2 className={cx('title')}>Stake Midas token and</h2>
        <p className={cx('promo')}>Earn 30% APY</p>
        <p className={cx('text')}>
          <span className={cx('text-span')}> MIDAS token</span> is based on Fantom network with
          total supply of <span className={cx('text-span')}> 5,000,000 tokens</span> generating
          rewards for its holders.
        </p>
        <div className={cx('content-wrapper')}>
          <span className={cx('over-text')}>over</span>

          <ul className={cx('list')}>
            <li className={cx('item')}>
              <div className={cx('wrapper-image', 'first-wrapper')}>
                <img
                  src={wallet}
                  alt="wallet"
                  className={cx('image')}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
              <div className={cx('item-container')} ref={ref}>
                <span className={cx('item-number')}>${currentNumber} million</span>
                <p className={cx('item-text')}>Are staking MIDAS tokens</p>
              </div>
            </li>
            <li className={cx('item')}>
              <div className={cx('wrapper-image', 'second-wrapper')}>
                <img src={users} alt="" className={cx('image')} />
              </div>
              <div className={cx('item-container')}>
                <span className={cx('item-number')}>{usersNum} users </span>
                <p className={cx('item-text')}>Are staking MIDAS tokens</p>
              </div>
            </li>
            <li className={cx('item')}>
              <div className={cx('wrapper-image', 'third-wrapper')}>
                <img src={layers} alt="" className={cx('image')} />
              </div>
              <div className={cx('item-container')}>
                <span className={cx('item-number')}>{midas}</span>
                <p className={cx('item-text')}>Total staked MIDAS</p>
              </div>
            </li>
          </ul>
          <div className={cx('ellipse')}> </div>
        </div>
      </div>
    </section>
  );
};

export default StakeMidas;
