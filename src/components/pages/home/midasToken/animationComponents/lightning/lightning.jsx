import React, { useState } from 'react';

import styles from './lightning.module.scss';
import classNames from 'classnames/bind';

import ellipse from './images/ellipse.svg';
import lightning from './images/lightning.svg';

const cx = classNames.bind(styles);

const Lightning = ({ inView }) => {
  return (
    <div className={cx('block-animation')}>
      <img
        src={lightning}
        loading="lazy"
        aria-hidden="true"
        className={cx(inView ? 'lightning' : null)}
      />
      <div className={cx('ellipses-wrapper')}>
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
  );
};

export default Lightning;
