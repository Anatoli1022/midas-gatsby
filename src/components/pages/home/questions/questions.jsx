import React from 'react';
import classNames from 'classnames/bind';
import { Accordion } from 'hooks/accordion/accordion';

import { data } from './data';

import styles from './questions.module.scss';

import telegram from '../../../../images/telegram.svg';
import discord from '../../../../images/discord.svg';
import support from '../../../../images/support.svg';

const cx = classNames.bind(styles);

const Questions = () => (
  <section className={cx('questions')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>Frequently asked questions</h2>
      <p className={cx('text')}>
        Everything you need to know about the Midas. Can’t find the answer you’re looking for? Feel
        free to contact me directly via:
      </p>
      <ul className={cx('list-links')}>
        <li className={cx('item')}>
          <a href="#" className={cx('link')}>
            <img src={telegram} alt="Telegram" className={cx('image')} />
            <span>Telegram</span>
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#" className={cx('link')}>
            <img src={discord} alt="Discord" className={cx('image')} />
            <span>Discord</span>
          </a>
        </li>
        <li className={cx('item')}>
          <a href="#" className={cx('link')}>
            <img src={support} alt="Support" className={cx('image')} />
            <span>Support</span>
          </a>
        </li>
      </ul>
      <ul className={cx('list')}>
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </ul>
    </div>
  </section>
);

export default Questions;
