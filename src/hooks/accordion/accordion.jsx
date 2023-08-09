import React from 'react';
import styles from './accordion.module.scss';
import classNames from 'classnames/bind';
import useOpen from 'hooks/open/open';

const cx = classNames.bind(styles);

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpen(false);

  return (
    <li className={cx('item', { active: isOpen == true })}>
      <Title question={section.question} isOpen={isOpen} toggle={toggle} />
      <Text text={section.text} />
    </li>
  );
};

export const Title = ({ question, toggle }) => {
  return (
    <div className={cx('title-wrapper')} onClick={toggle}>
      <h3 className={cx('item-title')}>{question}</h3>
      <div className={cx('image-wrapper')}>
        <svg
          className={cx('image')}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.303 14.3029L9.09708 13.0971C7.81195 11.8119 7.16939 11.1694 7.12597 10.6177C7.0883 10.139 7.28206 9.67123 7.64717 9.35939C8.06797 9 8.97669 9 10.7941 9H13.2059C15.0234 9 15.9321 9 16.3529 9.35939C16.718 9.67123 16.9118 10.139 16.8741 10.6177C16.8307 11.1694 16.1881 11.8119 14.903 13.0971L13.6971 14.3029L13.6971 14.3029C13.1031 14.897 12.806 15.194 12.4636 15.3053C12.1623 15.4032 11.8378 15.4032 11.5365 15.3053C11.194 15.194 10.897 14.897 10.303 14.3029Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export const Text = ({ text }) => {
  return (
    <>
      {text.map((e) => {
        return <p className={cx('item-text')}>{e}</p>;
      })}
    </>
  );
};
