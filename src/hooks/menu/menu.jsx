import React, { useState, useEffect } from 'react';

import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import Link from 'components/shared/link';

const cx = classNames.bind(styles);

const Menu = () => {
  const [menu, setMenu] = useState('');

  const updateMenu = () => {
    if (menu === '') {
      setMenu('active');
    } else {
      setMenu('');
    }
  };

  useEffect(() => {
    if (menu === 'active') {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menu]);

  return (
    <div>
      <button className={cx('menu', { active: menu === 'active' })} onClick={updateMenu}>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
      </button>
      <nav className={cx('navigation', { active: menu === 'active' })}>
        <ul className={cx('list')}>
          <li>
            <Link to="" className={cx('item-link')} onClick={updateMenu}>
              Platform
            </Link>
          </li>
          <li>
            <Link to="" className={cx('item-link')} onClick={updateMenu}>
              Midas Coin
            </Link>
          </li>
          <li>
            <Link to="" className={cx('item-link')} onClick={updateMenu}>
              YAPs
            </Link>
          </li>
          <li>
            <Link to="" className={cx('item-link')} onClick={updateMenu}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="" className={cx('item-link')} onClick={updateMenu}>
              Aurielien Solamon
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
