import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './splitColumns.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SplitColumns = ({ inView }) => {
  return (
    <div className={cx('columns-wrapper')}>
      <div className={cx('column', inView ? 'animation' : null)}>
        <span className={cx('text')}>Feb</span>
      </div>
      <div className={cx('column', inView ? 'animation' : null)}>
        <span className={cx('text')}>Mar</span>
      </div>
      <div className={cx('column', inView ? 'animation' : null)}>
        <span className={cx('text')}>Apr</span>
      </div>
      <div className={cx('column', inView ? 'animation' : null)}>
        <span className={cx('text')}>Jun</span>
      </div>
      <div className={cx('column', inView ? 'animation' : null)}>
        <span className={cx('text')}>Jul</span>
      </div>
    </div>
  );
};

export default SplitColumns;
