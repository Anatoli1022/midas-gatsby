import classNames from 'classnames/bind';
import React from 'react';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className={cx('container')}>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <h4 className={cx('title')}>Products</h4>
          <a href="" className={cx('link')}>
            Platform
          </a>
          <a href="" className={cx('link')}>
            Swap
          </a>
          <a href="" className={cx('link')}>
            Yield Automated Strategies
          </a>
        </li>
        <li className={cx('item')}>
          <h4 className={cx('title')}>Resources</h4>
          <a href="" className={cx('link')}>
            Blog
          </a>
          <a href="" className={cx('link')}>
            Community
          </a>
          <a href="" className={cx('link')}>
            Earn Save Invest Repeat
          </a>
        </li>
        <li className={cx('item')}>
          <h4 className={cx('title')}>Help</h4>
          <a href="" className={cx('link')}>
            Contacts
          </a>
          <a href="" className={cx('link')}>
            Support
          </a>
          <a href="" className={cx('link')}>
            User greement
          </a>
        </li>
        <li className={cx('item')}>
          <h4 className={cx('title')}>Buy Midas coin</h4>
          <a href="" className={cx('link')}>
            Spiritswap
          </a>

          <a href="" className={cx('link')}>
            User greement
          </a>
        </li>
        <li className={cx('item')}>
          <h4 className={cx('title-info', 'title')}>MDF AG</h4>
          <p href="" className={cx('text')}>
            Felsenstrasse 62, 8832, Wollerau, Switzerland
          </p>

          <span href="" className={cx('span')}>
            CHE-323.398.672
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
