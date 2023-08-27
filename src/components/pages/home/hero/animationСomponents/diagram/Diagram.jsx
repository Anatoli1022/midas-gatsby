import React from 'react';
import styles from './Diagram.module.scss';
import classNames from 'classnames/bind';

import midas from './images/midas.svg';
import diagram from './images/diagram.svg';

const cx = classNames.bind(styles);

const Diagram = ({ inView }) => {
  return (
    <div className={cx('diagram')}>
      <img src={midas} alt="" loading="eager" aria-hidden="true" className={cx('midas')} />
      <div className={cx('diagram-wrapper', inView ? 'diagram-animation' : null)}>
        <img src={diagram} alt="" className={cx('diagram-image')} />
      </div>
    </div>
  );
};

export default Diagram;
