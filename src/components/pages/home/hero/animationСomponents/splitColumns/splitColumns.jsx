import React, { useState } from 'react';

import styles from './splitColumns.module.scss';
import classNames from 'classnames/bind';

import fire from './images/fire.svg';

const cx = classNames.bind(styles);

const SplitColumns = ({ inView }) => {
  const columnCount = 10;
  const animationDelayStep = 0.1; // Adjust this as needed

  const getColumnStyle = (index) => {
    const animationDelay = index * animationDelayStep + 's';
    return { animationDelay };
  };

  return (
    <>
      <img src={fire} alt="" className={cx('sale')} />
      <div className={cx('columns-wrapper')}>
        {[...Array(columnCount)].map((_, index) => (
          <div
            key={index}
            className={cx('column', inView ? 'animation' : null)}
            style={getColumnStyle(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default SplitColumns;
