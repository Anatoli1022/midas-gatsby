import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from 'hooks/menu/menu';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <div className={cx('navigation')}>
          <div className={cx('left-block')}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="64"
                viewBox="0 0 56 64"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.875 21L0 43H41L35.875 21ZM5.125 21L17.0791 29.998L0 43L5.125 21Z"
                  fill="white"
                />
              </svg>
            </a>
            <ul className={cx('list')}>
              <li>
                <Link to="/" className={cx('link')}>
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/" className={cx('link')}>
                  Midas Coin
                </Link>
              </li>
              <li>
                <Link to="/" className={cx('link')}>
                  YAPs
                </Link>
              </li>
              <li>
                <Link to="/" className={cx('link')}>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className={cx('link')}>
              Aurielien Solamon
            </Link>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
