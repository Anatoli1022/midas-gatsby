import React, { useState } from 'react';

import styles from './ButtonAnimation.module.scss';
import classNames from 'classnames/bind';

import btc from './images/btc.svg';
import midas from './images/midas.svg';

const cx = classNames.bind(styles);

const ButtonAnimation = ({ inView }) => {
  return (
    <>
      <div className={cx('animation-get-api')}>
        <img src={btc} alt="" className={cx('btc')} loading="eager" aria-hidden="true" />
        <div className={cx('button', inView ? 'animation-button' : null)}>
          <div className={cx('ellipse-button', inView ? 'ellipse-animation' : null)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_1_2199)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.25 3.00016C11.25 2.4939 10.8396 2.0835 10.3334 2.0835H10.2799C9.85146 2.0835 9.47376 2.36452 9.35065 2.77488L9.00806 3.91683H10.3334C10.8396 3.91683 11.25 3.50642 11.25 3.00016ZM12.5701 3.91683C12.6861 3.63415 12.75 3.32462 12.75 3.00016C12.75 1.66547 11.6681 0.583496 10.3334 0.583496H10.2799C9.27519 0.583496 8.38005 1.19047 8.00004 2.10268C7.62003 1.19047 6.72489 0.583496 5.72019 0.583496H5.66671C4.33202 0.583496 3.25004 1.66547 3.25004 3.00016C3.25004 3.32462 3.31398 3.63415 3.42995 3.91683H2.33337C1.36688 3.91683 0.583374 4.70033 0.583374 5.66683C0.583374 6.63333 1.36687 7.41683 2.33337 7.41683H13.6667C14.6332 7.41683 15.4167 6.63333 15.4167 5.66683C15.4167 4.70033 14.6332 3.91683 13.6667 3.91683H12.5701ZM5.66671 3.91683H6.99202L6.64943 2.77488C6.52632 2.36452 6.14862 2.0835 5.72019 2.0835H5.66671C5.16045 2.0835 4.75004 2.4939 4.75004 3.00016C4.75004 3.50642 5.16045 3.91683 5.66671 3.91683ZM4.28722 7.91671L4.38099 7.91683H11.6191L11.7129 7.91671C12.095 7.91597 12.4602 7.91527 12.7774 8.02626C13.3376 8.22226 13.7779 8.66265 13.9739 9.22279C14.0849 9.53997 14.0842 9.90523 14.0835 10.2873L14.0834 10.3811L14.0834 10.5301C14.0839 11.5824 14.0842 12.3017 13.8729 12.9054C13.496 13.9826 12.6491 14.8295 11.5719 15.2064C10.9683 15.4176 10.249 15.4173 9.19662 15.4169L9.04766 15.4168H6.95242L6.80346 15.4169C5.7511 15.4173 5.03181 15.4176 4.42816 15.2064C3.35099 14.8295 2.50407 13.9826 2.12714 12.9054C1.91592 12.3017 1.91622 11.5824 1.91667 10.5301L1.91671 10.3811L1.91659 10.2873C1.91585 9.90523 1.91515 9.53997 2.02613 9.22279C2.22213 8.66265 2.66253 8.22226 3.22266 8.02626C3.53985 7.91527 3.90511 7.91597 4.28722 7.91671Z"
                  fill="white"
                  className={cx(inView ? 'image-gift' : null)}
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2199">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <img src={midas} alt="" className={cx('midas')} loading="eager" aria-hidden="true" />
      </div>
    </>
  );
};

export default ButtonAnimation;
